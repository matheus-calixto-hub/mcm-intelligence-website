import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Governance from "@/components/Governance";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Implementation from "@/components/Implementation";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Governance />
        <Products />
        <Services />
        <Implementation />
        <Clients />
        <Testimonials />
        <Suspense fallback={<div style={{ minHeight: '400px' }}></div>}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
