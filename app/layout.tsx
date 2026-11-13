import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { services, site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AI Wrapper — AI Automation, Model Training & New-Age Digital Marketing",
    template: "%s — AI Wrapper",
  },
  description: site.description,
  keywords: [
    "AI automation agency",
    "AI model training",
    "LLM fine-tuning",
    "generative engine optimisation",
    "GEO agency",
    "answer engine optimisation",
    "AEO",
    "SEO agency Mumbai",
    "Meta Ads",
    "Google Ads",
    "ChatGPT Ads",
    "performance marketing",
    "social media marketing",
  ],
  authors: [{ name: "Mehul Purohit" }],
  creator: "Mehul Purohit",
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "AI Wrapper — Be the answer. Automate the rest.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Wrapper — Be the answer. Automate the rest.",
    description: site.description,
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "AI automation",
    "AI agents",
    "AI model training",
    "LLM fine-tuning",
    "Search engine optimisation",
    "Answer engine optimisation",
    "Generative engine optimisation",
    "Social media marketing",
    "Meta Ads",
    "Google Ads",
    "ChatGPT Ads",
    "Performance marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.short,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body className="antialiased">
        <JsonLd data={organization} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
