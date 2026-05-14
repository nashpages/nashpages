import { Logo } from "../Logo";

const principles = [
  "Stack escolhida pelo projeto.",
  "Atendimento direto, sem agência.",
  "Section aprovada por escrito.",
  "Cronograma fixo em contrato.",
];

export function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-dark-hair bg-tinta">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
            § 02  /  MANIFESTO
          </p>

          {/* Big logo */}
          <div className="mt-12 md:mt-20">
            <span className="md:hidden">
              <Logo size={56} />
            </span>
            <span className="hidden md:inline-block lg:hidden">
              <Logo size={120} />
            </span>
            <span className="hidden lg:inline-block">
              <Logo size={200} />
            </span>
          </div>

          {/* Principles */}
          <ul className="mt-12 flex flex-col gap-4 md:mt-16 md:gap-6">
            {principles.map((p) => (
              <li
                key={p}
                className="flex items-baseline gap-3 text-left md:gap-4"
              >
                <span className="font-sans text-xl font-medium text-bordo md:text-2xl">
                  /
                </span>
                <span className="font-sans text-base text-papel md:text-xl">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          {/* Caption */}
          <p className="mt-16 font-mono text-[10px] tracking-[0.04em] text-dark-sub md:mt-24">
            — quatro princípios. sem exceção.
          </p>
        </div>
      </div>
    </section>
  );
}
