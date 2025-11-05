import React, { useMemo, useState } from 'react';
import { ExternalLink, Star, Bookmark, Filter } from 'lucide-react';

const DATA = {
  'banking-law': [
    {
      title: 'Basel III Toolkit',
      desc: 'Interactive primers, calculators, and case law trackers for capital adequacy.',
      link: 'https://www.bis.org/',
      tags: ['Compliance', 'Capital'],
      rating: 5,
      tone: 'pro'
    },
    {
      title: 'Legal Structuring Playbook',
      desc: 'Transaction templates and negotiation checklists for cross‑border banking deals.',
      link: 'https://papers.ssrn.com/',
      tags: ['Templates', 'Cross‑border'],
      rating: 4,
      tone: 'guide'
    },
  ],
  'kitchenware-design': [
    {
      title: 'Material Atlas: Food‑Safe Plastics',
      desc: 'Compare tensile strength, heat deflection, and sustainability metrics.',
      link: 'https://material.io/',
      tags: ['Materials', 'Sustainability'],
      rating: 4,
      tone: 'reference'
    },
    {
      title: 'ErgoKit: Grip Geometry Library',
      desc: 'CAD references and anthropometric datasets for handles and utensils.',
      link: 'https://grabcad.com/',
      tags: ['Ergonomics', 'CAD'],
      rating: 5,
      tone: 'pro'
    },
  ],
  'retro-gaming-90s': [
    {
      title: 'SNES Dev Hub',
      desc: 'ROM hacking guides, emulation configs, and chipset docs.',
      link: 'https://www.zeldix.net/',
      tags: ['SNES', 'Emulation'],
      rating: 5,
      tone: 'pro'
    },
    {
      title: 'Pixel Art Mastery',
      desc: 'Palette theory, dither techniques, and reference packs.',
      link: 'https://lospec.com/',
      tags: ['Art', 'Palettes'],
      rating: 4,
      tone: 'guide'
    },
  ],
  'bio-tech-vc': [
    {
      title: 'Biotech Market Maps',
      desc: 'Landscape reports, clinical phases, and regulatory trackers.',
      link: 'https://biopharmguy.com/',
      tags: ['Market', 'Regulatory'],
      rating: 4,
      tone: 'reference'
    },
    {
      title: 'Diligence Data Room Checklist',
      desc: 'Everything to request pre‑term sheet: IP, protocols, and CMC.',
      link: 'https://lifesci.vc/',
      tags: ['Diligence', 'Checklists'],
      rating: 5,
      tone: 'guide'
    },
  ],
  proptech: [
    {
      title: 'Smart Building Standards',
      desc: 'Open protocols, BMS integrations, and energy benchmarking.',
      link: 'https://www.openconnectivity.org/',
      tags: ['IoT', 'Energy'],
      rating: 4,
      tone: 'reference'
    },
    {
      title: 'Underwriting Toolkit',
      desc: 'Model templates and risk frameworks for mixed‑use assets.',
      link: 'https://www.udemy.com/',
      tags: ['Underwriting', 'Templates'],
      rating: 4,
      tone: 'guide'
    },
  ],
};

const StarRow = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < count ? 'fill-rose-300 text-rose-300' : 'text-white/30'}`}
      />
    ))}
  </div>
);

const Badge = ({ children }) => (
  <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
    {children}
  </span>
);

const ResourceCard = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4 flex flex-col gap-3 overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{
        background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(244,63,94,0.08), transparent 40%)'
      }} />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-white/70 mt-1 max-w-prose">{item.desc}</p>
        </div>
        <Bookmark className="h-5 w-5 text-white/50 group-hover:text-white/80" />
      </div>
      <div className="relative flex flex-wrap items-center gap-2">
        <Badge>{item.tone}</Badge>
        {item.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
            {t}
          </span>
        ))}
      </div>
      <div className="relative mt-auto flex items-center justify-between pt-2">
        <StarRow count={item.rating} />
        <span className="inline-flex items-center gap-1 text-sm text-white/80">
          Visit
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
};

const ResourceShowcase = ({ selected, search }) => {
  const [tone, setTone] = useState('all');
  const items = DATA[selected] || [];

  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    let list = items;
    if (tone !== 'all') list = list.filter((i) => i.tone === tone);
    if (!q) return list;
    return list.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [items, search, tone]);

  return (
    <section id="resources" className="w-full bg-neutral-950 text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured resources</h2>
            <p className="text-white/70 text-sm mt-1">Hand‑picked tools and references for your chosen niche.</p>
          </div>
          <div className="inline-flex items-center gap-2">
            <Filter className="h-4 w-4 text-white/70" />
            <div className="flex rounded-xl border border-white/10 overflow-hidden">
              {['all','pro','guide','reference'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`px-3 py-2 text-xs uppercase tracking-wide ${tone===t? 'bg-white text-black':'bg-white/5 text-white/80 hover:bg-white/10'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-white/70 py-12 border border-dashed border-white/10 rounded-2xl">
              No matches found. Try a different search or filter.
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: 'Playbook: From Curator to Authority', d: 'A 4‑step cadence to turn links into leverage.' },
            { t: 'Framework: Niche Scoring Matrix', d: 'Rank TAM vs. expertise vs. passion vs. differentiation.' },
            { t: 'Template: Resource Submission Form', d: 'Standardize inflow and keep quality high.' },
          ].map((i) => (
            <div key={i.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">{i.t}</div>
              <div className="text-sm text-white/70 mt-1">{i.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceShowcase;
