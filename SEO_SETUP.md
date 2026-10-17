# Veda Dairy Farm SEO setup

The website is configured for **https://www.vedadairyfarm.com** and the confirmed farm address: **Ambheta Village, Olpad Taluka, Surat District, Gujarat, India, 395005**. The contact number is **+91 7567752001**.

## What is implemented

- Six pages with individual titles, descriptions, canonical URLs and social sharing tags.
- Product pages for fresh cow and buffalo milk, dahi/curd, traditional ghee and paneer, plus a Surat delivery page.
- LocalBusiness, WebSite, WebPage, BreadcrumbList and delivery Service JSON-LD, with visible matching contact details.
- A 1200 × 630 PNG social preview, generated locally during the build.
- An image sitemap at `/sitemap.xml` and crawler rules at `/robots.txt`.
- Static HTML content, descriptive internal links, accessible headings and image descriptions.
- Optional Google Search Console HTML verification and a switch to prevent preview builds from being indexed.

No unverified prices, ratings, certifications or product claims have been added to structured data. FAQ answers are visible page content. Google retired FAQ rich results in May 2026, so no FAQ rich-result markup has been added.

## Confirmed delivery and product information

`config/commerce.ts` is the shared source for customer-facing delivery details and optional product facts. The owner confirmed Surat delivery, a **6:00 AM–9:00 PM** delivery window and **currently free delivery**. The delivery page and homepage FAQ show these details. Product prices and pack sizes have not been decided; minimum order and individual delivery PIN codes have not been supplied. Empty values stay hidden instead of publishing assumptions.

For each product, add only confirmed source, preparation, ingredients, storage instructions, shelf life and pack offers to `productCommerce`. An offer needs its actual name, pack size and INR price; availability is optional. The product page renders that information and matching Product/Offer JSON-LD only when offers exist. Cow and buffalo offers remain separate products. Rebuild after changes, and keep visible prices and availability current. No Product/Offer markup is currently emitted because no prices were provided.

The homepage now describes fresh milk and dairy delivery in Surat directly and includes the confirmed Ambheta/Olpad farm location. Generated farm, worker, delivery and product images are identified as illustrations. Replace those assets and their captions with genuine business photographs when supplied; generated scenes do not document farm operations. A personal owner story and customer testimonials still require authentic material from the owner/customers.

Set `NEXT_PUBLIC_GOOGLE_MAPS_URL` to the real verified listing link. Until it is supplied, the contact link explicitly searches for Ambheta rather than presenting a claimed listing. Set `NEXT_PUBLIC_GOOGLE_REVIEW_URL` to the actual **Ask for reviews** link from that Business Profile to display an honest-review invitation. The review invitation stays hidden without the link. Business Profile creation/verification and collecting real customer reviews happen in the owner's Google account; website code cannot verify the business or create customer reviews.

## Build and check

```powershell
npm run lint
npm run build
npm run check:seo
```

Deploy the generated `out` directory. `check:seo` audits the exported files for unique metadata, indexing rules, each page's canonical, social image files, structured data, address consistency, all internal links and anchors, sitemap membership and the 404 indexing rule. It checks the local output; public DNS, HTTPS, response codes and Google indexing must also be checked after launch.

The confirmed domain and address work without environment variables. To override them or add a verification token, copy `.env.example` to `.env.local` and edit the values. Rebuild after changes because this website is statically exported.

Development mode uses `noindex`. For a published preview or staging build, set `SEO_INDEXING_ENABLED=false` in that deployment's build environment, then run `node scripts/check-seo.mjs --preview`. For the real website, keep indexing enabled and run `node scripts/check-seo.mjs --require-indexable`.

## Launch on the domain

1. Connect `vedadairyfarm.com` to the hosting provider and create the provider's required DNS records for the apex domain and `www`. Use the provider's actual records; the correct A/CNAME values depend on the selected host.
2. Enable valid HTTPS for both names. Permanently redirect the apex and HTTP versions to `https://www.vedadairyfarm.com`, preserving the path and query string.
3. Serve clean page paths from the matching exported `.html` files. Keep the URLs without trailing slashes, as configured by Next.js. An example Nginx location rule is `try_files $uri $uri.html $uri/ =404;`; configure the host to serve `404.html` with HTTP status 404 for unknown paths.
4. Serve `/social-preview.png` as `image/png`, `/sitemap.xml` as XML and `/robots.txt` as text. Allow Google to fetch CSS, JavaScript and images.
5. Open all six public pages and confirm they return HTTP 200. Confirm unknown pages return 404 rather than the homepage. Check the canonical URL in the page source and confirm no `noindex` tag or `X-Robots-Tag: noindex` is added by the host.

Because this project uses `output: "export"`, domain redirects and host headers belong in the hosting configuration. Next.js server redirect configuration does not run on a static host.

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console/) using the account that will own the website.
2. Add a Domain property for `vedadairyfarm.com` and publish Google's supplied DNS TXT verification record. Alternatively, verify a URL-prefix property for `https://www.vedadairyfarm.com/` with the HTML tag method: place only the supplied `content` value in `GOOGLE_SITE_VERIFICATION`, then rebuild and deploy.
3. Submit **https://www.vedadairyfarm.com/sitemap.xml** after DNS and hosting work.
4. Use URL Inspection to inspect the homepage and important product/delivery pages, run the live test and request indexing.
5. Review Page indexing, Core Web Vitals and Performance over time. Compare impressions, clicks and enquiries for searches such as “milk delivery Surat,” “cow milk Surat,” “buffalo milk Surat,” “dahi Surat,” “ghee Surat,” “paneer Surat” and your business name.

Check the live website with Google's [Rich Results Test](https://search.google.com/test/rich-results) and [PageSpeed Insights](https://pagespeed.web.dev/). Valid structured data can support eligible search features; it does not guarantee that Google will display them.

## Google Maps and local visibility

1. Claim or create a [Google Business Profile](https://www.google.com/business/) using the real business name **Veda Dairy Farm**, then complete Google's verification.
2. Choose the most accurate available business category. Add the website, phone number, hours, products and only the actual delivery/service areas.
3. Publish the farm address only if customers can visit the business there under Google's profile rules. If the business only delivers, use the applicable service-area business settings. The website currently displays the address supplied by the owner; adjust this if it should not be public.
4. Add real farm, team and product photographs. The website's illustrative farm images should not replace genuine photos used to verify or represent the business on Maps.
5. Ask customers for honest reviews after real orders and reply helpfully. Keep the business name, phone and address consistent across the website, profile and social accounts.
6. Once the verified listing is available, set its link in `NEXT_PUBLIC_GOOGLE_MAPS_URL` and rebuild. Until then, the website's Maps link searches for the supplied address; it is not a claimed business listing.

Google says local results depend on relevance, distance and prominence. SEO improves the site's eligibility and usefulness; first place for every business-related search is not something a site implementation can promise.

## References

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google local ranking guidance](https://support.google.com/business/answer/7091?hl=en)
- [Business Profile representation guidelines](https://support.google.com/business/answer/3038177?hl=en)
- [Google documentation update: FAQ rich results retired](https://developers.google.com/search/updates#may-2026)
