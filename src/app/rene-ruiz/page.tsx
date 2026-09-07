import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { siteConfig } from "@/config/site";
import { ReneRuizContent } from "./content";

export const metadata: Metadata = {
  title:
    "Rene Ruiz | English-Speaking Tattoo Artist Costa Rica | US Tourists Welcome",
  description:
    "Meet Rene Ruiz, the #1 tattoo artist for American travelers in Costa Rica. 15+ years experience, fluent English, USD accepted. Specializing in photorealistic portraits and black & grey. Near San José airport.",
  keywords: [
    "rene ruiz tattoo artist",
    "english speaking tattoo artist costa rica",
    "american friendly tattoo costa rica",
    "us tourist tattoo artist",
    "rene ruiz costa rica",
    "costa rica tattoo artist for americans",
    "san jose tattoo artist english",
    "realism tattoo artist",
    "portrait tattoo artist costa rica",
    "best tattoo artist costa rica tourists",
    "professional tattoo artist costa rica",
    "tattoo artist near san jose airport",
  ],
  openGraph: {
    title: "Rene Ruiz | Realism Tattoo Artist Costa Rica",
    description:
      "Costa Rica's premier realism tattoo artist with 15+ years of experience. Specializing in photorealistic portraits and black & grey tattoos.",
    url: `${siteConfig.url}/rene-ruiz`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Rene Ruiz - Realism Tattoo Artist Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rene Ruiz | Realism Tattoo Artist Costa Rica",
    description:
      "Costa Rica's premier realism tattoo artist. 15+ years creating photorealistic portraits and custom tattoos.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/rene-ruiz`,
    languages: {
      "en-US": `${siteConfig.url}/rene-ruiz`,
    },
  },
  other: {
    "content-language": "en-US",
  },
};

export default function ReneRuizPage() {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.artistName,
    jobTitle: "Realism Tattoo Artist",
    description:
      "Professional realism tattoo artist with over 15 years of experience specializing in photorealistic portraits, black and grey tattoos, and custom designs.",
    url: `${siteConfig.url}/rene-ruiz`,
    image: `${siteConfig.url}/images/perfil/rene111.png`,
    sameAs: [
      `https://www.instagram.com/${siteConfig.contact.instagram}`,
      `https://www.facebook.com/${siteConfig.contact.facebook}`,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "CR",
    },
    knowsAbout: [
      "Realism Tattooing",
      "Portrait Tattoos",
      "Black and Grey Tattoos",
      "Fine Line Tattoos",
      "Photorealistic Tattoos",
      "Custom Tattoo Design",
      "Animal Portraits",
      "Tattoo Aftercare",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Experience",
      name: "15+ Years Professional Tattoo Artist",
    },
    worksFor: {
      "@type": "TattooParlor",
      name: siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: "CR",
        streetAddress: siteConfig.location.address,
      },
    },
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
        name: "Rene Ruiz",
        item: `${siteConfig.url}/rene-ruiz`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />
      <main className="pt-20 md:pt-0">
        <ReneRuizContent />
      </main>
      <Footer />
    </>
  );
}
