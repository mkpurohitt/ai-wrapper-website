"use client";
import { useState } from "react";
import { FaCloudUploadAlt, FaLock } from "react-icons/fa";

// YOUR FULL SERVICE LIST
const CATEGORIES = [
  "Web Development",
  "App Development",
  "Custom Software",
  "Automation",
  "AI Agents",
  "ML Integration & Data Science"
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    category: CATEGORIES[0], // Default to first option
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  const handleLogin = () => {
    // Basic UI check. Real security is server-side.
    if (password) setIsAuthenticated(true);
  };

  const uploadImage = async () => {
    if (!imageFile) return null;

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    // DEBUGGING: Check Console (F12) to see if these print!
    console.log("Attempting Upload...");
    console.log("Cloud Name:", cloudName);
    console.log("Preset:", uploadPreset);

    if (!cloudName || !uploadPreset) {
      alert("MISSING KEYS: Check your .env.local file. Cloud Name or Preset is empty.");
      return null;
    }
    
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", uploadPreset); 
    data.append("cloud_name", cloudName);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: data,
      });
      
      const file = await res.json();
      
      if (!res.ok) {
        console.error("Cloudinary Error:", file);
        alert(`Cloudinary Error: ${file.error?.message}`);
        return null;
      }

      console.log("Upload Success:", file.secure_url);
      return file.secure_url;

    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error: Could not connect to Cloudinary.");
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const imageUrl = await uploadImage();
    if (!imageUrl) {
      setLoading(false);
      return; // Stop if image failed
    }

    const projectPayload = {
      ...formData,
      image: imageUrl,
      techStack: formData.techStack.split(",").map((t) => t.trim()),
      password: password, 
    };

    const res = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(projectPayload),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();

    if (result.success) {
      alert("Project Uploaded Successfully!");
      setFormData({ 
        title: "", 
        category: CATEGORIES[0], 
        description: "", 
        techStack: "", 
        githubLink: "", 
        liveLink: "" 
      });
      setImageFile(null);
    } else {
      alert("Database Upload Failed: " + result.error);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="p-8 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-4 w-80">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <FaLock className="text-neonCyan" /> Admin Access
          </h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            className="p-3 bg-black border border-white/20 rounded text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-neonCyan text-black font-bold py-2 rounded hover:bg-cyan-400">
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-8 md:p-20 text-white">
      <h1 className="text-3xl font-bold mb-8 text-neonCyan">Upload New Project</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
        
        {/* Title & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Project Title</label>
            <input required className="bg-black/50 border border-white/10 rounded p-3 w-full outline-none focus:border-neonCyan" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Category</label>
            <select 
              className="bg-black/50 border border-white/10 rounded p-3 w-full outline-none focus:border-neonCyan" 
              value={formData.category} 
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
            <label className="block text-sm text-gray-400 mb-1">Description</label>
            <textarea required rows={4} className="bg-black/50 border border-white/10 rounded p-3 w-full outline-none focus:border-neonCyan" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </div>

        <div>
            <label className="block text-sm text-gray-400 mb-1">Tech Stack (e.g. Next.js, Python)</label>
            <input required className="bg-black/50 border border-white/10 rounded p-3 w-full outline-none focus:border-neonCyan" value={formData.techStack} onChange={(e) => setFormData({...formData, techStack: e.target.value})} />
        </div>
        
        <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer relative hover:border-neonCyan transition-colors">
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
          <FaCloudUploadAlt className="text-4xl text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400">{imageFile ? imageFile.name : "Click to upload image"}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input placeholder="GitHub URL" className="bg-black/50 border border-white/10 rounded p-3 w-full outline-none focus:border-neonCyan" value={formData.githubLink} onChange={(e) => setFormData({...formData, githubLink: e.target.value})} />
          <input placeholder="Live Link" className="bg-black/50 border border-white/10 rounded p-3 w-full outline-none focus:border-neonCyan" value={formData.liveLink} onChange={(e) => setFormData({...formData, liveLink: e.target.value})} />
        </div>

        <button disabled={loading} type="submit" className="w-full bg-neonCyan text-black font-bold py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-50">
          {loading ? "Uploading..." : "Publish Project"}
        </button>
      </form>
    </div>
  );
}