"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";
import { useCounter } from "@/hooks/use-counter";
import { siteConfig } from "@/config/site";
import {
  staggerContainer,
  staggerChild,
  scrollViewport,
} from "@/lib/animations/variants";

interface StatItem {
  icon: typeof Award;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: siteConfig.stats.yearsExperience,
    suffix: "+",
    label: "Años de Experiencia",
  },
  {
    icon: Users,
    value: siteConfig.stats.happyClients,
    suffix: "+",
    label: "Clientes Satisfechos",
  },
  {
    icon: Globe,
    value: siteConfig.stats.countriesServed,
    suffix: "+",
    label: "Países",
  },
  {
    icon: Palette,
    value: siteConfig.stats.tattoosCompleted,
    suffix: "+",
    label: "Tatuajes Completados",
  },
];

function StatCounter({
  stat,
  isVisible,
  index,
}: {
  stat: StatItem;
  isVisible: boolean;
  index: number;
}) {
  const count = useCounter({
    end: stat.value,
    duration: 2000,
    enabled: isVisible,
  });

  const isAnimating = isVisible && count < stat.value;

  return (
    <motion.div
      variants={staggerChild}
      className="group relative p-6 text-center sm:p-8"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background */}
      <div
        className={cn(
          "bg-card/50 absolute inset-0 rounded-2xl border border-white/5",
          "group-hover:border-olive/20 group-hover:bg-card/80",
          "transition-all duration-500"
        )}
      />

      {/* Glow effect on background */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
          "from-olive/5 to-copper/5 bg-gradient-to-br via-transparent",
          "transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with pulse glow */}
        <motion.div
          className={cn(
            "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full",
            "from-olive/20 to-olive/5 bg-gradient-to-br",
            "border-olive/20 border"
          )}
          animate={
            isVisible
              ? {
                  boxShadow: [
                    "0 0 0 rgba(194, 154, 88, 0)",
                    "0 0 20px rgba(194, 154, 88, 0.3)",
                    "0 0 0 rgba(194, 154, 88, 0)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        >
          <stat.icon className="text-olive h-6 w-6" />
        </motion.div>

        {/* Value with blur effect during counting */}
        <motion.p
          className="font-heading text-gradient-gold mb-2 text-4xl font-bold sm:text-5xl md:text-6xl"
          animate={{
            filter: isAnimating ? "blur(2px)" : "blur(0px)",
          }}
          transition={{ duration: 0.2 }}
        >
          {count.toLocaleString()}
          <span>{stat.suffix}</span>
        </motion.p>

        {/* Label */}
        <p className="text-muted-foreground text-sm tracking-wide sm:text-base">
          {stat.label}
        </p>
      </div>

      {/* Decorative corners */}
      <div
        className={cn(
          "border-olive/0 absolute -right-1 -bottom-1 h-8 w-8 border-r border-b",
          "group-hover:border-olive/30 transition-all duration-500"
        )}
      />
      <div
        className={cn(
          "border-olive/0 absolute -top-1 -left-1 h-8 w-8 border-t border-l",
          "group-hover:border-olive/30 transition-all duration-500"
        )}
      />
    </motion.div>
  );
}

export function StatsSection() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/4 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.12 85 / 3%) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.15 55 / 3%) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              isVisible={isIntersecting}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
