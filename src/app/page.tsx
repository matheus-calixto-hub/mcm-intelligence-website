import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Agents from "@/components/Agents";
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
        <Solutions />
        <Agents />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
