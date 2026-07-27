import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Custom cursor: a dot that follows instantly + a ring that lags + a spotlight glow. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [typing, setTyping] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });
  const glowX = useSpring(x, { stiffness: 80, damping: 25 });
  const glowY = useSpring(y, { stiffness: 80, damping: 25 });
  const raf = useRef(0);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [data-cursor="hover"], input, textarea, select'));
      setTyping(!!t.closest('input, textarea, [contenteditable="true"]'));
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('custom-cursor-active');
      cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[120] h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed z-[120] rounded-full border border-white/40 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: typing ? 18 : hovering ? 44 : 28,
          height: typing ? 32 : hovering ? 44 : 28,
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
      <motion.div
        className="pointer-events-none fixed z-[110] h-[420px] w-[420px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(139,92,246,0.06) 35%, transparent 70%)',
        }}
      />
    </>
  );
}
