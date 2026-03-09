"use client";

import { useState, useEffect } from "react";
import { TransitionLink } from "./TransitionLink";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="container">
        <TransitionLink href="/" className="logo">
          VERTEX <span>DIGITAL</span>
        </TransitionLink>
        <nav>
          <ul className={`nav-links${isMenuOpen ? " open" : ""}`}>
            <li>
              <TransitionLink href="/services" onClick={() => setIsMenuOpen(false)}>
                サービス
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/works" onClick={() => setIsMenuOpen(false)}>
                実績
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/pricing" onClick={() => setIsMenuOpen(false)}>
                料金
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/about" onClick={() => setIsMenuOpen(false)}>
                プロフィール
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/contact"
                className="nav-cta"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </TransitionLink>
            </li>
          </ul>
          <div
            className={`hamburger${isMenuOpen ? " active" : ""}`}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
