export function Contato() {
  return (
    <section id="contato" className="bg-tinta">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        {/* Eyebrow */}
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
          § 07  /  CONTATO
        </p>

        {/* Title */}
        <h2 className="mt-6 font-sans text-[64px] font-semibold tracking-[-0.03em] leading-[0.98] md:mt-10 md:text-[144px]">
          <span className="block text-papel">Vamos</span>
          <span className="block text-bordo">começar.</span>
        </h2>

        {/* Sub */}
        <p className="mt-8 max-w-2xl text-base leading-[1.5] text-dark-sub md:mt-12 md:text-lg">
          Call de descoberta gratuita. Proposta em até 48h. Sem compromisso.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 md:mt-16 md:flex-row md:gap-4">
          <a
            href="https://wa.me/5511999999999"
            className="flex flex-col items-center justify-center gap-1 rounded-sm bg-bordo px-8 py-6 text-center transition-colors hover:bg-bordo/90 md:flex-1 md:py-8"
          >
            <span className="font-sans text-lg font-semibold tracking-[-0.01em] text-papel md:text-xl">
              Falar no WhatsApp
            </span>
            <span className="font-mono text-[11px] tracking-[0.04em] text-papel/70">
              (11) 9XXXX-XXXX
            </span>
          </a>
          <a
            href="mailto:contato@nashpages.com.br"
            className="flex flex-col items-center justify-center gap-1 rounded-sm border border-dark-hair px-8 py-6 text-center transition-colors hover:border-papel/30 md:flex-1 md:py-8"
          >
            <span className="font-sans text-sm font-medium text-papel md:text-base">
              Por email
            </span>
            <span className="font-mono text-[11px] tracking-[0.04em] text-dark-sub">
              contato@nashpages.com.br
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
