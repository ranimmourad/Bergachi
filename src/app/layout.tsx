import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bergachi-meubles.vercel.app"),
  title: {
    default: "Bergachi Meubles — Meubles & Décoration en Tunisie",
    template: "%s | Bergachi Meubles",
  },
  description:
    "Bergachi Meubles, showroom de meubles modernes en Tunisie : salons, chambres, salles à manger et décoration. Showrooms à Menzel Jemil, Ettadhamen Mnihla et Bizerte.",
  keywords: [
    "meubles Tunisie",
    "salon Tunisie",
    "chambre à coucher",
    "salle à manger",
    "Bergachi Meubles",
    "Bizerte",
    "décoration intérieure",
  ],
  openGraph: {
    title: "Bergachi Meubles — Meubles & Décoration en Tunisie",
    description:
      "Salons, chambres, salles à manger et décoration. Un showroom de meubles modernes en Tunisie.",
    type: "website",
    locale: "fr_TN",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <StoreProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </StoreProvider>
      </body>
    </html>
  );
}
