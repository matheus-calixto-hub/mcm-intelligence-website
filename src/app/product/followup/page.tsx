import type { Metadata } from 'next';
import FollowUpLanding from '@/components/product/FollowUpLanding';
import SeoJsonLd from '@/components/SeoJsonLd';
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceProductJsonLd,
} from '@/lib/seo';

const path = '/product/followup';
const title = 'Follow-up comercial no WhatsApp e e-mail';
const description =
  'Fila de atenção, SLA, cadências e chat com nome do atendente. Follow-up MCM para times que vendem no WhatsApp. Peça uma demonstração.';
const imagePath = '/products/followup-inbox.jpg';

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  imagePath,
  imageAlt: 'Fila de atenção e chat no app Mensagens WA da MCM',
  imageWidth: 1280,
  imageHeight: 720,
  keywords: [
    'follow-up comercial WhatsApp',
    'fila de atendimento WhatsApp',
    'SLA WhatsApp empresa',
    'cadência de follow-up',
    'CRM WhatsApp time de vendas',
  ],
});

export default function FollowUpPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Início', path: '/' },
            { name: 'Produtos', path: '/produtos' },
            { name: 'Follow-up', path },
          ]),
          serviceProductJsonLd({
            name: 'MCM Follow-up comercial',
            description,
            path,
            imagePath,
            category: 'BusinessApplication',
          }),
        ]}
      />
      <FollowUpLanding />
    </>
  );
}
