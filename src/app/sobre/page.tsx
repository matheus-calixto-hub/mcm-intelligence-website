import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutIntro from "@/components/AboutIntro";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSiteUrl, SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre — experiência e stack",
  description:
    "Track record da MCM: experiência em Odoo, agentes de IA no WhatsApp, Integrações, cloud e clientes atendidos. São Paulo, Brasil.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: `Sobre | ${SITE.name}`,
    description:
      "Experiência hands-on em Odoo, agentes de IA, Integrações e cloud — o portfolio por trás da MCM.",
    url: `${getSiteUrl()}/sobre`,
  },
};

export default function SobrePage() {
  return (
    <div>
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
