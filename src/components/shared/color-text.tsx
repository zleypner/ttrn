"use client";

import { cn } from "@/lib/utils";

interface ColorTextProps {
  text: string;
  className?: string;
}

export function ColorText({ text, className }: ColorTextProps) {
  const words = text.split(" ");

  if (words.length === 1) {
    // If it's just one word, style it in the secondary color (olive)
    return <span className={cn("text-olive", className)}>{text}</span>;
  }

  return (
    <>
      {words.map((word, index) => {
        let colorClass = "text-foreground"; // 60% Dominant (White/Light)

        if (words.length === 2) {
          // Word 1: White, Word 2: Olive
          if (index === 1) colorClass = "text-olive";
        } else if (words.length === 3) {
          // Word 1: White, Word 2: Olive, Word 3: Accent Red
          if (index === 1) colorClass = "text-olive";
          if (index === 2) colorClass = "text-accent-red";
        } else {
          // 4+ words: 60-30-10 distribution
          const ratio = index / words.length;
          if (ratio >= 0.9) {
            colorClass = "text-accent-red";
          } else if (ratio >= 0.6) {
            colorClass = "text-olive";
          } else {
            colorClass = "text-foreground";
          }
        }

        return (
          <span
            key={index}
            className={cn(colorClass, "mr-[0.25em] inline-block last:mr-0")}
          >
            {word}
          </span>
        );
      })}
    </>
  );
}
