"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <motion.div
      className={cn("flex items-center", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {variant === "default" ? (
        <div className="flex flex-col items-start">
          {/* Main Name - Increased size, better kerning */}
          <span
            className={cn(
              "font-heading text-2xl font-semibold tracking-[0.25em] sm:text-[1.75rem]",
              "bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent",
              "transition-all duration-300"
            )}
          >
            TATA-U
          </span>
          {/* Subtitle - More spacing from name */}
          <span
            className={cn(
              "mt-1 text-[10px] font-medium tracking-[0.35em] uppercase sm:text-[11px]",
              "text-neutral-500"
            )}
          >
            Tattoo Artist
          </span>
        </div>
      ) : (
        <motion.span
          className={cn(
            "font-heading text-xl font-semibold tracking-[0.2em]",
            "bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent"
          )}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          TATA-U
        </motion.span>
      )}
    </motion.div>
  );
}
