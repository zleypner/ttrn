"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { tattooStyles } from "@/lib/constants/tattoo-styles";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

export function ServicesGrid() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Estilos de Tatuaje"
          subtitle="Dominamos diversas técnicas para crear la pieza perfecta para ti."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {tattooStyles.map((style) => (
            <motion.div
              key={style.id}
              variants={staggerChild}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                "bg-card/50 border border-white/5",
                "hover:border-olive/20 transition-all duration-500"
              )}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition-all duration-700",
                    "group-hover:scale-110",
                    loadedImages.has(style.id) ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => handleImageLoad(style.id)}
                />
                {!loadedImages.has(style.id) && (
                  <div className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br" />
                )}
                <div className="from-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-gradient-gold mb-2 text-xl font-semibold">
                  {style.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                  {style.description}
                </p>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {style.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-2 text-sm"
                    >
                      <Check className="text-olive h-4 w-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className={cn(
                    "text-olive flex items-center gap-2 text-sm font-medium",
                    "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-300"
                  )}
                >
                  <span>Consultar</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                <div className="from-olive/10 to-copper/10 absolute -top-8 -right-8 h-16 w-16 rotate-45 bg-gradient-to-br" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
