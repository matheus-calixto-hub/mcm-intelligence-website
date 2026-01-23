'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const governanceFeatures = [
  {
    title: 'Controle de Acesso',
    description: 'Defina exatamente quais sistemas, tabelas, módulos e dados o Agente pode acessar. Controle granular por usuário, setor ou agente.',
    icon: '🔒',
  },
  {
    title: 'Permissões de Leitura/Escrita',
    description: 'Especifique o que pode ser lido e o que pode ser escrito. Bloqueie ações específicas ou permita apenas consultas. Controle total sobre operações.',
    icon: '✍️',
  },
  {
    title: 'Auditoria Completa',
    description: 'Logs de todas as conversas, registro de todas as ações executadas, rastreabilidade completa para compliance e segurança em ambientes críticos.',
    icon: '📋',
  },
  {
    title: 'Perfis por Função',
    description: 'Dono/Diretoria: visão estratégica. Compras: fornecedores e estoque. Vendas: leads e pedidos. Financeiro: faturas e fluxo. Cada perfil com acesso controlado.',
    icon: '👥',
  },
];

const actions = [
  {
    title: 'Criar e Gerenciar Registros',
    description: 'Criar produtos, contatos, pedidos, faturas, orçamentos. Operações em massa (bulk) para eficiência máxima.',
  },
  {
    title: 'Executar Métodos Customizados',
    description: 'Confirmar pedidos, cancelar faturas, processar pagamentos. Execute qualquer método público do Odoo via nosso MCP HUB.',
  },
  {
    title: 'Consultar e Atualizar Dados',
    description: 'Buscar, ler, atualizar qualquer registro do sistema. Acesso inteligente a bancos de dados via nosso MCP Server Super Inteligente.',
  },
  {
    title: 'Movimentar Estoque',
    description: 'Consultar disponibilidade, criar transferências, ajustar inventário. Tudo em tempo real via WhatsApp ou Chat Interno.',
  },
  {
    title: 'Gerenciar Fluxos Completos',
    description: 'Do orçamento à fatura, do pedido à entrega. Execute fluxos completos entre áreas com governança total.',
  },
  {
    title: 'Acessar Qualquer Modelo',
    description: 'Nosso MCP HUB acessa qualquer modelo de negócio: vendas, compras, estoque, financeiro, CRM, ERPs, bancos de dados. Tudo na palma da sua mão.',
  },
];

export default function Governance() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="governanca" className="governance">
      <div className="section-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Governança</span> e Controle Total
          </h2>
          <p className="section-subtitle">
            A IA não é solta. Ela opera com governança corporativa. Você define exatamente o que pode ser acessado, lido, escrito e executado.
          </p>
        </div>
        
        <div className="governance-grid">
          {governanceFeatures.map((feature, index) => (
            <div key={index} className="governance-card glass-card">
              <div className="governance-icon" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="governance-actions" style={{ marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', textAlign: 'center' }}>
            O Poder Real do Nosso MCP HUB
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', marginBottom: '2rem' }}>
            Não são promessas. São capacidades reais que você já pode usar hoje. Tudo governado, auditado e na palma da sua mão.
          </p>
          <div className="actions-grid">
            {actions.map((action, index) => (
              <div key={index} className="action-item glass-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'hsl(var(--primary))' }}>
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'hsl(var(--foreground))' }}>
                      {action.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: '1.5' }}>
                      {action.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="governance-note" style={{ marginTop: '3rem', textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
            <strong style={{ color: 'hsl(var(--foreground))' }}>Ideal para empresas que precisam de controle, conformidade e rastreabilidade.</strong>
            <br />
            Sempre dentro das regras de acesso definidas pela sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
