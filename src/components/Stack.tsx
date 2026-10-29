'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CLIENT_LOGOS, TECH_STACK } from '@/config/content';

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
      </div>
    </section>
  );
}
