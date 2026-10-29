import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/config/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY.shortName} — Agentes de IA, integrações e Odoo`,
  description:
    "Consultoria hands-on em agentes de IA no WhatsApp, integrações críticas e Odoo. Soluções de negócio sem amarrar você a um único sistema.",
  openGraph: {
    title: `${COMPANY.shortName} — Agentes de IA e soluções de negócio`,
    description:
      "Agentes no WhatsApp, integrações e arquitetura Odoo. Portfolio e entregas reais.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
