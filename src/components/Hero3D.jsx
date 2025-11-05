import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Sparkles } from 'lucide-react';

const Hero3D = ({ onExplore }) => {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays shouldn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-start justify-center text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-rose-300" />
            Curate. Signal. Lead your niche.
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight">
            Elevate your authority with a
            <span className="bg-gradient-to-r from-rose-300 via-rose-400 to-orange-300 bg-clip-text text-transparent"> precision‑curated </span>
            resource hub.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            Position yourself as the definitive guide for a strategic niche — from banking law to kitchenware design to retro 90s gaming. Interactive, modern, and built to attract inbound.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={onExplore}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
            >
              <Rocket className="h-4 w-4" />
              Explore Niches
            </button>
            <a
              href="#resources"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold backdrop-blur border border-white/15 hover:bg-white/15 transition"
            >
              See Resources
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { k: 'curations', v: '1,200+', l: 'vetted links' },
              { k: 'conversion', v: '4.7x', l: 'higher trust' },
              { k: 'growth', v: '3.1x', l: 'inbound leads' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold">{s.v}</div>
                <div className="text-xs uppercase tracking-wide text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center z-10">
        <div className="pointer-events-none inline-flex items-center gap-2 text-white/70 text-xs">
          <Star className="h-3 w-3" /> Scroll to discover
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
