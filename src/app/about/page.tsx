import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { StudioGallery } from "@/components/sections/studio-gallery";
import { siteConfig } from "@/config/site";
import { PersonSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `About ${siteConfig.artistName} | English-Speaking Tattoo Artist Costa Rica`,
  description: `Meet ${siteConfig.artistName}, Costa Rica's premier English-speaking tattoo artist. ${siteConfig.stats.yearsExperience}+ years experience, specializing in realism and portraits. Perfect for American travelers. USD accepted, near San José airport.`,
  keywords: [
    "rene ruiz tattoo artist",
    "english speaking tattoo artist costa rica",
    "american friendly tattoo costa rica",
    "tattoo artist costa rica bio",
    "professional tattoo artist costa rica",
    "tattoo artist san jose",
    "realism tattoo artist",
    "portrait tattoo specialist",
    "costa rica tattoo for tourists",
  ],
  openGraph: {
    title: `About ${siteConfig.artistName} | English-Speaking Tattoo Artist Costa Rica`,
    description: `Meet ${siteConfig.artistName}, Costa Rica's premier English-speaking tattoo artist for American travelers. ${siteConfig.stats.yearsExperience}+ years experience.`,
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.artistName} - English-Speaking Tattoo Artist Costa Rica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteConfig.artistName} | Costa Rica Tattoo Artist`,
    description: `${siteConfig.stats.yearsExperience}+ years experience. English-speaking, perfect for American travelers.`,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
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
        name: "About",
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <PersonSchema />
      <Header />
      <main>
        <AboutHero />
        <StudioGallery />
      </main>
      <Footer />
    </>
  );
}
