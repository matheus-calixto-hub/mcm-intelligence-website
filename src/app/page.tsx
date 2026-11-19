import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsHome from '@/components/ProductsHome';
import Solutions from '@/components/Solutions';
import TrustStrip from '@/components/TrustStrip';
import CtaBand from '@/components/CtaBand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SeoJsonLd from '@/components/SeoJsonLd';
import { OG_IMAGE, SITE } from '@/config/site';
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  path: '/',
  title: SITE.title,
  description: SITE.description,
  imagePath: OG_IMAGE.path,
  imageAlt: OG_IMAGE.alt,
  imageWidth: OG_IMAGE.width,
  imageHeight: OG_IMAGE.height,
  keywords: [...SITE.keywords],
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div>
      <SeoJsonLd
        data={breadcrumbJsonLd([{ name: 'Início', path: '/' }])}
      />
      <Navbar />
      <main id="conteudo">
        <Hero />
        <ProductsHome />
        <TrustStrip />
        <Solutions />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
