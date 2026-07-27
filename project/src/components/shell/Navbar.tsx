import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { NAV_LINKS, PROFILE } from '@/data/portfolio';
import { useScrolled } from '@/hooks/usePortfolio';

export function Navbar({ onCommand }: { onCommand: () => void }) {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onCommand();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCommand]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`section-shell flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass-strong px-4 py-2.5 shadow-lg shadow-black/40' : 'px-2'
          }`}
        >
          <button onClick={() => go('#hero')} className="group flex items-center gap-3" aria-label="Home">
            <span className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-white shadow-md shadow-black/20">
              <BrandLogo className="h-10 w-10" title="The Vinnu Portfolio logo" />
            </span>
            <span className="hidden sm:flex flex-col leading-none text-left">
              <span className="font-display text-sm font-semibold text-white">{PROFILE.shortName}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                Portfolio
              </span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="rounded-lg px-3.5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onCommand}
              className="hidden sm:flex items-center gap-2 rounded-lg glass px-3 py-2 text-xs text-slate-400 transition-colors hover:text-white"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Search</span>
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                Ctrl K
              </kbd>
            </button>
            <button
              onClick={() => go('#contact')}
              className="hidden sm:inline-flex btn-primary !px-5 !py-2.5 !text-xs"
            >
              Hire Me
            </button>
            <button
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-lg glass text-white md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-ink-950/80 px-6 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(link.href)}
                  className="border-b border-white/5 py-3 text-left text-2xl font-display font-medium text-slate-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <button onClick={() => go('#contact')} className="btn-primary mt-6 w-full">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
