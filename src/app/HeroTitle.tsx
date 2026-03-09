"use client";

import { useEffect, useRef } from "react";

export function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.classList.add("visible");
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 ref={ref} className="hero-title">
      <span className="line">
        <span className="line-inner">ビジネスを加速する</span>
      </span>
      <span className="line">
        <span className="line-inner">
          <em>デジタル体験</em>を創る
        </span>
      </span>
    </h1>
  );
}
