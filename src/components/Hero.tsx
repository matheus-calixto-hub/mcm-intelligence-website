'use client';

import Link from 'next/link';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function Hero() {
  return (
    <section className="hero" aria-label="Apresentação">
      <div className="hero-plane" aria-hidden="true" />
      <div className="container">
        <p className="hero-brand">
          MCM<em>.</em>
        </p>
        <div className="hero-copy">
          <h1>Seu cliente já está no WhatsApp. Sua operação também deveria.</h1>
          <p>
            Organizamos o atendimento e o follow-up do time, fazemos o cliente
            agendar sozinho e deixamos o site pronto para converter. Você fala
            conosco no zap e vê se encaixa — sem enrolação.
          </p>
          <div className="hero-cta">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
              className="btn btn-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero demonstração · WhatsApp
            </a>
            <Link href="/produtos" className="btn btn-ghost-on-dark">
              Ver produtos
            </Link>
          </div>
          <p className="hero-trust">
            Demonstração rápida · resposta humana · CNPJ {COMPANY.cnpj}
          </p>
        </div>
      </div>
    </section>
  );
}
