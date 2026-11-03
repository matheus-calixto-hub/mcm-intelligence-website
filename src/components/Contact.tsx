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
            <span className="eyebrow">Próximo passo</span>
            <h2>Fale no WhatsApp e saia com clareza — não com um PDF genérico.</h2>
            <p>
              Conta o processo (vendas, suporte, fiscal, integração). Em retorno
              alinhamos o desenho, o que a IA pode responder, o que fica com o
              time no chatbox e uma estimativa honesta de esforço e custo Meta.
            </p>
            <ul className="contact-bullets">
              <li>Sem compromisso para o primeiro diagnóstico</li>
              <li>Escopo, prazo e preço antes de começar</li>
              <li>Site, agente WhatsApp, Odoo ou Integrações — você escolhe o ponto de partida</li>
              <li>Entrega hands-on — não só slide</li>
            </ul>
            <div className="contact-actions">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote)}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp agora
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.sites)}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçar site + WhatsApp
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
