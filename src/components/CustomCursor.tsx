"use client";

import { useEffect, useRef } from "react";

const HOVER_TARGETS =
  "a, button, .btn, .card, .service-card, .work-card, .pricing-card, .faq-item, .process-step, input, select, textarea";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    function onMouseOver(e: MouseEvent) {
      if ((e.target as Element)?.closest?.(HOVER_TARGETS)) {
        document.body.classList.add("cursor-hover");
      }
    }

    function onMouseOut(e: MouseEvent) {
      if ((e.target as Element)?.closest?.(HOVER_TARGETS)) {
        document.body.classList.remove("cursor-hover");
      }
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    let rafId: number;
    function animate() {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.2;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.08;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.08;

      dot!.style.left = dotPos.current.x + "px";
      dot!.style.top = dotPos.current.y + "px";
      ring!.style.left = ringPos.current.x + "px";
      ring!.style.top = ringPos.current.y + "px";

      rafId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
