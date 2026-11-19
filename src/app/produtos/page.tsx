import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductVisual from '@/components/product/ProductVisual';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import { PRODUCTS } from '@/config/content';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/produtos';
const title = 'Produtos — Follow-up, Painel SLA e Agendamento no WhatsApp';
const description =
  'Follow-up comercial, painel de SLA com gráficos e agendamento pelo WhatsApp. Demonstração e orçamento no zap com a MCM.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${getSiteUrl()}${path}`,
  },
};

export default function ProdutosPage() {
  const wa = getWhatsAppUrl(WHATSAPP_MESSAGES.products);

  return (
    <div>
      <Navbar />
      <main id="conteudo">
        <section className="section products-hero">
          <div className="container">
            <p className="eyebrow">Produtos MCM</p>
            <h1>Escolha o que resolve o seu dia a dia</h1>
            <p className="products-lead">
              Follow-up, painel de indicadores e agenda no WhatsApp — caminhos
              claros, sem jargão. Você vê como funciona e decide com calma.
            </p>
            <div className="products-hero-cta">
              <a
                href={wa}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
              <a href="#escolha" className="btn btn-secondary">
                Comparar opções
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="escolha" aria-labelledby="escolha-title">
          <div className="container">
            <div className="section-head">
              <h2 id="escolha-title">O que você precisa agora?</h2>
              <p>
                Lead esfriando → Follow-up. Sócio cobrando ritmo → Painel SLA.
                Agenda e remarcação → Agendamento no WhatsApp.
              </p>
            </div>

            <div className="products-grid">
              {PRODUCTS.map((product) => (
                <article key={product.id} className="product-card">
                  <ProductVisual
                    visual={product.visual}
                    image={product.image}
                    name={product.name}
                    className={
                      product.visual === 'image'
                        ? 'product-card-media'
                        : 'product-card-media product-card-media-live'
                    }
                  />
                  <p className="product-eyebrow">{product.eyebrow}</p>
                  <h3>{product.name}</h3>
                  <p>{product.blurb}</p>
                  <ul>
                    {product.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="product-card-actions">
                    <Link href={product.href} className="btn btn-primary">
                      {product.cta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-cta-band">
          <div className="container products-cta-inner">
            <div>
              <h2>Não sabe qual escolher?</h2>
              <p>
                Manda um oi no WhatsApp. Em poucos minutos alinhamos o cenário e,
                se fizer sentido, marcamos uma demonstração ao vivo.
              </p>
            </div>
            <a
              href={wa}
              className="btn btn-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero orientação · {COMPANY.whatsappFormatted}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
