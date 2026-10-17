"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./dairy-motion-scene.module.css";

/** A short, replayable illustration. The static artwork is also the no-JS view. */
export function DairyMotionScene({ children, className = "", label }: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const scene = useRef<HTMLDivElement>(null);
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    const element = scene.current;
    if (!element) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      element.dataset.motion = motion.matches ? "reduced" : "full";
      element.dataset.running = String(visible && !document.hidden && !motion.matches);
      if (visible && !document.hidden && !motion.matches) element.dataset.started = "true";
    };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
      }, { threshold: 0.35 })
      : null;

    if (observer) observer.observe(element);
    else visible = true;
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();

    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return <div ref={scene} className={`${styles.scene} ${className}`} data-motion="static" data-running="false">
    <div key={replay} className={styles.art}>{children}</div>
    <button className={styles.replay} type="button" aria-label={`Replay ${label}`} onClick={() => setReplay((value) => value + 1)}>
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 7a6.5 6.5 0 1 1-.4 5M4 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      Replay
    </button>
  </div>;
}
