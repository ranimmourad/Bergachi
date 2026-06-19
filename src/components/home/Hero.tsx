"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full">
      {/* Image container */}
      <div className="relative w-full">
        <Image
          src="/images/hero.jpg"
          alt="Showroom Bergachi Meubles"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-auto"
        />
        {/* Gradient: desktop only (buttons are overlaid) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
      </div>

      {/* Buttons: BELOW image on mobile, OVERLAID on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-3 px-5 py-5
                   sm:absolute sm:bottom-8 sm:left-8 sm:py-0 sm:px-0"
      >
        <Link
          href="/collection"
          className="rounded-sm bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-secondary sm:text-sm"
        >
          Découvrir la collection
        </Link>
        <Link
          href="/contact"
          className="rounded-sm bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:bg-white sm:text-sm"
        >
          Nous contacter
        </Link>
      </motion.div>
    </section>
  );
}