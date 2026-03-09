"use client";

import { TransitionLink } from "./TransitionLink";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <TransitionLink href="/" className="logo">
              VERTEX <span>DIGITAL</span>
            </TransitionLink>
            <p>
              戦略設計からデザイン、開発、運用まで。ビジネスの成長を加速するデジタルパートナー。
            </p>
          </div>
          <div className="footer-col">
            <h4>サービス</h4>
            <ul>
              <li>
                <TransitionLink href="/services">LP制作</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/services">コーポレートサイト制作</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/services">Webアプリ開発</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/services#design">デザイン制作</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/services#aeo">AEO最適化</TransitionLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>情報</h4>
            <ul>
              <li>
                <TransitionLink href="/about">プロフィール</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/works">制作実績</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/pricing">料金プラン</TransitionLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>お問い合わせ</h4>
            <ul>
              <li>
                <TransitionLink href="/contact">お問い合わせフォーム</TransitionLink>
              </li>
              <li>
                <a href="mailto:info@vertex-digital.jp">
                  info@vertex-digital.jp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 VERTEX DIGITAL. All rights reserved.</p>
          <p>
            <TransitionLink href="#">プライバシーポリシー</TransitionLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
