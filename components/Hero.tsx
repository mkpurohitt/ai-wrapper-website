"use client";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-deepVoid">
      <ParticlesBackground />
      
      <div className="z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
        {/* Tagline */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-neonCyan font-mono tracking-widest text-sm uppercase mb-4 block"
        >
          The Future of Development
        </motion.span>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6"
        >
          AI Wrapper
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto"
        >
          We build AI Agents, softwares, websites, and apps powered by Artificial Intelligence. 
          Simple. Scalable. Futuristic.
        </motion.p>

        {/* CTAs with Scroll Functionality */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Button 1: Scrolls to Services */}
          <button 
            onClick={() => scrollToSection('services')}
            className="px-10 py-4 bg-neonCyan text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
          >
            Our Services
          </button>
          
          {/* Button 2: Scrolls to Contact */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 border border-white/20 bg-white/5 text-white text-lg rounded-full hover:bg-white/10 transition-all cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}