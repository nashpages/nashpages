import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { NavSticky } from "@/components/NavSticky";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://nashpages.com.br";
const SITE_NAME = "Nashpages";
const SITE_TITLE = "Nashpages — sites bem feitos";
const SITE_DESCRIPTION =
  "Empresa de design e desenvolvimento de sites editoriais. Stack escolhida pelo projeto. Atendimento direto. Cronograma fixo.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s · Nashpages",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  keywords: [
    "site editorial",
    "design de site",
    "desenvolvimento next.js",
    "framer site",
    "site institucional",
    "site para clínica",
    "site para profissional",
    "Nashpages",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-tinta text-papel antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-bordo focus:px-4 focus:py-2 focus:text-sm focus:text-papel"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <NavSticky />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
