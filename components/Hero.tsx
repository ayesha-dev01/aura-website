"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden pt-44 pb-10">
      
      {/* Background Aesthetic Branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <h1 className="text-[35vw] font-serif italic text-white leading-none tracking-tighter">Aura</h1>
      </motion.div>

      <div className="max-w-[1500px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 w-full">
        
        {/* Left Content Side */}
        <div className="lg:col-span-5 space-y-8 lg:space-y-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center gap-4 lg:gap-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] bg-[#C5A059]"
              />
              <motion.span className="text-[#C5A059] text-[9px] lg:text-[10px] font-bold tracking-[0.6em] lg:tracking-[0.8em] uppercase">
                International Couture House
              </motion.span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="text-5xl lg:text-[100px] font-light tracking-tighter text-white leading-[1.1]"
            >
              Legacy <br /> 
              <span className="italic font-serif text-[#C5A059]">Refined.</span>
            </motion.h1>
          </div>
          
          <div className="border-l border-white/10 pl-8 lg:pl-12">
            <p className="text-gray-300 text-base lg:text-xl font-light italic leading-relaxed opacity-90">
              "Mastering the impossible for the world's most discerning wardrobes."
            </p>
          </div>

          <Link href="/appointment?type=general">
            <button className="group relative border border-[#C5A059]/40 text-[#C5A059] px-10 lg:px-14 py-4 lg:py-6 text-[9px] lg:text-[10px] font-bold tracking-[0.5em] uppercase transition-all duration-700 hover:bg-[#C5A059] hover:text-black mt-8">
              <span className="relative z-10">Private Inquiry</span>
            </button>
          </Link>
        </div>

        {/* Right Image Side - Premium Animation Implemented */}
        <div className="lg:col-span-7 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="relative h-[50vh] lg:h-[80vh] w-full overflow-hidden border border-white/5 shadow-2xl group"
          >
            {/* Smooth Cinematic Scale Effect on Image */}
            <motion.div 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974')] bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
            
            {/* Subtle Overlay Gradient for luxury finish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-[1.5s]" />
            
            {/* Animated Bottom Text Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute bottom-0 left-0 p-8 lg:p-12 z-10"
            >
               <p className="text-[#C5A059] text-[8px] tracking-[0.4em] font-bold uppercase mb-2">The Atelier Detail</p>
               <p className="text-white/90 text-sm lg:text-lg font-light italic">1,500 hours of hand-embroidery. A masterpiece.</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;