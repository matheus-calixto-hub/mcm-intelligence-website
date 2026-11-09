'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FTG, getFtgWhatsAppUrl } from '@/config/ftgBarbearia';

export default function FtgBarbeariaLanding() {
  const [scrolled, setScrolled] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const wa = getFtgWhatsAppUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll('.ftg-reveal');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      nodes.forEach((n) => n.classList.add('is-in'));
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
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ftg" ref={pageRef}>
      <header className={`ftg-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="ftg-nav-inner">
          <a href="#topo" className="ftg-nav-brand">
            {FTG.brand}
          </a>
          <div className="ftg-nav-actions">
            <a href="#servicos" className="ftg-nav-link">
              Serviços
            </a>
            <a href={wa} className="ftg-btn ftg-btn-sm" target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </div>
        </div>
      </header>

      <section className="ftg-hero" id="topo">
        <div className="ftg-hero-media" aria-hidden="true">
          <div className="ftg-hero-photo" />
          <div className="ftg-hero-grain" />
          <div className="ftg-hero-stripe" />
        </div>
        <div className="ftg-hero-copy">
          <p className="ftg-brand-mark ftg-hero-in">{FTG.brand}</p>
          <h1 className="ftg-hero-title ftg-hero-in ftg-hero-in-2">{FTG.tagline}</h1>
          <p className="ftg-hero-blurb ftg-hero-in ftg-hero-in-3">{FTG.blurb}</p>
          <div className="ftg-hero-cta ftg-hero-in ftg-hero-in-4">
            <a href={wa} className="ftg-btn" target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
            <a href="#como" className="ftg-btn ftg-btn-ghost">
              Como funciona
            </a>
          </div>
        </div>
      </section>

      <section className="ftg-section" id="servicos">
        <div className="ftg-wrap">
          <header className="ftg-section-head ftg-reveal">
            <h2>Serviços</h2>
            <p>Escolha no chat o que combina com o seu dia.</p>
          </header>
          <ul className="ftg-services">
            {FTG.services.map((s, i) => (
              <li
                key={s.name}
                className="ftg-service ftg-reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.detail}</span>
                </div>
                <em>{s.minutes} min</em>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ftg-section ftg-section-alt" id="como">
        <div className="ftg-wrap">
          <header className="ftg-section-head ftg-reveal">
            <h2>Como agendar</h2>
            <p>Três passos. Sem baixar nada.</p>
          </header>
          <ol className="ftg-steps">
            {FTG.steps.map((step, i) => (
              <li
                key={step.n}
                className="ftg-step ftg-reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="ftg-step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="ftg-mid-cta ftg-reveal">
            <a href={wa} className="ftg-btn" target="_blank" rel="noopener noreferrer">
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="ftg-foot">
        <div className="ftg-wrap ftg-foot-inner">
          <div>
            <strong>{FTG.brand}</strong>
            <p>
              {FTG.city} ·{' '}
              <a href={`tel:+${FTG.whatsapp}`}>{FTG.whatsappDisplay}</a>
            </p>
            <p className="ftg-cnpj">CNPJ {FTG.cnpj}</p>
          </div>
          <p className="ftg-credit">
            Agenda digital por{' '}
            <Link href="/">MCM Consultoria em TI</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
