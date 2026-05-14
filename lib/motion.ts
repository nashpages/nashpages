// Animation tokens compartilhados — usar em todo Framer Motion do projeto.
// Mantém consistência editorial: easings e durações idênticos em toda animação.

export const EASE = {
  outExpo: [0.32, 0.72, 0, 1] as const,
  outCubic: [0.16, 1, 0.3, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
} as const;

export const DURATION = {
  fast: 0.22,
  base: 0.32,
  slow: 0.48,
  reveal: 0.6,
} as const;

// Variants reutilizáveis pra reveal-on-scroll
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE.outExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE.outCubic },
  },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay },
  },
});
