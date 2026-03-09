"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

export function RevealOnScroll({
  children,
  className = "",
  stagger = false,
  delay,
  style,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = stagger ? "stagger-children" : "reveal";
  const delayClass = delay ? ` reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`${baseClass}${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
