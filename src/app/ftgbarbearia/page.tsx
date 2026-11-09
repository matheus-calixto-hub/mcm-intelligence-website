import type { Metadata } from 'next';
import FtgBarbeariaLanding from '@/components/clients/FtgBarbeariaLanding';
import { FTG } from '@/config/ftgBarbearia';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/ftgbarbearia';
const title = `${FTG.brand} — agende no WhatsApp`;
const description = `${FTG.blurb} ${FTG.city}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${getSiteUrl()}${path}`,
  },
};

export default function FtgBarbeariaPage() {
  return <FtgBarbeariaLanding />;
}
