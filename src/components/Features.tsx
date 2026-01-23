'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    title: 'Inteligência Artificial Avançada',
    description: 'Agente IA super inteligente que não é apenas um chatbot. Consulta dados, cria registros, executa processos e apoia na tomada de decisão com contexto completo do seu negócio.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'WhatsApp Empresarial',
    description: 'Acesse seu Agente IA diretamente pelo WhatsApp. Funciona com Meta Business ou soluções Open-Source. Atendimento ao cliente 24/7 ou uso interno da equipe.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="8" x="3" y="3" rx="2"/>
        <path d="M7 11v4a2 2 0 0 0 2 2h4"/>
        <rect width="8" height="8" x="13" y="13" rx="2"/>
      </svg>
    ),
    title: 'Nosso MCP HUB - Integração Universal',
    description: 'Nosso MCP Server Super Inteligente conecta-se a qualquer sistema: ERPs, bancos de dados, APIs externas, sistemas legados, logística, BI, e-commerce. Se existe API ou banco, o Agente acessa facilmente. Tudo na palma da sua mão.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      </svg>
    ),
    title: 'Governança e Controle Total',
    description: 'Defina exatamente o que o Agente pode acessar: sistemas, tabelas, módulos, leitura/escrita, ações permitidas. Controle por usuário, setor ou agente. Auditoria completa.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: 'Automação Empresarial',
    description: 'Automatize fluxos entre setores, execute processos internos, crie registros automaticamente. O Agente age dentro das regras definidas, transformando processos manuais em automação inteligente.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    title: 'Integração com ERPs',
    description: 'Funciona com Odoo, SAP, TOTVS, ou qualquer ERP. Consulta dados em tempo real, cria pedidos, emite faturas, movimenta estoque. Tudo integrado e controlado.',
  },
];

export default function Features() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="recursos" className="features">
      <div className="section-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Plataforma de <span className="gradient-text">Agente IA</span>
          </h2>
          <p className="section-subtitle">
            Não é chatbot. É um colaborador digital governado, integrado ao seu negócio, que consulta, executa e decide com controle total.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
