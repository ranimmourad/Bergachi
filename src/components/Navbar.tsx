// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useStore } from "@/context/StoreContext";
import { HeartIcon, CartIcon, MenuIcon, CloseIcon } from "./icons";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, favorites, ready } = useStore();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "#f8f0e6" }}
    >
      <nav className="container-bm flex h-20 items-center justify-between" aria-label="Navigation principale">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Bergachi Meubles — Accueil">
          <Image
            src="/images/logo.jpg"
            alt="Bergachi Meubles"
            width={180}
            height={120}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  isActive(l.href) ? "text-primary" : "text-ink"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <Link href="/favoris" className="relative text-ink transition-colors hover:text-primary" aria-label="Favoris">
            <HeartIcon className="h-6 w-6" />
            {ready && favorites.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link href="/panier" className="relative text-ink transition-colors hover:text-primary" aria-label="Panier">
            <CartIcon className="h-6 w-6" />
            {ready && cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="text-ink md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/5 md:hidden" style={{ backgroundColor: "#f8f0e6" }}>
          <ul className="container-bm flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm uppercase tracking-wider ${
                    isActive(l.href) ? "text-primary" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/favoris" onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-wider text-ink">
                Favoris
              </Link>
            </li>
            <li>
              <Link href="/panier" onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-wider text-ink">
                Panier
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}