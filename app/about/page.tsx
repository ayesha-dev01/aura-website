import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Our Heritage | Aura Atelier",
  description: "Discover the journey of Aura Atelier. Crafting bespoke luxury couture and premium bridal wear with over two decades of master craftsmanship since 2001.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      {/* Hero Section */}
      <section className="relative bg-zinc-950/40 text-center py-16 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059] italic">
            The Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4 tracking-tight leading-none">
            Our Story & <br />
            <span className="italic text-[#C5A059]">Craftsmanship</span>
          </h1>
          <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-6 opacity-40"></div>
          <p className="mt-6 text-zinc-400 text-xs md:text-sm uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed italic">
            Since 2001, transforming luxury fabrics into timeless silhouettes designed to perfection.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text Details */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block italic">
              25 Years of Global Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              The Art of Couture, <br />
              Perfected Since 2001
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-[13px] md:text-[14px] tracking-wide leading-relaxed font-light">
              <p>
                At <span className="text-white font-normal">Aura Atelier</span>, we believe that every dress tells a story. Our journey started in 
                <span className="text-[#C5A059] font-normal"> 2001</span> with a deep-rooted passion for traditional silhouettes, intricate hand-embroidery, 
                and flawless tailoring (<span className="italic">silai</span>). For over two decades, our master designer has been 
                crafting bespoke bridal and luxury formal wear for clients who value sheer perfection.
              </p>
              
              {/* HIGHLIGHTED WORLDWIDE TEXT */}
              <p className="border-l-2 border-[#C5A059] pl-4 italic text-zinc-300 bg-zinc-950/40 py-3 pr-2">
                While our roots are based in Pakistan, our master craftsmanship has crossed borders. We proudly cater to an elite international clientele, delivering breathtaking bespoke premium silhouettes across <span className="text-[#C5A059] font-bold not-italic">Dubai (UAE)</span>, <span className="text-[#C5A059] font-bold not-italic">Malaysia</span>, and the <span className="text-[#C5A059] font-bold not-italic">United Kingdom (UK)</span>.
              </p>

              <p>
                Every single stitch, motif, and drape is carefully planned. From heavy bridal lehengas 
                to contemporary luxury formals, our dedication to high-end craftsmanship ensures 
                that your defining moments are wrapped in pure elegance, no matter where you are in the world.
              </p>
            </div>

            {/* Experience & Global Counters */}
            <div className="border-t border-b border-zinc-900 py-6 my-6 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#C5A059]">2001</h3>
                <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 mt-1 font-bold">Established</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#C5A059]">25+ Yrs</h3>
                <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 mt-1 font-bold">Experience</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#C5A059]">Worldwide</h3>
                <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 mt-1 font-bold">Shipping</p>
              </div>
            </div>
          </div>

          {/* Right Side: Luxury Image Container */}
          <div className="lg:col-span-6">
            <div className="relative h-[450px] md:h-[550px] w-full bg-zinc-950 rounded-sm overflow-hidden border border-zinc-900/50 group">
              <Image 
                src="/gallery/kdhai/work-img.png" 
                alt="Aura Atelier Craftsmanship Since 2001"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Presence Section (Gaps Reduced) */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-20 pb-12">
        <div className="bg-zinc-950/40 border border-zinc-900 p-6 md:p-10 rounded-sm text-center">
          <span className="text-[9px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">International Footprint</span>
          <h3 className="text-2xl md:text-3xl font-serif text-white mt-2 mb-6">Serving Discerning Clients In</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 border border-zinc-900 bg-black/50">
              <p className="text-xs tracking-[0.3em] font-serif text-white uppercase">London</p>
              <p className="text-[8px] text-zinc-600 tracking-widest uppercase mt-1">United Kingdom</p>
            </div>
            <div className="p-3 border border-zinc-900 bg-black/50">
              <p className="text-xs tracking-[0.3em] font-serif text-[#C5A059] uppercase">Dubai</p>
              <p className="text-[8px] text-zinc-600 tracking-widest uppercase mt-1">United Arab Emirates</p>
            </div>
            <div className="p-4 border border-zinc-900 bg-black/50">
              <p className="text-xs tracking-[0.3em] font-serif text-white uppercase">Kuala Lumpur</p>
              <p className="text-[8px] text-zinc-600 tracking-widest uppercase mt-1">Malaysia</p>
            </div>
            <div className="p-3 border border-zinc-900 bg-black/50">
              <p className="text-xs tracking-[0.3em] font-serif text-white uppercase">Lahore</p>
              <p className="text-[8px] text-zinc-600 tracking-widest uppercase mt-1">Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section */}
      <section className="bg-zinc-950/30 border-t border-zinc-900 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h3 className="text-xl md:text-2xl font-serif tracking-[0.3em] text-[#C5A059] uppercase">
            Our Philosophy
          </h3>
          <p className="text-zinc-400 italic text-sm md:text-base leading-loose font-light max-w-2xl mx-auto">
            "Fashion fades, but custom tailoring and premium couture are forever. We don't just stitch clothes; we weave heritage that can be passed down through generations."
          </p>
          <div className="h-[1px] w-12 bg-zinc-800 mx-auto mt-2"></div>
        </div>
      </section>
    </div>
  );
}