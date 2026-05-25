'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BRAND CATEGORIES (Including 'ALL' at the start) ---
const CATEGORIES = [
  "ALL COLLECTIONS",
  "HERITAGE ART",
  "LUXURY PRET",
  "HAND EMBROIDERY",
  "MENSWEAR",
  "CASUAL WEAR"
];

// --- BRAND PRODUCTS DATA ---
const PRODUCTS = [
  // 1. HERITAGE ART (4 Images)
  { id: 1, category: "HERITAGE ART", name: "ZAMURRAD I", priceRs: "17,500", priceUsd: "65", imagePath: "/gallery/heritage-art/img1.png" },
  { id: 2, category: "HERITAGE ART", name: "ZAMURRAD II", priceRs: "19,500", priceUsd: "72", imagePath: "/gallery/heritage-art/img2.png" },
  { id: 3, category: "HERITAGE ART", name: "ZAMURRAD III", priceRs: "22,000", priceUsd: "80", imagePath: "/gallery/heritage-art/img3.png" },
  { id: 4, category: "HERITAGE ART", name: "ZAMURRAD IV", priceRs: "24,000", priceUsd: "90", imagePath: "/gallery/heritage-art/img4.png" },

  // 2. LUXURY PRET (4 Images)
  { id: 5, category: "LUXURY PRET", name: "MEHRUNISA I", priceRs: "28,500", priceUsd: "105", imagePath: "/gallery/luxary-pret/img12.png" },
  { id: 6, category: "LUXURY PRET", name: "MEHRUNISA II", priceRs: "30,000", priceUsd: "110", imagePath: "/gallery/luxary-pret/img15.png" },
  { id: 7, category: "LUXURY PRET", name: "MEHRUNISA III", priceRs: "32,500", priceUsd: "120", imagePath: "/gallery/luxary-pret/img23.png" },
  { id: 8, category: "LUXURY PRET", name: "MEHRUNISA IV", priceRs: "35,000", priceUsd: "130", imagePath: "/gallery/luxary-pret/img25.png" },

  // 3. HAND EMBROIDERY (4 Images)
  { id: 9, category: "HAND EMBROIDERY", name: "NAZNEEN I", priceRs: "26,000", priceUsd: "95", imagePath: "/gallery/kdhai/img4.jpeg" },
  { id: 10, category: "HAND EMBROIDERY", name: "NAZNEEN II", priceRs: "29,000", priceUsd: "105", imagePath: "/gallery/kdhai/img10.jpeg" },
  { id: 11, category: "HAND EMBROIDERY", name: "NAZNEEN III", priceRs: "31,000", priceUsd: "115", imagePath: "/gallery/kdhai/img7.jpeg" },
  { id: 12, category: "HAND EMBROIDERY", name: "NAZNEEN IV", priceRs: "34,000", priceUsd: "125", imagePath: "/gallery/kdhai/img11.jpeg" },

  // 4. MENSWEAR (4 Images)
  { id: 13, category: "MENSWEAR", name: "SHAHZADA I", priceRs: "15,000", priceUsd: "55", imagePath: "/gallery/menswear/img27.png" },
  { id: 14, category: "MENSWEAR", name: "SHAHZADA II", priceRs: "18,500", priceUsd: "68", imagePath: "/gallery/menswear/img28.png" },
  { id: 15, category: "MENSWEAR", name: "SHAHZADA III", priceRs: "21,000", priceUsd: "78", imagePath: "/gallery/menswear/img29.png" },
  { id: 16, category: "MENSWEAR", name: "SHAHZADA IV", priceRs: "25,000", priceUsd: "92", imagePath: "/gallery/menswear/img33.png" },

  // 5. CASUAL WEAR (4 Images)
  { id: 17, category: "CASUAL WEAR", name: "FIZA I", priceRs: "12,500", priceUsd: "45", imagePath: "/gallery/casuals/img3.jpg" },
  { id: 18, category: "CASUAL WEAR", name: "FIZA II", priceRs: "14,000", priceUsd: "52", imagePath: "/gallery/casuals/img35.png" },
  { id: 19, category: "CASUAL WEAR", name: "FIZA III", priceRs: "16,500", priceUsd: "60", imagePath: "/gallery/casuals/img37.png" },
  { id: 20, category: "CASUAL WEAR", name: "FIZA IV", priceRs: "18,000", priceUsd: "65", imagePath: "/gallery/casuals/img39.png" },
];

export default function BrandCollectionPage() {
  // Page loads with "ALL COLLECTIONS" active by default
  const [activeTab, setActiveTab] = useState("ALL COLLECTIONS");

  // Filtering Logic: If 'ALL COLLECTIONS' is active, show everything. Otherwise, filter specific 4 images.
  const filteredProducts = activeTab === "ALL COLLECTIONS"
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeTab);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#c5a880]/30 selection:text-[#c5a880]">
      
      {/* --- PREMIUM BRAND HEADER WITH DESCRIPTIVE TEXT --- */}
      <header className="pt-28 pb-12 text-center px-4 max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light uppercase tracking-[0.35em] text-zinc-100"
        >
          Aura Collections
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[11px] md:text-xs text-zinc-400 font-light tracking-[0.18em] leading-relaxed uppercase mt-4 max-w-xl mx-auto"
        >
          Explore our signature curated edits. Handcrafted masterpieces, heritage embroidery, and bespoke silhouettes engineered for contemporary luxury.
        </motion.p>
        <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mt-6 opacity-30" />
      </header>

      {/* --- LUXURY STICKY NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.04] mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-6 gap-8 md:gap-12">
            {CATEGORIES.map((category) => {
              const isSelected = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`relative whitespace-nowrap text-[11px] tracking-[0.22em] font-light uppercase transition-colors duration-500 pb-2 ${
                    isSelected ? "text-[#c5a880]" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {category}
                  {/* Luxury Sliding Underline Tracker */}
                  {isSelected && (
                    <motion.div 
                      layoutId="luxuryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* --- 4-COLUMN LOOKBOOK LAYOUT GRID --- */}
      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group flex flex-col justify-between cursor-pointer"
              >
                {/* 3:4 High-End Lookbook Image Wrapper */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-950 mb-5">
                  <img
                    src={product.imagePath} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Product Metadata & Actions */}
                <div className="flex flex-col gap-1.5 px-0.5">
                  <div className="flex justify-between items-start">
                    <div>
                      {/* Sub-label showing category on ALL view */}
                      {activeTab === "ALL COLLECTIONS" && (
                        <p className="text-[9px] text-[#c5a880] tracking-[0.15em] uppercase mb-0.5 opacity-70">
                          {product.category}
                        </p>
                      )}
                      <h3 className="text-xs tracking-[0.18em] font-light text-zinc-300 uppercase transition-colors duration-300 group-hover:text-[#c5a880]">
                        {product.name}
                      </h3>
                    </div>
                    <button className="text-[10px] tracking-[0.15em] text-[#c5a880] opacity-80 hover:opacity-100 uppercase border-b border-[#c5a880]/20 hover:border-[#c5a880] pb-0.5 transition-all duration-300">
                      ENQUIRE
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-light">
                    <span className="text-[#c5a880] tracking-wide">Rs. {product.priceRs}</span>
                    <span className="text-zinc-700 text-[10px]">/</span>
                    <span className="text-zinc-500 text-[10px] tracking-wide">${product.priceUsd}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* --- FOOTER ATELIER TRADEMARK --- */}
      <footer className="py-14 border-t border-white/[0.03] text-center bg-[#030303]">
        <p className="text-[10px] tracking-[0.6em] text-zinc-600 uppercase font-light">
          Aura Designer Atelier — Collections Lookbook
        </p>
      </footer>

    </div>
  );
}