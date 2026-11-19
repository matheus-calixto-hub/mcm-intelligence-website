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

function inViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
}

/**
 * Reveal com animação no scroll.
 * Above-the-fold entra na hora; below-fold anima ao aparecer.
 * Rede lenta: tudo visível, sem trancar.
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
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    );

    // Já na tela: revela no próximo frame (anima sem FOUC longo)
    requestAnimationFrame(() => {
      nodes.forEach((n) => {
        if (inViewport(n)) {
          n.classList.add('is-in');
        } else {
          io.observe(n);
        }
      });
    });

    const failsafe = window.setTimeout(() => {
      nodes.forEach((n) => {
        if (!n.classList.contains('is-in')) n.classList.add('is-in');
      });
    }, 2800);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return ref;
}
