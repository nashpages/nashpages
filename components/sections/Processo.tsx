import { Reveal } from "@/components/Reveal";

type Step = {
  num: string;
  duration: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    num: "§ 04.1",
    duration: "30-60 MIN",
    title: "Briefing.",
    body: "Call de descoberta. Entendemos o cliente, objetivo, referências visuais, escopo realista. Saída: proposta em PDF em 24 a 48h.",
  },
  {
    num: "§ 04.2",
    duration: "3 A 14 DIAS",
    title: "Design.",
    body: "Wireframe → high-fidelity no Figma. Você aprova cada section por escrito antes de eu começar a codar. Sem retrabalho, sem 'volta tudo'.",
  },
  {
    num: "§ 04.3",
    duration: "5 A 21 DIAS",
    title: "Build.",
    body: "Construção no Framer (Express/Essencial) ou Next.js (Premium). Staging URL desde o dia 1 — você acompanha o site nascendo.",
  },
  {
    num: "§ 04.4",
    duration: "2 A 7 DIAS",
    title: "Revisão.",
    body: "1 a 3 rodadas inclusas (varia por pacote). Tudo registrado por escrito. Mudança de escopo é orçamento à parte, e isso é declarado no contrato.",
  },
  {
    num: "§ 04.5",
    duration: "1 DIA",
    title: "Entrega.",
    body: "Domínio configurado em nome do cliente. Training de 30 a 60 min pra gerenciar conteúdo. Suporte de 30-60 dias incluso pós-entrega.",
  },
];

export function Processo() {
  return (
    <section id="processo" className="border-b border-dark-hair bg-tinta">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo-light md:text-[11px]">
            § 04  /  WORKFLOW
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-[44px] font-semibold tracking-[-0.03em] leading-[0.98] text-papel md:mt-10 md:text-[88px]">
            Como trabalhamos.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-[1.5] text-dark-sub md:text-lg">
            Sem mistério, sem promessa milagrosa. Cada etapa tem entregável
            claro e duração definida. Você nunca fica sem saber em que pé está.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={0.05 * i}>
              <div className="flex flex-col gap-4">
                <div className="h-px w-full border-t border-dark-hair" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.06em] text-bordo-light">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.06em] text-dark-sub">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-sans text-3xl font-semibold tracking-[-0.02em] leading-none text-papel md:text-5xl">
                  {step.title}
                </h3>

                <p className="max-w-3xl text-sm leading-[1.6] text-dark-sub md:text-base">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
