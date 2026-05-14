import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
};

// Logo nash/pages — slash em bordô, wordmark em Geist Medium com tracking -3%.
// Size controla font-size em px (canônicos: 18 nav, 48 footer mobile, 96 footer desktop, 200 manifesto).
export function Logo({ size = 20, className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-block font-sans font-medium tracking-[-0.03em] leading-none whitespace-nowrap",
        className
      )}
      style={{ fontSize: `${size}px` }}
      aria-label="Nashpages"
    >
      nash<span className="text-bordo">/</span>pages
    </span>
  );
}
