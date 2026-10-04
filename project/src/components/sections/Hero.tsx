import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Download, FolderGit2, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { PROFILE, SOCIALS } from '@/data/portfolio';
import { NeuralCanvas } from '@/components/shell/NeuralCanvas';
import { MagneticButton } from '@/components/ui/MagneticButton';

const ROLES = PROFILE.roles;

function useTypewriter(words: string[], typeMs = 90, holdMs = 1400) {
  // simple rotating typewriter
  void typeMs;
  void holdMs;
  return words.join(' | ');
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" ref={ref} className="relative min-h-screen overflow-hidden noise">
      {/* Background layers */}
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40 mask-fade-b" />
      <NeuralCanvas className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-cyan-400/15 blur-[100px]" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 section-shell flex min-h-screen flex-col items-center justify-center text-center pt-28 pb-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow mb-6"
        >
          <span className="h-px w-6 bg-accent-500/60" />
          AI | Full Stack | IoT | Freelance
          <span className="h-px w-6 bg-accent-500/60" />
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.24, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-white"
        >
          <BrandLogo className="mx-auto w-36 sm:w-44 md:w-48" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-balance"
        >
          <span className="gradient-text-soft">VINUTHNA KUMAR</span>
          <br />
          <span className="gradient-text">SALLAPUDI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs sm:text-sm text-slate-400"
        >
          {useTypewriter(ROLES).split(' | ').map((r, i, arr) => (
            <span key={r} className="flex items-center gap-3">
              <span className="text-slate-200">{r}</span>
              {i < arr.length - 1 && <span className="text-accent-500/50">|</span>}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed text-balance"
        >
          {PROFILE.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton as="a" href="#projects" onClick={() => go('#projects')} className="btn-primary">
            <Sparkles className="h-4 w-4" /> Explore My Work
          </MagneticButton>
          <MagneticButton as="a" href="#projects" onClick={() => go('#projects')} className="btn-ghost">
            <FolderGit2 className="h-4 w-4" /> View Projects
          </MagneticButton>
          <MagneticButton as="a" href="#contact" onClick={() => go('#contact')} className="btn-ghost">
            <ArrowRight className="h-4 w-4" /> Hire Me
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/VinuthnaKumar-sallapudi.pdf"
            className="btn-ghost"
            download="VinuthnaKumar-sallapudi.pdf"
          >
            <Download className="h-4 w-4" /> Resume
          </MagneticButton>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-10 flex items-center gap-3"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all hover:-translate-y-0.5"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-white/10">
            <motion.span
              className="absolute left-0 top-0 h-3 w-px bg-accent-400"
              animate={{ y: [0, 28, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
