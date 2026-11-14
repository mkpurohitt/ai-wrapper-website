import Reveal from "../Reveal";
import { Phone } from "./Browser";

function BoringReel() {
  return (
    <Phone>
      <div className="relative flex h-full flex-col justify-end bg-[linear-gradient(180deg,#2b2f4a,#1b1d2c)] p-4 text-white">
        <div className="absolute inset-x-0 top-[28%] flex justify-center">
          <span className="text-5xl opacity-70">🤖</span>
        </div>
        <p className="mx-auto mb-16 max-w-[10rem] rounded bg-black/60 px-2 py-1 text-center text-[0.625rem] font-bold leading-tight">
          DID YOU KNOW AI IS CHANGING EVERYTHING?
        </p>
        <p className="text-[0.5625rem] text-white/70">
          @yourbrand · AI voiceover
        </p>
        <p className="mt-1 text-[0.5rem] text-white/45">
          #ai #business #motivation #viral
        </p>
        <div className="mt-3 h-0.5 w-full rounded bg-white/15">
          <div className="h-full w-[12%] rounded bg-white/60" />
        </div>
        <p className="mt-1.5 text-[0.5rem] text-white/45">
          Most viewers swipe in the first second
        </p>
      </div>
    </Phone>
  );
}

function ViralReel() {
  return (
    <Phone>
      <div className="relative flex h-full flex-col bg-[linear-gradient(170deg,#d9b58c_0%,#a8714a_55%,#3d2516_100%)] p-4 text-white">
        <div className="mt-8 rounded-md bg-white px-2.5 py-1.5 text-[0.6875rem] font-semibold leading-tight text-[#1d1d1b] shadow-lg">
          We tried selling chai at 4 AM outside a Mumbai station. Day 3
          surprised us.
        </div>
        <div className="mt-auto">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[0.625rem] font-semibold">@yourbrand</p>
              <p className="mt-0.5 text-[0.5625rem] text-white/80">
                Part 1 of 5 · real people, real story
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-[0.5rem]">
              {["♥", "💬", "↗"].map((i) => (
                <span
                  key={i}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-black/25 text-[0.625rem]"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 h-0.5 w-full rounded bg-white/25">
            <div className="h-full w-[88%] rounded bg-white" />
          </div>
          <p className="mt-1.5 text-[0.5rem] text-white/80">
            Watched to the end · saved · shared
          </p>
        </div>
      </div>
    </Phone>
  );
}

const formula = [
  [
    "Hook",
    "The first second earns the next ten. Every script starts with a line people can't scroll past.",
  ],
  [
    "Story",
    "Real people, real stakes, a reason to watch to the end — not stock footage and a robot voice.",
  ],
  [
    "Native",
    "Shot and edited for each platform's language, trends and pacing, not one cut posted everywhere.",
  ],
  [
    "Iterate",
    "We read retention and shares, keep what travels, and turn winners into ads.",
  ],
];

export default function ViralContent({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-ash" : "text-stone";
  const rule = tone === "dark" ? "border-paper/15" : "border-ink/15";
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
      <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:col-span-6">
        <Reveal>
          <p className={`eyebrow mb-5 ${muted}`}>The boring AI reel</p>
          <BoringReel />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-5 text-ember">What we make</p>
          <ViralReel />
        </Reveal>
      </div>
      <ol
        className={`border-t ${rule} lg:col-span-5 lg:col-start-8 lg:self-center`}
      >
        {formula.map(([t, b], i) => (
          <li
            key={t}
            className={`grid grid-cols-12 gap-4 border-b ${rule} py-5`}
          >
            <span className="eyebrow col-span-2 pt-1.5 text-ember">
              0{i + 1}
            </span>
            <div className="col-span-10">
              <p className="text-xl font-medium tracking-tight">{t}</p>
              <p className={`mt-1.5 text-sm leading-relaxed ${muted}`}>{b}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
