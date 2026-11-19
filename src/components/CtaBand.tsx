'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function CtaBand() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="cta-band" aria-label="Chamada para conversa">
      <div className="container">
        <div className="cta-band-inner reveal">
          <div>
            <h2>Chegou pelo LinkedIn ou pelo Google? Ótimo.</h2>
            <p>
              Manda um oi. Em poucos minutos você entende se o Follow-up, o
              Agendamento ou o site resolve o que está travando — e a gente
              já marca a demonstração.
            </p>
          </div>
          <div className="cta-band-actions">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero fechar · WhatsApp
            </a>
            <Link href="/produtos" className="btn btn-ghost-on-dark">
              Ver produtos
            </Link>
            <span className="cta-band-note">Resposta humana · sem compromisso na primeira conversa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
