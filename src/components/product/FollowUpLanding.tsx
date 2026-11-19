'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import ProductBrowse from '@/components/product/ProductBrowse';
import ProductDemoVideo from '@/components/product/ProductDemoVideo';
import ProductImpact from '@/components/product/ProductImpact';
import ProductPhoneGallery from '@/components/product/ProductPhoneGallery';
import ProductSectionNav from '@/components/product/ProductSectionNav';

const NAV = [
  { href: '#produto', label: 'Produto' },
  { href: '#impacto', label: 'Ganhos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#na-pratica', label: 'Na prática' },
  { href: '#para-quem', label: 'Para quem' },
  { href: '#comecar', label: 'Começar' },
] as const;

const MOBILE_SLIDES = [
  {
    src: '/products/followup-mobile-fila.jpg',
    label: 'Fila de atenção · SLA estourado',
    alt: 'Fila de atenção no celular com e-mails em atraso',
  },
  {
    src: '/products/followup-mobile-chat.jpg',
    label: 'Chatbox WhatsApp com nome do atendente',
    alt: 'Chat WhatsApp no mobile com Ana - JundMed',
  },
  {
    src: '/products/followup-mobile-wa-preview.jpg',
    label: 'Prévia do Follow-up WhatsApp',
    alt: 'Simulação do template Follow-up no aparelho',
  },
  {
    src: '/products/followup-mobile-email-preview.jpg',
    label: 'Prévia do e-mail a enviar',
    alt: 'Composer Enviar e-mail com template D+2',
  },
  {
    src: '/products/followup-mobile-contato.jpg',
    label: 'Contato · Chat, e-mail e novo Follow-up',
    alt: 'Ações rápidas no cadastro do contato no mobile',
  },
  {
    src: '/products/followup-mobile-triagem.jpg',
    label: 'Triagem do lead',
    alt: 'Aba Triagem com perguntas e respostas do contato',
  },
  {
    src: '/products/followup-mobile-atividades.jpg',
    label: 'Atividades e histórico',
    alt: 'Atividade Responder WhatsApp e timeline no contato',
  },
  {
    src: '/products/followup-mobile-sem-resposta.jpg',
    label: 'Sem resposta · próximo toque',
    alt: 'Kanban Sem resposta com Chat, E-mail e Follow-up',
  },
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

export default function FollowUpLanding() {
  const pageRef = useReveal();
  const waDemo = getWhatsAppUrl(WHATSAPP_MESSAGES.followup);
  const waQuote = getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote);

  return (
    <div className="product-page" ref={pageRef}>
      <Navbar />
      <ProductSectionNav items={NAV} productLabel="Follow-up" />
      <div className="wb fu product-page-body">
        <div className="wb-ambient" aria-hidden="true">
          <span className="wb-blob wb-blob-a" />
          <span className="wb-blob wb-blob-b" />
          <span className="wb-blob wb-blob-c" />
        </div>

        <main id="conteudo">
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
                <div className="fu-hero-shot product-shot-fixed">
                  <Image
                    src="/products/followup-desktop-chat.jpg"
                    alt="Contatos e Chatbox WhatsApp no Mensagens WA (desktop)"
                    width={1600}
                    height={1000}
                    className="fu-hero-img"
                    sizes="(max-width: 960px) 100vw, 560px"
                    priority
                  />
                </div>
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

        <ProductImpact />

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

        <section className="section" id="na-pratica" aria-labelledby="fu-screen-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="fu-screen-title">Na prática — telas reais do Mensagens WA</h2>
              <p>
                Desktop com chatbox aberto, mobile na fila, prévia de WhatsApp e
                e-mail, triagem e atividades — o mesmo SAC que o time usa no dia a dia.
              </p>
            </div>

            <div className="fu-practice-grid wb-reveal wb-reveal-d1">
              <div className="fu-practice-desktop">
                <div className="fu-hero-shot product-shot-fixed product-shot-fixed-lg">
                  <Image
                    src="/products/followup-desktop-chat.jpg"
                    alt="Grade de contatos e Chatbox WhatsApp no desktop"
                    width={1600}
                    height={1000}
                    className="fu-hero-img"
                    sizes="(max-width: 960px) 100vw, 720px"
                  />
                </div>
                <p className="fu-practice-cap">
                  Desktop · Contatos + Chatbox com janela 24h e nome do atendente
                </p>
              </div>
              <div className="fu-practice-phone wb-reveal wb-from-right wb-reveal-d2">
                <ProductPhoneGallery slides={MOBILE_SLIDES} />
              </div>
            </div>

            <div className="fu-practice-video wb-reveal wb-reveal-d2">
              <ProductDemoVideo
                loopSrc="/products/followup-demo-loop.mp4"
                fullSrc="/products/followup-demo.mp4"
                poster="/products/followup-demo-poster.jpg"
                title="Tour no celular"
                caption="Cortes da demonstração: fila, contato, Follow-up WhatsApp, e-mail e painel."
              />
            </div>

            <div className="fu-practice-links">
              <Link href="/product/sla-dashboard" className="btn btn-secondary">
                Ver também o painel SLA
              </Link>
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

        <ProductBrowse currentId="followup" />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
