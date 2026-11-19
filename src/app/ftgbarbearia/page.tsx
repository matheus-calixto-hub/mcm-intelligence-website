import type { Metadata } from 'next';
import FtgBarbeariaLanding from '@/components/clients/FtgBarbeariaLanding';
import { FTG } from '@/config/ftgBarbearia';
import { OG_IMAGE } from '@/config/site';
import { buildPageMetadata } from '@/lib/seo';

const path = '/ftgbarbearia';
const title = `${FTG.brand} — agende no WhatsApp`;
const description = `${FTG.blurb} ${FTG.city}.`;

/** Landing de cliente — não indexar (tráfego via link direto / QR). */
export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  imagePath: OG_IMAGE.path,
  imageAlt: `${FTG.brand} — agendamento no WhatsApp`,
  imageWidth: OG_IMAGE.width,
  imageHeight: OG_IMAGE.height,
  noIndex: true,
});

export default function FtgBarbeariaPage() {
  return <FtgBarbeariaLanding />;
}
