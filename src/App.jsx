import React, { useRef, useState } from 'react';
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

  return (
    <div ref={topRef} className="min-h-screen bg-black">
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

      <footer className="w-full bg-black text-white/60 text-sm py-8 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Niche Curator — Crafted for focused creators.</p>
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
