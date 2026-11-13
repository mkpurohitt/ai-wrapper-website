"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow, Mark } from "./ui";

const links = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/85 backdrop-blur-md transition-colors duration-500 ${
          scrolled && !open ? "border-ink/10" : "border-transparent"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2.5 text-[1.0625rem] font-medium tracking-tight"
            aria-label="AI Wrapper home"
          >
            <Mark className="h-6 w-6" />
            AI Wrapper
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {links.map((l) => {
              const active = !l.href.includes("#") && pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-line pb-0.5 text-[0.9375rem] transition-colors ${
                    active ? "text-ink [background-size:100%_1px]" : "text-stone hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ember sm:inline-flex"
            >
              Start a project
              <Arrow className="transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-500 ease-expo ${
                  open ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-500 ease-expo ${
                  open ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-5 pb-8 pt-28 transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {[...links, { label: "Contact", href: "/contact" }].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="flex items-baseline justify-between border-b border-ink/15 py-5"
            >
              <span className="display text-5xl">{l.label}</span>
              <span className="eyebrow text-stone">0{i + 1}</span>
            </Link>
          ))}
        </nav>
        <a href="mailto:contact@aiwrapper.tech" className="mt-auto text-stone">
          contact@aiwrapper.tech
        </a>
      </div>
    </>
  );
}
