"use client";
import { useState } from "react";
import { workCategories } from "@/lib/site";

const input =
  "w-full border-b border-ink/25 bg-transparent py-3 outline-none transition-colors focus:border-ember";

const emptyForm = {
  title: "",
  category: workCategories[0],
  description: "",
  techStack: "",
  githubLink: "",
  liveLink: "",
};

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [notice, setNotice] = useState<{ ok: boolean; text: string } | null>(null);
  const [formData, setFormData] = useState(emptyForm);

  const set = (key: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((f) => ({ ...f, [key]: e.target.value }));

  // The password is verified server-side when a project is published.
  const uploadImage = async (): Promise<string> => {
    if (!imageFile) throw new Error("Please choose an image.");
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary is not configured. Check the environment variables.");
    }
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", uploadPreset);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    if (!res.ok) throw new Error(file.error?.message || "Image upload failed.");
    return file.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotice(null);
    try {
      const image = await uploadImage();
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image,
          techStack: formData.techStack
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          password,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.error || "Publishing failed.");
      setFormData(emptyForm);
      setImageFile(null);
      setNotice({ ok: true, text: "Project published." });
    } catch (err) {
      setNotice({ ok: false, text: err instanceof Error ? err.message : "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  if (!unlocked) {
    return (
      <section className="shell flex min-h-[90svh] items-center justify-center pt-[4.5rem]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password) setUnlocked(true);
          }}
          className="w-full max-w-sm"
        >
          <p className="eyebrow text-stone">Admin</p>
          <h1 className="display mt-4 text-5xl">Sign in</h1>
          <input
            type="password"
            placeholder="Admin password"
            aria-label="Admin password"
            className={`${input} mt-8`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-ink py-3.5 font-medium text-paper transition-colors hover:bg-ember"
          >
            Continue
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="shell max-w-3xl pb-24 pt-36 md:pt-44">
      <p className="eyebrow text-stone">Admin</p>
      <h1 className="display mt-4 text-5xl md:text-6xl">Publish a project</h1>

      <form onSubmit={handleSubmit} className="mt-12 space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <label className="block">
            <span className="eyebrow text-stone">Project title</span>
            <input required className={input} value={formData.title} onChange={set("title")} />
          </label>
          <label className="block">
            <span className="eyebrow text-stone">Category</span>
            <select className={input} value={formData.category} onChange={set("category")}>
              {workCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="eyebrow text-stone">Description</span>
          <textarea
            required
            rows={4}
            className={`${input} resize-none`}
            value={formData.description}
            onChange={set("description")}
          />
        </label>

        <label className="block">
          <span className="eyebrow text-stone">Tools and platforms (comma separated)</span>
          <input required className={input} value={formData.techStack} onChange={set("techStack")} />
        </label>

        <label className="relative block cursor-pointer border border-dashed border-ink/30 p-8 text-center transition-colors hover:border-ink">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
          <span className="text-stone">{imageFile ? imageFile.name : "Choose a cover image"}</span>
        </label>

        <div className="grid gap-8 md:grid-cols-2">
          <label className="block">
            <span className="eyebrow text-stone">Repository URL (optional)</span>
            <input className={input} value={formData.githubLink} onChange={set("githubLink")} />
          </label>
          <label className="block">
            <span className="eyebrow text-stone">Live URL (optional)</span>
            <input className={input} value={formData.liveLink} onChange={set("liveLink")} />
          </label>
        </div>

        {notice && (
          <p role="status" className={notice.ok ? "text-ink" : "text-ember"}>
            {notice.text}
          </p>
        )}

        <button
          disabled={loading}
          type="submit"
          className="w-full rounded-full bg-ink py-4 font-medium text-paper transition-colors hover:bg-ember disabled:opacity-60"
        >
          {loading ? "Publishing…" : "Publish project"}
        </button>
      </form>
    </section>
  );
}
