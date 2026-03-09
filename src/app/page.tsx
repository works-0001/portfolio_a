import { TransitionLink } from "@/components/TransitionLink";
import {
  Bot,
  Cpu,
  Palette,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { HeroDotGrid } from "@/components/HeroDotGrid";
import { CounterAnimation } from "@/components/CounterAnimation";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MagneticButton } from "@/components/MagneticButton";
import { CTA } from "@/components/CTA";
import { HeroTitle } from "./HeroTitle";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroDotGrid />
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <RevealOnScroll className="hero-badge">
                <span className="dot"></span>
                Web制作のプロフェッショナル
              </RevealOnScroll>
              <HeroTitle />
              <RevealOnScroll delay={2}>
                <p className="hero-desc">
                  戦略設計からデザイン、開発、運用まで。
                  <br />
                  お客様のビジネスゴールに最適化されたWebサイトを、
                  <br />
                  ワンストップでご提供します。
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={3}>
                <div className="hero-buttons">
                  <MagneticButton href="/contact" variant="primary" arrow>
                    無料相談する
                  </MagneticButton>
                  <MagneticButton href="/services" variant="secondary">
                    サービスを見る
                  </MagneticButton>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={4}>
                <div className="hero-stats">
                  <div className="hero-stat">
                    <CounterAnimation
                      target={150}
                      suffix="+"
                      className="number"
                    />
                    <div className="label">制作実績</div>
                  </div>
                  <div className="hero-stat">
                    <CounterAnimation
                      target={98}
                      suffix="%"
                      className="number"
                    />
                    <div className="label">顧客満足度</div>
                  </div>
                  <div className="hero-stat">
                    <CounterAnimation
                      target={40}
                      suffix="%"
                      className="number"
                    />
                    <div className="label">平均CVR改善率</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            <RevealOnScroll className="hero-visual">
              <div className="hero-3d-container">
                <div className="hero-orbit">
                  <div className="orbit-node"></div>
                  <div className="orbit-node"></div>
                </div>
                <div className="hero-orbit">
                  <div className="orbit-node"></div>
                </div>
                <div className="hero-orbit"></div>
                <div className="hero-center-text">
                  <CounterAnimation
                    target={150}
                    suffix="+"
                    className="number"
                  />
                  <div className="unit">Projects Delivered</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...Array(2)].map((_, setIndex) =>
            [
              "React",
              "Next.js",
              "TypeScript",
              "Vue.js",
              "Node.js",
              "WordPress",
              "AWS",
              "Figma",
              "Tailwind CSS",
              "Python",
              "Docker",
              "PostgreSQL",
            ].map((tech) => (
              <span key={`${setIndex}-${tech}`} className="marquee-item">
                {tech} <span className="sep"></span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <RevealOnScroll
            className=""
            style={
              {
                textAlign: "center",
                marginBottom: "3.5rem",
              }
            }
          >
            <span className="section-label">Services</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              3つの専門領域で
              <br />
              ビジネスを加速する
            </h2>
            <p className="section-desc" style={{ marginInline: "auto" }}>
              Web開発・デザイン・AEOを一気通貫で提供。課題に合わせた最適なソリューションをご提案します。
            </p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid-3">
              {/* AEO */}
              <div className="category-card aeo-card tilt-card">
                <div className="aeo-hot-badge">2026 注目</div>
                <div
                  className="category-card-icon"
                  style={{
                    background: "rgba(14,165,233,0.08)",
                    color: "var(--accent)",
                  }}
                >
                  <Bot size={24} />
                </div>
                <div className="category-tag tag-aeo">AEO</div>
                <div className="category-card-title">
                  AEO
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      display: "block",
                      marginTop: "0.15rem",
                      letterSpacing: 0,
                    }}
                  >
                    AIエンジン最適化
                  </span>
                </div>
                <div className="category-card-desc">
                  ChatGPT・Perplexity・Google AI
                  Overviewsなど、AI検索エンジンに「引用される」ための最新最適化戦略。
                </div>
                <ul className="category-service-list">
                  <li>
                    <ChevronRight size={13} /> 構造化データ実装
                  </li>
                  <li>
                    <ChevronRight size={13} /> AI向けコンテンツ最適化
                  </li>
                  <li>
                    <ChevronRight size={13} /> AI引用モニタリング
                  </li>
                </ul>
                <TransitionLink href="/services#aeo" className="category-link">
                  詳細を見る <ArrowRight size={14} />
                </TransitionLink>
              </div>

              {/* Development */}
              <div className="category-card tilt-card">
                <div className="category-card-icon">
                  <Cpu size={24} />
                </div>
                <div className="category-tag">Development</div>
                <div className="category-card-title">デベロップメント</div>
                <div className="category-card-desc">
                  戦略設計から開発・保守まで。成果を出すWebプロダクトを一貫して構築します。
                </div>
                <ul className="category-service-list">
                  <li>
                    <ChevronRight size={13} /> ランディングページ制作
                  </li>
                  <li>
                    <ChevronRight size={13} /> コーポレートサイト制作
                  </li>
                  <li>
                    <ChevronRight size={13} /> Webアプリケーション開発
                  </li>
                </ul>
                <TransitionLink href="/services#development" className="category-link">
                  詳細を見る <ArrowRight size={14} />
                </TransitionLink>
              </div>

              {/* Design */}
              <div className="category-card tilt-card">
                <div
                  className="category-card-icon"
                  style={{
                    background: "rgba(37,99,235,0.07)",
                    color: "var(--blue)",
                  }}
                >
                  <Palette size={24} />
                </div>
                <div className="category-tag tag-design">Design</div>
                <div className="category-card-title">デザイン</div>
                <div className="category-card-desc">
                  ブランドの世界観をビジュアルで表現。一貫したデザイン戦略でブランド価値を高めます。
                </div>
                <ul className="category-service-list">
                  <li>
                    <ChevronRight size={13} /> ロゴ・ブランドアイデンティティ
                  </li>
                  <li>
                    <ChevronRight size={13} /> UI/UXデザイン
                  </li>
                  <li>
                    <ChevronRight size={13} /> バナー・SNSクリエイティブ
                  </li>
                </ul>
                <TransitionLink href="/services#design" className="category-link">
                  詳細を見る <ArrowRight size={14} />
                </TransitionLink>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll style={{ textAlign: "center", marginTop: "3rem" }}>
            <MagneticButton href="/services" variant="secondary" arrow>
              サービス詳細を見る
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3.5rem",
              }
            }
          >
            <span className="section-label">Process</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              制作の流れ
            </h2>
            <p className="section-desc" style={{ marginInline: "auto" }}>
              ヒアリングから納品まで、透明性の高いプロセスでプロジェクトを進行します。
            </p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="process-grid">
              {[
                {
                  num: "01",
                  title: "ヒアリング",
                  desc: "ビジネスの課題やゴール、ターゲットを丁寧にヒアリング。最適なご提案に繋げます。",
                },
                {
                  num: "02",
                  title: "設計・デザイン",
                  desc: "ワイヤーフレームからビジュアルデザインまで。お客様と確認を重ねながら進めます。",
                },
                {
                  num: "03",
                  title: "開発・実装",
                  desc: "最新の技術スタックで高品質なコーディング。レスポンシブ対応・SEO対策も標準装備。",
                },
                {
                  num: "04",
                  title: "納品・サポート",
                  desc: "テスト・検証を経て納品。公開後の保守運用・改善提案もお任せください。",
                },
              ].map((step) => (
                <div key={step.num} className="process-step">
                  <div className="process-number">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTA
        title="まずは無料でご相談ください"
        description="お見積もり・ご提案は無料です。お気軽にお問い合わせください。"
        buttonText="お問い合わせはこちら"
      />
    </>
  );
}
