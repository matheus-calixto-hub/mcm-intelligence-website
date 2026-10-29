'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SOLUTIONS } from '@/config/content';

export default function Solutions() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="solucoes" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">O que entregamos</span>
          <h2>Solução de negócio primeiro. Tecnologia a serviço disso.</h2>
          <p>
            Não vendemos ferramenta pela ferramenta. Montamos o desenho certo
            para o seu processo — com ou sem Odoo, com ou sem chat interno —
            e implementamos de ponta a ponta.
          </p>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((item) => (
            <article key={item.id} className="solution-row reveal">
              <div>
                <h3>{item.title}</h3>
                <p className="lead">{item.lead}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
