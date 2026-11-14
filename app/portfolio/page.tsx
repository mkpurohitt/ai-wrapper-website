"use client";
import { useEffect, useMemo, useState } from "react";
import Contact from "@/components/Contact";
import { Arrow, ButtonLink, Eyebrow } from "@/components/ui";

type Project = {
  _id: string;
  title: string;
  category?: string;
  description?: string;
  image?: string;
  techStack?: string[];
  githubLink?: string;
  liveLink?: string;
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (active && data.success && Array.isArray(data.data))
          setProjects(data.data);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(() => {
    const found = Array.from(
      new Set(
        projects.map((p) => p.category).filter((c): c is string => Boolean(c)),
      ),
    );
    return found.length > 1 ? ["All", ...found] : [];
  }, [projects]);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="shell pb-14 pt-40 md:pb-20 md:pt-56">
        <Eyebrow className="text-stone">Work</Eyebrow>
        <h1 className="display mt-8 max-w-5xl text-6xl md:text-8xl lg:text-9xl">
          Selected <em className="text-ember">work.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone md:text-xl">
          Automations, products and campaigns we have built with our clients.
        </p>

        {categories.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  filter === cat
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink hover:border-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="shell min-h-[20rem] pb-24 md:pb-40">
        {loading ? (
          <div
            className="grid gap-x-8 gap-y-14 md:grid-cols-2"
            aria-busy="true"
          >
            {[0, 1].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="aspect-[4/3] bg-bone" />
                <div className="mt-6 h-3 w-24 bg-bone" />
                <div className="mt-4 h-8 w-2/3 bg-bone" />
              </div>
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="border-y border-ink/15 py-16 md:py-24">
            <p className="display max-w-3xl text-4xl md:text-5xl">
              Case studies are being prepared for publication.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-stone">
              In the meantime, we are happy to walk you through relevant work on
              a call.
            </p>
            <ButtonLink href="/contact" className="mt-9">
              Request a walkthrough
            </ButtonLink>
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {visible.map((p) => {
              const href = p.liveLink || p.githubLink;
              return (
                <article key={p._id} className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-bone">
                    {p.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      {p.category && (
                        <p className="eyebrow text-stone">{p.category}</p>
                      )}
                      <h2 className="display mt-3 text-4xl md:text-5xl">
                        {p.title}
                      </h2>
                    </div>
                    {href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${p.title}`}
                        className="mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                      >
                        <Arrow />
                      </a>
                    )}
                  </div>
                  {p.description && (
                    <p className="mt-4 max-w-xl leading-relaxed text-stone">
                      {p.description}
                    </p>
                  )}
                  {p.techStack && p.techStack.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.techStack.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-ink/15 px-3 py-1 text-[0.8125rem]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      <Contact />
    </>
  );
}
