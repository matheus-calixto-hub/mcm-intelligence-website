'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

const POINTS = [
  {
    title: 'WhatsApp como canal de trabalho',
    body: 'O time e o cliente já estão no WhatsApp. O agente atende, qualifica, consulta dados autorizados e registra no sistema — sem forçar um novo app de chat.',
  },
  {
    title: 'Templates, agendamento e disparo em massa',
    body: 'Templates aprovados na Meta, envio agendado a partir do CRM e campanhas em massa sob consulta — alinhamos escopo, custos da Meta e regras de opt-in/LGPD antes de subir.',
  },
  {
    title: 'Independente do ERP',
    body: 'Conecta no Odoo quando faz sentido. Também fala com APIs, CRM, planilhas e legado. A decisão é do negócio, não do fornecedor.',
  },
  {
    title: 'Governança de verdade',
    body: 'Handoff humano, escopo do que o agente pode ler e escrever, opt-in e trilha no chatter ou no CRM. IA útil, sob o seu controle.',
  },
];

export default function Agents() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="agentes" className="section agents">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Agentes de IA</span>
          <h2>Um operador digital no WhatsApp — sem reinventar o seu stack.</h2>
          <p>
            Montamos agentes e automações no WhatsApp sob medida: API oficial da
            Meta ou Evolution, orquestração com n8n e LLMs, registro de leads e
            histórico no sistema que você já usa — com ou sem Odoo.
          </p>
        </div>

        <div className="agents-layout">
          <div className="agents-points">
            {POINTS.map((point) => (
              <div key={point.title} className="agents-point reveal">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>

          <aside className="agents-panel reveal">
            <h3>Como começa</h3>
            <ol>
              <li>Entendemos o processo (vendas, suporte, clínica, back-office).</li>
              <li>Definimos canal, templates, custos Meta e o que o agente pode fazer.</li>
              <li>Pilotamos em produção controlada e medimos handoff + conversão.</li>
            </ol>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.agents)}
              className="btn btn-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero um agente no WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
