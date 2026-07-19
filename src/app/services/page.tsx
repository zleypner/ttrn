import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AftercareSection } from "@/components/sections/aftercare-section";
import { FAQSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Servicios de tatuaje profesional: realismo, black & grey, fine line, retratos y más. Consulta gratis en ${siteConfig.location.country}.`,
  openGraph: {
    title: `Servicios | ${siteConfig.name}`,
    description: `Servicios de tatuaje profesional: realismo, black & grey, fine line, retratos y más.`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <AftercareSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
