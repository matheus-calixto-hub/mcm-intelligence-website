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
            Entregas hands-on: da localização fiscal brasileira (NF-e e NFS-e) a
            agentes de IA no WhatsApp e sites com conversão, passando por
            Integrações enterprise e operações internacionais.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCES.map((item) => (
            <article key={`${item.company}-${item.period}`} className="experience-item reveal">
              <div className="experience-period">{item.period}</div>
              <div>
                <h3>{item.company}</h3>
                {item.clients ? (
                  <p className="experience-meta">{item.clients}</p>
                ) : null}
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
