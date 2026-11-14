import Reveal from "./Reveal";

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return (
    <span
      className={`block h-1.5 rounded-full bg-paper/15 ${className}`}
      style={{ width: w }}
    />
  );
}

const surfaces = [
  {
    index: "01",
    short: "SEO",
    name: "Search engine optimisation",
    verb: "Rank",
    body: "Earn the click in classic search with technical foundations, useful content and real authority.",
    mock: (
      <div className="space-y-5">
        {[true, false].map((first, i) => (
          <div key={i} className={first ? "" : "opacity-40"}>
            <p className="font-mono text-[0.625rem] text-ash">
              {first ? "yourbrand.com" : "another-result.com"}
            </p>
            <p
              className={`mt-1.5 text-sm font-medium ${first ? "text-ember" : "text-paper"}`}
            >
              {first ? "Your page, ranked first" : "A competing result"}
            </p>
            <div className="mt-2.5 space-y-1.5">
              <Bar w="100%" />
              <Bar w="72%" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    index: "02",
    short: "AEO",
    name: "Answer engine optimisation",
    verb: "Answer",
    body: "Be the direct answer in featured snippets, AI Overviews and voice results, before anyone scrolls.",
    mock: (
      <div>
        <p className="font-mono text-[0.625rem] uppercase tracking-widest text-ash">
          Overview
        </p>
        <div className="mt-3 border-l border-ember pl-4">
          <div className="space-y-1.5">
            <Bar w="100%" className="bg-paper/40" />
            <Bar w="94%" className="bg-paper/40" />
            <Bar w="58%" className="bg-paper/40" />
          </div>
          <p className="mt-4 text-xs text-ash">
            Source · <span className="text-paper">yourbrand.com</span>
          </p>
        </div>
        <div className="mt-5 space-y-1.5 opacity-40">
          <Bar w="80%" />
          <Bar w="64%" />
        </div>
      </div>
    ),
  },
  {
    index: "03",
    short: "GEO",
    name: "Generative engine optimisation",
    verb: "Get cited",
    body: "Be the source that ChatGPT, Gemini, Perplexity and Claude cite and recommend by name.",
    mock: (
      <div className="space-y-4">
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-paper/10 px-3.5 py-2 text-xs text-paper">
          Who should I use for this?
        </p>
        <div>
          <p className="text-xs leading-relaxed text-ash">
            Based on several sources,{" "}
            <span className="font-medium text-paper">Your Brand</span> is a
            strong choice
            <sup className="ml-0.5 text-ember">1</sup>
          </p>
          <div className="mt-2.5 space-y-1.5">
            <Bar w="90%" />
            <Bar w="48%" />
          </div>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-paper/20 px-2.5 py-1 font-mono text-[0.625rem] text-paper">
            <span className="text-ember">1</span> yourbrand.com
          </p>
        </div>
      </div>
    ),
  },
];

export default function SearchShift() {
  return (
    <div className="grid border-t border-paper/15 md:grid-cols-3">
      {surfaces.map((s, i) => (
        <Reveal
          key={s.short}
          delay={i * 0.1}
          className={`flex flex-col border-b border-paper/15 py-9 md:py-10 ${
            i > 0 ? "md:border-l md:pl-8" : ""
          } ${i < 2 ? "md:pr-8" : ""}`}
        >
          <div className="flex items-baseline justify-between">
            <p className="eyebrow text-ash">{s.index}</p>
            <p className="eyebrow text-ash">{s.verb}</p>
          </div>
          <h3 className="display mt-8 text-6xl md:text-7xl">{s.short}</h3>
          <p className="mt-2 text-sm text-ash">{s.name}</p>

          <div
            aria-hidden="true"
            className="mt-8 flex min-h-[11.5rem] flex-col justify-center rounded-lg border border-paper/10 bg-coal p-5"
          >
            {s.mock}
          </div>

          <p className="mt-7 leading-relaxed text-paper/80">{s.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
