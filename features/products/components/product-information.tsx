import type { ProductCommercialDetails, ProductOffer } from "@/config/commerce";
import styles from "@/features/home/components/content.module.css";

const availabilityLabels: Record<NonNullable<ProductOffer["availability"]>, string> = {
  InStock: "Available",
  OutOfStock: "Currently unavailable",
  PreOrder: "Available to pre-order",
  LimitedAvailability: "Limited availability",
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

export function ProductInformation({ details }: { details: ProductCommercialDetails }) {
  const facts = [
    { label: "Milk source", value: details.source },
    { label: "Preparation and handling", value: details.preparation },
    { label: "Ingredients", value: details.ingredients?.length ? details.ingredients.join(", ") : null },
    { label: "Storage", value: details.storage },
    { label: "Shelf life", value: details.shelfLife },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value?.trim()));

  if (!facts.length && !details.offers.length) return null;

  return <section className="veda-section" aria-labelledby="product-information">
    <p className="veda-kicker">Know your dairy</p>
    <h2 className="veda-heading" id="product-information">Product information</h2>
    {facts.length > 0 && <dl className="mt-7 grid gap-6 sm:grid-cols-2">
      {facts.map(fact => <div key={fact.label} className="border-t border-forest-900/15 pt-4">
        <dt className="font-semibold text-forest-900">{fact.label}</dt>
        <dd className="mt-2 leading-7 text-forest-700">{fact.value}</dd>
      </div>)}
    </dl>}
    {details.offers.length > 0 && <div className="mt-10">
      <h3 className="font-display text-2xl text-forest-900">Pack sizes and prices</h3>
      <div className={styles.relatedGrid}>
        {details.offers.map((offer, index) => <article className={styles.relatedCard} id={`product-offer-${index + 1}`} key={`${offer.name}-${offer.packSize}`}>
          <h4 className="font-display text-2xl text-forest-900">{offer.name}</h4>
          <p>{offer.packSize}</p>
          <p><strong className="text-xl text-forest-900">{priceFormatter.format(offer.priceInr)}</strong> per pack</p>
          {offer.availability && <p>{availabilityLabels[offer.availability]}</p>}
        </article>)}
      </div>
      <p className={styles.note}>Delivery details are confirmed for your address before you order.</p>
    </div>}
  </section>;
}
