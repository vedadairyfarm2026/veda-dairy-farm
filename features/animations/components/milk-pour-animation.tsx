"use client";

import { useId } from "react";
import { DairyMotionScene } from "./dairy-motion-scene";
import styles from "./milk-pour-animation.module.css";

export function MilkPourAnimation() {
  const glassId = useId();

  return <DairyMotionScene className={styles.scene} label="milk pouring">
    <p className={styles.eyebrow}>A fresh start.</p>
    <svg className={styles.illustration} viewBox="0 0 240 156" fill="none" aria-hidden="true">
      <defs>
        <clipPath id={glassId}><path d="m114 75 6 57q1 7 20 7t20-7l6-57Z" /></clipPath>
      </defs>
      <ellipse cx="116" cy="143" rx="87" ry="6" fill="#dce4cb" opacity=".6" />
      <circle cx="164" cy="57" r="45" fill="#e9eedc" />
      <path d="M187 110c-3-13 1-23 13-29 3 13-1 24-13 29Z" fill="#cedbb8" />
      <path d="m187 118 10-26" stroke="#7e9564" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M187 118c-13-2-20-9-20-19 12 1 19 8 20 19Z" fill="#adc294" />
      <path className={styles.streamEdge} d="M126 60c-2 20 3 40 3 68" stroke="#d5d9c1" strokeWidth="9" strokeLinecap="round" />
      <path className={styles.stream} d="M126 60c-2 20 3 40 3 68" stroke="#fffef8" strokeWidth="6" strokeLinecap="round" />
      <g className={styles.bottle}>
        <path d="M119 25v19c0 7-12 10-12 21v63q0 6 7 6h24q7 0 7-6V65c0-11-12-14-12-21V25Z" fill="#fffef8" stroke="#6e8561" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M113 66v58q0 4 4 4" stroke="#e0e7d2" strokeWidth="3" strokeLinecap="round" />
        <path d="M119 33h14M119 38h14" stroke="#ccd8bd" strokeWidth="1.4" />
        <ellipse cx="126" cy="25" rx="7" ry="2.5" fill="#e0e6d2" stroke="#6e8561" strokeWidth="1.5" />
        <rect x="109" y="73" width="34" height="32" rx="3" fill="#36513b" />
        <path d="M126 79c-5 0-8 3-7 6 4 1 7-1 7-6Z" fill="#d9e4bc" />
        <text x="126" y="96" textAnchor="middle" fill="#fffdf2" fontSize="8" fontFamily="Georgia, serif" letterSpacing="1">VEDA</text>
      </g>
      <path d="m113 74 7 59q1 7 20 7t20-7l7-59" fill="#fffef8" fillOpacity=".18" stroke="#8a9b79" strokeWidth="1.6" strokeLinejoin="round" />
      <g clipPath={`url(#${glassId})`}>
        <g className={styles.milk}>
          <path d="M113 93q13-6 27-1t29 0v51h-56Z" fill="#fffef8" />
          <ellipse cx="140" cy="93" rx="24" ry="3.5" fill="#f0f1e3" />
          <ellipse className={styles.ripple} cx="132" cy="93" rx="11" ry="2" stroke="#bac9a5" strokeWidth="1.2" />
        </g>
      </g>
      <ellipse cx="140" cy="74" rx="27" ry="4" stroke="#8a9b79" strokeWidth="1.6" />
      <path d="m119 82 5 45" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity=".85" />
      <path d="M123 134q17 5 34 0" stroke="#ccd5bc" strokeWidth="1.2" strokeLinecap="round" />
      <g className={styles.sparkle} stroke="#9b8d50" strokeWidth="1.4" strokeLinecap="round">
        <path d="M179 32v10m-5-5h10M201 57v6m-3-3h6" />
      </g>
    </svg>
    <p className={styles.caption}>Goodness, <em>in every pour.</em></p>
  </DairyMotionScene>;
}
