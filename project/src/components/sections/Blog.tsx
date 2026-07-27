import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

export function Blog() {
  return (
    <section id="blog" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Blog"
          title={
            <>
              Notes on <span className="gradient-text">building & shipping</span>.
            </>
          }
          description="A space for technical articles on AI, backend architecture, and IoT. New posts coming soon."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl glass card-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-mono text-accent-300">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent-300">
                    Read soon <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
