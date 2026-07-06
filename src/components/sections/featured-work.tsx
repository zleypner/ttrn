"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredWorkImages } from "@/lib/constants/images";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

export function FeaturedWork() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className="section-padding bg-card/50">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trabajos Destacados"
          subtitle="Una selección de mis piezas más recientes y representativas."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {featuredWorkImages.map((work) => (
            <motion.div
              key={work.id}
              variants={staggerChild}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl",
                work.size === "large" && "col-span-2 row-span-2",
                work.size === "medium" && "col-span-2 row-span-1 md:col-span-1",
                work.size === "small" && "col-span-1 row-span-1",
                work.size === "large" ? "aspect-square" : "aspect-[4/5]"
              )}
            >
              {/* Image */}
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes={
                  work.size === "large"
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                className={cn(
                  "object-cover transition-all duration-700",
                  "group-hover:scale-110",
                  loadedImages.has(work.id) ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => handleImageLoad(work.id)}
              />

              {/* Skeleton */}
              {!loadedImages.has(work.id) && (
                <div className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br" />
              )}

              {/* Overlay */}
              <div
                className={cn(
                  "from-background/90 via-background/30 absolute inset-0 bg-gradient-to-t to-transparent",
                  "opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                )}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <div className="translate-y-2 transform transition-transform duration-500 group-hover:translate-y-0">
                  <span className="text-olive mb-1 block text-xs tracking-wider uppercase">
                    {work.category}
                  </span>
                  <h3
                    className={cn(
                      "font-heading text-foreground font-semibold",
                      work.size === "large"
                        ? "text-xl sm:text-2xl"
                        : "text-sm sm:text-base"
                    )}
                  >
                    {work.title}
                  </h3>
                </div>

                {/* Hover Icon */}
                <div
                  className={cn(
                    "absolute top-4 right-4 rounded-full p-2",
                    "bg-olive/0 group-hover:bg-olive",
                    "opacity-0 group-hover:opacity-100",
                    "scale-50 transform group-hover:scale-100",
                    "transition-all duration-500"
                  )}
                >
                  <ArrowUpRight size={16} className="text-background" />
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl border-2 border-transparent",
                  "group-hover:border-olive/40",
                  "transition-all duration-500"
                )}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerChild}
          className="mt-12 text-center"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#galeria");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className={cn(
              "btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-3",
              "hover:shadow-[0_0_30px_rgba(194,154,88,0.2)]",
              "transition-all duration-300"
            )}
          >
            Ver Galería Completa
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
