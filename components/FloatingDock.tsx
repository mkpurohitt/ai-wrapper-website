"use client";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { FaHome, FaLayerGroup, FaRocket, FaEnvelope, FaUserAstronaut, FaBriefcase } from "react-icons/fa";

// Define the links and icons
const links = [
  { title: "Home", icon: <FaHome />, href: "/" },
  { title: "About", icon: <FaUserAstronaut />, href: "/about" }, 
  { title: "Work", icon: <FaBriefcase />, href: "/portfolio" },
  { title: "Services", icon: <FaLayerGroup />, href: "/#services" },
  { title: "Products", icon: <FaRocket />, href: "/#products" },
  { title: "Contact", icon: <FaEnvelope />, href: "/#contact" },
];

export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-4 md:bottom-8">
      {/* FIX 1 & 2: 
         - scale-75: Shrinks the whole dock to 75% size on mobile so it fits.
         - origin-bottom: Ensures it shrinks downwards, not floating up.
      */}
      <div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-2 md:gap-4 rounded-2xl bg-white/10 px-4 pb-3 border border-white/20 backdrop-blur-md scale-75 md:scale-100 origin-bottom transition-transform duration-300"
      >
        {links.map((link) => (
          <AppIcon mouseX={mouseX} key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}

// Sub-component for individual icons
function AppIcon({ mouseX, title, icon, href }: { mouseX: MotionValue; title: string; icon: any; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Width calculation for the zoom effect
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={href}
      ref={ref}
      style={{ width }}
      className="aspect-square flex items-center justify-center rounded-full bg-deepVoid border border-white/20 text-gray-400 hover:text-neonCyan hover:border-neonCyan hover:bg-black transition-colors group relative"
    >
      <span className="text-xl md:text-2xl flex items-center justify-center">
        {icon}
      </span>
      
      {/* Tooltip (Hidden on mobile to prevent clutter) */}
      <span className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {title}
      </span>
    </motion.a>
  );
}