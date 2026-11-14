import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { labs, principles } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Wrapper is a Mumbai-based new-age services company combining AI automation, premium development and modern digital marketing in one team.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "2024",
    title: "Founded in Mumbai",
    body: "AI Wrapper started with one aim: close the gap between what AI can do and what businesses actually get out of it.",
  },
  {
    year: "2025",
    title: "First client systems",
    body: "We delivered our first production work — data dashboards and automation that took manual effort out of day-to-day operations.",
  },
  {
    year: "2026",
    title: "A new-age services company",
    body: "We brought AI automation, premium development and modern marketing — viral content, SEO, AEO, GEO and paid media — together under one roof.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell pb-20 pt-40 md:pb-32 md:pt-56">
        <Eyebrow className="text-stone">About</Eyebrow>
        <h1 className="display mt-8 max-w-6xl text-6xl md:text-8xl lg:text-9xl">
          We build the systems behind{" "}
          <em className="text-ember">modern growth.</em>
        </h1>
      </section>

      <section className="shell grid gap-10 border-t border-ink/15 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-3">
          <Eyebrow className="text-stone">Who we are</Eyebrow>
        </div>
        <Reveal className="space-y-8 md:col-span-8">
          <p className="display text-4xl leading-[1.1] md:text-5xl">
            AI Wrapper is a services company for a world where customers ask
            machines for recommendations and the best-run businesses are
            increasingly automated.
          </p>
          <div className="grid gap-8 leading-relaxed text-stone sm:grid-cols-2">
            <p>
              Most companies buy automation from one vendor, a website from
              another and marketing from a third, then try to make them talk. We
              think that split is the problem. The store that converts is what
              makes the campaign pay; the automation that saves an hour is what
              lets a team act on a lead in minutes.
            </p>
            <p>
              So we do all three. A single team that automates the boring work,
              builds premium products you own, and makes content people share —
              and is accountable for the result, not just the work.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ink text-paper">
        <div className="shell grid gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-4">
            <Eyebrow className="text-ash">Principles</Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-6xl">
              What we hold ourselves to.
            </h2>
          </div>
          <div className="border-t border-paper/15 md:col-span-7 md:col-start-6">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                className="grid gap-3 border-b border-paper/15 py-9 sm:grid-cols-12 sm:gap-6"
              >
                <p className="eyebrow pt-1.5 text-ember sm:col-span-1">
                  0{i + 1}
                </p>
                <div className="sm:col-span-11">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ash">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-4">
          <Eyebrow className="text-stone">Story so far</Eyebrow>
          <h2 className="display mt-6 text-5xl md:text-6xl">
            Three years, one direction.
          </h2>
        </div>
        <ol className="border-t border-ink/15 md:col-span-7 md:col-start-6">
          {timeline.map((t) => (
            <li key={t.year}>
              <Reveal className="grid gap-3 border-b border-ink/15 py-9 sm:grid-cols-12 sm:gap-6">
                <p className="display text-4xl text-ember sm:col-span-3">
                  {t.year}
                </p>
                <div className="sm:col-span-9">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone">{t.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section id="labs" className="bg-bone">
        <div className="shell grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <Eyebrow className="text-stone">Labs</Eyebrow>
            <h2 className="display mt-6 text-5xl md:text-6xl">
              Products we are building.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-stone">
              Alongside client work, we build our own products. It keeps us
              honest about what it takes to ship.
            </p>
          </div>
          <ul className="border-t border-ink/15 md:col-span-7 md:col-start-6">
            {labs.map((l) => (
              <li
                key={l.name}
                className="grid gap-2 border-b border-ink/15 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <h3 className="display text-3xl sm:col-span-4">{l.name}</h3>
                <p className="leading-relaxed text-stone sm:col-span-5">
                  {l.body}
                </p>
                <p className="eyebrow text-stone sm:col-span-3 sm:text-right">
                  {l.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}
