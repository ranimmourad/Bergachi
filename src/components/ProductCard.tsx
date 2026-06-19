"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { formatPrice, categories } from "@/lib/data";
import { useStore } from "@/context/StoreContext";
import { HeartIcon } from "./icons";

export default function ProductCard({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite, ready } = useStore();
  const fav = ready && isFavorite(product.id);
  const categoryName = categories.find((c) => c.slug === product.category)?.name;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden bg-surface">
        <Link href={`/produit/${product.slug}`} aria-label={product.name}>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Link>
        <button
          onClick={() => toggleFavorite(product.id)}
          aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition-colors ${
            fav ? "text-primary" : "text-ink/60 hover:text-primary"
          }`}
        >
          <HeartIcon filled={fav} className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-xs uppercase tracking-wider text-primary">{categoryName}</span>
        <Link href={`/produit/${product.slug}`}>
          <h3 className="heading-serif mt-1 text-xl leading-snug transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <span className="mt-1 text-sm font-medium text-ink/80">{formatPrice(product.price)}</span>
      </div>
    </motion.article>
  );
}
