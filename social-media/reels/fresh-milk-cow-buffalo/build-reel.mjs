import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const reelDir = dirname(fileURLToPath(import.meta.url));
const width = 1080;
const height = 1920;

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function textLayer({ kicker, title, subtitle, footer, light = true }) {
  const foreground = light ? "#fffdf7" : "#123c29";
  const muted = light ? "#f8edcf" : "#41614f";
  const titleLines = title.split("\n");
  const titleSvg = titleLines.map((line, index) =>
    `<text x="72" y="${370 + index * 112}" class="title">${escapeXml(line)}</text>`
  ).join("");

  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .kicker { font-family: "Segoe UI", Arial, sans-serif; font-size: 31px; font-weight: 700; letter-spacing: 4px; fill: ${muted}; }
        .title { font-family: Georgia, "Times New Roman", serif; font-size: 84px; font-weight: 700; fill: ${foreground}; }
        .subtitle { font-family: "Segoe UI", Arial, sans-serif; font-size: 39px; font-weight: 600; fill: ${foreground}; }
        .footer { font-family: "Segoe UI", Arial, sans-serif; font-size: 31px; font-weight: 650; fill: ${foreground}; letter-spacing: 1px; }
      </style>
      <text x="72" y="232" class="kicker">${escapeXml(kicker)}</text>
      ${titleSvg}
      <text x="72" y="${620 + Math.max(0, titleLines.length - 2) * 86}" class="subtitle">${escapeXml(subtitle)}</text>
      <rect x="72" y="1580" width="936" height="104" rx="52" fill="#0d4a31" fill-opacity="0.94" stroke="#e8c76a" stroke-width="3"/>
      <text x="540" y="1646" text-anchor="middle" class="footer">${escapeXml(footer)}</text>
    </svg>`);
}

const darkOverlay = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b2f20" stop-opacity="0.72"/>
      <stop offset="0.48" stop-color="#0b2f20" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#0b2f20" stop-opacity="0.38"/>
    </linearGradient></defs>
    <rect width="1080" height="1920" fill="url(#g)"/>
  </svg>`);

const frames = [
  {
    input: "01-cow-buffalo-sunrise.png",
    output: "frame-01.jpg",
    copy: {
      kicker: "VEDA DAIRY FARM  •  SURAT",
      title: "WHAT MAKES\nMORNING BETTER?",
      subtitle: "A fresh start begins here.",
      footer: "FRESH COW + BUFFALO MILK",
    },
  },
  {
    input: "02-fresh-milk.png",
    output: "frame-02.jpg",
    copy: {
      kicker: "PURE  •  FRESH  •  LOCAL",
      title: "FRESHNESS\nIN EVERY GLASS",
      subtitle: "Cow milk  •  Buffalo milk",
      footer: "MADE FOR SURAT HOMES",
    },
  },
  {
    input: "03-farm-to-home.png",
    output: "frame-03.jpg",
    copy: {
      kicker: "FRESHNESS YOU CAN TRUST",
      title: "FROM OUR FARM\nTO YOUR HOME",
      subtitle: "Ask about availability and delivery.",
      footer: "WHATSAPP  7567752001",
    },
  },
];

const logo = await sharp(fileURLToPath(new URL("../../../public/assets/veda-logo.png", import.meta.url)))
  .resize(170, 170, { fit: "contain" })
  .png()
  .toBuffer();

for (const frame of frames) {
  await sharp(join(reelDir, frame.input))
    .resize(width, height, { fit: "cover", position: "centre" })
    .composite([
      { input: darkOverlay, left: 0, top: 0 },
      { input: logo, left: 838, top: 72 },
      { input: textLayer(frame.copy), left: 0, top: 0 },
    ])
    .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
    .toFile(join(reelDir, frame.output));
}

await sharp(join(reelDir, "frame-01.jpg"))
  .jpeg({ quality: 94 })
  .toFile(join(reelDir, "fresh-milk-reel-cover.jpg"));

const output = join(reelDir, "veda-fresh-cow-buffalo-milk-reel.mp4");
const filter = [
  "[0:v]scale=1200:2134,zoompan=z='min(zoom+0.00055,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=1080x1920:fps=30,setsar=1[v0]",
  "[1:v]scale=1200:2134,zoompan=z='if(lte(zoom,1.0),1.08,max(1.001,zoom-0.00052))':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=1080x1920:fps=30,setsar=1[v1]",
  "[2:v]scale=1200:2134,zoompan=z='min(zoom+0.00045,1.065)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=1080x1920:fps=30,setsar=1[v2]",
  "[v0][v1]xfade=transition=fade:duration=0.6:offset=4.4[x1]",
  "[x1][v2]xfade=transition=fade:duration=0.6:offset=8.8,format=yuv420p[v]",
].join(";");

const result = spawnSync(ffmpegPath, [
  "-y",
  "-loop", "1", "-t", "5", "-i", join(reelDir, "frame-01.jpg"),
  "-loop", "1", "-t", "5", "-i", join(reelDir, "frame-02.jpg"),
  "-loop", "1", "-t", "5", "-i", join(reelDir, "frame-03.jpg"),
  "-filter_complex", filter,
  "-map", "[v]",
  "-t", "13.8",
  "-r", "30",
  "-c:v", "libx264",
  "-profile:v", "high",
  "-level", "4.1",
  "-crf", "18",
  "-preset", "medium",
  "-movflags", "+faststart",
  output,
], { encoding: "utf8" });

if (result.status !== 0) {
  console.error(result.stderr);
  process.exit(result.status ?? 1);
}

console.log(output);
