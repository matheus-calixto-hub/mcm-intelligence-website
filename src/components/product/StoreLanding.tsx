'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import ProductBrowse from '@/components/product/ProductBrowse';
import ProductSectionNav from '@/components/product/ProductSectionNav';
import StoreFlowPhone from '@/components/product/StoreFlowPhone';
import { useWbReveal } from '@/hooks/useWbReveal';

const NAV = [
  { href: '#produto', label: 'Produto' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#painel', label: 'Painel' },
  { href: '#comecar', label: 'Começar' },
] as const;

export default function StoreLanding() {
  const pageRef = useWbReveal();
  const wa = getWhatsAppUrl(WHATSAPP_MESSAGES.loja);
  const waQuote = getWhatsAppUrl(WHATSAPP_MESSAGES.customQuote);

  return (
    <div className="product-page" ref={pageRef}>
      <Navbar />
      <ProductSectionNav items={NAV} productLabel="Loja WhatsApp" />
      <div className="wb product-page-body store-page">
        <div className="wb-ambient" aria-hidden="true">
          <span className="wb-blob wb-blob-a" />
          <span className="wb-blob wb-blob-b" />
          <span className="wb-blob wb-blob-c" />
        </div>

        <main id="conteudo">
          <section className="wb-hero" id="produto" aria-label="Loja WhatsApp">
            <div className="wb-hero-plane" aria-hidden="true" />
            <div className="container wb-hero-grid">
              <div className="wb-hero-copy wb-hero-enter">
                <p className="wb-kicker">MCM Loja</p>
                <h1>Venda no WhatsApp com catálogo e bot sob controle.</h1>
                <p className="wb-lead">
                  Cliente escolhe produto ou serviço no zap, monta o pedido e
                  confirma. Seu time publica o catálogo no Odoo e pausa o bot
                  no Chatbox quando quiser atender na mão.
                </p>
                <div className="wb-hero-cta">
                  <a href={wa} className="btn btn-on-dark wb-btn-lift" target="_blank" rel="noopener noreferrer">
                    Quero demonstração no WhatsApp
                  </a>
                  <a href="#como-funciona" className="btn btn-ghost-on-dark">
                    Ver o fluxo
                  </a>
                </div>
                <p className="wb-hero-note">
                  Instância dedicada em{' '}
                  <a href="https://loja.consultoria-mcm.com.br/web/login" style={{ color: 'inherit' }}>
                    loja.consultoria-mcm.com.br
                  </a>
                  {' '}— Mensagens WA + catálogo/pedidos, separada do SAC.
                </p>
              </div>

              <div className="wb-phone-stage wb-hero-enter wb-hero-enter-d1">
                <StoreFlowPhone />
              </div>
            </div>
          </section>

          <section className="section wb-pain" aria-labelledby="store-pain-title">
            <div className="container">
              <div className="section-head wb-reveal wb-from-left">
                <h2 id="store-pain-title">Pedido no zap. Atendimento quando precisar.</h2>
                <p>
                  Sem catálogo solto no celular. Sem bot brigando com o
                  vendedor. Catálogo no painel, venda no chat, humano no toggle.
                </p>
              </div>
              <ul className="wb-pain-list">
                <li className="wb-reveal wb-from-left wb-reveal-d1 wb-glass wb-pain-card">
                  Catálogo publicado no Odoo — o que aparece no bot é o que você escolheu
                </li>
                <li className="wb-reveal wb-from-left wb-reveal-d2 wb-glass wb-pain-card">
                  Pedido vira sale.order — time confirma e fecha no ERP
                </li>
                <li className="wb-reveal wb-from-left wb-reveal-d3 wb-glass wb-pain-card">
                  Texto livre do atendente pausa o bot; botão religa quando quiser
                </li>
              </ul>
            </div>
          </section>

          <section className="section wb-how" id="como-funciona" aria-labelledby="store-how-title">
            <div className="container">
              <div className="section-head wb-reveal wb-from-left">
                <h2 id="store-how-title">Do oi ao pedido, em poucos toques.</h2>
                <p>
                  Menu, lista ou número do item. Quantidade com `2 x3`.
                  Confirmar fecha o carrinho e avisa o time.
                </p>
              </div>
              <ol className="wb-steps">
                <li className="wb-reveal wb-from-left">
                  <strong>1. Cliente chama</strong>
                  <span>Bot saudação + atalhos: produtos, pedido, atendente.</span>
                </li>
                <li className="wb-reveal wb-from-left wb-reveal-d1">
                  <strong>2. Escolhe no catálogo</strong>
                  <span>Lista interativa Meta ou texto numerado do Odoo.</span>
                </li>
                <li className="wb-reveal wb-from-left wb-reveal-d2">
                  <strong>3. Confirma</strong>
                  <span>Pedido no Odoo; bot pausa para o time fechar.</span>
                </li>
                <li className="wb-reveal wb-from-left wb-reveal-d3">
                  <strong>4. Humano no Chatbox</strong>
                  <span>Toggle Bot Loja · texto livre desliga sozinho.</span>
                </li>
              </ol>
            </div>
          </section>

          <section className="section" id="painel" aria-labelledby="store-panel-title">
            <div className="container">
              <div className="section-head wb-reveal wb-from-left">
                <h2 id="store-panel-title">Painel Loja WhatsApp</h2>
                <p>
                  App no Odoo: Conversas, Catálogo, Pedidos e Contas WA —
                  vendedor atende; gerente publica o que vai para o bot.
                </p>
              </div>
              <ul className="wb-pain-list store-panel-list">
                <li className="wb-reveal wb-glass wb-pain-card">Conversas no Discuss com banner Bot Loja</li>
                <li className="wb-reveal wb-reveal-d1 wb-glass wb-pain-card">Catálogo com itens e preço do produto</li>
                <li className="wb-reveal wb-reveal-d2 wb-glass wb-pain-card">Pedidos filtrados (origem Loja WA)</li>
                <li className="wb-reveal wb-reveal-d3 wb-glass wb-pain-card">Flag product_store na conta Meta</li>
              </ul>
            </div>
          </section>

          <section className="section wb-cta-block" id="comecar" aria-labelledby="store-cta-title">
            <div className="container">
              <div className="wb-cta-inner wb-reveal">
                <h2 id="store-cta-title">Pronto para testar a loja no seu número?</h2>
                <p>
                  Ativamos o bot na conta Meta, publicamos o catálogo demo e
                  você pede pelo WhatsApp — com o Chatbox pausando quando
                  atender.
                </p>
                <div className="wb-hero-cta">
                  <a href={wa} className="btn btn-primary wb-btn-lift" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                  </a>
                  <a href={waQuote} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Pedir orçamento
                  </a>
                </div>
                <p className="wb-hero-note" style={{ color: 'inherit', opacity: 0.75 }}>
                  Combina com{' '}
                  <Link href="/product/whatsappbooking">Agendamento</Link>
                  {' '}e{' '}
                  <Link href="/product/followup">Follow-up</Link>
                  {' '}— um número Meta, um produto ativo por vez na demo.
                </p>
              </div>
            </div>
          </section>

          <ProductBrowse currentId="loja" />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
