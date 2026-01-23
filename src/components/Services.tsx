'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="8" x="3" y="3" rx="2"/>
        <path d="M7 11v4a2 2 0 0 0 2 2h4"/>
        <rect width="8" height="8" x="13" y="13" rx="2"/>
      </svg>
    ),
    title: 'Customizações Odoo',
    description: 'Desenvolvimento de módulos personalizados, integrações fiscais, correções na localização brasileira e customizações avançadas do ERP.',
    features: [
      'Módulos personalizados',
      'Integrações fiscais (NF-e, CNAB)',
      'Correções localização BR',
      'Integrações com APIs externas',
      'Dashboards e relatórios',
      'Suporte e manutenção',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.customizations,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Consultoria Odoo',
    description: 'Consultoria estratégica para otimização do seu Odoo. Análise de processos, arquitetura de soluções e definição de roadmap de evolução.',
    features: [
      'Análise de processos e gaps',
      'Arquitetura de soluções',
      'Roadmap de evolução',
      'Best practices Odoo',
      'Otimização de performance',
      'Redução de dívida técnica',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.consulting,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Sustentação Odoo',
    description: 'Suporte contínuo, correções, atualizações e manutenção do seu ambiente Odoo. Garantia de estabilidade e evolução contínua.',
    features: [
      'Suporte técnico especializado',
      'Correções e hotfixes',
      'Atualizações de segurança',
      'Monitoramento proativo',
      'Backup e recuperação',
      'SLA garantido',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.support,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Integrações Odoo',
    description: 'Integração do Odoo com sistemas externos: CRMs, ERPs, e-commerce, bancos, transportadoras e outras ferramentas do seu ecossistema.',
    features: [
      'Integrações REST/XML-RPC',
      'Sincronização de dados',
      'APIs personalizadas',
      'Webhooks e eventos',
      'Integração com bancos (CNAB)',
      'Conectores prontos',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.integrations,
  },
];

export default function Services() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="servicos" className="pricing">
      <div className="section-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="section-subtitle">
            Serviços especializados em Odoo para empresas que já utilizam o ERP. Customizações, consultoria, sustentação e integrações.
          </p>
        </div>
        
        <div className="pricing-grid">
          {services.map((service, index) => (
            <div key={index} className="pricing-card glass-card">
              <div className="pricing-header">
                <div className="pricing-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="pricing-description">{service.description}</p>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {service.features.map((feature, idx) => (
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
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-hero-outline btn-block"
                >
                  Solicitar Orçamento
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
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
            Todos os serviços incluem garantia de qualidade. Preços personalizados conforme necessidade. Foco em empresas que já usam Odoo.
          </p>
        </div>
      </div>
    </section>
  );
}
