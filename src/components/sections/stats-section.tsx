"use client";

import { Award, Users, Palette, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";
import { useCounter } from "@/hooks/use-counter";
import { siteConfig } from "@/config/site";

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
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: siteConfig.stats.happyClients,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Palette,
    value: siteConfig.stats.tattoosCompleted,
    suffix: "+",
    label: "Tattoos Completed",
  },
];

function StatCounter({
  stat,
  isVisible,
}: {
  stat: StatItem;
  isVisible: boolean;
}) {
  const count = useCounter({
    end: stat.value,
    duration: 2000,
    enabled: isVisible,
  });

  return (
    <div className="group relative p-6 text-center sm:p-8">
      {/* Background */}
      <div
        className={cn(
          "bg-card/50 absolute inset-0 rounded-2xl border border-white/5",
          "group-hover:border-olive/20 group-hover:bg-card/80",
          "transition-all duration-500"
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full",
            "from-olive/20 to-olive/5 bg-gradient-to-br",
            "border-olive/20 border"
          )}
        >
          <stat.icon className="text-olive h-6 w-6" />
        </div>

        {/* Value */}
        <p className="font-heading text-accent-red mb-2 text-4xl font-bold sm:text-5xl md:text-6xl">
          {count.toLocaleString()}
          <span>{stat.suffix}</span>
        </p>

        {/* Label */}
        <p className="text-muted-foreground text-sm tracking-wide sm:text-base">
          {stat.label}
        </p>
      </div>
    </div>
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
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              isVisible={isIntersecting}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi! I would like to become one of your satisfied clients. Can we chat?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cta inline-flex items-center gap-2 rounded-full px-8 py-3"
          >
            <MessageCircle size={18} />
            Be the Next Satisfied Client
          </a>
        </div>
      </div>
    </section>
  );
}
