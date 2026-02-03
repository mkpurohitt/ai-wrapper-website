import dynamic from 'next/dynamic';
import Script from 'next/script'; 

// 1. CRITICAL IMPORTS (Keep these standard so they load INSTANTLY)
import Hero from "@/components/Hero";
import HumanAIConnection from "@/components/HumanAIConnection";

// 2. LAZY IMPORTS (Load these only when needed)
// REMOVED { ssr: false } to fix the build error. 
// It will still split the JS bundle and speed up loading.
const LLMOrbit = dynamic(() => import("@/components/LLMOrbit"));
const Services = dynamic(() => import("@/components/Services"));
const Products = dynamic(() => import("@/components/Products"));
const PortfolioHome = dynamic(() => import("@/components/PortfolioHome"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingDock = dynamic(() => import("@/components/FloatingDock"));

export default function Home() {
  // 1. STRUCTURED DATA (SEO Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AI Wrapper",
    "url": "https://aiwrapper.com",
    "logo": "https://aiwrapper.com/logo.png",
    "description": "Mumbai-based AI agency specializing in custom LLM agents, algorithmic trading bots, and business automation software.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "priceRange": "$$",
    "knowsAbout": [
      "Artificial Intelligence",
      "Algorithmic Trading",
      "Business Automation",
      "Next.js Development",
      "Custom Software"
    ]
  };

  return (
    <main className="min-h-screen bg-deepVoid relative selection:bg-neonCyan selection:text-black">
      {/* 2. INJECT THE SCHEMA */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Critical Components */}
      <Hero />
      <HumanAIConnection />
      
      {/* Heavy Components (Lazy Loaded) */}
      <LLMOrbit /> 
      <Services />
      <Products />
      <PortfolioHome />
      <Contact />
      <Footer />
      <FloatingDock />
    </main>
  );
}