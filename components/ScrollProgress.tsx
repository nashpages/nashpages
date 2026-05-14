"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Barra fina bordô fixa no topo. Cresce conforme scroll progride.
// Spring suaviza a barra (sem pular). z-index acima do header sticky.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-px w-full origin-left bg-bordo"
      style={{ scaleX }}
    />
  );
}
