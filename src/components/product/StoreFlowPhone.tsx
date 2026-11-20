'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  {
    label: 'Cliente · oi',
    bubbles: [
      { side: 'in', text: 'Oi' },
      {
        side: 'out',
        text: 'Olá! Bem-vindo à loja.\n• produtos\n• pedido\n• atendente',
      },
    ],
  },
  {
    label: 'Catálogo no zap',
    bubbles: [
      { side: 'in', text: 'produtos' },
      {
        side: 'out',
        text: '1. Consultoria 1h — R$ 350\n2. Implantação WA — R$ 1.900\n3. Landing — R$ 1.200',
      },
    ],
  },
  {
    label: 'Pedido montado',
    bubbles: [
      { side: 'in', text: '2' },
      {
        side: 'out',
        text: 'Carrinho\n• Implantação WA x1\nTotal: R$ 1.900\n\nDigite confirmar',
      },
    ],
  },
  {
    label: 'Confirmado',
    bubbles: [
      { side: 'in', text: 'confirmar' },
      {
        side: 'out',
        text: 'Pedido S00042 recebido! ✅\nEquipe confirma em breve.',
      },
    ],
  },
  {
    label: 'Chatbox · Bot Loja',
    bubbles: [
      {
        side: 'sys',
        text: 'Bot Loja  ·  Ativo  ⊕',
      },
      {
        side: 'out',
        text: 'Ana: Já falo com você no zap — bot pausado.',
      },
      { side: 'sys', text: 'Bot Loja  ·  Pausado' },
    ],
  },
] as const;

/** Preview conversacional da Loja WA (catálogo → pedido → bot on/off). */
export default function StoreFlowPhone({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setStep((s) => (s + 1) % SLIDES.length);
    }, 3400);
    return () => window.clearInterval(t);
  }, []);

  const current = SLIDES[step];

  return (
    <div className={`bk-phone store-phone ${compact ? 'is-compact' : ''}`}>
      <div className="bk-phone-bezel">
        <div className="bk-phone-notch" />
        <div className="bk-phone-screen store-phone-screen">
          <header className="store-phone-head">
            <strong>Loja MCM</strong>
            <span>WhatsApp · Cloud API</span>
          </header>
          <div className="store-phone-msgs" key={step}>
            {current.bubbles.map((b, i) => (
              <div
                key={`${step}-${i}`}
                className={`store-bubble store-bubble-${b.side}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {b.text.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < b.text.split('\n').length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="bk-dots bk-dots-over">
            {SLIDES.map((s, i) => (
              <button
                key={s.label}
                type="button"
                className={i === step ? 'is-on' : ''}
                aria-label={s.label}
                onClick={() => setStep(i)}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="bk-phone-caption">{current.label}</p>
    </div>
  );
}
