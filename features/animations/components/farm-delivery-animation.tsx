import { DairyMotionScene } from "./dairy-motion-scene";
import styles from "./farm-delivery-animation.module.css";

export function FarmDeliveryAnimation() {
  return (
    <DairyMotionScene
      className={styles.scene}
      label="farm-to-door delivery"
    >
      <svg className={styles.landscape} viewBox="0 0 560 192" fill="none" aria-hidden="true">
        <circle cx="390" cy="40" r="17" fill="#eddda9" />
        <g stroke="#d6c48c" strokeWidth="1.5" strokeLinecap="round">
          <path d="M390 13v-4m0 62v-4m27-27h4m-62 0h4m46-19 3-3m-44 44 3-3m38 0 3 3m-44-44 3 3" />
        </g>
        <path d="M166 48c2-9 15-11 20-3 7-5 17-1 17 7h-44c0-4 3-5 7-4Zm113-16c3-8 15-8 18 0 7-3 14 0 15 6h-41c0-5 4-8 8-6Z" fill="#e6eadb" />
        <path d="M0 134c49-27 104-8 154-14 66-8 90-26 161-12 66 13 109-10 165-3 33 4 59 18 80 23v38H0Z" fill="#e8ebd9" />
        <path d="M0 153c87-29 137-5 204-4 70 2 130-19 197-11 65 7 97-1 159-13v43H0Z" fill="#d7dfc6" />

        <g stroke="#75845c" strokeWidth="2" strokeLinecap="round">
          <path d="M19 147v-30m0 10-8-8m8 14 9-9" />
          <path d="M134 150v-22m12 24v-26m-15 10h18m-18 8h18" />
          <path d="M534 149v-30m0 12-8-9m8 15 9-10" />
        </g>
        <path d="M9 120c-6-10 0-20 10-20 12 0 17 15 8 22-6 4-14 3-18-2Zm515-1c-5-10 0-19 10-19 11 0 18 14 10 22-5 4-15 2-20-3Z" fill="#94aa78" />

        <g stroke="#526846" strokeWidth="2" strokeLinejoin="round">
          <path d="M44 98h84v52H44Z" fill="#e8d8af" />
          <path d="m35 99 51-34 51 34Z" fill="#60784d" />
          <path d="m48 96 38-25 38 25" stroke="#92a277" />
          <path d="M66 150v-32a3 3 0 0 1 3-3h25a3 3 0 0 1 3 3v32" fill="#405d3e" />
          <path d="M81 116v34m-14-29 29 24m0-24-29 24" stroke="#a9b38d" strokeWidth="1.5" />
          <rect x="105" y="110" width="14" height="14" rx="1" fill="#faf4dc" />
          <path d="M112 110v14m-7-7h14" strokeWidth="1.5" />
        </g>
        <path d="m51 150-3-8m7 8 3-9m-3 9v-13m76 16 3-7m-7 6-3-6" stroke="#8ca36e" strokeWidth="2" strokeLinecap="round" />

        <g stroke="#64774f" strokeWidth="2" strokeLinejoin="round">
          <path d="M450 108h66v45h-66Z" fill="#eee1bd" />
          <path d="m439 109 44-35 44 35Z" fill="#496543" />
          <path d="m451 103 32-25 32 25" stroke="#8da079" />
          <path d="M502 85V73h8v18" fill="#60764d" />
          <path d="M475 153v-27a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v27" fill="#64794e" />
          <path d="M488 137h1" stroke="#efe3bc" strokeWidth="2.5" strokeLinecap="round" />
          <rect className={styles.homeWindow} x="457" y="119" width="11" height="13" rx="1" />
          <rect className={styles.homeWindow} x="500" y="119" width="9" height="13" rx="1" />
          <path d="M462.5 120v11m42-11v11" strokeWidth="1.2" />
          <path d="M470 154h29m-34 4h39" strokeLinecap="round" />
        </g>
        <path d="M518 146h9l-1 8h-7Z" fill="#bb9867" />
        <path d="M522 147v-11m0 7c-9 0-9-8-9-8s8 0 9 8Zm0-4c0-8 8-8 8-8s0 8-8 8Z" stroke="#849963" strokeWidth="1.6" strokeLinejoin="round" />
        <g className={styles.arrivalMark}>
          <circle cx="523" cy="66" r="11" fill="#e2e8d0" />
          <path d="m518 66 3 3 6-6" stroke="#4f7044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <path d="M0 164h560v28H0Z" fill="#ece9d8" />
        <path d="M0 164h560" stroke="#bdc8a8" strokeWidth="1.5" />
        <path d="M137 177h295" stroke="#c6ccb4" strokeWidth="2" strokeDasharray="4 7" strokeLinecap="round" />
        <path className={styles.routeTrace} d="M137 177h295" pathLength="1" stroke="#7f9665" strokeWidth="2" strokeLinecap="round" />
        <circle cx="137" cy="177" r="3" fill="#7f9665" />
        <circle cx="432" cy="177" r="3" fill="#7f9665" />

        <g className={styles.courier}>
          <ellipse cx="48" cy="163" rx="46" ry="3" fill="#9ca887" opacity=".25" />
          <g className={styles.speedLines} stroke="#8d9e76" strokeWidth="1.5" strokeLinecap="round">
            <path d="M-8 128H2m-18 9H0m-9 10h7" />
          </g>
          <g stroke="#294b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g className={styles.wheel}>
              <circle cx="17" cy="152" r="12" fill="#36503a" />
              <circle cx="17" cy="152" r="7" fill="#e5dfc8" />
              <path d="M17 146v12m-6-6h12" stroke="#8a9b76" strokeWidth="1.5" />
              <circle cx="17" cy="152" r="2" fill="#60764e" stroke="none" />
            </g>
            <g className={styles.wheel}>
              <circle cx="78" cy="152" r="12" fill="#36503a" />
              <circle cx="78" cy="152" r="7" fill="#e5dfc8" />
              <path d="M78 146v12m-6-6h12" stroke="#8a9b76" strokeWidth="1.5" />
              <circle cx="78" cy="152" r="2" fill="#60764e" stroke="none" />
            </g>
            <path d="M9 141c5-8 17-10 29-6l15 8h17l-3-22h11l7 19c-7 2-13 5-16 10H41c-3-8-8-12-17-12H9Z" fill="#d0b476" />
            <path d="M44 144h22m-1-23 7-7h9m-2-1 5 2" />
            <path d="M78 120h7l1 7h-6" fill="#f3e7bf" />
            <path d="M26 131h23" strokeWidth="5" />
            <path d="m45 119 10 12-5 12h13" strokeWidth="7" />
            <path d="m40 101-7 23 16 4 8-20Z" fill="#8ca477" />
            <path d="m53 106 10 12 10-2" stroke="#d5af87" strokeWidth="5" />
            <path d="M47 96v7" stroke="#d5af87" strokeWidth="6" />
            <path d="M44 87c2-6 13-5 15 1v5c0 7-10 10-14 4Z" fill="#dfba93" />
            <path d="M42 89c-1-13 17-15 19-2l-1 3H43Z" fill="#4c6b45" />
            <path d="M47 83h8" stroke="#95aa7a" strokeWidth="1.5" />
            <path d="M57 91h3" strokeWidth="1.5" />
            <path d="M10 128h16" />
            <path d="M10 127v-17a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v17Z" fill="#e6ebdf" />
            <path d="M13 107v-5h9v5m-12 5h15m-12 12h9" stroke="#7e9373" strokeWidth="1.5" />
            <path d="M12 102h11" strokeWidth="2.5" />
            <path d="M17 116v4" stroke="#a2b48c" strokeWidth="2.5" />
          </g>
        </g>
      </svg>
      <div className={styles.caption}>
        <span><i aria-hidden="true" />Ambheta farm</span>
        <svg viewBox="0 0 48 12" fill="none" aria-hidden="true"><path d="M1 6h44m-5-4 5 4-5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>Your Surat doorstep<i aria-hidden="true" /></span>
      </div>
    </DairyMotionScene>
  );
}
