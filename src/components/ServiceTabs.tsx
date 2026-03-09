"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

interface ServiceTabsProps {
  id?: string;
  tabs: { label: string; target: string }[];
  hideAfter?: string;
}

export function ServiceTabs({ id, tabs, hideAfter }: ServiceTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);

  const getOffset = useCallback(() => {
    const header = document.querySelector(".header") as HTMLElement | null;
    const tabBar = tabBarRef.current;
    const hh = header?.offsetHeight ?? 68;
    const th = tabBar?.offsetHeight ?? 52;
    return hh + th + 8;
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement | null;
    const tabBar = tabBarRef.current;

    function syncTop() {
      if (tabBar && header) {
        tabBar.style.top = header.offsetHeight + "px";
      }
    }

    function updateActive() {
      const offset = getOffset() + 10;
      const scrollY = window.scrollY + offset;
      let active = 0;
      tabs.forEach((tab, i) => {
        const section = document.getElementById(tab.target);
        if (section && section.offsetTop <= scrollY) active = i;
      });
      setActiveIndex(active);
    }

    function updateVisibility() {
      if (!hideAfter) return;
      const hideSection = document.getElementById(hideAfter);
      if (!hideSection || !header) return;
      const hh = header.offsetHeight;
      setIsHidden(window.scrollY + hh >= hideSection.offsetTop - 20);
    }

    function onScroll() {
      syncTop();
      updateActive();
      updateVisibility();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    syncTop();
    updateActive();
    updateVisibility();

    return () => window.removeEventListener("scroll", onScroll);
  }, [tabs, hideAfter, getOffset]);

  function scrollToSection(targetId: string) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const offset = getOffset();
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <motion.div
      ref={tabBarRef}
      id={id}
      className="service-tabs"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: isHidden ? 0 : 1,
        y: isHidden ? -10 : 0,
        pointerEvents: isHidden ? "none" : "auto",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container">
        <div className="service-tabs-inner">
          {tabs.map((tab, i) => (
            <button
              key={tab.target}
              className={`service-tab${i === activeIndex ? " active" : ""}`}
              onClick={() => scrollToSection(tab.target)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
