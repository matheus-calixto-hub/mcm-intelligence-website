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
 * Demo do produto: poster primeiro; só baixa/toca o vídeo quando entra na tela.
 */
export default function ProductDemoVideo({
  loopSrc,
  fullSrc,
  poster,
  title = 'Demonstração no celular',
  caption = 'Gravação real do SAC — fila, chat, follow-up e painel.',
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'loop' | 'full'>('loop');
  const [reduced, setReduced] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '80px 0px', threshold: 0.05 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return;
    el.load();
    if (mode === 'loop' && !reduced) {
      el.play().catch(() => undefined);
    }
  }, [mode, reduced, loopSrc, fullSrc, shouldLoad]);

  const src = mode === 'full' && fullSrc ? fullSrc : loopSrc;

  return (
    <figure className="fu-demo-video">
      <div className="fu-demo-video-frame" ref={frameRef}>
        <video
          ref={videoRef}
          className="fu-demo-video-el"
          src={shouldLoad ? src : undefined}
          poster={poster}
          playsInline
          muted={mode === 'loop'}
          loop={mode === 'loop'}
          autoPlay={shouldLoad && mode === 'loop' && !reduced}
          controls={mode === 'full' || reduced}
          preload={shouldLoad ? 'metadata' : 'none'}
          aria-label={title}
        />
      </div>
      <figcaption className="fu-demo-video-cap">
        <span className="fu-demo-video-title">{title}</span>
        <span className="fu-demo-video-text">{caption}</span>
        {fullSrc ? (
          <div className="fu-demo-video-actions">
            {mode === 'loop' ? (
              <button
                type="button"
                className="fu-demo-video-btn"
                onClick={() => {
                  setShouldLoad(true);
                  setMode('full');
                }}
              >
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
