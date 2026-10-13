import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

export async function GET() {
  const photo = await readFile(join(process.cwd(), "public/assets/hero-farm.png"));
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#faf8f0", color: "#1d422e" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "59%", padding: "56px" }}>
        <div style={{ fontSize: 25, letterSpacing: 2, marginBottom: 36 }}>VEDA DAIRY FARM</div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08 }}>Fresh dairy.</div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, color: "#668049" }}>For Surat homes.</div>
        <div style={{ fontSize: 26, marginTop: 32 }}>Milk · Dahi · Ghee · Paneer</div>
        <div style={{ fontSize: 21, marginTop: 34 }}>Freshness You Can Trust.</div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${photo.toString("base64")}`} alt="" width={492} height={630} style={{ objectFit: "cover" }} />
    </div>,
    size,
  );
}
