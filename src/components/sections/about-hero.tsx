"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { aboutImages } from "@/lib/constants/images";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations/variants";

export function AboutHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="from-background via-card to-background absolute inset-0 bg-gradient-to-br"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 30%, oklch(0.72 0.12 85 / 5%) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, oklch(0.65 0.15 55 / 5%) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={aboutImages.artist}
                alt={siteConfig.artistName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-opacity duration-500",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br" />
              )}

              {/* Overlay gradient */}
              <div className="from-background/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

              {/* Decorative frame */}
              <div className="border-olive/20 pointer-events-none absolute inset-4 rounded-xl border" />
            </div>

            {/* Floating badge */}
            <motion.div
              className={cn(
                "absolute -right-6 -bottom-6 md:-right-8 md:bottom-8",
                "bg-card/90 rounded-2xl p-6 backdrop-blur-lg",
                "border-olive/20 border shadow-2xl"
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-heading text-gradient-gold text-4xl font-bold">
                {siteConfig.stats.yearsExperience}+
              </p>
              <p className="text-muted-foreground text-sm">
                Años de Experiencia
              </p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="lg:pl-8"
          >
            {/* Pre-title */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex items-center gap-4"
            >
              <span className="from-olive h-px w-12 bg-gradient-to-r to-transparent" />
              <span className="text-olive text-sm font-medium tracking-[0.3em] uppercase">
                Sobre el Artista
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient-gold">
                {siteConfig.artistName}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div variants={fadeInUp} className="mb-8 space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Con más de 15 años de experiencia en el arte del tatuaje, me he
                dedicado a transformar las visiones de mis clientes en obras de
                arte permanentes que cuentan historias únicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi especialidad reside en el realismo, black & grey y fine line,
                técnicas que me permiten crear piezas con un nivel de detalle
                excepcional y una estética atemporal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada tatuaje es una colaboración íntima entre artista y cliente,
                donde la precisión técnica se combina con la expresión artística
                para crear algo verdaderamente único.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="bg-card/50 grid grid-cols-3 gap-6 rounded-2xl border border-white/5 p-6"
            >
              <div className="text-center">
                <p className="font-heading text-gradient-gold text-2xl font-bold">
                  {siteConfig.stats.happyClients.toLocaleString()}+
                </p>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                  Clientes
                </p>
              </div>
              <div className="border-x border-white/10 text-center">
                <p className="font-heading text-gradient-gold text-2xl font-bold">
                  {siteConfig.stats.tattoosCompleted.toLocaleString()}+
                </p>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                  Tatuajes
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-gradient-gold text-2xl font-bold">
                  {siteConfig.stats.countriesServed}+
                </p>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                  Países
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
