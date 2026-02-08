"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HumanAIConnection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Human Vision. <br />
            <span className="text-neonViolet">Artificial Intelligence.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don't replace humans; we give them superpowers. Our products bridge the gap between creative intent and computational power.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          // FIX 1: Responsive Height (Shorter on mobile to fit the wide image better)
          className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/50"
        >
           {/* IMPORTANT: Ensure hand-ai.PNG is in your 'public' folder */}
           <Image 
            src="/hand-ai.PNG" 
            alt="AI and Human Collaboration" 
            fill 
            priority={true}
            // FIX 2: 'object-contain' on mobile (shows whole image), 'object-cover' on desktop
            className="object-contain md:object-cover object-center opacity-60 hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          />
           
           {/* Glowing Contact Point (The Dot) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_50px_20px_rgba(255,255,255,0.5)] z-20 animate-pulse pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}