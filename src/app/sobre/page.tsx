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
  title: "Sobre — quem somos",
  description:
    "A MCM ajuda empresas a organizar atendimento, follow-up e agenda no WhatsApp — com sites que convertem. São Paulo, Brasil.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: `Sobre | ${SITE.name}`,
    description:
      "Quem está por trás da MCM: experiência prática em operação, WhatsApp comercial e sites que vendem.",
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
