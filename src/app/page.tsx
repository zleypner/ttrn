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
import { LocationSection } from "@/components/sections/location-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Realism Tattoo Artist Costa Rica | ${siteConfig.artistName}`,
  description: `${siteConfig.artistName} is Costa Rica's premier realism tattoo artist with ${siteConfig.stats.yearsExperience}+ years of experience. Specializing in photorealistic portraits, black & grey, and fine line tattoos in ${siteConfig.location.city}. Book your free consultation today.`,
  keywords: [
    "realism tattoo artist costa rica",
    "realistic tattoos costa rica",
    "portrait tattoo artist costa rica",
    "photorealistic tattoo costa rica",
    "black and grey tattoo costa rica",
    "rene ruiz tattoo artist",
    "best tattoo artist costa rica",
    "fine line tattoo costa rica",
    "tattoo artist san jose costa rica",
    "costa rica tattoos",
    "custom tattoos costa rica",
    "professional tattoo artist costa rica",
  ],
  openGraph: {
    title: `Realism Tattoo Artist Costa Rica | ${siteConfig.artistName}`,
    description: `Costa Rica's premier realism tattoo artist. ${siteConfig.stats.yearsExperience}+ years creating photorealistic portraits and black & grey tattoos. Free consultation available.`,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.artistName} - Realism Tattoo Artist in Costa Rica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Realism Tattoo Artist Costa Rica | ${siteConfig.artistName}`,
    description: `Costa Rica's premier realism tattoo artist. Photorealistic portraits, black & grey, fine line. Book your free consultation.`,
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
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
