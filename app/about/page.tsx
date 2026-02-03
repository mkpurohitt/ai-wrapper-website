"use client";
import { motion } from "framer-motion";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";
import { FaBrain, FaCode, FaRocket } from "react-icons/fa";

const stats = [
  { label: "AI Models Integrated", value: "50+" },
  { label: "Efficiency Boost", value: "400%" },
  { label: "Projects Deployed", value: "25+" },
  { label: "Human Error Reduced", value: "99%" },
];

const timeline = [
  { year: "2024", title: "The Inception", desc: "AI Wrapper was founded with a single mission: To bridge the gap between complex LLMs and practical business software." },
  { year: "2025", title: "The First project", desc: "Delieverd a data dashboard project to the firm and increase the productivity by 3x and reduced error rate by 80 percent many more projects." },
  { year: "2026", title: "Expansion", desc: "Scaled to full-stack AI development, offering custom services and products for enterprise clients and customers." },
  { year: "FUTURE", title: "Singularity", desc: "Building 'AI Wrappers' - the future of AI development." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-deepVoid selection:bg-neonCyan selection:text-black pb-20">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neonViolet/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-neonCyan font-mono tracking-widest uppercase text-sm"
        >
          // Our Philosophy
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6"
        >
          Architects of <span className="text-neonViolet">Intelligence</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          We are not just developers. We are synthesis engineers. We believe that 
          <span className="text-white"> Code + AI </span> is the most powerful force in modern history.
        </motion.p>
      </section>

      {/* 2. Stats Grid */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The "Why Us" Split Section */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="relative">
           {/* Abstract Visual Representation */}
           <div className="aspect-square rounded-2xl bg-gradient-to-br from-neonCyan/20 to-neonViolet/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
             <FaBrain className="text-9xl text-white/20 animate-pulse" />
           </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Human Creativity. <br/> Machine Precision.
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-3 bg-neonCyan/10 rounded-lg h-fit text-neonCyan"><FaCode /></div>
              <div>
                <h4 className="text-white font-bold text-lg">Clean Architecture</h4>
                <p className="text-gray-400 text-sm">We don't rely solely on AI. We build robust, scalable codebases that AI enhances, not replaces.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-neonViolet/10 rounded-lg h-fit text-neonViolet"><FaRocket /></div>
              <div>
                <h4 className="text-white font-bold text-lg">Speed to Market</h4>
                <p className="text-gray-400 text-sm">By using our proprietary AI wrappers, we deploy products 5x faster than traditional agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Roadmap (Timeline) */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">The Roadmap</h2>
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              {/* Dot on line */}
              <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-neonCyan shadow-[0_0_10px_#00F0FF]" />
              
              <div className="md:flex gap-8 items-start">
                <div className="md:w-24 shrink-0 font-mono text-neonCyan font-bold text-xl mb-2 md:mb-0 md:text-right">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer & Dock */}
      <div className="mt-32">
        <Footer />
      </div>
      <FloatingDock />
    </main>
  );
}