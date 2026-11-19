'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ITEMS = [
  { title: 'Fala clara', text: 'Você entende o que está comprando — sem mistério.' },
  { title: 'Demo no WhatsApp', text: 'Em minutos você vê se faz sentido para o seu time.' },
  { title: 'Fechamento simples', text: 'Escopo, prazo e valor antes de começar.' },
  { title: 'Acompanha de perto', text: 'Não sumimos depois do “ok” — colocamos para rodar.' },
];

export default function TrustStrip() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="trust-strip" aria-label="Por que a MCM">
      <div className="container">
        <div className="trust-grid">
          {ITEMS.map((item) => (
            <article key={item.title} className="trust-item reveal">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
