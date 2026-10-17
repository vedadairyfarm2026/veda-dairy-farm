import type { products } from "@/config/site";

export type ProductSlug = typeof products[number]["slug"];

export type ProductOffer = {
  name: string;
  packSize: string;
  priceInr: number;
  availability?: "InStock" | "OutOfStock" | "PreOrder" | "LimitedAvailability";
};

export type ProductCommercialDetails = {
  source: string | null;
  preparation: string | null;
  ingredients: readonly string[] | null;
  storage: string | null;
  shelfLife: string | null;
  offers: readonly ProductOffer[];
};

// Publish only facts confirmed by the farm. Null values and empty lists stay off
// the website. Prices are INR for the named pack; keep them current when added.
export const productCommerce: Record<ProductSlug, ProductCommercialDetails> = {
  "fresh-milk": {
    source: "Milk from our Gir cows and Murrah buffaloes at Veda Dairy Farm in Ambheta.",
    preparation: "Traditional hand milking, clean collection and prompt cooling are part of our daily routine.",
    ingredients: null,
    storage: null,
    shelfLife: null,
    offers: [],
  },
  dahi: {
    source: null,
    preparation: null,
    ingredients: null,
    storage: null,
    shelfLife: null,
    offers: [],
  },
  ghee: {
    source: null,
    preparation: null,
    ingredients: null,
    storage: null,
    shelfLife: null,
    offers: [],
  },
  paneer: {
    source: null,
    preparation: null,
    ingredients: null,
    storage: null,
    shelfLife: null,
    offers: [],
  },
};

export type DeliveryDetails = {
  areas: readonly { name: string; postalCodes: readonly string[] }[];
  timings: string | null;
  minimumOrder: string | null;
  charges: string | null;
  regularDelivery: string | null;
};

// Contact hours are not delivery hours. Add only confirmed delivery information.
export const deliveryDetails: DeliveryDetails = {
  areas: [{ name: "Surat", postalCodes: [] }],
  timings: "6:00 AM–9:00 PM",
  minimumOrder: null,
  charges: "Currently free",
  regularDelivery: null,
};
