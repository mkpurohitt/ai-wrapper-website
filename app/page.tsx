import Link from "next/link";
import Contact from "@/components/Contact";
import Faq, { faqSchema } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import SearchShift from "@/components/SearchShift";
import { VibeVsPremium } from "@/components/showcase/DevShowcase";
import ViralContent from "@/components/showcase/ViralContent";
import { Arrow, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import { approach, homeFaqs, principles, services } from "@/lib/site";

const ticker = [
  "AI Automation",
  "Python Automation",
  "Websites",
  "Apps",
  "Custom Software",
  "E-commerce",
  "Viral Content",
  "SEO",
  "AEO",
  "GEO",
  "Social Media",
  "Meta Ads",
  "Google Ads",
  "ChatGPT Ads",
  "Performance Marketing",
];

const channels = [
  {
    name: "Viral content and reels",
    body: "Hook-first short-form video people watch to the end — not template AI clips.",
  },
  {
    name: "E-commerce marketing",
    body: "Catalogue ads, shopping campaigns and cart recovery for stores you own.",
  },
  {
    name: "Social media marketing",
    body: "Strategy, content and community on the platforms your audience actually uses.",
  },
  {
    name: "Meta Ads",
    body: "Full-funnel campaigns across Instagram, Facebook and WhatsApp.",
  },
  {
    name: "Google Ads",
    body: "Search, YouTube, Shopping and Performance Max, structured around intent.",
  },
  {
    name: "ChatGPT Ads",
    body: "Early-mover campaigns inside AI assistants as placements open up.",
  },
  {
    name: "Performance marketing",
    body: "Tracking, attribution and optimisation judged by revenue, not clicks.",
  },
];

function HeroLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <span
        className="block animate-rise"
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="shell flex min-h-[100svh] flex-col pt-[4.5rem]">
        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <div className="animate-fade" style={{ animationDelay: "100ms" }}>
            <Eyebrow className="text-stone">A new-age services company</Eyebrow>
          </div>
          <h1 className="display mt-8 text-[clamp(3.5rem,11.5vw,11.5rem)]">
            <HeroLine delay={150}>
              Be the <em className="text-ember">answer.</em>
            </HeroLine>
            <HeroLine delay={280}>Automate the rest.</HeroLine>
          </h1>
          <div
            className="mt-10 grid animate-fade gap-8 md:mt-14 md:grid-cols-12"
            style={{ animationDelay: "650ms" }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-stone md:col-span-6 md:text-xl">
              We automate the boring work with AI and Python, build premium
              websites, apps and stores that don&rsquo;t look vibe-coded, and
              make content people actually share.
            </p>
            <div className="flex flex-wrap items-start gap-3 md:col-span-6 md:justify-end">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="/services" tone="ghost">
                Explore services
              </ButtonLink>
            </div>
          </div>
        </div>

        <div
          className="grid animate-fade grid-cols-2 gap-y-4 border-t border-ink/15 py-6 md:grid-cols-4"
          style={{ animationDelay: "850ms" }}
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-baseline gap-3 text-sm"
            >
              <span className="eyebrow text-stone">{s.index}</span>
              <span className="link-line pb-0.5">{s.name}</span>
            </Link>
          ))}
          <p className="eyebrow self-baseline text-stone md:text-right">
            Mumbai — Worldwide
          </p>
        </div>
      </section>

      {/* Ticker */}
      <div
        className="overflow-hidden border-y border-ink/15 py-5"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee">
          {[0, 1].map((n) => (
            <ul key={n} className="flex shrink-0 items-center">
              {ticker.map((t) => (
                <li
                  key={t}
                  className="display flex items-center text-3xl italic md:text-4xl"
                >
                  <span className="px-7">{t}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Statement */}
      <section className="shell grid gap-10 py-24 md:grid-cols-12 md:py-40">
        <div className="md:col-span-3">
          <Eyebrow className="text-stone">The shift</Eyebrow>
        </div>
        <Reveal className="md:col-span-9">
          <p className="display text-4xl leading-[1.08] md:text-6xl md:leading-[1.05]">
            AI made it easy to build the same website and post the same reel as
            everyone else.{" "}
            <span className="text-stone">
              We use it the other way — to take the boring work off your team,
              so the things your customers actually see can be crafted,
              distinctive and worth sharing.
            </span>
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="shell pb-24 md:pb-40">
        <div className="flex items-end justify-between gap-6 pb-10">
          <div>
            <Eyebrow className="text-stone">What we do</Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Three practices, one team.
            </h2>
          </div>
          <Link
            href="/services"
            className="link-line hidden shrink-0 pb-0.5 text-sm md:block"
          >
            All services
          </Link>
        </div>

        <div className="border-t border-ink/15">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-6 border-b border-ink/15 py-10 transition-colors duration-500 hover:bg-bone/60 md:grid-cols-12 md:gap-8 md:px-4 md:py-14"
              >
                <p className="eyebrow pt-3 text-stone md:col-span-1">
                  {s.index}
                </p>
                <div className="md:col-span-5">
                  <h3 className="display text-4xl transition-colors duration-300 group-hover:text-ember md:text-6xl">
                    {s.name}
                  </h3>
                  <p className="mt-4 font-serif text-xl italic text-stone md:text-2xl">
                    {s.tagline}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="leading-relaxed text-stone">{s.short}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.capabilities.map((c) => (
                      <li
                        key={c.title}
                        className="rounded-full border border-ink/15 px-3 py-1 text-[0.8125rem] text-ink"
                      >
                        {c.title.split(" — ")[0]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden justify-end pt-3 md:col-span-1 md:flex">
                  <Arrow className="h-5 w-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ember" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Development */}
      <section className="bg-bone">
        <div className="shell py-24 md:py-40">
          <div className="grid gap-8 pb-14 md:grid-cols-12 md:pb-20">
            <div className="md:col-span-7">
              <Eyebrow className="text-stone">Development</Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Not another <em className="text-ember">vibe&#8209;coded</em> website.
              </h2>
            </div>
            <div className="self-end md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-stone">
                Websites, apps, custom software and e-commerce stores — with
                payments and delivery built in, and no platform commission on
                every sale.
              </p>
              <ButtonLink
                href="/services/development"
                tone="ghost"
                className="mt-7"
              >
                Development services
              </ButtonLink>
            </div>
          </div>
          <VibeVsPremium />
        </div>
      </section>

      {/* Content */}
      <section className="shell py-24 md:py-40">
        <div className="pb-14 md:pb-20">
          <Eyebrow className="text-stone">Content</Eyebrow>
          <h2 className="display mt-6 max-w-5xl text-5xl md:text-7xl">
            No boring AI reels.{" "}
            <em className="text-ember">Content people share.</em>
          </h2>
        </div>
        <ViralContent />
      </section>

      {/* New-age marketing */}
      <section className="bg-ink text-paper">
        <div className="shell py-24 md:py-40">
          <div className="grid gap-10 pb-14 md:grid-cols-12 md:pb-20">
            <div className="md:col-span-7">
              <Eyebrow className="text-ash">New-age marketing</Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                Ranking is no longer the finish line.{" "}
                <em className="text-ember">Being cited is.</em>
              </h2>
            </div>
            <p className="self-end leading-relaxed text-ash md:col-span-4 md:col-start-9">
              People still search — but more and more, an AI answers. We
              optimise for all three surfaces, so your brand shows up whether
              someone types, taps or asks.
            </p>
          </div>

          <SearchShift />

          <div className="grid gap-10 pt-20 md:grid-cols-12 md:pt-28">
            <div className="md:col-span-4">
              <Eyebrow className="text-ash">Then we scale it</Eyebrow>
              <h3 className="display mt-6 text-4xl md:text-5xl">
                Paid and social, measured against revenue.
              </h3>
              <ButtonLink
                href="/services/digital-marketing"
                tone="ghost-dark"
                className="mt-9"
              >
                Marketing services
              </ButtonLink>
            </div>
            <ul className="border-t border-paper/15 md:col-span-7 md:col-start-6">
              {channels.map((c, i) => (
                <li key={c.name}>
                  <Reveal
                    delay={i * 0.04}
                    className="grid gap-2 border-b border-paper/15 py-6 sm:grid-cols-5 sm:gap-6"
                  >
                    <p className="text-lg font-medium tracking-tight sm:col-span-2">
                      {c.name}
                    </p>
                    <p className="leading-relaxed text-ash sm:col-span-3">
                      {c.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="shell py-24 md:py-40">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:pb-20">
          <div className="md:col-span-7">
            <Eyebrow className="text-stone">Approach</Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              A system that compounds, not a list of deliverables.
            </h2>
          </div>
        </div>
        <ol className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <li
              key={a.step}
              className={`border-b border-ink/15 py-9 lg:border-b-0 ${
                i > 0 ? "lg:border-l lg:pl-8" : ""
              } ${i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-8" : ""} pr-8`}
            >
              <Reveal delay={i * 0.08}>
                <p className="eyebrow text-ember">{a.step}</p>
                <h3 className="display mt-10 text-4xl md:mt-16">{a.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{a.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Principles */}
      <section className="bg-bone">
        <div className="shell grid gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <Eyebrow className="text-stone">Why AI Wrapper</Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-6xl">
                Built like a product team. Accountable like a partner.
              </h2>
              <ButtonLink href="/about" tone="ghost" className="mt-9">
                About us
              </ButtonLink>
            </div>
          </div>
          <div className="border-t border-ink/15 md:col-span-7 md:col-start-6">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                className="grid gap-3 border-b border-ink/15 py-9 sm:grid-cols-12 sm:gap-6"
              >
                <p className="eyebrow pt-1.5 text-stone sm:col-span-1">
                  0{i + 1}
                </p>
                <div className="sm:col-span-11">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-stone">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="shell grid gap-12 py-24 md:grid-cols-12 md:py-40"
      >
        <div className="md:col-span-4">
          <Eyebrow className="text-stone">Questions</Eyebrow>
          <h2 className="display mt-6 text-5xl md:text-6xl">
            Asked often, answered plainly.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Faq items={homeFaqs} />
        </div>
      </section>

      <Contact />
    </>
  );
}
