import Reveal from "../Reveal";
import { Phone } from "./Browser";

const rented = [
  ["Monthly plan", "A subscription every month, rising as you move up plans"],
  [
    "Transaction fees",
    "Extra fees on many plans unless you use their own payments",
  ],
  [
    "Paid apps",
    "Reviews, upsells, invoices and more — often each a monthly add-on",
  ],
  [
    "Their checkout, their rules",
    "Limited control over design, data and checkout flow",
  ],
];

const owned = [
  [
    "One-time build",
    "You pay for the store once, then hosting and maintenance",
  ],
  [
    "No platform commission",
    "Only your payment gateway's standard fee on each order",
  ],
  [
    "Payments built in",
    "Razorpay or Stripe — UPI, cards, wallets, net banking and COD",
  ],
  [
    "Delivery built in",
    "Shiprocket and courier partners, with live tracking and invoices",
  ],
];

function CheckoutMock() {
  return (
    <Phone>
      <div className="flex h-full flex-col bg-[#f6f4f0] px-4 pb-4 pt-9 text-[#1d1d1b]">
        <p className="font-serif text-lg">Checkout</p>
        <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-white p-2.5">
          <span className="h-9 w-9 rounded-lg bg-[radial-gradient(circle_at_40%_35%,#e7d8c4,#b89b78)]" />
          <div className="flex-1 text-[0.5625rem]">
            <p className="font-medium">Ceramic Pour-Over</p>
            <p className="text-black/45">Qty 1</p>
          </div>
          <p className="text-[0.625rem] font-medium">₹2,450</p>
        </div>
        <p className="mt-4 text-[0.5rem] uppercase tracking-widest text-black/45">
          Pay with
        </p>
        <div className="mt-1.5 space-y-1.5">
          {["UPI", "Card", "Cash on delivery"].map((m, i) => (
            <div
              key={m}
              className={`flex items-center justify-between rounded-lg border px-2.5 py-2 text-[0.5625rem] ${
                i === 0 ? "border-[#1d1d1b] bg-white" : "border-black/10"
              }`}
            >
              {m}
              <span
                className={`h-2.5 w-2.5 rounded-full border ${
                  i === 0 ? "border-[#1d1d1b] bg-[#1d1d1b]" : "border-black/25"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-white p-2.5 text-[0.5625rem]">
          <div className="flex justify-between">
            <span className="text-black/50">Delivery</span>
            <span>Free · by Thu</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1">
            {[1, 1, 0, 0].map((on, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full ${on ? "bg-[#e8491d]" : "bg-black/10"}`}
              />
            ))}
          </div>
        </div>
        <span className="mt-auto rounded-full bg-[#1d1d1b] py-2.5 text-center text-[0.625rem] text-white">
          Pay ₹2,450
        </span>
      </div>
    </Phone>
  );
}

export default function CommerceCompare({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const rule = dark ? "border-paper/15" : "border-ink/15";
  const muted = dark ? "text-ash" : "text-stone";
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-4">
        <p className={`eyebrow ${muted}`}>Renting a store</p>
        <h3 className="display mt-4 text-3xl md:text-4xl">
          Shopify and other hosted platforms
        </h3>
        <ul className={`mt-6 border-t ${rule}`}>
          {rented.map(([t, b]) => (
            <li key={t} className={`border-b ${rule} py-4`}>
              <p className="flex gap-3 font-medium">
                <span className={muted}>—</span>
                {t}
              </p>
              <p className={`mt-1 pl-6 text-sm leading-relaxed ${muted}`}>
                {b}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.08} className="lg:col-span-4">
        <p className="eyebrow text-ember">Owning your store</p>
        <h3 className="display mt-4 text-3xl md:text-4xl">
          A custom store built by AI Wrapper
        </h3>
        <ul className={`mt-6 border-t ${rule}`}>
          {owned.map(([t, b]) => (
            <li key={t} className={`border-b ${rule} py-4`}>
              <p className="flex gap-3 font-medium">
                <span className="text-ember">+</span>
                {t}
              </p>
              <p className={`mt-1 pl-6 text-sm leading-relaxed ${muted}`}>
                {b}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.16} className="lg:col-span-3 lg:col-start-10">
        <CheckoutMock />
        <p className={`mt-5 text-center text-xs ${muted}`}>
          Your checkout, your brand, your customer data.
        </p>
      </Reveal>
    </div>
  );
}
