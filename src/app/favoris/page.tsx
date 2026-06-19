"use client";

import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { HeartIcon } from "@/components/icons";

export default function FavorisPage() {
  const { favorites, ready } = useStore();
  const favProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="container-bm py-12">
      <div className="mb-10 text-center">
        <span className="text-sm uppercase tracking-widest text-primary">Votre sélection</span>
        <h1 className="heading-serif mt-2 text-4xl sm:text-5xl">Favoris</h1>
      </div>

      {!ready ? null : favProducts.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <HeartIcon className="h-12 w-12 text-ink/20" />
          <p className="mt-4 text-ink/60">Vous n&apos;avez pas encore de favoris.</p>
          <Link href="/collection" className="btn-primary mt-6">Parcourir la collection</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {favProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
