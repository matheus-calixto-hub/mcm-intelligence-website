import type { Metadata } from 'next';
import WhatsAppBookingLanding from '@/components/product/WhatsAppBookingLanding';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/product/whatsappbooking';
const title = 'Agendamento pelo WhatsApp — marca e remarca sozinho';
const description =
  'Seu cliente marca, remarca e cancela horário no WhatsApp. Sua equipe gerencia a agenda pelo celular. Peça uma demonstração com a MCM.';

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
        url: `${getSiteUrl()}/products/booking-agenda.jpg`,
        width: 960,
        height: 540,
        alt: 'Agendamento MCM Booking no WhatsApp',
      },
    ],
  },
};

export default function WhatsAppBookingPage() {
  return <WhatsAppBookingLanding />;
}
