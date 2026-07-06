"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { galleryImages } from "@/lib/constants/images";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

const categories = [
  "Todos",
  "Realismo",
  "Black & Grey",
  "Fine Line",
  "Ornamental",
  "Geométrico",
  "Retratos",
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredItems =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((item) => item.category === selectedCategory);

  // Handle body scroll lock when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section id="galeria" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Galería"
          subtitle="Explora mi colección completa de trabajos. Cada pieza cuenta una historia única."
        />

        {/* Category Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={staggerChild}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6",
                selectedCategory === category
                  ? "btn-gold"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => openLightbox(index)}
                className={cn(
                  "group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl"
                )}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={cn(
                    "object-cover transition-all duration-500",
                    "group-hover:scale-110",
                    loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => handleImageLoad(item.id)}
                />

                {/* Skeleton */}
                {!loadedImages.has(item.id) && (
                  <div className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br" />
                )}

                {/* Overlay */}
                <div
                  className={cn(
                    "from-background/90 via-background/40 absolute inset-0 bg-gradient-to-t to-transparent",
                    "opacity-0 transition-all duration-300 group-hover:opacity-100"
                  )}
                />

                {/* Content */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center",
                    "opacity-0 transition-all duration-300 group-hover:opacity-100",
                    "scale-90 transform group-hover:scale-100"
                  )}
                >
                  <div className="bg-olive/20 mb-3 rounded-full p-3 backdrop-blur-sm">
                    <ZoomIn size={24} className="text-olive" />
                  </div>
                  <p className="text-foreground px-4 text-center text-sm font-medium">
                    {item.title}
                  </p>
                  <p className="text-olive text-xs">{item.category}</p>
                </div>

                {/* Border */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl border border-white/5",
                    "group-hover:border-olive/40 transition-colors duration-300"
                  )}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background/98 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={closeLightbox}
                className="bg-card/80 hover:bg-secondary absolute top-4 right-4 z-10 rounded-full border border-white/10 p-3 transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} className="text-foreground" />
              </motion.button>

              {/* Previous Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="bg-card/80 hover:bg-secondary absolute left-4 z-10 rounded-full border border-white/10 p-3 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} className="text-foreground" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="bg-card/80 hover:bg-secondary absolute right-4 z-10 rounded-full border border-white/10 p-3 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight size={24} className="text-foreground" />
              </motion.button>

              {/* Image Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative h-[80vh] w-[90vw] max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredItems[lightboxIndex].image.replace(
                    "w=800",
                    "w=1600"
                  )}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="from-background/80 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-6"
                >
                  <h3 className="font-heading text-foreground mb-1 text-xl">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-olive text-sm">
                    {filteredItems[lightboxIndex].category}
                  </p>
                </motion.div>
              </motion.div>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/80 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-muted-foreground text-sm">
                  {lightboxIndex + 1} <span className="text-olive">/</span>{" "}
                  {filteredItems.length}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
