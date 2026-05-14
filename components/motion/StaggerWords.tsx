"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

type Props = {
  text: string;
  /** Delay base antes da primeira palavra começar (segundos). */
  delayStart?: number;
  /** Delay incremental por palavra (segundos). Default 0.05 desktop / 0.03 mobile. */
  stagger?: number;
  className?: string;
};

const EASE = [0.32, 0.72, 0, 1] as const;

// Renderiza um texto onde cada palavra entra individualmente com fade + slide-up.
// Mobile usa stagger menor (mais rápido) pra title não demorar pra resolver na tela pequena.
export function StaggerWords({
  text,
  delayStart = 0,
  stagger,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  const actualStagger = stagger ?? (isMobile ? 0.03 : 0.05);
  const slideY = isMobile ? 10 : 16;
  const duration = isMobile ? 0.45 : 0.6;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <motion.span
            initial={{ opacity: 0, y: slideY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{
              duration,
              delay: delayStart + i * actualStagger,
              ease: EASE,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
