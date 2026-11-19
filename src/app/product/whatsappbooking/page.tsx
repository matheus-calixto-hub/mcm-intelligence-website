import type { Metadata } from 'next';
import WhatsAppBookingLanding from '@/components/product/WhatsAppBookingLanding';
import SeoJsonLd from '@/components/SeoJsonLd';
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceProductJsonLd,
} from '@/lib/seo';

const path = '/product/whatsappbooking';
const title = 'Agendamento pelo WhatsApp — marca e remarca sozinho';
const description =
  'Cliente marca, remarca e cancela no WhatsApp com Flow Meta. Ideal para salão, clínica e serviços. Demonstração com a MCM.';
const imagePath = '/products/booking-agenda.jpg';

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  imagePath,
  imageAlt: 'Flow de agendamento MCM Booking no WhatsApp',
  imageWidth: 1280,
  imageHeight: 720,
  keywords: [
    'agendamento WhatsApp',
    'WhatsApp Flow agendar',
    'cliente marca sozinho no zap',
    'agenda salão WhatsApp',
    'agendamento clínica WhatsApp',
  ],
});

export default function WhatsAppBookingPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Início', path: '/' },
            { name: 'Produtos', path: '/produtos' },
            { name: 'Agendamento WhatsApp', path },
          ]),
          serviceProductJsonLd({
            name: 'MCM Agendamento no WhatsApp',
            description,
            path,
            imagePath,
          }),
        ]}
      />
      <WhatsAppBookingLanding />
    </>
  );
}
