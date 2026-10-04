import { ArrowUp, Heart } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { NAV_LINKS, PROFILE, SOCIALS } from '@/data/portfolio';

export function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="section-shell relative">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <button onClick={() => go('#hero')} className="flex items-center gap-3">
              <span className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-white shadow-lg shadow-black/20">
                <BrandLogo className="h-10 w-10" title="The Vinnu Portfolio logo" />
              </span>
              <div className="text-left">
                <div className="font-display text-base font-semibold text-white">{PROFILE.name}</div>
                <div className="text-xs text-slate-400">{PROFILE.title}</div>
              </div>
            </button>
            <p className="mt-5 max-w-sm text-sm text-slate-400 leading-relaxed">
              {PROFILE.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Navigate</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Let's talk</h4>
            <p className="mt-4 text-sm text-slate-400">
              Open to enterprise work, AI products, and IoT collaborations.
            </p>
            <button onClick={() => go('#contact')} className="btn-primary mt-5 !text-xs">
              Start a conversation
            </button>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> by {PROFILE.name}
            <span className="mx-1.5 text-slate-700">|</span>
            <span className="text-slate-400">Freelance developer</span>
          </p>
          <p className="text-xs text-slate-600">
            Copyright {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid h-9 w-9 place-items-center rounded-full glass text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
