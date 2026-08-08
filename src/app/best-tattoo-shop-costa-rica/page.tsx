import type { Metadata } from "next";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { siteConfig } from "@/config/site";
import { BestTattooShopContent } from "./content";

export const metadata: Metadata = {
  title: "Best Tattoo Shop in Costa Rica | Custom Tattoo Artists",
  description:
    "Looking for the best tattoo shop in Costa Rica? Our professional artists specialize in fine line, realism, and black & grey tattoos. Book your custom tattoo today!",
  keywords: [
    "best tattoo shop Costa Rica",
    "tattoo artist Costa Rica",
    "Costa Rica tattoo",
    "tattoo San Jose Costa Rica",
    "custom tattoo Costa Rica",
    "fine line tattoo Costa Rica",
    "realism tattoo Costa Rica",
    "black and grey tattoo Costa Rica",
    "tattoo while traveling Costa Rica",
    "tourist tattoo Costa Rica",
    "professional tattoo artist",
    "tattoo vacation Costa Rica",
    "Costa Rica ink",
    "Central America tattoo",
    "tattoo shop near me Costa Rica",
    "best tattoo artist Central America",
    "portrait tattoo Costa Rica",
    "minimalist tattoo Costa Rica",
    "tattoo studio Costa Rica",
    "luxury tattoo Costa Rica",
  ],
  openGraph: {
    title: "Best Tattoo Shop in Costa Rica | Custom Tattoo Artists",
    description:
      "Professional custom tattoos for tourists and locals. Award-winning artists specializing in fine line, realism, and black & grey work in Costa Rica.",
    url: `${siteConfig.url}/best-tattoo-shop-costa-rica`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Best Tattoo Shop in Costa Rica - Custom Tattoo Artists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tattoo Shop in Costa Rica | Custom Tattoo Artists",
    description:
      "Professional custom tattoos for tourists and locals. Award-winning artists specializing in fine line, realism, and black & grey.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/best-tattoo-shop-costa-rica`,
    languages: {
      "en-US": `${siteConfig.url}/best-tattoo-shop-costa-rica`,
    },
  },
  other: {
    "content-language": "en-US",
  },
};

export default function BestTattooShopCostaRicaPage() {
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book a tattoo appointment in Costa Rica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booking is easy! Contact us directly via WhatsApp or through our contact form. We'll respond within 24 hours to discuss your tattoo idea, schedule a consultation, and find the best available date for your session.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a tattoo cost in Costa Rica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tattoo pricing depends on size, complexity, body placement, and style. After our initial consultation where we discuss your design, we'll provide a detailed, personalized quote. We offer competitive rates with luxury-quality results.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to pay a deposit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a deposit is required to secure your appointment. This deposit is deducted from your final tattoo price and guarantees your spot in our schedule.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a tattoo while on vacation in Costa Rica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We specialize in working with tourists and international visitors. We recommend reaching out before your trip so we can schedule your session. Same-day consultations are sometimes available for walk-ins.",
        },
      },
      {
        "@type": "Question",
        name: "What tattoo styles do you specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our artists excel in fine line, realism, black and grey, portraits, and custom designs. We work closely with each client to create unique pieces that match their vision.",
        },
      },
      {
        "@type": "Question",
        name: "How should I prepare for my tattoo appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Get a good night's sleep, eat a full meal before arriving, stay hydrated, and avoid alcohol for at least 24 hours. Wear comfortable clothing that provides easy access to the tattoo area.",
        },
      },
      {
        "@type": "Question",
        name: "What aftercare is needed for my new tattoo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide detailed aftercare instructions. Generally: keep it clean, apply recommended moisturizer, avoid direct sunlight, and don't submerge it in water for 2-3 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free touch-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a complimentary touch-up within the first 3 months after completing your tattoo, provided the aftercare instructions have been followed correctly.",
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
        name: "Best Tattoo Shop Costa Rica",
        item: `${siteConfig.url}/best-tattoo-shop-costa-rica`,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Tattoo Shop in Costa Rica",
    description:
      "Looking for the best tattoo shop in Costa Rica? Our professional artists specialize in fine line, realism, and black & grey tattoos.",
    url: `${siteConfig.url}/best-tattoo-shop-costa-rica`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "TattooParlor",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressCountry: "CR",
      },
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
        <BestTattooShopContent />
      </main>
      <Footer />
    </>
  );
}
