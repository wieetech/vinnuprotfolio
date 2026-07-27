import { motion } from 'framer-motion';
import { CERTIFICATIONS, INTERNSHIPS, EDUCATION } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Verified <span className="gradient-text">credentials</span>.
            </>
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <TiltCard className="h-full rounded-2xl glass p-6 card-hover" intensity={8}>
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500/20 to-violet-500/20 text-accent-300">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Certified
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Internships() {
  return (
    <section id="internships" className="relative py-28 sm:py-36 noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Internships"
          title={
            <>
              Hands-on <span className="gradient-text">learning tracks</span>.
            </>
          }
        />
        <div className="mt-14 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="space-y-6">
            {INTERNSHIPS.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.1}>
                <div className="relative pl-14">
                  <span className="absolute left-4 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full glass-strong ring-1 ring-accent-500/40">
                    <it.icon className="h-3.5 w-3.5 text-accent-400" />
                  </span>
                  <motion.div whileHover={{ x: 4 }} className="rounded-2xl glass p-5 card-hover">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-white">{it.title}</h3>
                      <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-mono text-accent-300">
                        {it.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{it.org}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="gradient-text">foundation</span>.
            </>
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="h-full rounded-2xl glass p-6 card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 text-white">
                  <e.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{e.degree}</h3>
                <p className="mt-1 text-sm text-slate-400">{e.institution}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-mono text-accent-300">
                  {e.score}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
