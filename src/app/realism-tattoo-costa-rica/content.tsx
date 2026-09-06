"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, Palette, Clock, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared";
import { siteConfig } from "@/config/site";
import { galleryImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

// Filter realism and portrait images for portfolio preview
const realismImages = galleryImages.filter(
  (img) => img.category === "Realismo" || img.category === "Retratos"
);

const realismTypes = [
  {
    title: "Portrait Realism",
    description:
      "Capture the essence of loved ones, family members, or icons in stunning photorealistic detail. Every expression, every nuance preserved in ink.",
    icon: Eye,
  },
  {
    title: "Animal & Pet Portraits",
    description:
      "Honor your beloved pets or favorite wildlife with lifelike tattoos that capture their spirit and personality with incredible accuracy.",
    icon: Palette,
  },
  {
    title: "Black & Grey Realism",
    description:
      "Classic monochromatic realism using sophisticated shading techniques to create depth, dimension, and timeless elegance.",
    icon: Star,
  },
];

const realismFAQs = [
  {
    question: "What is realism tattooing?",
    answer:
      "Realism tattooing is a style that aims to replicate the appearance of photographs or real-life subjects on skin. It requires exceptional skill in shading, depth, and detail to create tattoos that look three-dimensional and lifelike.",
  },
  {
    question: "How long does a realistic tattoo take?",
    answer:
      "Realistic tattoos typically require more time than other styles. A small to medium portrait may take 4-8 hours, while larger pieces can require multiple sessions spanning 10-20+ hours. The exact time depends on size, complexity, and placement.",
  },
  {
    question: "Do realistic tattoos age well?",
    answer:
      "When done by a skilled artist and properly cared for, realistic tattoos can age beautifully. Key factors include proper sizing, quality ink, good placement, and following aftercare instructions. Black and grey realism tends to age particularly well.",
  },
  {
    question: "What reference photos work best?",
    answer:
      "High-quality, well-lit photos with clear details work best. For portraits, front-facing images with good lighting are ideal. Multiple reference photos from different angles can help create the best possible design.",
  },
  {
    question: "How much does a realism tattoo cost?",
    answer:
      "Pricing depends on size, complexity, detail level, and session length. After a consultation where we discuss your design, we provide a personalized quote. Contact us for a free consultation.",
  },
];

export function RealismContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding from-card/50 to-background relative overflow-hidden bg-gradient-to-b">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeInUp}
              className="mb-8 text-sm"
              aria-label="Breadcrumb"
            >
              <ol className="text-muted-foreground flex items-center justify-center gap-2">
                <li>
                  <Link href="/" className="hover:text-olive transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Realism Tattoo Costa Rica</li>
              </ol>
            </motion.nav>

            <SectionHeading
              title="Realism Tattoo Artist Costa Rica"
              subtitle="Creating photorealistic tattoos that bring your vision to life. From portraits to wildlife, experience the art of lifelike tattooing."
              as="h1"
              variant="premium"
              showLine={true}
            />

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg"
            >
              {siteConfig.artistName} is Costa Rica&apos;s premier{" "}
              <strong>realism tattoo artist</strong> with over{" "}
              {siteConfig.stats.yearsExperience} years of experience creating
              stunning photorealistic tattoos. From intimate portraits to
              majestic wildlife, every piece is crafted with meticulous
              attention to detail.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey, I come from the website. I'm interested in a realism tattoo consultation")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-glow inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                <WhatsAppIcon size={20} />
                Free Realism Consultation
              </a>
              <Link
                href="/#gallery"
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                View Full Portfolio
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
            >
              {[
                {
                  value: `${siteConfig.stats.yearsExperience}+`,
                  label: "Years Experience",
                },
                {
                  value: `${siteConfig.stats.happyClients.toLocaleString()}+`,
                  label: "Happy Clients",
                },
                {
                  value: "Realism",
                  label: "Specialist",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-olive text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Realism Tattooing Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What is Realism Tattooing?"
            subtitle="The art of creating lifelike images on skin, capturing every detail with photographic precision."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="mx-auto max-w-3xl space-y-6"
          >
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              <strong className="text-foreground">Realism tattooing</strong> is
              one of the most technically demanding styles in the tattoo world.
              It transforms photographs and real-life subjects into permanent
              works of art on skin, requiring exceptional skill in shading,
              contrast, and micro-detail work.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Unlike traditional tattoo styles that use bold outlines, realism
              relies entirely on subtle gradients, precise shading, and careful
              attention to light and shadow. The result is a tattoo that appears
              three-dimensional and almost photographic in quality.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Whether honoring a loved one with a portrait, immortalizing a
              beloved pet, or capturing the raw beauty of nature, realism
              tattooing allows you to carry truly meaningful, lifelike art with
              you forever.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Realism Portfolio"
            subtitle="Browse examples of photorealistic tattoos created by Rene Ruiz."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {realismImages.slice(0, 8).map((image) => (
              <motion.div
                key={image.id}
                variants={staggerChild}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-0 bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">{image.title}</p>
                  <p className="text-olive text-xs">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="mt-10 text-center"
          >
            <Link
              href="/#gallery"
              className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
            >
              View Complete Gallery
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Rene's Approach Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Rene Ruiz Approach to Realism"
            subtitle="A meticulous process that ensures every tattoo exceeds expectations."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="mx-auto max-w-3xl space-y-6"
          >
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              With over {siteConfig.stats.yearsExperience} years dedicated to
              the art of tattooing, {siteConfig.artistName} has developed a
              refined approach to realism that combines technical mastery with
              artistic vision.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                "Extensive consultation to understand your vision",
                "Careful reference photo analysis and selection",
                "Custom composition tailored to your body",
                "Premium inks for lasting depth and contrast",
                "Multiple technique layers for 3D effect",
                "Attention to how tattoos age over time",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-olive mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Every realism tattoo is a collaboration. From the initial
              consultation through the final session, you&apos;ll be involved in
              every decision, ensuring the finished piece tells your story
              exactly as you envisioned.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Types of Realism Section */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Types of Realism Tattoos"
            subtitle="Explore the different styles of realism tattooing we specialize in."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {realismTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={staggerChild}
                className="bg-card/50 hover:border-olive/20 rounded-xl border border-white/5 p-8 transition-colors"
              >
                <type.icon className="text-olive mb-4 h-10 w-10" />
                <h3 className="font-heading text-foreground mb-3 text-xl font-semibold">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Realism Tattoo FAQ"
            subtitle="Common questions about realistic tattoos answered."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="space-y-4"
          >
            {realismFAQs.map((item, index) => (
              <motion.details
                key={index}
                variants={staggerChild}
                className="group bg-card/50 hover:border-olive/20 rounded-xl border border-white/5 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6">
                  <span className="text-foreground text-sm font-medium sm:text-base">
                    {item.question}
                  </span>
                  <span className="text-olive flex-shrink-0 transition-transform group-open:rotate-180">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionHeading
              title="Ready for Your Realism Tattoo?"
              subtitle="Start your journey with a free consultation. Share your vision and let's create something extraordinary."
            />

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey, I come from the website. I want to book a realism tattoo consultation")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-cta btn-cta-glow inline-flex items-center gap-2 rounded-full px-8 py-4",
                  "text-base font-medium"
                )}
              >
                <WhatsAppIcon size={20} />
                Book Free Consultation
              </a>
              <Link
                href="/rene-ruiz"
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                Meet the Artist
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mt-6 text-sm"
            >
              <Clock size={14} className="mr-1 inline-block" />
              We respond within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
