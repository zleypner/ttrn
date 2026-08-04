import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AftercareSection } from "@/components/sections/aftercare-section";
import { FAQSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Estilos de Tatuaje | Realismo, Fine Line, Retratos",
  description: `Descubre todos los estilos de tatuaje que ofrecemos: Realismo, Black & Grey, Fine Line, Retratos, Micro Realismo y mas. Tatuajes personalizados en ${siteConfig.location.city}, Costa Rica. Consulta gratuita disponible.`,
  keywords: [
    "estilos tatuaje Costa Rica",
    "tatuajes realismo San Jose",
    "tatuajes black and grey Costa Rica",
    "fine line tattoo Costa Rica",
    "tatuajes retratos Costa Rica",
    "micro realismo tatuaje",
    "tatuajes geometricos Costa Rica",
    "tatuajes minimalistas San Jose",
    "cover up tatuajes Costa Rica",
    "servicios tatuaje profesional",
    "precios tatuajes Costa Rica",
    "consulta gratis tatuaje",
  ],
  openGraph: {
    title: `Estilos de Tatuaje | Realismo, Fine Line, Retratos | ${siteConfig.name}`,
    description: `Explora nuestra variedad de estilos: Realismo, Black & Grey, Fine Line, Retratos y mas. Cada tatuaje es una obra de arte personalizada. Agenda tu consulta gratis.`,
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Estilos de Tatuaje - ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Estilos de Tatuaje | ${siteConfig.name}`,
    description: `Realismo, Fine Line, Retratos y mas. Descubre nuestros servicios de tatuaje profesional en Costa Rica.`,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
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
