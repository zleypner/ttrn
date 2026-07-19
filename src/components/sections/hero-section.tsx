"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared";
import {
  heroTitle,
  heroSubtitle,
  heroCta,
  fadeIn,
  letterRevealContainer,
  letterReveal,
} from "@/lib/animations/variants";

// Pre-generated particle data (deterministic)
const particleData = [
  { id: 0, x: 15, y: 25, size: 3, delay: 0.5, duration: 12, xOffset: 10 },
  { id: 1, x: 85, y: 15, size: 4, delay: 1.2, duration: 15, xOffset: -15 },
  { id: 2, x: 45, y: 65, size: 2, delay: 0.8, duration: 11, xOffset: 20 },
  { id: 3, x: 70, y: 45, size: 5, delay: 2.1, duration: 14, xOffset: -10 },
  { id: 4, x: 25, y: 80, size: 3, delay: 0.3, duration: 13, xOffset: 5 },
  { id: 5, x: 55, y: 30, size: 4, delay: 1.8, duration: 16, xOffset: -20 },
  { id: 6, x: 10, y: 55, size: 2, delay: 0.9, duration: 12, xOffset: 15 },
  { id: 7, x: 90, y: 70, size: 3, delay: 2.5, duration: 11, xOffset: -5 },
  { id: 8, x: 35, y: 10, size: 5, delay: 1.4, duration: 14, xOffset: 25 },
  { id: 9, x: 65, y: 85, size: 2, delay: 0.6, duration: 15, xOffset: -12 },
  { id: 10, x: 20, y: 40, size: 4, delay: 3.0, duration: 13, xOffset: 8 },
  { id: 11, x: 80, y: 35, size: 3, delay: 1.1, duration: 12, xOffset: -18 },
  { id: 12, x: 50, y: 90, size: 5, delay: 2.3, duration: 16, xOffset: 12 },
  { id: 13, x: 30, y: 60, size: 2, delay: 0.7, duration: 11, xOffset: -8 },
  { id: 14, x: 75, y: 20, size: 4, delay: 1.9, duration: 14, xOffset: 22 },
  { id: 15, x: 5, y: 75, size: 3, delay: 2.8, duration: 15, xOffset: -25 },
  { id: 16, x: 60, y: 50, size: 5, delay: 0.4, duration: 13, xOffset: 6 },
  { id: 17, x: 40, y: 95, size: 2, delay: 1.6, duration: 12, xOffset: -14 },
  { id: 18, x: 95, y: 5, size: 4, delay: 2.0, duration: 11, xOffset: 18 },
  { id: 19, x: 15, y: 45, size: 3, delay: 1.3, duration: 14, xOffset: -22 },
];

// Floating particles component
function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="bg-olive/20 absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated letter component
function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={letterRevealContainer}
      initial="hidden"
      animate="visible"
      className="inline-flex flex-wrap justify-center gap-x-[0.25em]"
    >
      {words.map((word, wordIdx) => {
        let colorClass = "text-foreground"; // 60%
        if (words.length === 1) {
          colorClass = "text-olive";
        } else if (words.length === 2) {
          if (wordIdx === 1) colorClass = "text-olive";
        } else if (words.length === 3) {
          if (wordIdx === 1) colorClass = "text-olive";
          if (wordIdx === 2) colorClass = "text-accent-red";
        } else {
          const percent = wordIdx / words.length;
          if (percent >= 0.9) {
            colorClass = "text-accent-red";
          } else if (percent >= 0.6) {
            colorClass = "text-olive";
          } else {
            colorClass = "text-foreground";
          }
        }

        const letters = word.split("");

        return (
          <span key={wordIdx} className={cn(colorClass, "inline-flex")}>
            {letters.map((letter, letterIdx) => (
              <motion.span
                key={letterIdx}
                variants={letterReveal}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          x: mousePosition.x * 0.5,
        }}
      >
        {/* Base gradient */}
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

        {/* Moving gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.12 85 / 8%) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.15 55 / 8%) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(1 0 0 / 10%) 1px, transparent 1px),
              linear-gradient(90deg, oklch(1 0 0 / 10%) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content with Parallax */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="container-wide relative z-10 px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl"
        >
          {/* Pre-title */}
          <motion.div
            variants={fadeIn}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <motion.span
              className="to-olive/50 h-px w-12 bg-gradient-to-r from-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <span className="text-olive text-sm font-medium tracking-[0.3em] uppercase">
              Tatuador Profesional
            </span>
            <motion.span
              className="to-olive/50 h-px w-12 bg-gradient-to-l from-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Main Title with Letter Animation */}
          <motion.h1
            variants={heroTitle}
            className="font-heading mb-6 text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-shadow-gold">
              <AnimatedTitle text={siteConfig.artistName.toUpperCase()} />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={heroSubtitle}
            className="text-muted-foreground mb-4 text-xl font-light tracking-wide sm:text-2xl md:text-3xl"
          >
            El Arte de lo Permanente
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroSubtitle}
            className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base sm:text-lg"
          >
            Especializado en realismo, black &amp; grey y fine line.
            Transformando tu visión en arte corporal de lujo en{" "}
            <span className="text-olive">{siteConfig.location.country}</span>.
          </motion.p>

          {/* CTAs with enhanced effects */}
          <motion.div
            variants={heroCta}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hola, me gustaría agendar una consulta para un tatuaje.`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative inline-flex items-center gap-2 rounded-full px-8 py-4",
                "btn-gold glow-gold-hover overflow-hidden",
                "text-base font-medium"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon
                size={20}
                className="transition-transform group-hover:scale-110"
              />
              Consulta Gratis
            </motion.a>
            <motion.button
              onClick={() => handleScroll("#galeria")}
              className={cn(
                "group relative inline-flex items-center gap-2 rounded-full px-8 py-4",
                "btn-outline-gold overflow-hidden",
                "text-base"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="via-olive/10 absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Calendar size={20} />
              Ver Portfolio
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            variants={heroCta}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-12 md:gap-16"
          >
            {[
              { value: `${siteConfig.stats.yearsExperience}+`, label: "Años" },
              { value: `${siteConfig.stats.happyClients}+`, label: "Clientes" },
              {
                value: `${siteConfig.stats.countriesServed}+`,
                label: "Países",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <p className="font-heading text-accent-red text-2xl font-bold sm:text-3xl md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs tracking-wider uppercase sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <button
          onClick={() => handleScroll("#estilos")}
          className="text-muted-foreground hover:text-olive group flex flex-col items-center gap-2 transition-colors"
          aria-label="Scroll hacia abajo"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:border-olive/30 rounded-full border border-white/10 p-2 transition-colors"
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </motion.div>

      {/* Gradient fade at bottom */}
      <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
}
