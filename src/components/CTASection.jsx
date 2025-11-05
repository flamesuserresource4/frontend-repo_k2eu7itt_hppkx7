import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    // Simple client-only confirmation for demo purposes
    if (email) alert('Thanks! We\'ll notify you at ' + email);
    form.reset();
  };

  return (
    <section className="w-full bg-gradient-to-b from-neutral-950 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Build authority. Attract inbound.</h3>
              <p className="text-white/70 mt-1 text-sm">
                Get a weekly drop of fresh tools and resources for your niche. Short, tactical, and vetted.
              </p>
            </div>
            <form onSubmit={onSubmit} className="md:col-span-1 flex gap-2">
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-lg bg-white/10 border border-white/15 px-4 py-2.5 text-sm outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-semibold shadow hover:shadow-lg transition"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
