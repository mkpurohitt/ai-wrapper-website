"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaTerminal, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = "service_cwjbrw2";
    const TEMPLATE_ID = "template_cqm6hcs";
    const PUBLIC_KEY = "bh__PkwX0hPhRQ_22";
    // 2. FIXED MAPPING (Matches your Screenshot image_2d3e21.png)
    const templateParams = {
      user_name: formState.name,       // Matches {{user_name}}
      user_email: formState.email,     // Matches {{user_email}}
      contact_number: formState.phone, // Matches {{contact_number}}
      subject: "New Project Inquiry",  // Matches {{subject}}
      message: formState.message,      // Matches {{message}}
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        alert("TRANSMISSION SUCCESSFUL: Agents dispatched.");
        setFormState({ name: "", email: "", phone: "", message: "" });
        setLoading(false);
      }, (error) => {
        alert("TRANSMISSION FAILED: " + error.text);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-4 max-w-4xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to <span className="text-neonCyan">Initialize?</span>
        </h2>
        <p className="text-gray-400">Execute the protocol below to start your project.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full rounded-xl overflow-hidden bg-[#0F0F14] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <div className="bg-[#1A1A20] px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs font-mono text-gray-500 flex items-center justify-center gap-2">
              <FaTerminal /> root@aiwrapper:~
            </span>
          </div>
        </div>

        <div className="p-6 md:p-10 font-mono text-sm md:text-base">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name Input */}
            <div className="flex flex-col md:flex-row gap-2 md:items-center text-green-400">
              <span className="shrink-0">root@user:~$ define_identity --name</span>
              <input 
                type="text" 
                placeholder='"John Doe"'
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:ring-0"
                required 
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col md:flex-row gap-2 md:items-center text-blue-400">
              <span className="shrink-0">root@user:~$ set_contact --email</span>
              <input 
                type="email" 
                placeholder='"john@company.com"'
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:ring-0"
                required 
              />
            </div>

            {/* Phone Input (NEW) */}
            <div className="flex flex-col md:flex-row gap-2 md:items-center text-purple-400">
              <span className="shrink-0">root@user:~$ set_comms --phone</span>
              <input 
                type="tel" 
                placeholder='"Number"'
                value={formState.phone}
                onChange={(e) => setFormState({...formState, phone: e.target.value})}
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:ring-0"
                required 
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2 text-yellow-400">
              <span>root@user:~$ input_message_payload</span>
              <textarea 
                rows={4}
                placeholder="// Type your project details here..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="bg-black/30 border border-white/10 rounded-md p-4 outline-none text-white focus:border-neonCyan/50 transition-colors resize-none placeholder-gray-700"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded hover:bg-neonCyan/10 hover:border-neonCyan/50 transition-all duration-300 text-white disabled:opacity-50"
            >
              <span>{loading ? "TRANSMITTING..." : "EXECUTE_TRANSMISSION"}</span>
              <FaPaperPlane className={`text-xs ${!loading && "group-hover:translate-x-1 transition-transform"}`} />
            </button>

          </form>
        </div>
      </motion.div>
    </section>
  );
}