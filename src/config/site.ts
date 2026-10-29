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

export const SITE = {
  name: `${COMPANY.shortName} Consultoria`,
  title: `${COMPANY.shortName} — Agentes de IA no WhatsApp, integrações e Odoo`,
  titleTemplate: `%s | ${COMPANY.shortName}`,
  description:
    'Consultoria em TI hands-on: agentes de IA no WhatsApp (templates, agendamento e massa), integrações críticas, Odoo e infraestrutura cloud/VPS. São Paulo — atendimento em todo o Brasil.',
  locale: 'pt_BR',
  keywords: [
    'agentes de IA WhatsApp',
    'WhatsApp Business API',
    'templates WhatsApp agendados',
    'disparo em massa WhatsApp',
    'consultoria Odoo',
    'integração Odoo',
    'customização Odoo',
    'n8n automação',
    'microsserviços FastAPI',
    'consultoria TI São Paulo',
    'MCP servidor',
    'AWS VPS hospedagem',
    'MCM Consultoria',
  ],
} as const;
