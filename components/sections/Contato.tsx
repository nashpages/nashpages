"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { HapticLink } from "@/components/HapticLink";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Contato() {
  const reduce = useReducedMotion();

  const beganarTransition = reduce
    ? { duration: 0 }
    : { duration: 0.7, delay: 0.25, ease: EASE };

  return (
    <section id="contato" className="bg-tinta">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo-light md:text-[11px]">
            § 07  /  CONTATO
          </p>
        </Reveal>

        <h2 className="mt-6 font-sans text-[64px] font-semibold tracking-[-0.03em] leading-[0.98] md:mt-10 md:text-[144px]">
          <motion.span
            className="block text-papel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.6, ease: EASE }
            }
          >
            Vamos
          </motion.span>
          <motion.span
            className="block text-bordo-light"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={beganarTransition}
          >
            começar.
          </motion.span>
        </h2>

        <Reveal delay={0.4}>
          <p className="mt-8 max-w-2xl text-base leading-[1.5] text-dark-sub md:mt-12 md:text-lg">
            Call de descoberta gratuita. Proposta em até 48h. Sem compromisso.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col gap-3 md:mt-16 md:flex-row md:gap-4">
            <HapticLink
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Nashpages no WhatsApp (abre em nova aba)"
              haptic={[8, 30, 8]}
              className="flex flex-col items-center justify-center gap-1 rounded-sm bg-bordo px-8 py-6 text-center transition-colors hover:bg-bordo/90 active:scale-[0.98] md:flex-1 md:py-8"
            >
              <span className="font-sans text-lg font-semibold tracking-[-0.01em] text-papel md:text-xl">
                Falar no WhatsApp
              </span>
              <span className="font-mono text-[11px] tracking-[0.04em] text-papel/70">
                (11) 9XXXX-XXXX
              </span>
            </HapticLink>
            <HapticLink
              href="mailto:contato@nashpages.com.br"
              className="flex flex-col items-center justify-center gap-1 rounded-sm border border-dark-hair px-8 py-6 text-center transition-colors hover:border-papel/30 active:scale-[0.98] md:flex-1 md:py-8"
            >
              <span className="font-sans text-sm font-medium text-papel md:text-base">
                Por email
              </span>
              <span className="font-mono text-[11px] tracking-[0.04em] text-dark-sub">
                contato@nashpages.com.br
              </span>
            </HapticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
