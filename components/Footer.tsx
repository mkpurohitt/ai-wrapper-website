import Link from "next/link";
import { services, site } from "@/lib/site";
import { Mark } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell pb-10">
        <div className="border-t border-paper/15 pt-16 md:pt-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Link
                href="/"
                className="flex items-center gap-2.5 text-lg font-medium tracking-tight"
              >
                <Mark className="h-6 w-6" />
                {site.name}
              </Link>
              <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ash">
                A new-age services company for AI automation, premium
                development and modern digital marketing.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow text-ash">Services</p>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="link-line pb-0.5"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-ash">Company</p>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {[
                  ["About", "/about"],
                  ["Work", "/portfolio"],
                  ["Approach", "/#approach"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="link-line pb-0.5">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-ash">Contact</p>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-line break-all pb-0.5"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-ash">{site.location}</li>
              </ul>
            </div>
          </div>

          <p
            aria-hidden="true"
            className="display mt-16 select-none overflow-hidden whitespace-nowrap pb-[0.08em] text-[min(24.5vw,21.5rem)] leading-none text-paper/[0.07] md:mt-20"
          >
            AI Wrapper
          </p>

          <div className="mt-6 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-ash sm:flex-row sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights
              reserved.
            </p>
            <p>
              AI automation · Development · Viral content · SEO, AEO &amp; GEO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
