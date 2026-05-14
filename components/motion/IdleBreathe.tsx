"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

// Wrapper que aplica um respiro idle infinito (scale 1 -> 1.02 -> 1, ~4s).
// Desligado em mobile pra preservar bateria.
// Desligado em reduced-motion.
export function IdleBreathe({
  children,
  duration = 4,
  scaleTo = 1.02,
}: {
  children: ReactNode;
  duration?: number;
  scaleTo?: number;
}) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduce || isMobile) return <>{children}</>;

  return (
    <motion.div
      className="inline-block"
      animate={{ scale: [1, scaleTo, 1] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
