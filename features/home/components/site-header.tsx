"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { SiteBrand } from "./site-brand";
import { SiteIcon } from "./site-icon";
import styles from "./site-chrome.module.css";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const navigationHref = (href: string) => href.startsWith("#") && !home ? `/${href}` : href;

  useEffect(() => {
    if (!open) return;
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
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

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (query.matches) setOpen(false); };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);

  return <header className={styles.header} ref={header}>
    <div className={styles.headerInner}>
      <SiteBrand href={home ? "#top" : "/"} eager onClick={() => setOpen(false)} />
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {siteConfig.navItems.map(item => <a key={item.href} href={navigationHref(item.href)}>{item.label}</a>)}
      </nav>
      <div className={styles.headerActions}>
        <a className={styles.orderButton} href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Order dairy on WhatsApp" onClick={() => setOpen(false)}>
          <SiteIcon name="whatsapp" /><span className={styles.desktopLabel}>Order on WhatsApp</span><span className={styles.compactLabel}>Order dairy</span>
        </a>
        <button ref={toggle} className={styles.menuToggle} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
          <span /><span />
        </button>
      </div>
    </div>
    <nav id="mobile-navigation" className={styles.mobileMenu} data-open={open} aria-hidden={!open} inert={!open} aria-label="Mobile navigation">
      <div className={styles.menuClip}><div className={styles.menuContent}>
        {siteConfig.navItems.map(item => <a key={item.href} href={navigationHref(item.href)} onClick={() => setOpen(false)}>{item.label}<SiteIcon name="arrow" /></a>)}
        <a href={`tel:${siteConfig.internationalPhone}`} onClick={() => setOpen(false)}>Call our farm<SiteIcon name="phone" /></a>
        <p className={styles.menuNote}>Ambheta, Surat · {siteConfig.hours}</p>
      </div></div>
    </nav>
  </header>;
}
