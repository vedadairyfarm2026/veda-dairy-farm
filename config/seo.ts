import type { Metadata } from "next";
import { siteConfig } from "./site";

function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.vedadairyfarm.com";

  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username || url.password || url.port || url.search || url.hash ||
    url.pathname !== "/" ||
    !url.hostname.includes(".") ||
    url.hostname === "localhost" || url.hostname.endsWith(".localhost") ||
    url.hostname.endsWith(".local") || url.hostname.endsWith(".test") ||
    url.hostname === "example.com" || url.hostname.endsWith(".example.com") ||
    /^\d+\.\d+\.\d+\.\d+$/.test(url.hostname)
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be your real public HTTPS domain, without a path, port, query or fragment.");
  }
  return url.origin;
}

export const siteUrl = getSiteUrl();
// Static exports bake this setting into their HTML. Configure it before building.
export const isIndexable = process.env.NODE_ENV === "production" && Boolean(siteUrl) && process.env.SEO_INDEXING_ENABLED !== "false";
export const homeTitle = "Veda Dairy Farm | Fresh Milk & Dairy in Surat";
export const homeDescription = "Order fresh cow and buffalo milk, dahi, traditional ghee and paneer from Veda Dairy Farm in Surat. Ask on WhatsApp about prices and local home delivery.";
export const socialImagePath = "/social-preview.png";

export function absoluteUrl(path: string) {
  return siteUrl ? new URL(path, `${siteUrl}/`).toString() : undefined;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;
  const image = absoluteUrl(socialImagePath);

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      type: "website", locale: "en_IN", siteName: siteConfig.name,
      title: fullTitle, description,
      ...(url ? { url } : {}),
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: "Veda Dairy Farm — fresh milk and dairy in Surat" }] } : {}),
    },
    twitter: {
      card: "summary_large_image", title: fullTitle, description,
      ...(image ? { images: [{ url: image, alt: "Veda Dairy Farm — fresh milk and dairy in Surat" }] } : {}),
    },
  };
}
