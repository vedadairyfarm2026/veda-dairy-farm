import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "out");
assert(existsSync(output), "Build the static export before checking performance.");
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
}
const exported = files(output);
assert(exported.length <= 1000, "Cloudflare dashboard uploads support up to 1,000 files.");
assert(exported.every(file => statSync(file).size <= 25 * 1024 * 1024), "An asset exceeds Cloudflare's 25 MiB limit.");
const headers = readFileSync(join(output, "_headers"), "utf8");
assert(headers.includes("/assets/optimized/*") && headers.includes("immutable"), "Missing immutable image caching.");

const pages = exported.filter(file => file.endsWith(".html") && !/[/\\](404|_not-found)([/\\]|\.html)/.test(file));
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  // Modern browsers skip the legacy noModule polyfill.
  const scripts = [...new Set([...html.matchAll(/<script[^>]+src="([^"]+\.js)"[^>]*>/g)]
    .filter(match => !/\bnomodule\b/i.test(match[0])).map(match => match[1]))];
  const gzipBytes = scripts.reduce((sum, src) => sum + gzipSync(readFileSync(join(output, decodeURIComponent(src)))).length, 0);
  assert(gzipBytes <= 180 * 1024, `${file}: initial JavaScript exceeds 180 KiB gzip.`);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    const src = /\bsrc="([^"]+)"/.exec(tag)?.[1];
    const srcset = /\bsrcSet="([^"]+)"/i.exec(tag)?.[1];
    assert(src?.startsWith("/assets/optimized/"), `${file}: image is not a static optimized variant: ${src}`);
    assert(srcset, `${file}: image is missing responsive variants.`);
    const urls = [src, ...srcset.split(",").map(candidate => candidate.trim().split(/\s+/)[0])];
    for (const url of urls) {
      assert(url.endsWith(".webp"), `${file}: image is not WebP: ${url}`);
      assert(existsSync(join(output, url)), `${file}: missing image ${url}`);
    }
  }
  console.log(`${file.slice(output.length + 1)}: ${(gzipBytes / 1024).toFixed(1)} KiB initial JavaScript gzip; all responsive images exported.`);
}
const manifest = JSON.parse(readFileSync(join(root, "config/image-manifest.json"), "utf8"));
const hero = manifest["/assets/design/hero-farm.webp"][480];
assert(statSync(join(output, hero)).size <= 128 * 1024, "The high-quality 480px hero exceeds 128 KiB.");
const bytes = exported.reduce((sum, file) => sum + statSync(file).size, 0);
console.log(`Static export: ${exported.length} files, ${(bytes / 1024 / 1024).toFixed(2)} MiB. 480px hero: ${(statSync(join(output, hero)).size / 1024).toFixed(1)} KiB.`);
