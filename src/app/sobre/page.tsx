import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutIntro from '@/components/AboutIntro';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SeoJsonLd from '@/components/SeoJsonLd';
import { OG_IMAGE } from '@/config/site';
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

const path = '/sobre';
const title = 'Sobre — quem somos';
const description =
  'A MCM ajuda empresas a organizar atendimento, follow-up e agenda no WhatsApp — com sites que convertem. São Paulo, Brasil.';

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  imagePath: OG_IMAGE.path,
  imageAlt: OG_IMAGE.alt,
  imageWidth: OG_IMAGE.width,
  imageHeight: OG_IMAGE.height,
  keywords: [
    'MCM Consultoria',
    'consultoria WhatsApp São Paulo',
    'Matheus Muniz',
  ],
});

export default function SobrePage() {
  return (
    <div>
      <SeoJsonLd
        data={breadcrumbJsonLd([
          { name: 'Início', path: '/' },
          { name: 'Sobre', path },
        ])}
      />
      <Navbar />
      <main id="conteudo">
        <AboutIntro />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
