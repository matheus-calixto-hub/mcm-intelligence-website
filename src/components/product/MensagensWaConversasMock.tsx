'use client';

/** Mock da tela Conversas (Mensagens WA / Discuss) — visual próximo ao Odoo. */
export default function MensagensWaConversasMock({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className={`odoo-conv ${compact ? 'is-compact' : ''}`} aria-hidden="true">
      <div className="odoo-conv-chrome">
        <aside className="odoo-conv-nav">
          <div className="odoo-conv-app">
            <span className="odoo-conv-app-icon">WA</span>
            <strong>Mensagens WA</strong>
          </div>
          <ul>
            <li className="is-on">Conversas</li>
            <li>Fila de atenção</li>
            <li>Sem resposta</li>
            <li>Contatos</li>
            <li>Follow-up</li>
            <li>Visão geral</li>
          </ul>
        </aside>

        <div className="odoo-conv-main">
          <div className="odoo-conv-threads">
            <header>
              <strong>Conversas</strong>
              <span>Inbox</span>
            </header>
            <ul>
              {[
                ['Carla Mendes', 'Oi, ainda tem a proposta?', '2h 10', true],
                ['Matheus', 'Pode me enviar o PDF?', '48 min', false],
                ['Maria Silva', 'Obrigada! Vou analisar.', '1h 05', false],
                ['João Pereira', 'Qual o prazo de entrega?', '3h 20', true],
              ].map(([name, preview, wait, late]) => (
                <li key={String(name)} className={name === 'Carla Mendes' ? 'is-active' : ''}>
                  <div className="odoo-conv-avatar">{String(name).slice(0, 1)}</div>
                  <div>
                    <strong>{name}</strong>
                    <p>{preview}</p>
                  </div>
                  <em className={late ? 'is-late' : ''}>{wait}</em>
                </li>
              ))}
            </ul>
          </div>

          <div className="odoo-conv-chat">
            <header>
              <div>
                <strong>Carla Mendes</strong>
                <span>WhatsApp · JundMed</span>
              </div>
              <span className="odoo-conv-badge">Aguardando resposta · 2h 10</span>
            </header>
            <div className="odoo-conv-msgs">
              <div className="odoo-msg in">
                <p>Oi! Queria retomar a proposta do plano família.</p>
                <time>09:12</time>
              </div>
              <div className="odoo-msg out">
                <p>
                  <strong>*Ana - Suporte - JundMed*</strong>
                  <br />
                  Claro, Carla! Te mando o resumo e a gente agenda um retorno.
                </p>
                <time>09:18</time>
              </div>
              <div className="odoo-msg in">
                <p>Oi, ainda tem a proposta?</p>
                <time>11:28</time>
              </div>
            </div>
            <footer>
              <div className="odoo-composer">
                Digite uma mensagem… <span>Follow-up</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
