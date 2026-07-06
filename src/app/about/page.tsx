import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { ArtistStory } from "@/components/sections/artist-story";
import { StudioGallery } from "@/components/sections/studio-gallery";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: `Conoce a ${siteConfig.artistName}, tatuador profesional con más de ${siteConfig.stats.yearsExperience} años de experiencia especializado en realismo, black & grey y fine line en ${siteConfig.location.country}.`,
  openGraph: {
    title: `Sobre Mí | ${siteConfig.name}`,
    description: `Conoce a ${siteConfig.artistName}, tatuador profesional con más de ${siteConfig.stats.yearsExperience} años de experiencia.`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <ArtistStory />
        <StudioGallery />
      </main>
      <Footer />
    </>
  );
}
