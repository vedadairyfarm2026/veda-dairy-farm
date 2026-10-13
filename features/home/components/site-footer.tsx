import Link from "next/link";
import { products, siteConfig, socialLinks } from "@/config/site";
import { BusinessContact } from "./business-contact";
import { SiteBrand } from "./site-brand";
import { SiteIcon } from "./site-icon";
import styles from "./site-chrome.module.css";

export function SiteFooter() {
  return <footer className={styles.footer}>
    <div className={styles.footerGrid}>
      <div className={styles.footerIntro}>
        <SiteBrand />
        <p>Fresh milk and familiar dairy favourites, from our farm in Ambheta to Surat homes.</p>
        <span className={styles.footerTagline}>Freshness You Can Trust.</span>
      </div>
      <nav className={styles.footerNav} aria-label="Dairy and delivery">
        <h2 className={styles.footerHeading}>Explore Veda</h2>
        <ul>{products.map(product => <li key={product.slug}><Link href={`/products/${product.slug}`}>{product.title}</Link></li>)}
          <li><Link href="/milk-delivery-surat">Milk delivery in Surat</Link></li>
          <li><Link href="/#process">Our milking process</Link></li>
        </ul>
      </nav>
      <div>
        <h2 className={styles.footerHeading}>Come say hello</h2>
        <BusinessContact />
        <div className={styles.socials}>{socialLinks.map(item => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<SiteIcon name="arrow" /></a>)}</div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      <Link href="/#top">Back to the top<SiteIcon name="arrow" /></Link>
    </div>
  </footer>;
}
