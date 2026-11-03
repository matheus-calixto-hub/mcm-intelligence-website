'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function CtaBand() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="cta-band" aria-label="Chamada para conversa">
      <div className="container">
        <div className="cta-band-inner reveal">
          <div>
            <h2>Quer ver se encaixa na sua operação?</h2>
            <p>
              Em poucos minutos no WhatsApp alinhamos canal, site com domínio
              próprio, governança da IA, custo Meta e se o caminho é agente,
              site + conversão, Odoo, Integrações — ou o pacote completo.
              Sem pitch genérico.
            </p>
          </div>
          <div className="cta-band-actions">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote)}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero conversar no WhatsApp
            </a>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.sites)}
              className="btn btn-ghost-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero um site que converte
            </a>
            <span className="cta-band-note">Resposta em horário comercial · sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
