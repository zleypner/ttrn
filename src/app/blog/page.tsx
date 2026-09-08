import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tattoo Blog | Realism Tattoos Costa Rica for American Travelers",
  description:
    "Expert tattoo guides for Americans traveling to Costa Rica. Learn about realism tattoos, portrait work, pricing, and why Costa Rica is a top destination for US tourists seeking world-class tattoo artists.",
  keywords: [
    "costa rica tattoo blog",
    "tattoo vacation costa rica",
    "american tattoo tourism costa rica",
    "us tourists tattoo costa rica",
    "realism tattoo guide",
    "tattoo travel costa rica",
    "best tattoo artist for americans",
    "costa rica tattoo prices usd",
    "tattoo destination costa rica",
    "tattoo while traveling costa rica",
    "tattoo artist near san jose airport",
    "english speaking tattoo artist costa rica",
  ],
  openGraph: {
    title: "Tattoo Blog | Expert Guides for Travelers to Costa Rica",
    description:
      "Expert tattoo guides for Americans traveling to Costa Rica. Realism tattoos, portraits, and world-class artistry.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Tattoo Blog - Costa Rica Tattoo Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Blog | Costa Rica Tattoo Guides for Americans",
    description:
      "Expert guides on getting tattoos in Costa Rica. Perfect for US travelers seeking world-class realism tattoos.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const blogPosts = [
  {
    slug: "realism-tattoo-costa-rica",
    title: "Realism Tattoo Artist Costa Rica",
    subtitle: "The Ultimate Guide to Photorealistic Tattoos",
    description:
      "Discover why Costa Rica has become a premier destination for realism tattoos. Learn about techniques, pricing, and what makes our photorealistic work stand out.",
    image: "/images/realismo/leon-realista.webp",
    category: "Realism Guide",
    readTime: "8 min read",
  },
  {
    slug: "rene-ruiz",
    title: "Meet Rene Ruiz",
    subtitle: "15+ Years of Tattoo Excellence",
    description:
      "Get to know the artist behind the ink. Rene Ruiz's journey from passionate beginner to Costa Rica's premier realism tattoo specialist.",
    image: "/images/perfil/rene111.png",
    category: "Artist Profile",
    readTime: "5 min read",
  },
  {
    slug: "best-tattoo-shop-in-san-jose",
    title: "Best Tattoo Shop in San José",
    subtitle: "Your Guide to Premium Tattoos in Costa Rica's Capital",
    description:
      "Planning a trip to San José? Find out why tourists from the US choose our studio for custom tattoos, and what to expect from your experience.",
    image: "/images/realismo/leon-realista.webp",
    category: "Travel Guide",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Costa Rica Tattoo Blog",
    description:
      "Expert tattoo guides and articles for Americans traveling to Costa Rica",
    url: `${siteConfig.url}/blog`,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteConfig.url}/${post.slug}`,
      author: {
        "@type": "Person",
        name: siteConfig.artistName,
      },
    })),
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
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />
      <main className="pt-20 md:pt-0">
        {/* Hero Section */}
        <section className="section-padding from-card/50 to-background bg-gradient-to-b">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="text-muted-foreground flex items-center justify-center gap-2">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-olive transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-foreground">Blog</li>
                </ol>
              </nav>

              {/* Title */}
              <div className="mb-6 flex flex-col gap-4">
                <div className="from-olive to-copper mx-auto mb-2 h-px w-16 bg-gradient-to-r" />
                <h1 className="font-heading text-shadow-gold text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-[#F3EDE2] via-[#C9A45C] to-[#7A1E2C] bg-clip-text text-transparent">
                    Tattoo Blog & Guides
                  </span>
                </h1>
                <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
                  Expert guides for{" "}
                  <strong className="text-foreground">
                    Americans traveling to Costa Rica
                  </strong>{" "}
                  seeking world-class tattoos. From realism techniques to travel
                  tips, everything you need to plan your tattoo experience.
                </p>
              </div>

              {/* USA Focus Badge */}
              <div className="mb-12 flex items-center justify-center gap-3">
                <span className="bg-card/80 text-olive inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm">
                  <span className="text-lg">🇺🇸</span>
                  English-speaking artist
                </span>
                <span className="bg-card/80 text-olive inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm">
                  USD accepted
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding bg-card/30">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group bg-card/50 hover:border-olive/30 block overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="bg-olive/90 absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-muted-foreground mb-2 text-xs">
                      {post.readTime}
                    </div>
                    <h2 className="text-foreground group-hover:text-olive mb-2 text-xl font-semibold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-olive mb-3 text-sm">{post.subtitle}</p>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {post.description}
                    </p>
                    <span className="text-olive inline-flex items-center gap-2 text-sm font-medium">
                      Read Article
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* USA Travelers Section */}
        <section className="section-padding">
          <div className="container-narrow px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-foreground mb-6 text-2xl font-semibold md:text-3xl">
                Why Americans Choose Costa Rica for Tattoos
              </h2>
              <div className="mb-8 grid gap-6 text-left sm:grid-cols-2">
                {[
                  {
                    title: "2-3 Hour Flight from US",
                    desc: "Direct flights from Miami, Houston, LA, and major cities",
                  },
                  {
                    title: "World-Class Artists",
                    desc: "International-level realism work at competitive prices",
                  },
                  {
                    title: "English Speaking",
                    desc: "Easy communication throughout your tattoo experience",
                  },
                  {
                    title: "Vacation + Tattoo",
                    desc: "Combine beautiful beaches with premium body art",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-card/50 rounded-xl border border-white/5 p-4"
                  >
                    <h3 className="text-olive mb-1 font-medium">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                Plan Your Tattoo Trip
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
