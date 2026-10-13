import Link from "next/link";
import { products, siteConfig, socialLinks } from "@/config/site";
import { BusinessContact } from "./business-contact";

export function SiteFooter() {
  return <footer className="border-t border-line bg-sage-100">
    <div className="veda-section grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
      <div><Link className="font-display text-3xl" href="/">{siteConfig.name}</Link><p className="mt-4 max-w-xs text-sm leading-7 text-forest-700">Fresh milk and traditional dairy, from our farm in Ambheta to Surat homes.</p><div className="mt-5 flex flex-wrap gap-5 text-sm">{socialLinks.map(item => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>)}</div></div>
      <nav aria-label="Dairy and delivery"><p className="mb-4 font-semibold">Explore our dairy</p><ul className="space-y-3 text-sm text-forest-700">{products.map(product => <li key={product.slug}><Link href={`/products/${product.slug}`}>{product.title}</Link></li>)}<li><Link href="/milk-delivery-surat">Milk and dairy delivery in Surat</Link></li><li><Link href="/#process">Our milking process</Link></li></ul></nav>
      <div><p className="mb-4 font-semibold">Contact Veda Dairy Farm</p><BusinessContact /></div>
    </div>
    <p className="mx-auto max-w-[1168px] border-t border-line px-6 py-5 text-xs text-forest-700">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
  </footer>;
}
