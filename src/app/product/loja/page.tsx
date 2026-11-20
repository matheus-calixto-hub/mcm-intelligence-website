import type { Metadata } from 'next';
import StoreLanding from '@/components/product/StoreLanding';
import SeoJsonLd from '@/components/SeoJsonLd';
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceProductJsonLd,
} from '@/lib/seo';

const path = '/product/loja';
const title = 'Loja no WhatsApp — catálogo, pedido e bot sob controle';
const description =
  'Venda produtos e serviços no WhatsApp com catálogo no Odoo, pedidos e bot que o time pausa no Chatbox. Demonstração MCM.';
const imagePath = '/products/followup-desktop-chat.jpg';

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  imagePath,
  imageAlt: 'Chatbox Loja WhatsApp MCM com catálogo e bot',
  imageWidth: 1280,
  imageHeight: 720,
  keywords: [
    'loja WhatsApp',
    'catálogo WhatsApp Odoo',
    'venda pelo WhatsApp',
    'pedido WhatsApp bot',
    'WhatsApp Business loja',
  ],
});

export default function LojaPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Início', path: '/' },
            { name: 'Produtos', path: '/produtos' },
            { name: 'Loja WhatsApp', path },
          ]),
          serviceProductJsonLd({
            name: 'MCM Loja no WhatsApp',
            description,
            path,
            imagePath,
          }),
        ]}
      />
      <StoreLanding />
    </>
  );
}
