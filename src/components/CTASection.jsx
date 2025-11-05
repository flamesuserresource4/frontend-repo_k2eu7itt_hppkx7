import React from 'react';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';

const CTASection = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    if (email) alert('Thanks! We\'ll notify you at ' + email);
    form.reset();
  };

  return (
    <section className="w-full bg-gradient-to-b from-neutral-950 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 md:p-10 backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-white/70">
                <CheckCircle2 className="h-4 w-4 text-rose-300" />
                Join 2,000+ niche builders
              </div>
              <h3 className="text-3xl font-bold mt-2">Build authority. Attract inbound.</h3>
              <p className="text-white/70 mt-2 text-sm max-w-prose">
                Get a weekly drop of fresh tools and resources for your niche. Short, tactical, and vetted.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Curation scripts','Submission templates','Distribution checklist'].map((b)=> (
                  <div key={b} className="inline-flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-rose-300" /> {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 w-full">
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="text-xs text-white/60 text-center">No spam. Unsubscribe anytime.</div>
              </form>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { q: 'We closed two inbound clients in 3 weeks.', a: 'Head of Partnerships, Fintech' },
              { q: 'The curation quality is insanely high.', a: 'Principal, Design Studio' },
              { q: 'Exactly the edge our team needed.', a: 'Founder, Indie Game Collective' },
            ].map((t) => (
              <div key={t.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-2">
                  <Quote className="h-4 w-4 text-rose-300 mt-1" />
                  <div>
                    <div className="text-sm">{t.q}</div>
                    <div className="text-xs text-white/60 mt-1">{t.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
