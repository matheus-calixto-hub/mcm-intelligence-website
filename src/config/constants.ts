/**
 * Configurações da empresa
 */

export const COMPANY = {
  name: 'MCM Consultoria em TI',
  legalName: 'MCM Consultoria em TI LTDA',
  shortName: 'MCM',
  brand: 'MCM',
  tagline: 'Consultoria em TI',
  cnpj: '32.434.264/0001-40',
  whatsapp: '+5511976218826',
  whatsappFormatted: '+55 11 97621-8826',
  email: 'matheus.calixto.ti@gmail.com',
  phone: '+55 11 97621-8826',
  location: 'São Paulo, Brasil',
} as const;

/**
 * Mensagens pré-formatadas para WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  demo: 'Olá! Quero uma demonstração rápida dos produtos da MCM e ver o que encaixa no meu negócio.',
  agents:
    'Olá! Quero melhorar o atendimento no WhatsApp (time respondendo como a marca, com organização e prazos). Podemos conversar?',
  sites:
    'Olá! Quero um site profissional para a minha empresa, com bom SEO e botão direto para WhatsApp.',
  consulting: 'Olá! Gostaria de conversar sobre como organizar a operação da minha empresa com vocês.',
  odoo: 'Olá! Preciso de apoio para implantar ou melhorar o sistema de gestão da empresa.',
  integrations: 'Olá! Quero integrar sistemas e automatizar processos da operação.',
  customQuote: 'Olá! Quero solicitar um orçamento personalizado para a minha operação.',
  whatsappBooking:
    'Olá! Quero conhecer o agendamento pelo WhatsApp (cliente marca e remarca sozinho). Podem me mostrar uma demonstração?',
  followup:
    'Olá! Quero conhecer o Follow-up comercial no WhatsApp e e-mail (fila, prazos e cadências). Quero uma demonstração e entender como começar.',
  slaDashboard:
    'Olá! Quero conhecer o painel Visão geral (SLA, tempo de resposta, fila e Follow-ups). Quero uma demonstração com os gráficos e entender como funciona para vendedor e sócio.',
  products:
    'Olá! Vi os produtos no site da MCM e quero ajuda para escolher o que faz sentido para o meu negócio.',
} as const;

/**
 * Gera URL do WhatsApp com mensagem
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

/** Mensagem WA conforme a página (navbar / float / footer). */
export function getWhatsAppMessageForPath(pathname?: string | null): string {
  const path = pathname || '';
  if (path.startsWith('/product/followup')) return WHATSAPP_MESSAGES.followup;
  if (path.startsWith('/product/sla-dashboard')) return WHATSAPP_MESSAGES.slaDashboard;
  if (path.startsWith('/product/whatsappbooking')) return WHATSAPP_MESSAGES.whatsappBooking;
  if (path.startsWith('/produtos')) return WHATSAPP_MESSAGES.products;
  if (path.startsWith('/sobre')) return WHATSAPP_MESSAGES.consulting;
  return WHATSAPP_MESSAGES.demo;
}
