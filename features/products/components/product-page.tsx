import Image from "next/image";
import Link from "next/link";
import { products } from "@/config/site";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/features/home/components/site-header";
import { SiteFooter } from "@/features/home/components/site-footer";
import { SiteIcon } from "@/features/home/components/site-icon";
import { FaqList } from "@/features/home/components/faq-list";
import { PageStructuredData } from "@/features/seo/components/structured-data";
import styles from "@/features/home/components/content.module.css";
import type { ProductDetail } from "../data/product-details";

export function ProductPage({ product, detail }: { product: typeof products[number]; detail: ProductDetail }) {
  const path = `/products/${product.slug}`;
  const orderUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(`Hello Veda Dairy Farm! I would like to enquire about ${product.title}. Please share quantities, prices and delivery details for my Surat locality.`)}`;
  return <>
    <PageStructuredData title={detail.seoTitle} description={detail.description} path={path} breadcrumbs={[{ name: "Home", path: "/" }, { name: product.title, path }]} />
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-5 focus:z-[100] focus:rounded-lg focus:bg-forest-900 focus:p-4 focus:text-white">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className={`veda-section ${styles.intro}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{product.title}</span></nav>
        <div className={styles.hero}>
          <div><p className="veda-kicker">From Veda Dairy Farm, Ambheta</p><h1>{detail.heading}</h1><p className={styles.introText}>{detail.intro}</p>
            <div className={styles.heroActions}><a className="veda-button bg-forest-900 text-white hover:bg-forest-800" href={orderUrl} target="_blank" rel="noreferrer"><SiteIcon name="whatsapp" />Ask about {product.category.toLowerCase()}</a></div>
            <p className={styles.note}>Prices, quantities and delivery are confirmed before you order.</p>
          </div>
          <div className={styles.photo}><Image src={product.image} alt={`${product.title} from Veda Dairy Farm`} fill preload sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 850px) 560px, (max-width: 1240px) 45vw, 552px" /></div>
        </div>
      </section>
      <section className={styles.infoBand} aria-label={`About ${product.title}`}><div className="veda-section">
        <div className={styles.infoGrid}>{detail.sections.map(section => <article key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></article>)}</div>
        <Link className="veda-link" href="/milk-delivery-surat">How dairy delivery works in Surat<SiteIcon name="arrow" /></Link>
      </div></section>
      <section className={`veda-section ${styles.faqSection}`} aria-labelledby="product-faq">
        <div><p className="veda-kicker">Before you order</p><h2 className="veda-heading" id="product-faq">Your {product.category.toLowerCase()} questions</h2></div>
        <FaqList items={detail.questions} name={`veda-${product.slug}-faq`} />
      </section>
      <section className={`veda-section ${styles.related}`} aria-labelledby="other-dairy">
        <p className="veda-kicker">Your everyday favourites</p><h2 className="veda-heading" id="other-dairy">More from our dairy</h2>
        <div className={styles.relatedGrid}>{products.filter(item => item.slug !== product.slug).map(item => <Link className={styles.relatedCard} href={`/products/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p><span>Explore {item.category.toLowerCase()}<SiteIcon name="arrow" /></span></Link>)}</div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
