import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, Check, Clock, Link2 } from 'lucide-react';
import { BLOG_POSTS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';

type BlogPost = (typeof BLOG_POSTS)[number];

function postSlugFromHash() {
  const prefix = '#blog/';
  return window.location.hash.startsWith(prefix) ? window.location.hash.slice(prefix.length) : null;
}

function BlogArticle({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    const link = `${window.location.origin}${window.location.pathname}#blog/${post.slug}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="blog" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <button
          onClick={onBack}
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </button>

        <article className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent-300">
            <span>{post.tag}</span>
            <span className="text-slate-600">/</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{post.excerpt}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            <button
              onClick={copyLink}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-slate-300 transition-colors hover:border-accent-500/50 hover:text-white"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
              {copied ? 'Link copied' : 'Copy article link'}
            </button>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl glass-strong">
            <img src={post.image} alt={post.title} className="h-64 w-full object-cover sm:h-96" />
          </div>

          <div className="mt-10 space-y-6 text-base leading-8 text-slate-300">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function Blog() {
  const [activeSlug, setActiveSlug] = useState<string | null>(() => postSlugFromHash());
  const activePost = BLOG_POSTS.find((post) => post.slug === activeSlug);

  useEffect(() => {
    const onHashChange = () => setActiveSlug(postSlugFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const openPost = (post: BlogPost) => {
    window.history.pushState(null, '', `#blog/${post.slug}`);
    setActiveSlug(post.slug);
    document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const closePost = () => {
    window.history.pushState(null, '', '#blog');
    setActiveSlug(null);
  };

  if (activePost) return <BlogArticle post={activePost} onBack={closePost} />;

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
          description="Ideas from building AI products, collaborating with companies, and launching useful software."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <motion.button
                type="button"
                onClick={() => openPost(post)}
                whileHover={{ y: -6 }}
                className="group relative h-full w-full overflow-hidden rounded-3xl text-left glass card-hover"
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
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent-300">
                    Read article <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
