import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AftercareSection } from "@/components/sections/aftercare-section";
import { FAQSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";
import { AllServicesSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Tattoo Services Costa Rica | Realism, Portraits, Fine Line | USD Accepted",
  description: `Premium tattoo services for American travelers in Costa Rica. Realism, Black & Grey, Fine Line, Portraits. English-speaking artist, USD accepted. Free consultation near San José airport.`,
  keywords: [
    "tattoo services costa rica",
    "realism tattoo costa rica",
    "portrait tattoo costa rica",
    "black and grey tattoo costa rica",
    "fine line tattoo costa rica",
    "tattoo prices costa rica usd",
    "english speaking tattoo costa rica",
    "american tourist tattoo costa rica",
    "micro realism tattoo",
    "geometric tattoos costa rica",
    "cover up tattoos costa rica",
    "free tattoo consultation costa rica",
    "tattoo near san jose airport",
  ],
  openGraph: {
    title: `Tattoo Services Costa Rica | Realism, Portraits, Fine Line`,
    description: `Premium tattoo services for American travelers. Realism, Black & Grey, Fine Line, Portraits. English-speaking, USD accepted.`,
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Tattoo Services Costa Rica - ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tattoo Services Costa Rica | ${siteConfig.name}`,
    description: `Premium tattoo services for American travelers. Realism, Portraits, Fine Line. English-speaking, USD accepted.`,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <AllServicesSchema />
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
