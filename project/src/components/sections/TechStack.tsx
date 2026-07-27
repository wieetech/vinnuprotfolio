import { motion } from 'framer-motion';
import { TECH_ORBITS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

export function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] opacity-20" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              The full <span className="gradient-text">orbit</span> of what I build with.
            </>
          }
          description="Languages, frameworks, databases, APIs, and IoT working together around the products I ship."
          align="center"
        />

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-16 grid h-[720px] w-full max-w-3xl place-items-center">
            <div className="absolute left-1/2 top-1/2 z-10 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-accent-500 via-cyan-400 to-violet-500 text-center shadow-2xl shadow-accent-500/40">
              <div>
                <div className="font-display text-xs font-semibold text-white">VINNU</div>
                <div className="font-mono text-[9px] text-white/70">CORE</div>
              </div>
            </div>

            {TECH_ORBITS.map((ring) => (
              <div
                key={ring.label}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
                style={{ width: ring.radius * 2, height: ring.radius * 2 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: ring.reverse ? -360 : 360 }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                >
                  {ring.items.map((item, i) => {
                    const angle = (i / ring.items.length) * Math.PI * 2;
                    const x = Math.cos(angle) * ring.radius;
                    const y = Math.sin(angle) * ring.radius;

                    return (
                      <div
                        key={item}
                        className="absolute left-1/2 top-1/2"
                        style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                      >
                        <motion.div
                          animate={{ rotate: ring.reverse ? 360 : -360 }}
                          transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                          className="flex items-center gap-2 whitespace-nowrap rounded-full glass-strong px-3 py-1.5 text-xs text-slate-100"
                        >
                          <ring.icon className="h-3 w-3 text-accent-400" />
                          {item}
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink-900 px-2 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                  {ring.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
