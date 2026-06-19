"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "../ProductCard";
import FadeIn from "../FadeIn";

export default function Featured() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="featured" className="bg-surface py-20">
      <div className="container-bm">
        <FadeIn className="mb-10 flex flex-col items-center text-center">
          <span className="text-sm uppercase tracking-widest text-primary">Sélection</span>
          <h2 className="heading-serif mt-2 text-4xl sm:text-5xl">Produits vedettes</h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
          {featured.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link href="/collection" className="btn-outline">
            Voir toute la collection
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
