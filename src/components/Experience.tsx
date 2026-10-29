'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { EXPERIENCES } from '@/config/content';

export default function Experience() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="experiencia" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2>Experiência em campo — consultorias, produtos e clientes finais.</h2>
          <p>
            Trajetória como CTO hands-on e especialista Odoo: da localização
            fiscal brasileira a agentes de IA no WhatsApp, passando por
            integrações enterprise e operações internacionais.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCES.map((item) => (
            <article key={`${item.company}-${item.period}`} className="experience-item reveal">
              <div className="experience-period">{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-meta">
                  {item.company}
                  {item.clients ? ` · ${item.clients}` : ''}
                </p>
                <p>{item.summary}</p>
                <div className="experience-tags">
                  {item.highlights.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
