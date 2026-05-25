
import Hero from "@/components/Hero";
import GlobalLeg from "@/components/GlobalLeg";
import Gallery from "@/components/gallery";
import Celebrity from "@/components/Celebrity";

export default function Home() {
  return (
    <main className="bg-[#050505]">
      {/* Saare sections yahan sequence mein aayenge */}
      <Hero />
      <GlobalLeg />
      <Gallery />
      <Celebrity />
    </main>
  );
}