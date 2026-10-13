import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/config/seo";
import { products, siteConfig } from "@/config/site";
import { BusinessContact } from "@/features/home/components/business-contact";
import { SiteHeader } from "@/features/home/components/site-header";
import { SiteFooter } from "@/features/home/components/site-footer";
import { PageStructuredData } from "@/features/seo/components/structured-data";

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
      <section className="veda-section pt-8">
        <nav className="mb-8 text-sm text-forest-700" aria-label="Breadcrumb"><Link className="underline underline-offset-4" href="/">Home</Link><span className="mx-3" aria-hidden="true">/</span><span aria-current="page">Milk delivery in Surat</span></nav>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div><p className="veda-kicker">From Ambheta. For Surat homes.</p><h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.1]">Milk and dairy home delivery in Surat</h1><p className="mt-6 text-base leading-8 text-forest-700">Fresh milk for your daily chai, dahi for lunch, paneer for dinner and ghee for family favourites. Enquire directly with Veda Dairy Farm about local delivery from our farm in Ambheta, Olpad, to your home in Surat.</p><a className="veda-button mt-8 gap-6 bg-forest-900 px-6 py-4 text-sm text-white" href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent("Hello Veda Dairy Farm! I would like to check milk and dairy delivery for my Surat locality. Please share availability, prices and delivery details.")}`} target="_blank" rel="noreferrer">Check delivery for your area <span aria-hidden="true">↗</span></a><p className="mt-4 text-sm leading-7 text-forest-700">Share your locality so we can confirm delivery to your address.</p></div><div className="relative aspect-square overflow-hidden rounded-[100px_100px_24px_24px] bg-sage-100"><Image src="/assets/design/delivery.webp" alt="Milk, dahi, ghee and paneer delivered to a home's doorstep" fill preload sizes="(max-width: 1023px) 90vw, 45vw" className="object-cover" /></div></div>
      </section>
      <section className="veda-section border-y border-line bg-sage-100/40" aria-labelledby="ordering-title"><p className="veda-kicker">A person at the other end</p><h2 className="veda-heading" id="ordering-title">How to arrange your delivery</h2><ol className="mt-10 grid gap-8 md:grid-cols-3">{steps.map((step, index) => <li key={step.title}><span className="text-sm text-gold-700">0{index + 1}</span><h3 className="mt-3 font-display text-2xl">{step.title}</h3><p className="mt-4 text-sm leading-8 text-forest-700">{step.text}</p></li>)}</ol></section>
      <section className="veda-section" aria-labelledby="delivery-products"><h2 className="font-display text-3xl" id="delivery-products">Choose your dairy favourites</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map(product => <Link className="rounded-2xl border border-line p-6" key={product.slug} href={`/products/${product.slug}`}><h3 className="font-display text-2xl">{product.title}</h3><p className="mt-3 text-sm leading-7 text-forest-700">{product.description}</p><span className="mt-4 block text-sm">Explore {product.category.toLowerCase()} →</span></Link>)}</div></section>
      <section className="veda-section grid gap-10 border-t border-line md:grid-cols-[.8fr_1.2fr]" aria-labelledby="delivery-faq"><div><p className="veda-kicker">Before your first delivery</p><h2 className="veda-heading" id="delivery-faq">A few useful answers</h2><div className="mt-8"><BusinessContact /></div></div><div>{questions.map(item => <details className="border-b border-line py-5" key={item.question}><summary className="cursor-pointer text-sm font-semibold leading-7">{item.question}</summary><p className="mt-4 text-sm leading-8 text-forest-700">{item.answer}</p></details>)}</div></section>
    </main>
    <SiteFooter />
  </>;
}
