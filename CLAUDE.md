@AGENTS.md

# Nashpages — Next.js implementation

Este é o site institucional da empresa **Nashpages** (nashpages.com.br). Empresa de design e desenvolvimento de sites editoriais.

## Regra crítica de isolamento

Este projeto é **completamente isolado**. NUNCA importar, copiar ou referenciar nada de outros projetos do usuário (especialmente `C:\MEDERM` e `C:\PALINDOR`). Sem packages compartilhados, sem types reaproveitados, sem componentes copiados. Cada decisão deve fazer sentido só pra Nashpages.

## Stack

- **Next.js 16** (App Router, RSC)
- **TypeScript 5**
- **Tailwind CSS v4** (com `@theme` em `app/globals.css`)
- **Framer Motion 12** (animações)
- **Lenis** (smooth scroll)
- **Geist + Geist Mono** via `next/font/google`

## Design tokens (em `app/globals.css`)

Cores: `tinta` (#0E0B0B), `papel` (#EEE8E0), `n1` (#6B6660), `n2` (#C9C2B7), `bordo` (#5B1F2A), `dark-sub` (#9A958E), `dark-hair` (#26221F), `light-hair` (#C9C2B7).

Easings: `--ease-out-expo` (cubic-bezier 0.32, 0.72, 0, 1) é o canônico — usar em toda animação editorial.

## Filosofia de animação

Editorial, contida, com razão. Cada animação revela info, dá feedback ou marca transição. Durações curtas (220-480ms). Só `transform` e `opacity` pra 60fps. `prefers-reduced-motion` sempre respeitado.

Desktop pode ter parallax/cursor effects; mobile deve ser mais sutil/rápido pra preservar bateria.

## Idioma

Tudo em português BR (copy, comentários, nomes de componentes em inglês).

## Estrutura

```
app/          rotas do App Router
lib/          utils.ts, motion.ts (tokens de animação)
components/   componentes reutilizáveis (Logo, NavSticky, Footer, sections)
public/       assets estáticos
```
