import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { StudioGallery } from "@/components/sections/studio-gallery";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About ${siteConfig.artistName} | +${siteConfig.stats.yearsExperience} Years of Body Art`,
  description: `Learn about ${siteConfig.artistName}, professional tattoo artist with over ${siteConfig.stats.yearsExperience} years transforming ideas into body art. Specialist in realism, black & grey, and fine line in ${siteConfig.location.city}, Costa Rica. Discover his journey and artistic philosophy.`,
  keywords: [
    "Rene Ruiz tattoo artist",
    "Costa Rica Tattoos story",
    "tattoo artist Costa Rica",
    "professional tattoo artist bio",
    "tattoo artist San Jose",
    "body art journey",
    "tattoo philosophy Costa Rica",
    "professional tattoo studio",
  ],
  openGraph: {
    title: `About ${siteConfig.artistName} | +${siteConfig.stats.yearsExperience} Years of Body Art | ${siteConfig.name}`,
    description: `Discover the story behind ${siteConfig.name}. ${siteConfig.artistName} has dedicated +${siteConfig.stats.yearsExperience} years to the art of tattooing, creating unique pieces for +${siteConfig.stats.happyClients} satisfied clients.`,
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.artistName} - Professional Tattoo Artist at ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteConfig.artistName} | ${siteConfig.name}`,
    description: `+${siteConfig.stats.yearsExperience} years of body art experience. Meet the artist behind Costa Rica Tattoos.`,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <StudioGallery />
      </main>
      <Footer />
    </>
  );
}
