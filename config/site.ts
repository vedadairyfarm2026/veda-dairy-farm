enum ProductCategory {
  Milk = "Milk",
  Dahi = "Dahi",
  Ghee = "Ghee",
  Paneer = "Paneer",
}

enum SiteSection {
  Products = "products",
  Story = "story",
  Promise = "promise",
  Contact = "contact",
}

export const siteConfig = {
  name: "Veda Dairy Farm",
  description:
    "Farm-fresh milk and traditional dairy products delivered with care across Surat.",
  address: {
    street: process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS?.trim() || "Ambheta Village, Olpad Taluka, Surat District",
    city: "Ambheta",
    region: "Gujarat",
    postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE?.trim() || "395005",
    country: "IN",
  },
  phone: "7567752001",
  internationalPhone: "+917567752001",
  mapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL?.trim() || "",
  reviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim() || "",
  whatsappUrl: "https://wa.me/917567752001",
  instagramUrl: "https://www.instagram.com/vedadairyfarm2026/",
  facebookUrl: "https://www.facebook.com/vedadairyfarm2026/",
  hours: "Daily · 6:00 AM – 9:00 PM",
  navItems: [
    { label: "Our dairy", href: `#${SiteSection.Products}` },
    { label: "Our farm", href: `#${SiteSection.Story}` },
    { label: "Our process", href: "#process" },
    { label: "The Veda promise", href: `#${SiteSection.Promise}` },
    { label: "Contact", href: `#${SiteSection.Contact}` },
  ],
} as const;

export const products = [
  {
    category: ProductCategory.Milk,
    slug: "fresh-milk",
    title: "Fresh farm milk",
    description: "Cow and buffalo milk for brighter mornings and your daily chai.",
    image: "/assets/design/milk-bottle.webp",
  },
  {
    category: ProductCategory.Dahi,
    slug: "dahi",
    title: "Homestyle dahi",
    description: "Thick, creamy comfort for meals, raita and everything between.",
    image: "/assets/design/dahi.webp",
  },
  {
    category: ProductCategory.Ghee,
    slug: "ghee",
    title: "Traditional ghee",
    description: "Golden, aromatic goodness for warm rotis and family favourites.",
    image: "/assets/design/ghee.webp",
  },
  {
    category: ProductCategory.Paneer,
    slug: "paneer",
    title: "Fresh paneer",
    description: "Soft, fresh paneer for everyday curries and weekend feasts.",
    image: "/assets/design/paneer.webp",
  },
] as const;

export const promisePoints = [
  { number: "01", title: "Farm-first sourcing", text: "A thoughtful journey from healthy animals to your kitchen." },
  { number: "02", title: "Handled with care", text: "Clean processes and careful cold handling at every step." },
  { number: "03", title: "Made for Surat homes", text: "Reliable local delivery, familiar service and a human touch." },
] as const;

export const socialLinks = [
  { label: "Instagram", href: siteConfig.instagramUrl },
  { label: "Facebook", href: siteConfig.facebookUrl },
  { label: "WhatsApp", href: siteConfig.whatsappUrl },
] as const;
