import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/config/seo";
import { products, siteConfig } from "@/config/site";
import { BusinessContact } from "@/features/home/components/business-contact";
import { SiteHeader } from "@/features/home/components/site-header";
import { SiteFooter } from "@/features/home/components/site-footer";
import { PageStructuredData } from "@/features/seo/components/structured-data";
import { SiteIcon } from "@/features/home/components/site-icon";
import { FaqList } from "@/features/home/components/faq-list";
import styles from "@/features/home/components/content.module.css";

const title = "Milk & Dairy Home Delivery in Surat";
const description = "Arrange milk and dairy delivery in Surat with Veda Dairy Farm, Ambheta. Ask about cow milk, buffalo milk, dahi, ghee and paneer for your locality.";
const path = "/milk-delivery-surat";
export const metadata = pageMetadata(title, description, path);

const steps = [
  { title: "Tell us what you need", text: "Choose cow milk, buffalo milk, dahi, ghee or paneer and share the quantity you would like. If you want regular delivery, let us know your usual requirements." },
  { title: "Share your Surat locality", text: "Send your locality and delivery address on WhatsApp. We will check whether your home is covered by our current delivery routes." },
  { title: "Confirm your order details", text: "Our team will confirm product availability, current prices and delivery arrangements before you order. Ask us about the timing and any delivery charges for your address." },
];
const questions = [
  { question: "Do you deliver milk near me in Surat?", answer: "Delivery depends on your address and our available routes. Send your Surat locality on WhatsApp and our team will confirm whether we can deliver to your home." },
  { question: "Can I get regular cow milk or buffalo milk delivery?", answer: "Tell us your preferred milk type, quantity and locality. We will discuss the delivery options available for your household and confirm the schedule directly." },
  { question: "Can I order dahi, ghee and paneer as well?", answer: "Yes, you can enquire about our full dairy range in the same message. We will confirm which products and quantities are available for your order." },
  { question: "What are the prices and delivery charges?", answer: "Prices and delivery details are confirmed by our team for your products, quantities and address. Message us for current information before you order." },
  { question: "Where is your dairy farm?", answer: "Veda Dairy Farm is based in Ambheta Village, Olpad Taluka, Surat District, Gujarat, India, PIN 395005. You can call us on +91 7567752001, daily from 6:00 AM to 9:00 PM." },
];

export default function DeliveryPage() {
  return <>
    <PageStructuredData title={title} description={description} path={path} service breadcrumbs={[{ name: "Home", path: "/" }, { name: "Milk delivery in Surat", path }]} />
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-5 focus:z-[100] focus:rounded-lg focus:bg-forest-900 focus:p-4 focus:text-white">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className={`veda-section ${styles.intro}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Milk delivery in Surat</span></nav>
        <div className={styles.hero}>
          <div><p className="veda-kicker">From Ambheta. For Surat homes.</p><h1>Milk and dairy home delivery in Surat</h1><p className={styles.introText}>Fresh milk for your daily chai, dahi for lunch, paneer for dinner and ghee for family favourites. Enquire directly with Veda Dairy Farm about local delivery from our farm in Ambheta, Olpad, to your home in Surat.</p>
            <div className={styles.heroActions}><a className="veda-button bg-forest-900 text-white hover:bg-forest-800" href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent("Hello Veda Dairy Farm! I would like to check milk and dairy delivery for my Surat locality. Please share availability, prices and delivery details.")}`} target="_blank" rel="noreferrer"><SiteIcon name="whatsapp" />Check delivery for your area</a></div><p className={styles.note}>Share your locality so we can confirm delivery to your address.</p>
          </div>
          <div className={styles.photo}><Image src="/assets/design/delivery.webp" alt="Milk, dahi, ghee and paneer delivered to a home's doorstep" fill preload sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 850px) 560px, (max-width: 1240px) 45vw, 552px" /></div>
        </div>
      </section>
      <section className={styles.infoBand} aria-labelledby="ordering-title"><div className="veda-section"><p className="veda-kicker">A person at the other end</p><h2 className="veda-heading" id="ordering-title">How to arrange your delivery</h2><ol className={`${styles.infoGrid} mt-10`}>{steps.map((step, index) => <li key={step.title}><span className={styles.stepIndex}>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
      <section className="veda-section" aria-labelledby="delivery-products"><p className="veda-kicker">A little goodness for every day</p><h2 className="veda-heading" id="delivery-products">Choose your dairy favourites</h2><div className={styles.relatedGrid} data-columns="4">{products.map(product => <Link className={styles.relatedCard} key={product.slug} href={`/products/${product.slug}`}><h3>{product.title}</h3><p>{product.description}</p><span>Explore {product.category.toLowerCase()}<SiteIcon name="arrow" /></span></Link>)}</div></section>
      <section className={`veda-section ${styles.faqSection} border-t border-line`} aria-labelledby="delivery-faq"><div><p className="veda-kicker">Before your first delivery</p><h2 className="veda-heading" id="delivery-faq">A few useful answers</h2><BusinessContact /></div><FaqList items={questions} name="veda-delivery-faq" /></section>
    </main>
    <SiteFooter />
  </>;
}
