"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

const items: FaqItem[] = [
  {
    q: "E se eu não gostar do design?",
    a: "Cada pacote inclui rodadas de revisão (1 no Express, 2 no Essencial, 3 no Premium). O cliente aprova cada section por escrito antes de eu começar a codar — retrabalho não acontece. Cláusula no contrato.",
  },
  {
    q: "Quanto tempo até o site no ar?",
    a: "Express: 5 dias úteis. Essencial: 10 a 14 dias. Premium: 3 a 4 semanas. O prazo conta a partir da assinatura do contrato e do pagamento de 50% — não do dia da proposta.",
  },
  {
    q: "Quem cuida do domínio e da hospedagem?",
    a: "O cliente. Domínio é cadastrado em nome dele, no cartão dele. Acompanhamos o setup (Registro.br + Vercel/Framer leva ~30 min). Hospedagem nunca em nosso nome — o cliente nunca fica refém.",
  },
  {
    q: "Vocês entregam os arquivos do design?",
    a: "Sim, todos. Após pagamento integral, o cliente recebe acesso ao Figma como copy as páginas e componentes, repositório no GitHub (se Next.js) ou workspace Framer, e os exports SVG/PNG das peças.",
  },
  {
    q: "Tem manutenção depois?",
    a: "30 dias inclusos (Express/Essencial) ou 60 dias (Premium) pra correção de bugs e ajustes finais. Manutenção mensal a R$ 250-400 (1 mudança simples + monitoramento).",
  },
  {
    q: "Aceita pagamento parcelado?",
    a: "PIX/TED em 2x (50% início + 50% antes da publicação) é padrão. Premium aceitamos em até 3x sem juros via PIX. Não trabalhamos com cartão — a taxa de 4-5% mata a margem em projetos pequenos.",
  },
];

export function FAQ() {
  // Default state: all closed on mobile, todos abertos no desktop pra leitura imediata.
  // Animação de transição entra na Etapa 4 — por enquanto só toggle visual.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-dark-hair bg-tinta">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        {/* Eyebrow */}
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
          § 06  /  DÚVIDAS COMUNS
        </p>

        {/* Title */}
        <h2 className="mt-6 font-sans text-[44px] font-semibold tracking-[-0.03em] leading-[0.98] text-papel md:mt-10 md:text-[88px]">
          Antes de você perguntar.
        </h2>

        {/* List */}
        <ul className="mt-12 md:mt-16">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q} className="border-t border-dark-hair">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-6 text-left md:py-8"
                >
                  <span className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="font-mono text-[10px] tracking-[0.06em] text-bordo md:w-16">
                      § 06.{i + 1}
                    </span>
                    <span className="font-sans text-base font-semibold leading-[1.3] text-papel md:text-xl">
                      {item.q}
                    </span>
                  </span>
                  <span className="mt-0.5 shrink-0 font-sans text-2xl font-medium text-dark-sub md:text-3xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 md:pb-8 md:pl-[5.5rem]">
                    <p className="max-w-3xl text-sm leading-[1.6] text-dark-sub md:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
          <li className="border-t border-dark-hair" />
        </ul>
      </div>
    </section>
  );
}
