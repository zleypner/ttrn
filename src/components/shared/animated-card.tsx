"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glareEnabled?: boolean;
  scaleOnHover?: number;
  borderGlow?: boolean;
}

export function AnimatedCard({
  children,
  className,
  tiltIntensity = 10,
  glareEnabled = true,
  scaleOnHover = 1.02,
  borderGlow = true,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    [tiltIntensity, -tiltIntensity]
  );
  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    [-tiltIntensity, tiltIntensity]
  );

  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative cursor-pointer", className)}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        {/* Glare Effect */}
        {glareEnabled && (
          <motion.div
            className={cn(
              "pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-xl",
              "opacity-0 transition-opacity duration-300",
              isHovered && "opacity-100"
            )}
          >
            <motion.div
              className="absolute h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: `radial-gradient(circle at center, oklch(1 0 0 / 15%) 0%, transparent 50%)`,
                left: glareX,
                top: glareY,
              }}
            />
          </motion.div>
        )}

        {/* Border Glow */}
        {borderGlow && (
          <motion.div
            className={cn(
              "border-olive/0 absolute inset-0 rounded-xl border",
              "transition-all duration-300",
              isHovered &&
                "border-olive/30 shadow-[0_0_30px_rgba(194,154,88,0.15)]"
            )}
            style={{ transform: "translateZ(0)" }}
          />
        )}

        {/* Content */}
        <div className="relative z-0">{children}</div>
      </motion.div>
    </motion.div>
  );
}
