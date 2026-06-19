"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import FadeIn from "../FadeIn";
import { ArrowRightIcon } from "../icons";

export default function Collections() {
  return (
    <section id="collections" className="container-bm py-20">
      <FadeIn className="mb-10 text-center">
        <span className="text-sm uppercase tracking-widest text-primary">Nos univers</span>
        <h2 className="heading-serif mt-2 text-4xl sm:text-5xl">Collections</h2>
      </FadeIn>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <FadeIn key={cat.slug} delay={i * 0.08}>
            <Link href={`/collection?categorie=${cat.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="heading-serif text-2xl">{cat.name}</h3>
                  <motion.span className="mt-1 flex items-center gap-2 text-xs uppercase tracking-wider opacity-90">
                    Explorer <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
