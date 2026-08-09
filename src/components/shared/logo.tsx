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
          {/* Main Name */}
          <span
            className={cn(
              "font-heading text-xl font-semibold tracking-[0.15em] sm:text-2xl",
              "transition-all duration-300"
            )}
          >
            <span className="text-foreground">COSTA RICA</span>
            <span className="text-accent-red"> TATTOO</span>
          </span>
        </div>
      ) : (
        <motion.span
          className={cn("font-heading text-lg font-semibold tracking-[0.1em]")}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-foreground">CR</span>
          <span className="text-accent-red"> TATTOO</span>
        </motion.span>
      )}
    </motion.div>
  );
}
