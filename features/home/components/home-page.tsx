import Image from "next/image";
import Link from "next/link";
import { products, promisePoints, siteConfig } from "@/config/site";
import { HygienicProcess } from "@/features/hygienic-process/components/hygienic-process";
import { AnimatedCard, Reveal } from "@/features/animations/components/page-animations";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { SiteIcon } from "./site-icon";
import { FaqList } from "./faq-list";
import styles from "./home-page.module.css";

const questions = [
  { question: "Which dairy products can I order?", answer: "Choose from fresh cow and buffalo milk, dahi, traditional ghee and paneer. Message us for current availability, quantities and prices." },
  { question: "How do I place an order?", answer: "Tap any WhatsApp order button, tell us what you need and share your Surat locality. We will confirm availability, pricing and delivery details before you order." },
  { question: "Do you deliver to my area in Surat?", answer: "We serve Surat homes. Send us your locality on WhatsApp and we will confirm whether delivery is available to your address." },
  { question: "How is your milk collected?", answer: "Our Gir cow and Murrah buffalo are milked gently by hand. Clean hands, individual towels, separate first-stream checks, clean pails and prompt cooling are part of the routine. Explore the ten-step journey above." },
  { question: "Can I ask about regular delivery?", answer: "Of course. Tell us the products and quantities you usually need, and we will discuss the delivery options available for your locality." },
];

export function HomePage() {
  return <div className={styles.page}>
    <a className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-5 focus:z-[100] focus:rounded-lg focus:bg-forest-900 focus:p-4 focus:text-white" href="#main-content">Skip to content</a>
    <div className={styles.announcement}>
      <span>Fresh from our farm. Delivered with care in Surat.</span>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Say hello<SiteIcon name="arrow" /></a>
    </div>
    <SiteHeader home />
    <main id="main-content">
      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><SiteIcon name="leaf" />Freshness You Can Trust.</p>
          <h1 id="hero-title">Good mornings<br />begin with<br /><em>good milk.</em></h1>
          <p className={styles.heroDescription}>Fresh cow and buffalo milk, dahi, ghee and paneer from Veda Dairy Farm in Ambheta, with local home delivery in Surat.</p>
          <div className={styles.heroActions}>
            <a className={`veda-button ${styles.primaryButton}`} href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><SiteIcon name="whatsapp" />Order on WhatsApp</a>
            <a className={`veda-button ${styles.secondaryButton}`} href="#products">Explore our dairy<SiteIcon name="arrow" /></a>
          </div>
          <p className={styles.heroMeta}><SiteIcon name="check" />Our farm in Ambheta. Dairy for Surat homes.</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroPhoto}>
            <Image src="/assets/design/hero-farm.webp" alt="A Gir cow and Murrah buffalo together on a sunlit farm, beside a clean milk can" fill preload
              sizes="(max-width: 359px) calc(100vw - 32px), (max-width: 600px) calc(100vw - 40px), (max-width: 850px) 560px, (max-width: 1240px) 42vw, 510px" />
            <div className={styles.photoCaption}><SiteIcon name="sun" />Our farm. Your everyday goodness.</div>
          </div>
          <div className={styles.heroStamp} aria-label="Farm fresh, made with care"><span>Farm fresh</span><SiteIcon name="sun" /><span>Made with care</span></div>
          <a className={styles.heroNote} href="#story"><SiteIcon name="leaf" /><span><strong>Good care. Good dairy.</strong><small>Discover the Veda way</small></span></a>
        </div>
      </section>

      <div className={styles.trustBand} aria-label="The Veda promise"><div className={styles.trustInner}>
        <span><SiteIcon name="leaf" />Gir cows & Murrah buffaloes</span>
        <span><SiteIcon name="sun" />Traditionally hand milked</span>
        <span><SiteIcon name="check" />Made for Surat homes</span>
      </div></div>

      <section className="veda-section" id="products" aria-labelledby="products-title">
        <Reveal className={styles.sectionHeading}>
          <div><p className="veda-kicker">From our dairy</p><h2 className="veda-heading" id="products-title">Goodness for<br /><em>your everyday.</em></h2></div>
          <div className={styles.sectionDescription}><p>For your first cup of chai, your family favourites and the comfort of a home-cooked meal.</p><a className="veda-link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Ask about availability<SiteIcon name="arrow" /></a></div>
        </Reveal>
        <div className={styles.productGrid}>
          {products.map((product, index) => <AnimatedCard className={styles.productCard} key={product.slug}>
            <Link className={styles.productImage} href={`/products/${product.slug}`} aria-label={`Explore ${product.title.toLowerCase()}`}>
              <Image src={product.image} alt={product.title} fill sizes="(max-width: 359px) 88px, (max-width: 479px) 108px, (max-width: 600px) calc(50vw - 30px), (max-width: 1023px) calc(50vw - 44px), 274px" />
              <span className={styles.productNumber}>0{index + 1}</span>
            </Link>
            <div className={styles.productInfo}><span className={styles.productCategory}>{product.category}</span><h3><Link href={`/products/${product.slug}`}>{product.title}</Link></h3><p>{product.description}</p></div>
            <div className={styles.productActions}>
              <Link href={`/products/${product.slug}`}>View {product.category.toLowerCase()}<SiteIcon name="arrow" /></Link>
              <a className={styles.enquire} href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(`Hello Veda Dairy Farm! I would like to order ${product.category}. Please share availability, prices and delivery details.`)}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.category.toLowerCase()} on WhatsApp`}><SiteIcon name="whatsapp" />Enquire</a>
            </div>
          </AnimatedCard>)}
        </div>
        <div className={styles.sectionFoot}><span>Simple ingredients. Familiar favourites.</span><span>Milk · Dahi · Ghee · Paneer</span></div>
      </section>

      <section className={`veda-section ${styles.story}`} id="story" aria-labelledby="story-title">
        <Reveal className={styles.storyImages}>
          <div className={styles.storyPhoto}><Image src="/assets/process/06-calm-feeding-v3.webp" alt="The Veda dairy worker offers fresh fodder to the Gir cow and Murrah buffalo in a clean shed" fill sizes="(max-width: 600px) calc(100vw - 60px), (max-width: 850px) 592px, (max-width: 1240px) 42vw, 500px" /></div>
          <div className={styles.storyPortrait}><Image src="/assets/process/worker-reference.webp" alt="The Veda farm worker in clean workwear and protective headwear" fill sizes="(max-width: 600px) 112px, 140px" /></div>
          <div className={styles.storyNote}><SiteIcon name="leaf" /><p>It all begins<br /><em>with care.</em></p></div>
        </Reveal>
        <Reveal className={styles.storyCopy}>
          <p className="veda-kicker">Rooted in the Veda way</p><h2 className="veda-heading" id="story-title">A farm you can<br /><em>feel close to.</em></h2>
          <p>Behind every bottle is a morning of thoughtful care. Fresh feed, calm animals and traditional hand milking are part of our daily rhythm.</p>
          <p>We bring that same care to the dairy you take home. Honest food, familiar flavours and a real connection to where it all begins.</p>
          <ul className={styles.benefits}><li><SiteIcon name="check" />Care for our Gir cows and Murrah buffaloes</li><li><SiteIcon name="check" />Traditional hand milking, every morning</li><li><SiteIcon name="check" />Clean collection and careful cold handling</li></ul>
          <a className="veda-link" href="#process">Follow our farm-to-home journey<SiteIcon name="arrow" /></a>
        </Reveal>
      </section>

      <HygienicProcess />

      <section className="veda-section" id="promise" aria-labelledby="promise-title">
        <Reveal className={styles.promiseHeading}><p className="veda-kicker">The little things that matter</p><h2 className="veda-heading" id="promise-title">Our promise is simple.<br /><em>Care, all the way home.</em></h2></Reveal>
        <div className={styles.promiseGrid}>{promisePoints.map((point, index) => <AnimatedCard className={styles.promiseCard} key={point.number}>
          <span className={styles.promiseIcon}><SiteIcon name={index === 0 ? "leaf" : index === 1 ? "check" : "sun"} /></span><span className={styles.promiseIndex}>{point.number}</span><h3>{point.title}</h3><p>{point.text}</p>
        </AnimatedCard>)}</div>
      </section>

      <section className={styles.delivery} id="contact" aria-labelledby="delivery-title"><div className={styles.deliveryInner}>
        <Reveal className={styles.deliveryCopy}>
          <p className="veda-kicker">A fresh start, at your doorstep</p><h2 className="veda-heading" id="delivery-title">Your morning,<br /><em>made a little fresher.</em></h2>
          <p className={styles.deliveryDescription}>Good dairy should be easy to bring home. Say hello, tell us what you love and let us take it from there.</p>
          <ol className={styles.deliverySteps}><li><span>01</span><div><h3>Start a conversation</h3><p>Message us on WhatsApp. We are happy to help.</p></div></li><li><span>02</span><div><h3>Pick your favourites</h3><p>Share your products, quantities and Surat locality.</p></div></li><li><span>03</span><div><h3>Confirm your delivery</h3><p>We will confirm prices, availability and delivery details.</p></div></li></ol>
          <a className={`veda-button ${styles.deliveryButton}`} href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent("Hello Veda Dairy Farm! I would like to enquire about dairy delivery in Surat.")}`} target="_blank" rel="noreferrer"><SiteIcon name="whatsapp" />Order on WhatsApp</a>
          <div className={styles.deliveryLinks}><a href={`tel:${siteConfig.internationalPhone}`}><SiteIcon name="phone" />Prefer a call? +91 {siteConfig.phone}</a><Link href="/milk-delivery-surat">Milk and dairy delivery details in Surat<SiteIcon name="arrow" /></Link></div>
        </Reveal>
        <Reveal className={styles.deliveryPhoto}>
          <Image src="/assets/design/delivery.webp" alt="A fresh basket of milk, dahi, ghee and paneer being delivered at a home's doorstep" fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 850px) 560px, (max-width: 1240px) 42vw, 500px" />
          <div className={styles.deliveryNote}><SiteIcon name="leaf" /><div><strong>From our farm. To your door.</strong><small>Fresh local delivery in Surat.</small></div></div>
        </Reveal>
      </div></section>

      <section className={`veda-section ${styles.faq}`} aria-labelledby="faq-title">
        <Reveal className={styles.faqCopy}><p className="veda-kicker">A few things you might wonder</p><h2 className="veda-heading" id="faq-title">Let’s make<br /><em>it simple.</em></h2><p>Have something else on your mind? There is always a person at the other end.</p><a className="veda-link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Talk to us<SiteIcon name="arrow" /></a></Reveal>
        <FaqList items={questions} name="veda-home-faq" />
      </section>
    </main>
    <SiteFooter />
  </div>;
}
