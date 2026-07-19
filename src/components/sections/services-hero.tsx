"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  fadeIn,
  fadeInUp,
  letterRevealContainer,
  letterReveal,
} from "@/lib/animations/variants";

function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={letterRevealContainer}
      initial="hidden"
      animate="visible"
      className="inline-flex flex-wrap justify-center gap-x-[0.25em]"
    >
      {words.map((word, wordIdx) => {
        let colorClass = "text-foreground"; // 60%
        if (words.length === 1) {
          colorClass = "text-olive";
        } else if (words.length === 2) {
          if (wordIdx === 1) colorClass = "text-olive";
        } else if (words.length === 3) {
          if (wordIdx === 1) colorClass = "text-olive";
          if (wordIdx === 2) colorClass = "text-accent-red";
        } else {
          const percent = wordIdx / words.length;
          if (percent >= 0.9) {
            colorClass = "text-accent-red";
          } else if (percent >= 0.6) {
            colorClass = "text-olive";
          } else {
            colorClass = "text-foreground";
          }
        }

        const letters = word.split("");

        return (
          <span key={wordIdx} className={cn(colorClass, "inline-flex")}>
            {letters.map((letter, letterIdx) => (
              <motion.span
                key={letterIdx}
                variants={letterReveal}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="from-background via-card to-background absolute inset-0 bg-gradient-to-br"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 50%, oklch(0.72 0.12 85 / 8%) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 80%, oklch(0.65 0.15 55 / 5%) 0%, transparent 40%)
            `,
          }}
        />
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(1 0 0 / 10%) 1px, transparent 1px),
              linear-gradient(90deg, oklch(1 0 0 / 10%) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pre-title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <motion.span
              className="to-olive/50 h-px w-12 bg-gradient-to-r from-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <Sparkles className="text-olive h-5 w-5" />
            <span className="text-olive text-sm font-medium tracking-[0.3em] uppercase">
              Servicios Premium
            </span>
            <Sparkles className="text-olive h-5 w-5" />
            <motion.span
              className="to-olive/50 h-px w-12 bg-gradient-to-l from-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-heading mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            <span className="text-shadow-gold">
              <AnimatedTitle text="Nuestros Servicios" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl"
          >
            Desde el diseño personalizado hasta el cuidado posterior, ofrecemos
            una experiencia completa de tatuaje de lujo adaptada a tu visión
            única.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {[
              { label: "Estilos", value: "6+" },
              { label: "Consulta", value: "Gratis" },
              { label: "Garantía", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-accent-red text-2xl font-bold">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t to-transparent" />
    </section>
  );
}
