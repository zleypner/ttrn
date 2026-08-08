"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  lineReveal,
  scrollViewport,
} from "@/lib/animations/variants";

import { ColorText } from "./color-text";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  showLine?: boolean;
  as?: "h1" | "h2" | "h3";
  variant?: "default" | "premium";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  showLine = true,
  as: Tag = "h2",
  variant = "default",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {showLine && (
        <motion.div
          variants={lineReveal}
          className={cn(
            "from-olive to-copper mb-2 h-px w-16 bg-gradient-to-r",
            align === "center" && "mx-auto"
          )}
        />
      )}
      <motion.div
        variants={fadeInUp}
        className={variant === "premium" ? "relative" : undefined}
      >
        {variant === "premium" && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#F3EDE2] via-[#C9A45C] to-[#7A1E2C] opacity-20 blur-2xl"
            aria-hidden="true"
          />
        )}
        <Tag
          className={cn(
            "font-heading text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl",
            "text-shadow-gold",
            variant === "premium" &&
              "relative bg-gradient-to-r from-[#F3EDE2] via-[#C9A45C] to-[#7A1E2C] bg-clip-text text-transparent",
            titleClassName
          )}
        >
          {variant === "premium" ? title : <ColorText text={title} />}
        </Tag>
      </motion.div>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "max-w-2xl text-base md:text-lg",
            variant === "premium" ? "text-[#A8A29A]" : "text-muted-foreground",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
