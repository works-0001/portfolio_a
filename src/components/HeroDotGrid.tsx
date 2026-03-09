"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseR: number;
  r: number;
  targetR: number;
  opacity: number;
  targetOpacity: number;
}

const DOT_SPACING = 40;
const DOT_BASE_RADIUS = 1.2;
const DOT_HOVER_RADIUS = 3;
const INFLUENCE_RADIUS = 120;

export function HeroDotGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function initDots() {
      const rect = container!.getBoundingClientRect();
      canvas!.width = rect.width;
      canvas!.height = rect.height;
      const dots: Dot[] = [];
      const cols = Math.ceil(canvas!.width / DOT_SPACING);
      const rows = Math.ceil(canvas!.height / DOT_SPACING);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * DOT_SPACING + DOT_SPACING / 2,
            y: r * DOT_SPACING + DOT_SPACING / 2,
            baseR: DOT_BASE_RADIUS,
            r: DOT_BASE_RADIUS,
            targetR: DOT_BASE_RADIUS,
            opacity: 0.15,
            targetOpacity: 0.15,
          });
        }
      }
      dotsRef.current = dots;
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const rect = container!.getBoundingClientRect();
      const mx = mouseRef.current.x - rect.left;
      const my = mouseRef.current.y - rect.top;
      const dots = dotsRef.current;

      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS) {
          const factor = 1 - dist / INFLUENCE_RADIUS;
          d.targetR =
            DOT_BASE_RADIUS + (DOT_HOVER_RADIUS - DOT_BASE_RADIUS) * factor;
          d.targetOpacity = 0.15 + 0.5 * factor;
        } else {
          d.targetR = DOT_BASE_RADIUS;
          d.targetOpacity = 0.15;
        }

        d.r += (d.targetR - d.r) * 0.12;
        d.opacity += (d.targetOpacity - d.opacity) * 0.12;

        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(37, 99, 235, ${d.opacity})`;
        ctx!.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (a.targetR <= DOT_BASE_RADIUS + 0.2) continue;
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          if (b.targetR <= DOT_BASE_RADIUS + 0.2) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < DOT_SPACING * 1.8) {
            const lineOpacity = Math.min(a.opacity, b.opacity) * 0.4;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(37, 99, 235, ${lineOpacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    const heroSection =
      container.closest(".hero") || container.parentElement!;

    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function onMouseLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    heroSection.addEventListener("mousemove", onMouseMove as EventListener);
    heroSection.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", initDots);

    initDots();
    const rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      heroSection.removeEventListener(
        "mousemove",
        onMouseMove as EventListener
      );
      heroSection.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", initDots);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-canvas">
      <canvas ref={canvasRef} />
    </div>
  );
}
