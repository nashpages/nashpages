import { Reveal } from "@/components/Reveal";

const paragraphs = [
  "O foco é trabalhar com profissionais e marcas que querem um site que parece premium — não um template apertado num molde alheio.",
  "Cada projeto começa com escopo claro, cronograma definido e atendimento direto. Sem intermediários, sem reunião de aprovação interna, sem retrabalho silencioso.",
  "O catálogo cobre três níveis de ambição: Express pra negócio local sair do zero, Essencial pra autônomo com identidade, Premium pra clínica e B2B que precisam de site real.",
  "Stack escolhida pelo projeto. Framer quando faz sentido, Next.js quando precisa de mais.",
];

const marginalia = [
  { label: "PRINCÍPIOS", value: "Honestidade, foco" },
  { label: "ENTREGA", value: "Framer · Next.js" },
  { label: "PAGAMENTO", value: "50% / 50% PIX" },
  { label: "STACK", value: "Figma · Vercel" },
  { label: "DISPONIBILIDADE", value: "Sob agendamento" },
  { label: "ATENDIMENTO", value: "Direto" },
];

export function Sobre() {
  return (
    <section
      id="sobre"
      className="border-b border-light-hair bg-papel text-tinta"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
            § 05  /  SOBRE
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-[44px] font-semibold tracking-[-0.03em] leading-[0.98] text-tinta md:mt-10 md:text-[88px]">
            Sobre a empresa.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-16">
          <Reveal delay={0.16} className="md:col-span-8">
            <p className="font-sans text-xl leading-[1.4] text-tinta md:text-[28px]">
              Nashpages é uma empresa de design e desenvolvimento de sites
              editoriais.
            </p>
            <div className="mt-8 flex flex-col gap-5 md:mt-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[1.7] text-n1 md:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24} className="md:col-span-4">
            <div className="h-px w-full border-t border-light-hair md:hidden" />
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-0 md:grid-cols-1 md:gap-y-8">
              {marginalia.map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-bordo">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-tinta">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
