import { motion } from 'framer-motion';
import { Sparkles, Target } from 'lucide-react';
import { PROFILE, STATS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';
import { useCountUp } from '@/hooks/usePortfolio';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  const display = value >= 1000 ? Math.round(v / 100) / 10 + 'K' : Math.round(v * 10) / 10;
  return (
    <div className="relative rounded-2xl glass p-5 card-hover">
      <div className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
        <span ref={ref}>
          {display}
          {suffix}
        </span>
      </div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Who I am, and why I build <span className="gradient-text">intelligent things</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Image */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-accent-500/40 via-cyan-400/30 to-violet-500/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-strong">
                <img
                  src="/vinnu.png"
                  alt="Vinuthna Kumar Sallapudi"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-lg font-semibold text-white">{PROFILE.name}</div>
                  <div className="text-xs text-slate-300">{PROFILE.title}</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 grid h-14 w-14 place-items-center rounded-2xl glass-strong"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-6 w-6 text-accent-400" />
              </motion.div>
            </div>
          </Reveal>

          {/* Story */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-slate-300">{PROFILE.intro}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl glass p-5">
                  <h3 className="font-display text-sm font-semibold text-white">Why AI</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Intelligence is the new infrastructure. I build systems that learn, adapt, and
                    remove friction from people's work.
                  </p>
                </div>
                <div className="rounded-2xl glass p-5">
                  <h3 className="font-display text-sm font-semibold text-white">Why IoT</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    The physical world is the last mile of software. Connecting sensors to the cloud
                    turns data into decisions.
                  </p>
                </div>
                <div className="rounded-2xl glass p-5">
                  <h3 className="font-display text-sm font-semibold text-white">Why Software</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Well-crafted software compounds. I care about architecture, performance, and the
                    details users feel but never see.
                  </p>
                </div>
                <div className="rounded-2xl glass p-5">
                  <h3 className="font-display text-sm font-semibold text-white">Future Vision</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    AI agents, invisible assistants, and smart connected products - the kind of
                    systems I enjoy building for ambitious teams.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex items-start gap-3 rounded-2xl border border-accent-500/20 bg-accent-500/[0.06] p-5">
                <Target className="mt-0.5 h-5 w-5 text-accent-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-accent-400/80">
                    Current Goal
                  </div>
                  <p className="mt-1 text-sm text-slate-200">{PROFILE.goal}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {STATS.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
