import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "public/assets/optimized");
const widths = [48, 64, 96, 128, 160, 256, 360, 480, 640, 800, 960, 1200, 1536];
const quality = 78;
const manifest = {};
const generated = new Set();
await mkdir(output, { recursive: true });

// Keep the full-resolution originals for future artwork updates. Only generated
// variants are used by next/image; no image service is needed on the static host.
for (const folder of ["design", "process"]) {
  const sources = (await readdir(join(root, "public/assets", folder)))
    .filter(name => name.endsWith(".webp") && (folder === "design" || !name.endsWith("-v2.webp")))
    .sort();
  for (const name of sources) {
    const original = join(root, "public/assets", `${basename(name, ".webp")}.png`);
    const input = folder === "design" && existsSync(original)
      ? original : join(root, "public/assets", folder, name);
    const source = await readFile(input);
    const metadata = await sharp(source).metadata();
    const maxWidth = name === "veda-logo.webp" ? 160 : name === "worker-reference.webp" ? 640 : metadata.width;
    if (!maxWidth) throw new Error(`Missing image dimensions: ${input}`);
    const minWidth = name === "veda-logo.webp" ? 48 : name === "worker-reference.webp" ? 160 : 256;
    const sizes = [...new Set([...widths.filter(width => width >= minWidth && width <= maxWidth), Math.min(maxWidth, widths.at(-1))])];
    const hash = createHash("sha256").update(source).update(`webp:${quality}:v1`).digest("hex").slice(0, 12);
    const variants = {};
    for (const width of sizes) {
      const filename = `${basename(name, ".webp")}-${hash}-${width}.webp`;
      generated.add(filename);
      if (!existsSync(join(output, filename))) {
        await sharp(source).rotate().resize({ width, withoutEnlargement: true })
          .webp({ quality, effort: 5 }).toFile(join(output, filename));
      }
      variants[width] = `/assets/optimized/${filename}`;
    }
    manifest[`/assets/${folder}/${name}`] = variants;
  }
}

// Prune only obsolete files in this script's dedicated generated directory.
for (const entry of await readdir(output, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".webp") && !generated.has(entry.name)) {
    await unlink(join(output, entry.name));
  }
}
const manifestPath = join(root, "config/image-manifest.json");
const content = `${JSON.stringify(manifest, null, 2)}\n`;
if (!existsSync(manifestPath) || await readFile(manifestPath, "utf8") !== content) {
  await writeFile(manifestPath, content);
}
console.log(`Prepared ${generated.size} responsive WebP variants for ${Object.keys(manifest).length} images.`);
