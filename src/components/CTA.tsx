"use client";

import { TransitionLink } from "./TransitionLink";
import { RevealOnScroll } from "./RevealOnScroll";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export function CTA({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="cta-section">
      <RevealOnScroll className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <TransitionLink href={buttonHref} className="btn btn-primary btn-arrow">
          <span className="btn-text">{buttonText}</span>
        </TransitionLink>
      </RevealOnScroll>
    </section>
  );
}
