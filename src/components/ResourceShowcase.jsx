import React, { useMemo } from 'react';
import { ExternalLink, Star, Bookmark } from 'lucide-react';

const DATA = {
  'banking-law': [
    {
      title: 'Basel III Toolkit',
      desc: 'Interactive primers, calculators, and case law trackers for capital adequacy.',
      link: 'https://www.bis.org/',
      tags: ['Compliance', 'Capital'],
      rating: 5,
    },
    {
      title: 'Legal Structuring Playbook',
      desc: 'Transaction templates and negotiation checklists for cross‑border banking deals.',
      link: 'https://papers.ssrn.com/',
      tags: ['Templates', 'Cross‑border'],
      rating: 4,
    },
  ],
  'kitchenware-design': [
    {
      title: 'Material Atlas: Food‑Safe Plastics',
      desc: 'Compare tensile strength, heat deflection, and sustainability metrics.',
      link: 'https://material.io/',
      tags: ['Materials', 'Sustainability'],
      rating: 4,
    },
    {
      title: 'ErgoKit: Grip Geometry Library',
      desc: 'CAD references and anthropometric datasets for handles and utensils.',
      link: 'https://grabcad.com/',
      tags: ['Ergonomics', 'CAD'],
      rating: 5,
    },
  ],
  'retro-gaming-90s': [
    {
      title: 'SNES Dev Hub',
      desc: 'ROM hacking guides, emulation configs, and chipset docs.',
      link: 'https://www.zeldix.net/',
      tags: ['SNES', 'Emulation'],
      rating: 5,
    },
    {
      title: 'Pixel Art Mastery',
      desc: 'Palette theory, dither techniques, and reference packs.',
      link: 'https://lospec.com/',
      tags: ['Art', 'Palettes'],
      rating: 4,
    },
  ],
  'bio-tech-vc': [
    {
      title: 'Biotech Market Maps',
      desc: 'Landscape reports, clinical phases, and regulatory trackers.',
      link: 'https://biopharmguy.com/',
      tags: ['Market', 'Regulatory'],
      rating: 4,
    },
    {
      title: 'Diligence Data Room Checklist',
      desc: 'Everything to request pre‑term sheet: IP, protocols, and CMC.',
      link: 'https://lifesci.vc/',
      tags: ['Diligence', 'Checklists'],
      rating: 5,
    },
  ],
  proptech: [
    {
      title: 'Smart Building Standards',
      desc: 'Open protocols, BMS integrations, and energy benchmarking.',
      link: 'https://www.openconnectivity.org/',
      tags: ['IoT', 'Energy'],
      rating: 4,
    },
    {
      title: 'Underwriting Toolkit',
      desc: 'Model templates and risk frameworks for mixed‑use assets.',
      link: 'https://www.udemy.com/',
      tags: ['Underwriting', 'Templates'],
      rating: 4,
    },
  ],
};

const StarRow = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < count ? 'fill-yellow-300 text-yellow-300' : 'text-white/30'}`}
      />
    ))}
  </div>
);

const ResourceCard = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <Bookmark className="h-5 w-5 text-white/50 group-hover:text-white/80" />
      </div>
      <p className="text-sm text-white/70">{item.desc}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-2">
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
  const items = DATA[selected] || [];

  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [items, search]);

  return (
    <section id="resources" className="w-full bg-neutral-950 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured resources</h2>
            <p className="text-white/70 text-sm mt-1">Hand‑picked tools and references for your chosen niche.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-white/70 py-12 border border-dashed border-white/10 rounded-xl">
              No matches found. Try a different search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceShowcase;
