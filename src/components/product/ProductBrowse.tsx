import Link from 'next/link';
import { PRODUCTS } from '@/config/content';

type Props = {
  /** id do produto atual em PRODUCTS (`followup` | `sla` | `booking`). */
  currentId: (typeof PRODUCTS)[number]['id'];
};

/** Voltar à lista + atalho para os outros produtos. */
export default function ProductBrowse({ currentId }: Props) {
  const others = PRODUCTS.filter((p) => p.id !== currentId);
  const current = PRODUCTS.find((p) => p.id === currentId);

  return (
    <section className="product-browse section" aria-labelledby="product-browse-title">
      <div className="container">
        <div className="product-browse-head">
          <div>
            <p className="eyebrow">Produtos MCM</p>
            <h2 id="product-browse-title">Ver os outros produtos</h2>
            <p>
              {current
                ? `Você está em ${current.name}. Explore as outras opções ou volte à lista completa.`
                : 'Explore as opções ou volte à lista completa.'}
            </p>
          </div>
          <Link href="/produtos" className="btn btn-secondary">
            ← Todos os produtos
          </Link>
        </div>

        <div className="product-browse-grid">
          {others.map((product) => (
            <Link key={product.id} href={product.href} className="product-browse-card">
              <p className="product-eyebrow">{product.eyebrow}</p>
              <h3>{product.name}</h3>
              <p>{product.blurb}</p>
              <span className="product-browse-cta">{product.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
