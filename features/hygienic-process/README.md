# Veda hygienic hand-milking journey

The homepage renders `HygienicProcess` after its farm-care introduction. It uses the existing Next.js / React setup, CSS modules, responsive local WebP assets and small educational SVG animations. The animation library has been replaced by CSS effects.

The worker in the illustrative photographs is based on the user's supplied portrait, wearing clean workwear and protective headwear. All collection scenes depict traditional **hand milking**. The images were created with the built-in image-generation tool and optimised with the already installed Sharp package. Eleven scene images cover ten stages, including separate cow and buffalo milking views.

## Update a scene

1. Replace its WebP in `public/assets/process/`, retaining the stage number. Use a landscape image around 1400 pixels wide, preferably under 200 KB. Preserve the worker's identity and the hygiene details. Increment the version suffix and update its stage image path when replacing assets so image/CDN caches refresh.
2. Update the caption, description, care note, image path and descriptive alt text in `data/stages.ts` if necessary. The array is the source of truth for the timeline and static text.
3. Keep the ten stages in order: arrival → handwashing and drying → feed preparation → animal inspection → individual cleaning and drying → feeding and water → separate foremilk check → hand milking → filtering and prompt cooling → quality check, sealing and chilled delivery.
4. Use `asset-prompts.json` for the exact image prompts and `public/assets/process/worker-reference.webp` as the identity/outfit reference for future generated scenes. It is a generated reference image; the original portrait is not bundled with the site.
5. Change `STAGE_DURATION_MS` in `data/stages.ts` to adjust pacing. Stage 8 has a 17-second override and a `secondaryImage` for buffalo hand milking; it dissolves from cow to buffalo halfway through. The timer and timeline animation use the same stage duration.

Development and production builds generate content-hashed image variants automatically. Original scene files stay in the repository; only the generated variants are included in the deployment. The hidden next-scene image shares the displayed image's sizes, loads at low priority only during playback, and disappears when playback is paused. Outgoing photos are removed after their crossfade completes.

## Animation and accessibility

Photographs dissolve between scenes with gentle camera movement. `components/process-detail.tsx` draws animated method details such as handwashing, the separate strip cup, hand milking and cooling. These are illustrative motions, not documentary footage or fully animated human/animal characters. For realistic moving characters, replace the scene media with actual farm video or professionally produced animation, keeping the same poster photographs and captions. Use short muted MP4/WebM clips, load only the current scene near the viewport, pause outside it and keep the poster when reduced motion is preferred.

The journey starts when the visitor selects Play, runs once and rests on the final brand reveal. This keeps each step stable while visitors read, especially on phones. Play/pause, restart, previous/next and all ten stage buttons are available. Selecting or focusing a stage pauses playback. Time remaining is preserved when paused, when the browser tab is hidden, or when the scene leaves view. Image readiness gates progression; an unavailable image has an SVG/caption fallback. Observers, subscriptions and timeouts are cleaned up when the component unmounts.

`prefers-reduced-motion` disables all movement and automatic progression. Manual stages remain available. “Read all 10 steps” is server rendered and works without JavaScript. Automatic changes do not announce every step to screen readers; manual changes use a polite status region.

## Hygiene references

The collection method follows [FAO guidance on hand milking](https://www.fao.org/4/t0218e/t0218e05.htm): clean dry hands, gentle full-hand technique, separate foremilk inspection and hooded collection pails. The cooling scene illustrates a target of about 4°C from the [FAO small-scale dairy farming manual](https://www.fao.org/4/t1265e/t1265e06.htm). Filtering is not portrayed as a substitute for refrigeration or pasteurisation. Illustrated basic checks do not imply laboratory certification.

## Verification

`npm run lint` and `npm run build` passed after the October 13 redesign. The current static-export configuration uses locally optimised WebP assets.

Browser review covered a 1440px desktop, a 768px tablet, and 390px and 320px phones. No page overflow was found. Mobile navigation, Escape dismissal, FAQ grouping, product enquiry links and sticky navigation were checked. All ten process stages were manually selected; the card height remained stable. Playback from hand milking reached the final scene and stopped. Scene images loaded successfully.

A temporarily simulated reduced-motion preference disabled autoplay and every process animation while keeping the static image and keyboard stage selection available. The temporary preference was removed, and the normal system-preference reader was verified again.

When replacing assets or changing stage content, recheck all stages, slow/failed image loading, playback, keyboard navigation and the same breakpoints. Keep motion preferences respected.
