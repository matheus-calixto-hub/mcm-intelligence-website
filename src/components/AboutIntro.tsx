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
          <h1 className="display">Quem está por trás da MCM.</h1>
          <p>
            Mais de 9 anos colocando operação para rodar de verdade — atendimento,
            vendas e sistemas. Esta página é o histórico: para quem quer
            confiar antes de fechar.
          </p>
          <div className="page-intro-actions">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.consulting)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <Link href="/produtos" className="btn btn-ghost">
              Ver produtos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
