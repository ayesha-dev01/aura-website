"use client";
import { motion } from "framer-motion";

const CelebrityWardrobe = () => {
  const celebrityWork = [
    { id: 1, img: "/gallery/menswear/img31.png", actor: "The Groom", project: "Bespoke Wedding Couture", category: "men" },
    { id: 2, img: "/gallery/menswear/img12.png", actor: "The Modern Visionary", project: "Formal Excellence", category: "men" },
    { id: 3, img: "/gallery/menswear/img32.png", actor: "The Regal Ambassador", project: "Red Carpet Archive", category: "men" },
    { id: 4, img: "/gallery/wedding/img1.png", actor: "The Midnight Muse", project: "Luxury Pret Couture", category: "women" },
    { id: 5, img: "/gallery/wedding/img5.png", actor: "The Ivory Grace", project: "Timeless Heritage Series", category: "women" },
    { id: 6, img: "/gallery/wedding/img3.png", actor: "The Scarlet Queen", project: "Cinematic Editorial Shoot", category: "women" },
  ];

  return (
    /* Changed py-16 to pt-16 pb-6 to reduce extra space at the very bottom */
    <section id="celebrity-section" className="bg-black pt-16 pb-6 px-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Header - Matched to Couture Archive Size */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block border-b border-[#C5A059]/20 pb-8 px-16"
          >
            <span className="text-[#C5A059] tracking-[0.7em] uppercase text-[10px] block mb-4 font-light">
              Collaborations & Muses
            </span>
            <h2 className="text-white text-4xl leading-tight md:text-7xl font-serif italic tracking-tighter font-bold">
              The Celebrity <span className="text-[#C5A059] font-normal not-italic">Archive.</span>
            </h2>
          </motion.div>
        </div>

        {/* --- MENSWEAR SECTION --- */}
        <div className="mb-10 text-center">
          <h3 className="text-[#C5A059] font-serif text-lg md:text-2xl italic tracking-[0.5em] uppercase opacity-90">
            The Gentlemen's Archive
          </h3>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {celebrityWork.filter(item => item.category === "men").map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-[#C5A059]/40">
                <img src={item.img} alt="Celebrity" className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
              </div>

              {/* Hover Effect Text & Line */}
              <div className="mt-8">
                <h4 className="text-white font-serif text-2xl tracking-wide group-hover:text-[#C5A059] transition-colors duration-500 italic leading-none">
                  {item.actor}
                </h4>
                <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mt-3 font-medium">
                  {item.project}
                </p>
                <div className="w-0 group-hover:w-16 h-[1px] bg-[#C5A059] mx-auto mt-5 transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tight Gap between sections */}
        <div className="h-24"></div>

        {/* --- WOMENSWEAR SECTION --- */}
        <div className="mb-10 text-center">
          <h3 className="text-[#C5A059] font-serif text-lg md:text-2xl italic tracking-[0.5em] uppercase opacity-90">
            The Bridal Atelier
          </h3>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {celebrityWork.filter(item => item.category === "women").map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-[#C5A059]/40">
                <img src={item.img} alt="Celebrity" className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
              </div>

              {/* Hover Effect Text & Line */}
              <div className="mt-8">
                <h4 className="text-white font-serif text-2xl tracking-wide group-hover:text-[#C5A059] transition-colors duration-500 italic leading-none">
                  {item.actor}
                </h4>
                <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mt-3 font-medium">
                  {item.project}
                </p>
                <div className="w-0 group-hover:w-16 h-[1px] bg-[#C5A059] mx-auto mt-5 transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Branding Footer - Reduced mt-32 to mt-16 and mb-8 to mb-4 */}
        <div className="mt-16 flex flex-col items-center opacity-30">
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent mb-4" />
           <p className="text-zinc-500 text-[9px] tracking-[1em] uppercase italic">Legacy Refined — Aura Boutique</p>
        </div>
      </div>
    </section>
  );
};

export default CelebrityWardrobe;