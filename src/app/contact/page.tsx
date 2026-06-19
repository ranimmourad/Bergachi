// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé! (Démo)");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#F3EEE8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium text-[#2B2B2B]">Contact</h1>
          <p className="mt-2 text-[#2B2B2B]/60">
            N'hésitez pas à nous contacter pour toute question
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn>
            <div className="space-y-10">
              {/* Phone */}
              <div>
                <h3 className="text-sm font-medium text-[#A37B52] uppercase tracking-wider mb-3">
                  Téléphone
                </h3>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-xl text-[#2B2B2B] hover:text-[#A37B52] transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-medium text-[#A37B52] uppercase tracking-wider mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#2B2B2B] hover:text-[#A37B52] transition-colors"
                >
                  {SITE.email}
                </a>
              </div>

              {/* Facebook */}
              <div>
                <h3 className="text-sm font-medium text-[#A37B52] uppercase tracking-wider mb-3">
                  Facebook
                </h3>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B2B2B] hover:text-[#A37B52] transition-colors"
                >
                  Bergachi Meubles →
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg text-sm hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contacter via WhatsApp
              </a>

              {/* Showrooms */}
              <div>
                <h3 className="text-sm font-medium text-[#A37B52] uppercase tracking-wider mb-4">
                  Nos Showrooms
                </h3>
                <div className="space-y-4">
                  {SITE.locations.map((showroom) => (
                    <div key={showroom.name} className="p-4 bg-white rounded-lg">
                      <h4 className="font-medium text-[#2B2B2B]">{showroom.name}</h4>
                      <p className="text-sm text-[#2B2B2B]/60 mt-1">{showroom.address}</p>
                      <p className="text-sm text-[#2B2B2B]/60">{SITE.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203317.75327332754!2d9.619201094531258!3d37.22777549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2e00cad5078c3%3A0x9cd836a9dcf51306!2sBergachi%20meubles!5e0!3m2!1sfr!2stn!4v1781875381090!5m2!1sfr!2stn"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Bergachi Meubles"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-medium text-[#2B2B2B] mb-6">
                Envoyez-nous un message
              </h2>

              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors"
                    placeholder="XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">
                  Sujet
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#A37B52] text-white rounded-lg text-sm hover:bg-[#8D6E4F] transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}