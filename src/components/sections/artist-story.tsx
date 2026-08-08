"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
  fadeInUp,
} from "@/lib/animations/variants";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "Beginning of the Journey",
    description:
      "I began my career as an apprentice at a renowned tattoo studio, where I discovered my passion for permanent body art.",
  },
  {
    year: "2012",
    title: "Specialization in Realism",
    description:
      "I traveled to Europe to perfect my technique in realism and black & grey with masters of tattoo art.",
  },
  {
    year: "2015",
    title: "Studio Opening",
    description:
      "I opened my own studio in Costa Rica, creating a space dedicated to high-quality tattoo art.",
  },
  {
    year: "2018",
    title: "International Recognition",
    description:
      "I participated in international conventions, winning awards for realism and portrait work.",
  },
  {
    year: "2022",
    title: "Artistic Expansion",
    description:
      "I incorporated new techniques such as fine line and geometric, expanding my artistic repertoire.",
  },
  {
    year: "Present",
    title: "Continuing the Legacy",
    description:
      "I continue to dedicate myself to creating unique works of art for clients from around the world, maintaining the highest quality standards.",
  },
];

const philosophy = [
  {
    title: "Art with Purpose",
    description:
      "Every tattoo should have a deep meaning for the wearer. My job is to help you express your story visually.",
  },
  {
    title: "Technical Excellence",
    description:
      "Perfection is in the details. Every line, every shadow, every texture is worked with millimetric precision.",
  },
  {
    title: "Premium Experience",
    description:
      "From the initial consultation to aftercare, every step of the process is designed for your comfort and satisfaction.",
  },
];

export function ArtistStory() {
  return (
    <section className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Philosophy Section */}
        <div className="mb-24">
          <SectionHeading
            title="My Philosophy"
            subtitle="The principles that guide every piece I create."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerChild}
                className={cn(
                  "group relative rounded-2xl p-8",
                  "bg-card/50 border border-white/5",
                  "hover:border-olive/20 transition-all duration-500"
                )}
              >
                <div className="from-olive to-copper absolute top-0 left-8 h-1 w-12 rounded-full bg-gradient-to-r" />
                <span className="text-olive/30 font-heading mb-4 inline-block text-6xl font-bold">
                  0{index + 1}
                </span>
                <h3 className="font-heading text-foreground mb-3 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <SectionHeading
            title="My Story"
            subtitle="The path that has led me to where I am today."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="from-olive via-olive/50 absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b to-transparent md:left-1/2" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={staggerContainer}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={staggerChild}
                  className={cn(
                    "relative pl-12 md:pl-0",
                    "md:grid md:grid-cols-2 md:gap-8",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 md:left-1/2",
                      "h-8 w-8 -translate-x-1/2 md:-translate-x-1/2",
                      "bg-card border-olive rounded-full border-2",
                      "z-10 flex items-center justify-center"
                    )}
                  >
                    <div className="bg-olive h-3 w-3 rounded-full" />
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                    )}
                  >
                    <span className="text-olive font-heading text-lg font-bold">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-foreground mt-1 mb-2 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to learn more about my work?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello! I'd like to get to know you and talk about a tattoo.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-3"
          >
            <MessageCircle size={18} />
            Contact Me Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
