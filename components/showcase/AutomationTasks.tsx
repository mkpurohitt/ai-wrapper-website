import Reveal from "../Reveal";

const tasks = [
  ["Pull yesterday's sales from 3 tools into one sheet", "40 min"],
  ["Chase unpaid invoices by email and WhatsApp", "25 min"],
  ["Rename and file supplier PDFs", "20 min"],
  ["Copy new leads into the CRM", "30 min"],
  ["Send the daily report to the team", "15 min"],
];

const code = [
  ["c", "# daily_tasks.py: runs every morning at 7:00"],
  ["k", "from"],
  ["", " tasks "],
  ["k", "import"],
  ["", " sales, invoices, files, leads, report\n\n"],
  ["f", "sales"],
  ["", ".merge(["],
  ["s", '"pos"'],
  ["", ", "],
  ["s", '"website"'],
  ["", ", "],
  ["s", '"marketplace"'],
  ["", "]).to_sheet()\n"],
  ["f", "invoices"],
  ["", ".remind(overdue_days="],
  ["n", "7"],
  ["", ", via=["],
  ["s", '"email"'],
  ["", ", "],
  ["s", '"whatsapp"'],
  ["", "])\n"],
  ["f", "files"],
  ["", ".sort("],
  ["s", '"~/Downloads"'],
  ["", ", rules="],
  ["s", '"suppliers.yml"'],
  ["", ")\n"],
  ["f", "leads"],
  ["", ".sync(source="],
  ["s", '"forms"'],
  ["", ", to="],
  ["s", '"crm"'],
  ["", ")\n"],
  ["f", "report"],
  ["", ".send(to="],
  ["s", '"team"'],
  ["", ")"],
];

const color: Record<string, string> = {
  c: "text-paper/35",
  k: "text-[#e8a07a]",
  f: "text-paper",
  s: "text-[#b8d98a]",
  n: "text-[#e8491d]",
  "": "text-paper/70",
};

export default function AutomationTasks() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <Reveal className="min-w-0 lg:col-span-5">
        <p className="eyebrow text-stone">Your morning, today</p>
        <ul className="mt-5 border-t border-ink/15">
          {tasks.map(([t, m]) => (
            <li
              key={t}
              className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4"
            >
              <span className="text-stone line-through decoration-ember/70 decoration-1">
                {t}
              </span>
              <span className="eyebrow shrink-0 text-stone">{m}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-baseline justify-between">
          <p className="font-medium">Time spent by hand</p>
          <p className="display text-4xl">
            2h 10m <span className="text-base text-stone">/ day</span>
          </p>
        </div>
        <p className="mt-2 text-xs text-stone">
          Example tasks and timings, for illustration.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="min-w-0 lg:col-span-6 lg:col-start-7">
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-xl bg-ink text-paper shadow-[0_30px_60px_-30px_rgb(17_17_15/0.5)]"
        >
          <div className="flex items-center justify-between border-b border-paper/10 px-4 py-2.5">
            <span className="font-mono text-[0.6875rem] text-paper/50">
              daily_tasks.py
            </span>
            <span className="flex items-center gap-2 font-mono text-[0.625rem] text-[#b8d98a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8d98a]" />{" "}
              scheduled
            </span>
          </div>
          <pre className="overflow-x-auto whitespace-pre p-5 font-mono text-[0.75rem] leading-[1.8]">
            {code.map(([k, t], i) => (
              <span key={i} className={color[k]}>
                {t}
                {k === "c" ? "\n" : ""}
              </span>
            ))}
          </pre>
          <div className="border-t border-paper/10 px-5 py-4 font-mono text-[0.6875rem] leading-relaxed text-paper/60">
            <p>
              <span className="text-[#b8d98a]">✓</span> 5 tasks completed in 48s
            </p>
            <p>
              <span className="text-[#b8d98a]">✓</span> 1 item flagged for
              review → sent to Priya
            </p>
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-stone">
          The same work, done before your team logs in, and anything unusual is
          flagged to a person instead of guessed.
        </p>
      </Reveal>
    </div>
  );
}
