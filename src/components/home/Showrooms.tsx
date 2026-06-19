"use client";

import { SITE } from "@/lib/data";
import FadeIn from "../FadeIn";
import { MapPinIcon, ArrowRightIcon } from "../icons";

export default function Showrooms() {
  return (
    <section id="showrooms" className="container-bm py-20">
      <FadeIn className="mb-10 text-center">
        <span className="text-sm uppercase tracking-widest text-primary">Nous trouver</span>
        <h2 className="heading-serif mt-2 text-4xl sm:text-5xl">Nos showrooms</h2>
      </FadeIn>

      <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        {SITE.locations.map((loc, i) => {
          const directionsUrl = loc.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`;
          
          return (
            <FadeIn key={loc.name} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden border border-ink/10 bg-white">
                <iframe
                  title={`Carte ${loc.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&z=14&output=embed`}
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="heading-serif text-2xl">{loc.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-ink/70">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {loc.address}
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary hover:text-secondary"
                  >
                    Itinéraire <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}