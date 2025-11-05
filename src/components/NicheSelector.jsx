import React from 'react';
import { Search, Sparkles } from 'lucide-react';

const NICHES = [
  { key: 'banking-law', label: 'Banking Law' },
  { key: 'kitchenware-design', label: 'Kitchenware Design' },
  { key: 'retro-gaming-90s', label: 'Retro Gaming (90s)' },
  { key: 'bio-tech-vc', label: 'BioTech VC' },
  { key: 'proptech', label: 'PropTech' },
];

const NicheSelector = ({ selected, onSelect, search, onSearch }) => {
  return (
    <section className="w-full bg-gradient-to-b from-black to-neutral-950 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          Pick your strategic niche
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Curate with intent</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 flex flex-wrap gap-2">
            {NICHES.map((n) => (
              <button
                key={n.key}
                onClick={() => onSelect(n.key)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  selected === n.key
                    ? 'bg-white text-black border-transparent'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search resources, tools, creators…"
                className="w-full rounded-lg bg-white/5 border border-white/15 pl-10 pr-4 py-2.5 text-sm outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicheSelector;
