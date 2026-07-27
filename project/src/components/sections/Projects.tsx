import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Search, X } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

const ProjectCard = forwardRef<HTMLElement, { project: Project; onOpen: (p: Project) => void }>(
  ({ project, onOpen }, ref) => {
    return (
      <motion.article
        ref={ref}
        layout
        whileHover={{ y: -6 }}
        className="group relative overflow-hidden rounded-3xl glass card-hover"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl glass-strong text-accent-300">
              <project.icon className="h-4 w-4" />
            </span>
            <span className="rounded-full glass px-3 py-1 text-[11px] font-mono text-slate-300">
              {project.category}
            </span>
          </div>
          <button
            onClick={() => onOpen(project)}
            className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full glass-strong text-white opacity-0 transition-opacity group-hover:opacity-100"
            aria-label="View details"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((stackItem) => (
              <span
                key={stackItem}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-slate-300"
              >
                {stackItem}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-slate-300 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-slate-300 transition-colors hover:text-white"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.docs && (
              <a
                href={project.docs}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-slate-300 transition-colors hover:text-white"
                aria-label="Documentation"
              >
                <BookOpen className="h-4 w-4" />
              </a>
            )}
            <button
              onClick={() => onOpen(project)}
              className="ml-auto text-xs font-medium text-accent-300 transition-colors hover:text-accent-200"
            >
              Details -&gt;
            </button>
          </div>
        </div>
      </motion.article>
    );
  },
);

ProjectCard.displayName = 'ProjectCard';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl glass-strong p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 text-white">
            <project.icon className="h-5 w-5" />
          </span>
          <div>
            <div className="text-xs font-mono text-accent-300">{project.category}</div>
            <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl">
          <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
        </div>

        <p className="mt-5 leading-relaxed text-slate-300">{project.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl glass p-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent-400">Features</h4>
            <ul className="mt-2 space-y-1.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl glass p-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent-400">Stack</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((stackItem) => (
                <span
                  key={stackItem}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-200"
                >
                  {stackItem}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl glass p-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent-400">Architecture</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.architecture}</p>
          </div>
          <div className="rounded-2xl glass p-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent-400">Challenge</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.challenge}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-accent-500/20 bg-accent-500/[0.06] p-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-accent-400">Achievements</h4>
          <ul className="mt-2 space-y-1.5">
            {project.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2 text-sm text-slate-200">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost !text-xs">
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost !text-xs">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
          {project.docs && (
            <a href={project.docs} target="_blank" rel="noreferrer" className="btn-ghost !text-xs">
              <BookOpen className="h-4 w-4" /> Documentation
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [query, setQuery] = useState('');

  const filtered = PROJECTS.filter(
    (project) =>
      !query.trim() ||
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.stack.join(' ').toLowerCase().includes(query.toLowerCase()) ||
      project.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Things I've <span className="gradient-text">designed, built & shipped</span>.
            </>
          }
          description="Enterprise platforms, IoT systems, and AI products - each solved a real problem end to end."
        />

        <Reveal delay={0.2}>
          <div className="mt-10 flex max-w-md items-center gap-3 rounded-full glass px-4 py-2.5">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, category..."
              className="flex-1 bg-transparent text-sm text-white caret-white placeholder:text-slate-500 outline-none"
            />
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-sm text-slate-500">No projects match your search.</div>
        )}
      </div>

      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
