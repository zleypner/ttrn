"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Sparkles,
  Heart,
  Clock,
  MessageSquare,
} from "lucide-react";
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
    title: "15+ Años de Experiencia",
    description:
      "Décadas perfeccionando mi arte, garantizando resultados excepcionales en cada pieza.",
  },
  {
    icon: Sparkles,
    title: "Diseños 100% Personalizados",
    description:
      "Cada tatuaje es único, creado exclusivamente para ti y tu visión personal.",
  },
  {
    icon: Shield,
    title: "Estándares de Higiene Premium",
    description:
      "Protocolos estrictos de esterilización y materiales de la más alta calidad.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description:
      "Te acompaño en todo el proceso, desde la idea inicial hasta el cuidado posterior.",
  },
  {
    icon: Clock,
    title: "Tiempo y Dedicación",
    description:
      "Sin prisas. Cada sesión se planifica para lograr la perfección en cada detalle.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Constante",
    description:
      "Mantengo comunicación abierta para asegurar que tu visión se materialice perfectamente.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="¿Por Qué Elegirme?"
          subtitle="Compromiso con la excelencia en cada aspecto de mi trabajo."
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
      </div>
    </section>
  );
}
