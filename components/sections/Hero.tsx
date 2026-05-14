const marginalia = [
  { num: "§ 01", label: "CATÁLOGO", value: "Express · Essencial · Premium" },
  { num: "§ 02", label: "PACOTES", value: "R$ 1.500 a R$ 9.000" },
  { num: "§ 03", label: "ENTREGA", value: "5 a 28 dias úteis" },
  { num: "§ 04", label: "ATENDIMENTO", value: "Direto" },
];

export function Hero() {
  return (
    <section className="border-b border-dark-hair bg-tinta">
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-16 md:px-20 md:pb-32 md:pt-24">
        {/* Eyebrow */}
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
          <span className="text-bordo">/</span>
          <span className="ml-3 text-dark-sub">
            EMPRESA  ·  EST. 2026
          </span>
        </p>

        {/* Title */}
        <h1 className="mt-12 font-sans font-semibold tracking-[-0.03em] leading-[0.98] md:mt-20">
          <span className="block text-[44px] text-papel md:text-[88px] lg:text-[112px]">
            Sites bem feitos.
          </span>
          <span className="mt-1 block text-[44px] text-n2 md:text-[88px] lg:text-[112px]">
            Por uma empresa que pensa demais.
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-12 max-w-3xl text-base leading-[1.5] text-dark-sub md:mt-16 md:text-lg">
          Nashpages é uma empresa de design e desenvolvimento de sites
          editoriais. Atende clínicas, marcas e profissionais que sabem que o
          site é o primeiro filtro do cliente. Sem briefing genérico, sem
          template adaptado, sem reunião com 4 pessoas pra discutir o tom do
          botão.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 md:mt-12 md:flex-row md:gap-4">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-bordo px-6 py-4 font-sans text-sm font-medium text-papel transition-colors hover:bg-bordo/90 md:text-[15px]"
          >
            Conversar pelo WhatsApp
            <span className="text-papel/60">/</span>
          </a>
          <a
            href="#pacotes"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-dark-hair px-6 py-4 font-sans text-sm font-medium text-papel transition-colors hover:border-papel/30 md:text-[15px]"
          >
            Ver pacotes <span>→</span>
          </a>
        </div>

        {/* Marginalia */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-dark-hair pt-8 md:mt-32 md:grid-cols-4 md:gap-x-10">
          {marginalia.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] tracking-[0.08em] text-bordo">
                {item.num}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-dark-sub">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-papel">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.08em] text-dark-sub md:mt-24">
          ↓ ROLE PARA CONTINUAR
        </p>
      </div>
    </section>
  );
}
