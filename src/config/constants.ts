/**
 * Configurações da empresa
 */

export const COMPANY = {
  name: 'MCM Consultoria em TI LTDA',
  shortName: 'Consultoria MCM',
  whatsapp: '+551148632516',
  whatsappFormatted: '+55 11 4863-2516',
  email: 'matheus.calixto.ti@gmail.com',
  phone: '+55 11 4863-2516',
} as const;

/**
 * Mensagens pré-formatadas para WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  demo: 'Olá! Gostaria de agendar uma demonstração de 10 minutos do Agente IA e ver ele em ação. Tenho interesse em conhecer a solução.',
  plans: 'Olá! Gostaria de saber mais sobre os planos do Agente IA.',
  customQuote: 'Olá! Gostaria de solicitar um orçamento personalizado para minha empresa.',
  
  // Planos
  basic: 'Olá! Tenho interesse no plano Basic do Agente IA. Gostaria de solicitar um orçamento.',
  essentials: 'Olá! Tenho interesse no plano Essentials do Agente IA. Gostaria de agendar uma demonstração e solicitar um orçamento.',
  professional: 'Olá! Tenho interesse no plano Professional do Agente IA. Gostaria de agendar uma demonstração e solicitar um orçamento.',
  enterprise: 'Olá! Tenho interesse no plano Enterprise do Agente IA. Gostaria de agendar uma reunião para discutir uma proposta personalizada.',
  
  // Serviços
  customizations: 'Olá! Gostaria de solicitar um orçamento para customizações no Odoo.',
  consulting: 'Olá! Gostaria de solicitar um orçamento para consultoria em Odoo.',
  support: 'Olá! Gostaria de solicitar um orçamento para sustentação do Odoo.',
  integrations: 'Olá! Gostaria de solicitar um orçamento para integrações do Odoo com outros sistemas.',
  
  // Implantação
  implementation: 'Olá! Gostaria de solicitar um orçamento para implantação do Odoo Enterprise.',
  migration: 'Olá! Gostaria de solicitar um orçamento para migração de sistema para Odoo.',
  upgrade: 'Olá! Gostaria de solicitar um orçamento para upgrade e modernização do Odoo.',
} as const;

/**
 * Gera URL do WhatsApp com mensagem
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
