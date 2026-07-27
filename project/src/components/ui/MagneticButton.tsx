import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** A button that subtly attracts toward the cursor when hovered. */
export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  onClick,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: boolean | string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.div>
  );

  if (as === 'a') {
    return (
      <a href={href} className={className} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
