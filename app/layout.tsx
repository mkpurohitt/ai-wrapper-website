import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Keep your fonts
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// 1. GLOBAL SEO CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://aiwrapper.tech"), // REPLACE THIS LATER with real domain
  title: {
    default: "AI Wrapper | Custom AI Software & Automation Agency",
    template: "%s | AI Wrapper"
  },
  description: "Mumbai-based Tech and AI agency specializing in custom LLM agents, web and app development, and business automation. We build software that replaces manual work.",
  keywords: [
    "AI Agency Mumbai", 
    "Custom AI Software",  
    "Business Automation Services", 
    "LLM Integration", 
    "Web Development Mumbai",
    "Next.js Developers",
    "freelacing"
  ],
  authors: [{ name: "Mehul Purohit" }],
  creator: "Mehul Purohit",
  publisher: "AI Wrapper",
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
    url: "https://aiwrapper.tech",
    title: "AI Wrapper | Elite AI Software Solutions",
    description: "We build custom AI agents and softwares that drive business growth.",
    siteName: "AI Wrapper",
    images: [
      {
        url: "/og-image.png", // We will create this later
        width: 1200,
        height: 630,
        alt: "AI Wrapper Agency Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Wrapper | Custom AI & Automation",
    description: "Mumbai's premier AI development agency.",
    images: ["/og-image.png"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} bg-deepVoid text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
