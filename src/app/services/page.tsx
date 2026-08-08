import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AftercareSection } from "@/components/sections/aftercare-section";
import { FAQSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tattoo Styles | Realism, Fine Line, Portraits",
  description: `Discover all tattoo styles we offer: Realism, Black & Grey, Fine Line, Portraits, Micro Realism and more. Custom tattoos in ${siteConfig.location.city}, Costa Rica. Free consultation available.`,
  keywords: [
    "tattoo styles Costa Rica",
    "realism tattoos San Jose",
    "black and grey tattoo Costa Rica",
    "fine line tattoo Costa Rica",
    "portrait tattoos Costa Rica",
    "micro realism tattoo",
    "geometric tattoos Costa Rica",
    "minimalist tattoos San Jose",
    "cover up tattoos Costa Rica",
    "professional tattoo services",
    "tattoo prices Costa Rica",
    "free tattoo consultation",
  ],
  openGraph: {
    title: `Tattoo Styles | Realism, Fine Line, Portraits | ${siteConfig.name}`,
    description: `Explore our variety of styles: Realism, Black & Grey, Fine Line, Portraits and more. Each tattoo is a personalized work of art. Schedule your free consultation.`,
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Tattoo Styles - ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tattoo Styles | ${siteConfig.name}`,
    description: `Realism, Fine Line, Portraits and more. Discover our professional tattoo services in Costa Rica.`,
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
