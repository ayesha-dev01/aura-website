"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function BespokePage() {
  
  // Explicitly typing variants to resolve Next.js / TypeScript compiler issues
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Sequenced presentation
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 22, 
        duration: 0.8 
      } 
    },
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-4 md:px-12 selection:bg-[#c5a880] selection:text-black font-light">
      
      {/* SECTION 1: CINEMATIC VIDEO BACKGROUND HERO */}
      <section className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden border border-zinc-900/40 p-4 rounded-sm">
        <div className="absolute inset-0 w-full h-full z-0 opacity-70">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover contrast-110"
            src="/bespoke-craft.mp4" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black z-10" />
        </div>

        {/* Hero Text Content Grid with Premium Entry Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 text-center max-w-4xl space-y-5 px-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          <p className="text-[10px] uppercase tracking-[0.7em] text-[#c5a880] font-medium">
            The Art of High Couture
          </p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase leading-tight text-zinc-100">
            Bespoke <span className="italic font-light text-[#c5a880]">Atelier</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#c5a880]/60 mx-auto my-4"></div>
          <p className="text-zinc-300 text-xs md:text-sm tracking-[0.15em] font-serif max-w-2xl mx-auto leading-relaxed italic">
            "Every silhouette is an untold story. We turn raw imagination into hand-woven legends, crafted specifically for your defining moments."
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: THE DESIGNER'S PHILOSOPHY */}
      <section className="max-w-[1000px] mx-auto mt-32 text-center space-y-6 px-4">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[#c5a880]">The Craftsmanship Manifesto</p>
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-zinc-200">
          Where Heritage Meets <span className="italic text-[#c5a880]">Modern Drapes</span>
        </h2>
        <p className="text-zinc-500 text-xs md:text-sm tracking-wide leading-loose max-w-3xl mx-auto font-light">
          In our private bespoke lounge, luxury is personal. Guided by the unique vision of our master designer, 
          each bridal, formal, and contemporary ensemble undergoes hundreds of hours of delicate hand-embroidery, 
          intricate tilla weaves, and precision pattern cutting to drape beautifully on the modern woman.
        </p>
      </section>

      {/* SECTION 3: THE 3-STEP COUTURE JOURNEY (ANIMATED CARDS) */}
      <section className="max-w-[1400px] mx-auto mt-36 space-y-16">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-serif tracking-[0.3em] uppercase text-zinc-300">The Atelier Experience</h2>
          <div className="w-8 h-[1px] bg-[#c5a880]/40 mx-auto mt-3"></div>
        </div>

        {/* Fixed Variants Mapping */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Step 1 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(197, 168, 128, 0.4)", backgroundColor: "rgba(9, 9, 11, 0.6)" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="space-y-4 p-8 border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-sm relative group cursor-pointer transition-colors duration-500"
          >
            <span className="text-[10px] text-[#c5a880] tracking-[0.3em] block font-serif font-semibold">01 / THE SKETCH</span>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white font-medium">Private Consultation</h3>
            <p className="text-zinc-500 text-[11px] tracking-wide leading-relaxed font-light">
              A one-on-one session with the designer to draft personalized mood boards, conceptualize tailored embroidery motifs, and study drapes suited to your structure.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(197, 168, 128, 0.4)", backgroundColor: "rgba(9, 9, 11, 0.6)" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="space-y-4 p-8 border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-sm relative group cursor-pointer transition-colors duration-500"
          >
            <span className="text-[10px] text-[#c5a880] tracking-[0.3em] block font-serif font-semibold">02 / THE EMBELLISHMENT</span>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white font-medium">Artisanal Hand-Weaving</h3>
            <p className="text-zinc-500 text-[11px] tracking-wide leading-relaxed font-light">
              Your piece is handed over to specialized local artisans. Selecting from premium pure silks and tulles, decorated with antique zardozi, crystals, and gold threadwork.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(197, 168, 128, 0.4)", backgroundColor: "rgba(9, 9, 11, 0.6)" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="space-y-4 p-8 border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-sm relative group cursor-pointer transition-colors duration-500"
          >
            <span className="text-[10px] text-[#c5a880] tracking-[0.3em] block font-serif font-semibold">03 / THE MUSLIN</span>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white font-medium">Perfected To Fit</h3>
            <p className="text-zinc-500 text-[11px] tracking-wide leading-relaxed font-light">
              Through rigorous structural checks, multiple fabric layout trials, and precise hand-tailoring inside our studio, we secure a flawless, timeless fitting.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4: ELITE CALL-TO-ACTION */}
      <section className="max-w-[1000px] mx-auto mt-44 mb-16 border-t border-b border-zinc-900 py-20 px-6 text-center space-y-8">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#c5a880] font-medium">
            Begin Your Custom Journey
          </p>
          <h2 className="text-2xl md:text-4xl font-serif tracking-[0.2em] uppercase text-zinc-100 max-w-2xl mx-auto leading-relaxed">
            Experience the Exceptional <span className="italic font-light text-[#c5a880]">Atelier Service</span>
          </h2>
        </div>
        
        <p className="text-zinc-500 text-xs tracking-widest max-w-xl mx-auto leading-relaxed font-light normal-case">
          Appointments are highly curated. Secure a private slot with our design team at the flagship lounge or arrange a virtual design consultation worldwide.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/appointment" 
            className="w-full sm:w-auto bg-[#c5a880] text-black font-semibold px-12 py-4 tracking-[0.4em] uppercase hover:bg-white transition-colors duration-500 text-[10px]"
          >
            Book An Appointment
          </a>
          <a 
            href="https://wa.me/923086935024" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-zinc-800 text-zinc-300 font-medium px-12 py-4 tracking-[0.4em] uppercase hover:bg-zinc-950 hover:text-white hover:border-[#c5a880]/40 transition-all duration-500 text-[10px]"
          >
            Direct Inquiry
          </a>
        </div>

        <div className="pt-6 text-[9px] uppercase tracking-[0.3em] text-zinc-600 space-y-1">
          <p>By Appointment Only • Studio Hours: 11:00 AM – 8:00 PM</p>
          <p className="text-[#c5a880]/50">aqsafashionstudio4.com</p>
        </div>
      </section>

    </main>
  );
}