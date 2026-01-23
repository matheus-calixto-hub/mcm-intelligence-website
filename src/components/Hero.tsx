'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="gradient-glow"></div>
        <div className="grid-pattern"></div>
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div className="hero-badge glass-card">
              <span className="badge-dot"></span>
              <span>Não é chatbot.</span>
            </div>
            <div className="hero-badge glass-card">
              <span className="badge-dot"></span>
              <span>São colaboradores digitais especializados e integrados aos seus negócios, que consultam e executam sobre seu controle.</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Agente Inteligente
            <br />
            <span className="gradient-text">Sistema Empresarial</span>
          </h1>
          
          <p className="hero-subtitle">
            Agentes de IA governados que consultam, executam e decidem com controle total. Integrados via nosso MCP Server Super Inteligente a qualquer ERP, Sistema ou Banco de Dados. Tudo na palma da sua mão via WhatsApp ou Chat Interno.
          </p>
          
          <div className="hero-buttons">
            <a href="#contato" className="btn btn-hero">
              Agendar Demonstração em 10 Minutos
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="#produtos" className="btn btn-hero-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8"/>
                <rect width="16" height="12" x="4" y="8" rx="2"/>
                <path d="M2 14h2"/>
                <path d="M20 14h2"/>
                <path d="M15 13v2"/>
                <path d="M9 13v2"/>
              </svg>
              Ver Planos
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Governado e Controlado</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Disponível</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">∞</span>
              <span className="stat-label">Integrações via Nosso MCP HUB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
