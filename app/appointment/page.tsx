"use client";
import React, { useRef, useState, useEffect, Suspense } from 'react';
import * as emailjs from '@emailjs/browser';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedInput = ({ label, name, type = "text", required = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative mb-8">
      {/* Label: Iski positioning exact border line ke center mein hai */}
      <motion.label
        initial={false}
        animate={{
          // -13px par ye exact border line ke beech mein baithta hai
          y: isFocused || hasValue ? -13 : 12, 
          scale: isFocused || hasValue ? 0.75 : 1,
          color: isFocused ? "#C5A059" : "rgba(255,255,255,0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        // px-2 aur bg-[#050505] line ko cut karne ke liye zaroori hai
        className="absolute left-4 z-30 px-2 bg-[#050505] text-[10px] uppercase tracking-[0.2em] pointer-events-none origin-left"
      >
        {label}
      </motion.label>

      <motion.div
        animate={{
          borderColor: isFocused ? "#C5A059" : "rgba(255,255,255,0.1)",
          boxShadow: isFocused ? "0 0 20px rgba(197, 160, 89, 0.05)" : "none",
        }}
        transition={{ duration: 0.4 }}
        className="relative border rounded-md px-4 py-3 transition-all z-20"
      >
        <input
          name={name}
          type={type}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className="w-full bg-transparent outline-none text-white text-sm relative z-20 pt-1"
        />
      </motion.div>
    </div>
  );
};

const AppointmentForm = () => {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("sSchpjvqQLG9TaiDk");
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs.sendForm('service_ezj6rbs', 'template_immb7eu', form.current, 'sSchpjvqQLG9TaiDk')
      .then(() => {
        alert("Request Sent Successfully.");
        form.current?.reset();
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 font-sans select-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full p-10 md:p-14 border border-white/5 bg-zinc-900/10 backdrop-blur-3xl rounded-sm shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      >
        <header className="mb-14 text-center">
          <motion.h2 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-2xl md:text-3xl font-extralight uppercase text-[#C5A059]"
          >
            {source === 'bespoke' ? 'Bespoke Atelier' : 'Consultation'}
          </motion.h2>
          <div className="h-[1px] w-12 bg-[#C5A059] mx-auto mt-4 opacity-50" />
        </header>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-2">
          <input type="hidden" name="source_origin" value={source || 'general'} />
          
          <AnimatedInput label="Full Name" name="name" required />
          <AnimatedInput label="Email Address" name="email" type="email" required />
          
          <div className="relative pt-6 pb-2 border-b border-white/10 group mb-12">
            <label className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059]/60 block mb-3 font-bold">
              Select Interest
            </label>
            <select 
              name="message" 
              defaultValue=""
              className="w-full bg-transparent outline-none text-white text-xs appearance-none cursor-pointer tracking-widest uppercase py-2"
              required
            >
              <option value="" disabled className="bg-black">Choose a Category</option>
              <option value="Bridal Couture" className="bg-black">Bridal Couture</option>
              <option value="Luxury Pret" className="bg-black">Luxury Pret</option>
              <option value="Heritage Art" className="bg-black">Heritage Art</option>
              <option value="Menswear" className="bg-black">Menswear</option>
              <option value="Private Consultation" className="bg-black">Private Consultation</option>
            </select>
            <div className="absolute right-0 bottom-4 pointer-events-none opacity-40">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1"/></svg>
            </div>
          </div>

          <motion.button 
            whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(197,160,89,0.2)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={loading} 
            className="w-full bg-[#C5A059] text-black font-bold py-6 mt-4 tracking-[0.6em] uppercase text-[10px] transition-all duration-700 hover:bg-white disabled:bg-zinc-800"
          >
            {loading ? "Transmitting..." : "Send Request"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <AppointmentForm />
    </Suspense>
  );
}