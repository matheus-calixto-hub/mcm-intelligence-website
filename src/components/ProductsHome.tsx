'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import { PRODUCTS } from '@/config/content';
import ProductVisual from '@/components/product/ProductVisual';

export default function ProductsHome() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const wa = getWhatsAppUrl(WHATSAPP_MESSAGES.products);

  return (
    <section ref={sectionRef} id="produtos-destaque" className="section products-home">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Produtos prontos para vender</span>
          <h2>Escolha o caminho. A gente mostra ao vivo.</h2>
          <p>
            Follow-up, painel de SLA e agenda no WhatsApp — pensados para o dia
            a dia do comercial, sem você virar especialista em sistema.
          </p>
        </div>

        <div className="products-home-grid">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.id}
              className={`product-home-card reveal ${index === 0 ? 'is-primary' : ''}`}
            >
              <ProductVisual
                visual={product.visual}
                image={product.image}
                name={product.name}
                priority={index === 0}
                className={
                  product.visual === 'image' ? 'product-home-media' : 'product-home-media-live'
                }
              />
              <div className="product-home-body">
                <p className="product-eyebrow">{product.eyebrow}</p>
                <h3>{product.name}</h3>
                <p>{product.blurb}</p>
                <ul>
                  {product.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="product-home-actions">
                  <Link href={product.href} className="btn btn-primary">
                    {product.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="products-home-foot reveal">
          <p>Não tem certeza do que precisa?</p>
          <a href={wa} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            Me ajuda a escolher no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
