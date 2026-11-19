'use client';

import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import { BOOKING_PLANS } from '@/config/whatsappBookingPricing';
import BookingFlowPhone from '@/components/product/BookingFlowPhone';
import ProductBrowse from '@/components/product/ProductBrowse';
import ProductSectionNav from '@/components/product/ProductSectionNav';

const NAV = [
  { href: '#produto', label: 'Produto' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#planos', label: 'Planos' },
  { href: '#comecar', label: 'Começar' },
] as const;

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

export default function WhatsAppBookingLanding() {
  const pageRef = useReveal();
  const wa = getWhatsAppUrl(WHATSAPP_MESSAGES.whatsappBooking);

  return (
    <div className="wb has-site-chrome" ref={pageRef}>
      <Navbar />
      <ProductSectionNav items={NAV} productLabel="Agendamento" />
      <div className="wb-ambient" aria-hidden="true">
        <span className="wb-blob wb-blob-a" />
        <span className="wb-blob wb-blob-b" />
        <span className="wb-blob wb-blob-c" />
        <span className="wb-blob wb-blob-d" />
      </div>

      <main>
        <section className="wb-hero" id="produto" aria-label="WhatsApp Booking">
          <div className="wb-hero-plane" aria-hidden="true" />
          <div className="container wb-hero-grid">
            <div className="wb-hero-copy wb-reveal wb-from-left">
              <p className="wb-kicker">MCM Booking</p>
              <h1>Cliente marca sozinho. Você continua atendendo.</h1>
              <p className="wb-lead">
                No WhatsApp que ele já usa: escolhe profissional, serviço e
                horário; remarca ou cancela quando precisar. O gestor libera
                disponibilidade, dia e semana pelo próprio zap — sem app extra.
              </p>
              <div className="wb-hero-cta">
                <a href={wa} className="btn btn-on-dark wb-btn-lift" target="_blank" rel="noopener noreferrer">
                  Quero demonstração no WhatsApp
                </a>
                <a href="#como-funciona" className="btn btn-ghost-on-dark">
                  Ver como funciona
                </a>
              </div>
              <p className="wb-hero-note">
                Mostramos ao vivo o cliente marcando e o gestor na agenda —
                sem compromisso na primeira conversa.
              </p>
            </div>

            <div className="wb-phone-stage wb-reveal wb-from-right wb-reveal-d1">
              <BookingFlowPhone />
              <div className="wb-float wb-float-a wb-glass">
                <strong>Flow Meta</strong>
                <span>Profissional → serviço → horário</span>
              </div>
              <div className="wb-float wb-float-b wb-glass">Confirma no zap ✓</div>
            </div>
          </div>
        </section>

        <section className="section wb-pain" aria-labelledby="wb-pain-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="wb-pain-title">Enquanto você atende, o zap não para.</h2>
              <p>
                “Tem vaga amanhã?”, remarcação, mensagem esquecida da madrugada.
                Responder na mão tira o foco — e deixa cadeira vazia.
              </p>
            </div>
            <ul className="wb-pain-list">
              <li className="wb-reveal wb-from-left wb-reveal-d1 wb-glass wb-pain-card">Cliente remarca sem te tirar do atendimento</li>
              <li className="wb-reveal wb-from-left wb-reveal-d2 wb-glass wb-pain-card">Gestor libera ou fecha o dia pelo próprio WhatsApp</li>
              <li className="wb-reveal wb-from-left wb-reveal-d3 wb-glass wb-pain-card">Confirmação fica no chat, com um toque pra abrir de novo</li>
            </ul>
          </div>
        </section>

        <section className="section wb-how" id="como-funciona" aria-labelledby="wb-how-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="wb-how-title">Simples pro cliente. Bom pro caixa.</h2>
              <p>
                Ele toca, escolhe e confirma — sem app novo e sem conversa eterna
                pra achar horário. Você vende mais tempo na cadeira.
              </p>
            </div>
            <div className="wb-steps">
              <article className="wb-reveal wb-from-left wb-reveal-d1 wb-glass wb-card-hover">
                <span className="wb-step-n">01</span>
                <h3>Cliente manda um oi</h3>
                <p>
                  Vê o horário marcado ou o botão pra agendar. Remarca, cancela
                  ou confirma que veio — em poucos toques.
                </p>
              </article>
              <article className="wb-reveal wb-reveal-d2 wb-glass wb-card-hover">
                <span className="wb-step-n">02</span>
                <h3>Troca o horário na hora</h3>
                <p>
                  Profissional, serviço e data novos sem você digitar nada.
                  Menos vai-e-volta. Mais gente confirmada.
                </p>
              </article>
              <article className="wb-reveal wb-from-right wb-reveal-d3 wb-glass wb-card-hover">
                <span className="wb-step-n">03</span>
                <h3>Gestor no próprio WhatsApp</h3>
                <p>
                  Libera ou fecha o dia, ajusta a semana e serviços no zap do
                  profissional — no intervalo entre um cliente e outro, sem painel
                  chato.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section wb-plans" id="planos" aria-labelledby="wb-plans-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="wb-plans-title">Qual o tamanho do seu time?</h2>
              <p>
                Escolha o porte. No WhatsApp alinhamos número, verificação e o
                valor certo para o seu caso — com demonstração se quiser.
              </p>
            </div>
            <div className="wb-plan-grid">
              {BOOKING_PLANS.map((plan, i) => {
                const from =
                  i === 0 || i === 2 ? 'wb-from-left' : 'wb-from-right';
                return (
                <article
                  key={plan.id}
                  className={`wb-plan wb-glass wb-card-hover wb-reveal ${from} wb-reveal-d${i + 1} ${plan.featured ? 'is-featured' : ''}`}
                >
                  {plan.featured && <span className="wb-plan-tag">Mais pedido</span>}
                  <h3>{plan.name}</h3>
                  <p className="wb-plan-seats">{plan.seats}</p>
                  <p className="wb-plan-blurb">{plan.blurb}</p>
                  <ul>
                    {plan.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a href={wa} className="wb-plan-price" target="_blank" rel="noopener noreferrer">
                    Conversar sobre {plan.name}
                  </a>
                </article>
              );
              })}
            </div>
          </div>
        </section>

        <section className="section wb-setup" id="setup" aria-labelledby="wb-setup-title">
          <div className="container wb-setup-grid">
            <div className="wb-reveal wb-from-left">
              <div className="section-head">
                <h2 id="wb-setup-title">No número que o cliente já tem salvo</h2>
                <p>
                  Chip no celular, Meta Business e a gente liga o agendamento —
                  cliente e gestor no mesmo WhatsApp. Sem app novo.
                </p>
              </div>
              <ul className="wb-setup-list">
                <li className="wb-glass">
                  <strong>Número próprio</strong> — você fica com a linha; nós
                  deixamos o Booking rodando.
                </li>
                <li className="wb-glass">
                  <strong>Provisionado por nós</strong> — em CPF, a linha pode
                  ficar na nossa conta verificada (capacidade limitada).
                </li>
                <li className="wb-glass">
                  <strong>Suporte Meta</strong> — cadastro e verificação do
                  Business Manager com a gente.
                </li>
              </ul>
            </div>
            <aside className="wb-setup-card wb-glass-deep wb-reveal wb-from-right wb-reveal-d1">
              <h3>Gestor também no zap</h3>
              <p>
                Além do cliente agendar sozinho: o profissional libera
                disponibilidade, vê a semana e ajusta serviços pelo WhatsApp —
                diferencial que a maioria dos sistemas deixa só no painel web.
              </p>
              <a href={wa} className="btn btn-primary wb-btn-lift" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </aside>
          </div>
        </section>

        <section className="wb-cta" id="comecar" aria-labelledby="wb-cta-title">
          <div className="container">
            <div className="wb-cta-shell">
              <div className="wb-cta-orbs" aria-hidden="true">
                <span className="wb-cta-orb wb-cta-orb-a" />
                <span className="wb-cta-orb wb-cta-orb-b" />
                <span className="wb-cta-orb wb-cta-orb-c" />
              </div>

              <div className="wb-cta-layout">
                <div className="wb-cta-copy wb-reveal wb-from-left">
                  <p className="wb-cta-eyebrow">No zap, em minutos</p>
                  <h2 id="wb-cta-title">Manda um oi. A gente mostra ao vivo.</h2>
                  <p>
                    Demonstração rápida: cliente marcando e gestor na agenda.
                    Se fizer sentido, alinhamos escopo e valor na mesma conversa.
                  </p>
                  <div className="wb-cta-actions">
                    <a href={wa} className="btn wb-cta-btn wb-btn-lift" target="_blank" rel="noopener noreferrer">
                      Quero demonstração
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
                    MCM Booking
                  </div>
                  <div className="wb-cta-msg in">Oi! Quantas pessoas atendem aí?</div>
                  <div className="wb-cta-msg out">Somos em 3 no salão</div>
                  <div className="wb-cta-msg in">
                    Perfeito — Equipe encaixa. Quer ver o cliente marcando agora?
                  </div>
                  <div className="wb-cta-msg chip">Ver demonstração</div>
                </aside>
              </div>

              <div className="wb-cta-chips wb-reveal wb-reveal-d2" aria-hidden="true">
                <span className="wb-glass wb-cta-chip-float">Sem app novo</span>
                <span className="wb-glass wb-cta-chip-float">Gestor no WhatsApp</span>
                <span className="wb-glass wb-cta-chip-float">Remarca sozinho</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProductBrowse currentId="booking" />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
