'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export type PhoneSlide = {
  src: string;
  label: string;
  alt?: string;
};

type Props = {
  slides: readonly PhoneSlide[];
  intervalMs?: number;
  compact?: boolean;
};

/** Carrossel em moldura de celular — prints reais do SAC no mobile. */
export default function ProductPhoneGallery({
  slides,
  intervalMs = 3800,
  compact = false,
}: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = window.setInterval(() => {
      setStep((s) => (s + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;
  const current = slides[step];

  return (
    <div className={`bk-phone bk-phone-real fu-phone-gallery ${compact ? 'is-compact' : ''}`}>
      <div className="bk-phone-bezel">
        <div className="bk-phone-notch" />
        <div className="bk-phone-screen bk-phone-screen-real">
          <Image
            src={current.src}
            alt={current.alt || current.label}
            width={472}
            height={1024}
            className="bk-phone-shot fu-phone-shot"
            priority={!compact && step === 0}
          />
          <div className="bk-dots bk-dots-over">
            {slides.map((s, i) => (
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
