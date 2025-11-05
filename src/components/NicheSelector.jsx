import React from 'react';
import { Search, Sparkles, ShieldCheck, Palette, Gamepad2, Landmark, FlaskConical } from 'lucide-react';

const NICHES = [
  { key: 'banking-law', label: 'Banking Law', icon: Landmark, blurb: 'Compliance, capital, and cross‑border playbooks.' },
  { key: 'kitchenware-design', label: 'Kitchenware Design', icon: Palette, blurb: 'Materials, ergonomics, and manufacturing.' },
  { key: 'retro-gaming-90s', label: 'Retro Gaming (90s)', icon: Gamepad2, blurb: 'ROM hacking, pixel art, and emulation.' },
  { key: 'bio-tech-vc', label: 'BioTech VC', icon: FlaskConical, blurb: 'Market maps, regulatory, and diligence.' },
  { key: 'proptech', label: 'PropTech', icon: ShieldCheck, blurb: 'Smart buildings, underwriting, and IoT.' },
];

const NicheSelector = ({ selected, onSelect, search, onSearch }) => {
  return (
    <section className="w-full bg-gradient-to-b from-black to-neutral-950 text-white py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <Sparkles className="h-4 w-4 text-rose-300" />
          Choose a focus and we tailor everything
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Curate with intent</h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NICHES.map((n) => {
              const ActiveIcon = n.icon;
              const active = selected === n.key;
              return (
                <button
                  key={n.key}
                  onClick={() => onSelect(n.key)}
                  className={`group text-left rounded-2xl p-4 border transition relative overflow-hidden ${
                    active
                      ? 'bg-white text-black border-transparent shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none ${
                    active ? 'hidden' : ''
                  }`} style={{
                    background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(244,63,94,0.15), transparent 40%)'
                  }} />
                  <div className="flex items-start gap-3 relative">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                      active ? 'bg-black/5' : 'bg-white/10'
                    }`}>
                      <ActiveIcon className={`h-5 w-5 ${active ? 'text-black' : 'text-white'}`} />
                    </div>
                    <div>
                      <div className="font-semibold">{n.label}</div>
                      <div className={`text-sm ${active ? 'text-black/70' : 'text-white/70'}`}>{n.blurb}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search resources, tools, creators…"
                className="w-full rounded-xl bg-white/5 border border-white/15 pl-10 pr-4 py-3 text-sm outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
              <div className="text-sm font-semibold">Why niche down?</div>
              <ul className="mt-2 space-y-2 text-sm text-white/80 list-disc list-inside">
                <li>Clear positioning that compounds trust</li>
                <li>Higher signal‑to‑noise for your audience</li>
                <li>Effortless inbound: partners, clients, and press</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicheSelector;
