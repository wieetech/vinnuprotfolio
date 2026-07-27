import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS, TESTIMONIALS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Milestones worth <span className="gradient-text">marking</span>.
            </>
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl glass p-5 card-hover"
              >
                <CheckCircle2 className="h-5 w-5 text-accent-400 shrink-0" />
                <span className="text-sm text-slate-200">{a}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36 noise">
      <div className="absolute inset-0 bg-aurora opacity-25" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What collaborators <span className="gradient-text">say</span>.
            </>
          }
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -6 }}
                className="relative h-full rounded-3xl glass-strong p-6 card-hover"
              >
                <span className="font-display text-5xl leading-none text-accent-500/40">“</span>
                <blockquote className="-mt-4 text-sm leading-relaxed text-slate-200">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-violet-500 text-sm font-semibold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
