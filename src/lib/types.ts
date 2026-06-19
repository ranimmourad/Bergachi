export type CategorySlug = "salons" | "chambres" | "salles-a-manger" | "decoration";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
  createdAt: string; // ISO date used for "Newest" sorting
}
