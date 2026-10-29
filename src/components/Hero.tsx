'use client';

import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function Hero() {
  return (
    <section className="hero" aria-label="Apresentação">
      <div className="hero-plane" aria-hidden="true" />
      <div className="container">
        <p className="hero-brand">
          MCM<em>.</em>
        </p>
        <div className="hero-copy">
          <h1>Agentes de IA e soluções de negócio — do WhatsApp ao ERP.</h1>
          <p>
            Arquitetura hands-on para quem precisa de resultado: agentes no
            WhatsApp, integrações críticas e Odoo, sem amarrar o seu processo a
            um único sistema.
          </p>
          <div className="hero-cta">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
              className="btn btn-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar no WhatsApp
            </a>
            <a href="#experiencia" className="btn btn-ghost-on-dark">
              Ver experiência
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
