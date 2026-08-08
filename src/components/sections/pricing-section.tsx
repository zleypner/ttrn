"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import {
  staggerContainer,
  staggerChild,
  fadeInUp,
  scrollViewport,
} from "@/lib/animations/variants";

interface PricingTier {
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Small",
    description: "Designs up to 5cm",
    priceRange: "$100 - $200",
    features: [
      "Custom design",
      "One 1-2 hour session",
      "Touch-up included",
      "Basic care kit",
    ],
  },
  {
    name: "Medium",
    description: "Designs 5-15cm",
    priceRange: "$200 - $500",
    features: [
      "Custom design",
      "1-2 sessions of 2-4 hours",
      "Touch-ups included",
      "Premium care kit",
      "Personalized follow-up",
    ],
    popular: true,
  },
  {
    name: "Large",
    description: "Designs 15cm+",
    priceRange: "$500+",
    features: [
      "Exclusive design",
      "Multiple sessions",
      "Lifetime touch-ups",
      "Complete care kit",
      "Priority booking",
      "Professional photography",
    ],
  },
];

const pricingNotes = [
  "Prices are estimates and vary based on complexity and placement",
  "Initial consultation is completely free",
  "A 50% deposit is required to book your appointment",
  "We accept cash, card, and bank transfer payments",
];

export function PricingSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pricing"
          subtitle="Transparent investment for your permanent body art."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="mb-12 grid gap-6 md:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerChild}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative rounded-2xl p-8",
                "bg-card/50 border",
                tier.popular
                  ? "border-olive/30 shadow-[0_0_30px_rgba(194,154,88,0.1)]"
                  : "border-white/5",
                "hover:border-olive/20 transition-all duration-500"
              )}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={cn(
                      "inline-block rounded-full px-4 py-1",
                      "from-olive to-copper bg-gradient-to-r",
                      "text-background text-xs font-medium"
                    )}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 text-center">
                <h3 className="font-heading text-foreground mb-2 text-2xl font-semibold">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {tier.description}
                </p>
                <p className="font-heading text-accent-red text-3xl font-bold">
                  {tier.priceRange}
                </p>
              </div>

              {/* Divider */}
              <div className="via-olive/20 mb-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-muted-foreground flex items-center gap-3 text-sm"
                  >
                    <div className="bg-olive/10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <Check className="text-olive h-3 w-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello, I'm interested in a ${tier.name.toLowerCase()} tattoo.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3",
                  tier.popular ? "btn-gold" : "btn-outline-gold",
                  "text-sm font-medium"
                )}
              >
                <WhatsAppIcon size={16} />
                Inquire
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Notes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className={cn("rounded-2xl p-6", "bg-olive/5 border-olive/10 border")}
        >
          <div className="mb-4 flex items-start gap-3">
            <Info className="text-olive mt-0.5 h-5 w-5 flex-shrink-0" />
            <h4 className="font-heading text-foreground text-lg font-semibold">
              Important Information
            </h4>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {pricingNotes.map((note, index) => (
              <li
                key={index}
                className="text-muted-foreground flex items-start gap-2 text-sm"
              >
                <span className="bg-olive mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                {note}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
