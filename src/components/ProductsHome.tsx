'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';
import { PRODUCTS } from '@/config/content';

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
            Dois produtos claros, pensados para o dia a dia do comercial e da
            agenda — sem você virar especialista em sistema.
          </p>
        </div>

        <div className="products-home-grid">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.id}
              className={`product-home-card reveal ${index === 0 ? 'is-primary' : ''}`}
            >
              <div className="product-home-media">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={960}
                  height={540}
                  className="product-card-img"
                  priority={index === 0}
                />
              </div>
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
