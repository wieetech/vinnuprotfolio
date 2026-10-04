import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

const PROJECT_GROUPS = [
  {
    key: 'company' as const,
    title: 'Company Projects',
    description: 'Products and platforms built as part of my work at IKRGY Infotech Pvt. Ltd.',
  },
  {
    key: 'freelance' as const,
    title: 'Freelancing Projects',
    description: 'Solutions delivered for clients and real-world business requirements.',
  },
  {
    key: 'personal' as const,
    title: 'Personal Projects',
    description: 'Independent experiments and products built to explore new ideas and technologies.',
  },
];

function projectUrl(project: Project) {
  return project.demo ?? project.github ?? '#';
}

function projectLinkLabel(project: Project) {
  return project.demo ? 'Open live site' : 'View on GitHub';
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={projectUrl(project)}
      target="_blank"
      rel="noreferrer"
      layout
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-3xl glass card-hover"
      aria-label={`${projectLinkLabel(project)}: ${project.title}`}
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

        <div className="mt-5 flex items-center gap-2 text-xs font-medium text-accent-300 transition-colors group-hover:text-accent-200">
          {project.demo ? <ExternalLink className="h-4 w-4" /> : <Github className="h-4 w-4" />}
          {projectLinkLabel(project)}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
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
          eyebrow="Projects"
          title={
            <>
              Things I've <span className="gradient-text">designed, built & shipped</span>.
            </>
          }
          description="A selection of company products, freelance solutions, and personal projects built across AI, enterprise software, and IoT."
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

        <div className="mt-10 space-y-16">
          {PROJECT_GROUPS.map((group) => {
            const projects = filtered.filter((project) => project.group === group.key);
            if (projects.length === 0) return null;

            return (
              <div key={group.key}>
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{group.description}</p>
                </div>
                <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-sm text-slate-500">No projects match your search.</div>
        )}
      </div>
    </section>
  );
}
