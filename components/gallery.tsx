"use client";

import { useState } from 'react';

interface GalleryItem {
  src: string;
  title: string;
  pkr: string;
  usd: string;
}

const Gallery = () => {
  const categories = [
    { id: "Heritage", folder: "heritage-art", label: "Heritage Art" },
    { id: "luxury Pret", folder: "luxary-pret", label: "Luxury Pret" }, 
    { id: "Hand Embroidery", folder: "kdhai", label: "Hand Embroidery" },
    { id: "Menswear", folder: "menswear", label: "Menswear" },
    { id: "Casuals", folder: "casuals", label: "Casual Wear" },
    { id: "Wedding", folder: "wedding", label: "Wedding Collection" }
  ];

  const galleryData: Record<string, GalleryItem[]> = {
    "heritage-art": [
        { src: "suit.jpeg", title: "Zamurrad", pkr: "17,500", usd: "65" },
        { src: "img10.avif", title: "Mehrunisa", pkr: "28,500", usd: "105" },
        { src: "img20.png", title: "Malika-e-Aria", pkr: "24,000", usd: "90" }
    ],
    "luxary-pret": [
        { src: "img5.jpeg", title: "Emerald Royalty", pkr: "75,000", usd: "270" },
        { src: "img2.jpeg", title: "Ivory Elegance", pkr: "65,000", usd: "230" },
        { src: "img12.png", title: "Lilac Breezei", pkr: "58,000", usd: "210" }
    ],
    "kdhai": [
        { src: "img26.png", title: "Zar-Gool Black", pkr: "95,000", usd: "340" },
        { src: "img25.jpeg", title: "Zamarrud Jeweled Neck", pkr: "88,000", usd: "315" },
        { src: "img23.jpg", title: "Resham-Kari Jacket", pkr: "110,000", usd: "390" }
    ],
    "menswear": [
        { src: "img1.jpeg", title: "Signature Sherwani", pkr: "46,000", usd: "520" },
        { src: "img35.avif", title: "Embroidered Kurta", pkr: "35,000", usd: "125" },
        { src: "img34.avif", title: "Hand-stitched Waistcoat", pkr: "45,000", usd: "160" }
    ],
    "casuals": [
        { src: "img34.png", title: "Jade Fusion", pkr: "15,000", usd: "55" },
        { src: "img4.jpg", title: "Amara Wrap", pkr: "18,500", usd: "65" },
        { src: "img5.jpg", title: "Slate Breeze", pkr: "16,500", usd: "60" }
    ],
    "wedding": [
        { src: "img1.png", title: "Bridal Glow", pkr: "150,000", usd: "540" },
        { src: "img3.png", title: "Shehnaai Crimson", pkr: "185,000", usd: "665" },
        { src: "img5.png", title: "Barat Luxury", pkr: "165,000", usd: "595" }
    ]
  };

  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selectedImg, setSelectedImg] = useState<any>(null);

  return (
    <section className="bg-black min-h-screen pt-24 pb-16 px-6 md:px-12 border-t border-zinc-900/50">
      
      <div className="max-w-[1600px] mx-auto mb-20 text-center">
        <span className="text-[#d4af37] text-[10px] md:text-[11px] uppercase tracking-[0.8em] block mb-3 opacity-60">
          Aura Designer Atelier
        </span>
        <h1 className="text-white text-5xl md:text-8xl font-serif tracking-tight">
          Couture <span className="italic text-[#d4af37]">Archive</span>
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Sidebar Nav */}
        <div className="md:w-1/4 lg:w-1/5 border-l md:border-l-0 md:border-r border-zinc-800/40 pr-0 md:pr-8 overflow-x-auto md:overflow-visible no-scrollbar">
          <p className="hidden md:block text-zinc-500 text-[9px] uppercase tracking-[0.4em] mb-12 font-bold opacity-50">Collections</p>
          <nav className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-8 whitespace-nowrap pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat)}
                className={`group text-left transition-all duration-300 relative py-1 ${
                  activeTab.id === cat.id ? "text-[#d4af37]" : "text-zinc-600 hover:text-zinc-200"
                }`}
              >
                <span className={`text-[10px] md:text-sm uppercase tracking-[0.3em] ${activeTab.id === cat.id ? "font-medium" : "font-extralight"}`}>
                  {cat.label}
                </span>
                {activeTab.id === cat.id && (
                  <div className="absolute -bottom-2 left-0 h-[1px] bg-[#d4af37] w-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Grid Area */}
        <div className="md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryData[activeTab.folder]?.map((item, i) => {
              const imagePath = `/gallery/${activeTab.folder}/${item.src}`;
              
              return (
                <div key={`${activeTab.id}-${i}`} className="group">
                  <div
                      onClick={() => setSelectedImg({ ...item, path: imagePath })}
                      className="relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer shadow-2xl border border-white/5"
                  >
                    <img
                      src={imagePath}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                  
                  <div className="mt-4 flex justify-between items-start">
                      <div>
                          <h3 className="text-white text-[10px] uppercase tracking-[0.2em] font-light mb-1">{item.title}</h3>
                          <div className="flex gap-3 items-center">
                              <span className="text-[#d4af37] text-sm font-medium">Rs. {item.pkr}</span>
                              <span className="text-zinc-600 text-[10px]">/ ${item.usd}</span>
                          </div>
                      </div>
                      <span className="text-zinc-700 text-[8px] uppercase tracking-widest border-b border-zinc-800 pb-1 group-hover:text-[#d4af37] group-hover:border-[#d4af37] transition-colors">Enquire</span>
                  </div>
                </div>
              );
            })}
          </div> {/* Yahan ab bilkul sahi div close ho rha ha */}
        </div>
      </div>

      {/* Simplified Lightbox without WhatsApp Link */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-16 overflow-y-auto">
          <button onClick={() => setSelectedImg(null)} className="fixed top-8 right-8 text-white/50 hover:text-white transition-colors text-xs tracking-widest z-[110]">CLOSE ✕</button>
          
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-auto">
              <div className="h-full flex items-center justify-center">
                <img
                  src={selectedImg.path}
                  className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain shadow-2xl border border-white/10"
                  alt={selectedImg.title}
                />
              </div>
              <div className="text-center md:text-left">
                  <h2 className="text-white text-3xl md:text-5xl font-serif mb-4 leading-tight">{selectedImg.title}</h2>
                  <p className="text-[#d4af37] text-2xl font-light mb-6 font-serif tracking-widest border-b border-zinc-800 pb-6">
                      Rs. {selectedImg.pkr} <span className="text-zinc-600 text-lg ml-2">/ ${selectedImg.usd}</span>
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 tracking-wide font-light">
                      Expertly handcrafted at the Atelier using traditional artisanal techniques. This piece features custom embroidery work that takes approximately 100+ hours of dedicated mastery.
                  </p>
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;