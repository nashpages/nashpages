import Link from "next/link";
import { Logo } from "./Logo";
import { HapticLink } from "./HapticLink";

const navLinks = [
  { label: "Pacotes", href: "#pacotes" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export function NavSticky() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark-hair bg-tinta/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-20 md:py-5">
        <Link
          href="/"
          aria-label="Nashpages — home"
          className="inline-flex"
        >
          <Logo size={20} />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-10 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-dark-sub transition-colors hover:text-papel"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <HapticLink
          href="#contato"
          className="rounded-sm bg-bordo px-4 py-2 font-sans text-xs font-medium text-papel transition-colors hover:bg-bordo/90 active:scale-[0.97] md:px-5 md:py-2.5 md:text-[13px]"
        >
          Falar
        </HapticLink>
      </div>
    </header>
  );
}
