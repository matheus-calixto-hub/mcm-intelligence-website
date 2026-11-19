'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Loop curto para autoplay (sem som). */
  loopSrc: string;
  /** Versão completa com controles. */
  fullSrc?: string;
  poster: string;
  title?: string;
  caption?: string;
};

/**
 * Demo do produto: loop mudo em destaque + opção de ver a gravação completa.
 */
export default function ProductDemoVideo({
  loopSrc,
  fullSrc,
  poster,
  title = 'Demonstração no celular',
  caption = 'Gravação real do SAC — fila, chat, follow-up e painel.',
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<'loop' | 'full'>('loop');
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    if (mode === 'loop' && !reduced) {
      el.play().catch(() => undefined);
    }
  }, [mode, reduced, loopSrc, fullSrc]);

  const src = mode === 'full' && fullSrc ? fullSrc : loopSrc;

  return (
    <figure className="fu-demo-video">
      <div className="fu-demo-video-frame">
        <video
          ref={videoRef}
          className="fu-demo-video-el"
          src={src}
          poster={poster}
          playsInline
          muted={mode === 'loop'}
          loop={mode === 'loop'}
          autoPlay={mode === 'loop' && !reduced}
          controls={mode === 'full' || reduced}
          preload="metadata"
          aria-label={title}
        />
      </div>
      <figcaption className="fu-demo-video-cap">
        <span className="fu-demo-video-title">{title}</span>
        <span className="fu-demo-video-text">{caption}</span>
        {fullSrc ? (
          <div className="fu-demo-video-actions">
            {mode === 'loop' ? (
              <button type="button" className="fu-demo-video-btn" onClick={() => setMode('full')}>
                Ver gravação completa
              </button>
            ) : (
              <button type="button" className="fu-demo-video-btn" onClick={() => setMode('loop')}>
                Voltar ao destaque (loop)
              </button>
            )}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
