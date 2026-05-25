"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/collection' },
    { name: 'Bespoke', href: '/bespoke' }, 
    { name: 'About', href: '/about' }, 
  ];

  return (
    <nav className="fixed w-full top-0 z-[100] h-20 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 flex justify-between h-full items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex flex-col z-[120]">
          <span className="text-xl lg:text-2xl font-extralight tracking-[0.5em] text-white">AURA</span>
          <span className="text-[7px] tracking-[0.4em] font-bold text-[#C5A059] mt-1 uppercase">Designer Atelier</span>
        </Link>

        {/* Desktop Links & Button */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group py-2 hover:text-white transition-all">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <Link href="/appointment">
            <button className="border border-[#C5A059]/40 text-[#C5A059] px-8 py-3 text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[#C5A059] hover:text-black cursor-pointer">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-[120] flex flex-col items-end gap-1.5 p-2 bg-transparent border-0 outline-none cursor-pointer">
          <div className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-6'}`} />
          <div className={`h-[1px] bg-[#C5A059] transition-all duration-300 ${isOpen ? 'opacity-0 w-0' : 'w-4'}`} />
          <div className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-[5px]' : 'w-8'}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/98 z-[110] flex flex-col items-center justify-center min-h-screen w-screen left-0 top-0 overflow-hidden px-6"
          >
            {/* Links Container */}
            <div className="flex flex-col items-center space-y-8 w-full text-center">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-xl md:text-2xl font-light tracking-[0.5em] text-zinc-300 uppercase block py-2 transition-colors duration-300 hover:text-[#C5A059] active:text-[#C5A059]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Button Container with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5 }}
                className="pt-6 w-full max-w-xs"
              >
                <Link href="/appointment" onClick={() => setIsOpen(false)} className="block w-full">
                  <button className="w-full border border-[#C5A059] text-[#C5A059] bg-transparent py-4 text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-300 active:bg-[#C5A059] active:text-black">
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;