import type { Metadata } from 'next';
import SlaDashboardLanding from '@/components/product/SlaDashboardLanding';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/product/sla-dashboard';
const title = 'Painel SLA e Follow-up — Visão geral Mensagens WA';
const description =
  'Tempo de resposta, fila, % no SLA e Follow-ups disparados. Vendedor vê o próprio ritmo; sócio vê a equipe. Painel MCM para apresentar e operar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${getSiteUrl()}${path}`,
    images: [
      {
        url: `${getSiteUrl()}/products/sla-dashboard.jpg`,
        width: 1280,
        height: 720,
        alt: 'Painel Visão geral SLA e Follow-up MCM',
      },
    ],
  },
};

export default function SlaDashboardPage() {
  return <SlaDashboardLanding />;
}
