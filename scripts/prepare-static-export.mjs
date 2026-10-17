import { readdir, stat, unlink } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const output = fileURLToPath(new URL("../out/", import.meta.url));
const assets = join(output, "assets");
let saved = 0;

// These are source artwork; next/image uses generated variants instead.
// Originals in public/ remain untouched for future edits and social-image builds.
const originals = ["dahi.png", "delivery.png", "ghee.png",
  "hero-farm.png", "milk-bottle.png", "paneer.png", "veda-logo.png"];
const sourceScenes = (await readdir(join(assets, "process")))
  .filter(name => name.endsWith(".webp")).map(name => join("process", name));
for (const name of [...originals, ...sourceScenes]) {
  const target = resolve(assets, name);
  const location = relative(output, target);
  if (location.startsWith("..") || location === "") throw new Error(`Invalid export asset: ${target}`);
  try {
    saved += (await stat(target)).size;
    await unlink(target);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
console.log(`Excluded ${(saved / 1024 / 1024).toFixed(2)} MiB of source artwork from the static export.`);
