import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Supported languages for international SEO
const languages = {
  "en-US": siteConfig.url,
  "en-GB": siteConfig.url,
  "en-AU": siteConfig.url,
  "en-CA": siteConfig.url,
  "x-default": siteConfig.url,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Helper to add alternates to each URL
  const withAlternates = (path: string = "") => ({
    languages: Object.fromEntries(
      Object.entries(languages).map(([lang, url]) => [lang, `${url}${path}`])
    ),
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: withAlternates(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: withAlternates("/blog"),
    },
    {
      url: `${baseUrl}/realism-tattoo-costa-rica`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: withAlternates("/realism-tattoo-costa-rica"),
    },
    {
      url: `${baseUrl}/rene-ruiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: withAlternates("/rene-ruiz"),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: withAlternates("/about"),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: withAlternates("/services"),
    },
    {
      url: `${baseUrl}/best-tattoo-shop-in-san-jose`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: withAlternates("/best-tattoo-shop-in-san-jose"),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: withAlternates("/gallery"),
    },
  ];
}
