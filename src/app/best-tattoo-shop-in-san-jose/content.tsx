"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star, Check, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared";
import { siteConfig } from "@/config/site";
import { faqItemsEN } from "@/lib/constants/faq-en";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

const styles = [
  {
    name: "Fine Line Tattoos",
    description:
      "Delicate, precise linework perfect for minimalist designs, botanical illustrations, and elegant script.",
  },
  {
    name: "Realism & Portraits",
    description:
      "Photorealistic tattoos that capture every detail, from portraits of loved ones to nature scenes.",
  },
  {
    name: "Black & Grey",
    description:
      "Classic shading techniques creating depth and dimension, ideal for dramatic, timeless pieces.",
  },
  {
    name: "Custom Designs",
    description:
      "Unique artwork created specifically for you, reflecting your personal story and vision.",
  },
];

const reasons = [
  "15+ years of professional tattoo experience",
  "International clients from 25+ countries",
  "Strict hygiene and sterilization protocols",
  "Premium inks and equipment",
  "Comfortable, private studio environment",
  "Free consultations and design collaboration",
];

export function BestTattooShopContent() {
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
                <li className="text-foreground">Best Tattoo Shop San José</li>
              </ol>
            </motion.nav>

            <SectionHeading
              title="Best Tattoo Shop in San José"
              subtitle="Premium custom tattoos in Costa Rica's capital. Award-winning artists specializing in fine line, realism, and black & grey work."
              as="h1"
              variant="premium"
              showLine={true}
            />

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg"
            >
              Looking for a professional{" "}
              <strong>tattoo artist in San José</strong>? Our studio in{" "}
              {siteConfig.location.city} has been creating exceptional body art
              for over {siteConfig.stats.yearsExperience} years, serving
              international visitors and local clients with world-class custom
              tattoos.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I'm looking for a tattoo shop in San José and interested in getting a tattoo.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-glow inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                <WhatsAppIcon size={20} />
                Book Free Consultation
              </a>
              <Link
                href="/services"
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                View Services
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
                  value: `${siteConfig.stats.happyClients}+`,
                  label: "Happy Clients",
                },
                {
                  value: `${siteConfig.stats.countriesServed}+`,
                  label: "Countries Served",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-accent-red text-2xl font-bold sm:text-3xl">
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

      {/* Looking for a Tattoo Artist Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Looking for a Tattoo Artist in San José?"
            subtitle="Whether you're a tourist on vacation or a local looking for exceptional body art, you've found the right place."
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
              San José, the vibrant capital of Costa Rica, is home to some of
              the best tattoo artists in Central America. At our studio in{" "}
              {siteConfig.location.city}, we combine artistic excellence with
              world-class hygiene standards to create tattoos that you&apos;ll
              cherish forever.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our artist,{" "}
              <Link href="/about" className="text-olive hover:underline">
                {siteConfig.artistName}
              </Link>
              , has spent over {siteConfig.stats.yearsExperience} years
              perfecting his craft. From intricate fine line work to stunning
              photorealistic portraits, every piece is created with meticulous
              attention to detail and a deep respect for the art form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Custom Tattoos Section */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Custom Tattoos Designed Around Your Ideas"
            subtitle="Every tattoo we create is a one-of-a-kind piece of art, designed specifically for you."
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
              We don&apos;t do generic flash tattoos. Instead, we work closely
              with each client through a collaborative design process to create
              something truly unique. Whether you have a clear vision or just a
              vague idea, we&apos;ll help bring it to life.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our consultation process includes discussing your concept,
              exploring reference images, considering placement on your body,
              and refining the design until it&apos;s exactly what you envision.
              This attention to detail is what sets us apart as one of the{" "}
              <strong>best tattoo shops in San José</strong>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Fine Line, Realism, Blackwork & More"
            subtitle="Explore our range of tattoo styles, each executed with precision and artistry."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {styles.map((style) => (
              <motion.div
                key={style.name}
                variants={staggerChild}
                className="bg-card/50 hover:border-olive/20 rounded-xl border border-white/5 p-6 transition-colors"
              >
                <h3 className="font-heading text-foreground mb-3 text-lg font-semibold">
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {style.description}
                </p>
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
              href="/services"
              className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-6 py-3"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Visiting San José Section */}
      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Getting a Tattoo While Visiting San José"
            subtitle="Planning to get inked during your vacation? Here's what you need to know."
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
              Many tourists choose to commemorate their Costa Rica trip with a
              meaningful tattoo. Whether you want a tropical design, a tribute
              to your adventure, or simply to take advantage of our exceptional
              artists, we make the process easy and stress-free.
            </motion.p>
            <motion.div
              variants={staggerChild}
              className="border-olive/20 bg-card/50 rounded-xl border p-6"
            >
              <h3 className="font-heading text-olive mb-4 text-lg font-semibold">
                For Tourists:
              </h3>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-3">
                  <Calendar
                    size={20}
                    className="text-olive mt-1 flex-shrink-0"
                  />
                  <span>
                    Contact us before your trip to schedule your session
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-olive mt-1 flex-shrink-0" />
                  <span>
                    Conveniently located in {siteConfig.location.city}, easy to
                    access from major hotels and the airport
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={20} className="text-olive mt-1 flex-shrink-0" />
                  <span>We communicate in English and Spanish</span>
                </li>
              </ul>
            </motion.div>
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              We recommend scheduling your tattoo session early in your trip to
              allow proper healing time before activities like swimming or
              surfing. Our team will provide complete aftercare instructions to
              ensure your new tattoo heals perfectly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Our San José Studio"
            subtitle="What makes our studio one of the top tattoo destinations in Costa Rica."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <motion.div
                  key={reason}
                  variants={staggerChild}
                  className="flex items-start gap-3 rounded-lg p-3"
                >
                  <Check
                    size={20}
                    className="text-olive mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Artist Section */}
      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Tattoo Artists"
            subtitle={`${siteConfig.artistName} brings over ${siteConfig.stats.yearsExperience} years of dedication to the art of tattooing.`}
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
              Our lead artist has built a reputation for excellence, working
              with clients from all over the world. His portfolio showcases a
              diverse range of styles, from delicate fine line work to bold,
              dramatic realism pieces.
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              What sets {siteConfig.artistName} apart is his commitment to
              understanding each client&apos;s story and translating it into
              meaningful body art. Every consultation is a collaboration,
              ensuring the final result exceeds expectations.
            </motion.p>
            <motion.div variants={staggerChild} className="text-center">
              <Link
                href="/about"
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-6 py-3"
              >
                Learn More About Our Artist
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Tattoo Work"
            subtitle="Browse our portfolio of custom tattoos created for clients from around the world."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Every piece in our gallery represents a unique collaboration
              between artist and client. From small minimalist designs to full
              sleeve projects, each tattoo is crafted with precision and care.
            </p>
            <Link
              href="/#galeria"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Book Your Tattoo in San José"
            subtitle="Ready to get started? Booking your appointment is easy."
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
              className="text-muted-foreground text-center text-lg leading-relaxed"
            >
              Contact us via WhatsApp to start planning your custom tattoo. We
              offer free consultations to discuss your ideas, provide quotes,
              and answer any questions. Whether you&apos;re local or visiting
              San José, we&apos;re here to make your tattoo experience
              exceptional.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I found your website and I'm interested in booking a tattoo consultation in San José.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-cta btn-cta-glow inline-flex items-center gap-2 rounded-full px-8 py-4",
                  "text-base font-medium"
                )}
              >
                <WhatsAppIcon size={20} />
                WhatsApp Us Now
              </a>
              <Link
                href="/#contacto"
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-4"
              >
                Contact Form
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about getting a tattoo in San José, Costa Rica."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqItemsEN.map((item, index) => (
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
    </>
  );
}
