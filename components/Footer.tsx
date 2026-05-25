"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const Footer = () => {
  // Brand level smooth entry animation settings
  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Custom premium cubic-bezier ease curve
      },
    },
  };

  return (
    <footer 
      id="bespoke-footer" 
      className="bg-black text-white pt-10 pb-10 px-6 md:px-12 border-t border-zinc-900/30 -mt-1 relative z-20 scroll-smooth"
    >
      <motion.div 
        className="max-w-[1600px] mx-auto"
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 leading-none text-white">
              Aura <br />
              <span className="italic text-[#d4af37] ml-12 md:ml-20">Atelier</span>
            </h2>
            <div className="h-[1px] w-20 bg-[#d4af37] mb-6 opacity-40"></div>
            <p className="text-zinc-500 text-[10px] md:text-[11px] uppercase tracking-[0.4em] leading-loose max-w-sm italic">
              Crafting legends in fabric. Every silhouette a masterpiece.
            </p>
          </div>

          {/* Nav Section */}
          <div className="md:col-span-3">
            <h3 className="text-[#d4af37] text-[10px] uppercase tracking-[0.6em] mb-8 font-bold opacity-70 italic">Archive</h3>
            <ul className="space-y-4">
              {['Home', 'Collection', 'Bespoke', 'About'].map((link) => {
                let targetHref = '/';
                
                if (link === 'Home') targetHref = '/';
                if (link === 'Collection') targetHref = '/collection';
                if (link === 'Bespoke') targetHref = '/bespoke'; 
                if (link === 'About') targetHref = '/about';

                return (
                  <li key={link}>
                    <Link 
                      href={targetHref}
                      className="text-zinc-500 hover:text-white text-[11px] uppercase tracking-[0.3em] transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-3 transition-all duration-500"></span>
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Section WITH TikTok Integrated */}
          <div className="md:col-span-3">
            <h3 className="text-[#d4af37] text-[10px] uppercase tracking-[0.6em] mb-8 font-bold opacity-70 italic">Connect</h3>
            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                
                {/* Instagram Link + SVG */}
                <a 
                  href="https://instagram.com/raihasanhasan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-[#d4af37] text-[10px] uppercase tracking-[0.3em] transition-colors flex items-center gap-3 group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  Instagram
                </a>

                {/* Facebook Link + SVG */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61589633161317" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-[#d4af37] text-[10px] uppercase tracking-[0.3em] transition-colors flex items-center gap-3 group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>

                {/* TIKTOK LINK WITH PREMIUM HOVER SCALE */}
                <a 
                  href="https://www.tiktok.com/@ray.azam2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-[#d4af37] text-[10px] uppercase tracking-[0.3em] transition-colors flex items-center gap-3 group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                  TikTok
                </a>

              </div>
              
              {/* Email Section + SVG */}
              <div className="pt-4 border-t border-zinc-900 flex items-center gap-3 group">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-zinc-600 group-hover:text-[#d4af37] transition-colors duration-300"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a 
                  href="mailto:aqsafashionstudio4@gmail.com" 
                  className="text-zinc-400 text-[10px] lowercase tracking-widest hover:text-[#d4af37] transition-colors"
                >
                  aqsafashionstudio4@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[8px] text-zinc-700 uppercase tracking-[0.8em]">London • Dubai • Lahore</p>
          <p className="text-[8px] text-zinc-800 uppercase tracking-[0.4em]">
            © 2026 Aura Atelier — All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;