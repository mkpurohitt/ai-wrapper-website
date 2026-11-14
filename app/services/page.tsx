import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { Arrow, Eyebrow } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI and Python automation, premium web, app, software and e-commerce development, and new-age digital marketing: viral content, SEO, AEO, GEO, Meta Ads, Google Ads and ChatGPT Ads.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="shell pb-16 pt-40 md:pb-24 md:pt-56">
        <Eyebrow className="text-stone">Services</Eyebrow>
        <h1 className="display mt-8 max-w-5xl text-6xl md:text-8xl lg:text-9xl">
          Everything a modern company needs to{" "}
          <em className="text-ember">grow and run.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone md:text-xl">
          Three practices that work as one. Automation gives your team time
          back. Development gives you a product that looks and works like a
          premium brand. Marketing brings people to it with content they share
          and search that finds you wherever they ask.
        </p>
      </section>

      <section className="shell pb-24 md:pb-40">
        {services.map((s) => (
          <Reveal key={s.slug}>
            <article className="grid gap-8 border-t border-ink/15 py-14 md:grid-cols-12 md:py-20">
              <div className="md:col-span-5">
                <p className="eyebrow text-stone">{s.index}</p>
                <h2 className="display mt-6 text-5xl md:text-7xl">{s.name}</h2>
                <p className="mt-4 font-serif text-2xl italic text-stone">
                  {s.tagline}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[0.9375rem] font-medium text-paper transition-colors duration-300 hover:bg-ember"
                >
                  Explore {s.name}
                  <Arrow className="transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-lg leading-relaxed">{s.short}</p>
                <ul className="mt-8 border-t border-ink/15">
                  {s.capabilities.map((c) => (
                    <li
                      key={c.title}
                      className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4"
                    >
                      <span className="font-medium tracking-tight">
                        {c.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Contact />
    </>
  );
}
