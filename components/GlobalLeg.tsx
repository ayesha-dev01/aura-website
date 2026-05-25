"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Next.js Link import kiya routing ke liye

const EliteCoutureLegacy = () => {
  return (
    /* FIXED: py-40 ko badal kar pt-32 aur pb-10 kar diya hai takay niche wala gap khatam ho */
    <section className="pt-32 pb-10 bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/10 via-transparent to-transparent opacity-40"></div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Triple Image Editorial Layout - order-2 (mobile par niche) aur lg:order-1 (laptop par left) */}
        <div className="lg:col-span-6 relative h-[700px] lg:h-[850px] flex items-center order-2 lg:order-1">
          
          {/* 1. Main High-End Bridal Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[75%] h-[80%] z-10 overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="/gallery/wedding/img11.png" 
              alt="Luxury Pakistani Bridal" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] hover:scale-110"
            />
          </motion.div>

          {/* 2. Detail Image 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute top-10 right-0 w-[45%] h-[32%] z-20 overflow-hidden border-4 border-black shadow-2xl"
          >
            <img 
              src="gallery/wedding/img12.png" 
              alt="Hand Embroidery Detail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/60 px-3 py-1">
                <span className="text-[#C5A059] text-[8px] font-bold tracking-[0.3em] uppercase">Artisanal Craft</span>
            </div>
          </motion.div>

          {/* 3. Detail Image 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute bottom-12 right-4 w-[40%] h-[30%] z-20 overflow-hidden border-4 border-black shadow-2xl"
          >
            <img 
            src="gallery/wedding/img13.png"
              alt="Bridal Couture" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content Section - order-1 (mobile par sab se upar) aur lg:order-2 (laptop par right side) */}
        <div className="lg:col-span-6 lg:pl-10 order-1 lg:order-2">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h4 className="text-[#C5A059] text-[11px] font-bold tracking-[0.8em] uppercase mb-6 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-[#C5A059]"></span> International Couture
            </h4>
            
            <h2 className="text-6xl lg:text-8xl font-extralight tracking-tighter leading-[0.9] mb-10 text-white">
              The Legacy <br /> 
              <span className="italic font-light text-[#C5A059] block mt-4">of Fine Craft.</span>
            </h2>

            <div className="flex flex-wrap gap-4 mb-12">
                {['United Kingdom', 'New York', 'Dubai', 'Toronto', 'Lahore'].map((country) => (
                    <span key={country} className="text-[9px] tracking-[0.4em] uppercase border border-[#C5A059]/30 px-5 py-2 hover:bg-[#C5A059] hover:text-black transition-all duration-500">
                        {country}
                    </span>
                ))}
            </div>

            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 border-l-2 border-[#C5A059]/20 pl-6">
                Specializing in bespoke bridal wear and celebrity couture, 
                blending traditional craftsmanship with international silhouettes.
            </p>

            {/* INTEGRATED ROUTING WITHOUT CHANGING YOUR PREMIUM STYLING */}
            <Link href="/bespoke" className="inline-block">
              <button className="relative group overflow-hidden border border-white/20 px-12 py-6 cursor-pointer">
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.5em] uppercase group-hover:text-black transition-colors duration-500">
                      Inquire for Bespoke
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EliteCoutureLegacy;