'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function AboutIntro() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="page-intro" aria-label="Sobre">
      <div className="container">
        <div className="page-intro-inner reveal">
          <span className="eyebrow">Sobre</span>
          <h1 className="display">Quem entrega por trás da MCM.</h1>
          <p>
            CTO hands-on com mais de 9 anos em Odoo, Integrações críticas e
            agentes de IA. Esta página é o track record — para quem quer
            validar experiência antes de fechar projeto ou contratar
            arquitetura especializada.
          </p>
          <div className="page-intro-actions">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.consulting)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar no WhatsApp
            </a>
            <Link href="/#solucoes" className="btn btn-ghost">
              Ver soluções da MCM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
