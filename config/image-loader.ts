"use client";

import type { ImageLoaderProps } from "next/image";
import imageManifest from "./image-manifest.json";

const images: Record<string, Record<string, string>> = imageManifest;

export default function imageLoader({ src, width }: ImageLoaderProps) {
  const variants = images[src];
  if (!variants) throw new Error(`No static image variants for ${src}. Run npm run prebuild.`);
  const widths = Object.keys(variants).map(Number).sort((a, b) => a - b);
  const selected = widths.find(size => size >= width) ?? widths.at(-1)!;
  return variants[selected];
}
