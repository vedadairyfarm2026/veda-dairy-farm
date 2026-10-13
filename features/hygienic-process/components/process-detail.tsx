import styles from "./hygienic-process.module.css";

// Small, educational motion details complement the photographic scene.
// CSS animates only flow and simple gestures; animal photographs keep natural poses.
export function ProcessDetail({ stage }: { stage: number }) {
  return <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {stage === 0 && <>
      <path d="M18 81h124M26 81V21h47v60M62 27v54" opacity=".3" />
      <g className={styles.arrival}><path d="M48 69h20l4 11H44V48h13v21M80 69h20l4 11H76V48h13v21" fill="#dbe6d5" /><path d="M51 37h45" /></g>
      <path d="M115 38h23l5 43h-33l5-43ZM113 38h27M120 30h13v8M111 52h30" />
      <path className={styles.sparkle} d="M127 15v9M122 20h10" stroke="#ad843f" />
    </>}
    {stage === 1 && <>
      <path d="M37 32V16h30v10H51v6M27 38h35M36 16v-5M28 11h16" />
      <path className={styles.waterFlow} d="M46 35v22M53 35v22M39 35v22" stroke="#6599a3" strokeDasharray="4 7" />
      <g className={styles.handWash}><path d="M33 70c10-15 20-15 34-5l12 6-8 12-19-6-12 8M93 65 82 58l-18 7 9 15 20-5 12 9" fill="#e7d5c5" /><circle cx="65" cy="54" r="4" stroke="#87a889" /><circle cx="77" cy="50" r="3" stroke="#87a889" /></g>
      <path d="M116 24h25v54h-25ZM116 61h25M121 26v32M136 27v31" stroke="#8ca284" />
    </>}
    {stage === 2 && <>
      <path d="M10 59h40l-5 21H15L10 59ZM60 59h40l-5 21H65L60 59ZM110 59h40l-5 21h-30l-5-21Z" fill="#e8eee0" />
      <g className={styles.fodder}><path d="M30 57V26c-17-4-21 11 0 18 18-7 18-23 0-18M19 52l22-5" stroke="#55784b" fill="#ceddc0" /></g>
      <path d="m69 52 19-16M74 54l17-9M67 46l15-13M81 54l12-4" stroke="#ad843f" />
      <g className={styles.feedPellets} fill="#ad843f" stroke="none"><circle cx="121" cy="52" r="3" /><circle cx="132" cy="52" r="3" /><circle cx="138" cy="44" r="3" /><circle cx="124" cy="42" r="3" /></g>
      <path d="M16 88h28M66 88h28M116 88h28" opacity=".25" />
    </>}
    {stage === 3 && <>
      <path d="M19 54c-1-13 7-25 19-28l19 9 9 18-8 16H24l-5-15ZM23 35c-18 0-18 15-6 27M54 33c16-2 21 7 14 21M29 27l-3-11M48 29l5-12M25 68v13M56 68v13" fill="#e7d5c5" />
      <path d="M97 42c1-13 12-20 26-15l17 12 2 24-14 8-27-6-4-23ZM104 27c-11-10-22 2-12 9l8-3M129 28c15-10 21 7 10 13M104 65v16M130 69v12" fill="#87948a" />
      <circle cx="36" cy="46" r="2" fill="currentColor" /><circle cx="119" cy="45" r="2" fill="currentColor" />
      <path className={styles.heart} d="M69 20c-9-10-17 5 10 19 27-14 19-29 10-19-6-8-14-8-20 0Z" fill="#ceddc0" stroke="#55784b" />
      <path className={styles.scan} d="M10 75h140" stroke="#ad843f" strokeDasharray="2 5" />
    </>}
    {stage === 4 && <>
      <path d="M19 21c0 23 11 36 36 36s36-13 36-36M34 54v13h8V56M66 56v11h8V54" fill="#e7d5c5" />
      <g className={styles.towelWipe}><path d="m28 72 19-10 32 14-12 17-36-13-3-8Z" fill="#fcfaf4" /><path d="m42 73 20 8" opacity=".4" /></g>
      <path d="M116 21h25v26h-25ZM116 58h25v26h-25M121 23v18M121 60v18" stroke="#8ca284" fill="#e8eee0" />
      <path d="m125 37 4 3 7-9M125 74l4 3 7-9" />
    </>}
    {stage === 5 && <>
      <path d="M16 50h80l-10 32H26L16 50ZM105 55h41l-8 27h-25l-8-27Z" fill="#e8eee0" />
      <g className={styles.fodder}><path d="M29 49c-3-19 11-26 20-12 6-14 19-12 25 0 9-11 22-8 18 12M35 48l7-10M59 48l-1-13M77 48l7-8" stroke="#55784b" fill="#ceddc0" /></g>
      <path className={styles.waterWave} d="M111 66q7-5 14 0t14 0" stroke="#6599a3" />
      <path d="M126 25c-13 15-10 22 0 22s13-7 0-22Z" fill="#dbeef0" stroke="#6599a3" />
    </>}
    {stage === 6 && <>
      <path d="M16 17c1 18 10 24 34 24 20 0 29-9 30-24M32 40v13h8V42" fill="#e7d5c5" />
      <path className={styles.milkStream} d="M36 54v19" strokeDasharray="3 5" />
      <path d="M20 73h35l-5 17H25l-5-17Z" fill="#254b39" /><path d="M25 77h25" stroke="#fcfaf4" />
      <path d="M101 40h34l5 49H96l5-49ZM99 40h38M108 33h20v7" fill="#e0e5df" />
      <circle cx="127" cy="67" r="14" fill="#fcfaf4" /><path d="m118 57 19 20M137 57l-19 20" stroke="#a56d46" />
      <path d="M64 73h21" strokeDasharray="2 4" opacity=".4" />
    </>}
    {stage === 7 && <>
      <path d="M19 9c0 18 12 27 34 27S87 27 87 9M40 34v15h8V36M62 35v14h8V34" fill="#e7d5c5" />
      <g className={styles.handMilkLeft}><path d="m19 34 14 4 10 3c6 2 8 6 5 10l-9-3 6 7-6 4-12-10-10-2" fill="#dcb99c" /><path d="m36 43 10 5" /></g>
      <g className={styles.handMilkRight}><path d="m89 34-13 4-10 3c-6 2-8 6-5 10l9-3-6 7 6 4 12-10 10-2" fill="#dcb99c" /><path d="m73 43-10 5" /></g>
      <path className={styles.milkStream} d="m44 56 6 15M65 56l-6 15" stroke="#b4c5bb" strokeDasharray="3 5" />
      <path d="M33 70h43l-5 24H38l-5-24Z" fill="#e0e5df" /><path d="M33 70h13M64 70h12M39 83h31" />
      <path d="M112 37h30l6 48h-42l6-48ZM109 37h36M121 30h13v7M108 63h37" fill="#e0e5df" />
      <path className={styles.sparkle} d="M132 13v9M128 17h8" stroke="#ad843f" />
    </>}
    {stage === 8 && <>
      <path d="M13 20h37l-12 20v20H25V40L13 20Z" fill="#e0e5df" />
      <path d="M32 60v16h51V37h16" stroke="#87a889" strokeWidth="5" />
      <path className={styles.milkPipe} d="M32 60v16h51V37h16" stroke="#fff" strokeWidth="2" strokeDasharray="9 6" />
      <path d="M101 29h39v59h-39ZM98 29h45M108 22h26v7M107 37h27" fill="#e0e5df" />
      <g className={styles.cooling} stroke="#6599a3"><path d="M121 49v27M108 56l26 14M108 70l26-14M117 52l4 4 4-4M117 73l4-4 4 4M110 59l6-1-1-6M126 73l-1-6 6-1" /></g>
    </>}
    {stage === 9 && <>
      <path className={styles.sunrise} d="M40 39a22 22 0 0 1 44 0M27 39h70M62 8V2M36 15l-6-6M87 15l6-6" stroke="#ad843f" />
      <path d="M32 51h17v10l5 8v22H27V69l5-8V51ZM71 51h17v10l5 8v22H66V69l5-8V51Z" fill="#fcfaf4" /><path d="M30 73h21M69 73h21M31 51h19M70 51h19" stroke="#55784b" />
      <path d="M117 29v40a12 12 0 1 0 12 0V29a6 6 0 0 0-12 0Z" fill="#e8eee0" /><path d="M123 41v37M123 81v1" stroke="#6599a3" strokeWidth="4" />
      <path className={styles.sparkle} d="m100 25 4 4 8-9" stroke="#55784b" />
    </>}
  </svg>;
}
