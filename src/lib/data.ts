import { Category, Product } from "./types";

export const SITE = {
  name: "Bergachi Meubles",
  phone: "50 807 859",
  phoneIntl: "+216 50 807 859",
  whatsapp: "21629300842",
  email: "abergachi@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100064514840260",
  locations: [
    {
      name: "Menzel Jemil",
      address: "Menzel Jemil, Bizerte, Tunisie 7080",
      mapQuery: "Menzel Jemil, Bizerte, Tunisie",
      mapLink: "https://maps.app.goo.gl/hpWXuEGfrTSxC9F26",
    },
    {
      name: "Ettadhamen Mnihla",
      address: "Ettadhamen Mnihla, Tunisie",
      mapQuery: "Ettadhamen Mnihla, Tunisie",
      mapLink: "https://maps.app.goo.gl/XeUQPw3gYdiZK5ru8",
    },
  ],
};

export const categories: Category[] = [
  {
    slug: "salons",
    name: "Salons",
    description: "Canapés, salons d'angle et ensembles complets au confort raffiné.",
    image: "/images/salon-beige-corner.jpg",
  },
  {
    slug: "chambres",
    name: "Chambres",
    description: "Lits, dressings et chambres complètes à l'élégance apaisante.",
    image: "/images/chambre-bed-white.jpg",
  },
  {
    slug: "salles-a-manger",
    name: "Salles à manger",
    description: "Tables, chaises et ensembles pour des repas mémorables.",
    image: "/images/dining-set-glass.jpg",
  },
  {
    slug: "decoration",
    name: "Décoration",
    description: "Miroirs, vitrines et pièces déco pour sublimer votre intérieur.",
    image: "/images/mirrors-deco.jpg",
  },
];

export const products: Product[] = [
  // ---------- SALONS ----------
  {
    id: "sal-01",
    slug: "salon-l-boucle-creme",
    name: "Salon d'angle Boutchou Crème",
    category: "salons",
    price: 2900,
    images: ["/images/salon-l-cream.jpg", "/images/salon-l-cream2.jpg"],
    description:
      "Salon d'angle généreux habillé d'un tissu bouclé crème, posé sur une base en bois massif chaleureux. Modulable et confortable, il s'adapte parfaitement aux grands espaces de vie.",
    specs: [
      { label: "Matière", value: "Tissu bouclé / Bois massif" },
      { label: "Configuration", value: "Angle modulable" },
      { label: "Places", value: "6 à 7 personnes" },
      { label: "Coloris", value: "Crème naturel" },
    ],
    featured: false,
    createdAt: "2026-06-10",
  },
  {
    id: "sal-02",
    slug: "salon-cuir-marron",
    name: "Canapé Cuir Capitonné Marron",
    category: "salons",
    price: 1800,
    images: ["/images/salon-leather-brown.jpg"],
    description:
      "Canapé en cuir véritable couleur cognac aux finitions surpiquées et capitonnage élégant. Une pièce intemporelle qui apporte caractère et chaleur au salon.",
    specs: [
      { label: "Matière", value: "Cuir véritable" },
      { label: "Style", value: "Capitonné contemporain" },
      { label: "Places", value: "3 personnes" },
      { label: "Coloris", value: "Cognac" },
    ],
    featured: true,
    createdAt: "2026-06-08",
  },
  {
    id: "sal-03",
    slug: "salon-beige-confort",
    name: "Salon Confort Beige & Caramel",
    category: "salons",
    price: 3200,
    images: ["/images/salon-beige-corner.jpg", "/images/salon-beige-3pc.jpg"],
    description:
      "Grand salon d'angle alliant tissu beige doux et cuir caramel. Une assise profonde et enveloppante pensée pour les moments de détente en famille.",
    specs: [
      { label: "Matière", value: "Tissu & Cuir" },
      { label: "Configuration", value: "Angle XL" },
      { label: "Places", value: "7 personnes" },
      { label: "Coloris", value: "Beige / Caramel" },
    ],
    featured: true,
    createdAt: "2026-06-05",
  },
  {
    id: "sal-05",
    slug: "ensemble-salon-cuir-ivoire",
    name: "Ensemble Salon Cuir Ivoire",
    category: "salons",
    price: 3900,
    images: ["/images/salon-showroom-3pc.jpg"],
    description:
      "Ensemble complet composé de canapés en cuir capitonné ivoire. Une composition élégante et luxueuse pour un grand séjour.",
    specs: [
      { label: "Composition", value: "3 canapés" },
      { label: "Matière", value: "Cuir véritable" },
      { label: "Places", value: "8 à 9 personnes" },
      { label: "Coloris", value: "Ivoire" },
    ],
    featured: true,
    createdAt: "2026-05-28",
  },
  {
    id: "sal-06",
    slug: "salon-u-tissu",
    name: "Salon en U Tissu Lin",
    category: "salons",
    price: 3200,
    images: ["/images/salon-u-shape.jpg", "/images/salon-corner-beige2.jpg"],
    description:
      "Salon en U au tissu lin texturé avec accoudoirs intégrant des tablettes en bois. Idéal pour les pièces spacieuses et conviviales.",
    specs: [
      { label: "Matière", value: "Tissu lin / Bois" },
      { label: "Configuration", value: "En U" },
      { label: "Places", value: "8 personnes" },
      { label: "Coloris", value: "Lin clair" },
    ],
    featured: false,
    createdAt: "2026-05-25",
  },
  {
    id: "sal-07",
    slug: "salon-deco-moutarde",
    name: "Salon Déco Tissu & Moutarde",
    category: "salons",
    price: 3400,
    images: ["/images/salon-deco-living.jpg", "/images/salon-corner-deco.jpg", "/images/armchair-detail.jpg", "/images/salon-modular-detail.jpg"],
    description:
      "Salon contemporain mêlant tissu moucheté et touches de cuir moutarde sur base bois. Un ensemble vivant et raffiné avec fauteuils assortis.",
    specs: [
      { label: "Matière", value: "Tissu & Cuir moutarde" },
      { label: "Composition", value: "Angle + 2 fauteuils" },
      { label: "Places", value: "6 personnes" },
      { label: "Coloris", value: "Gris / Moutarde" },
    ],
    featured: false,
    createdAt: "2026-05-20",
  },
  {
    id: "sal-08",
    slug: "ensemble-salon-tissu-ivoire",
    name: "Ensemble Salon Tissu Ivoire",
    category: "salons",
    price: 3400,
    images: ["/images/salon-cream-set.jpg"],
    description:
      "Ensemble complet de canapés en tissu ivoire au design doux et capitonné. Parfait pour créer un espace de vie harmonieux et lumineux.",
    specs: [
      { label: "Composition", value: "Canapés multiples" },
      { label: "Matière", value: "Tissu capitonné" },
      { label: "Places", value: "6 à 8 personnes" },
      { label: "Coloris", value: "Ivoire" },
    ],
    featured: true,
    createdAt: "2026-05-27",
  },

  // ---------- CHAMBRES ----------
  {
    id: "cha-01",
    slug: "chambre-complete-doree",
    name: "Chambre Complète Tête Dorée",
    category: "chambres",
    price: 3200,
    images: ["/images/chambre-bed-white.jpg", "/images/chambre-dressing.jpg"],
    description:
      "Chambre à coucher complète avec lit à tête capitonnée encadrée de doré, armoire à miroir et coiffeuse bois. Une atmosphère raffinée et lumineuse.",
    specs: [
      { label: "Composition", value: "Lit + armoire + coiffeuse" },
      { label: "Dimension lit", value: "180 x 200 cm" },
      { label: "Matière", value: "Bois & Tissu" },
      { label: "Coloris", value: "Blanc / Or" },
    ],
    featured: true,
    createdAt: "2026-06-09",
  },

  // ---------- SALLES A MANGER ----------
  {
    id: "sam-01",
    slug: "table-ronde-cannelee-noire",
    name: "Table Ronde Cannelée Noire",
    category: "salles-a-manger",
    price: 2900,
    images: ["/images/table-round-deco.jpg", "/images/table-glass-round.jpg"],
    description:
      "Table ronde au plateau verre fumé et pied central cannelé noir, accompagnée de chaises bouclées au design enveloppant. Modernité et caractère.",
    specs: [
      { label: "Forme", value: "Ronde Ø120 cm" },
      { label: "Plateau", value: "Verre fumé" },
      { label: "Pied", value: "Cannelé noir" },
      { label: "Chaises", value: "4 à 6 places" },
    ],
    featured: true,
    createdAt: "2026-06-12",
  },
  {
    id: "sam-02",
    slug: "table-rectangulaire-bois-verre",
    name: "Table Rectangulaire Bois & Verre",
    category: "salles-a-manger",
    price: 3400,
    images: ["/images/dining-set-glass.jpg"],
    description:
      "Table rectangulaire en bois massif protégée d'un verre, aux pieds croisés sculpturaux. Entourée de chaises bouclées crème pour un ensemble chaleureux.",
    specs: [
      { label: "Forme", value: "Rectangulaire 180 cm" },
      { label: "Matière", value: "Bois massif / Verre" },
      { label: "Pieds", value: "Croisés design" },
      { label: "Chaises", value: "6 places" },
    ],
    featured: true,
    createdAt: "2026-06-07",
  },
  {
    id: "sam-03",
    slug: "table-ovale-noyer",
    name: "Table Ovale Noyer & Cannelures",
    category: "salles-a-manger",
    price: 3900,
    images: ["/images/table-oval-black.jpg"],
    description:
      "Élégante table ovale en noyer au plateau verre fumé et piètement cannelé noir. Une pièce maîtresse pour une salle à manger contemporaine.",
    specs: [
      { label: "Forme", value: "Ovale 200 cm" },
      { label: "Plateau", value: "Verre fumé" },
      { label: "Matière", value: "Noyer / Bois laqué" },
      { label: "Chaises", value: "6 à 8 places" },
    ],
    featured: false,
    createdAt: "2026-06-01",
  },
  {
    id: "sam-09",
    slug: "table-rectangulaire-bois-verre-taupe",
    name: "Table Rectangulaire Bois & Verre Taupe",
    category: "salles-a-manger",
    price: 3400,
    images: ["/images/table-rect-wood.jpg"],
    description:
      "Table rectangulaire en bois massif protégée d'un verre, aux pieds croisés sculpturaux. Entourée de chaises bouclées taupe pour un ensemble chaleureux et moderne.",
    specs: [
      { label: "Forme", value: "Rectangulaire 180 cm" },
      { label: "Matière", value: "Bois massif / Verre" },
      { label: "Pieds", value: "Croisés design" },
      { label: "Chaises", value: "6 places" },
    ],
    featured: false,
    createdAt: "2026-06-06",
  },
  {
    id: "sam-04",
    slug: "table-blanche-verre",
    name: "Table Rectangulaire Blanche",
    category: "salles-a-manger",
    price: 2700,
    images: ["/images/table-white-rect.jpg"],
    description:
      "Table rectangulaire au plateau blanc nacré sur piètement bois, entourée de chaises bouclées douces. Lumineuse et raffinée.",
    specs: [
      { label: "Forme", value: "Rectangulaire 160 cm" },
      { label: "Plateau", value: "Verre laqué blanc" },
      { label: "Pieds", value: "Bois naturel" },
      { label: "Chaises", value: "6 places" },
    ],
    featured: false,
    createdAt: "2026-05-26",
  },
  {
    id: "sam-05",
    slug: "table-ronde-marbre",
    name: "Table Ronde Effet Marbre",
    category: "salles-a-manger",
    price: 3100,
    images: ["/images/table-round-white-marble.jpg", "/images/table-round-marble.jpg"],
    description:
      "Table ronde au plateau effet marbre et pied colonne cannelé clair, accompagnée de chaises enveloppantes. Élégance naturelle et intemporelle.",
    specs: [
      { label: "Forme", value: "Ronde Ø120 cm" },
      { label: "Plateau", value: "Effet marbre" },
      { label: "Pied", value: "Colonne cannelée" },
      { label: "Chaises", value: "4 à 6 places" },
    ],
    featured: false,
    createdAt: "2026-05-22",
  },
  {
    id: "sam-06",
    slug: "table-noire-boucle",
    name: "Table Noire & Chaises Bouclées",
    category: "salles-a-manger",
    price: 2600,
    images: ["/images/table-black-rect-dining.jpg"],
    description:
      "Table rectangulaire noire au design épuré entourée de chaises bouclées taupe à structure métallique. Un contraste moderne et chic.",
    specs: [
      { label: "Forme", value: "Rectangulaire 160 cm" },
      { label: "Plateau", value: "Verre noir" },
      { label: "Structure", value: "Métal noir" },
      { label: "Chaises", value: "6 places" },
    ],
    featured: false,
    createdAt: "2026-05-18",
  },
  {
    id: "sam-07",
    slug: "table-marbre-doree",
    name: "Table Marbre Liseré Doré",
    category: "salles-a-manger",
    price: 2600,
    images: ["/images/table-marble-dining.jpg"],
    description:
      "Table au plateau effet marbre rehaussé d'un liseré doré, sur piètement bois élancé. Entourée de chaises veloutées pour une touche précieuse.",
    specs: [
      { label: "Forme", value: "Ovale 180 cm" },
      { label: "Plateau", value: "Marbre & Doré" },
      { label: "Pieds", value: "Bois laqué" },
      { label: "Chaises", value: "6 places" },
    ],
    featured: false,
    createdAt: "2026-05-15",
  },
  {
    id: "sam-08",
    slug: "table-blanche-complete",
    name: "Salle à Manger Blanche Complète",
    category: "salles-a-manger",
    price: 2900,
    images: ["/images/dining-white-set.jpg"],
    description:
      "Ensemble salle à manger complet : table, chaises bouclées, buffet et vitrine assortis en finition blanche moderne. Harmonie totale.",
    specs: [
      { label: "Composition", value: "Table + 6 chaises + buffet + vitrine" },
      { label: "Matière", value: "Laqué blanc" },
      { label: "Forme table", value: "Rectangulaire 180 cm" },
      { label: "Coloris", value: "Blanc" },
    ],
    featured: false,
    createdAt: "2026-05-12",
  },

  // ---------- DECORATION ----------
  {
    id: "dec-01",
    slug: "miroirs-organiques-noyer",
    name: "Trio Miroirs Organiques Noyer",
    category: "decoration",
    price: 890,
    images: ["/images/mirrors-deco.jpg"],
    description:
      "Ensemble de miroirs aux formes organiques encadrés de bois noyer. Apportent profondeur et chaleur à toute composition murale.",
    specs: [
      { label: "Quantité", value: "Trio assorti" },
      { label: "Cadre", value: "Bois noyer" },
      { label: "Forme", value: "Organique" },
      { label: "Usage", value: "Mural" },
    ],
    featured: true,
    createdAt: "2026-06-11",
  },
  {
    id: "dec-02",
    slug: "vitrine-bois-blanc",
    name: "Vitrine Bois & Blanc",
    category: "decoration",
    price: 2400,
    images: ["/images/vitrine-cabinet.jpg"],
    description:
      "Vitrine élégante aux montants cannelés blancs et cadre bois, dotée d'étagères en verre et d'un éclairage intérieur. Pour exposer vos plus belles pièces.",
    specs: [
      { label: "Matière", value: "Bois / Laqué blanc" },
      { label: "Étagères", value: "Verre" },
      { label: "Éclairage", value: "LED intérieure" },
      { label: "Portes", value: "2 vitrées" },
    ],
    featured: false,
    createdAt: "2026-05-29",
  },
  {
    id: "dec-03",
    slug: "buffet-blanc-deco",
    name: "Buffet Déco Blanc & Miroir",
    category: "decoration",
    price: 1900,
    images: ["/images/buffet-white.jpg"],
    description:
      "Buffet blanc laqué surmonté d'un miroir organique, parfait pour structurer une entrée ou un séjour avec raffinement.",
    specs: [
      { label: "Matière", value: "Laqué blanc" },
      { label: "Rangement", value: "Portes + vitrine" },
      { label: "Miroir", value: "Organique assorti" },
      { label: "Coloris", value: "Blanc / Noir" },
    ],
    featured: false,
    createdAt: "2026-05-21",
  },
  {
    id: "dec-04",
    slug: "table-basse-ovale-noyer",
    name: "Table Basse Ovale Noyer",
    category: "decoration",
    price: 1200,
    images: ["/images/table-coffee-oval.jpg"],
    description:
      "Table basse ovale au plateau noyer et base cannelée crème avec rangement. Une pièce centrale douce et fonctionnelle pour le salon.",
    specs: [
      { label: "Forme", value: "Ovale" },
      { label: "Plateau", value: "Noyer" },
      { label: "Base", value: "Cannelée crème" },
      { label: "Rangement", value: "Tiroir intégré" },
    ],
    featured: false,
    createdAt: "2026-05-16",
  },
  {
    id: "dec-05",
    slug: "bureau-bois-cannelé",
    name: "Bureau Bois Cannelé",
    category: "decoration",
    price: 1600,
    images: ["/images/desk-wood-office.jpg"],
    description:
      "Bureau en bois aux façades cannelées et tiroirs crème, sur pieds fuselés. Design scandinave chaleureux pour un espace de travail soigné.",
    specs: [
      { label: "Matière", value: "Bois & Laqué" },
      { label: "Tiroirs", value: "Multiples" },
      { label: "Style", value: "Scandinave" },
      { label: "Coloris", value: "Bois / Crème" },
    ],
    featured: false,
    createdAt: "2026-05-10",
  },
  {
    id: "dec-06",
    slug: "tables-gigognes-marbre",
    name: "Tables Gigognes Effet Marbre",
    category: "decoration",
    price: 750,
    images: ["/images/table-marble-gold.jpg"],
    description:
      "Duo de tables gigognes au plateau effet marbre et liseré doré, sur pied conique blanc. Un accent élégant et modulable pour le salon.",
    specs: [
      { label: "Quantité", value: "Duo gigogne" },
      { label: "Plateau", value: "Marbre & Doré" },
      { label: "Pied", value: "Conique blanc" },
      { label: "Forme", value: "Ronde" },
    ],
    featured: false,
    createdAt: "2026-05-06",
  },
];

export const showrooms = SITE.locations;

// ---------- Helpers ----------
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelated(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("fr-FR")} DT`;
}