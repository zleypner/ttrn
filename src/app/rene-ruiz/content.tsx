"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Users,
  Palette,
  Heart,
  Star,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared";
import { siteConfig } from "@/config/site";
import { aboutImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

const specializations = [
  {
    title: "Realism & Hyperrealism",
    description:
      "Creating photorealistic tattoos that capture every detail with stunning accuracy.",
    icon: Star,
  },
  {
    title: "Portrait Tattoos",
    description:
      "Honoring loved ones with lifelike portraits that preserve memories forever.",
    icon: Users,
  },
  {
    title: "Black & Grey",
    description:
      "Masterful shading techniques for timeless, dramatic monochromatic pieces.",
    icon: Palette,
  },
  {
    title: "Fine Line",
    description:
      "Delicate, precise linework for elegant minimalist and botanical designs.",
    icon: Heart,
  },
];

const milestones = [
  {
    year: "2009",
    title: "Beginning the Journey",
    description:
      "Started professional tattooing in Costa Rica, focusing on foundational techniques.",
  },
  {
    year: "2012",
    title: "Specializing in Realism",
    description:
      "Dedicated focus on realism and portrait work, developing signature techniques.",
  },
  {
    year: "2016",
    title: "5,000+ Tattoos",
    description:
      "Reached a major milestone serving clients from around the world.",
  },
  {
    year: "2020",
    title: "Studio Expansion",
    description:
      "Expanded studio facilities to provide premium tattoo experience.",
  },
  {
    year: "2024",
    title: "15+ Years of Excellence",
    description:
      "Continuing to push artistic boundaries with 7,000+ satisfied clients.",
  },
];

export function ReneRuizContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding from-card/50 to-background relative overflow-hidden bg-gradient-to-b">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-6xl"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeInUp}
              className="mb-8 text-center text-sm"
              aria-label="Breadcrumb"
            >
              <ol className="text-muted-foreground flex items-center justify-center gap-2">
                <li>
                  <Link href="/" className="hover:text-olive transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Rene Ruiz</li>
              </ol>
            </motion.nav>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Artist Photo */}
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:order-2"
              >
                <Image
                  src={aboutImages.artist}
                  alt="Rene Ruiz - Realism Tattoo Artist Costa Rica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="from-background/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
              </motion.div>

              {/* Bio */}
              <motion.div variants={staggerContainer} className="lg:order-1">
                <SectionHeading
                  title="Rene Ruiz"
                  subtitle="Realism Tattoo Artist | Costa Rica"
                  as="h1"
                  variant="premium"
                  showLine={true}
                  align="left"
                />

                <motion.p
                  variants={staggerChild}
                  className="text-muted-foreground mb-6 text-lg leading-relaxed"
                >
                  With over {siteConfig.stats.yearsExperience} years dedicated
                  to the art of tattooing, I&apos;ve had the privilege of
                  transforming thousands of clients&apos; visions into permanent
                  works of art. My passion lies in{" "}
                  <strong className="text-foreground">realism</strong> -
                  creating tattoos so lifelike they seem to breathe.
                </motion.p>

                <motion.p
                  variants={staggerChild}
                  className="text-muted-foreground mb-8 text-lg leading-relaxed"
                >
                  Based in {siteConfig.location.city}, Costa Rica, I specialize
                  in photorealistic portraits, black & grey realism, and fine
                  line work. Every piece I create is a collaboration - your
                  story, your vision, brought to life with meticulous attention
                  to detail.
                </motion.p>

                {/* Stats */}
                <motion.div
                  variants={staggerChild}
                  className="mb-8 flex flex-wrap gap-8"
                >
                  {[
                    {
                      value: `${siteConfig.stats.yearsExperience}+`,
                      label: "Years",
                    },
                    {
                      value: `${siteConfig.stats.happyClients.toLocaleString()}+`,
                      label: "Clients",
                    },
                    {
                      value: `${siteConfig.stats.countriesServed}+`,
                      label: "Countries",
                    },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-olive text-3xl font-bold">
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground text-sm tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={staggerChild}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey Rene, I come from your website. I'd like to discuss a tattoo idea")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta btn-cta-glow inline-flex items-center justify-center gap-2 rounded-full px-8 py-4"
                  >
                    <WhatsAppIcon size={20} />
                    Let&apos;s Talk
                  </a>
                  <Link
                    href="/gallery"
                    className="btn-outline-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4"
                  >
                    View Portfolio
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Specializations"
            subtitle="Mastering multiple styles to bring any vision to life."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {specializations.map((spec) => (
              <motion.div
                key={spec.title}
                variants={staggerChild}
                className="bg-card/50 hover:border-olive/20 rounded-xl border border-white/5 p-6 transition-colors"
              >
                <spec.icon className="text-olive mb-4 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Journey"
            subtitle="Key milestones in my tattoo career."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline line */}
            <div className="from-olive/50 via-olive to-olive/50 absolute top-0 left-4 h-full w-px bg-gradient-to-b md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={staggerChild}
                  className={cn(
                    "relative grid gap-4 md:grid-cols-2",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      "pl-12 md:pl-0",
                      index % 2 === 0
                        ? "md:pr-12"
                        : "md:order-2 md:col-start-2 md:pl-12"
                    )}
                  >
                    <span className="text-olive font-heading text-2xl font-bold">
                      {milestone.year}
                    </span>
                    <h3 className="text-foreground mt-1 text-lg font-semibold">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    className={cn(
                      "border-olive bg-background absolute top-1 left-4 h-3 w-3 rounded-full border-2 md:left-1/2 md:-translate-x-1/2"
                    )}
                  />

                  {/* Empty column for layout */}
                  {index % 2 === 0 ? (
                    <div className="hidden md:block" />
                  ) : (
                    <div className="hidden md:order-1 md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="My Philosophy"
            subtitle="The principles that guide every tattoo I create."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="mx-auto max-w-3xl space-y-6"
          >
            <motion.blockquote
              variants={staggerChild}
              className="border-olive/30 text-foreground border-l-4 pl-6 text-xl leading-relaxed italic"
            >
              &ldquo;A tattoo is more than ink on skin - it&apos;s a permanent
              expression of who you are. My job is to honor that trust by
              creating art that you&apos;ll be proud to wear forever.&rdquo;
            </motion.blockquote>

            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I believe every client deserves a tattoo experience that&apos;s as
              meaningful as the art itself. That means taking time to truly
              understand your vision, using only premium materials, and
              maintaining the highest standards of hygiene and professionalism.
            </motion.p>

            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Whether it&apos;s your first tattoo or your fiftieth, I approach
              every piece with the same dedication to excellence. Your story
              deserves to be told beautifully.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related Articles"
            subtitle="Continue exploring our guides for American travelers."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={staggerChild}>
              <Link
                href="/realism-tattoo-costa-rica"
                className="group bg-card/50 hover:border-olive/30 block rounded-xl border border-white/5 p-6 transition-all"
              >
                <span className="text-olive text-xs font-medium tracking-wider uppercase">
                  Realism Guide
                </span>
                <h3 className="text-foreground group-hover:text-olive mt-2 text-lg font-semibold transition-colors">
                  Realism Tattoo Costa Rica
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Everything you need to know about photorealistic tattoos and
                  why Costa Rica is a top destination.
                </p>
              </Link>
            </motion.div>
            <motion.div variants={staggerChild}>
              <Link
                href="/best-tattoo-shop-in-san-jose"
                className="group bg-card/50 hover:border-olive/30 block rounded-xl border border-white/5 p-6 transition-all"
              >
                <span className="text-olive text-xs font-medium tracking-wider uppercase">
                  Travel Guide
                </span>
                <h3 className="text-foreground group-hover:text-olive mt-2 text-lg font-semibold transition-colors">
                  Best Tattoo Shop in San José
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Planning a trip? Everything you need to know about getting
                  tattooed in Costa Rica&apos;s capital.
                </p>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <Link
              href="/blog"
              className="text-olive inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              View All Articles
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionHeading
              title="Let's Create Something Amazing"
              subtitle="Ready to turn your vision into reality? I'd love to hear about your tattoo ideas."
            />

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hey Rene, I come from your website. I want to schedule a consultation")}`}
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
                href="/realism-tattoo-costa-rica"
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                Learn About Realism
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
