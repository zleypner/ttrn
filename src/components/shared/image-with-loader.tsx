"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function ImageWithLoader({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  priority = false,
  sizes,
  quality = 80,
  objectFit = "cover",
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton Loader */}
      <AnimatePresence>
        {isLoading && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
          >
            <div
              className={cn(
                "from-secondary via-card to-secondary absolute inset-0 bg-gradient-to-br",
                "animate-pulse"
              )}
            />
            {/* Shimmer effect */}
            <div
              className={cn(
                "absolute inset-0",
                "bg-gradient-to-r from-transparent via-white/5 to-transparent",
                "animate-shimmer"
              )}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      {hasError && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "from-secondary via-card to-secondary bg-gradient-to-br"
          )}
        >
          <div className="text-muted-foreground text-center">
            <p className="text-sm">Error loading image</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          sizes={sizes}
          quality={quality}
          className={cn(
            "transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            className
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
}
