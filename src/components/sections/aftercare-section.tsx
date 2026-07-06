"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sun,
  Shield,
  Clock,
  Ban,
  Heart,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  staggerContainer,
  staggerChild,
  fadeInUp,
  scrollViewport,
} from "@/lib/animations/variants";

interface CareStep {
  icon: typeof Droplets;
  title: string;
  description: string;
  timeframe: string;
}

const careSteps: CareStep[] = [
  {
    icon: Shield,
    title: "Primeras Horas",
    description:
      "Mantén el vendaje protector durante 2-4 horas. Tu artista te indicará el tiempo exacto según el tatuaje.",
    timeframe: "0-4 horas",
  },
  {
    icon: Droplets,
    title: "Limpieza Inicial",
    description:
      "Lava suavemente con agua tibia y jabón antibacterial neutro. Seca con palmaditas usando una toalla limpia.",
    timeframe: "Día 1-3",
  },
  {
    icon: Heart,
    title: "Hidratación",
    description:
      "Aplica una capa fina de crema hidratante especializada 2-3 veces al día. Evita productos con fragancia.",
    timeframe: "Día 1-14",
  },
  {
    icon: Sun,
    title: "Protección Solar",
    description:
      "Evita la exposición directa al sol. Después de sanar, usa siempre protector solar SPF 50+ sobre el tatuaje.",
    timeframe: "Permanente",
  },
];

const dosList = [
  "Lava tus manos antes de tocar el tatuaje",
  "Mantén el área limpia y seca",
  "Usa ropa suelta y cómoda",
  "Bebe mucha agua para hidratar desde dentro",
  "Sigue las instrucciones de tu artista",
];

const dontsList = [
  "No rasques ni arranques las costras",
  "Evita piscinas, jacuzzis y mar por 2 semanas",
  "No uses alcohol o productos agresivos",
  "No expongas al sol directo sin protección",
  "No hagas ejercicio intenso los primeros días",
];

export function AftercareSection() {
  return (
    <section className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Cuidados Post-Tatuaje"
          subtitle="Tu nuevo tatuaje es una inversión. Sigue estos pasos para asegurar una sanación perfecta."
        />

        {/* Timeline Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {careSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={staggerChild}
              className={cn(
                "relative rounded-2xl p-6",
                "bg-card/50 border border-white/5",
                "hover:border-olive/20 transition-all duration-500"
              )}
            >
              {/* Step number */}
              <span className="text-olive/20 font-heading absolute top-4 right-4 text-4xl font-bold">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="bg-olive/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <step.icon className="text-olive h-6 w-6" />
              </div>

              {/* Timeframe */}
              <span className="bg-olive/10 text-olive mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium">
                {step.timeframe}
              </span>

              {/* Content */}
              <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Do's and Don'ts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Do's */}
          <div
            className={cn(
              "rounded-2xl p-8",
              "bg-gradient-to-br from-emerald-500/5 to-emerald-500/10",
              "border border-emerald-500/20"
            )}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <Heart className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="font-heading text-foreground text-xl font-semibold">
                Recomendado
              </h3>
            </div>
            <ul className="space-y-3">
              {dosList.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground flex items-start gap-3 text-sm"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <Clock className="h-3 w-3 text-emerald-500" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div
            className={cn(
              "rounded-2xl p-8",
              "bg-gradient-to-br from-red-500/5 to-red-500/10",
              "border border-red-500/20"
            )}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <Ban className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-heading text-foreground text-xl font-semibold">
                Evitar
              </h3>
            </div>
            <ul className="space-y-3">
              {dontsList.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground flex items-start gap-3 text-sm"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <AlertCircle className="h-3 w-3 text-red-500" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Contact Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className={cn(
            "mt-12 rounded-2xl p-6 text-center",
            "bg-olive/5 border-olive/10 border"
          )}
        >
          <p className="text-muted-foreground">
            ¿Tienes dudas sobre el cuidado de tu tatuaje?{" "}
            <span className="text-olive font-medium">
              Contáctanos en cualquier momento
            </span>
            . Estamos aquí para asegurar que tu tatuaje sane perfectamente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
