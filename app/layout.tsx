import { Metadata } from "next";
import "./globals.css"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsApp"; // 1. WhatsApp Button import kiya

export const metadata: Metadata = {
  title: "Aura Atelier | Bespoke Luxury Couture & Bridal Wear",
  description: "Experience the art of high couture at Aura Designer Atelier. Discover premium hand-crafted bridal wear, formal luxury silhouettes, and bespoke tailoring designed to perfection.",
  keywords: [
    "Aura Atelier", 
    "Aura Designer Atelier", 
    "Bespoke Couture", 
    "Luxury Bridal Wear", 
    "Designer Boutique", 
    "High Couture Fashion Studio",
    "Custom Wedding Dresses"
  ],
  authors: [{ name: "Aura Atelier" }],
  openGraph: {
    title: "Aura Atelier | Bespoke Luxury Couture",
    description: "International Couture & Luxury Boutique. Hand-woven legends crafted for your defining moments.",
    url: "https://www.auraatelier.com", 
    siteName: "Aura Atelier",
    images: [
      {
        url: "/gallery/hero-bg.jpg", 
        width: 1200,
        height: 630,
        alt: "Aura Atelier Premium Silhouette",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn /> {/* 2. WhatsApp Button yahan inject kiya */}
      </body>
    </html>
  );
}