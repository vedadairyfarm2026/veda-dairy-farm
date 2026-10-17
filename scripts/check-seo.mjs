import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd(), false);
const args = process.argv.slice(2);
const originFlag = args.indexOf("--origin");
const origin = new URL(originFlag >= 0 ? args[originFlag + 1] : process.env.NEXT_PUBLIC_SITE_URL || "https://www.vedadairyfarm.com").origin;
const preview = args.includes("--preview");
assert(!(preview && args.includes("--require-indexable")), "A preview cannot pass the production indexing check.");
const output = join(process.cwd(), "out");
assert(existsSync(output), "Run npm run build before checking the exported SEO files.");

const decode = value => value.replace(/&#(?:x([\da-f]+)|(\d+));/gi, (entity, hex, decimal) => {
  const codePoint = Number.parseInt(hex || decimal, hex ? 16 : 10);
  return codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : entity;
}).replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], decode(match[2])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(match => attributes(match[0]));
// Hydration payloads and JSON-LD cannot satisfy checks for text shown on the page.
const renderedBody = html => (html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html)
  .replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "")
  .replace(/<!--[\s\S]*?-->/g, "");
const plainText = html => decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const routePath = pathname => decodeURIComponent(pathname).replace(/\/index\.html$|\.html$|\/$/g, "") || "/";
const files = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)]);
const pages = new Map(files(output).filter(file => file.endsWith(".html") && !/[/\\](404|_not-found)([/\\]|\.html)/.test(file)).map(file => {
  const relative = file.slice(output.length).replace(/\\/g, "/");
  return [relative === "/index.html" ? "/" : relative.replace(/\/index\.html$|\.html$/g, ""), readFileSync(file, "utf8")];
}));
const expectedPaths = ["/", "/milk-delivery-surat", "/products/fresh-milk", "/products/dahi", "/products/ghee", "/products/paneer"];
assert.deepEqual([...pages.keys()].sort(), [...expectedPaths].sort(), "All six public pages must be exported.");
const seenTitles = new Set();
const seenDescriptions = new Set();

for (const [path, html] of pages) {
  const head = html.split("</head>")[0];
  const body = renderedBody(html);
  const visibleText = plainText(body);
  const meta = tags(head, "meta");
  const oneMeta = (key, value) => {
    const matches = meta.filter(tag => tag[key] === value);
    assert.equal(matches.length, 1, `${path}: expected one ${value} tag.`);
    return matches[0].content;
  };
  const titles = [...head.matchAll(/<title>(.*?)<\/title>/g)];
  assert.equal(titles.length, 1, `${path}: expected one title.`);
  const title = decode(titles[0][1]);
  const description = oneMeta("name", "description");
  assert(title.includes("Surat") && title.includes("Veda Dairy Farm"), `${path}: title must identify the business and location.`);
  assert(description.length >= 90 && description.length <= 180, `${path}: description must be useful and concise.`);
  assert(!seenTitles.has(title), `${path}: duplicate title.`);
  assert(!seenDescriptions.has(description), `${path}: duplicate description.`);
  seenTitles.add(title);
  seenDescriptions.add(description);
  const robots = oneMeta("name", "robots");
  assert(preview ? robots.includes("noindex") : !robots.includes("noindex") && robots.includes("index"), `${path}: incorrect indexing policy.`);
  const canonical = tags(head, "link").filter(tag => tag.rel === "canonical");
  assert.equal(canonical.length, 1, `${path}: expected one canonical URL.`);
  const pageUrl = new URL(path, origin).href;
  assert.equal(new URL(canonical[0].href).href, pageUrl, `${path}: incorrect canonical.`);
  assert.equal(new URL(oneMeta("property", "og:url")).href, pageUrl, `${path}: incorrect Open Graph URL.`);
  assert.equal(oneMeta("property", "og:title"), title, `${path}: social title differs from page title.`);
  assert.equal(oneMeta("property", "og:description"), description);
  assert.equal(oneMeta("name", "twitter:title"), title);
  assert.equal(oneMeta("name", "twitter:description"), description);
  assert.equal(oneMeta("name", "twitter:card"), "summary_large_image");
  for (const imageUrl of [oneMeta("property", "og:image"), oneMeta("name", "twitter:image")]) {
    const url = new URL(imageUrl);
    assert.equal(url.origin, origin, `${path}: social image is on the wrong origin.`);
    const asset = join(output, decodeURIComponent(url.pathname));
    assert(existsSync(asset) || existsSync(`${asset}.png`), `${path}: social image was not exported.`);
  }
  const headings = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi)];
  assert.equal(headings.length, 1, `${path}: expected one primary heading in the page body.`);
  assert(/\p{L}[\p{L}\p{N}]/u.test(plainText(headings[0][1])), `${path}: primary heading must contain readable text.`);
  assert(tags(body, "img").every(tag => "alt" in tag), `${path}: image without alt text.`);

  const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap(match => JSON.parse(match[1])["@graph"] || []);
  assert(graphs.some(node => node["@type"] === "WebSite"), `${path}: missing website schema.`);
  assert(graphs.some(node => node["@type"] === "WebPage" && node.url === pageUrl), `${path}: missing page schema.`);
  const business = graphs.find(node => node["@type"] === "LocalBusiness");
  assert(business?.address?.streetAddress && business.address.postalCode, `${path}: missing confirmed local business address.`);
  assert.equal(business.telephone, "+917567752001");
  assert(visibleText.includes(business.name), `${path}: business name must appear in page content.`);
  assert(visibleText.includes(plainText(business.address.streetAddress)) && visibleText.includes(business.address.postalCode), `${path}: business address must appear in page content and match its schema.`);
  assert(visibleText.replace(/\D/g, "").includes(business.telephone.replace(/\D/g, "")), `${path}: business phone must appear in page content and match its schema.`);
  assert(!graphs.some(node => "aggregateRating" in node || "review" in node), `${path}: unverified review markup.`);
  if (path !== "/") {
    const breadcrumbs = graphs.find(node => node["@type"] === "BreadcrumbList");
    assert.equal(breadcrumbs?.itemListElement.at(-1).item, pageUrl, `${path}: incorrect breadcrumb destination.`);
  }
  if (path === "/milk-delivery-surat") assert(graphs.some(node => node["@type"] === "Service"), "Delivery page needs service schema.");

  for (const link of tags(body, "a")) {
    if (!link.href) continue;
    const url = new URL(link.href, pageUrl);
    if (url.origin !== origin) continue;
    const target = pages.get(routePath(url.pathname));
    assert(target, `${path}: broken internal link ${link.href}.`);
    if (url.hash) {
      const targetIds = new Set([...renderedBody(target).matchAll(/<[a-z][^>]*>/gi)].map(match => attributes(match[0]).id).filter(Boolean));
      assert(targetIds.has(decodeURIComponent(url.hash.slice(1))), `${path}: missing anchor ${link.href}.`);
    }
  }
}

const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
assert.deepEqual(sitemapUrls.sort(), preview ? [] : expectedPaths.map(path => new URL(path, origin).href).sort(), "Sitemap must list exactly the indexable pages.");
const robots = readFileSync(join(output, "robots.txt"), "utf8");
assert(preview ? robots.includes("Disallow: /") : robots.includes("Allow: /") && robots.includes(`Sitemap: ${origin}/sitemap.xml`), "Incorrect robots.txt.");
const notFound = readFileSync(join(output, "404.html"), "utf8");
assert(tags(notFound, "meta").some(tag => tag.name === "robots" && tag.content?.includes("noindex")), "The 404 page must not be indexed.");
console.log(`SEO checks passed for ${pages.size} ${preview ? "preview" : "indexable"} pages: metadata, canonicals, social images, JSON-LD, sitemap, robots.txt, internal links and anchors, headings, business contact details and 404 policy.`);
