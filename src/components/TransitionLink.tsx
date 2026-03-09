"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  forwardRef,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
  useCallback,
} from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  onMouseMove?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const FADE_DURATION = 300;

function getTransitionContainer(): HTMLElement | null {
  // template.tsx wraps page content in a motion.div that is a direct child of main content area
  // We target it by finding the motion div wrapper
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");
  if (!header || !footer) return null;

  // The template wrapper is between header and footer
  let el = header.nextElementSibling as HTMLElement | null;
  while (el && el !== footer) {
    if (el.style !== undefined) return el;
    el = el.nextElementSibling as HTMLElement | null;
  }
  return null;
}

export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink(
    { href, children, className, style, onClick, onMouseMove, onMouseLeave },
    ref
  ) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = useCallback(
      (e: MouseEvent<HTMLAnchorElement>) => {
        // Allow hash links on same page to work normally
        if (href.startsWith("#") || href.startsWith("mailto:")) return;

        // Same page — no transition needed
        const targetPath = href.split("#")[0] || "/";
        if (targetPath === pathname) return;

        e.preventDefault();
        onClick?.();

        const container = getTransitionContainer();
        if (container) {
          container.style.transition = `opacity ${FADE_DURATION}ms ease-in`;
          container.style.opacity = "0";
        }

        setTimeout(() => {
          router.push(href);
          // Scroll to top on page change
          window.scrollTo(0, 0);
        }, FADE_DURATION);
      },
      [href, pathname, router, onClick]
    );

    return (
      <Link
        ref={ref}
        href={href}
        className={className}
        style={style}
        onClick={handleClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    );
  }
);
