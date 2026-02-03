"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";
import { FaXTwitter, FaUpwork } from "react-icons/fa6";
import { SiFreelancer, SiFiverr } from "react-icons/si";

// 1. EDIT THIS LIST: Add or remove any accounts you want
const socialLinks = [
  { 
    name: "Upwork", 
    icon: <FaUpwork />, 
    url: "#", 
    color: "hover:bg-[#14a800]", // Upwork Green
    status: "Top Rated" 
  },
  { 
    name: "Freelancer", 
    icon: <SiFreelancer />, 
    url: "#", 
    color: "hover:bg-[#29b2fe]", // Freelancer Blue
    status: "Available" 
  },
  { 
    name: "Fiverr", 
    icon: <SiFiverr />, 
    url: "#", 
    color: "hover:bg-[#1dbf73]", // Fiverr Green
    status: "Level 2 Seller" 
  },
  { 
    name: "LinkedIn", 
    icon: <FaLinkedin />, 
    url: "#", 
    color: "hover:bg-[#0077b5]", // LinkedIn Blue
    status: "Connect" 
  },
  { 
    name: "GitHub", 
    icon: <FaGithub />, 
    url: "https://github.com/mkpurohitt", 
    color: "hover:bg-white hover:text-black", 
    status: "View Code" 
  },
  { 
    name: "Behance", 
    icon: <FaBehance />, 
    url: "#", 
    color: "hover:bg-[#1769ff]", 
    status: "Portfolio" 
  },
  { 
    name: "X / Twitter", 
    icon: <FaXTwitter />, 
    url: "#", 
    color: "hover:bg-black hover:border-white", 
    status: "Follow" 
  },
  { 
    name: "Instagram", 
    icon: <FaInstagram />, 
    url: "#", 
    color: "hover:bg-gradient-to-r from-purple-500 to-pink-500", 
    status: "Social" 
  },
];

export default function PortfolioHome() {
  return (
    <section className="py-32 bg-deepVoid border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonViolet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Global <span className="text-neonCyan">Network</span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          We operate across all major freelance networks and social platforms. 
          Connect with us where you work best.
        </p>

        {/* Dynamic Grid: Auto-adjusts based on screen size */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 group flex flex-col items-center gap-4 text-gray-400 ${link.color} hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white tracking-wide">{link.name}</span>
                <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest border border-white/20 px-2 py-0.5 rounded-full mx-auto">
                  {link.status}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <a 
          href="/portfolio" 
          className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full border border-neonCyan/30 text-neonCyan hover:bg-neonCyan hover:text-black transition-all duration-300 font-bold tracking-widest text-sm uppercase group"
        >
          View Full Project Gallery
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>

      </div>
    </section>
  );
}