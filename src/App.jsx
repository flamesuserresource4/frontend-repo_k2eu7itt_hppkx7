import React, { useRef, useState, useEffect } from 'react';
import Hero3D from './components/Hero3D';
import NicheSelector from './components/NicheSelector';
import ResourceShowcase from './components/ResourceShowcase';
import CTASection from './components/CTASection';

function App() {
  const [selected, setSelected] = useState('retro-gaming-90s');
  const [search, setSearch] = useState('');
  const topRef = useRef(null);

  const handleExplore = () => {
    const el = document.getElementById('niches');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Subtle pointer tracking for radial hover effects
  useEffect(() => {
    const root = document.documentElement;
    const handler = (e) => {
      root.style.setProperty('--x', e.clientX + 'px');
      root.style.setProperty('--y', e.clientY + 'px');
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-black font-inter">
      <Hero3D onExplore={handleExplore} />

      <div id="niches">
        <NicheSelector
          selected={selected}
          onSelect={(k) => setSelected(k)}
          search={search}
          onSearch={setSearch}
        />
      </div>

      <ResourceShowcase selected={selected} search={search} />

      <CTASection />

      <footer className="w-full bg-black text-white/60 text-sm py-10 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="text-white font-semibold">Niche Curator</div>
            <p className="mt-1 max-w-md">Design a destination that compounds credibility. Curate with taste, publish with rhythm, and lead your space.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">About</a>
            <a href="#resources" className="hover:text-white">Resources</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
