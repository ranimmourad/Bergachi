import { Suspense } from "react";
import { Metadata } from "next";
import CollectionView from "@/components/collection/CollectionView";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Découvrez la collection complète Bergachi Meubles : salons, chambres, salles à manger et décoration. Filtrez par catégorie et prix.",
};

export default function CollectionPage() {
  return (
    <Suspense fallback={<div className="container-bm py-20 text-center text-ink/50">Chargement…</div>}>
      <CollectionView />
    </Suspense>
  );
}
