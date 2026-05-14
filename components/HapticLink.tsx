"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Padrão de vibração em ms. Default 8ms (tap leve). */
  haptic?: number | number[];
} & AnchorHTMLAttributes<HTMLAnchorElement>;

// Anchor com feedback haptic mobile (Web Vibration API).
// No desktop não tem efeito (browsers desktop não vibram). No iOS, requer interação do usuário primeiro.
// Não bloqueia navegação — só adiciona o pulse antes.
export function HapticLink({
  children,
  haptic = 8,
  onClick,
  ...rest
}: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(haptic);
      } catch {
        // Some browsers throw on user gesture restrictions; ignore.
      }
    }
    onClick?.(e);
  };

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
