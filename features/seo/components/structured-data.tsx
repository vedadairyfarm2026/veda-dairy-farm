import { absoluteUrl, siteUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";

type JsonLd = Record<string, unknown>;

export function StructuredData({ data }: { data: JsonLd }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function BusinessStructuredData() {
  if (!siteUrl) return null;
  const hasAddress = Boolean(siteConfig.address.street && siteConfig.address.postalCode);

  return <StructuredData data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": hasAddress ? "LocalBusiness" : "Organization",
        "@id": `${siteUrl}/#business`, name: siteConfig.name, url: `${siteUrl}/`,
        description: siteConfig.description, telephone: siteConfig.internationalPhone,
        logo: absoluteUrl("/assets/design/veda-logo.webp"),
        image: absoluteUrl("/assets/design/hero-farm.webp"),
        sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
        areaServed: { "@type": "City", name: "Surat" },
        contactPoint: {
          "@type": "ContactPoint", telephone: siteConfig.internationalPhone,
          contactType: "customer service", areaServed: "Surat",
        },
        ...(hasAddress ? {
          address: {
            "@type": "PostalAddress", streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.region,
            postalCode: siteConfig.address.postalCode, addressCountry: siteConfig.address.country,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "06:00", closes: "21:00",
          },
          ...(siteConfig.mapsUrl ? { hasMap: siteConfig.mapsUrl } : {}),
        } : {}),
      },
      {
        "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`,
        name: siteConfig.name, inLanguage: "en-IN", publisher: { "@id": `${siteUrl}/#business` },
      },
    ],
  }} />;
}

export function PageStructuredData({ title, description, path, breadcrumbs = [], service = false }: {
  title: string; description: string; path: string;
  breadcrumbs?: { name: string; path: string }[];
  service?: boolean;
}) {
  if (!siteUrl) return null;
  const url = absoluteUrl(path)!;
  const graph: JsonLd[] = [{
    "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description,
    inLanguage: "en-IN", isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    ...(breadcrumbs.length ? { breadcrumb: { "@id": `${url}#breadcrumbs` } } : {}),
    ...(service ? { mainEntity: { "@id": `${url}#service` } } : {}),
  }];

  if (breadcrumbs.length) graph.push({
    "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`,
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path),
    })),
  });

  if (service) graph.push({
    "@type": "Service", "@id": `${url}#service`,
    name: "Milk and dairy home delivery in Surat", serviceType: "Local dairy delivery",
    description, url, provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "City", name: "Surat" },
  });

  return <StructuredData data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
