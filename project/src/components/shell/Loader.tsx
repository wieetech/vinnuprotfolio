import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINES = [
  '> initializing vinuthna.io',
  '> loading neural modules',
  '> mounting ai subsystems',
  '> connecting iot mesh',
  '> ready.',
];

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [line, setLine] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const dur = 2200;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setProgress(p * 100);
      setLine(Math.min(LINES.length - 1, Math.floor(p * LINES.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setVisible(false), 350);
        setTimeout(onDone, 750);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-aurora opacity-40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="grid grid-cols-3 gap-1.5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="h-2 w-2 rounded-sm bg-accent-500"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                />
              ))}
            </motion.div>
            <div className="font-mono text-xs text-slate-500 h-4">{LINES[line]}</div>
            <div className="h-px w-56 bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-500 via-cyan-400 to-violet-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-[10px] text-slate-600">{Math.round(progress)}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
