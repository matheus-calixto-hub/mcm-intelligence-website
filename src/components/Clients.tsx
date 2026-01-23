'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  {
    name: 'Nubank',
    logo: '💳',
    description: 'Desenvolvimento de microserviço para integração Jira Service Desk, Zenvia e WhatsApp com automação de atendimento omnichannel.',
    category: 'Fintech',
  },
  {
    name: 'Infracommerce',
    description: 'Liderança técnica na implantação do Odoo Enterprise (Helpdesk/SAC), substituindo Salesforce e reduzindo custos operacionais.',
    category: 'E-commerce',
  },
  {
    name: 'AG Capital TaxTech',
    description: 'Desenvolvimento de connectors assíncronos com filas e multithreading para sincronização com Data Lake e HubSpot.',
    category: 'TaxTech',
  },
  {
    name: 'Grupo Pampeiro, Toniolo',
    description: 'Implantação do Odoo 18 Enterprise com localização brasileira e emissão de NF-e via Avalara. Customizações fiscais profundas.',
    category: 'Indústria',
  },
  {
    name: 'Sylvia Design',
    description: 'Arquitetura e implementação de CNAB Bradesco (PIX, QR Code, TED, boletos). Integração Odoo e Zurich Seguros.',
    category: 'Design',
  },
  {
    name: 'Bluy',
    description: 'Desenvolvimento back-end Python para plataforma de Recrutamento, Seleção e RH baseada em Odoo. APIs e integrações.',
    category: 'RH/Tech',
  },
  {
    name: 'Intelligenti Stefanini',
    description: 'Automações complexas em Python com Selenium, Web Scraping e RabbitMQ. Integração com ERP Odoo para processos jurídicos.',
    category: 'Automação',
  },
  {
    name: 'Waybee',
    description: 'Desenvolvimento e personalização de módulos de e-commerce em Odoo para ERP educacional. Integração front-end React.',
    category: 'Educação',
  },
];

export default function Clients() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="clientes" className="clients">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Empresas que <span className="gradient-text">confiam</span> na <span className="gradient-text-mcm">MCM</span>
          </h2>
          <p className="section-subtitle">
            Mais de 8 anos transformando operações de empresas de todos os tamanhos com soluções Odoo e Inteligência Artificial.
          </p>
        </div>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card glass-card">
              <div className="client-logo">
                {client.logo || '🏢'}
              </div>
              <div className="client-info">
                <h3>{client.name}</h3>
                <span className="client-category">{client.category}</span>
                <p className="client-description">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
