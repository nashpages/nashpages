"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  /** Delay base antes da primeira palavra começar (segundos). */
  delayStart?: number;
  /** Delay incremental por palavra (segundos). Default 0.05. */
  stagger?: number;
  className?: string;
};

const EASE = [0.32, 0.72, 0, 1] as const;

// Renderiza um texto onde cada palavra entra individualmente com fade + slide-up.
// Mantém wrap normal entre palavras (espaço regular preservado), só anima cada token.
export function StaggerWords({
  text,
  delayStart = 0,
  stagger = 0.05,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{
              duration: 0.6,
              delay: delayStart + i * stagger,
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
