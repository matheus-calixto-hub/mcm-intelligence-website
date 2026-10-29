'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function Contact() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="contato" className="section contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div>
            <span className="eyebrow">Contato</span>
            <h2>Vamos falar do seu processo — não de um pacote fechado.</h2>
            <p>
              Diagnóstico rápido pelo WhatsApp. Se fizer sentido, desenhamos o
              escopo (agente, integração, Odoo ou os três) e partimos para
              entrega com prazo e preço claros.
            </p>
            <div className="contact-actions">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote)}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a href={`mailto:${COMPANY.email}`} className="btn btn-ghost">
                E-mail
              </a>
            </div>
          </div>

          <dl className="contact-details">
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {COMPANY.whatsappFormatted}
                </a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{COMPANY.location}</dd>
            </div>
            <div>
              <dt>Empresa</dt>
              <dd>{COMPANY.name}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
