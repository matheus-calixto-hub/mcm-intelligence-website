'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function Contact() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="contato" className="section contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div>
            <span className="eyebrow">Vamos conversar</span>
            <h2>Um oi no WhatsApp já abre a porta.</h2>
            <p>
              Conta o que está doendo hoje: lead que some, agenda bagunçada ou
              site que não gera conversa. A gente responde com caminho claro —
              e, se fizer sentido, fecha o próximo passo.
            </p>
            <ul className="contact-bullets">
              <li>Primeira conversa sem compromisso</li>
              <li>Você sai sabendo o que comprar (ou se ainda não é a hora)</li>
              <li>Demonstração rápida quando valer a pena</li>
              <li>Valor e prazo combinados antes de começar</li>
            </ul>
            <div className="contact-actions">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <Link href="/produtos" className="btn btn-ghost">
                Ver produtos
              </Link>
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
              <dt>Onde estamos</dt>
              <dd>{COMPANY.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
