"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode, FaMobileAlt, FaServer, FaRobot, FaCogs, FaChartLine } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

// --- Mini Components for animations ---

const CodeTyper = () => {
  const codeString = "const webApp = new NextJSApp();\nawait webApp.deploy_with_ai();";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(codeString.slice(0, i));
      i++;
      if (i > codeString.length) i = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs text-green-400 bg-black/50 p-3 rounded-md border border-white/10 mt-2 min-h-[60px]">
      {text}<span className="animate-pulse">|</span>
    </div>
  );
};

const DataStream = () => {
  const [heights, setHeights] = useState([20, 40, 60, 30, 80, 50, 70, 40]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(heights.map(() => Math.floor(Math.random() * 80) + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end gap-1 h-16 mt-2">
      {heights.map((h, i) => (
        <div 
          key={i} 
          className="w-2 bg-neonViolet transition-all duration-300 rounded-t-sm" 
          style={{ height: `${h}%`, opacity: 0.5 + i * 0.1 }} 
        />
      ))}
    </div>
  );
};

// --- Main Component ---

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const servicesList = [
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "neonCyan",
    description: "Next.js & React platforms etc built for speed, SEO, and AI integration.",
    animation: <CodeTyper />
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    color: "blue-400",
    description: "React Native or Flutter and iOS/Android apps enhanced with on-device AI features."
  },
  {
    title: "Custom Software",
    icon: <FaServer />,
    color: "pink-500",
    description: "Tailored backend systems and APIs designed for high-load AI workloads."
  },
  {
    title: "Automation",
    icon: <FaCogs />,
    color: "yellow-400",
    description: "Workflow automation that connects your tools and eliminates manual tasks.",
    animation: <div className="mt-4 flex justify-center"><BiNetworkChart className="text-5xl text-yellow-400 animate-pulse" /></div>
  },
  {
    title: "AI Agents",
    icon: <FaRobot />,
    color: "neonViolet",
    description: "Autonomous bots build with python (AI frameworks) and n8n for support, sales, operations etc that work 24/7."
  },
  {
    title: "ML Integration & Data Science",
    icon: <FaChartLine />,
    color: "green-400",
    description: "Predictive models, data analysis, and real-time insights integrated directly.",
    animation: <DataStream />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Our Core <span className="text-neonCyan">Capabilities</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl border border-white/10 bg-glass backdrop-blur-md hover:border-${service.color.replace('neon', '')}/50 transition-colors group overflow-hidden relative`}
          >
            <div className={`p-3 bg-${service.color.replace('neon', '')}/10 rounded-lg w-fit mb-4 text-${service.color} text-2xl`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-neonCyan transition-colors">{service.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{service.description}</p>
            
            {service.animation && (
              <div className="mt-4">
                {service.animation}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}