This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

SEO is configured for Veda Dairy Farm's confirmed domain and Ambheta address. See [SEO_SETUP.md](./SEO_SETUP.md) for the implemented pages, build checks, hosting requirements and Google Search Console / Business Profile launch steps.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to self-host Geist and DM Serif Display.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Static build and Cloudflare Pages

```powershell
npm run lint
npm run build
npm run check:seo
npm run check:performance
npm start
```

`npm start` previews the production export at `http://localhost:4173`, including clean page URLs and real 404 responses. The site is exported as HTML, CSS, JavaScript and images, so it needs no Next.js server on Cloudflare.

Upload the **contents** of `out` (or a ZIP with `index.html` at its root) using Cloudflare Pages Direct Upload. Keep `_headers` in the upload: it gives content-hashed scripts, fonts and generated images a one-year immutable browser cache. HTML and stable image URLs retain Cloudflare's default revalidation. [Cloudflare header configuration](https://developers.cloudflare.com/pages/configuration/headers/)

Before development and production builds, `scripts/optimize-images.mjs` uses Sharp to create responsive WebP files and the manifest used by the static image loader. Generated files are ignored by Git and regenerated automatically; full-resolution source artwork remains in `public/assets`. The production export excludes source PNGs and process originals, while retaining the stable design images referenced by the sitemap and structured data.

CSS and IntersectionObserver handle reveal and hover effects. The hero stays visible on initial load, reduced motion is respected, and the process journey stops work while paused, offscreen or in a hidden tab. It preloads only the next scene while running, at low priority, using the same responsive sizes as the displayed image.

`check:performance` checks every exported page for responsive image files, keeps modern-browser initial JavaScript under 180 KiB gzip, limits the 480px hero to 80 KiB, and checks Cloudflare's asset/file limits and cache rules. These are build-size checks; field Core Web Vitals still depend on the deployed host and visitors' devices and connections.

## Design and responsive review

The design review retained the cream, forest green, display serif and farm artwork, while addressing small text, crowded product actions, inconsistent page layouts and cramped phone controls. The homepage now has a clear ordering action alongside product browsing. Product images open their detail pages, with separate WhatsApp enquiry actions. Product and delivery pages share the same navigation, footer, typography and native FAQ accordion.

Phone layouts use compact product rows and full-width primary actions. Main reading text is 16px, with smaller secondary text; primary controls and navigation buttons have at least 44px touch areas. The mobile menu overlays the page so section links remain correctly positioned beneath the sticky header. The process starts when visitors press Play and supports pause and manual step selection, keeping the content stable for reading.

The production export was visually reviewed in Chrome at 320px, 390px, 768px and 1366px, with no page-level horizontal overflow at those widths. Milk and delivery pages, FAQ expansion, menu navigation and process controls were checked on a 390px viewport. Representative text/button contrast checks passed 4.5:1, including body text on cream at 6.23:1 and white primary-button text at 11.22:1. These checks address [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [text contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) and comfortable touch targets; they are not a complete accessibility audit.
