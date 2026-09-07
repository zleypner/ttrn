import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { siteConfig } from "@/config/site";
import { RealismContent } from "./content";

export const metadata: Metadata = {
  title: "Realism Tattoo Artist Costa Rica | #1 Choice for American Travelers",
  description:
    "Top realism tattoo artist in Costa Rica for US tourists. Rene Ruiz specializes in photorealistic portraits, black & grey realism, and lifelike tattoos. English-speaking, USD accepted. 15+ years experience near San José airport.",
  keywords: [
    "realism tattoo costa rica",
    "realistic tattoo artist costa rica",
    "american tattoo artist costa rica",
    "us tourist tattoo costa rica",
    "english speaking tattoo artist costa rica",
    "photorealistic tattoo costa rica",
    "portrait tattoo costa rica",
    "black and grey realism costa rica",
    "tattoo vacation costa rica",
    "best realism tattoo artist costa rica",
    "tattoo near san jose airport",
    "costa rica tattoo prices usd",
    "rene ruiz realism tattoo",
    "hyperrealistic tattoo costa rica",
  ],
  openGraph: {
    title: "Realism Tattoo Artist Costa Rica | Photorealistic Tattoos",
    description:
      "Expert realism tattoo artist in Costa Rica. Photorealistic portraits, black & grey realism, and lifelike tattoos. 15+ years of experience.",
    url: `${siteConfig.url}/realism-tattoo-costa-rica`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Realism Tattoo Artist Costa Rica - Photorealistic Tattoos by Rene Ruiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realism Tattoo Artist Costa Rica | Photorealistic Tattoos",
    description:
      "Expert realism tattoo artist in Costa Rica. Photorealistic portraits, black & grey realism, lifelike tattoos.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/realism-tattoo-costa-rica`,
    languages: {
      "en-US": `${siteConfig.url}/realism-tattoo-costa-rica`,
    },
  },
  other: {
    "content-language": "en-US",
  },
};

export default function RealismTattooCostaRicaPage() {
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is realism tattooing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Realism tattooing is a style that aims to replicate the appearance of photographs or real-life subjects on skin. It requires exceptional skill in shading, depth, and detail to create tattoos that look three-dimensional and lifelike, whether depicting portraits, animals, or objects.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a realistic tattoo take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Realistic tattoos typically require more time than other styles due to the intricate detail work. A small to medium portrait may take 4-8 hours, while larger pieces can require multiple sessions spanning 10-20+ hours. The exact time depends on size, complexity, and placement.",
        },
      },
      {
        "@type": "Question",
        name: "Do realistic tattoos age well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When done by a skilled artist and properly cared for, realistic tattoos can age beautifully. Key factors include proper sizing (not too small), quality ink, good placement, and following aftercare instructions. Black and grey realism tends to age particularly well.",
        },
      },
      {
        "@type": "Question",
        name: "What types of realism tattoos does Rene Ruiz specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rene Ruiz specializes in multiple realism styles including photorealistic portraits, black and grey realism, animal and pet portraits, nature and wildlife scenes, and hyperrealistic designs. His 15+ years of experience allows him to create stunning lifelike tattoos.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a realism tattoo cost in Costa Rica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Realism tattoo pricing depends on size, complexity, detail level, and session length. After a consultation where we discuss your design and reference photos, we provide a personalized quote. We offer competitive rates while maintaining the highest quality standards.",
        },
      },
      {
        "@type": "Question",
        name: "What reference photos work best for realistic tattoos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "High-quality, well-lit photos with clear details work best for realistic tattoos. For portraits, front-facing images with good lighting are ideal. Multiple reference photos from different angles can help create the best possible design. Avoid blurry or heavily filtered images.",
        },
      },
    ],
  };

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
        name: "Realism Tattoo Costa Rica",
        item: `${siteConfig.url}/realism-tattoo-costa-rica`,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Realism Tattoo Artist Costa Rica",
    description:
      "Expert realism tattoo artist in Costa Rica specializing in photorealistic portraits, black & grey realism, and lifelike tattoos.",
    url: `${siteConfig.url}/realism-tattoo-costa-rica`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Service",
      name: "Realism Tattoo Services",
      provider: {
        "@type": "Person",
        name: siteConfig.artistName,
        jobTitle: "Realism Tattoo Artist",
        knowsAbout: [
          "Realism Tattooing",
          "Portrait Tattoos",
          "Black and Grey Tattoos",
          "Photorealistic Tattoos",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "Costa Rica",
      },
      serviceType: "Realism Tattoo",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <Header />
      <main className="pt-20 md:pt-0">
        <RealismContent />
      </main>
      <Footer />
    </>
  );
}
