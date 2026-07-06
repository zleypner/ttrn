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
