import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsHome from "@/components/ProductsHome";
import Solutions from "@/components/Solutions";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div>
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
