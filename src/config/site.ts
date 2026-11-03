import { COMPANY } from './constants';

/**
 * URL canônica do site (só servidor: metadata, sitemap, OG, JSON-LD).
 * Na Vercel, cadastre SITE_URL=https://consultoria-mcm.com.br (sem NEXT_PUBLIC_).
 */
export function getSiteUrl(): string {
  const explicit = (
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL
  )?.replace(/\/$/, '');
  if (explicit) return explicit;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, '');
  if (vercel) return vercel.startsWith('http') ? vercel : `https://${vercel}`;

  return 'http://localhost:3000';
}

/** Imagem social estática (WhatsApp/LinkedIn preferem arquivo estável sem query hash). */
export const OG_IMAGE = {
  /** JPG menor — melhor para crawlers do WhatsApp */
  path: '/og.jpg',
  width: 1200,
  height: 630,
  alt: 'MCM Consultoria — Agentes de IA no WhatsApp, Integrações e Odoo',
  type: 'image/jpeg',
} as const;

export const SITE = {
  name: `${COMPANY.shortName} Consultoria`,
  title: `${COMPANY.shortName} — Agentes de IA no WhatsApp, Integrações e Odoo`,
  titleTemplate: `%s | ${COMPANY.shortName}`,
  /** ~155 chars — benefício na frente para preview social */
  description:
    'Agentes de IA no WhatsApp, sites com SEO e conversão, Odoo, NF-e/NFS-e, Integrações e cloud. Diagnóstico rápido — São Paulo, Brasil.',
  /** Texto curto para og:description / twitter (crawlers truncam) */
  socialDescription:
    'Agentes de IA no WhatsApp, sites personalizados, Odoo e Integrações hands-on. Fale no WhatsApp com a MCM.',
  locale: 'pt_BR',
  keywords: [
    'agentes de IA WhatsApp',
    'WhatsApp Business API',
    'chatbox WhatsApp empresa',
    'templates WhatsApp agendados',
    'disparo em massa WhatsApp',
    'site personalizado empresa',
    'site com domínio próprio',
    'SEO e conversão WhatsApp',
    'Meta Business site',
    'Google Ads landing page',
    'consultoria Odoo',
    'NF-e NFS-e Odoo',
    'integração Odoo',
    'customização Odoo',
    'n8n automação',
    'microsserviços FastAPI',
    'consultoria TI São Paulo',
    'MCP servidor',
    'AWS VPS hospedagem',
    'MCM Consultoria',
    'consultoria-mcm',
  ],
} as const;
