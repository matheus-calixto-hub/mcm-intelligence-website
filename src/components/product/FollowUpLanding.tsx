'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

const NAV = [
  { href: '#produto', label: 'Produto' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#para-quem', label: 'Para quem' },
  { href: '#comecar', label: 'Começar' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = root.querySelectorAll('.wb-reveal');
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function FollowUpLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useReveal();
  const waDemo = getWhatsAppUrl(WHATSAPP_MESSAGES.followup);
  const waQuote = getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="wb fu" ref={pageRef}>
      <div className="wb-ambient" aria-hidden="true">
        <span className="wb-blob wb-blob-a" />
        <span className="wb-blob wb-blob-b" />
        <span className="wb-blob wb-blob-c" />
      </div>

      <header className={`wb-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container wb-nav-inner">
          <Link href="/product/followup" className="wb-logo" onClick={() => setMenuOpen(false)}>
            MCM <span>Follow-up</span>
          </Link>
          <nav className="wb-nav-links" aria-label="Produto">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="wb-nav-actions">
            <a href={waDemo} className="btn wb-btn-glass" target="_blank" rel="noopener noreferrer">
              Pedir demonstração
            </a>
            <button
              type="button"
              className="wb-menu-btn"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="wb-drawer">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href={waDemo}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Pedir demonstração
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="wb-hero" id="produto" aria-label="Follow-up comercial">
          <div className="wb-hero-plane" aria-hidden="true" />
          <div className="container wb-hero-grid">
            <div className="wb-hero-copy wb-reveal wb-from-left">
              <p className="wb-kicker">MCM Follow-up</p>
              <h1>Lead não esfria. Time responde no prazo.</h1>
              <p className="wb-lead">
                WhatsApp e e-mail da empresa em um só lugar: fila do que precisa
                de atenção, follow-up agendado e conversa com o nome de quem
                atende — qualquer vendedor assume sem perder o fio.
              </p>
              <div className="wb-hero-cta">
                <a href={waDemo} className="btn btn-on-dark wb-btn-lift" target="_blank" rel="noopener noreferrer">
                  Quero ver demonstração
                </a>
                <a href="#como-funciona" className="btn btn-ghost-on-dark">
                  Como funciona
                </a>
              </div>
              <p className="wb-hero-note">
                Ideal para corretoras, clínicas comerciais e times de venda que
                vivem no zap.
              </p>
            </div>

            <div className="wb-phone-stage wb-reveal wb-from-right wb-reveal-d1">
              <div className="fu-hero-shot wb-glass-deep">
                <Image
                  src="/products/followup-inbox.jpg"
                  alt="Inbox comercial com fila e conversa no WhatsApp"
                  width={960}
                  height={540}
                  className="fu-hero-img"
                  priority
                />
              </div>
              <div className="wb-float wb-float-a wb-glass">
                <strong>SLA</strong>
                <span>Aguardando resposta · 1h 20</span>
              </div>
              <div className="wb-float wb-float-b wb-glass">Fila limpa ✓</div>
            </div>
          </div>
        </section>

        <section className="section wb-pain" aria-labelledby="fu-pain-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="fu-pain-title">O comercial perde venda no silêncio.</h2>
              <p>
                Mensagem sem dono, follow-up na cabeça de cada um, e-mail pessoal
                misturado com zap. Quando o gestor pergunta “e aquele lead?”,
                ninguém sabe.
              </p>
            </div>
            <ul className="wb-pain-list">
              <li className="wb-reveal wb-from-left wb-reveal-d1 wb-glass wb-pain-card">
                Fila mostra o que está atrasado — WhatsApp e e-mail juntos
              </li>
              <li className="wb-reveal wb-from-left wb-reveal-d2 wb-glass wb-pain-card">
                Follow-up sai no horário, com a cara da empresa
              </li>
              <li className="wb-reveal wb-from-left wb-reveal-d3 wb-glass wb-pain-card">
                Qualquer um do time responde; o cliente vê um atendente de verdade
              </li>
            </ul>
          </div>
        </section>

        <section className="section wb-how" id="como-funciona" aria-labelledby="fu-how-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="fu-how-title">Simples de usar. Difícil de ignorar o lead.</h2>
              <p>
                O time abre o dia na fila, conversa no chatbox e agenda o próximo
                toque — sem planilha paralela.
              </p>
            </div>
            <div className="wb-steps">
              <article className="wb-reveal wb-from-left wb-reveal-d1 wb-glass wb-card-hover">
                <span className="wb-step-n">01</span>
                <h3>Fila de atenção</h3>
                <p>
                  O que chegou e ainda não teve resposta aparece primeiro —
                  com tempo e canal (WhatsApp, e-mail ou os dois).
                </p>
              </article>
              <article className="wb-reveal wb-reveal-d2 wb-glass wb-card-hover">
                <span className="wb-step-n">02</span>
                <h3>Conversa com nome</h3>
                <p>
                  No chat livre, o cliente vê quem está falando — por exemplo
                  “Ana — Consultoria”. Parece atendimento humano, porque é.
                </p>
              </article>
              <article className="wb-reveal wb-from-right wb-reveal-d3 wb-glass wb-card-hover">
                <span className="wb-step-n">03</span>
                <h3>Follow-up no piloto automático</h3>
                <p>
                  Cadências e templates no WhatsApp e no e-mail da empresa.
                  O gestor acompanha respostas e prazos sem microgerenciar.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="para-quem" aria-labelledby="fu-who-title">
          <div className="container wb-setup-grid">
            <div className="wb-reveal wb-from-left">
              <div className="section-head">
                <h2 id="fu-who-title">Para times que vendem no WhatsApp</h2>
                <p>
                  Corretoras, clínicas com comercial, imobiliárias, educação e
                  qualquer operação em que o lead chega no zap e some se ninguém
                  tocar de novo.
                </p>
              </div>
              <ul className="wb-setup-list">
                <li className="wb-glass">
                  <strong>Vendedor</strong> — vê a fila, responde e agenda o próximo passo.
                </li>
                <li className="wb-glass">
                  <strong>Sócio / gestor</strong> — enxerga o ritmo de resposta do time.
                </li>
                <li className="wb-glass">
                  <strong>Cliente final</strong> — conversa com a marca, no canal que já usa.
                </li>
              </ul>
            </div>
            <aside className="wb-setup-card wb-glass-deep wb-reveal wb-from-right wb-reveal-d1">
              <h3>Quer ver ao vivo?</h3>
              <p>
                Mostramos a fila, um follow-up e uma resposta real em poucos
                minutos no WhatsApp — com o seu cenário em mente.
              </p>
              <a href={waDemo} className="btn btn-primary wb-btn-lift" target="_blank" rel="noopener noreferrer">
                Agendar demonstração
              </a>
              <a href={waQuote} className="btn btn-secondary wb-btn-lift" target="_blank" rel="noopener noreferrer" style={{ marginTop: '0.75rem' }}>
                Pedir orçamento
              </a>
            </aside>
          </div>
        </section>

        <section className="wb-cta" id="comecar" aria-labelledby="fu-cta-title">
          <div className="container">
            <div className="wb-cta-shell">
              <div className="wb-cta-layout">
                <div className="wb-cta-copy wb-reveal wb-from-left">
                  <p className="wb-cta-eyebrow">Próximo passo</p>
                  <h2 id="fu-cta-title">Manda um oi. A gente mostra o Follow-up.</h2>
                  <p>
                    Sem compromisso para a primeira conversa. Se encaixar, fechamos
                    escopo, prazo e valor com clareza — e colocamos o time para usar.
                  </p>
                  <div className="wb-cta-actions">
                    <a href={waDemo} className="btn wb-cta-btn wb-btn-lift" target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp
                    </a>
                    <div className="wb-cta-pills">
                      <span className="wb-cta-pill wb-glass">{COMPANY.whatsappFormatted}</span>
                      <span className="wb-cta-pill wb-glass">{COMPANY.location}</span>
                    </div>
                  </div>
                </div>
                <aside className="wb-cta-chat wb-glass wb-reveal wb-from-right wb-reveal-d1" aria-hidden="true">
                  <div className="wb-cta-chat-head">
                    <span className="wb-cta-dot" />
                    MCM Follow-up
                  </div>
                  <div className="wb-cta-msg in">Oi! O time perde lead no zap?</div>
                  <div className="wb-cta-msg out">Sim — cada um responde no celular</div>
                  <div className="wb-cta-msg in">
                    Perfeito. Te mostro a fila e um follow-up em 10 minutos?
                  </div>
                  <div className="wb-cta-msg chip">Quero demonstração</div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="wb-foot">
        <div className="container wb-foot-inner">
          <p>
            <Link href="/produtos">← Todos os produtos</Link>
            {' · '}
            <Link href="/">MCM Consultoria</Link>
          </p>
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}
          </p>
        </div>
      </footer>
    </div>
  );
}
