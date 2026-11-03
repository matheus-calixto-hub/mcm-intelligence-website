'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CLIENT_LOGOS, ECOSYSTEM_USERS, TECH_STACK } from '@/config/content';

export default function Stack() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="stack" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Stack & contexto</span>
          <h2>Tecnologias que usamos no dia a dia — e onde elas já rodaram.</h2>
          <p>
            Nove anos de entrega em consultorias e clientes finais. O que
            aparece abaixo não é lista genérica de buzzwords: é o ferramental
            das missões reais.
          </p>
        </div>

        <div className="stack-grid reveal">
          {TECH_STACK.map((tech) => (
            <article key={tech.name} className="stack-item">
              <h3>{tech.name}</h3>
              <p className="detail">{tech.detail}</p>
              <div className="stack-tags">
                {tech.usedBy.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="clients-strip reveal">
          <p>Empresas e operações com as quais já trabalhamos</p>
          <div className="clients-logos">
            {CLIENT_LOGOS.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {client.name}
              </a>
            ))}
          </div>
        </div>

        <div className="ecosystem-strip reveal">
          <p>Empresas que utilizam as plataformas com as quais atuamos</p>
          <span className="ecosystem-note">
            Referências do ecossistema (não são clientes MCM) — mostram a escala
            das stacks que entregamos: Odoo, n8n, WhatsApp Business e cloud.
          </span>
          <div className="ecosystem-grid">
            {ECOSYSTEM_USERS.map((group) => (
              <article key={group.platform} className="ecosystem-card">
                <h3>{group.platform}</h3>
                <p className="ecosystem-blurb">{group.blurb}</p>
                <div className="ecosystem-tags">
                  {group.companies.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
