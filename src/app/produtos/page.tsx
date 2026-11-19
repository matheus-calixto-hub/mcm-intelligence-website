import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import { PRODUCTS } from '@/config/content';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/produtos';
const title = 'Produtos — Follow-up e Agendamento no WhatsApp';
const description =
  'Escolha o caminho: follow-up comercial com fila e prazos, ou agendamento pelo WhatsApp. Demonstração e orçamento no zap com a MCM.';

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
              Dois caminhos claros. Sem jargão. Você vê como funciona no WhatsApp
              e decide com calma — ou a gente ajuda a combinar os dois.
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
                Se o desafio é lead esfriando e time desorganizado, vá de
                Follow-up. Se é agenda e remarcação, vá de Agendamento.
              </p>
            </div>

            <div className="products-grid">
              {PRODUCTS.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-card-media">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={960}
                      height={540}
                      className="product-card-img"
                    />
                  </div>
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
