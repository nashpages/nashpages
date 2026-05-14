type Pacote = {
  num: string;
  name: string;
  price: string;
  time: string;
  ideal: string;
  deliverables: string[];
  dark?: boolean;
};

const pacotes: Pacote[] = [
  {
    num: "§ 03.1",
    name: "Express",
    price: "R$ 1.500",
    time: "5 DIAS",
    ideal: "Negócio local que precisa sair do zero rápido.",
    deliverables: [
      "1 página single-scroll",
      "Template Framer adaptado",
      "1 rodada de revisão",
      "Domínio + form de contato",
    ],
  },
  {
    num: "§ 03.2",
    name: "Essencial",
    price: "R$ 2.800 — 3.500",
    time: "10 A 14 DIAS",
    ideal: "Autônomo ou marca com identidade própria.",
    deliverables: [
      "1 página design original",
      "Framer custom",
      "2 rodadas de revisão",
      "SEO base + analytics",
    ],
  },
  {
    num: "§ 03.3",
    name: "Premium",
    price: "R$ 6.500 — 9.000",
    time: "3 A 4 SEMANAS",
    ideal: "Clínica, B2B ou marca que precisa de site real.",
    deliverables: [
      "Site institucional 4-6 páginas",
      "Next.js + Vercel + CMS",
      "Identidade visual aplicada",
      "Animações + SEO completo",
      "3 rodadas de revisão",
    ],
    dark: true,
  },
];

export function Pacotes() {
  return (
    <section
      id="pacotes"
      className="border-b border-light-hair bg-papel text-tinta"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        {/* Eyebrow */}
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
          § 03  /  PACOTES
        </p>

        {/* Title */}
        <h2 className="mt-6 font-sans text-[44px] font-semibold tracking-[-0.03em] leading-[0.98] text-tinta md:mt-10 md:text-[88px]">
          Três pacotes.
        </h2>

        {/* Sub */}
        <p className="mt-6 max-w-2xl text-base leading-[1.5] text-n1 md:text-lg">
          Stack escolhida pelo projeto, não pelo preço. Express adapta template
          pra negócio local. Essencial é design original. Premium é site
          institucional codado do zero.
        </p>

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-4 md:mt-16 md:grid md:grid-cols-3 md:gap-6">
          {pacotes.map((p) => (
            <PacoteCard key={p.name} pacote={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PacoteCard({ pacote }: { pacote: Pacote }) {
  const isDark = pacote.dark;
  const cardBg = isDark ? "bg-tinta text-papel" : "bg-papel text-tinta border border-tinta";
  const subColor = isDark ? "text-dark-sub" : "text-n1";
  const hairColor = isDark ? "border-dark-hair" : "border-light-hair";
  const ctaBg = isDark
    ? "bg-papel text-tinta hover:bg-papel/90"
    : "bg-tinta text-papel hover:bg-tinta/90";

  return (
    <div className={`flex flex-col gap-6 rounded-sm p-6 md:p-8 ${cardBg}`}>
      {/* Top: num + time */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-[0.06em] text-bordo">
          {pacote.num}
        </span>
        <span className={`font-mono text-[10px] tracking-[0.06em] ${subColor}`}>
          {pacote.time}
        </span>
      </div>

      {/* Name + price */}
      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-3xl font-semibold tracking-[-0.02em] leading-none">
          {pacote.name}
        </h3>
        <p className="font-mono text-sm text-bordo">{pacote.price}</p>
      </div>

      {/* Hair */}
      <div className={`h-px w-full border-t ${hairColor}`} />

      {/* Ideal */}
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-bordo">
          IDEAL PARA
        </p>
        <p className="mt-2 text-sm leading-[1.5]">{pacote.ideal}</p>
      </div>

      {/* Deliverables */}
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-bordo">
          ENTREGÁVEIS
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {pacote.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-sm">
              <span className="font-medium text-bordo">/</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="#contato"
        className={`mt-auto inline-flex items-center justify-center rounded-sm px-4 py-3 font-sans text-sm font-medium transition-colors ${ctaBg}`}
      >
        Pedir orçamento  →
      </a>
    </div>
  );
}
