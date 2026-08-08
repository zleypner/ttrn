"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Sparkles,
  Heart,
  Clock,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

interface Benefit {
  icon: typeof Shield;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Award,
    title: "15+ Years of Experience",
    description:
      "Decades perfecting my art, guaranteeing exceptional results in every piece.",
  },
  {
    icon: Sparkles,
    title: "100% Custom Designs",
    description:
      "Each tattoo is unique, created exclusively for you and your personal vision.",
  },
  {
    icon: Shield,
    title: "Premium Hygiene Standards",
    description:
      "Strict sterilization protocols and the highest quality materials.",
  },
  {
    icon: Heart,
    title: "Personalized Attention",
    description:
      "I accompany you throughout the entire process, from the initial idea to aftercare.",
  },
  {
    icon: Clock,
    title: "Time and Dedication",
    description:
      "No rush. Each session is planned to achieve perfection in every detail.",
  },
  {
    icon: MessageSquare,
    title: "Constant Communication",
    description:
      "I maintain open communication to ensure your vision materializes perfectly.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Me?"
          subtitle="Commitment to excellence in every aspect of my work."
          variant="premium"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerChild}
              className={cn(
                "group relative rounded-2xl p-6 sm:p-8",
                "bg-background border border-white/5",
                "hover:border-olive/20 transition-all duration-500"
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl",
                  "from-olive/20 to-copper/10 bg-gradient-to-br",
                  "group-hover:from-olive/30 group-hover:to-copper/20",
                  "transition-all duration-500"
                )}
              >
                <benefit.icon className="text-olive h-7 w-7" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-foreground mb-3 text-lg font-semibold sm:text-xl">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {benefit.description}
              </p>

              {/* Decorative gradient on hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
                  "from-olive/5 to-copper/5 bg-gradient-to-br via-transparent",
                  "pointer-events-none transition-opacity duration-500"
                )}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerChild}
          className="mt-12 text-center"
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi! I would like to know more about your tattoo services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-3"
          >
            <MessageCircle size={18} />
            Let&apos;s Talk About Your Idea
          </a>
        </motion.div>
      </div>
    </section>
  );
}
