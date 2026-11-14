import type { Faq as FaqItem } from "@/lib/site";

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-ink/15">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-ink/15">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-medium tracking-tight transition-colors hover:text-ember md:text-xl [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="relative mt-2 h-3.5 w-3.5 shrink-0 text-ink"
            >
              <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
              <span className="absolute left-1/2 top-0 h-full w-px bg-current transition-transform duration-500 ease-expo group-open:rotate-90" />
            </span>
          </summary>
          <p className="max-w-2xl pb-7 pr-10 leading-relaxed text-stone">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
