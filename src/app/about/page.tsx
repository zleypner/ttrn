import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { ArtistStory } from "@/components/sections/artist-story";
import { StudioGallery } from "@/components/sections/studio-gallery";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Sobre ${siteConfig.artistName} | +${siteConfig.stats.yearsExperience} Anos de Arte Corporal`,
  description: `Conoce la historia de ${siteConfig.artistName}, tatuador profesional con mas de ${siteConfig.stats.yearsExperience} anos transformando ideas en arte corporal. Especialista en realismo, black & grey y fine line en ${siteConfig.location.city}, Costa Rica. Descubre su trayectoria y filosofia artistica.`,
  keywords: [
    "Rene Ruiz tatuador",
    "historia Tata-u",
    "artista tatuador Costa Rica",
    "biografia tatuador profesional",
    "experiencia tatuador San Jose",
    "trayectoria artista corporal",
    "filosofia tatuaje Costa Rica",
    "estudio tatuajes profesional",
  ],
  openGraph: {
    title: `Sobre ${siteConfig.artistName} | +${siteConfig.stats.yearsExperience} Anos de Arte Corporal | ${siteConfig.name}`,
    description: `Descubre la historia detras de ${siteConfig.name}. ${siteConfig.artistName} ha dedicado +${siteConfig.stats.yearsExperience} anos al arte del tatuaje, creando piezas unicas para +${siteConfig.stats.happyClients} clientes satisfechos.`,
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.artistName} - Tatuador Profesional de ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sobre ${siteConfig.artistName} | ${siteConfig.name}`,
    description: `+${siteConfig.stats.yearsExperience} anos de experiencia en arte corporal. Conoce al artista detras de Tata-u.`,
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
        <ArtistStory />
        <StudioGallery />
      </main>
      <Footer />
    </>
  );
}
