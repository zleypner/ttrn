import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { GallerySection } from "@/components/sections/gallery-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Tattoo Gallery | ${siteConfig.artistName} - Costa Rica`,
  description:
    "Browse the complete tattoo portfolio of Rene Ruiz. Featuring realism, full color, Japanese, tribal, and micro realism tattoos. View our gallery and book your consultation.",
  keywords: [
    "tattoo gallery costa rica",
    "realism tattoo portfolio",
    "full color tattoos",
    "japanese tattoo gallery",
    "tribal tattoos costa rica",
    "tattoo portfolio rene ruiz",
  ],
  openGraph: {
    title: `Tattoo Gallery | ${siteConfig.artistName}`,
    description:
      "Browse the complete tattoo portfolio featuring realism, full color, Japanese, and tribal tattoos.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Tattoo Gallery - Rene Ruiz Costa Rica",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
