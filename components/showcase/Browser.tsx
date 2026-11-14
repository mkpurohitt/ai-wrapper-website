import type { ReactNode } from "react";

export function Browser({
  url,
  children,
  dark = false,
  className = "",
}: {
  url: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border shadow-[0_30px_60px_-30px_rgb(17_17_15/0.35)] ${
        dark ? "border-white/10 bg-[#141414]" : "border-ink/10 bg-white"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 border-b px-3.5 py-2.5 ${
          dark ? "border-white/10" : "border-ink/10"
        }`}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${dark ? "bg-white/20" : "bg-ink/15"}`}
            />
          ))}
        </div>
        <span
          className={`mx-auto rounded-md px-3 py-0.5 font-mono text-[0.625rem] ${
            dark ? "bg-white/5 text-white/40" : "bg-ink/[0.04] text-ink/40"
          }`}
        >
          {url}
        </span>
        <span className="w-8" />
      </div>
      {children}
    </div>
  );
}

export function Phone({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto aspect-[9/19] w-full max-w-[15rem] overflow-hidden rounded-[2.2rem] border-[6px] border-ink bg-ink shadow-[0_30px_60px_-25px_rgb(17_17_15/0.45)] ${className}`}
    >
      <span className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
        {children}
      </div>
    </div>
  );
}

export function Caption({
  label,
  title,
  tone = "light",
}: {
  label: string;
  title: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <p className={`eyebrow ${tone === "dark" ? "text-ash" : "text-stone"}`}>
        {label}
      </p>
      <p className={`text-sm ${tone === "dark" ? "text-paper" : "text-ink"}`}>
        {title}
      </p>
    </div>
  );
}
