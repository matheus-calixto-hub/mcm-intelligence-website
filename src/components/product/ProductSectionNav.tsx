'use client';

type Item = { href: string; label: string };

type Props = {
  items: readonly Item[];
  productLabel: string;
};

/** Âncoras da página do produto, abaixo do navbar do site. */
export default function ProductSectionNav({ items, productLabel }: Props) {
  return (
    <div className="product-section-nav" aria-label={`Seções · ${productLabel}`}>
      <div className="container product-section-nav-inner">
        <span className="product-section-nav-label">{productLabel}</span>
        <nav>
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
