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
  alt: 'MCM Consultoria — atendimento e follow-up no WhatsApp que vende',
  type: 'image/jpeg',
} as const;

export const SITE = {
  name: `${COMPANY.shortName} Consultoria`,
  title: `${COMPANY.shortName} — Atendimento no WhatsApp que vende`,
  titleTemplate: `%s | ${COMPANY.shortName}`,
  /** ~155 chars — benefício na frente para preview social */
  description:
    'Organize o atendimento e o follow-up do time, faça o cliente agendar no WhatsApp e tenha um site que converte. Fale com a MCM no zap — São Paulo.',
  /** Texto curto para og:description / twitter (crawlers truncam) */
  socialDescription:
    'Follow-up comercial, agendamento no WhatsApp e sites que convertem. Converse com a MCM e veja na prática.',
  locale: 'pt_BR',
  keywords: [
    'atendimento WhatsApp empresa',
    'follow-up comercial WhatsApp',
    'agendamento WhatsApp',
    'painel SLA WhatsApp',
    'tempo de primeira resposta',
    'site que converte WhatsApp',
    'organizar vendas no WhatsApp',
    'consultoria WhatsApp São Paulo',
    'CRM WhatsApp time comercial',
    'agenda online WhatsApp',
    'WhatsApp Business API',
    'site profissional empresa',
    'conversão LinkedIn WhatsApp',
    'MCM Consultoria',
    'consultoria-mcm',
  ],
} as const;
