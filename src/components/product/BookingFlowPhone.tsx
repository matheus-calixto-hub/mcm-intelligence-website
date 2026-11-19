'use client';

import { useEffect, useState } from 'react';

const STEPS = [
  {
    id: 'chat',
    title: 'FTG Barbearia',
    kind: 'chat' as const,
  },
  {
    id: 'attendant',
    title: 'Profissional',
    kind: 'flow' as const,
    heading: 'Com quem você quer agendar?',
    options: [
      { title: 'João — Barbeiro', selected: true },
      { title: 'Ana — Barbeira', selected: false },
    ],
    footer: 'Continuar',
  },
  {
    id: 'services',
    title: 'Serviços',
    kind: 'flow' as const,
    heading: 'Quais serviços?',
    options: [
      { title: 'Corte', meta: 'R$ 35 · 30 min', selected: true },
      { title: 'Barba', meta: 'R$ 25 · 20 min', selected: true },
      { title: 'Sobrancelha', meta: 'R$ 15 · 10 min', selected: false },
    ],
    footer: 'Continuar',
  },
  {
    id: 'schedule',
    title: 'Agenda',
    kind: 'flow' as const,
    heading: 'Escolha o horário',
    slots: ['09:00', '10:00', '11:30', '14:00', '15:30', '17:00'],
    selectedSlot: '10:00',
    day: 'Qui, 26 nov',
    footer: 'Continuar',
  },
  {
    id: 'review',
    title: 'Revisão',
    kind: 'flow' as const,
    heading: 'Confira seu agendamento',
    summary: [
      ['Profissional', 'João — Barbeiro'],
      ['Serviços', 'Corte + Barba'],
      ['Quando', 'Qui, 26 nov · 10:00'],
      ['Total', 'R$ 60'],
    ],
    footer: 'Confirmar',
  },
  {
    id: 'done',
    title: 'FTG Barbearia',
    kind: 'done' as const,
  },
];

/** Simulação do Flow Meta de agendamento (profissional → serviços → agenda → revisão). */
export default function BookingFlowPhone({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 2800);
    return () => window.clearInterval(t);
  }, []);

  const current = STEPS[step];

  return (
    <div className={`bk-phone ${compact ? 'is-compact' : ''}`} aria-hidden="true">
      <div className="bk-phone-bezel">
        <div className="bk-phone-notch" />
        <div className="bk-phone-screen">
          <header className="bk-wa-head">
            <span className="bk-wa-back">‹</span>
            <div>
              <strong>{current.title}</strong>
              <em>WhatsApp Business</em>
            </div>
          </header>

          {current.kind === 'chat' && (
            <div className="bk-chat">
              <div className="bk-bubble in">
                Olá! Quer marcar um horário? Toque abaixo e escolha profissional,
                serviço e horário.
              </div>
              <div className="bk-flow-cta">Agendar horário</div>
              <div className="bk-bubble out">Agendar horário</div>
            </div>
          )}

          {current.kind === 'flow' && (
            <div className="bk-flow">
              <p className="bk-flow-kicker">Formulário do Flow</p>
              <h4>{current.heading}</h4>
              {'day' in current && current.day && (
                <p className="bk-flow-day">{current.day}</p>
              )}
              {'options' in current && current.options && (
                <ul className="bk-flow-options">
                  {current.options.map((opt) => (
                    <li key={opt.title} className={opt.selected ? 'is-on' : ''}>
                      <span className="bk-radio" />
                      <div>
                        <strong>{opt.title}</strong>
                        {'meta' in opt && opt.meta ? <em>{opt.meta}</em> : null}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {'slots' in current && current.slots && (
                <div className="bk-slots">
                  {current.slots.map((slot) => (
                    <span
                      key={slot}
                      className={slot === current.selectedSlot ? 'is-on' : ''}
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              )}
              {'summary' in current && current.summary && (
                <dl className="bk-summary">
                  {current.summary.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <button type="button" className="bk-flow-footer">
                {current.footer}
              </button>
            </div>
          )}

          {current.kind === 'done' && (
            <div className="bk-chat">
              <div className="bk-bubble in">
                ✅ Agendamento confirmado
                <br />
                João · Corte + Barba
                <br />
                Qui, 26 nov às 10:00
              </div>
              <div className="bk-bubble in muted">
                Precisa remarcar? Abra o painel no WhatsApp.
              </div>
            </div>
          )}

          <div className="bk-dots">
            {STEPS.map((s, i) => (
              <i key={s.id} className={i === step ? 'is-on' : ''} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
