"use client";

import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <RevealOnScroll key={i}>
          <div className={`faq-item${activeIndex === i ? " active" : ""}`}>
            <button
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <span>{item.question}</span>
              <span className="icon">+</span>
            </button>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === i ? "500px" : 0,
              }}
            >
              <div className="faq-answer-inner">{item.answer}</div>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
