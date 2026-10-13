"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const navigationHref = (href: string) => href.startsWith("#") && !home ? `/${href}` : href;

  useEffect(() => {
    if (!open) return;
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream-50/96 backdrop-blur-lg" ref={header}>
      <div className="mx-auto flex min-h-[72px] max-w-[1240px] items-center justify-between gap-3 px-5 py-2.5 min-[601px]:min-h-[84px] min-[601px]:gap-5 min-[601px]:px-9 min-[601px]:py-3 min-[1101px]:gap-[26px] max-[360px]:px-4">
        <a className="inline-flex shrink-0 items-center gap-2 min-[601px]:gap-[11px]" href={home ? "#top" : "/"} aria-label="Veda Dairy Farm home" onClick={() => setOpen(false)}>
          <Image className="size-[42px] rounded-full object-contain min-[601px]:size-[52px]" src="/assets/design/veda-logo.webp" alt="" width={52} height={52} loading="eager" />
          <span className="grid"><strong className="font-display text-[1.65rem] leading-none font-normal min-[601px]:text-[2rem]">Veda</strong><small className="mt-1 text-[.49rem] font-semibold tracking-[.12em] text-forest-700 uppercase min-[601px]:text-[.6rem] min-[601px]:tracking-[.17em]">Dairy Farm</small></span>
        </a>
        <nav className="hidden items-center gap-[19px] text-[.75rem] font-medium min-[981px]:flex min-[1101px]:gap-7 min-[1101px]:text-[.8rem]" aria-label="Primary navigation">
          {siteConfig.navItems.map(item => <a className="relative py-2.5 after:absolute after:inset-x-0 after:bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-current motion-safe:after:transition-transform hover:after:scale-x-100" key={item.href} href={navigationHref(item.href)}>{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2 min-[601px]:gap-3">
          <a className="flex min-h-10 items-center gap-3 rounded-[28px] border border-forest-900 px-[13px] py-2.5 text-[.66rem] font-semibold motion-safe:transition-colors hover:bg-forest-900 hover:text-white min-[601px]:min-h-11 min-[601px]:gap-[18px] min-[601px]:px-4 min-[601px]:py-3 min-[601px]:text-[.78rem] min-[1101px]:px-5 max-[360px]:gap-2 max-[360px]:px-[11px]" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Order dairy <span aria-hidden="true">↗</span></a>
          <button className="relative grid size-10 cursor-pointer place-content-center gap-[5px] rounded-full border border-line bg-transparent min-[601px]:size-11 min-[981px]:hidden" ref={toggle} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
            <span className={`block h-[1.5px] w-[18px] bg-forest-900 motion-safe:transition-transform motion-safe:duration-250 ${open ? "translate-y-[3.25px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-[18px] bg-forest-900 motion-safe:transition-transform motion-safe:duration-250 ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`grid overflow-hidden motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-250 min-[981px]:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} aria-hidden={!open} inert={!open} aria-label="Mobile navigation">
        <div className="min-h-0 overflow-hidden"><div className="border-t border-line px-6 pt-2.5 pb-6">
          {siteConfig.navItems.map(item => <a className="block rounded-lg p-3 text-[.95rem] motion-safe:transition-colors hover:bg-sage-100" key={item.href} href={navigationHref(item.href)} onClick={() => setOpen(false)}>{item.label}</a>)}
        </div></div>
      </nav>
    </header>
  );
}
