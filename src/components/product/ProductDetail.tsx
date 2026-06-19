"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { formatPrice, categories } from "@/lib/data";
import { useStore } from "@/context/StoreContext";
import ProductCard from "../ProductCard";
import { HeartIcon, ArrowRightIcon, WhatsAppIcon } from "../icons";
import { SITE } from "@/lib/data";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, toggleFavorite, isFavorite, ready } = useStore();
  const fav = ready && isFavorite(product.id);
  const categoryName = categories.find((c) => c.slug === product.category)?.name;

  const handleAdd = () => {
    addToCart(
      { id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0] },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container-bm py-10">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-ink/50">
        <Link href="/" className="hover:text-primary">Accueil</Link>
        <span>/</span>
        <Link href={`/collection?categorie=${product.category}`} className="hover:text-primary">{categoryName}</Link>
        <span>/</span>
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <motion.div
            key={active}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-surface"
          >
            <Image
              src={product.images[active]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square w-20 overflow-hidden border transition-colors ${
                    active === i ? "border-primary" : "border-transparent"
                  }`}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <span className="text-sm uppercase tracking-widest text-primary">{categoryName}</span>
          <h1 className="heading-serif mt-2 text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-medium text-secondary">{formatPrice(product.price)}</p>

          <p className="mt-6 leading-relaxed text-ink/75">{product.description}</p>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-ink/60">Quantité</span>
            <div className="flex items-center border border-ink/15">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2 text-lg hover:bg-surface" aria-label="Réduire">−</button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-2 text-lg hover:bg-surface" aria-label="Augmenter">+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button onClick={handleAdd} className="btn-primary flex-1">
              {added ? "Ajouté au panier ✓" : "Ajouter au panier"}
            </button>
            <button
              onClick={() => toggleFavorite(product.id)}
              className={`btn-outline flex items-center justify-center gap-2 ${fav ? "border-primary text-primary" : ""}`}
            >
              <HeartIcon filled={fav} className="h-5 w-5" />
              {fav ? "Dans les favoris" : "Favoris"}
            </button>
          </div>

          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${product.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline"
          >
            <WhatsAppIcon className="h-5 w-5" /> Demander des informations
          </a>

          {/* Specs */}
          <div className="mt-10 border-t border-ink/10 pt-8">
            <h2 className="heading-serif mb-4 text-2xl">Caractéristiques</h2>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between border-b border-ink/5 py-2 text-sm">
                  <dt className="text-ink/55">{s.label}</dt>
                  <dd className="font-medium text-ink/85">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="heading-serif text-3xl">Vous aimerez aussi</h2>
            <Link href={`/collection?categorie=${product.category}`} className="hidden items-center gap-2 text-sm uppercase tracking-wider text-primary hover:text-secondary sm:flex">
              Voir plus <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
