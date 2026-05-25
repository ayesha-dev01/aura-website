"use client";
import { motion } from "framer-motion";

const WhatsAppBtn = () => {
  const phoneNumber = "923086935024";
  const message = "Salam! I'm interested in your handmade couture collection.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 right-10 z-[999]">
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // Glassmorphism + Gold Border effect
        className="group relative flex items-center justify-center w-20 h-20 bg-black/80 backdrop-blur-md border-2 border-[#D4AF37] rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden"
      >
        {/* Subtle Shine Animation across the button */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* The Icon - Size increased and color made bright Gold */}
        <svg 
          viewBox="0 0 448 512" 
          className="w-10 h-10 fill-[#D4AF37] group-hover:fill-white transition-colors duration-500 z-10"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.9-17-41.1-4.5-10.9-9.1-9.4-12.4-9.6H173c-4.2 0-11.1 1.6-16.9 7.9-5.8 6.2-22.1 21.6-22.1 52.6 0 31 22.6 61 25.7 65.1 3.2 4.2 44.4 67.8 107.7 95 15.1 6.5 26.8 10.4 36 13.3 15.1 4.8 28.9 4.1 39.8 2.5 12.1-1.8 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppBtn;