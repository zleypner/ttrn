import type { MetadataRoute } from "next";

/**
 * Generates a robots.txt file optimized for SEO
 * for the Tata-u Tattoo Studio website.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://reneruiztattoo.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // API routes - no need to index
          "/api/",

          // Next.js internal files
          "/_next/static/",

          // Admin section (if exists)
          "/admin/",

          // Common sensitive patterns
          "/*.json$",
          "/*_buildManifest.js$",
          "/*_middlewareManifest.js$",
          "/*_ssgManifest.js$",

          // Private or draft content
          "/private/",
          "/draft/",

          // Search and filter pages that could create duplicate content
          "/*?*", // Query parameters (prevents indexing of filtered/sorted pages)
        ],
        // Crawl delay in seconds - be respectful to servers
        // Note: Google ignores crawl-delay, but other bots respect it
        crawlDelay: 10,
      },
      {
        // Googlebot specific rules (Google ignores crawl-delay)
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/static/",
          "/admin/",
          "/private/",
          "/draft/",
        ],
      },
      {
        // Googlebot-Image for better image indexing (tattoo portfolio)
        userAgent: "Googlebot-Image",
        allow: ["/", "/images/", "/*.jpg$", "/*.jpeg$", "/*.png$", "/*.webp$"],
        disallow: ["/api/", "/_next/static/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
