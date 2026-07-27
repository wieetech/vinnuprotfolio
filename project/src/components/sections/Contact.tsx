import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { CONTACT_METHODS, PROFILE, SOCIALS } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui/Reveal';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

type FormValues = { name: string; email: string; message: string };

const WHATSAPP_NUMBER = PROFILE.phone.replace(/\D/g, '');

function buildWhatsAppMessage(values: FormValues) {
  return [
    'New portfolio enquiry',
    '',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    '',
    'Message:',
    values.message,
  ].join('\n');
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [visitors, setVisitors] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    (async () => {
      if (!supabase) {
        setVisitors(null);
        return;
      }

      try {
        const { data: current } = await supabase.from('visitors').select('count').eq('id', 1).maybeSingle();
        const next = (current?.count ?? 0) + 1;
        await supabase.from('visitors').update({ count: next }).eq('id', 1);
        setVisitors(next);
      } catch {
        setVisitors(null);
      }
    })();
  }, []);

  const onSubmit = async (values: FormValues) => {
    setStatus('sending');

    try {
      if (supabase) {
        const { error } = await supabase.from('contact_messages').insert({
          name: values.name,
          email: values.email,
          message: values.message,
        });

        if (error) throw error;
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(values))}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setStatus('sent');
      reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36 noise">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-[140px]" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="gradient-text">intelligent</span>.
            </>
          }
          description="Open to enterprise work, AI products, IoT collaborations, and freelance product development."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl glass-strong space-y-5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.05]"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                    })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.05]"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.05]"
                  placeholder="Tell me about your project, role, or idea..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
                )}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-slate-400">
                When someone submits this form, their details open in WhatsApp for sending to{' '}
                {PROFILE.phone}
                {isSupabaseConfigured ? ' and are saved securely.' : '.'}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4" /> Message saved and WhatsApp opened for direct
                  sending.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
                >
                  <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="rounded-3xl glass p-6">
                <h3 className="font-display text-sm font-semibold text-white">Reach me directly</h3>
                <div className="mt-4 space-y-3">
                  {CONTACT_METHODS.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.04] text-accent-300">
                        <method.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                          {method.label}
                        </div>
                        <div className="text-sm text-slate-200">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl glass p-6">
                <h3 className="font-display text-sm font-semibold text-white">Find me online</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-center justify-between rounded-3xl border border-accent-500/20 bg-accent-500/[0.06] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 text-white">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-accent-300">
                      Visitors
                    </div>
                    <div className="font-display text-xl font-semibold text-white">
                      {visitors !== null ? visitors.toLocaleString() : '-'}
                    </div>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-400">{PROFILE.website}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
