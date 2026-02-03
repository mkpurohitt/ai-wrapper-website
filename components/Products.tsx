"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLock, FaFingerprint, FaClock } from "react-icons/fa";

const upcomingProducts = [
  {
    id: 1,
    title: "Product: BOOK_SHORE",
    category: "AI BOOK STORE ENGINE",
    description: "A online book store powered by AI with contextual translations.",
    status: "COMING SOON",
    icon: <FaFingerprint />,
    progress: 75, // Fake progress bar percentage
  },
  {
    id: 2,
    title: "Project: ENTERION",
    category: "AUTOMATION",
    description: "AN Entertainment platform powered by AI.",
    status: "IN DEVELOPMENT",
    icon: <FaLock />,
    progress: 40,
  },
  {
    id: 3,
    title: "Project: SERVICE_PURE",
    category: "DATA SCIENCE",
    description: "Serrvice based marketplace to hire service provider for your needs.",
    status: "CONCEPT PHASE",
    icon: <FaClock />,
    progress: 15,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-neonCyan font-mono text-sm tracking-widest uppercase"
        >
          // PRODUCT DIVISION
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
          Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Initiatives</span>
        </h2>
      </div>

      {/* The "Coming Soon" Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
          >
            {/* Background "Scanner" Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonCyan/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />

            {/* Icon Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-black/50 rounded-lg border border-white/10 text-neonCyan text-xl">
                {product.icon}
              </div>
              <span className="text-[10px] font-mono border border-neonViolet/30 text-neonViolet px-2 py-1 rounded bg-neonViolet/10">
                {product.status}
              </span>
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-tighter">
              {product.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Fake "Loading" Bar */}
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${product.progress}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-neonCyan to-neonViolet"
              />
            </div>
            <div className="mt-2 flex justify-between text-xs font-mono text-gray-500">
              <span>SYSTEM_BUILDing...</span>
              <span>{product.progress}%</span>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}