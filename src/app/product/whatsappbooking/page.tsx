import type { Metadata } from 'next';
import WhatsAppBookingLanding from '@/components/product/WhatsAppBookingLanding';
import { getSiteUrl, SITE } from '@/config/site';

const path = '/product/whatsappbooking';
const title = 'WhatsApp Booking — cliente agenda e remarca no WhatsApp';
const description =
  'Seu cliente marca, remarca e cancela horário no WhatsApp. Sua equipe gerencia a agenda pelo celular. MCM Booking.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${getSiteUrl()}${path}`,
  },
};

export default function WhatsAppBookingPage() {
  return <WhatsAppBookingLanding />;
}
