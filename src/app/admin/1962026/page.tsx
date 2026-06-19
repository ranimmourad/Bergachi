"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product, CategorySlug } from "@/lib/types"; // Added CategorySlug import
import { products as initialProducts, categories as initialCategories } from "@/lib/data";

type AdminTab = "products" | "categories" | "add-product";

interface ProductFormData {
  name: string;
  slug: string;
  price: number;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
  featured: boolean;
  createdAt: string;
}

const emptyForm: ProductFormData = {
  name: "",
  slug: "",
  price: 0,
  category: "",
  description: "",
  specs: [],
  images: [],
  featured: false,
  createdAt: new Date().toISOString().split("T")[0],
};

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("products");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<ProductFormData>(emptyForm);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [imageInput, setImageInput] = useState("");
  const [specLabel, setSpecLabel] = useState("");
  const [specValue, setSpecValue] = useState("");

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      slug: product.slug,
      price: product.price,
      category: product.category,
      description: product.description,
      specs: product.specs,
      images: product.images,
      featured: product.featured ?? false, // FIXED: Fallback to false if undefined
      createdAt: product.createdAt,
    });
    setActiveTab("add-product");
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setShowDeleteConfirm(null);
  };

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, imageInput.trim()],
      }));
      setImageInput("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleAddSpec = () => {
    if (specLabel.trim() && specValue.trim()) {
      setFormData((prev) => ({
        ...prev,
        specs: [...prev.specs, { label: specLabel.trim(), value: specValue.trim() }],
      }));
      setSpecLabel("");
      setSpecValue("");
    }
  };

  const handleRemoveSpec = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index),
    }));
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData: Product = {
      id: editingProduct?.id || `prod-${Date.now()}`,
      name: formData.name,
      slug: formData.slug || generateSlug(formData.name),
      price: formData.price,
      category: formData.category as CategorySlug, // FIXED: Cast string to CategorySlug
      description: formData.description,
      specs: formData.specs,
      images: formData.images,
      featured: formData.featured,
      createdAt: formData.createdAt,
    };

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? productData : p))
      );
    } else {
      setProducts((prev) => [...prev, productData]);
    }

    setFormData(emptyForm);
    setEditingProduct(null);
    setActiveTab("products");
  };

  const tabs: { key: AdminTab; label: string }[] = [
    { key: "products", label: "Produits" },
    { key: "add-product", label: editingProduct ? "Modifier Produit" : "Ajouter Produit" },
    { key: "categories", label: "Catégories" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-[#F3EEE8] border-b border-[#A37B52]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-[#2B2B2B]">Administration</h1>
              <p className="text-sm text-[#2B2B2B]/60">Bergachi Meubles</p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="text-sm text-[#A37B52] hover:text-[#8D6E4F] transition-colors"
            >
              ← Retour au site
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-1 mb-8 bg-[#F3EEE8] rounded-lg p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                if (tab.key !== "add-product") setEditingProduct(null);
              }}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                activeTab === tab.key
                  ? "bg-[#A37B52] text-white"
                  : "text-[#2B2B2B]/70 hover:text-[#2B2B2B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "products" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-[#2B2B2B]">Tous les produits ({products.length})</h2>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#F3EEE8]">
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#2B2B2B]/60 uppercase tracking-wider">Produit</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#2B2B2B]/60 uppercase tracking-wider hidden sm:table-cell">Catégorie</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#2B2B2B]/60 uppercase tracking-wider">Prix</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#2B2B2B]/60 uppercase tracking-wider hidden md:table-cell">Vedette</th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-[#2B2B2B]/60 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-[#F3EEE8] last:border-0">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-[#F3EEE8] overflow-hidden flex-shrink-0">
                            {product.images[0] && (
                              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                            )}
                          </div>
                          <span className="text-sm text-[#2B2B2B] truncate max-w-[200px]">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#2B2B2B]/70 hidden sm:table-cell">{product.category}</td>
                      <td className="px-4 py-3 text-sm text-[#2B2B2B]">{product.price.toLocaleString("fr-FR")} DT</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        {product.featured ? (
                          <span className="text-xs bg-[#A37B52]/10 text-[#A37B52] px-2 py-1 rounded">Vedette</span>
                        ) : (
                          <span className="text-xs text-[#2B2B2B]/40">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleEdit(product)} className="text-xs text-[#A37B52] hover:text-[#8D6E4F] transition-colors">Modifier</button>
                          {showDeleteConfirm === product.id ? (
                            <div className="flex items-center gap-1">
                              <button onClick={() => handleDelete(product.id)} className="text-xs text-red-600 hover:text-red-700">Confirmer</button>
                              <button onClick={() => setShowDeleteConfirm(null)} className="text-xs text-[#2B2B2B]/40 hover:text-[#2B2B2B]/60">Annuler</button>
                            </div>
                          ) : (
                            <button onClick={() => setShowDeleteConfirm(product.id)} className="text-xs text-red-500/60 hover:text-red-500 transition-colors">Supprimer</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {products.length === 0 && (
                <div className="py-12 text-center text-[#2B2B2B]/40 text-sm">Aucun produit</div>
              )}
            </div>
          </div>
        )}

        {activeTab === "add-product" && (
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <h2 className="text-lg font-medium text-[#2B2B2B] mb-6">{editingProduct ? "Modifier le produit" : "Ajouter un produit"}</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Nom du produit *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value, slug: prev.slug || generateSlug(e.target.value) }))} className="w-full px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors" placeholder="Salon moderne" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Slug (URL)</label>
                <input type="text" value={formData.slug} onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))} className="w-full px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors" placeholder="salon-moderne" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Prix (DT) *</label>
                  <input type="number" required min="0" value={formData.price || ""} onChange={(e) => setFormData((prev) => ({ ...prev, price: parseInt(e.target.value) || 0 }))} className="w-full px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors" placeholder="3400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Catégorie *</label>
                  <select required value={formData.category} onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))} className="w-full px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors">
                    <option value="">Sélectionner</option>
                    {categories.map((cat) => (<option key={cat.slug} value={cat.slug}>{cat.name}</option>))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Description</label>
                <textarea rows={4} value={formData.description} onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))} className="w-full px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors resize-none" placeholder="Description du produit..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Images</label>
                <div className="flex gap-2 mb-2">
                  <input type="text" value={imageInput} onChange={(e) => setImageInput(e.target.value)} className="flex-1 px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors" placeholder="/images/produit.jpg" />
                  <button type="button" onClick={handleAddImage} className="px-4 py-2.5 bg-[#F3EEE8] text-[#2B2B2B] rounded-lg text-sm hover:bg-[#E8E0D8] transition-colors">Ajouter</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.images.map((img, i) => (
                    <div key={i} className="relative w-16 h-16 rounded bg-[#F3EEE8] overflow-hidden group">
                      <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      <button type="button" onClick={() => handleRemoveImage(i)} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">✕</button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-1.5">Spécifications</label>
                <div className="flex gap-2 mb-2">
                  <input type="text" value={specLabel} onChange={(e) => setSpecLabel(e.target.value)} className="flex-1 px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors" placeholder="Ex: Matière" />
                  <input type="text" value={specValue} onChange={(e) => setSpecValue(e.target.value)} className="flex-1 px-3 py-2.5 bg-white border border-[#F3EEE8] rounded-lg text-sm text-[#2B2B2B] focus:outline-none focus:border-[#A37B52] transition-colors" placeholder="Ex: Bois massif" />
                  <button type="button" onClick={handleAddSpec} className="px-4 py-2.5 bg-[#F3EEE8] text-[#2B2B2B] rounded-lg text-sm hover:bg-[#E8E0D8] transition-colors">Ajouter</button>
                </div>
                <div className="space-y-1">
                  {formData.specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 bg-[#F3EEE8] rounded text-sm text-[#2B2B2B]">
                      <span><strong>{spec.label}:</strong> {spec.value}</span>
                      <button type="button" onClick={() => handleRemoveSpec(i)} className="text-[#2B2B2B]/40 hover:text-red-500 transition-colors ml-4">✕</button>
                    </div>
                  ))}
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.featured} onChange={(e) => setFormData((prev) => ({ ...prev, featured: e.target.checked }))} className="w-4 h-4 rounded border-[#F3EEE8] text-[#A37B52] focus:ring-[#A37B52]" />
                <span className="text-sm text-[#2B2B2B]">Produit vedette</span>
              </label>
              <div className="flex gap-3 pt-4">
                <button type="submit" className="px-6 py-2.5 bg-[#A37B52] text-white rounded-lg text-sm hover:bg-[#8D6E4F] transition-colors">{editingProduct ? "Mettre à jour" : "Ajouter le produit"}</button>
                {editingProduct && (
                  <button type="button" onClick={() => { setEditingProduct(null); setFormData(emptyForm); }} className="px-6 py-2.5 bg-[#F3EEE8] text-[#2B2B2B] rounded-lg text-sm hover:bg-[#E8E0D8] transition-colors">Annuler</button>
                )}
              </div>
            </div>
          </form>
        )}

        {activeTab === "categories" && (
          <div className="max-w-lg">
            <h2 className="text-lg font-medium text-[#2B2B2B] mb-6">Catégories existantes</h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div key={cat.slug} className="flex items-center justify-between px-4 py-3 bg-white rounded-lg">
                  <span className="text-sm text-[#2B2B2B]">{cat.name} <span className="text-[#2B2B2B]/40">({cat.slug})</span></span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}