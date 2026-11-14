import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Faq, { faqSchema } from "@/components/Faq";
import Reveal from "@/components/Reveal";
import SearchShift from "@/components/SearchShift";
import AutomationTasks from "@/components/showcase/AutomationTasks";
import CommerceCompare from "@/components/showcase/CommerceCompare";
import {
  ConceptGallery,
  VibeVsPremium,
} from "@/components/showcase/DevShowcase";
import ViralContent from "@/components/showcase/ViralContent";
import { Arrow, ButtonLink, Eyebrow, JsonLd } from "@/components/ui";
import { services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.short,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const i = services.findIndex((s) => s.slug === slug);
  if (i === -1) notFound();
  const service = services[i];
  const next = services[(i + 1) % services.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.short,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.capabilities.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.title, description: c.body },
      })),
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema(service.faqs)} />

      <section className="shell pb-16 pt-40 md:pb-24 md:pt-56">
        <nav
          aria-label="Breadcrumb"
          className="eyebrow flex items-center gap-3 text-stone"
        >
          <Link href="/services" className="link-line pb-0.5 hover:text-ink">
            Services
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">
            {service.index} {service.name}
          </span>
        </nav>
        <h1 className="display mt-8 max-w-5xl text-6xl md:text-8xl lg:text-9xl">
          {service.tagline}
        </h1>
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <p className="text-xl leading-relaxed md:col-span-6 md:text-2xl">
            {service.short}
          </p>
          <p className="leading-relaxed text-stone md:col-span-5 md:col-start-8">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="shell pb-24 md:pb-40">
        <div className="grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow className="text-stone">What we do</Eyebrow>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2 md:col-span-9">
            {service.capabilities.map((c, n) => (
              <Reveal
                key={c.title}
                delay={(n % 2) * 0.06}
                className="border-b border-ink/15 py-8 first:pt-0 sm:[&:nth-child(2)]:pt-0"
              >
                <p className="eyebrow text-stone">
                  {String(n + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-2xl font-medium tracking-tight">
                  {c.title}
                </h2>
                <p className="mt-3 leading-relaxed text-stone">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.slug === "ai-automation" && (
        <section className="shell pb-24 md:pb-40">
          <div className="pb-14 md:pb-20">
            <Eyebrow className="text-stone">Python automation</Eyebrow>
            <h2 className="display mt-6 max-w-4xl text-5xl md:text-7xl">
              Your daily busywork,{" "}
              <em className="text-ember">done before 9&nbsp;AM.</em>
            </h2>
          </div>
          <AutomationTasks />
        </section>
      )}

      {service.slug === "development" && (
        <>
          <section className="shell pb-24 md:pb-36">
            <div className="grid gap-8 pb-14 md:grid-cols-12 md:pb-20">
              <div className="md:col-span-7">
                <Eyebrow className="text-stone">The difference</Eyebrow>
                <h2 className="display mt-6 text-5xl md:text-7xl">
                  Same-looking sites don&rsquo;t{" "}
                  <em className="text-ember">earn trust.</em>
                </h2>
              </div>
              <p className="self-end leading-relaxed text-stone md:col-span-4 md:col-start-9">
                When every site uses the same AI template, none of them stand
                out. Premium design is how a customer decides, in seconds, that
                you are worth their money.
              </p>
            </div>
            <VibeVsPremium />
          </section>

          <section className="bg-bone">
            <div className="shell py-24 md:py-36">
              <Eyebrow className="text-stone">Concept work</Eyebrow>
              <h2 className="display mb-14 mt-6 max-w-4xl text-5xl md:mb-20 md:text-7xl">
                Websites, apps and software that feel{" "}
                <em className="text-ember">made for you.</em>
              </h2>
              <ConceptGallery />
              <p className="mt-10 text-xs text-stone">
                Illustrative concepts showing our design direction. Brands shown
                are fictional.
              </p>
            </div>
          </section>

          <section id="ecommerce" className="shell py-24 md:py-36">
            <div className="grid gap-8 pb-14 md:grid-cols-12 md:pb-20">
              <div className="md:col-span-8">
                <Eyebrow className="text-stone">E-commerce</Eyebrow>
                <h2 className="display mt-6 text-5xl md:text-7xl">
                  Stop paying rent on{" "}
                  <em className="text-ember">every sale.</em>
                </h2>
              </div>
              <p className="self-end leading-relaxed text-stone md:col-span-4">
                We build your own store with payment gateway and delivery
                integration, so you own the checkout, the customer and the
                margin.
              </p>
            </div>
            <CommerceCompare />
          </section>
        </>
      )}

      {service.slug === "digital-marketing" && (
        <section className="shell pb-24 md:pb-36">
          <div className="grid gap-8 pb-14 md:grid-cols-12 md:pb-20">
            <div className="md:col-span-8">
              <Eyebrow className="text-stone">Content</Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                We don&rsquo;t make boring AI reels.{" "}
                <em className="text-ember">We make content people share.</em>
              </h2>
            </div>
          </div>
          <ViralContent />
        </section>
      )}

      <section className="bg-ink text-paper">
        <div className="shell py-24 md:py-36">
          {service.slug === "digital-marketing" && (
            <div className="pb-20 md:pb-28">
              <Eyebrow className="text-ash">
                Three surfaces, one strategy
              </Eyebrow>
              <h2 className="display mb-14 mt-6 max-w-4xl text-5xl md:text-7xl">
                Rank, answer, and <em className="text-ember">get cited.</em>
              </h2>
              <SearchShift />
            </div>
          )}

          {service.slug === "digital-marketing" && (
            <div className="pb-20 md:pb-28">
              <Eyebrow className="text-ash">E-commerce marketing</Eyebrow>
              <div className="mb-14 mt-6 grid gap-8 md:grid-cols-12">
                <h2 className="display max-w-4xl text-5xl md:col-span-8 md:text-7xl">
                  Grow a store you <em className="text-ember">actually own.</em>
                </h2>
                <p className="self-end leading-relaxed text-ash md:col-span-4">
                  Every rupee of growth goes further when a platform isn&rsquo;t
                  taking a cut. We pair catalogue ads, shopping campaigns and
                  cart recovery with a custom store we build for you.
                </p>
              </div>
              <CommerceCompare tone="dark" />
              <ButtonLink
                href="/services/development#ecommerce"
                tone="ghost-dark"
                className="mt-12"
              >
                Custom e-commerce development
              </ButtonLink>
            </div>
          )}

          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow className="text-ash">What you leave with</Eyebrow>
              <h2 className="display mt-6 text-5xl md:text-6xl">
                Working systems, not recommendations.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ol className="border-t border-paper/15">
                {service.outcomes.map((o, n) => (
                  <li
                    key={o}
                    className="flex gap-6 border-b border-paper/15 py-6"
                  >
                    <span className="eyebrow pt-1.5 text-ember">0{n + 1}</span>
                    <span className="text-lg leading-snug">{o}</span>
                  </li>
                ))}
              </ol>
              <p className="eyebrow mt-12 text-ash">Platforms and tools</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-paper/20 px-3.5 py-1.5 text-sm text-paper"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-4">
          <Eyebrow className="text-stone">Questions</Eyebrow>
          <h2 className="display mt-6 text-5xl md:text-6xl">Before you ask.</h2>
          <ButtonLink href="/contact" className="mt-9">
            Talk to us
          </ButtonLink>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Faq items={service.faqs} />
        </div>
      </section>

      <section className="shell pb-24 md:pb-36">
        <Link
          href={`/services/${next.slug}`}
          className="group flex items-end justify-between gap-6 border-y border-ink/15 py-10 md:py-14"
        >
          <div>
            <p className="eyebrow text-stone">Next practice · {next.index}</p>
            <p className="display mt-4 text-5xl transition-colors duration-300 group-hover:text-ember md:text-7xl">
              {next.name}
            </p>
          </div>
          <Arrow className="mb-3 h-6 w-6 shrink-0 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1 md:h-8 md:w-8" />
        </Link>
      </section>

      <Contact />
    </>
  );
}
