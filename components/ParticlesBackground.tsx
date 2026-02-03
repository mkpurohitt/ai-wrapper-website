"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 1 } },
        },
      },
      particles: {
        color: { value: "#00F0FF" }, // Neon Cyan
        links: {
          color: "#7C3AED", // Neon Violet
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: { enable: true, speed: 1 },
        number: { density: { enable: true, width: 800, height: 800 }, value: 80 },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={options} className="absolute inset-0 z-0" />;
  }

  return <></>;
};

export default ParticlesBackground;