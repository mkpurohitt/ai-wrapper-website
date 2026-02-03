"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";
import { FaGithub, FaExternalLinkAlt, FaSpinner } from "react-icons/fa";

const categories = ["All", "Web Dev","App Dev", "Custom Software", "AI Agents", "Automation", "ML Integration"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. FETCH DATA FROM API
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // 2. FILTER LOGIC
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p: any) => p.category === filter);

  return (
    <main className="min-h-screen bg-deepVoid selection:bg-neonCyan selection:text-black pb-20">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Selected <span className="text-neonCyan">Works</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A collection of high-performance software, AI agents, and web platforms we have engineered.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-mono tracking-wider
                ${filter === cat 
                  ? "bg-neonCyan text-black border-neonCyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/50 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 min-h-[400px]">
        
        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-neonCyan">
            <FaSpinner className="text-4xl animate-spin mb-4" />
            <p className="font-mono text-sm tracking-widest">LOADING_DATABASE...</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project._id || project.id}
                  className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-neonCyan/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Project Image */}
                  <div className="h-48 w-full relative overflow-hidden bg-black">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-neonCyan hover:text-black transition-colors" title="View Code">
                          <FaGithub className="text-xl" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-neonCyan hover:text-black transition-colors" title="Live Demo">
                          <FaExternalLinkAlt className="text-xl" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-mono text-neonCyan border border-neonCyan/30 px-2 py-1 rounded bg-neonCyan/10">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neonCyan transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Dynamic Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                      {project.techStack && project.techStack.map((tech: string, index: number) => (
                        <span key={index} className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-gray-400 group-hover:border-neonCyan/30 group-hover:text-neonCyan transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Footer & Dock */}
      <div className="mt-32">
        <Footer />
      </div>
      <FloatingDock />
    </main>
  );
}