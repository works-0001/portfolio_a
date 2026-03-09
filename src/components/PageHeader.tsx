"use client";

import { TransitionLink } from "./TransitionLink";
import { RevealOnScroll } from "./RevealOnScroll";

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb: string;
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        <RevealOnScroll className="breadcrumb">
          <TransitionLink href="/">ホーム</TransitionLink>
          <span className="sep">/</span>
          <span>{breadcrumb}</span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h1>{title}</h1>
        </RevealOnScroll>
        <RevealOnScroll>
          <p>{description}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
