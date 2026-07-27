import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The tools I use to <span className="gradient-text">ship products</span>.
            </>
          }
          description="A focused stack across frontend, backend, data, cloud, IoT, APIs, and AI - chosen for reliability and speed."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <TiltCard className="h-full rounded-2xl glass p-6 card-hover" intensity={6}>
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${group.accent} text-white shadow-lg`}
                  >
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.04 }}
                      whileHover={{ y: -2 }}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-200 transition-colors hover:border-accent-500/40 hover:bg-accent-500/[0.08]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
