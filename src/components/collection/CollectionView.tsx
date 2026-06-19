"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, formatPrice } from "@/lib/data";
import { CategorySlug } from "@/lib/types";
import ProductCard from "../ProductCard";
import { SearchIcon } from "../icons";

type SortKey = "newest" | "price-asc" | "price-desc";

const PRICE_MAX = 8000;

export default function CollectionView() {
  const params = useSearchParams();
  const initialCat = params.get("categorie") as CategorySlug | null;

  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<CategorySlug | "all">(
    initialCat && categories.some((c) => c.slug === initialCat) ? initialCat : "all"
  );
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [sort, setSort] = useState<SortKey>("newest");

  useEffect(() => {
    const c = params.get("categorie") as CategorySlug | null;
    if (c && categories.some((cat) => cat.slug === c)) setActiveCat(c);
    else if (!c) setActiveCat("all");
  }, [params]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCat !== "all") list = list.filter((p) => p.category === activeCat);
    if (search.trim())
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
    return list;
  }, [activeCat, search, maxPrice, sort]);

  return (
    <div className="container-bm py-12">
      <div className="mb-8 text-center">
        <span className="text-sm uppercase tracking-widest text-primary">Notre catalogue</span>
        <h1 className="heading-serif mt-2 text-4xl sm:text-5xl">Collection</h1>
      </div>

      {/* Toolbar */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-sm">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un meuble..."
            className="w-full border border-ink/15 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-ink/60">Trier :</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="newest">Nouveautés</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[230px_1fr]">
        {/* Filters sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-ink">Catégorie</h2>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveCat("all")}
                  className={`text-sm transition-colors ${activeCat === "all" ? "text-primary" : "text-ink/70 hover:text-primary"}`}
                >
                  Toutes les catégories
                </button>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => setActiveCat(c.slug)}
                    className={`text-sm transition-colors ${activeCat === c.slug ? "text-primary" : "text-ink/70 hover:text-primary"}`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-ink">Prix maximum</h2>
            <input
              type="range"
              min={500}
              max={PRICE_MAX}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <p className="mt-2 text-sm text-ink/70">Jusqu&apos;à {formatPrice(maxPrice)}</p>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <p className="mb-5 text-sm text-ink/50">{filtered.length} produit(s)</p>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-ink/50">Aucun produit ne correspond à votre recherche.</p>
          ) : (
            <motion.div layout className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
