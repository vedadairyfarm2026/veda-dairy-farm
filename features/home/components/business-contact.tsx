import { siteConfig } from "@/config/site";

export function BusinessContact() {
  const address = [siteConfig.address.street, siteConfig.address.region, "India", siteConfig.address.postalCode].filter(Boolean).join(", ");
  const mapsUrl = siteConfig.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return <address className="space-y-4 text-[.9375rem] leading-7 text-forest-700 not-italic">
    <p>{siteConfig.name}<br />{address}</p>
    <p><a className="inline-flex min-h-11 items-center underline underline-offset-4" href={`tel:${siteConfig.internationalPhone}`}>+91 {siteConfig.phone}</a><br />{siteConfig.hours}</p>
    <a className="inline-flex min-h-11 items-center underline underline-offset-4" href={mapsUrl} target="_blank" rel="noreferrer">{siteConfig.mapsUrl ? "View our Google Maps listing" : "Find Ambheta on Google Maps"} ↗</a>
    {siteConfig.reviewUrl && <p><a className="inline-flex min-h-11 items-center underline underline-offset-4" href={siteConfig.reviewUrl} target="_blank" rel="noreferrer">Share an honest Google review ↗</a></p>}
  </address>;
}
