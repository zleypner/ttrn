"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { StyleCard } from "./style-card";
import { tattooStyles } from "@/lib/constants/tattoo-styles";
import { fadeInUp, scrollViewport } from "@/lib/animations/variants";

export function StylesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Initialize state from embla API - standard embla carousel pattern
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    // Subscribe to events
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="estilos" className="section-padding overflow-hidden">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Estilos de Tatuaje"
          subtitle="Cada estilo tiene su propia esencia. Descubre cuál refleja mejor tu visión personal."
        />

        {/* Carousel Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="relative"
        >
          {/* Embla Viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6 md:gap-8">
              {tattooStyles.map((style, index) => (
                <div
                  key={style.id}
                  className="w-[85%] flex-shrink-0 sm:w-[45%] lg:w-[30%]"
                >
                  <StyleCard style={style} isActive={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                "border-olive/30 rounded-full border p-3 transition-all duration-300",
                "hover:bg-olive/10 hover:border-olive",
                "disabled:cursor-not-allowed disabled:opacity-30"
              )}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-olive" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {tattooStyles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "bg-olive w-8"
                      : "bg-olive/30 hover:bg-olive/50"
                  )}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                "border-olive/30 rounded-full border p-3 transition-all duration-300",
                "hover:bg-olive/10 hover:border-olive",
                "disabled:cursor-not-allowed disabled:opacity-30"
              )}
              aria-label="Siguiente"
            >
              <ChevronRight size={24} className="text-olive" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
