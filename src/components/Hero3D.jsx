import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero3D = ({ onExplore }) => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-start justify-center text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-300" />
            Curated. Actionable. Niche-first.
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
            Become the go-to voice for your niche.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Showcase world‑class tools, playbooks, and inspiration for a laser‑focused audience — from banking law to kitchenware design to retro 90s gaming.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onExplore}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
            >
              <Rocket className="h-4 w-4" />
              Explore Niches
            </button>
            <a
              href="#resources"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-5 py-3 text-sm font-semibold backdrop-blur border border-white/15 hover:bg-white/15 transition"
            >
              See Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
