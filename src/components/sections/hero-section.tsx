"use client";

import { ChevronDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import { useCounter } from "@/hooks/use-counter";
import { useIntersection } from "@/hooks/use-intersection";

const handleScroll = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function AnimatedStat({
  value,
  label,
  isVisible,
}: {
  value: number;
  label: string;
  isVisible: boolean;
}) {
  const count = useCounter({
    end: value,
    duration: 2000,
    enabled: isVisible,
  });

  return (
    <div className="text-center">
      <p className="text-olive text-2xl font-bold sm:text-3xl md:text-4xl">
        {count.toLocaleString()}+
      </p>
      <p className="text-muted-foreground text-xs tracking-wider uppercase sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function HeroSection() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Static Background */}
      <div className="absolute inset-0">
        <div
          className="from-background via-card to-background absolute inset-0 bg-gradient-to-br"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 50%, oklch(0.72 0.12 85 / 5%) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, oklch(0.65 0.15 55 / 5%) 0%, transparent 50%),
              linear-gradient(to bottom, oklch(0.08 0 0), oklch(0.1 0 0), oklch(0.08 0 0))
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Pre-title */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="to-olive/50 h-px w-12 bg-gradient-to-r from-transparent" />
            <span className="text-olive text-sm font-medium tracking-[0.3em] uppercase">
              Professional Tattoo Artist
            </span>
            <span className="to-olive/50 h-px w-12 bg-gradient-to-l from-transparent" />
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-foreground">RENE</span>{" "}
            <span className="text-olive">RUIZ</span>
          </h1>

          {/* Tagline */}
          <p className="text-muted-foreground mb-4 text-xl font-light tracking-wide sm:text-2xl md:text-3xl">
            The Art of Permanence
          </p>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base sm:text-lg">
            Specializing in realism, black &amp; grey, and fine line.
            Transforming your vision into luxury body art in{" "}
            <span className="text-olive">{siteConfig.location.country}</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I'd like to schedule a consultation for a tattoo.`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative inline-flex items-center gap-2 rounded-full px-8 py-4",
                "btn-cta overflow-hidden",
                "text-base font-medium"
              )}
            >
              <WhatsAppIcon size={20} />
              Free Consultation
            </a>
            <button
              onClick={() => handleScroll("#gallery")}
              className={cn(
                "group relative inline-flex items-center gap-2 rounded-full px-8 py-4",
                "btn-outline-gold overflow-hidden",
                "text-base"
              )}
            >
              <Calendar size={20} />
              View Portfolio
            </button>
          </div>

          {/* Stats Preview */}
          <div
            ref={ref}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-12 md:gap-16"
          >
            <AnimatedStat
              value={siteConfig.stats.yearsExperience}
              label="Years"
              isVisible={isIntersecting}
            />
            <AnimatedStat
              value={siteConfig.stats.happyClients}
              label="Clients"
              isVisible={isIntersecting}
            />
            <div className="text-center">
              <p className="text-olive text-2xl font-bold sm:text-3xl md:text-4xl">
                Custom
              </p>
              <p className="text-muted-foreground text-xs tracking-wider uppercase sm:text-sm">
                Designs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <button
          onClick={() => handleScroll("#styles")}
          className="text-muted-foreground hover:text-olive group flex flex-col items-center gap-2 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <div className="group-hover:border-olive/30 rounded-full border border-white/10 p-2 transition-colors">
            <ChevronDown size={20} />
          </div>
        </button>
      </div>

      {/* Gradient fade at bottom */}
      <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
}
