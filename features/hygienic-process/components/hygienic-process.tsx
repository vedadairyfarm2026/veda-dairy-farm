"use client";

import Image from "next/image";
import { m } from "motion/react";
import { type CSSProperties, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { processStages, STAGE_DURATION_MS } from "../data/stages";
import { ProcessDetail } from "./process-detail";
import styles from "./hygienic-process.module.css";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
const getReducedMotion = () => window.matchMedia(MOTION_QUERY).matches;
const getVisibility = () => document.visibilityState === "visible";
const staticSnapshot = () => true;

function ControlIcon({ type }: { type: "play" | "pause" | "replay" | "previous" | "next" }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {type === "play" && <path d="m9 5 11 7-11 7V5Z" fill="currentColor" />}
    {type === "pause" && <path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="3" />}
    {type === "replay" && <><path d="M5 8a8 8 0 1 1-1 8M5 3v5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></>}
    {(type === "previous" || type === "next") && <path d={type === "next" ? "m9 5 7 7-7 7" : "m15 5-7 7 7 7"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />}
  </svg>;
}

export function HygienicProcess() {
  const journey = useRef<HTMLDivElement>(null);
  const timeline = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);
  const [secondaryFailed, setSecondaryFailed] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, staticSnapshot);
  const tabVisible = useSyncExternalStore(subscribeVisibility, getVisibility, staticSnapshot);
  const clock = useRef({ stage: 0, replay: 0, remaining: STAGE_DURATION_MS });
  const stage = processStages[active];
  const secondaryImage = "secondaryImage" in stage ? stage.secondaryImage : undefined;
  const duration = "duration" in stage ? stage.duration : STAGE_DURATION_MS;
  const ready = !!failed[active] || (!!loaded[active] && (!secondaryImage || reducedMotion || secondaryLoaded || secondaryFailed));
  const running = playing && inView && tabVisible && !reducedMotion && ready;

  useEffect(() => {
    const element = journey.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rail = timeline.current;
    const current = rail?.querySelector<HTMLElement>('[data-active="true"]');
    if (!rail || !current || rail.scrollWidth <= rail.clientWidth) return;
    const itemLeft = current.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft;
    let left = rail.scrollLeft;
    if (itemLeft < left) left = itemLeft;
    if (itemLeft + current.offsetWidth > left + rail.clientWidth) left = itemLeft + current.offsetWidth - rail.clientWidth;
    rail.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
  }, [active, reducedMotion]);

  useEffect(() => {
    if (clock.current.stage !== active || clock.current.replay !== replayKey) {
      clock.current = { stage: active, replay: replayKey, remaining: duration };
    }
    if (!running) return;
    const currentClock = clock.current;
    const started = performance.now();
    const timeout = window.setTimeout(() => {
      if (active === processStages.length - 1) {
        setPlaying(false);
      } else {
        setOutgoing(active);
        setActive(active + 1);
      }
    }, currentClock.remaining);
    return () => {
      window.clearTimeout(timeout);
      currentClock.remaining = Math.max(0, currentClock.remaining - (performance.now() - started));
    };
  }, [active, replayKey, running, duration]);

  function selectStage(index: number) {
    if (index < 0 || index >= processStages.length || index === active) return;
    setOutgoing(reducedMotion ? null : active);
    setActive(index);
    setPlaying(false);
  }

  function replay() {
    setOutgoing(reducedMotion ? null : active);
    setActive(0);
    setReplayKey((key) => key + 1);
    setPlaying(!reducedMotion);
  }

  return (
    <section className={`${styles.section} bg-[#eef1e4] px-[22px] pt-[58px] pb-10 text-forest-950 min-[601px]:px-[max(36px,calc((100vw-1168px)/2))] min-[601px]:py-20`} id="process" aria-labelledby="process-heading"
      style={{ "--stage-duration": `${duration}ms` } as CSSProperties}
      data-motion={reducedMotion ? "reduced" : "full"} data-playing={running}>
      <div className="mb-[27px] grid grid-cols-1 items-end gap-[21px] min-[601px]:mb-[35px] min-[601px]:grid-cols-[1.2fr_.8fr] min-[601px]:gap-8 min-[1101px]:gap-[60px]">
        <div>
          <p className="veda-kicker">Care in every drop</p>
          <h2 className="veda-heading text-[2.6rem] max-[360px]:text-[2.35rem]" id="process-heading">Our Hygienic<br /><em>Milking Process.</em></h2>
        </div>
        <div className="max-w-[355px] pb-[5px]">
          <p className="text-[.81rem] leading-[1.8] text-forest-700 min-[601px]:text-[.87rem]">From the first morning light to the final seal, follow the little acts of care that make a world of difference.</p>
          <span className="mt-3 flex items-center gap-[9px] text-[.65rem] min-[601px]:mt-[15px] min-[601px]:text-[.69rem]"><span className="text-[1.05rem] text-[#8c9a62]" aria-hidden="true">✦</span> 10 thoughtful steps. One promise of freshness.</span>
        </div>
      </div>

      <div ref={journey} className="grid grid-cols-1 overflow-hidden rounded-[15px] bg-forest-900 shadow-[0_14px_30px_rgba(32,53,28,.05)] min-[601px]:rounded-[20px] min-[851px]:grid-cols-[1.65fr_1fr]" id="process-scene" aria-label={`Step ${active + 1}: ${stage.title}`}>
        <div className={styles.scene}>
          {outgoing !== null && outgoing !== active && !failed[outgoing] && <div className={styles.photo} aria-hidden="true">
            <Image src={processStages[outgoing].image} alt="" fill sizes="(max-width: 760px) 100vw, 60vw" />
          </div>}
          {!failed[active] && <div key={`${active}-${replayKey}`} className={`${styles.photo} ${ready ? styles.photoEnter : ""}`}>
            <Image src={stage.image} alt={stage.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 55vw, 60vw"
              className={styles.camera} onLoad={() => setLoaded((items) => items[active] ? items : { ...items, [active]: true })}
              onError={() => setFailed((items) => ({ ...items, [active]: true }))} />
            {secondaryImage && !reducedMotion && !secondaryFailed && <div className={styles.secondAnimal}>
              <Image src={secondaryImage} alt="" aria-hidden="true" fill
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 55vw, 60vw"
                loading={inView ? "eager" : "lazy"}
                onLoad={() => setSecondaryLoaded(true)} onError={() => setSecondaryFailed(true)} />
            </div>}
          </div>}
          {!ready && <span className={styles.loadingScene} role="status">Preparing this scene…</span>}
          {failed[active] && <div className={styles.imageFallback}><ProcessDetail stage={active} /><p>{stage.caption}</p></div>}
          {inView && active < processStages.length - 1 && <div className={styles.preload} aria-hidden="true">
            <Image src={processStages[active + 1].image} alt="" width={1200} height={675} loading="eager" sizes="(max-width: 760px) 100vw, 60vw"
              onLoad={() => setLoaded((items) => items[active + 1] ? items : { ...items, [active + 1]: true })} />
          </div>}
          <div className={styles.sceneShade} />
          <span className={styles.sceneBadge}><span aria-hidden="true" /> A morning at Veda</span>
          <m.div className={styles.sceneCaption} key={`caption-${active}`}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}>
            <span>{String(active + 1).padStart(2, "0")} / 10</span>
            <p>{stage.caption}</p>
          </m.div>
          {active === 9 && <div className={styles.brandReveal}>
            <Image src="/assets/veda-logo.png" alt="Veda Dairy Farm" width={64} height={64} />
            <span><strong>Veda Dairy Farm</strong><small>Freshness You Can Trust.</small></span>
          </div>}
        </div>

        <div className={styles.story}>
          <div className={styles.stageMeta}><span>{stage.category}</span><span>Step {String(active + 1).padStart(2, "0")}</span></div>
          <m.div className={styles.storyContent} key={active}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}>
            <div className={styles.detail}><ProcessDetail stage={active} /></div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <div className={styles.careNote}><span aria-hidden="true">✓</span>{stage.care}</div>
          </m.div>
          <div className={styles.controls}>
            <button type="button" className={styles.playButton} disabled={reducedMotion}
              onClick={() => active === 9 && !playing ? replay() : setPlaying((value) => !value)}
              aria-label={reducedMotion ? "Automatic playback disabled for reduced motion" : active === 9 && !playing ? "Replay journey" : playing ? "Pause journey" : "Play journey"}>
              <ControlIcon type={active === 9 && !playing ? "replay" : playing && !reducedMotion ? "pause" : "play"} />
              {reducedMotion ? "Static view" : active === 9 && !playing ? "Replay journey" : playing ? "Pause journey" : "Play journey"}
            </button>
            <div className={styles.navigation}>
              <button type="button" onClick={replay} aria-label="Restart from step 1"><ControlIcon type="replay" /></button>
              <button type="button" disabled={active === 0} onClick={() => selectStage(active - 1)} aria-label="Previous stage"><ControlIcon type="previous" /></button>
              <button type="button" disabled={active === 9} onClick={() => selectStage(active + 1)} aria-label="Next stage"><ControlIcon type="next" /></button>
            </div>
          </div>
        </div>
      </div>

      <nav ref={timeline} className={styles.timeline} aria-label="Milking process stages" onFocusCapture={() => setPlaying(false)}>
        <ol>
          {processStages.map((item, index) => <li key={item.image} data-active={index === active} data-complete={index < active}>
            <button type="button" onClick={() => selectStage(index)} aria-current={index === active ? "step" : undefined}
              aria-label={`Step ${index + 1}: ${item.label}`} aria-controls="process-scene">
              <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.stepLabel}>{item.label}</span>
              <span className={styles.stepTrack} aria-hidden="true"><span key={`${active}-${replayKey}`} className={index === active && !reducedMotion ? styles.stepProgress : ""} /></span>
            </button>
          </li>)}
        </ol>
      </nav>

      <div className={styles.sectionFoot}>
        <p>Gir cows & Murrah buffaloes <span aria-hidden="true">·</span> Gentle care, from farm to home.</p>
        <details className={styles.allSteps}>
          <summary>Read all 10 steps <span aria-hidden="true">↗</span></summary>
          <ol>{processStages.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol>
        </details>
      </div>
      <p className={styles.visualNote}>Illustrative farm scenes.</p>
      <div className={styles.srOnly} role="status" aria-live={playing && !reducedMotion ? "off" : "polite"} aria-atomic="true">
        Step {active + 1} of 10: {stage.title}. {stage.description}
      </div>
      <noscript><p className={styles.noScript}>Read the complete journey using “Read all 10 steps” above.</p></noscript>
    </section>
  );
}
