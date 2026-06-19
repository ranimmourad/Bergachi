"use client";

import { SITE } from "@/lib/data";
import FadeIn from "../FadeIn";
import { PhoneIcon, MailIcon, FacebookIcon, WhatsAppIcon } from "../icons";

export default function ContactPreview() {
  return (
    <section id="contact-preview" className="bg-surface py-20">
      <div className="container-bm">
        <FadeIn className="mb-10 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">Restons en contact</span>
          <h2 className="heading-serif mt-2 text-4xl sm:text-5xl">Une question ?</h2>
        </FadeIn>

        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
          <FadeIn delay={0}>
            <a href={`tel:${SITE.whatsapp}`} className="flex h-full flex-col items-center gap-3 border border-ink/10 bg-white p-7 text-center transition-colors hover:border-primary">
              <PhoneIcon className="h-7 w-7 text-primary" />
              <span className="text-sm uppercase tracking-wider text-ink/60">Téléphone</span>
              <span className="font-medium">{SITE.phone}</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.08}>
            <a href={`mailto:${SITE.email}`} className="flex h-full flex-col items-center gap-3 border border-ink/10 bg-white p-7 text-center transition-colors hover:border-primary">
              <MailIcon className="h-7 w-7 text-primary" />
              <span className="text-sm uppercase tracking-wider text-ink/60">Email</span>
              <span className="break-all font-medium">{SITE.email}</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.16}>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col items-center gap-3 border border-ink/10 bg-white p-7 text-center transition-colors hover:border-primary">
              <FacebookIcon className="h-7 w-7 text-primary" />
              <span className="text-sm uppercase tracking-wider text-ink/60">Réseaux</span>
              <span className="font-medium">Facebook</span>
            </a>
          </FadeIn>
        </div>

        <FadeIn className="mt-10 text-center">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" /> Discuter sur WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
