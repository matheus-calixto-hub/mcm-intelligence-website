import type { Metadata } from 'next';
import SlaDashboardLanding from '@/components/product/SlaDashboardLanding';
import SeoJsonLd from '@/components/SeoJsonLd';
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceProductJsonLd,
} from '@/lib/seo';

const path = '/product/sla-dashboard';
const title = 'Painel SLA e Follow-up — Visão geral';
const description =
  'Tempo de 1ª resposta, % no SLA, fila e Follow-ups. Vendedor vê o próprio ritmo; sócio vê a equipe. Painel MCM pronto para apresentar.';
const imagePath = '/products/sla-dashboard.jpg';

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  imagePath,
  imageAlt: 'Painel Visão geral com indicadores de SLA e Follow-up MCM',
  imageWidth: 1920,
  imageHeight: 1080,
  keywords: [
    'painel SLA WhatsApp',
    'indicadores atendimento WhatsApp',
    'tempo de primeira resposta',
    'dashboard follow-up comercial',
    'gestão de fila WhatsApp',
  ],
});

export default function SlaDashboardPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Início', path: '/' },
            { name: 'Produtos', path: '/produtos' },
            { name: 'Painel SLA', path },
          ]),
          serviceProductJsonLd({
            name: 'MCM Painel SLA e Follow-up',
            description,
            path,
            imagePath,
          }),
        ]}
      />
      <SlaDashboardLanding />
    </>
  );
}
