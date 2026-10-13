"use client";

import { LazyMotion, MotionConfig, domAnimation, m, useAnimate, useInView, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect } from "react";

export function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.35, ease: "easeOut" }}>
      <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
    </MotionConfig>
  );
}

// Content is visible in server HTML, including when JavaScript is unavailable.
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion === null) return;
    const animation = animate(scope.current, {
      opacity: reducedMotion ? 1 : [0, 1],
      y: reducedMotion ? 0 : [18, 0],
    }, {
      duration: reducedMotion ? 0 : 0.65,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => animation.stop();
  }, [animate, delay, inView, reducedMotion, scope]);

  return <div className={className} ref={scope}>{children}</div>;
}

export function AnimatedCard({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <m.article className={className} whileHover={reducedMotion === false ? { y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}>
      {children}
    </m.article>
  );
}
