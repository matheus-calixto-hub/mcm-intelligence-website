'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import ProductBrowse from '@/components/product/ProductBrowse';
import ProductImpact from '@/components/product/ProductImpact';
import ProductPhoneGallery from '@/components/product/ProductPhoneGallery';
import ProductSectionNav from '@/components/product/ProductSectionNav';
import { useWbReveal } from '@/hooks/useWbReveal';

const NAV = [
  { href: '#produto', label: 'Produto' },
  { href: '#impacto', label: 'Ganhos' },
  { href: '#indicadores', label: 'Indicadores' },
  { href: '#no-celular', label: 'No celular' },
  { href: '#regras', label: 'Quem vê o quê' },
  { href: '#comecar', label: 'Começar' },
] as const;

const SLA_MOBILE_SLIDES = [
  {
    src: '/products/sla-mobile-header.jpg',
    label: 'Visão geral · filtros e escopo do vendedor',
    alt: 'Painel Visão geral no mobile com filtros e KPIs',
  },
  {
    src: '/products/sla-mobile-kpis.jpg',
    label: 'KPIs · 1ª resposta, SLA e fila',
    alt: 'Cards de 1ª resposta WA/e-mail, % no SLA e fila',
  },
  {
    src: '/products/sla-mobile-charts.jpg',
    label: 'Gráficos · respostas e resultado do SLA',
    alt: 'Barras de respostas no período e donut do SLA',
  },
  {
    src: '/products/sla-mobile-followup.jpg',
    label: 'Follow-up e atenção da operação',
    alt: 'Bloco Follow-up e Atenção da operação no painel',
  },
] as const;

export default function SlaDashboardLanding() {
  const pageRef = useWbReveal();
  const waDemo = getWhatsAppUrl(WHATSAPP_MESSAGES.slaDashboard);
  const waQuote = getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote);

  return (
    <div className="product-page" ref={pageRef}>
      <Navbar />
      <ProductSectionNav items={NAV} productLabel="Painel SLA" />
      <div className="wb fu sla product-page-body">
        <div className="wb-ambient" aria-hidden="true">
          <span className="wb-blob wb-blob-a" />
          <span className="wb-blob wb-blob-b" />
          <span className="wb-blob wb-blob-c" />
        </div>

        <main id="conteudo">
        <section className="wb-hero" id="produto" aria-label="Painel SLA e Follow-up">
          <div className="wb-hero-plane" aria-hidden="true" />
          <div className="container wb-hero-grid">
            <div className="wb-hero-copy wb-hero-enter">
              <p className="wb-kicker">Painel SLA · Follow-up</p>
              <h1>Os números que o mercado cobra — claros para o time.</h1>
              <p className="wb-lead">
                Tempo de resposta, fila, Follow-ups disparados e % no prazo.
                Vendedor vê o próprio ritmo; sócio vê a equipe e filtra por
                responsável — com gráficos prontos para apresentar.
              </p>
              <div className="wb-hero-cta">
                <a href={waDemo} className="btn btn-on-dark wb-btn-lift" target="_blank" rel="noopener noreferrer">
                  Quero ver o painel
                </a>
                <a href="#indicadores" className="btn btn-ghost-on-dark">
                  Ver indicadores
                </a>
              </div>
              <p className="wb-hero-note">
                Incluído no produto Follow-up / Mensagens WA — ou sob medida
                para a sua operação.
              </p>
            </div>

            <div className="wb-phone-stage wb-hero-enter wb-hero-enter-d1">
              <div className="fu-hero-shot product-shot-fixed">
                <Image
                  src="/products/sla-dashboard.jpg"
                  alt="Painel Visão geral com KPIs de SLA e gráficos de Follow-up"
                  width={1920}
                  height={1080}
                  className="fu-hero-img"
                  sizes="(max-width: 960px) 100vw, 560px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <ProductImpact />

        <section className="section" id="indicadores" aria-labelledby="sla-ind-title">
          <div className="container">
            <div className="section-head wb-reveal wb-from-left">
              <h2 id="sla-ind-title">Indicadores que o comercial e o sócio usam de verdade</h2>
              <p>
                Nada de planilha paralela. O painel lê a operação real: respostas,
                fila, cadências e disparos do Follow-up.
              </p>
            </div>

            <div className="fu-hero-shot product-shot-fixed product-shot-fixed-lg wb-reveal wb-reveal-d1">
              <Image
                src="/products/sla-dashboard.jpg"
                alt="Visão ampliada do painel SLA Mensagens WA"
                width={1920}
                height={1080}
                className="fu-hero-img"
                sizes="(max-width: 960px) 100vw, 960px"
              />
            </div>

            <div className="wb-steps" style={{ marginTop: '2rem' }}>
              <article className="wb-reveal wb-from-left wb-reveal-d1 wb-glass wb-card-hover">
                <span className="wb-step-n">01</span>
                <h3>SLA e 1ª resposta</h3>
                <p>
                  Tempo médio no WhatsApp e no e-mail, % no prazo e quantos
                  estouraram — com filtro de período e canal.
                </p>
              </article>
              <article className="wb-reveal wb-reveal-d2 wb-glass wb-card-hover">
                <span className="wb-step-n">02</span>
                <h3>Operação do dia</h3>
                <p>
                  Mensagens recebidas e enviadas, fila agora e clientes sem
                  retornar — o pulso do time em um olhar.
                </p>
              </article>
              <article className="wb-reveal wb-from-right wb-reveal-d3 wb-glass wb-card-hover">
                <span className="wb-step-n">03</span>
                <h3>Follow-up em números</h3>
                <p>
                  Agendamentos, disparos, pendentes e falhas. Dá para mostrar
                  resultado de campanha sem exportar Excel.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="no-celular" aria-labelledby="sla-mobile-title">
          <div className="container fu-practice-grid">
            <div className="wb-reveal wb-from-left">
              <div className="section-head">
                <h2 id="sla-mobile-title">O mesmo painel no celular</h2>
                <p>
                  Sócio e vendedor acompanham KPIs, gráficos e Follow-up fora do
                  escritório — com o escopo certo (equipe ou só a própria operação).
                </p>
              </div>
              <ul className="wb-setup-list">
                <li className="wb-glass">
                  <strong>Filtros</strong> — período, conta e canal no bolso.
                </li>
                <li className="wb-glass">
                  <strong>KPIs</strong> — 1ª resposta, % no SLA, fila e sem resposta.
                </li>
                <li className="wb-glass">
                  <strong>Gráficos</strong> — volume por canal e resultado do SLA.
                </li>
              </ul>
            </div>
            <aside className="fu-practice-phone wb-reveal wb-from-right wb-reveal-d1">
              <ProductPhoneGallery slides={SLA_MOBILE_SLIDES} />
            </aside>
          </div>
        </section>

        <section className="section" id="regras" aria-labelledby="sla-rules-title">
          <div className="container wb-setup-grid">
            <div className="wb-reveal wb-from-left">
              <div className="section-head">
                <h2 id="sla-rules-title">Quem vê o quê</h2>
                <p>
                  Pensado para operação real: o vendedor não se perde na métrica
                  do colega; o sócio enxerga a equipe e compara responsáveis.
                </p>
              </div>
              <ul className="wb-setup-list">
                <li className="wb-glass">
                  <strong>Vendedor</strong> — só as próprias respostas, Follow-ups
                  e contatos sob sua responsabilidade.
                </li>
                <li className="wb-glass">
                  <strong>Sócio / admin</strong> — equipe toda + filtro por
                  responsável (Ana, Bruno…).
                </li>
                <li className="wb-glass">
                  <strong>Filtros</strong> — período, conta WhatsApp, canal
                  (WA / e-mail) e responsável.
                </li>
              </ul>
            </div>
            <aside className="wb-setup-card wb-glass-deep wb-reveal wb-from-right wb-reveal-d1">
              <h3>Quer ver com os seus dados?</h3>
              <p>
                Em demonstração mostramos o painel no SAC com cenário de
                corretora — KPIs, gráficos e a fila de atenção ao vivo.
              </p>
              <a href={waDemo} className="btn btn-primary wb-btn-lift" target="_blank" rel="noopener noreferrer">
                Agendar demonstração
              </a>
              <a
                href={waQuote}
                className="btn btn-secondary wb-btn-lift"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '0.75rem' }}
              >
                Pedir orçamento
              </a>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.85 }}>
                Combina com o{' '}
                <Link href="/product/followup">Follow-up comercial</Link>.
              </p>
            </aside>
          </div>
        </section>

        <section className="wb-cta" id="comecar" aria-labelledby="sla-cta-title">
          <div className="container">
            <div className="wb-cta-shell">
              <div className="wb-cta-layout">
                <div className="wb-cta-copy wb-reveal wb-from-left">
                  <p className="wb-cta-eyebrow">Próximo passo</p>
                  <h2 id="sla-cta-title">Mostre o painel na próxima reunião de vendas.</h2>
                  <p>
                    Indicadores que o mercado procura — tempo de resposta, fila,
                    Follow-up e SLA — com visual profissional para apresentar
                    ao sócio ou ao cliente.
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
                    MCM Visão geral
                  </div>
                  <div className="wb-cta-msg in">Vocês têm painel de SLA no Follow-up?</div>
                  <div className="wb-cta-msg out">Sim — tempo de resposta, fila e disparos</div>
                  <div className="wb-cta-msg in">Perfeito. Quero ver com dados demo.</div>
                  <div className="wb-cta-msg chip">Quero demonstração</div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        </main>

        <ProductBrowse currentId="sla" />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
