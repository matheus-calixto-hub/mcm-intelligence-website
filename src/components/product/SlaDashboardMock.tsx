/** Ilustração estática do painel Visão geral — dados demo para o site. */
export default function SlaDashboardMock() {
  return (
    <div className="sla-mock" aria-hidden="true">
      <div className="sla-mock-top">
        <div>
          <p className="sla-mock-kicker">Mensagens WA</p>
          <h3>Visão geral</h3>
        </div>
        <div className="sla-mock-filters">
          <span>Últimos 30 dias</span>
          <span>JundMed</span>
          <span>Equipe toda</span>
        </div>
      </div>

      <div className="sla-mock-kpis">
        {[
          { label: 'Contatos atendidos', value: '48', hint: '126 respostas' },
          { label: '1ª resposta WA', value: '12 min', hint: 'tempo médio' },
          { label: '1ª resposta e-mail', value: '1h 40', hint: 'tempo médio' },
          { label: 'No SLA', value: '87%', hint: '110 ok · 16 estouraram' },
          { label: 'Na fila agora', value: '5', hint: '2 com SLA estourado' },
          { label: 'Sem resposta', value: '9', hint: 'média 2d 4h' },
        ].map((k) => (
          <div key={k.label} className="sla-mock-kpi">
            <span>{k.label}</span>
            <strong>{k.value}</strong>
            <em>{k.hint}</em>
          </div>
        ))}
      </div>

      <div className="sla-mock-today">
        {[
          ['WA recebidas', '34'],
          ['WA enviadas', '41'],
          ['E-mails recebidos', '12'],
          ['E-mails enviados', '18'],
        ].map(([l, v]) => (
          <div key={l}>
            <span>{l}</span>
            <strong>{v}</strong>
          </div>
        ))}
      </div>

      <div className="sla-mock-grid">
        <div className="sla-mock-panel">
          <header>
            <h4>Respostas no período</h4>
          </header>
          <div className="sla-mock-bars">
            {[
              [18, 8],
              [22, 10],
              [15, 12],
              [28, 9],
              [20, 14],
              [24, 11],
              [19, 7],
            ].map(([wa, mail], i) => (
              <div key={i} className="sla-mock-bar-col">
                <div className="sla-mock-bar sla-mock-bar-wa" style={{ height: `${wa * 2.2}px` }} />
                <div className="sla-mock-bar sla-mock-bar-mail" style={{ height: `${mail * 2.2}px` }} />
              </div>
            ))}
          </div>
          <div className="sla-mock-legend">
            <span className="wa">WhatsApp</span>
            <span className="mail">E-mail</span>
          </div>
        </div>

        <div className="sla-mock-panel sla-mock-donut-wrap">
          <header>
            <h4>Resultado do SLA</h4>
          </header>
          <div className="sla-mock-donut" />
          <div className="sla-mock-donut-label">
            <strong>87%</strong>
            <span>no prazo</span>
          </div>
          <div className="sla-mock-legend">
            <span className="ok">No SLA</span>
            <span className="late">Estourou</span>
          </div>
        </div>

        <div className="sla-mock-panel">
          <header>
            <h4>Follow-up</h4>
          </header>
          <div className="sla-mock-fu">
            {[
              ['Agendamentos', '22'],
              ['Enviados', '48'],
              ['Pendentes', '9'],
              ['Falhas', '2'],
            ].map(([l, v]) => (
              <div key={l}>
                <span>{l}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
          <div className="sla-mock-hbars">
            {[
              ['Agendado', 40, '#0ea5e9'],
              ['Concluído', 72, '#22c55e'],
              ['Parcial', 28, '#f59e0b'],
              ['Falhas', 12, '#dc2626'],
            ].map(([label, w, color]) => (
              <div key={String(label)} className="sla-mock-hbar">
                <span>{label}</span>
                <i style={{ width: `${w}%`, background: String(color) }} />
              </div>
            ))}
          </div>
        </div>

        <div className="sla-mock-panel">
          <header>
            <h4>Atenção da operação</h4>
          </header>
          <ul className="sla-mock-attn">
            {[
              ['Carla Mendes', '2h 10', true],
              ['Matheus', '1h 05', false],
              ['Maria Silva', '48 min', false],
              ['João Pereira', '3h 20', true],
            ].map(([name, wait, late]) => (
              <li key={String(name)} className={late ? 'is-late' : ''}>
                <strong>{name}</strong>
                <span>{wait}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
