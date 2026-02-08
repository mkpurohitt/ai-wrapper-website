import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Allow ALL bots (Google, Bing, GPTBot, etc.)
      allow: "/",
      disallow: ["/admin", "/api/projects"], // Keep Admin & API hidden
    },
    sitemap: "https://aiwrapper.tech/sitemap.xml", // REPLACE with real domain later
  };
}