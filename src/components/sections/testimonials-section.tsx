"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials, type Testimonial } from "@/lib/constants/testimonials";
import { fadeInUp, scrollViewport } from "@/lib/animations/variants";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={cn(
        "h-full rounded-2xl p-6 sm:p-8",
        "glass-card",
        "flex flex-col"
      )}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="text-olive/40 h-8 w-8" />
      </div>

      {/* Rating */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              i < testimonial.rating
                ? "text-olive fill-gold"
                : "text-muted-foreground"
            )}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground mb-6 flex-grow text-sm leading-relaxed sm:text-base">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-white/10 pt-4">
        {/* Avatar Placeholder */}
        <div className="from-olive/30 to-copper/30 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
          <span className="text-olive font-heading text-lg font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-foreground font-medium">{testimonial.name}</p>
          <p className="text-muted-foreground text-sm">
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* Style Badge */}
      <div className="mt-4">
        <span className="bg-olive/10 text-olive border-olive/20 inline-block rounded-full border px-3 py-1 text-xs">
          {testimonial.style}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Initialize state - standard embla carousel pattern
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonios" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Lo Que Dicen Mis Clientes"
          subtitle="Testimonios reales de personas que confiaron en mi trabajo."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="relative"
        >
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 sm:w-[48%] lg:w-[32%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              className={cn(
                "border-olive/30 rounded-full border p-3 transition-all duration-300",
                "hover:bg-olive/10 hover:border-olive"
              )}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-olive" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "bg-olive w-8"
                      : "bg-olive/30 hover:bg-olive/50"
                  )}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className={cn(
                "border-olive/30 rounded-full border p-3 transition-all duration-300",
                "hover:bg-olive/10 hover:border-olive"
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
