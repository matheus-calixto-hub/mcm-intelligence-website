import type { MetadataRoute } from 'next';
import { COMPANY } from '@/config/constants';
import { SITE } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: COMPANY.shortName,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#eef1f4',
    theme_color: '#0c1b2a',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
