'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const quoteTypes: Record<string, { message: string; title: string }> = {
  basic: {
    message: WHATSAPP_MESSAGES.basic,
    title: 'Plano Basic',
  },
  essentials: {
    message: WHATSAPP_MESSAGES.essentials,
    title: 'Plano Essentials',
  },
  professional: {
    message: WHATSAPP_MESSAGES.professional,
    title: 'Plano Professional',
  },
  enterprise: {
    message: WHATSAPP_MESSAGES.enterprise,
    title: 'Plano Enterprise',
  },
  customizations: {
    message: WHATSAPP_MESSAGES.customizations,
    title: 'Customizações Odoo',
  },
  consulting: {
    message: WHATSAPP_MESSAGES.consulting,
    title: 'Consultoria Odoo',
  },
  support: {
    message: WHATSAPP_MESSAGES.support,
    title: 'Sustentação Odoo',
  },
  integrations: {
    message: WHATSAPP_MESSAGES.integrations,
    title: 'Integrações Odoo',
  },
  implementation: {
    message: WHATSAPP_MESSAGES.implementation,
    title: 'Implantação Odoo Enterprise',
  },
  migration: {
    message: WHATSAPP_MESSAGES.migration,
    title: 'Migração de Sistemas',
  },
  upgrade: {
    message: WHATSAPP_MESSAGES.upgrade,
    title: 'Upgrade e Modernização',
  },
};

export default function CTA() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const searchParams = useSearchParams();
  const [quoteType, setQuoteType] = useState<string | null>(null);
  const [whatsappMessage, setWhatsappMessage] = useState(WHATSAPP_MESSAGES.demo);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Ler parâmetro da URL (query params)
    const tipo = searchParams.get('tipo');
    
    if (tipo && quoteTypes[tipo]) {
      setQuoteType(tipo);
      setWhatsappMessage(quoteTypes[tipo].message);
    } else {
      setQuoteType(null);
      setWhatsappMessage(WHATSAPP_MESSAGES.demo);
    }
  }, [searchParams]);

  useEffect(() => {
    // Scroll para a seção quando há hash #contato
    const handleHashChange = () => {
      if (window.location.hash === '#contato' && !hasScrolled) {
        setTimeout(() => {
          const element = document.getElementById('contato');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setHasScrolled(true);
          }
        }, 100);
      }
    };

    // Verificar hash inicial
    if (window.location.hash === '#contato') {
      handleHashChange();
    }

    // Escutar mudanças no hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [hasScrolled]);

  const selectedQuote = quoteType ? quoteTypes[quoteType] : null;

  return (
    <section ref={sectionRef} id="contato" className="cta-section">
      <div className="cta-glow"></div>
      <div className="container">
        <div className="cta-card glass-card">
          <div className="cta-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
            <span>{selectedQuote ? 'Solicitar Orçamento' : 'Agende sua Demonstração'}</span>
          </div>
          
          {selectedQuote && (
            <div style={{ 
              marginBottom: '1.5rem', 
              padding: '1rem', 
              background: 'hsl(var(--primary) / 0.1)', 
              borderRadius: '0.75rem',
              border: '1px solid hsl(var(--primary) / 0.2)',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.5rem' }}>
                Você está solicitando orçamento para:
              </p>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'hsl(var(--primary))' }}>
                {selectedQuote.title}
              </h3>
            </div>
          )}

          <h2 className="cta-title">
            Pronto para <span className="gradient-text-mcm">transformar</span> sua operação?
          </h2>
          <p className="cta-subtitle">
            Agende uma demonstração gratuita de 10 minutos e veja nosso Agente IA em ação. Você já pode fazer um agendamento conosco e ver como ele funciona na prática.
          </p>

          <div className="cta-roi" style={{ margin: '2rem 0', padding: '1.5rem', background: 'hsl(var(--card))', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>ROI Real</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--primary))' }}>R$ 1.100,00 ~ R$ 1.650,00</div>
                <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Economia/mês (1h/dia gerente)</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--primary))' }}>R$ 9.000,00</div>
                <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Economia/mês (1 lead/dia)</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', marginTop: '1rem' }}>
              O Agente vira ativo estratégico, não custo.
            </p>
          </div>
          
          <div className="cta-buttons">
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-hero btn-gradient-demo">
              Agendar Demonstração em 10 Minutos
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
              </svg>
            </a>
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-gradient-quote">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Solicitar Orçamento
            </a>
          </div>
          
          <div className="cta-footer">
            <div className="cta-footer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Nossa IA vai responder no WhatsApp e agendar uma reunião conforme disponibilidade</span>
            </div>
            <div className="cta-footer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Resposta imediata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
