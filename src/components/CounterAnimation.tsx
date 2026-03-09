"use client";

import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function CounterAnimation({
  target,
  suffix = "",
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(`0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1800;
            const start = performance.now();

            function update(now: number) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setDisplay(Math.floor(target * eased) + suffix);
              if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
