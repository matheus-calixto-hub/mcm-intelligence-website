import { PRODUCT_IMPACT } from '@/config/content';

type Props = {
  id?: string;
  /** Classes extra no section (ex.: wb-pain). */
  className?: string;
};

/** Bloco de marketing: antes×depois + faixas de ganho típicas. */
export default function ProductImpact({ id = 'impacto', className = '' }: Props) {
  const data = PRODUCT_IMPACT;

  return (
    <section className={`section product-impact ${className}`.trim()} id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head wb-reveal wb-from-left">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 id={`${id}-title`}>{data.title}</h2>
          <p>{data.lead}</p>
        </div>

        <div className="product-impact-metrics">
          {data.metrics.map((m, i) => (
            <article
              key={m.label}
              className={`product-impact-metric wb-reveal wb-glass wb-card-hover wb-reveal-d${(i % 3) + 1}`}
            >
              <strong>{m.value}</strong>
              <h3>{m.label}</h3>
              <p>{m.detail}</p>
            </article>
          ))}
        </div>

        <div className="product-impact-compare">
          <div className="product-impact-col before wb-reveal wb-from-left">
            <p className="product-impact-col-label">Antes (manual)</p>
            <ul>
              {data.beforeAfter.map((row) => (
                <li key={row.before}>{row.before}</li>
              ))}
            </ul>
          </div>
          <div className="product-impact-col after wb-reveal wb-from-right wb-reveal-d1">
            <p className="product-impact-col-label">Com MCM</p>
            <ul>
              {data.beforeAfter.map((row) => (
                <li key={row.after}>{row.after}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="product-impact-note wb-reveal">{data.disclaimer}</p>
      </div>
    </section>
  );
}
