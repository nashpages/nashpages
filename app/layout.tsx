import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nashpages — sites bem feitos",
  description:
    "Empresa de design e desenvolvimento de sites editoriais. Stack escolhida pelo projeto. Atendimento direto. Cronograma fixo.",
  metadataBase: new URL("https://nashpages.com.br"),
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
      <body className="min-h-screen bg-tinta text-papel antialiased">
        {children}
      </body>
    </html>
  );
}
