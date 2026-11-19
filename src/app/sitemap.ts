import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/config/site';

/** Apenas URLs indexáveis (landing cliente FTG fica fora — noindex). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/produtos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/product/followup`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/product/sla-dashboard`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/product/whatsappbooking`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/sobre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
  ];
}
