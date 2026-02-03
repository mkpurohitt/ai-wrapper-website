"use client";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { FaHome, FaLayerGroup, FaRocket, FaEnvelope, FaUserAstronaut, FaBriefcase} from "react-icons/fa";




// ... inside the file ...

const links = [
  { title: "Home", icon: <FaHome />, href: "/" },
  { title: "About", icon: <FaUserAstronaut />, href: "/about" }, // New
  { title: "Work", icon: <FaBriefcase />, href: "/portfolio" }, // New
  { title: "Services", icon: <FaLayerGroup />, href: "/#services" },
  { title: "Products", icon: <FaRocket />, href: "/#products" },
  { title: "Contact", icon: <FaEnvelope />, href: "/#contact" },
];
export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex h-16 items-end gap-4 rounded-2xl bg-white/10 px-4 pb-3 border border-white/20 backdrop-blur-md">
      {links.map((link) => (
        <AppIcon mouseX={mouseX} key={link.title} {...link} />
      ))}
    </div>
  );
}

// Sub-component for individual icons
function AppIcon({ mouseX, title, icon, href }: { mouseX: MotionValue; title: string; icon: any; href: string }) {
  // FIXED: Changed HTMLDivElement to HTMLAnchorElement
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={href}
      ref={ref}
      style={{ width }}
      className="aspect-square flex items-center justify-center rounded-full bg-deepVoid border border-white/20 text-gray-400 hover:text-neonCyan hover:border-neonCyan hover:bg-black transition-colors group relative"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <span className="text-xl md:text-2xl flex items-center justify-center">
        {icon}
      </span>
      
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {title}
      </span>
    </motion.a>
  );
}