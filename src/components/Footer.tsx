"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon } from "./icons";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="mt-24 bg-surface">
      <div className="container-bm grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/images/logo.jpg"
            alt="Bergachi Meubles"
            width={150}
            height={100}
            className="h-14 w-auto mix-blend-multiply"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
            Meubles modernes et décoration intérieure. Salons, chambres et salles à manger pensés pour votre confort.
          </p>
        </div>

        <div>
          <h3 className="heading-serif mb-4 text-lg">Navigation</h3>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
            <li><Link href="/collection" className="hover:text-primary">Collection</Link></li>
            <li><Link href="/favoris" className="hover:text-primary">Favoris</Link></li>
            <li><Link href="/panier" className="hover:text-primary">Panier</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="heading-serif mb-4 text-lg">Showrooms</h3>
          <ul className="space-y-3 text-sm text-ink/70">
            {SITE.locations.map((loc) => (
              <li key={loc.name} className="flex gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{loc.address}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-serif mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm text-ink/70">
            <li>
              <a href={`tel:${SITE.whatsapp}`} className="flex items-center gap-2 hover:text-primary">
                <PhoneIcon className="h-4 w-4 text-primary" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary">
                <MailIcon className="h-4 w-4 text-primary" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <FacebookIcon className="h-4 w-4 text-primary" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-bm flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Bergachi Meubles. Tous droits réservés.</p>
          <p>Menzel Jemil · Ettadhamen Mnihla · Bizerte</p>
        </div>
      </div>
    </footer>
  );
}
