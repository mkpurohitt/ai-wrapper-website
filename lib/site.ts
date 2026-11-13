export const site = {
  name: "AI Wrapper",
  url: "https://aiwrapper.tech",
  email: "contact@aiwrapper.tech",
  location: "Mumbai, India",
  description:
    "AI Wrapper is a new-age services company. We automate operations with AI, train models on your data, and run marketing built for how people search now — SEO, AEO, GEO, social and paid media.",
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
    tagline: "Operations that run themselves.",
    short:
      "AI agents and automated workflows that take repetitive work off your team — running around the clock, with people in the loop where judgment matters.",
    intro:
      "Most companies lose hours every day to work nobody was hired to do: copying data between tools, chasing leads, answering the same questions, reconciling documents. We map that work, then replace it with agents and workflows that are reliable enough to run unattended and transparent enough to trust.",
    capabilities: [
      {
        title: "AI agents",
        body: "Agents that handle support, sales follow-up and back-office tasks end to end, escalating to a person when confidence is low.",
      },
      {
        title: "Workflow automation",
        body: "Your CRM, inbox, spreadsheets, billing and internal tools connected so information moves without copy and paste.",
      },
      {
        title: "Conversational assistants",
        body: "Chat and voice assistants for web, WhatsApp and phone, grounded in your own knowledge so answers stay accurate.",
      },
      {
        title: "Lead and CRM automation",
        body: "Leads captured, enriched, qualified, routed and nurtured automatically, so sales time goes to conversations that convert.",
      },
      {
        title: "Document and data processing",
        body: "Invoices, forms, contracts and reports extracted, classified and reconciled with an audit trail.",
      },
      {
        title: "Internal copilots",
        body: "Search and question answering across your company knowledge, with permissions respected.",
      },
    ],
    outcomes: [
      "A process map showing where automation pays back first",
      "Production agents and workflows, documented and monitored",
      "Reporting on volume, accuracy and hours returned to the team",
      "Handover and training so your team owns the system",
    ],
    stack: [
      "n8n",
      "Python",
      "OpenAI",
      "Claude",
      "Gemini",
      "WhatsApp Business API",
      "CRMs and helpdesks",
      "Google Workspace",
    ],
    faqs: [
      {
        q: "What should we automate first?",
        a: "The work that is frequent, rule-heavy and expensive when it goes wrong. We start with a short audit that ranks your processes by effort saved and risk, so the first build pays for the next one.",
      },
      {
        q: "Will automation replace our team?",
        a: "No. The goal is to remove repetitive work so people can spend time on judgment, relationships and craft. Every system we build keeps a human in the loop for decisions that need one.",
      },
      {
        q: "Does it work with the tools we already use?",
        a: "In most cases, yes. We build on top of your existing stack through APIs and integration platforms rather than asking you to switch tools.",
      },
    ],
  },
  {
    slug: "ai-model-training",
    index: "02",
    name: "AI Model Training",
    tagline: "Models that know your business.",
    short:
      "Off-the-shelf models know the internet. We train and tune models on your data so they know your products, your tone and your domain.",
    intro:
      "A general model gives general answers. When accuracy, voice or domain knowledge matters, the model has to learn from you. We prepare your data, choose the right approach — fine-tuning, retrieval or a custom model — and ship something you can measure, deploy and keep improving.",
    capabilities: [
      {
        title: "LLM fine-tuning",
        body: "Language models tuned on your examples so outputs match your terminology, format and brand voice.",
      },
      {
        title: "Retrieval and knowledge systems",
        body: "RAG pipelines that ground answers in your documents, with citations back to the source.",
      },
      {
        title: "Data preparation",
        body: "Collection, cleaning, labelling and synthetic data generation — the unglamorous work that decides model quality.",
      },
      {
        title: "Custom ML models",
        body: "Prediction, classification, scoring and recommendation models built for a specific business decision.",
      },
      {
        title: "Evaluation and guardrails",
        body: "Test sets, automated scoring and safety checks, so you know how the model behaves before customers do.",
      },
      {
        title: "Deployment and monitoring",
        body: "Models served in your cloud or ours, with cost, latency and quality tracked after launch.",
      },
    ],
    outcomes: [
      "A clear recommendation: fine-tune, retrieve or build",
      "A cleaned, versioned dataset you can reuse",
      "A trained model with an evaluation report",
      "Deployment, monitoring and a retraining plan",
    ],
    stack: [
      "Open-weight LLMs",
      "Hosted fine-tuning APIs",
      "PyTorch",
      "Hugging Face",
      "Vector databases",
      "Evaluation harnesses",
    ],
    faqs: [
      {
        q: "Do we need fine-tuning or RAG?",
        a: "Often retrieval is enough when the model needs facts, and fine-tuning is right when it needs a behaviour — a tone, a format, a way of reasoning. Many production systems combine both. We test before we recommend.",
      },
      {
        q: "How much data do we need?",
        a: "Usually less than teams expect. Quality matters more than volume, and a focused set of good examples can go a long way. We assess what you have before proposing anything.",
      },
      {
        q: "Who owns the model and the data?",
        a: "You do. Datasets, model weights and pipelines are handed over, and your data is never used to train anything for anyone else.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    index: "03",
    name: "New-Age Digital Marketing",
    tagline: "Found everywhere people ask.",
    short:
      "Search now happens in Google, in feeds and inside AI assistants. We run SEO, AEO, GEO, social and paid media as one system built for all three.",
    intro:
      "Your customers no longer search in one place. They ask Google, scroll Instagram, and increasingly ask ChatGPT, Gemini or Perplexity for a recommendation. We build visibility across every one of those surfaces, then turn it into pipeline with paid media measured against revenue.",
    capabilities: [
      {
        title: "SEO",
        body: "Technical foundations, content and authority that earn rankings in classic search — still the base everything else draws from.",
      },
      {
        title: "AEO — answer engine optimisation",
        body: "Content structured to be the direct answer in featured snippets, AI Overviews and voice results.",
      },
      {
        title: "GEO — generative engine optimisation",
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
    ],
    outcomes: [
      "A visibility audit across search, answer engines and AI assistants",
      "A content and technical roadmap for SEO, AEO and GEO",
      "Paid campaigns with clean tracking and attribution",
      "Reporting tied to leads, revenue and cost of acquisition",
    ],
    stack: [
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
    a: "AI Wrapper is a new-age services company based in Mumbai. We do three things: AI automation, AI model training, and digital marketing built for modern search — SEO, AEO, GEO, social media and paid media across Meta, Google and AI assistants.",
  },
  services[2].faqs[0],
  services[2].faqs[2],
  services[1].faqs[0],
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
    body: "We ship in short cycles — live workflows, trained models and campaigns, not slide decks.",
  },
  {
    step: "04",
    title: "Compound",
    body: "We measure, learn and reinvest. Automation funds growth; growth creates data; data improves the models.",
  },
];

export const principles = [
  {
    title: "One team for AI and growth",
    body: "The people automating your funnel understand what fills it. No hand-offs between an AI vendor and a marketing agency.",
  },
  {
    title: "Measured against revenue",
    body: "Hours returned, cost of acquisition, pipeline created. If it cannot be measured, we say so before we start.",
  },
  {
    title: "Built to be owned",
    body: "Workflows, models, ad accounts and data stay yours. We document everything so you are never locked in.",
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
  "AI Model Training",
  "SEO / AEO / GEO",
  "Social Media",
  "Paid Media",
  "Performance Marketing",
];
