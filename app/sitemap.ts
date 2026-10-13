import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/config/seo";
import { products } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  // Add dates only when they describe a real content update, not each build.
  const pages = [
    { path: "/", image: "/assets/design/hero-farm.webp" },
    { path: "/milk-delivery-surat", image: "/assets/design/delivery.webp" },
    ...products.map(product => ({ path: `/products/${product.slug}`, image: product.image })),
  ];
  return pages.map(page => ({ url: absoluteUrl(page.path)!, images: [absoluteUrl(page.image)!] }));
}
