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
      document.documentElement.classList.add('wb-motion-safe');
      document.documentElement.classList.remove('wb-motion');
      revealAll();
      return;
    }

    document.documentElement.classList.add('wb-motion');
    document.documentElement.classList.remove('wb-motion-safe');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    );

    requestAnimationFrame(() => {
      elements.forEach((el) => {
        el.classList.add('reveal');
        if (inViewport(el)) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    });

    const failsafe = window.setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
      });
    }, 2800);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return ref;
}
