'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const products = [
  {
    badge: 'Básico',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    title: 'Basic',
    subtitle: 'Até 5 funcionários',
    description: 'Solução inicial para pequenas equipes. Agente IA no WhatsApp com fluxos básicos de automação.',
    features: [
      'Agente IA no WhatsApp',
      'Fluxos básicos de automação',
      'Suporte por email',
    ],
    featured: false,
    quoteType: 'basic',
  },
  {
    badge: 'Mais Popular',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    title: 'Essentials',
    subtitle: '5 a 20 funcionários | Uso Interno',
    description: 'Integração completa com seu sistema via nosso MCP Server Super Inteligente. Governança e controle total. Agente com acesso a até 3 áreas de negócio.',
    features: [
      'Integração com ERP/Sistema',
      'Nosso MCP HUB incluído',
      'Uso interno com governança',
      'Acesso a até 3 áreas de negócio',
      'Auditoria completa',
      'Suporte técnico dedicado',
    ],
    featured: true,
    quoteType: 'essentials',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    title: 'Professional',
    subtitle: '20 a 80 funcionários | Interno + Clientes',
    description: 'Tudo do Essentials + atendimento ao cliente. Agentes especializados, métricas avançadas e controle total.',
    features: [
      'Tudo do Essentials',
      'Atendimento ao cliente 24/7',
      'Agentes especializados',
      'Métricas e analytics',
      'Múltiplos canais',
      'Suporte premium',
    ],
    featured: false,
    quoteType: 'professional',
  },
  {
    badge: 'Enterprise',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      </svg>
    ),
    title: 'Enterprise',
    subtitle: '80+ funcionários',
    description: 'Solução completa para grandes empresas. Usuários ilimitados, governança avançada, auditoria estendida e SLA dedicado.',
    features: [
      'Usuários ilimitados',
      'Governança avançada',
      'Auditoria estendida',
      'Integrações sob medida',
      'SLA dedicado 24/7',
      'Gerente de conta dedicado',
    ],
    featured: true,
    quoteType: 'enterprise',
  },
];

export default function Products() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="produtos" className="pricing">
      <div className="section-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Nossos <span className="gradient-text">Planos</span>
          </h2>
          <p className="section-subtitle">
            Escolha o plano ideal para sua empresa. Todos incluem Agente IA, nosso MCP Server Super Inteligente com IA e Governança, e acesso fácil a bancos de dados e sistemas. Agende uma demonstração gratuita e veja nosso Agente em ação.
          </p>
        </div>
        
        <div className="pricing-grid">
          {products.map((product, index) => (
            <div key={index} className={`pricing-card glass-card ${product.featured ? 'featured' : ''}`}>
              {product.badge && (
                <div className="pricing-badge">{product.badge}</div>
              )}
              <div className="pricing-header">
                <div className="pricing-icon">
                  {product.icon}
                </div>
                <h3>{product.title}</h3>
                <p className="pricing-subtitle" style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.5rem' }}>
                  {product.subtitle}
                </p>
                <p className="pricing-description">{product.description}</p>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-cta">
                <a 
                  href={`/?tipo=${product.quoteType}#contato`}
                  className={`btn ${product.featured ? 'btn-hero' : 'btn-hero-outline'} btn-block`}
                >
                  Solicitar Orçamento
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p className="pricing-note">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            </svg>
            <strong>Add-ons disponíveis:</strong> Atendimento ao cliente • Customizações e especialização • Implantação rápida: 40 a 80 horas. Todos os valores sob consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
