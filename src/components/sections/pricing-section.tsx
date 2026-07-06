"use client";

import { motion } from "framer-motion";
import { Check, Info, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
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
    name: "Pequeño",
    description: "Diseños de hasta 5cm",
    priceRange: "$100 - $200",
    features: [
      "Diseño personalizado",
      "Una sesión de 1-2 horas",
      "Retoque incluido",
      "Kit de cuidado básico",
    ],
  },
  {
    name: "Mediano",
    description: "Diseños de 5-15cm",
    priceRange: "$200 - $500",
    features: [
      "Diseño personalizado",
      "1-2 sesiones de 2-4 horas",
      "Retoques incluidos",
      "Kit de cuidado premium",
      "Seguimiento personalizado",
    ],
    popular: true,
  },
  {
    name: "Grande",
    description: "Diseños de 15cm+",
    priceRange: "$500+",
    features: [
      "Diseño exclusivo",
      "Múltiples sesiones",
      "Retoques de por vida",
      "Kit de cuidado completo",
      "Prioridad en citas",
      "Fotografía profesional",
    ],
  },
];

const pricingNotes = [
  "Los precios son estimados y varían según complejidad y ubicación",
  "La consulta inicial es completamente gratuita",
  "Se requiere un depósito del 50% para reservar tu cita",
  "Aceptamos pagos en efectivo, tarjeta y transferencia",
];

export function PricingSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Precios"
          subtitle="Inversión transparente para tu arte corporal permanente."
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
                    Más Popular
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
                <p className="font-heading text-gradient-gold text-3xl font-bold">
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
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hola, me interesa un tatuaje ${tier.name.toLowerCase()}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3",
                  tier.popular ? "btn-gold" : "btn-outline-gold",
                  "text-sm font-medium"
                )}
              >
                <MessageCircle size={16} />
                Consultar
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
              Información Importante
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
