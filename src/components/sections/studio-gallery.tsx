"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import { aboutImages } from "@/lib/constants/images";
import {
  staggerContainer,
  staggerChild,
  fadeInUp,
  scrollViewport,
} from "@/lib/animations/variants";

const studioImages = [
  { id: 1, src: aboutImages.studio1, alt: "Área de trabajo" },
  { id: 2, src: aboutImages.studio2, alt: "Sala de espera" },
  { id: 3, src: aboutImages.studio3, alt: "Estación de tatuaje" },
  { id: 4, src: aboutImages.artistWorking, alt: "Artista trabajando" },
];

export function StudioGallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="El Estudio"
          subtitle="Un espacio diseñado para la creatividad y tu comodidad."
        />

        {/* Studio Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {studioImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={staggerChild}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl",
                index === 0 && "col-span-2 row-span-2 aspect-square",
                index !== 0 && "aspect-square"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                className={cn(
                  "object-cover transition-all duration-500",
                  "group-hover:scale-110",
                  loadedImages.has(image.id) ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => handleImageLoad(image.id)}
              />

              {!loadedImages.has(image.id) && (
                <div className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br" />
              )}

              {/* Overlay */}
              <div
                className={cn(
                  "from-background/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
                  "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                )}
              />

              {/* Label */}
              <div
                className={cn(
                  "absolute right-0 bottom-0 left-0 p-4",
                  "translate-y-full transform group-hover:translate-y-0",
                  "transition-transform duration-300"
                )}
              >
                <p className="text-foreground text-sm font-medium">
                  {image.alt}
                </p>
              </div>

              {/* Border */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl border border-white/5",
                  "group-hover:border-olive/30 transition-colors duration-300"
                )}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Studio Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="grid gap-6 md:grid-cols-3"
        >
          {/* Location */}
          <div
            className={cn(
              "bg-card/50 rounded-2xl border border-white/5 p-6",
              "hover:border-olive/20 transition-colors duration-300"
            )}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-olive/10 rounded-full p-3">
                <MapPin className="text-olive h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Ubicación</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.location.address}
            </p>
            <p className="text-olive mt-2 text-sm">
              {siteConfig.location.city}, {siteConfig.location.region}
            </p>
          </div>

          {/* Hours */}
          <div
            className={cn(
              "bg-card/50 rounded-2xl border border-white/5 p-6",
              "hover:border-olive/20 transition-colors duration-300"
            )}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-olive/10 rounded-full p-3">
                <Clock className="text-olive h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Horarios</h3>
            </div>
            <div className="text-muted-foreground space-y-1 text-sm">
              <p>
                <span className="text-foreground">Lun - Vie:</span>{" "}
                {siteConfig.hours.weekdays}
              </p>
              <p>
                <span className="text-foreground">Sábado:</span>{" "}
                {siteConfig.hours.saturday}
              </p>
              <p>
                <span className="text-foreground">Domingo:</span>{" "}
                {siteConfig.hours.sunday}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div
            className={cn(
              "bg-card/50 rounded-2xl border border-white/5 p-6",
              "hover:border-olive/20 transition-colors duration-300"
            )}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-olive/10 rounded-full p-3">
                <Phone className="text-olive h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Contacto</h3>
            </div>
            <div className="text-muted-foreground space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-olive transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-olive transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hola, me gustaría visitar el estudio.`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-8 py-4",
              "btn-gold glow-gold-hover",
              "text-base font-medium"
            )}
          >
            <WhatsAppIcon size={20} />
            Agenda una Visita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
