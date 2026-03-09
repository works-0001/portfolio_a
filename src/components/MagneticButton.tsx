"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { TransitionLink } from "./TransitionLink";

interface MagneticButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function MagneticButton({
  href,
  variant = "primary",
  arrow = false,
  children,
  className = "",
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  const classes = `btn btn-${variant}${arrow ? " btn-arrow" : ""} ${className}`;

  return (
    <TransitionLink
      ref={ref}
      href={href}
      className={classes}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="btn-text">{children}</span>
    </TransitionLink>
  );
}
