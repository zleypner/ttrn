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
  title: `${siteConfig.name} | Professional Tattoo Artist in ${siteConfig.location.city}, ${siteConfig.location.country}`,
  description: `Professional tattoos in ${siteConfig.location.city}, Costa Rica. ${siteConfig.artistName} specializes in realism, black & grey, fine line and portraits. +${siteConfig.stats.yearsExperience} years of experience. Book your appointment today.`,
  keywords: [
    "tattoo artist San Jose Costa Rica",
    "best tattoo artist Costa Rica",
    "realistic tattoos San Jose",
    "black and grey tattoo Costa Rica",
    "fine line tattoo Costa Rica",
    "portrait tattoos Costa Rica",
    "tattoo studio San Jose",
    "professional tattoo artist Costa Rica",
    "Costa Rica Tattoos",
    "Rene Ruiz tattoo artist",
    "custom tattoos Costa Rica",
    "tattoo appointments San Jose",
  ],
  openGraph: {
    title: `${siteConfig.name} | Professional Tattoo Artist in ${siteConfig.location.city}`,
    description: `Luxury body art in Costa Rica. Specialists in realism, black & grey and fine line. +${siteConfig.stats.tattoosCompleted} tattoos completed. Free consultation.`,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Tattoo Artist in San Jose, Costa Rica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Professional Tattoos in Costa Rica`,
    description: `High quality tattoos in San Jose. Realism, portraits, fine line. Book your free consultation.`,
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
