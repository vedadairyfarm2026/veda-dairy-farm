import Image from "next/image";
import { products, promisePoints, siteConfig, socialLinks } from "@/config/site";
import { HygienicProcess } from "@/features/hygienic-process/components/hygienic-process";
import { SiteHeader } from "./site-header";
import { AnimatedCard, Reveal } from "@/features/animations/components/page-animations";
import Link from "next/link";
import { BusinessContact } from "./business-contact";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function CopyrightYear() {
  return new Date().getFullYear();
}

const questions = [
  { question: "Which dairy products can I order?", answer: "Choose from fresh cow and buffalo milk, dahi, traditional ghee and paneer. Message us for current availability, quantities and prices." },
  { question: "How do I place an order?", answer: "Tap any WhatsApp order button, tell us what you need and share your Surat locality. We will confirm availability, pricing and delivery details before you order." },
  { question: "Do you deliver to my area in Surat?", answer: "We serve Surat homes. Send us your locality on WhatsApp and we will confirm whether delivery is available to your address." },
  { question: "How is your milk collected?", answer: "Our Gir cow and Murrah buffalo are milked gently by hand. Clean hands, individual towels, separate first-stream checks, clean pails and prompt cooling are part of the routine. Explore the ten-step journey above." },
  { question: "Can I ask about regular delivery?", answer: "Of course. Tell us the products and quantities you usually need, and we will discuss the delivery options available for your locality." },
];

export function HomePage() {
  return (
    <div className="bg-cream-50 text-forest-950">
      <a className="fixed top-3 left-5 z-[100] -translate-y-[150%] rounded-lg bg-forest-900 px-5 py-3 text-white focus:translate-y-0" href="#main-content">Skip to content</a>
      <div className="flex min-h-8 items-center justify-center gap-[26px] bg-forest-900 px-[14px] py-2 text-[.59rem] tracking-[.025em] text-[#f9f6e9] min-[601px]:min-h-[34px] min-[601px]:px-5 min-[601px]:text-[.7rem] [&>a]:hidden [&>a]:items-center [&>a]:gap-2.5 [&>a]:text-[#e7d8a5] min-[601px]:[&>a]:flex">
        <span>Fresh from our farm. Delivered with care in Surat.</span>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Say hello <Arrow /></a>
      </div>
      <SiteHeader home />

      <main id="main-content">
        <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[31px] px-6 pt-[38px] pb-11 min-[601px]:gap-[38px] min-[601px]:px-9 min-[601px]:pt-[46px] min-[601px]:pb-[54px] min-[901px]:grid-cols-[1.12fr_1fr] min-[901px]:gap-8 min-[901px]:pt-[62px] min-[901px]:pr-[52px] min-[901px]:pb-[65px] min-[981px]:gap-[45px] min-[1101px]:gap-[70px] max-[360px]:px-5" id="top" aria-labelledby="hero-title">
          <Reveal className="max-[900px]:max-w-[600px]">
            <p className="flex items-center gap-[9px] text-[.69rem] font-medium tracking-[.05em] text-forest-700 min-[601px]:text-[.73rem]"><span className="inline-block h-[11px] w-[17px] -rotate-20 rounded-[13px_0_13px_0] bg-[#72905a]" aria-hidden="true" /> Freshness You Can Trust.</p>
            <h1 className="mt-[18px] font-display text-[clamp(2.8rem,12vw,3.95rem)] leading-[1.06] font-normal tracking-[-.035em] min-[601px]:mt-[22px] min-[601px]:text-[clamp(3.8rem,8vw,4.8rem)] min-[601px]:leading-[1.02] min-[901px]:text-[clamp(3.4rem,5.7vw,5.25rem)] max-[360px]:text-[2.3rem] [&_em]:font-normal [&_em]:text-[#668049]" id="hero-title">Good mornings<br />begin with<br /><em>good milk.</em></h1>
            <p className="mt-[22px] max-w-[330px] text-[.87rem] leading-[1.8] text-forest-700 min-[601px]:mt-[25px] min-[601px]:max-w-[460px] min-[601px]:text-[.97rem] min-[901px]:max-w-[410px]">Fresh cow and buffalo milk, dahi, ghee and paneer from Veda Dairy Farm in Ambheta, with local home delivery in Surat.</p>
            <div className="mt-6 flex flex-wrap items-center gap-[18px] min-[601px]:mt-[30px] min-[601px]:gap-[17px] min-[1101px]:gap-[23px] max-[360px]:gap-[13px]">
              <a className="veda-button min-h-[47px] gap-5 bg-forest-900 px-[19px] py-3 text-[.76rem] text-white hover:bg-[#2e583c] min-[601px]:min-h-[50px] min-[601px]:gap-[27px] min-[601px]:px-[23px] min-[601px]:py-[14px] min-[601px]:text-[.8rem]" href="#products">Explore our dairy <Arrow /></a>
              <a className="inline-flex items-center gap-[9px] text-[.7rem] min-[1101px]:text-[.76rem] max-[360px]:text-[.66rem] [&>span]:grid [&>span]:size-[26px] [&>span]:place-items-center [&>span]:rounded-full [&>span]:border [&>span]:border-[#cad2bd] [&>span]:pl-0.5 [&>span]:text-[.5rem] min-[601px]:[&>span]:size-[31px]" href="#process"><span aria-hidden="true">▶</span> Meet your morning milk</a>
            </div>
            <div className="mt-7 hidden items-center gap-[13px] min-[901px]:flex min-[981px]:mt-[39px] [&_p]:text-[.73rem] [&_p]:leading-[1.65] [&_p]:text-forest-700 [&_strong]:font-medium [&_strong]:text-forest-900">
              <span className="text-[2.2rem] text-[#ac8b45]" aria-hidden="true">✺</span>
              <p>A little closer to the farm.<br /><strong>A little better, every day.</strong></p>
            </div>
          </Reveal>
          <Reveal className="relative max-[900px]:w-full max-[900px]:max-w-[520px] max-[900px]:justify-self-center">
            <div className="relative aspect-[.96] max-h-[570px] overflow-hidden rounded-[180px_180px_20px_20px] bg-[#e8eadc] min-[601px]:aspect-square min-[601px]:rounded-[260px_260px_22px_22px] min-[901px]:aspect-[.84] min-[901px]:rounded-[240px_240px_28px_28px] [&>img]:object-cover [&>img]:object-center">
              <Image src="/assets/design/hero-farm.webp" alt="A Gir cow and Murrah buffalo together on a sunlit farm, beside a clean milk can" fill preload sizes="(max-width: 900px) 90vw, 42vw" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-[9px] bg-[linear-gradient(transparent,rgba(17,48,27,.75))] px-5 pt-[46px] pb-[21px] text-[.65rem] tracking-[.015em] text-white min-[601px]:px-[26px] min-[601px]:pt-[60px] min-[601px]:pb-6 min-[601px]:text-[.71rem] [&>span]:text-[#f3dfaa]"><span aria-hidden="true">✦</span> Our farm. Your everyday goodness.</div>
            </div>
            <div className="absolute top-[23px] -right-2 flex size-[83px] rotate-12 flex-col items-center justify-center rounded-full border border-[#d8c99a] bg-[#ede2bc] p-[9px] text-forest-900 outline-4 outline-cream-50 min-[601px]:top-[38px] min-[601px]:size-[98px] min-[601px]:outline-6 min-[901px]:top-6 min-[901px]:-right-[23px] min-[981px]:top-[42px] min-[981px]:-right-9 min-[981px]:size-[115px] [&_span]:text-[.44rem] [&_span]:tracking-[.08em] [&_span]:uppercase min-[601px]:[&_span]:text-[.52rem] min-[981px]:[&_span]:text-[.59rem] [&_b]:text-[1.8rem] [&_b]:leading-[1.2] [&_b]:font-normal [&_b]:text-[#6c814b] min-[601px]:[&_b]:text-[2.3rem]" aria-label="Farm fresh, made with care">
              <span>Farm fresh</span><b aria-hidden="true">✺</b><span>Made with care</span>
            </div>
            <a className="absolute bottom-[57px] -left-[7px] flex items-center gap-[9px] rounded-[13px] bg-[#fffcf3] p-3 shadow-[0_12px_35px_rgba(24,47,29,.12)] min-[601px]:bottom-[65px] min-[601px]:-left-2.5 min-[601px]:gap-[13px] min-[601px]:p-[14px] min-[901px]:bottom-[73px] min-[901px]:-left-[22px] min-[981px]:-left-10 min-[981px]:px-5 min-[981px]:py-[17px] [&_strong]:block [&_strong]:text-[.7rem] [&_strong]:font-semibold min-[601px]:[&_strong]:text-[.78rem] [&_small]:mt-[5px] [&_small]:block [&_small]:text-[.59rem] [&_small]:text-forest-700 min-[601px]:[&_small]:text-[.65rem] [&>span:last-child]:ml-1.5" href="#story">
              <span className="grid h-[30px] shrink-0 basis-[30px] place-items-center rounded-full bg-[#ecf0e3] text-[#68844d] min-[601px]:h-9 min-[601px]:basis-9" aria-hidden="true">✓</span>
              <span><strong>Good care. Good dairy.</strong><small>Discover the Veda way</small></span>
              <Arrow diagonal />
            </a>
          </Reveal>
        </section>

        <div className="flex min-h-[74px] items-start justify-center gap-[14px] border-y border-[#e3e7d5] bg-[#eef0e3] p-5 min-[601px]:items-center min-[601px]:gap-[26px] min-[601px]:px-7 min-[981px]:gap-[clamp(28px,6vw,100px)] [&>span]:flex [&>span]:flex-1 [&>span]:flex-col [&>span]:items-center [&>span]:gap-[7px] [&>span]:text-center [&>span]:text-[.64rem] [&>span]:leading-[1.6] [&>span]:text-forest-800 min-[601px]:[&>span]:flex-none min-[601px]:[&>span]:flex-row min-[601px]:[&>span]:gap-2 min-[601px]:[&>span]:text-[.69rem] min-[981px]:[&>span]:gap-[13px] min-[981px]:[&>span]:text-[.77rem] [&_i]:text-[1.1rem] [&_i]:text-[#8b9868] [&_i]:not-italic" aria-label="The Veda promise">
          <span><i aria-hidden="true">✦</i> Gir cows & Murrah buffaloes</span>
          <span><i aria-hidden="true">✦</i> Traditionally hand milked</span>
          <span><i aria-hidden="true">✦</i> Made for Surat homes</span>
        </div>

        <section className="veda-section" id="products" aria-labelledby="products-title">
          <Reveal className="mb-[27px] flex flex-col items-start justify-between gap-5 min-[601px]:mb-[38px] min-[601px]:flex-row min-[601px]:items-end min-[601px]:gap-10">
            <div>
              <p className="veda-kicker">From our dairy</p>
              <h2 className="veda-heading" id="products-title">Goodness for<br /><em>your everyday.</em></h2>
            </div>
            <div className="max-w-[320px] pb-[5px] min-[601px]:max-w-[360px] [&>p]:text-[.81rem] [&>p]:leading-[1.8] [&>p]:text-forest-700 min-[601px]:[&>p]:text-[.87rem]">
              <p>For your first cup of chai, your family favourites and the comfort of a home-cooked meal.</p>
              <a className="veda-link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Ask about availability <Arrow diagonal /></a>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-7 min-[601px]:gap-x-6 min-[601px]:gap-y-[34px] min-[981px]:grid-cols-4 min-[981px]:gap-[22px]">
            {products.map((product, index) => (
              <AnimatedCard className="group min-w-0" key={product.category}>
                <a className="relative block aspect-[.96] overflow-hidden rounded-[13px] bg-[#ebe8dc] min-[601px]:aspect-[1.1] min-[601px]:rounded-2xl min-[981px]:aspect-square [&_img]:object-cover motion-safe:[&_img]:transition-transform motion-safe:[&_img]:duration-600 motion-safe:group-hover:[&_img]:scale-[1.045] group-first:[&_img]:object-[70%_70%]" href={siteConfig.whatsappUrl + "?text=" + encodeURIComponent("Hello Veda Dairy Farm! I would like to order " + product.category + ". Please share availability, prices and delivery details.")}
                  target="_blank" rel="noreferrer" aria-label={"Enquire about " + product.category}>
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 600px) 45vw, (max-width: 980px) 45vw, 23vw" />
                  <span className="absolute top-2.5 left-2.5 grid size-6 place-items-center rounded-full bg-[#fffcf2]/88 text-[.57rem] text-forest-900 min-[601px]:top-[13px] min-[601px]:left-[14px] min-[601px]:size-7 min-[601px]:text-[.62rem]">0{index + 1}</span>
                  <span className="absolute right-2.5 bottom-2.5 grid size-[30px] place-items-center rounded-full bg-[#fffcf2] text-[.9rem] text-forest-900 min-[601px]:right-[13px] min-[601px]:bottom-[13px] min-[601px]:size-9 min-[601px]:text-[1.1rem]"><Arrow diagonal /></span>
                </a>
                <div className="px-px pt-[14px] min-[601px]:px-[3px] min-[601px]:pt-5 [&_h3]:mt-[7px] [&_h3]:font-display [&_h3]:text-[1.2rem] [&_h3]:leading-[1.2] [&_h3]:font-normal min-[601px]:[&_h3]:text-[1.7rem] min-[981px]:[&_h3]:text-[1.48rem] [&_p]:mt-[9px] [&_p]:min-h-[5.1em] [&_p]:text-[.72rem] [&_p]:leading-[1.7] [&_p]:text-forest-700 min-[601px]:[&_p]:mt-[11px] min-[601px]:[&_p]:min-h-0 min-[601px]:[&_p]:text-[.77rem] min-[981px]:[&_p]:min-h-[3.3em] [&>a]:mt-[13px] [&>a]:inline-flex [&>a]:min-h-11 [&>a]:items-center [&>a]:gap-[11px] [&>a]:text-[.68rem] [&>a]:font-medium min-[601px]:[&>a]:mt-3 min-[601px]:[&>a]:gap-[15px] min-[601px]:[&>a]:text-[.74rem]">
                  <span className="text-[.57rem] tracking-[.12em] text-[#647343] uppercase min-[601px]:text-[.63rem]">{product.category}</span>
                  <h3><Link href={`/products/${product.slug}`}>{product.title}</Link></h3>
                  <p>{product.description}</p>
                  <Link className="underline underline-offset-4" href={`/products/${product.slug}`}>About our {product.category.toLowerCase()} <Arrow /></Link>
                  <a href={siteConfig.whatsappUrl + "?text=" + encodeURIComponent("Hello Veda Dairy Farm! I would like to order " + product.category + ". Please share availability, prices and delivery details.")}
                    target="_blank" rel="noreferrer" aria-label={"Order " + product.category + " on WhatsApp"}>Enquire & order <Arrow /></a>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-[25px] flex flex-wrap justify-between gap-2 border-t border-line pt-[18px] text-[.6rem] text-forest-700 min-[601px]:mt-[34px] min-[601px]:gap-3 min-[601px]:text-[.67rem]"><span>Simple ingredients. Familiar favourites.</span><span>Milk · Dahi · Ghee · Paneer</span></div>
        </section>

        <section className="veda-section grid grid-cols-1 items-center gap-7 pt-2.5 min-[601px]:gap-[38px] min-[601px]:pt-[30px] min-[601px]:pb-[100px] min-[901px]:grid-cols-2 min-[901px]:gap-8 min-[981px]:gap-[50px] min-[1101px]:gap-20" id="story" aria-labelledby="story-title">
          <Reveal className="relative w-full pr-[30px] pb-[42px] max-[900px]:max-w-[630px]">
            <div className="relative aspect-[1.16] overflow-hidden rounded-[20px_100px_20px_20px] min-[601px]:aspect-[1.5] min-[601px]:rounded-[24px_140px_24px_24px] min-[901px]:aspect-[1.15] [&_img]:object-cover [&_img]:object-[64%_center]">
              <Image src="/assets/process/06-calm-feeding-v3.webp" alt="The Veda dairy worker offers fresh fodder to the Gir cow and Murrah buffalo in a clean shed" fill sizes="(max-width: 900px) 90vw, 45vw" />
            </div>
            <div className="absolute right-0 bottom-0 h-[145px] w-[118px] overflow-hidden rounded-[80px_80px_12px_12px] border-[6px] border-cream-50 min-[601px]:h-[155px] min-[601px]:w-[125px] min-[601px]:border-[7px] min-[981px]:h-[180px] min-[981px]:w-[154px] [&_img]:object-cover [&_img]:object-[50%_30%]">
              <Image src="/assets/process/worker-reference.webp" alt="The Veda farm worker in clean workwear and protective headwear" fill sizes="(max-width: 600px) 120px, 160px" />
            </div>
            <div className="absolute bottom-2 left-3 flex items-center gap-3 rounded-xl bg-[#e9e5cb] px-[15px] py-3 text-forest-900 min-[601px]:bottom-0 min-[601px]:left-2.5 min-[601px]:py-[13px] min-[981px]:left-6 min-[981px]:px-[23px] min-[981px]:py-[14px] [&>span]:text-[1.5rem] [&>span]:text-[#8b9c65] min-[601px]:[&>span]:text-[1.9rem] [&_p]:font-display [&_p]:text-[1.05rem] [&_p]:leading-[1.2] min-[601px]:[&_p]:text-[1.1rem] min-[981px]:[&_p]:text-[1.25rem] [&_em]:text-[#566a41]"><span aria-hidden="true">✦</span><p>It all begins<br /><em>with care.</em></p></div>
          </Reveal>
          <Reveal className="max-[900px]:max-w-[570px] [&>p:not(:first-child)]:mt-[18px] [&>p:not(:first-child)]:text-[.82rem] [&>p:not(:first-child)]:leading-[1.85] [&>p:not(:first-child)]:text-forest-700 min-[601px]:[&>p:not(:first-child)]:mt-5 min-[601px]:[&>p:not(:first-child)]:text-[.88rem] [&>a]:mt-[25px]">
            <p className="veda-kicker">Rooted in the Veda way</p>
            <h2 className="veda-heading" id="story-title">A farm you can<br /><em>feel close to.</em></h2>
            <p>Behind every bottle is a morning of thoughtful care. Fresh feed, calm animals and traditional hand milking are part of our daily rhythm.</p>
            <p>We bring that same care to the dairy you take home. Honest food, familiar flavours and a real connection to where it all begins.</p>
            <ul className="mt-6 grid list-none gap-[13px] min-[601px]:gap-3 [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-[.72rem] [&_li]:leading-[1.65] min-[601px]:[&_li]:items-center min-[601px]:[&_li]:text-[.79rem] min-[901px]:[&_li]:text-[.69rem] min-[981px]:[&_li]:text-[.76rem] [&_li>span]:grid [&_li>span]:h-5 [&_li>span]:shrink-0 [&_li>span]:basis-5 [&_li>span]:place-items-center [&_li>span]:rounded-full [&_li>span]:bg-[#e8eddf] [&_li>span]:text-[.65rem] [&_li>span]:text-[#638048]">
              <li><span aria-hidden="true">✓</span> Care for our Gir cows and Murrah buffaloes</li>
              <li><span aria-hidden="true">✓</span> Traditional hand milking, every morning</li>
              <li><span aria-hidden="true">✓</span> Clean collection and careful cold handling</li>
            </ul>
            <a className="veda-link" href="#process">Follow our farm-to-home journey <Arrow diagonal /></a>
          </Reveal>
        </section>

        <HygienicProcess />

        <section className="veda-section" id="promise" aria-labelledby="promise-title">
          <Reveal className="text-left min-[601px]:text-center [&_h2]:text-[2.35rem] min-[601px]:[&_h2]:text-[clamp(2.6rem,4vw,3.65rem)] max-[360px]:[&_h2]:text-[2.15rem]">
            <p className="veda-kicker">The little things that matter</p>
            <h2 className="veda-heading" id="promise-title">Our promise is simple.<br /><em>Care, all the way home.</em></h2>
          </Reveal>
          <div className="mt-7 grid grid-cols-1 gap-[13px] min-[601px]:mt-[38px] min-[601px]:grid-cols-3 min-[601px]:gap-[22px]">
            {promisePoints.map((point, index) => (
              <AnimatedCard className="relative rounded-[15px] border border-[#e1e6d6] bg-[#f3f4ea] p-[23px] min-[981px]:p-[29px] [&_h3]:mt-[17px] [&_h3]:font-display [&_h3]:text-[1.45rem] [&_h3]:font-normal min-[601px]:[&_h3]:mt-[23px] min-[601px]:[&_h3]:text-[1.35rem] min-[981px]:[&_h3]:text-[1.5rem] [&_p]:mt-3 [&_p]:text-[.77rem] [&_p]:leading-[1.8] [&_p]:text-forest-700 min-[601px]:[&_p]:max-w-[260px] min-[601px]:[&_p]:text-[.8rem]" key={point.number}>
                <span className="grid size-[43px] place-items-center rounded-full bg-[#e7ecd9] text-[1.7rem] text-[#65804b]" aria-hidden="true">{["✺", "✓", "↗"][index]}</span>
                <span className="absolute top-[31px] right-7 text-[.7rem] text-[#909d7c]">{point.number}</span>
                <h3>{point.title}</h3><p>{point.text}</p>
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section className="bg-forest-900 text-[#faf7eb]" id="contact" aria-labelledby="delivery-title">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[38px] px-6 py-[58px] min-[601px]:gap-[45px] min-[601px]:px-9 min-[601px]:py-[78px] min-[901px]:grid-cols-[1.08fr_1fr] min-[901px]:gap-10 min-[981px]:gap-[50px] min-[1101px]:gap-20">
            <Reveal className="[&>p:first-child]:text-[#c1cfaa] [&_h2]:text-[2.55rem] min-[601px]:[&_h2]:text-[clamp(2.6rem,4vw,3.65rem)] [&_h2_em]:text-[#dacb9b] [&>p:not(:first-child)]:mt-5 [&>p:not(:first-child)]:max-w-[430px] [&>p:not(:first-child)]:text-[.82rem] [&>p:not(:first-child)]:leading-[1.85] [&>p:not(:first-child)]:text-[#c7d3c2] min-[601px]:[&>p:not(:first-child)]:text-[.88rem]">
              <p className="veda-kicker">A fresh start, at your doorstep</p>
              <h2 className="veda-heading" id="delivery-title">Your morning,<br /><em>made a little fresher.</em></h2>
              <p>Good dairy should be easy to bring home. Say hello, tell us what you love and let us take it from there.</p>
              <ol className="mt-[25px] grid list-none gap-[19px] min-[601px]:mt-[27px] [&_li]:flex [&_li]:items-start [&_li]:gap-[15px] [&_li>span]:grid [&_li>span]:h-8 [&_li>span]:shrink-0 [&_li>span]:basis-8 [&_li>span]:place-items-center [&_li>span]:rounded-full [&_li>span]:border [&_li>span]:border-[#456346] [&_li>span]:text-[.62rem] [&_li>span]:text-[#d4d8b7] [&_h3]:text-[.81rem] [&_h3]:font-medium [&_p]:mt-1.5 [&_p]:text-[.72rem] [&_p]:leading-[1.65] [&_p]:text-[#c2cdbb] min-[601px]:[&_p]:text-[.74rem]">
                <li><span>01</span><div><h3>Start a conversation</h3><p>Message us on WhatsApp. We are happy to help.</p></div></li>
                <li><span>02</span><div><h3>Pick your favourites</h3><p>Share your products, quantities and Surat locality.</p></div></li>
                <li><span>03</span><div><h3>Confirm your delivery</h3><p>We will confirm prices, availability and delivery details.</p></div></li>
              </ol>
              <a className="veda-button mt-[29px] gap-[25px] bg-[#e9dbad] px-5 py-[13px] text-[.75rem] text-forest-900 hover:bg-[#f3e7c2] min-[601px]:gap-[27px] min-[601px]:px-[23px] min-[601px]:py-[14px] min-[601px]:text-[.8rem]" href={siteConfig.whatsappUrl + "?text=" + encodeURIComponent("Hello Veda Dairy Farm! I would like to enquire about dairy delivery in Surat.")}
                target="_blank" rel="noreferrer">Order on WhatsApp <Arrow diagonal /></a>
              <a className="mt-4 block w-fit text-[.72rem] text-[#ccd4bf]" href={"tel:" + siteConfig.internationalPhone}>Prefer a call? +91 {siteConfig.phone}</a>
              <Link className="mt-4 block w-fit text-[.72rem] text-[#ccd4bf] underline underline-offset-4" href="/milk-delivery-surat">Milk and dairy delivery details in Surat <Arrow /></Link>
            </Reveal>
            <Reveal className="relative aspect-[.9] max-h-[590px] w-full overflow-hidden rounded-[160px_160px_16px_16px] min-[601px]:aspect-[1.05] min-[601px]:rounded-[170px_170px_18px_18px] min-[901px]:aspect-[.7] min-[981px]:aspect-[.84] max-[900px]:max-w-[570px] max-[900px]:justify-self-center [&>img]:object-cover">
              <Image src="/assets/design/delivery.webp" alt="A fresh basket of milk, dahi, ghee and paneer being delivered at a home's doorstep" fill sizes="(max-width: 900px) 90vw, 42vw" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-xl bg-[#f9f6e9] px-3 py-[15px] text-forest-900 min-[601px]:inset-x-6 min-[601px]:bottom-6 min-[601px]:gap-[14px] min-[601px]:p-[18px] [&>span]:text-[1.65rem] [&>span]:text-[#88995f] [&_strong]:block [&_strong]:font-display [&_strong]:text-[1.05rem] [&_strong]:font-normal min-[601px]:[&_strong]:text-[1.15rem] [&_small]:mt-1.5 [&_small]:block [&_small]:text-[.62rem] [&_small]:text-forest-700 min-[601px]:[&_small]:text-[.67rem]"><span aria-hidden="true">✦</span><div><strong>From our farm. To your door.</strong><small>Fresh local delivery in Surat.</small></div></div>
            </Reveal>
          </div>
        </section>

        <section className="veda-section grid grid-cols-1 gap-7 min-[601px]:grid-cols-[.8fr_1.2fr] min-[601px]:gap-10 min-[981px]:grid-cols-[.75fr_1.25fr] min-[981px]:gap-[60px] min-[1101px]:gap-[100px]" aria-labelledby="faq-title">
          <Reveal className="[&>p:not(:first-child)]:mt-[22px] [&>p:not(:first-child)]:max-w-[320px] [&>p:not(:first-child)]:text-[.8rem] [&>p:not(:first-child)]:leading-[1.8] [&>p:not(:first-child)]:text-forest-700 min-[601px]:[&>p:not(:first-child)]:max-w-[280px] min-[601px]:[&>p:not(:first-child)]:text-[.85rem]">
            <p className="veda-kicker">A few things you might wonder</p>
            <h2 className="veda-heading" id="faq-title">Let’s make<br /><em>it simple.</em></h2>
            <p>Have something else on your mind? There is always a person at the other end.</p>
            <a className="veda-link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Talk to us <Arrow diagonal /></a>
          </Reveal>
          <div className="[&>details]:border-b [&>details]:border-[#dbe1d1] [&>details:first-child]:border-t">
            {questions.map((item) => (
              <details className="group" key={item.question} name="veda-faq">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[21px] text-[.8rem] leading-[1.6] font-medium min-[601px]:py-[22px] min-[601px]:text-[.86rem] [&::-webkit-details-marker]:hidden">{item.question}<span className="relative size-[22px] shrink-0 rounded-full border border-[#ccd5bf] before:absolute before:top-[9px] before:left-1.5 before:h-px before:w-2 before:bg-forest-800 after:absolute after:top-[9px] after:left-1.5 after:h-px after:w-2 after:rotate-90 after:bg-forest-800 motion-safe:after:transition-transform group-open:after:rotate-0" aria-hidden="true" /></summary>
                <p className="pr-[35px] pb-[22px] text-[.77rem] leading-[1.85] text-forest-700 min-[601px]:text-[.82rem]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e0e5d6] bg-[#edf0e2]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-[22px] gap-y-[29px] px-6 pt-[39px] pb-[30px] min-[601px]:grid-cols-[1.2fr_1fr] min-[601px]:gap-8 min-[601px]:px-9 min-[601px]:pt-[54px] min-[601px]:pb-11 min-[901px]:grid-cols-[1.4fr_.8fr_1fr] min-[981px]:gap-[65px] max-[360px]:grid-cols-1">
          <div className="col-span-2 min-[601px]:col-span-1 min-[601px]:row-span-2 min-[901px]:row-span-1 max-[360px]:col-span-1 [&>p]:mt-[15px] [&>p]:max-w-[260px] [&>p]:text-[.76rem] [&>p]:leading-[1.8] [&>p]:text-forest-700 min-[601px]:[&>p]:mt-5 min-[601px]:[&>p]:max-w-[250px] min-[601px]:[&>p]:text-[.8rem]">
            <a className="inline-flex items-center gap-[13px] [&_img]:rounded-full [&_img]:object-contain [&>span]:grid [&>span]:font-display [&>span]:text-[2.2rem] [&>span]:leading-none [&_small]:mt-2 [&_small]:font-sans [&_small]:text-[.57rem] [&_small]:tracking-[.17em] [&_small]:uppercase" href="#top"><Image src="/assets/design/veda-logo.webp" alt="" width={62} height={62} /><span>Veda<small>Dairy Farm</small></span></a>
            <p>Everyday goodness, from our farm to your family.</p>
            <span className="mt-[15px] block font-display text-base text-[#606f40] italic">Freshness You Can Trust.</span>
          </div>
          <div className="[&_h3]:mt-[7px] [&_h3]:mb-[19px] [&_h3]:text-[.71rem] [&_h3]:font-semibold min-[601px]:[&_h3]:text-[.74rem] [&>a]:mt-3 [&>a]:block [&>a]:py-1 [&>a]:text-[.68rem] [&>a]:leading-[1.7] [&>a]:text-forest-700 hover:[&_a]:text-forest-950 min-[601px]:[&>a]:text-[.75rem] [&>p]:mt-3 [&>p]:block [&>p]:text-[.68rem] [&>p]:leading-[1.7] [&>p]:text-forest-700 min-[601px]:[&>p]:text-[.75rem]"><h3>Explore Veda</h3>{siteConfig.navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<Link href="/milk-delivery-surat">Milk delivery in Surat</Link></div>
          <div className="[&_h3]:mt-[7px] [&_h3]:mb-[19px] [&_h3]:text-[.71rem] [&_h3]:font-semibold min-[601px]:[&_h3]:text-[.74rem]"><h3>Come say hello</h3><BusinessContact /><div className="mt-[22px] flex flex-wrap gap-3 text-[.64rem] text-forest-700 min-[601px]:gap-[14px] min-[601px]:text-[.67rem]">{socialLinks.map(social => <a href={social.href} key={social.label} target="_blank" rel="noreferrer">{social.label} <Arrow diagonal /></a>)}</div></div>
        </div>
        <div className="mx-6 flex max-w-[1168px] flex-wrap justify-between gap-[14px] border-t border-[#d7decb] py-5 text-[.59rem] text-forest-700 min-[601px]:mx-9 min-[601px]:flex-nowrap min-[601px]:gap-5 min-[601px]:text-[.66rem] min-[1241px]:mx-auto [&_a]:flex [&_a]:items-center [&_a]:gap-[15px]"><p>© <CopyrightYear /> Veda Dairy Farm. All rights reserved.</p><a href="#top">Back to the top <span aria-hidden="true">↑</span></a></div>
      </footer>
    </div>
  );
}
