import { Logo } from "./Logo";
import { Marquee } from "./motion/Marquee";

type ColItem = { label: string; href?: string };
type Col = { title: string; items: ColItem[] };

const cols: Col[] = [
  {
    title: "PROJETOS",
    items: [
      { label: "Express  /  R$ 1.500", href: "#pacotes" },
      { label: "Essencial  /  R$ 2.800 — 3.500", href: "#pacotes" },
      { label: "Premium  /  R$ 6.500 — 9.000", href: "#pacotes" },
    ],
  },
  {
    title: "CONTATO",
    items: [
      { label: "(11) 9XXXX-XXXX", href: "#contato" },
      {
        label: "contato@nashpages.com.br",
        href: "mailto:contato@nashpages.com.br",
      },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { label: "CNPJ XX.XXX.XXX/0001-XX" },
      { label: "© 2026 Nashpages" },
    ],
  },
];

const marqueeText =
  "DESIGN EDITORIAL  ·  CÓDIGO LIMPO  ·  ATENDIMENTO DIRETO  ·  STACK ESCOLHIDA PELO PROJETO  ·  ";

export function Footer() {
  return (
    <footer className="border-t border-dark-hair bg-tinta" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      {/* Marquee infinito (linear, 40s/ciclo) — decorativo. */}
      <div aria-hidden="true">
        <Marquee
          text={marqueeText.repeat(2)}
          speed={40}
          className="border-b border-dark-hair py-4 font-mono text-[11px] uppercase tracking-[0.08em] text-dark-sub"
        />
      </div>


      {/* Big logo centered */}
      <div className="flex justify-center px-6 py-12 md:py-20">
        <span className="md:hidden">
          <Logo size={48} />
        </span>
        <span className="hidden md:inline-block">
          <Logo size={140} />
        </span>
      </div>

      {/* Cols */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-12 md:grid md:grid-cols-3 md:gap-12 md:px-20 md:pb-16">
        {cols.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-bordo-light">
              {col.title}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-dark-sub">
              {col.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-papel"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
