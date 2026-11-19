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

export function useScrollAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = node.querySelectorAll('.reveal');
    const elements = targets.length ? Array.from(targets) : [node];

    const revealAll = () => {
      elements.forEach((el) => {
        el.classList.add('reveal', 'is-visible');
      });
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || isSlowNetwork()) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '100px 0px 100px 0px' },
    );

    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    const failsafe = window.setTimeout(revealAll, 900);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return ref;
}
