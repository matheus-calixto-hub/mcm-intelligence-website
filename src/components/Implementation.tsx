'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

const implementationServices = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Implantação Odoo Enterprise',
    description: 'Implementação completa do Odoo Enterprise com localização brasileira, customizações fiscais e integrações necessárias para seu negócio.',
    features: [
      'Análise de processos e mapeamento',
      'Configuração e parametrização',
      'Migração de dados',
      'Customizações fiscais (NF-e, CNAB)',
      'Treinamento da equipe',
      'Go-live supervisionado',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.implementation,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Migração de Sistemas',
    description: 'Migração segura de dados de sistemas legados (TOTVS, SAP, outros ERPs) para Odoo, garantindo integridade e continuidade operacional.',
    features: [
      'Análise do sistema atual',
      'Mapeamento de dados e processos',
      'Extração e transformação de dados',
      'Validação e testes',
      'Migração em etapas',
      'Acompanhamento pós-migração',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.migration,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Upgrade e Modernização',
    description: 'Atualização de versões antigas do Odoo para versões mais recentes, garantindo segurança, performance e acesso a novas funcionalidades.',
    features: [
      'Análise da versão atual',
      'Planejamento de upgrade',
      'Testes em ambiente isolado',
      'Migração de customizações',
      'Validação funcional',
      'Deploy em produção',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.upgrade,
  },
];

export default function Implementation() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="implantacao" className="implementation">
      <div className="section-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Implantação e <span className="gradient-text">Migração Odoo</span>
          </h2>
          <p className="section-subtitle">
            Especialistas em implantação completa do Odoo Enterprise e migração de sistemas legados. Do planejamento ao go-live, garantimos sucesso na sua transformação digital.
          </p>
        </div>
        
        <div className="implementation-grid">
          {implementationServices.map((service, index) => (
            <div key={index} className="implementation-card glass-card">
              <div className="implementation-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="implementation-description">{service.description}</p>
              <div className="implementation-features">
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
              <div className="implementation-cta">
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
      </div>
    </section>
  );
}
