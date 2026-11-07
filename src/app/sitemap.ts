import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/config/site';

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
      url: `${base}/sobre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
