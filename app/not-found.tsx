import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bordo md:text-[11px]">
        § 404  /  ERRO
      </p>
      <h1 className="mt-8 font-sans text-[44px] font-semibold tracking-[-0.03em] leading-[0.98] text-papel md:text-[88px]">
        Página não <br />
        encontrada.
      </h1>
      <p className="mt-8 max-w-md text-base leading-[1.5] text-dark-sub">
        Ou o link veio errado, ou a página foi movida. Volta pra home e segue daí.
      </p>
      <Link
        href="/"
        className="mt-12 inline-flex items-center justify-center gap-2 rounded-full bg-bordo px-6 py-4 font-sans text-sm font-medium text-papel transition-colors hover:bg-bordo/90 active:scale-[0.98] md:text-[15px]"
      >
        Voltar pra home <span>→</span>
      </Link>
    </section>
  );
}
