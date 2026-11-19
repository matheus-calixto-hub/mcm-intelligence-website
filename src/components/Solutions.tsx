'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SOLUTIONS } from '@/config/content';

export default function Solutions() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="solucoes" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Como ajudamos</span>
          <h2>Menos bagunça. Mais conversa que vira negócio.</h2>
          <p>
            A gente entra no seu processo real — vendas, agenda, site — e
            deixa o fluxo redondo para o time usar todo dia.
          </p>
        </div>

        <div className="solutions-cards">
          {SOLUTIONS.map((item) => (
            <article key={item.id} className="solution-card reveal">
              <h3>{item.title}</h3>
              <p className="lead">{item.lead}</p>
              <ul>
                {item.points.slice(0, 4).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {'href' in item && item.href ? (
                <Link href={item.href} className="solution-card-link">
                  Quero saber mais →
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
