import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StylesCarousel } from "@/components/sections/styles-carousel";
import { FeaturedWork } from "@/components/sections/featured-work";
import { GallerySection } from "@/components/sections/gallery-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Tatuador Profesional en ${siteConfig.location.city}, ${siteConfig.location.country}`,
  description: `Tatuajes profesionales en ${siteConfig.location.city}, Costa Rica. ${siteConfig.artistName} es especialista en realismo, black & grey, fine line y retratos. +${siteConfig.stats.yearsExperience} anos de experiencia. Agenda tu cita hoy.`,
  keywords: [
    "tatuador San Jose Costa Rica",
    "mejor tatuador Costa Rica",
    "tatuajes realistas San Jose",
    "tatuajes black and grey Costa Rica",
    "fine line tattoo Costa Rica",
    "tatuajes de retratos Costa Rica",
    "estudio de tatuajes San Jose",
    "tatuador profesional Costa Rica",
    "Tata-u tattoo",
    "Rene Ruiz tatuador",
    "tatuajes personalizados Costa Rica",
    "citas tatuajes San Jose",
  ],
  openGraph: {
    title: `${siteConfig.name} | Tatuador Profesional en ${siteConfig.location.city}`,
    description: `Arte corporal de lujo en Costa Rica. Especialistas en realismo, black & grey y fine line. +${siteConfig.stats.tattoosCompleted} tatuajes realizados. Consulta gratis.`,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Tatuador Profesional en San Jose, Costa Rica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Tatuajes Profesionales en Costa Rica`,
    description: `Tatuajes de alta calidad en San Jose. Realismo, retratos, fine line. Agenda tu consulta gratis.`,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StylesCarousel />
        <FeaturedWork />
        <GallerySection />
        <StatsSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
