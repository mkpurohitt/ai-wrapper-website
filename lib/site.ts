export const site = {
  name: "AI Wrapper",
  url: "https://aiwrapper.tech",
  email: "contact@aiwrapper.tech",
  location: "Mumbai, India",
  description:
    "AI Wrapper is a new-age services company. We automate the boring work with AI and Python, build premium websites, apps and custom stores, and run marketing that people actually share: viral content, SEO, AEO, GEO and paid media.",
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  short: string;
  intro: string;
  capabilities: { title: string; body: string }[];
  outcomes: string[];
  stack: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    index: "01",
    name: "AI Automation",
    tagline: "Automate the boring work.",
    short:
      "Python scripts and AI agents that take the daily, repetitive tasks off your team. The reports, data entry, follow-ups and file shuffling nobody was hired to do.",
    intro:
      "Every team has a list of tasks that eat the first hour of the day: pulling numbers from three tools into one sheet, renaming files, sending the same reminder emails, copying leads into the CRM. We write the Python scripts and AI agents that do that work for you on a schedule, without mistakes, with a person in the loop where judgment matters.",
    capabilities: [
      {
        title: "Python task automation",
        body: "Scripts that handle your daily chores on a schedule: reports, spreadsheets, emails, file handling, data entry and web scraping.",
      },
      {
        title: "AI agents",
        body: "Agents that handle support, sales follow-up and back-office work end to end, escalating to a person when confidence is low.",
      },
      {
        title: "Workflow automation",
        body: "Your CRM, inbox, sheets, billing and internal tools connected so information moves without copy and paste.",
      },
      {
        title: "WhatsApp and chat assistants",
        body: "Assistants for web, WhatsApp and phone, grounded in your own information so answers stay accurate.",
      },
      {
        title: "Lead and CRM automation",
        body: "Leads captured, enriched, qualified, routed and followed up automatically, so sales time goes to real conversations.",
      },
      {
        title: "Document and data processing",
        body: "Invoices, forms, contracts and reports extracted, checked and filed with an audit trail.",
      },
    ],
    outcomes: [
      "A list of your boring tasks, ranked by hours saved",
      "Working scripts, agents and workflows, documented and monitored",
      "A weekly view of tasks run, errors caught and time returned",
      "Handover so your team can own and extend the system",
    ],
    stack: [
      "Python",
      "n8n",
      "OpenAI",
      "Claude",
      "Gemini",
      "WhatsApp Business API",
      "Google Sheets & Workspace",
      "CRMs and helpdesks",
    ],
    faqs: [
      {
        q: "What kind of tasks can you automate?",
        a: "Anything repetitive and rule-based: daily and weekly reports, moving data between tools, updating spreadsheets, sending reminders and invoices, renaming and filing documents, scraping prices or listings, and first-line replies to customers. If someone does it the same way every day, it is a candidate.",
      },
      {
        q: "Will automation replace our team?",
        a: "No. It removes the repetitive work so people can spend time on judgment, relationships and craft. Every system we build keeps a person in the loop for decisions that need one.",
      },
      {
        q: "Does it work with the tools we already use?",
        a: "In most cases, yes. We build on top of your existing tools, such as Excel or Google Sheets, Gmail, WhatsApp, your CRM or accounting software, rather than asking you to switch.",
      },
    ],
  },
  {
    slug: "development",
    index: "02",
    name: "Development",
    tagline: "Premium, not vibe\u2011coded.",
    short:
      "New-age websites, apps, custom software and e-commerce stores, designed to look like your brand not like every other template on the internet.",
    intro:
      "AI tools have made it easy to generate a website in an afternoon, which is why so many now look the same: the purple gradient, the centred headline, three identical cards. We design and engineer from your brand outward. Custom typography, layout and motion, plus fast and accessible code, make your product feels considered, earns trust and converts.",
    capabilities: [
      {
        title: "Websites",
        body: "Custom-designed marketing sites and landing pages in Next.js, built for speed, search and conversion.",
      },
      {
        title: "E-commerce stores",
        body: "Your own store with payment gateway and delivery integration, and no platform commission on every sale.",
      },
      {
        title: "Mobile apps",
        body: "iOS and Android apps in React Native or Flutter, with polished interfaces and AI features where they help.",
      },
      {
        title: "Custom software",
        body: "Dashboards, portals, booking systems and internal tools shaped around how your business actually works.",
      },
      {
        title: "Payments and integrations",
        body: "Razorpay, Stripe and UPI payments, delivery partners, CRMs and accounting software connected end to end.",
      },
      {
        title: "Design systems",
        body: "Typography, colour, components and motion defined once, so every new page stays on brand.",
      },
    ],
    outcomes: [
      "A custom design, approved before a line of code is written",
      "A fast, accessible build with clean, documented code",
      "Payments, delivery, analytics and SEO set up from day one",
      "Full ownership of the code, the domain and your customer data",
    ],
    stack: [
      "Next.js",
      "React",
      "React Native",
      "Flutter",
      "Node.js",
      "Python",
      "Razorpay",
      "Stripe",
      "Shiprocket",
    ],
    faqs: [
      {
        q: "What does \u201cvibe-coded\u201d mean, and why avoid it?",
        a: "It describes sites generated quickly with AI tools and default templates. They work, but they tend to look identical: same gradients, same layouts, same stock sections. Visitors cannot tell your brand from the next one. We use AI to work faster, but every design decision is made by people, for your brand.",
      },
      {
        q: "Why build a custom store instead of using Shopify?",
        a: "Hosted platforms are a good way to start, but you pay a monthly plan, often extra transaction fees, and a subscription for most apps you add, and the costs grow as you sell more. A custom store is a one-time build you own: you pay only your payment gateway\u2019s fee, keep full control of checkout and design, and own your customer data.",
      },
      {
        q: "Do you integrate payments and delivery?",
        a: "Yes. We integrate payment gateways such as Razorpay and Stripe, including UPI, cards and wallets, and delivery partners such as Shiprocket, with order tracking, invoices and notifications for your customers.",
      },
      {
        q: "Will we own the code?",
        a: "Yes. The code, design files, domain and data are yours. We document the build so any developer can work on it later.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    index: "03",
    name: "New-Age Digital Marketing",
    tagline: "Content people actually share.",
    short:
      "No boring AI reels. We make content built to go viral, then make sure you are found everywhere people search: Google, social feeds and AI assistants.",
    intro:
      "Feeds are full of the same faceless AI reels: stock voiceover, generic captions, nothing anyone remembers. We do the opposite: content with a real hook, a real story and a native feel for each platform. Then we back it with search. Your customers no longer search in one place. They ask Google, scroll Instagram, and increasingly ask ChatGPT, Gemini or Perplexity for a recommendation. We build visibility across every one of those surfaces, then turn it into pipeline with paid media measured against revenue.",
    capabilities: [
      {
        title: "Viral content and reels",
        body: "Hook-first short-form video, scripted and edited for each platform. Content people watch to the end and share, not template AI clips.",
      },
      {
        title: "SEO",
        body: "Technical foundations, content and authority that earn rankings in classic search, still the base everything else draws from.",
      },
      {
        title: "AEO: answer engine optimisation",
        body: "Content structured to be the direct answer in featured snippets, AI Overviews and voice results.",
      },
      {
        title: "GEO: generative engine optimisation",
        body: "Making your brand the source that ChatGPT, Gemini, Perplexity and Claude cite and recommend.",
      },
      {
        title: "Social media marketing",
        body: "Strategy, content and community across the platforms where your audience actually spends time.",
      },
      {
        title: "Meta Ads",
        body: "Full-funnel campaigns on Instagram, Facebook and WhatsApp, with creative tested continuously.",
      },
      {
        title: "Google Ads",
        body: "Search, YouTube, Shopping and Performance Max, structured around intent and margin.",
      },
      {
        title: "ChatGPT Ads",
        body: "Early-mover planning and campaigns for advertising inside AI assistants as those placements open up.",
      },
      {
        title: "Performance marketing",
        body: "Tracking, attribution and conversion optimisation, so spend is judged by revenue rather than clicks.",
      },
      {
        title: "E-commerce marketing",
        body: "Catalogue ads, shopping campaigns, abandoned-cart flows and retention for stores you own, without paying a platform on every sale.",
      },
    ],
    outcomes: [
      "A content engine: hooks, scripts and edits made for each platform",
      "A visibility audit across search, answer engines and AI assistants",
      "A content and technical roadmap for SEO, AEO and GEO",
      "Paid campaigns with clean tracking and attribution",
      "Reporting tied to leads, revenue and cost of acquisition",
    ],
    stack: [
      "Instagram Reels",
      "YouTube Shorts",
      "Google Search",
      "AI Overviews",
      "ChatGPT",
      "Gemini",
      "Perplexity",
      "Meta",
      "Google Ads",
      "GA4",
    ],
    faqs: [
      {
        q: "Do you make AI-generated reels?",
        a: "Not the generic kind. We use AI to research trends and speed up editing, but every piece starts with a human-written hook and story built for your brand. Faceless template reels are easy to make and easy to scroll past. We make content people stop for.",
      },
      {
        q: "What is the difference between SEO, AEO and GEO?",
        a: "SEO earns rankings in search results. AEO (answer engine optimisation) makes your content the direct answer in featured snippets, AI Overviews and voice. GEO (generative engine optimisation) makes your brand a source that AI assistants such as ChatGPT, Gemini and Perplexity cite and recommend. They build on each other, so we run them together.",
      },
      {
        q: "Is traditional SEO still worth it?",
        a: "Yes. AI assistants and answer engines draw heavily on the open web, so strong technical SEO, useful content and real authority remain the foundation. What has changed is how that content needs to be structured and where success is measured.",
      },
      {
        q: "Can we advertise inside ChatGPT?",
        a: "Advertising inside AI assistants is new and rolling out in stages. We help brands get ready, plan and run campaigns where placements are available, and build organic visibility in AI answers through GEO in the meantime.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "What does AI Wrapper do?",
    a: "AI Wrapper is a new-age services company based in Mumbai. We do three things: AI automation that takes the boring work off your team, development of premium websites, apps, custom software and e-commerce stores, and new-age digital marketing: viral content, SEO, AEO, GEO and paid media across Meta, Google and AI assistants.",
  },
  services[2].faqs[0],
  services[1].faqs[0],
  services[1].faqs[1],
  services[2].faqs[1],
  services[0].faqs[0],
  {
    q: "How does an engagement start?",
    a: "With a conversation about where you are and what you want to change. From there we run a focused audit and come back with a clear scope, so you know what will be built and how it will be measured before work begins.",
  },
  {
    q: "Where are you based and who do you work with?",
    a: "We are based in Mumbai and work with companies anywhere. Our clients are teams that want to grow without adding headcount at the same rate.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Diagnose",
    body: "We audit your operations, data and visibility to find where time and demand are leaking.",
  },
  {
    step: "02",
    title: "Design",
    body: "You get a scoped plan: what we will build, in what order, and the number each piece should move.",
  },
  {
    step: "03",
    title: "Build",
    body: "We ship in short cycles: live automations, products and campaigns, not slide decks.",
  },
  {
    step: "04",
    title: "Compound",
    body: "We measure, learn and reinvest. Automation frees time; better products convert; content brings the traffic.",
  },
];

export const principles = [
  {
    title: "One team for build and growth",
    body: "The people building your site and automations understand the marketing that fills them. No hand-offs between a dev shop and an agency.",
  },
  {
    title: "Measured against revenue",
    body: "Hours returned, cost of acquisition, pipeline created. If it cannot be measured, we say so before we start.",
  },
  {
    title: "Built to be owned",
    body: "Code, workflows, ad accounts and data stay yours. We document everything so you are never locked in.",
  },
  {
    title: "Humans in the loop",
    body: "AI does the repetitive work. People keep the decisions that need judgment, taste and accountability.",
  },
];

export const labs = [
  {
    name: "Book Shore",
    body: "An online bookstore with contextual AI translation.",
    status: "Coming soon",
  },
  {
    name: "Enterion",
    body: "An AI-powered entertainment platform.",
    status: "In development",
  },
  {
    name: "Service Pure",
    body: "A marketplace for finding and hiring service providers.",
    status: "Concept",
  },
];

export const workCategories = [
  "AI Automation",
  "Websites",
  "Apps & Software",
  "E-commerce",
  "Viral Content",
  "SEO / AEO / GEO",
  "Social Media",
  "Paid Media",
  "Performance Marketing",
];
