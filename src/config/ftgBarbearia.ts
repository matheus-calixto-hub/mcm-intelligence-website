/**
 * Landing FTG Barbearia (cliente MCM).
 * Troque `whatsapp` pelo número oficial da barbearia quando sair do sandbox Meta.
 */
export const FTG = {
  brand: 'FTG Barbearia',
  shortBrand: 'FTG',
  tagline: 'Seu horário, no WhatsApp',
  blurb: 'Corte, barba e acabamento — marque em poucos toques, sem ligar e sem app novo.',
  city: 'São Paulo',
  whatsapp: '5511940762351',
  whatsappDisplay: '+55 11 94076-2351',
  cnpj: '66.240.837/0001-16',
  waMessage: 'Olá! Quero agendar na FTG Barbearia.',
  services: [
    { name: 'Corte', detail: 'Clássico ou fade', minutes: 30 },
    { name: 'Barba', detail: 'Aparar e finalizar', minutes: 20 },
    { name: 'Sobrancelha', detail: 'Design rápido', minutes: 15 },
    { name: 'Hidratação', detail: 'Cabelo e barba', minutes: 25 },
  ],
  steps: [
    { n: '01', title: 'Chame no WhatsApp', text: 'Toque em Agendar e diga o que precisa.' },
    { n: '02', title: 'Escolha o horário', text: 'Veja vagas reais da agenda e confirme.' },
    { n: '03', title: 'Pronto', text: 'Remarque ou cancele pelo mesmo chat quando quiser.' },
  ],
} as const;

export function getFtgWhatsAppUrl(message = FTG.waMessage): string {
  return `https://wa.me/${FTG.whatsapp}?text=${encodeURIComponent(message)}`;
}
