import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path
        d="M3 13 13 3M5 3h8v8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8.5 3.5C5.3 5 3.5 8.2 3.5 12s1.8 7 5 8.5M15.5 3.5c3.2 1.5 5 4.7 5 8.5s-1.8 7-5 8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.4" className="fill-ember" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "paper" | "ghost" | "ghost-dark";
  className?: string;
}) {
  const tones = {
    ink: "bg-ink text-paper hover:bg-ember",
    paper: "bg-paper text-ink hover:bg-ember hover:text-paper",
    ghost: "border border-ink/25 text-ink hover:border-ink",
    "ghost-dark": "border border-paper/25 text-paper hover:border-paper",
  };
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.9375rem] font-medium transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      {children}
      <Arrow className="transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
      {children}
    </p>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
