"use client";

import { useEffect, useState } from "react";

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) {
      // Reset count when disabled - required for proper counter behavior
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(start);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime - delay;

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, end, duration, delay, enabled]);

  return count;
}

export function useCounterWithSuffix(
  options: UseCounterOptions & { suffix?: string }
) {
  const count = useCounter(options);
  return `${count.toLocaleString()}${options.suffix || ""}`;
}
