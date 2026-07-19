"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TattooStyle } from "@/lib/constants/tattoo-styles";

interface StyleCardProps {
  style: TattooStyle;
  isActive?: boolean;
}

export function StyleCard({ style, isActive = false }: StyleCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative h-[400px] overflow-hidden rounded-2xl sm:h-[450px] md:h-[500px]",
        "glass-card cursor-pointer",
        "transition-all duration-500",
        isActive && "glow-gold ring-gold/30 ring-2"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={style.image}
          alt={style.name}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
          className={cn(
            "object-cover transition-all duration-700",
            "group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="from-secondary via-card to-secondary absolute inset-0 animate-pulse bg-gradient-to-br" />
        )}
      </div>

      {/* Overlay - Enhanced gradient */}
      <div
        className={cn(
          "from-background via-background/70 to-background/20 absolute inset-0 bg-gradient-to-t",
          "group-hover:via-background/60 group-hover:to-background/10",
          "transition-all duration-500"
        )}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        {/* Style Name */}
        <motion.h3
          className="font-heading text-olive mb-3 text-2xl font-semibold sm:text-3xl"
          initial={false}
          animate={{ y: isActive ? 0 : 5 }}
        >
          {style.name}
        </motion.h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm sm:text-base">
          {style.description}
        </p>

        {/* Features */}
        <div className="mb-6 flex flex-wrap gap-2">
          {style.features.map((feature) => (
            <span
              key={feature}
              className={cn(
                "rounded-full px-3 py-1 text-xs",
                "bg-olive/10 text-olive border-olive/20 border",
                "backdrop-blur-sm"
              )}
            >
              {feature}
            </span>
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
          <span>Ver trabajos</span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 h-24 w-24 overflow-hidden">
        <div className="from-olive/20 to-copper/20 absolute -top-12 -right-12 h-24 w-24 rotate-45 bg-gradient-to-br" />
      </div>

      {/* Animated border on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl border-2 border-transparent",
          "group-hover:border-olive/40",
          "transition-colors duration-500"
        )}
      />
    </motion.div>
  );
}
