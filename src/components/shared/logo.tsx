"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 transition-opacity hover:opacity-80",
        className
      )}
    >
      {variant === "default" ? (
        <div className="flex flex-col">
          <span className="font-heading text-gradient-gold text-xl font-semibold tracking-[0.2em] sm:text-2xl">
            RENÉ RUIZ
          </span>
          <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase sm:text-xs">
            Tattoo Artist
          </span>
        </div>
      ) : (
        <span className="font-heading text-gradient-gold text-lg font-semibold tracking-[0.15em]">
          RR
        </span>
      )}
    </Link>
  );
}
