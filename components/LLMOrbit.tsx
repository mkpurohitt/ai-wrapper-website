"use client";
import { motion } from "framer-motion";
import { SiOpenai, SiAnthropic, SiGoogle, SiNvidia, SiPython } from "react-icons/si";
import { FaBrain, FaSearch } from "react-icons/fa";

const orbitItems = [
  { icon: <SiOpenai />, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  { icon: <SiAnthropic />, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
  { icon: <SiGoogle />, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  { icon: <FaSearch />, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  { icon: <SiNvidia />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: <SiPython />, color: "text-yellow-300", bg: "bg-yellow-300/10", border: "border-yellow-300/20" },
];

export default function LLMOrbit() {
  // Reduced radius to ensure visibility on all screens
  const radius = 130; 

  return (
    <div className="relative flex items-center justify-center w-full h-[500px] overflow-hidden bg-deepVoid/50 border-t border-b border-white/5 py-10">
      
      {/* 1. The Orbit Track (Visible Line) - Scaled down */}
      <div 
        className="absolute rounded-full border border-dashed border-white/10 opacity-50" 
        style={{ width: radius * 2, height: radius * 2 }}
      />
      <div 
        className="absolute rounded-full border border-white/5 opacity-20" 
        style={{ width: radius * 3, height: radius * 3 }}
      />

      {/* 2. The Center Core (AI Wrapper) */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="absolute w-28 h-28 bg-neonCyan/20 rounded-full blur-2xl animate-pulse" />
        
        <div className="w-24 h-24 rounded-full bg-black border-2 border-neonCyan shadow-[0_0_40px_rgba(0,240,255,0.3)] flex items-center justify-center backdrop-blur-md z-10">
           <FaBrain className="text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </div>
        <p className="mt-4 text-xl font-bold text-white tracking-[0.2em] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
          AI WRAPPER
        </p>
      </div>

      {/* 3. The Revolving Container */}
      <motion.div 
        className="absolute flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {orbitItems.map((item, index) => {
          const angle = index * (360 / orbitItems.length);
          
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7 flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px)`, // Pushes them out exactly to the radius
              }}
            >
              {/* Counter-Rotate Icon */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className={`w-12 h-12 rounded-xl border ${item.border} ${item.bg} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm hover:scale-110 transition-transform`}
              >
                <span className={`text-xl ${item.color}`}>
                  {item.icon}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

    </div>
  );
}