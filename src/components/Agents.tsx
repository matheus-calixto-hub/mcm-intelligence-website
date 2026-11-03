'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

const POINTS = [
  {
    title: 'WhatsApp como canal de trabalho',
    body: 'O time e o cliente já estão no WhatsApp. O agente atende, qualifica, consulta dados autorizados e registra no sistema — sem forçar um novo app de chat.',
  },
  {
    title: 'Chatbox para o time da empresa',
    body: 'Inbox / chatbox para pessoas representarem a marca: o comercial ou o suporte assume a conversa, vê o histórico e responde como a empresa — no mesmo canal em que o cliente já está.',
  },
  {
    title: 'Governança da resposta da IA',
    body: 'Você define quando a IA responde sozinha, quando só sugere e quando escala para humano — por cliente, por fluxo ou por horário. Handoff, escopo de leitura/escrita, opt-in e trilha no CRM ou chatter.',
  },
  {
    title: 'Templates, agendamento e disparo em massa',
    body: 'Templates aprovados na Meta, envio agendado a partir do CRM e campanhas em massa sob consulta — alinhamos escopo, custos da Meta e regras de opt-in/LGPD antes de subir.',
  },
  {
    title: 'Independente do ERP',
    body: 'Conecta no Odoo quando faz sentido. Também fala com APIs, CRM, planilhas e legado. A decisão é do negócio, não do fornecedor.',
  },
];

export default function Agents() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} id="agentes" className="section agents">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Agentes de IA</span>
          <h2>Um operador digital no WhatsApp — com chatbox humano e governança da IA.</h2>
          <p>
            Montamos agentes e automações no WhatsApp sob medida: API oficial da
            Meta ou Evolution, orquestração com n8n e LLMs, inbox para o time
            atender como a empresa, e regras claras do que a IA pode (ou não)
            responder — com registro no sistema que você já usa, com ou sem Odoo.
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
              <li>Definimos canal, chatbox, custos Meta e o que a IA pode responder.</li>
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
