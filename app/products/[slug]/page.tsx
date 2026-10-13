import { notFound } from "next/navigation";
import { pageMetadata } from "@/config/seo";
import { products } from "@/config/site";
import { ProductPage } from "@/features/products/components/product-page";
import { productDetails } from "@/features/products/data/product-details";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(product => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  const detail = productDetails[product.slug];
  return pageMetadata(detail.seoTitle, detail.description, `/products/${product.slug}`);
}

export default async function Page({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  return <ProductPage product={product} detail={productDetails[product.slug]} />;
}
