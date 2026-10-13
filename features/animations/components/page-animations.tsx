"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

// Content stays visible without JavaScript. Only sections below the initial
// viewport receive a one-time CSS reveal, keeping the hero visible immediately.
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scope.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || element.getBoundingClientRect().top < window.innerHeight || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.classList.add("veda-reveal-enter");
      observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className={className} ref={scope} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>{children}</div>;
}

export function AnimatedCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`veda-animated-card ${className}`}>{children}</article>;
}
