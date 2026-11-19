import type { Metadata } from 'next';
import FollowUpLanding from '@/components/product/FollowUpLanding';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/product/followup';
const title = 'Follow-up comercial no WhatsApp e e-mail';
const description =
  'Fila de atenção, prazos, cadências e conversa com nome do atendente. Follow-up MCM para times que vendem no WhatsApp. Peça uma demonstração.';

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
        url: `${getSiteUrl()}/products/followup-inbox.jpg`,
        width: 960,
        height: 540,
        alt: 'Inbox comercial MCM Follow-up',
      },
    ],
  },
};

export default function FollowUpPage() {
  return <FollowUpLanding />;
}
