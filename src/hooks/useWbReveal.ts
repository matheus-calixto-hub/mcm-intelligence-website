'use client';

import { useEffect, useRef } from 'react';

function isSlowNetwork(): boolean {
  if (typeof navigator === 'undefined') return false;
  const conn = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const t = conn.effectiveType || '';
  return t === 'slow-2g' || t === '2g' || t === '3g';
}

/**
 * Reveal progressivo sem trancar o conteúdo:
 * - HTML já nasce visível (CSS)
 * - Em rede lenta / reduced-motion: marca tudo de uma vez
 * - Failsafe curto garante que nada fique “sumido”
 */
export function useWbReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll('.wb-reveal'));
    if (!nodes.length) return;

    const revealAll = () => {
      nodes.forEach((n) => n.classList.add('is-in'));
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || isSlowNetwork()) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      // Antecipa bastante: conteúdo “pronto” antes de entrar na tela
      { threshold: 0.01, rootMargin: '120px 0px 120px 0px' },
    );

    nodes.forEach((n) => io.observe(n));

    // Failsafe: se o IO atrasar (4G, tab em background), libera tudo
    const failsafe = window.setTimeout(revealAll, 900);

    const onVisible = () => {
      if (document.visibilityState === 'visible') revealAll();
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      window.clearTimeout(failsafe);
      document.removeEventListener('visibilitychange', onVisible);
      io.disconnect();
    };
  }, []);

  return ref;
}
