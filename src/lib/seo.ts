import type { Metadata } from 'next';
import { getSiteUrl, SITE } from '@/config/site';

type PageSeoInput = {
  path: string;
  title: string;
  description: string;
  /** Caminho absoluto no site, ex. /products/followup-inbox.jpg */
  imagePath: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
  /** Home: não aplicar template `%s | MCM`. */
  absoluteTitle?: boolean;
};

/** Metadata completa (canonical, OG, Twitter) para páginas comerciais. */
export function buildPageMetadata({
  path,
  title,
  description,
  imagePath,
  imageAlt,
  imageWidth = 1280,
  imageHeight = 720,
  keywords = [],
  type = 'website',
  noIndex = false,
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const base = getSiteUrl();
  const url = path === '/' ? base : `${base}${path}`;
  const imageUrl = imagePath.startsWith('http') ? imagePath : `${base}${imagePath}`;
  const ogTitle =
    absoluteTitle || title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: path,
      languages: { 'pt-BR': path },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle,
      description,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
          type: imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [imageUrl],
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const base = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

export function serviceProductJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  imagePath: string;
  category?: string;
}) {
  const base = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    applicationCategory: opts.category || 'BusinessApplication',
    operatingSystem: 'Web',
    description: opts.description,
    url: `${base}${opts.path}`,
    image: `${base}${opts.imagePath}`,
    inLanguage: 'pt-BR',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      url: `${base}${opts.path}`,
      seller: {
        '@type': 'Organization',
        name: SITE.name,
        url: base,
      },
    },
    provider: {
      '@id': `${base}/#organization`,
    },
  };
}
