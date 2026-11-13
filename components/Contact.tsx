"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/lib/site";
import { Arrow, Eyebrow } from "./ui";

const SERVICE_ID = "service_cwjbrw2";
const TEMPLATE_ID = "template_cqm6hcs";
const PUBLIC_KEY = "bh__PkwX0hPhRQ_22";

const interests = [
  "AI Automation",
  "AI Model Training",
  "SEO / AEO / GEO",
  "Paid Media",
  "Social Media",
  "Not sure yet",
];

const empty = { name: "", email: "", company: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [interest, setInterest] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof typeof empty) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggle = (item: string) =>
    setInterest((cur) => (cur.includes(item) ? cur.filter((i) => i !== item) : [...cur, item]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const topic = interest.length ? interest.join(", ") : "General";
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: form.name,
          user_email: form.email,
          contact_number: form.phone || "Not provided",
          subject: `New enquiry — ${topic}`,
          message: `${form.company ? `Company: ${form.company}\n` : ""}Interested in: ${topic}\n\n${form.message}`,
        },
        PUBLIC_KEY
      );
      setForm(empty);
      setInterest([]);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="shell grid gap-14 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-5">
          <Eyebrow className="text-ash">Contact</Eyebrow>
          <h2 className="display mt-8 text-6xl md:text-7xl lg:text-8xl">
            Let&rsquo;s build what&rsquo;s <em className="text-ember">next.</em>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-ash">
            Tell us where you are and what you want to change. We&rsquo;ll reply with a clear next
            step — no pitch deck, no pressure.
          </p>
          <div className="mt-12 space-y-1">
            <p className="eyebrow text-ash">Or write to us</p>
            <a
              href={`mailto:${site.email}`}
              className="link-line inline-block pb-1 pt-2 text-xl md:text-2xl"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {status === "sent" ? (
            <div role="status" className="border-t border-paper/20 pt-10">
              <p className="display text-5xl">Thank you.</p>
              <p className="mt-5 max-w-md leading-relaxed text-ash">
                Your message is with us. We&rsquo;ll be in touch shortly at the email you provided.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="link-line mt-8 pb-0.5 text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-9">
              <fieldset>
                <legend className="eyebrow text-ash">I&rsquo;m interested in</legend>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {interests.map((item) => {
                    const on = interest.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(item)}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                          on
                            ? "border-paper bg-paper text-ink"
                            : "border-paper/25 text-paper hover:border-paper"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow text-ash">Name</span>
                  <input
                    className="field"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                    required
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-ash">Work email</span>
                  <input
                    className="field"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set("email")}
                    required
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-ash">Company</span>
                  <input
                    className="field"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    value={form.company}
                    onChange={set("company")}
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-ash">Phone (optional)</span>
                  <input
                    className="field"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={set("phone")}
                  />
                </label>
              </div>

              <label className="block">
                <span className="eyebrow text-ash">What would you like to achieve?</span>
                <textarea
                  className="field resize-none"
                  rows={4}
                  placeholder="A few lines about your goals, timeline and current setup"
                  value={form.message}
                  onChange={set("message")}
                  required
                />
              </label>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:bg-ember hover:text-paper disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                  <Arrow className="transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                {status === "error" && (
                  <p role="alert" className="text-sm text-ember">
                    Something went wrong. Please email us at {site.email}.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
