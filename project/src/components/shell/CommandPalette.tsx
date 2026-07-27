import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { COMMAND_ACTIONS } from '@/data/portfolio';

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMAND_ACTIONS;
    return COMMAND_ACTIONS.filter((action) => action.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      setActive(0);
      return;
    }
    setActive(0);
  }, [open, query]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((index) => Math.min(index + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((index) => Math.max(index - 1, 0));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const action = results[active];
        if (action) {
          document.querySelector(action.href)?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (target && panelRef.current && !panelRef.current.contains(target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open, results, active, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed inset-x-0 top-24 z-[90] flex justify-center px-4"
        >
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto w-full max-w-xl overflow-hidden rounded-2xl glass-strong shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, or pages..."
                className="flex-1 bg-transparent text-sm text-white caret-white placeholder:text-slate-500 outline-none"
              />
              <button
                onClick={onClose}
                className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 transition-colors hover:text-white"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[45vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <div className="px-3 py-8 text-center text-sm text-slate-500">No results.</div>
              )}

              {results.map((action, i) => (
                <button
                  key={action.href}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    document.querySelector(action.href)?.scrollIntoView({ behavior: 'smooth' });
                    onClose();
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    i === active ? 'bg-white/[0.06] text-white' : 'text-slate-300'
                  }`}
                >
                  <action.icon className="h-4 w-4 text-accent-400" />
                  <span className="flex-1 text-sm">{action.label}</span>
                  {i === active && <CornerDownLeft className="h-3.5 w-3.5 text-slate-500" />}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[10px] text-slate-500">
              <span className="flex items-center gap-1">
                <ArrowUp className="h-3 w-3" />
                <ArrowDown className="h-3 w-3" /> navigate
              </span>
              <span>Click anywhere outside to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
