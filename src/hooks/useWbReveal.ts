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
 * Reveal com animação visível no scroll.
 * - Rede ok: esconde via html.wb-motion e anima ao entrar na tela
 * - Rede lenta / reduced-motion: tudo visível, sem trancar
 * - Failsafe longo só para não deixar nada preso
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
      document.documentElement.classList.add('wb-motion-safe');
      document.documentElement.classList.remove('wb-motion');
      revealAll();
      return;
    }

    document.documentElement.classList.add('wb-motion');
    document.documentElement.classList.remove('wb-motion-safe');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      // Dispara perto da viewport para a animação ser vista
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((n) => io.observe(n));

    // Só destrava o que ainda não entrou (evita “sumir” no 4G)
    const failsafe = window.setTimeout(() => {
      nodes.forEach((n) => {
        if (!n.classList.contains('is-in')) n.classList.add('is-in');
      });
    }, 3500);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return ref;
}
