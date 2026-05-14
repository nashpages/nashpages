import { Reveal } from "@/components/Reveal";
import { HoverLift } from "@/components/motion/HoverLift";
import { HapticLink } from "@/components/HapticLink";

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
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
            § 03  /  PACOTES
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-[44px] font-semibold tracking-[-0.03em] leading-[0.98] text-tinta md:mt-10 md:text-[88px]">
            Três pacotes.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-[1.5] text-n1 md:text-lg">
            Stack escolhida pelo projeto, não pelo preço. Express adapta
            template pra negócio local. Essencial é design original. Premium é
            site institucional codado do zero.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4 md:mt-16 md:grid md:grid-cols-3 md:gap-6">
          {pacotes.map((p, i) => (
            <Reveal key={p.name} delay={0.24 + i * 0.08}>
              <HoverLift className="h-full">
                <PacoteCard pacote={p} />
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PacoteCard({ pacote }: { pacote: Pacote }) {
  const isDark = pacote.dark;
  const cardBg = isDark
    ? "bg-tinta text-papel"
    : "bg-papel text-tinta border border-tinta";
  const subColor = isDark ? "text-dark-sub" : "text-n1";
  const hairColor = isDark ? "border-dark-hair" : "border-light-hair";
  const ctaBg = isDark
    ? "bg-papel text-tinta hover:bg-papel/90"
    : "bg-tinta text-papel hover:bg-tinta/90";
  // bordô puro só passa contrast em bg-papel. Em bg-tinta (Premium) usa bordo-light.
  const accent = isDark ? "text-bordo-light" : "text-bordo";

  return (
    <div className={`flex h-full flex-col gap-6 rounded-sm p-6 md:p-8 ${cardBg}`}>
      <div className="flex items-center justify-between">
        <span className={`font-mono text-[11px] tracking-[0.06em] ${accent}`}>
          {pacote.num}
        </span>
        <span className={`font-mono text-[10px] tracking-[0.06em] ${subColor}`}>
          {pacote.time}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-3xl font-semibold tracking-[-0.02em] leading-none">
          {pacote.name}
        </h3>
        <p className={`font-mono text-sm ${accent}`}>{pacote.price}</p>
      </div>

      <div className={`h-px w-full border-t ${hairColor}`} />

      <div>
        <p className={`font-mono text-[9px] uppercase tracking-[0.08em] ${accent}`}>
          IDEAL PARA
        </p>
        <p className="mt-2 text-sm leading-[1.5]">{pacote.ideal}</p>
      </div>

      <div>
        <p className={`font-mono text-[9px] uppercase tracking-[0.08em] ${accent}`}>
          ENTREGÁVEIS
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {pacote.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-sm">
              <span aria-hidden="true" className={`font-medium ${accent}`}>
                /
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <HapticLink
        href="#contato"
        className={`mt-auto inline-flex items-center justify-center rounded-sm px-4 py-3 font-sans text-sm font-medium transition-colors active:scale-[0.98] ${ctaBg}`}
      >
        Pedir orçamento  →
      </HapticLink>
    </div>
  );
}
