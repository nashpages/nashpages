"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Lift sutil no hover (desktop) + scale-down no tap (mobile touch feedback).
// Aplicar em cards, botões editoriais.
export function HoverLift({
  children,
  y = -4,
  className,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
