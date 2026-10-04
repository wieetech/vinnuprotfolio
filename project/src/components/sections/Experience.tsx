import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] opacity-20 mask-fade-b" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              A timeline of <span className="gradient-text">building & shipping</span>.
            </>
          }
          description="Three-plus years of building AI products, enterprise platforms, APIs, and real-world software at IKRGY Infotech Pvt. Ltd."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col sm:flex-row sm:items-center ${
                    left ? '' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'backOut' }}
                      className="grid h-8 w-8 place-items-center rounded-full glass-strong ring-1 ring-accent-500/40"
                    >
                      <Briefcase className="h-3.5 w-3.5 text-accent-400" />
                    </motion.span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div className={`pl-14 sm:pl-0 sm:w-1/2 ${left ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <Reveal delay={0.1}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-2xl glass p-6 card-hover"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                          <span className="shrink-0 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-mono text-accent-300">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-slate-400">{exp.company}</div>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {exp.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-sm text-slate-300"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
