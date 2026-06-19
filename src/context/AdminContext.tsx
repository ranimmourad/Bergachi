"use client";

/**
 * AdminContext manages product data on the client (localStorage).
 * It is structured to be easily swapped for a Supabase backend later:
 * each method (list/add/update/remove) maps cleanly to a future
 * supabase.from('products') call.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { products as seedProducts } from "@/lib/data";
import { Product } from "@/lib/types";

interface AdminState {
  products: Product[];
  ready: boolean;
  addProduct: (p: Product) => void;
  updateProduct: (id: string, p: Partial<Product>) => void;
  removeProduct: (id: string) => void;
  resetToSeed: () => void;
}

const AdminContext = createContext<AdminState | undefined>(undefined);

const KEY = "bm_admin_products";

export function AdminProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setProducts(JSON.parse(stored));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(products));
  }, [products, ready]);

  const addProduct = useCallback((p: Product) => {
    setProducts((prev) => [p, ...prev]);
  }, []);

  const updateProduct = useCallback((id: string, patch: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p))
    );
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const resetToSeed = useCallback(() => {
    setProducts(seedProducts);
  }, []);

  return (
    <AdminContext.Provider
      value={{ products, ready, addProduct, updateProduct, removeProduct, resetToSeed }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
