"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

// Marquee horizontal infinito. Texto duplicado e animado de 0 -> -50% pra criar loop seamless.
// Speed em segundos (duração de uma metade). Mobile usa speed * 1.5 (mais lento, menos cansativo).
export function Marquee({
  text,
  speed = 40,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduce) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <div className="whitespace-nowrap">{text}</div>
      </div>
    );
  }

  const actualSpeed = isMobile ? speed * 1.5 : speed;

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: actualSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="shrink-0">{text}</span>
        <span className="shrink-0" aria-hidden>
          {text}
        </span>
      </motion.div>
    </div>
  );
}
