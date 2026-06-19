import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProduct, getRelated, products, formatPrice } from "@/lib/data";
import ProductDetail from "@/components/product/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produit introuvable" };
  return {
    title: product.name,
    description: `${product.name} — ${formatPrice(product.price)}. ${product.description.slice(0, 120)}`,
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 140),
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product);
  return <ProductDetail product={product} related={related} />;
}
