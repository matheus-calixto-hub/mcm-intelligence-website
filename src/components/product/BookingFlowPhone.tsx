'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = [
  {
    src: '/products/booking-chat.jpg',
    label: 'Chat · botão Agendar',
  },
  {
    src: '/products/booking-flow-profissional.jpg',
    label: 'Flow · Profissional',
  },
  {
    src: '/products/booking-flow-servicos.jpg',
    label: 'Flow · Serviços',
  },
  {
    src: '/products/booking-flow-data.jpg',
    label: 'Flow · Data',
  },
  {
    src: '/products/booking-flow-horarios.jpg',
    label: 'Flow · Horário',
  },
  {
    src: '/products/booking-flow-revisao.jpg',
    label: 'Flow · Revisão',
  },
  {
    src: '/products/booking-confirm.jpg',
    label: 'Confirmado no zap',
  },
  {
    src: '/products/booking-manage.jpg',
    label: 'Remarcar / cancelar',
  },
] as const;

/** Preview oficial do Flow Meta — prints reais FTG Barbearia. */
export default function BookingFlowPhone({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setStep((s) => (s + 1) % SLIDES.length);
    }, 3200);
    return () => window.clearInterval(t);
  }, []);

  const current = SLIDES[step];

  return (
    <div className={`bk-phone bk-phone-real ${compact ? 'is-compact' : ''}`}>
      <div className="bk-phone-bezel">
        <div className="bk-phone-notch" />
        <div className="bk-phone-screen bk-phone-screen-real">
          <Image
            src={current.src}
            alt={current.label}
            width={472}
            height={1024}
            className="bk-phone-shot"
            priority={!compact && step === 0}
          />
          <div className="bk-dots bk-dots-over">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
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
