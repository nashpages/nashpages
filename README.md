# Nashpages

Site institucional da Nashpages — empresa de design e desenvolvimento de sites editoriais.

## Stack

- Next.js 16 · App Router · TypeScript
- Tailwind CSS v4
- Framer Motion · Lenis (smooth scroll)
- Geist + Geist Mono via `next/font`

## Comandos

```bash
npm run dev     # localhost:3000
npm run build   # build production
npm run start   # serve build
npm run lint    # eslint
```

## Estrutura

```
app/          rotas
lib/          utils + animation tokens
components/   componentes reutilizáveis
public/       assets
```

## Design tokens

Definidos em `app/globals.css` via `@theme` (Tailwind v4). Paleta: tinta, papel, n1, n2, bordo, dark-sub, dark-hair, light-hair. Easings: `--ease-out-expo` é o canônico.
