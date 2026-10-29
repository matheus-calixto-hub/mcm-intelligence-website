/**
 * Configurações da empresa
 */

export const COMPANY = {
  name: 'MCM Consultoria em TI LTDA',
  shortName: 'MCM',
  brand: 'MCM',
  tagline: 'Consultoria em TI',
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
  demo: 'Olá, Matheus! Quero conhecer os agentes de IA da MCM e ver como encaixa no meu negócio.',
  agents: 'Olá! Tenho interesse em agentes de IA no WhatsApp (atendimento, templates agendados e/ou disparo em massa). Quero entender escopo e custos da Meta.',
  consulting: 'Olá! Gostaria de conversar sobre consultoria / arquitetura de solução para a minha empresa.',
  odoo: 'Olá! Preciso de apoio com Odoo (implantação, customização ou integração).',
  integrations: 'Olá! Quero falar sobre integração entre sistemas / APIs / legado.',
  customQuote: 'Olá! Gostaria de um orçamento personalizado para a minha operação.',
} as const;

/**
 * Gera URL do WhatsApp com mensagem
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
