import Image from "next/image";
import Link from "next/link";
import { products, siteConfig } from "@/config/site";
import { SiteHeader } from "@/features/home/components/site-header";
import { SiteFooter } from "@/features/home/components/site-footer";
import { PageStructuredData } from "@/features/seo/components/structured-data";
import type { ProductDetail } from "../data/product-details";

export function ProductPage({ product, detail }: { product: typeof products[number]; detail: ProductDetail }) {
  const path = `/products/${product.slug}`;
  const orderUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(`Hello Veda Dairy Farm! I would like to enquire about ${product.title}. Please share quantities, prices and delivery details for my Surat locality.`)}`;

  return <>
    <PageStructuredData title={detail.seoTitle} description={detail.description} path={path} breadcrumbs={[{ name: "Home", path: "/" }, { name: product.title, path }]} />
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-5 focus:z-[100] focus:rounded-lg focus:bg-forest-900 focus:p-4 focus:text-white">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="veda-section pt-8">
        <nav className="mb-8 text-sm text-forest-700" aria-label="Breadcrumb"><Link className="underline underline-offset-4" href="/">Home</Link><span className="mx-3" aria-hidden="true">/</span><span aria-current="page">{product.title}</span></nav>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div><p className="veda-kicker">From Veda Dairy Farm, Ambheta</p><h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.1]">{detail.heading}</h1><p className="mt-6 max-w-xl text-base leading-8 text-forest-700">{detail.intro}</p><a className="veda-button mt-8 gap-6 bg-forest-900 px-6 py-4 text-sm text-white" href={orderUrl} target="_blank" rel="noreferrer">Ask about {product.category.toLowerCase()} <span aria-hidden="true">↗</span></a><p className="mt-4 text-sm leading-7 text-forest-700">Prices, quantities and delivery are confirmed before you order.</p></div>
          <div className="relative aspect-square overflow-hidden rounded-[100px_100px_24px_24px] bg-sage-100"><Image src={product.image} alt={`${product.title} from Veda Dairy Farm`} fill preload sizes="(max-width: 1023px) 90vw, 45vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="veda-section border-y border-line bg-sage-100/40" aria-label={`About ${product.title}`}><div className="grid gap-10 md:grid-cols-3">{detail.sections.map(section => <article key={section.heading}><h2 className="font-display text-2xl leading-snug">{section.heading}</h2><p className="mt-4 text-sm leading-8 text-forest-700">{section.text}</p></article>)}</div><Link className="veda-link mt-8" href="/milk-delivery-surat">How milk and dairy delivery works in Surat →</Link></section>
      <section className="veda-section grid gap-8 md:grid-cols-[.8fr_1.2fr]" aria-labelledby="product-faq"><div><p className="veda-kicker">Before you order</p><h2 className="veda-heading" id="product-faq">Your {product.category.toLowerCase()} questions</h2></div><div>{detail.questions.map(item => <details className="border-b border-line py-5" key={item.question}><summary className="cursor-pointer text-sm font-semibold leading-7">{item.question}</summary><p className="mt-4 text-sm leading-8 text-forest-700">{item.answer}</p></details>)}</div></section>
      <section className="veda-section border-t border-line" aria-labelledby="other-dairy"><h2 className="font-display text-3xl" id="other-dairy">More from our dairy</h2><div className="mt-6 grid gap-4 sm:grid-cols-3">{products.filter(item => item.slug !== product.slug).map(item => <Link className="rounded-2xl border border-line p-6" href={`/products/${item.slug}`} key={item.slug}><h3 className="font-display text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-forest-700">{item.description}</p><span className="mt-4 block text-sm">Explore {item.category.toLowerCase()} →</span></Link>)}</div></section>
    </main>
    <SiteFooter />
  </>;
}
