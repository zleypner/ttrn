"use client";

import { motion } from "framer-motion";
import { MessageSquare, Pencil, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

interface ProcessStep {
  number: string;
  icon: typeof MessageSquare;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta",
    description:
      "Conversamos sobre tu idea, preferencias de estilo, tamaño y ubicación. Es el momento de compartir referencias y resolver todas tus dudas.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Diseño",
    description:
      "Creo un diseño personalizado basado en nuestra conversación. Lo revisamos juntos y hacemos ajustes hasta que sea perfecto.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Sesión",
    description:
      "El día del tatuaje te preparo con todo el cuidado y atención. Trabajo con precisión para dar vida a tu diseño.",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Mi Proceso"
          subtitle="Un enfoque metódico para garantizar que tu experiencia sea excepcional de principio a fin."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="relative"
        >
          {/* Timeline Line - Hidden on mobile */}
          <div className="from-olive/50 via-olive/20 absolute top-0 bottom-0 left-1/2 hidden w-px bg-gradient-to-b to-transparent lg:block" />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerChild}
                className={cn(
                  "relative",
                  "lg:grid lg:grid-cols-2 lg:items-center lg:gap-8",
                  index % 2 === 0
                    ? "lg:text-right"
                    : "lg:flex-row-reverse lg:text-left"
                )}
              >
                {/* Content */}
                <div
                  className={cn(
                    "glass-card relative rounded-2xl p-6 sm:p-8",
                    index % 2 === 0 ? "lg:mr-8" : "lg:col-start-2 lg:ml-8"
                  )}
                >
                  {/* Step Number */}
                  <span className="font-heading text-olive/20 mb-4 inline-block text-4xl font-bold sm:text-5xl">
                    {step.number}
                  </span>

                  {/* Icon + Title */}
                  <div
                    className={cn(
                      "mb-4 flex items-center gap-4",
                      index % 2 === 0
                        ? "lg:flex-row-reverse lg:justify-start"
                        : ""
                    )}
                  >
                    <div className="bg-olive/10 rounded-xl p-3">
                      <step.icon className="text-olive h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-foreground text-xl font-semibold sm:text-2xl">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Dot - Desktop only */}
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex",
                    "bg-olive border-background h-4 w-4 rounded-full border-4"
                  )}
                />

                {/* Empty space for alternating layout */}
                <div
                  className={cn(
                    "hidden lg:block",
                    index % 2 === 0
                      ? "lg:col-start-2"
                      : "lg:col-start-1 lg:row-start-1"
                  )}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
