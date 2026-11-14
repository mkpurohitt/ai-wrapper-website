import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with AI Wrapper for AI automation, websites, apps, e-commerce, viral content, SEO, AEO, GEO and paid media. Based in Mumbai, working worldwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-[4.5rem]">
      <Contact />
    </div>
  );
}
