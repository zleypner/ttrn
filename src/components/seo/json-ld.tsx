import { siteConfig } from "@/config/site";
import { tattooStyles } from "@/lib/constants/tattoo-styles";
import { faqItems } from "@/lib/constants/faq";
import { galleryImages } from "@/lib/constants/images";

// Types for JSON-LD schemas
interface FAQItemType {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface GalleryImageType {
  id: string;
  title: string;
  category: string;
  image: string;
}

interface ServiceType {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

// Helper to render JSON-LD script
function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * LocalBusinessSchema - TattooParlor schema with complete business data
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: `${siteConfig.artistName} Tattoo`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$$",
    currenciesAccepted: "CRC, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    image: [
      siteConfig.ogImage,
      `${siteConfig.url}/images/studio-1.jpg`,
      `${siteConfig.url}/images/studio-2.jpg`,
    ],
    logo: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coordinates.lat,
      longitude: siteConfig.location.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      `https://www.instagram.com/${siteConfig.contact.instagram}`,
      `https://www.facebook.com/${siteConfig.contact.facebook}`,
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.artistName,
    },
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tattoo Services",
      itemListElement: tattooStyles.map((style, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: style.name,
          description: style.description,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: siteConfig.stats.happyClients.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * PersonSchema - Schema for the artist Rene Ruiz
 */
export function PersonSchema() {
  const specialties = [
    "Realism",
    "Black & Grey",
    "Fine Line",
    "Portraits",
    "Geometric",
    "Ornamental",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.artistName,
    jobTitle: "Professional Tattoo Artist",
    description: `Professional tattoo artist with over ${siteConfig.stats.yearsExperience} years of experience specializing in ${specialties.join(", ")}.`,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/artist.jpg`,
    sameAs: [
      `https://www.instagram.com/${siteConfig.contact.instagram}`,
      `https://www.facebook.com/${siteConfig.contact.facebook}`,
    ],
    worksFor: {
      "@type": "TattooParlor",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    knowsAbout: specialties,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Experience",
        description: `${siteConfig.stats.yearsExperience}+ years of professional experience`,
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Portfolio",
        description: `${siteConfig.stats.tattoosCompleted}+ tattoos completed`,
      },
    ],
    award: [
      `Over ${siteConfig.stats.yearsExperience} years of experience`,
      `${siteConfig.stats.tattoosCompleted}+ tattoos completed`,
      `${siteConfig.stats.happyClients}+ satisfied clients`,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "CR",
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * FAQSchema - Schema for FAQ section
 * Can receive custom FAQ items or use default ones
 */
export function FAQSchema({
  items = faqItems,
}: {
  items?: FAQItemType[];
} = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * ServiceSchema - Schema for individual tattoo service/style
 */
export function ServiceSchema({ service }: { service: ServiceType }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.id}`,
    name: `${service.name} Tattoo`,
    description: service.description,
    provider: {
      "@type": "TattooParlor",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
    image: service.image.startsWith("http")
      ? service.image
      : `${siteConfig.url}${service.image}`,
    serviceType: "Tattoo",
    category: service.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Features`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: index + 1,
      })),
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * AllServicesSchema - Schema for all tattoo services
 */
export function AllServicesSchema({
  services = tattooStyles,
}: {
  services?: ServiceType[];
} = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tattoo Styles",
    description: "Professional tattoo services available at " + siteConfig.name,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteConfig.url}/services/${service.id}`,
        name: `${service.name} Tattoo`,
        description: service.description,
        provider: {
          "@type": "TattooParlor",
          name: siteConfig.name,
        },
        image: service.image.startsWith("http")
          ? service.image
          : `${siteConfig.url}${service.image}`,
      },
    })),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * BreadcrumbSchema - Schema for breadcrumb navigation
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * ImageGallerySchema - Schema for the image gallery
 */
export function ImageGallerySchema({
  images = galleryImages as unknown as GalleryImageType[],
}: {
  images?: GalleryImageType[];
} = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${siteConfig.name} - Tattoo Gallery`,
    description: `Gallery of tattoo work by ${siteConfig.artistName}`,
    url: `${siteConfig.url}/#gallery`,
    creator: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.artistName,
    },
    image: images.map((img) => ({
      "@type": "ImageObject",
      name: img.title,
      description: `${img.title} - ${img.category} Style`,
      contentUrl: img.image.startsWith("http")
        ? img.image
        : `${siteConfig.url}${img.image}`,
      creator: {
        "@type": "Person",
        name: siteConfig.artistName,
      },
      copyrightHolder: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    })),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * WebSiteSchema - Schema for the website itself
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "TattooParlor",
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * WebPageSchema - Schema for individual pages
 */
export function WebPageSchema({
  title,
  description,
  url,
  breadcrumbs,
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@type": "TattooParlor",
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
    ...(breadcrumbs && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * CombinedSchemas - Combines all main schemas for the homepage
 */
export function CombinedSchemas() {
  return (
    <>
      <WebSiteSchema />
      <LocalBusinessSchema />
      <PersonSchema />
      <AllServicesSchema />
      <FAQSchema />
      <ImageGallerySchema />
    </>
  );
}

// Export types for external use
export type { FAQItemType, BreadcrumbItem, GalleryImageType, ServiceType };
