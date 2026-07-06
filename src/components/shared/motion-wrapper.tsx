"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scrollViewport,
  scrollViewportEager,
} from "@/lib/animations/variants";
import type { ReactNode } from "react";

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn";

interface MotionWrapperProps {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number;
  duration?: number;
  eager?: boolean;
  once?: boolean;
  as?: keyof typeof motion;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

export function MotionWrapper({
  children,
  animation = "fadeInUp",
  className,
  delay = 0,
  duration,
  eager = false,
  once = true,
  as = "div",
}: MotionWrapperProps) {
  const Component = motion[as] as typeof motion.div;
  const variants = animationVariants[animation];

  const customVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as { transition?: object }).transition,
        delay,
        ...(duration && { duration }),
      },
    },
  };

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={eager ? scrollViewportEager : { ...scrollViewport, once }}
      variants={customVariants}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

interface StaggerWrapperProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerWrapper({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0.1,
}: StaggerWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
