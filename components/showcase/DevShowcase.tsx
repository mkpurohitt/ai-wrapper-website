import Reveal from "../Reveal";
import { Browser, Caption, Phone } from "./Browser";

/* The generic AI-template look most sites ship with. */
function VibeSite() {
  return (
    <Browser url="yourbrand.vercel.app" dark>
      <div className="relative h-[19rem] overflow-hidden bg-[#0b0b1a] px-6 py-5 sm:h-[22rem]">
        <div className="absolute -left-10 top-6 h-44 w-44 rounded-full bg-[#7c3aed] opacity-50 blur-3xl" />
        <div className="absolute -right-6 top-20 h-40 w-40 rounded-full bg-[#06b6d4] opacity-40 blur-3xl" />
        <div className="relative flex items-center justify-between">
          <span className="text-[0.625rem] font-bold text-white">
            ✨ YourBrand
          </span>
          <span className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-2.5 py-1 text-[0.5625rem] font-semibold text-white">
            Get Started
          </span>
        </div>
        <div className="relative mt-7 text-center">
          <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[0.5rem] text-white/70">
            🚀 Powered by AI
          </span>
          <p className="mt-3 bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-xl font-extrabold leading-tight text-transparent sm:text-2xl">
            Revolutionize Your
            <br />
            Workflow With AI
          </p>
          <p className="mx-auto mt-2 max-w-[13rem] text-[0.5625rem] text-white/50">
            The all-in-one platform to supercharge your productivity and unlock
            growth.
          </p>
        </div>
        <div className="relative mt-5 grid grid-cols-3 gap-2">
          {["⚡", "🔒", "📈"].map((e) => (
            <div
              key={e}
              className="rounded-lg border border-white/10 bg-white/5 p-2.5"
            >
              <span className="text-xs">{e}</span>
              <span className="mt-1.5 block h-1 w-3/4 rounded bg-white/25" />
              <span className="mt-1 block h-1 w-1/2 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* An editorial, brand-led homepage, the kind we design. */
function PremiumSite() {
  return (
    <Browser url="maisonora.in">
      <div className="h-[19rem] bg-[#efe9df] px-6 py-5 text-[#2a2118] sm:h-[22rem]">
        <div className="flex items-center justify-between text-[0.5625rem]">
          <span className="font-serif text-sm italic">Maison Ora</span>
          <span className="hidden gap-4 sm:flex">
            <span>Collections</span>
            <span>Atelier</span>
            <span>Journal</span>
          </span>
          <span>Bag (2)</span>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-4">
          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#8a6f52]">
                Autumn · Handwoven in Jaipur
              </p>
              <p className="mt-2 font-serif text-[1.6rem] leading-[0.95] sm:text-[2rem]">
                Quiet pieces,
                <br />
                <em>made slowly.</em>
              </p>
            </div>
            <div>
              <p className="max-w-[12rem] text-[0.5625rem] leading-relaxed text-[#2a2118]/60">
                Natural fibres, small batches and craft you can feel. Free
                delivery across India.
              </p>
              <span className="mt-3 inline-block rounded-full bg-[#2a2118] px-3 py-1.5 text-[0.5625rem] text-[#efe9df]">
                Shop the collection →
              </span>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-[8.5rem] rounded-sm bg-[linear-gradient(160deg,#c9a27e,#8a5a3b)] sm:h-[10.5rem]" />
            <div className="flex items-center justify-between text-[0.5rem]">
              <span>Linen Kurta, Ochre</span>
              <span>₹4,200</span>
            </div>
          </div>
        </div>
      </div>
    </Browser>
  );
}

function StoreConcept() {
  return (
    <Browser url="kora.store/product/pour-over">
      <div className="grid h-60 grid-cols-2 bg-[#f6f4f0] text-[#1d1d1b]">
        <div className="relative m-3 rounded-md bg-[radial-gradient(circle_at_40%_35%,#e7d8c4,#b89b78)]">
          <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-2 py-0.5 text-[0.5rem]">
            1 / 4
          </span>
        </div>
        <div className="flex flex-col p-4 pl-2">
          <p className="font-mono text-[0.5rem] uppercase tracking-widest text-[#1d1d1b]/50">
            Brewing
          </p>
          <p className="mt-1 font-serif text-lg leading-tight">
            Ceramic Pour-Over
          </p>
          <p className="mt-1 text-[0.625rem]">₹2,450</p>
          <div className="mt-3 flex gap-1.5">
            {["#e9e2d6", "#3c3a36", "#b07a52"].map((c, i) => (
              <span
                key={c}
                className={`h-4 w-4 rounded-full ${i === 0 ? "ring-1 ring-[#1d1d1b] ring-offset-1" : ""}`}
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="mt-auto rounded-full bg-[#1d1d1b] py-2 text-center text-[0.5625rem] text-white">
            Add to bag
          </span>
          <p className="mt-2 text-center text-[0.5rem] text-[#1d1d1b]/50">
            Delivered by Thu · UPI, cards &amp; COD
          </p>
        </div>
      </div>
    </Browser>
  );
}

function DashboardConcept() {
  const bars = [38, 52, 44, 63, 58, 72, 86];
  return (
    <Browser url="app.ledgerly.io/overview">
      <div className="flex h-60 bg-[#fbfbfa] text-[#16181d]">
        <div className="w-14 border-r border-black/5 p-2.5">
          <span className="block h-5 w-5 rounded-md bg-[#16181d]" />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`mt-3 block h-1.5 rounded ${i === 0 ? "w-7 bg-[#16181d]" : "w-6 bg-black/10"}`}
            />
          ))}
        </div>
        <div className="flex-1 p-4">
          <p className="text-[0.5625rem] text-black/45">
            Revenue · last 7 days
          </p>
          <p className="mt-0.5 text-xl font-semibold tracking-tight">
            ₹8,42,300{" "}
            <span className="text-[0.5625rem] font-medium text-[#1f8a4c]">
              +18.2%
            </span>
          </p>
          <div className="mt-4 flex h-24 items-end gap-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-[#e8491d]" : "bg-[#16181d]/80"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["Orders", "1,284"],
              ["AOV", "₹656"],
              ["Repeat", "34%"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-md border border-black/5 bg-white p-1.5"
              >
                <p className="text-[0.5rem] text-black/45">{k}</p>
                <p className="text-[0.6875rem] font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

function AppConcept() {
  return (
    <Phone className="max-w-[11.5rem]">
      <div className="flex h-full flex-col bg-[#10140f] px-4 pb-4 pt-9 text-[#e9f0e4]">
        <p className="text-[0.5625rem] text-[#e9f0e4]/50">Good morning, Asha</p>
        <p className="mt-1 font-serif text-xl leading-tight">
          Your plan
          <br />
          <em className="text-[#b8e07a]">for today</em>
        </p>
        <div className="mt-4 rounded-2xl bg-[#b8e07a] p-3 text-[#10140f]">
          <p className="text-[0.5rem] font-medium uppercase tracking-widest">
            Next session
          </p>
          <p className="mt-1 text-sm font-semibold">Mobility · 25 min</p>
          <p className="text-[0.5625rem]">7:30 AM with Coach Dev</p>
        </div>
        <div className="mt-3 space-y-2">
          {["Hydration 1.4 / 3L", "Steps 6,120", "Sleep 7h 40m"].map((t) => (
            <div
              key={t}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-[0.5625rem]"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8e07a]" />
            </div>
          ))}
        </div>
        <div className="mt-auto flex justify-around pt-3">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-[#b8e07a]" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </Phone>
  );
}

export function VibeVsPremium() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
      <Reveal>
        <Caption label="What everyone ships" title="The vibe-coded template" />
        <VibeSite />
        <ul className="mt-6 space-y-2 text-sm text-stone">
          {[
            "Purple gradients and glowing blobs",
            "Generic “Revolutionize your workflow” copy",
            "Three emoji cards that look like a thousand other sites",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-stone/60">&minus;</span>
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1}>
        <Caption label="What we build" title="Designed for your brand" />
        <PremiumSite />
        <ul className="mt-6 space-y-2 text-sm">
          {[
            "Typography, colour and layout drawn from your brand",
            "Copy that says what you actually do",
            "Built to convert: fast, accessible and SEO-ready",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-ember">+</span>
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export function ConceptGallery() {
  return (
    <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
      <Reveal className="md:col-span-5">
        <Caption label="E-commerce" title="Product page" />
        <StoreConcept />
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-4">
        <Caption label="Custom software" title="Business dashboard" />
        <DashboardConcept />
      </Reveal>
      <Reveal delay={0.16} className="md:col-span-3">
        <Caption label="Mobile app" title="iOS & Android" />
        <AppConcept />
      </Reveal>
    </div>
  );
}
