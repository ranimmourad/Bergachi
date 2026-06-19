"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/context/StoreContext";
import { formatPrice } from "@/lib/data";
import { CartIcon, TrashIcon } from "@/components/icons";

export default function PanierPage() {
  const { cart, ready, updateQuantity, removeFromCart, cartTotal, clearCart } = useStore();
  const [ordered, setOrdered] = useState(false);

  if (!ready) return null;

  if (ordered) {
    return (
      <div className="container-bm flex flex-col items-center py-28 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">✓</div>
        <h1 className="heading-serif mt-6 text-3xl">Merci pour votre commande</h1>
        <p className="mt-2 max-w-md text-ink/60">
          Votre demande a bien été enregistrée. Notre équipe vous contactera très prochainement pour finaliser les détails.
        </p>
        <Link href="/collection" className="btn-primary mt-8">Continuer mes achats</Link>
      </div>
    );
  }

  return (
    <div className="container-bm py-12">
      <div className="mb-10 text-center">
        <span className="text-sm uppercase tracking-widest text-primary">Votre commande</span>
        <h1 className="heading-serif mt-2 text-4xl sm:text-5xl">Panier</h1>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <CartIcon className="h-12 w-12 text-ink/20" />
          <p className="mt-4 text-ink/60">Votre panier est vide.</p>
          <Link href="/collection" className="btn-primary mt-6">Parcourir la collection</Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Items */}
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {cart.map((item) => (
              <li key={item.id} className="flex gap-4 py-5">
                <Link href={`/produit/${item.slug}`} className="relative h-28 w-24 shrink-0 overflow-hidden bg-surface">
                  <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-3">
                    <Link href={`/produit/${item.slug}`} className="heading-serif text-lg hover:text-primary">
                      {item.name}
                    </Link>
                    <button onClick={() => removeFromCart(item.id)} className="text-ink/40 transition-colors hover:text-primary" aria-label="Retirer">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-ink/15">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1.5 hover:bg-surface" aria-label="Réduire">−</button>
                      <span className="w-9 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1.5 hover:bg-surface" aria-label="Augmenter">+</button>
                    </div>
                    <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Summary */}
          <aside className="h-fit border border-ink/10 bg-surface p-6">
            <h2 className="heading-serif text-2xl">Récapitulatif</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between text-ink/70">
                <span>Sous-total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-ink/70">
                <span>Livraison</span>
                <span>À convenir</span>
              </div>
              <div className="flex justify-between border-t border-ink/10 pt-3 text-base font-medium">
                <span>Total</span>
                <span className="text-secondary">{formatPrice(cartTotal)}</span>
              </div>
            </div>
            <button onClick={() => setOrdered(true)} className="btn-primary mt-6 w-full">
              Passer la commande
            </button>
            <button onClick={clearCart} className="mt-3 w-full text-center text-xs uppercase tracking-wider text-ink/50 hover:text-primary">
              Vider le panier
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
