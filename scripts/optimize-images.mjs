import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "public/assets/optimized");
const settings = JSON.parse(await readFile(join(root, "config/image-settings.json"), "utf8"));
const widths = [...settings.imageSizes, ...settings.deviceSizes];
const manifest = {};
const generated = new Set();
await mkdir(output, { recursive: true });

// Use PNG masters where available and retain every source's native resolution.
// Responsive variants serve the static site without an image service.
for (const folder of ["design", "process"]) {
  const sources = (await readdir(join(root, "public/assets", folder)))
    .filter(name => name.endsWith(".webp"))
    .sort();
  for (const name of sources) {
    const original = join(root, "public/assets", `${basename(name, ".webp")}.png`);
    const input = folder === "design" && existsSync(original)
      ? original : join(root, "public/assets", folder, name);
    const source = await readFile(input);
    const metadata = await sharp(source).metadata();
    const maxWidth = metadata.autoOrient.width;
    if (!maxWidth) throw new Error(`Missing image dimensions: ${input}`);
    const minWidth = name === "veda-logo.webp" ? 48 : name === "worker-reference.webp" ? 160 : 256;
    const sizes = [...new Set([...widths.filter(width => width >= minWidth && width <= maxWidth), maxWidth])].sort((a, b) => a - b);
    const webp = name === "veda-logo.webp" ? { lossless: true, effort: settings.webp.effort } : settings.webp;
    const hash = createHash("sha256").update(source).update(JSON.stringify({ webp, version: 2 })).digest("hex").slice(0, 12);
    const variants = {};
    for (const width of sizes) {
      const filename = `${basename(name, ".webp")}-${hash}-${width}.webp`;
      generated.add(filename);
      if (!existsSync(join(output, filename))) {
        if (metadata.format === "webp" && width === maxWidth && !metadata.orientation) {
          // Reuse existing full-size WebPs without another lossy encode.
          await writeFile(join(output, filename), source);
        } else {
          await sharp(source).autoOrient().resize({ width, withoutEnlargement: true })
            .webp(webp).toFile(join(output, filename));
        }
      }
      variants[width] = `/assets/optimized/${filename}`;
    }
    manifest[`/assets/${folder}/${name}`] = variants;
    if (folder === "design" && input === original) {
      // Sitemap and structured-data URLs also use the full-quality WebPs.
      const destination = join(root, "public/assets/design", name);
      const fullSize = await readFile(join(root, "public", variants[maxWidth]));
      if (!(await readFile(destination)).equals(fullSize)) await writeFile(destination, fullSize);
    }
  }
}

// Prune only obsolete files in this script's dedicated generated directory.
for (const entry of await readdir(output, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".webp") && !generated.has(entry.name)) {
    await rm(join(output, entry.name), { force: true });
  }
}
const manifestPath = join(root, "config/image-manifest.json");
const content = `${JSON.stringify(manifest, null, 2)}\n`;
if (!existsSync(manifestPath) || await readFile(manifestPath, "utf8") !== content) {
  await writeFile(manifestPath, content);
}
console.log(`Prepared ${generated.size} responsive WebP variants for ${Object.keys(manifest).length} images.`);
