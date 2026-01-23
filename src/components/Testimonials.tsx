'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Equipe Infracommerce',
    role: 'E-commerce Enterprise',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    text: '"A MCM liderou a implantação do Odoo Enterprise substituindo nosso Salesforce. Reduzimos custos operacionais significativamente e melhoramos a eficiência do nosso Helpdesk/SAC."',
  },
  {
    name: 'Grupo Pampeiro, Toniolo',
    role: 'Indústria',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: '"Implantação completa do Odoo 18 Enterprise com localização brasileira e NF-e via Avalara. As customizações fiscais profundas garantiram compliance total para exportação e importação."',
  },
  {
    name: 'Sylvia Design',
    role: 'Design e Varejo',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    text: '"A implementação do CNAB Bradesco (PIX, QR Code, TED, boletos) e a integração com Zurich Seguros transformaram nossa operação financeira. Automação completa e confiável."',
  },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function Testimonials() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="section-subtitle">
            Empresas de todos os tamanhos confiam na Consultoria MCM para transformar suas operações com Odoo e Inteligência Artificial.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-card">
              <div className="testimonial-header">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className="testimonial-stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
