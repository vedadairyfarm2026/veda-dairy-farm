import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const output = fileURLToPath(new URL("../out/", import.meta.url));
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml",
  ".json": "application/json", ".webp": "image/webp", ".png": "image/png",
  ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const isFile = async file => { try { return (await stat(file)).isFile(); } catch { return false; } };
await stat(join(output, "index.html"));
const server = createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let file = resolve(output, `.${pathname}`);
    if (relative(output, file).startsWith("..")) {
      response.writeHead(400).end();
      return;
    }
    let status = 200;
    if (pathname === "/") file = join(output, "index.html");
    else if (!await isFile(file)) {
      if (await isFile(`${file}.html`)) file += ".html";
      else if (await isFile(join(file, "index.html"))) file = join(file, "index.html");
      else { status = 404; file = join(output, "404.html"); }
    }
    const data = await readFile(file);
    response.writeHead(status, { "Content-Type": types[extname(file)] || "application/octet-stream",
      "Content-Length": data.length, "Cache-Control": "no-cache" });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(400).end();
  }
});
const port = Number(process.env.PORT || 4173);
server.listen(port, "127.0.0.1", () => console.log(`Static production preview: http://localhost:${port}`));
