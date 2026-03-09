import type { Metadata } from "next";
import {
  CodeXml,
  FileText,
  BarChart2,
  Crosshair,
  PenTool,
  TrendingUp,
  Palette,
  Search,
  Settings,
  Rocket,
  ShieldCheck,
  Diamond,
  Layout,
  ImageIcon,
  Monitor,
  Server,
  Cloud,
  LayoutGrid,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ServiceTabs } from "@/components/ServiceTabs";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "サービス | VERTEX DIGITAL",
};

const SERVICE_TABS = [
  { label: "AEO", target: "aeo" },
  { label: "Development", target: "development" },
  { label: "Design", target: "design" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="サービス"
        description="お客様のビジネス課題に最適なWebソリューションをご提供します。"
        breadcrumb="サービス"
      />

      <ServiceTabs
        id="service-tabs"
        tabs={SERVICE_TABS}
        hideAfter="tech-stack"
      />

      {/* AEO */}
      <section className="section section-alt" id="aeo">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll>
              <span className="section-label">Service 01</span>
              <h2 className="section-title">
                AEO
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    display: "block",
                    marginTop: "0.3rem",
                    letterSpacing: 0,
                  }}
                >
                  AIエンジン最適化
                </span>
              </h2>
              <p
                className="section-desc"
                style={{
                  marginBottom: "1.5rem",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  marginTop: "0.25rem",
                }}
              >
                ChatGPT &nbsp;/&nbsp; Perplexity &nbsp;/&nbsp; Google AI
                Overviews
              </p>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                Gartnerは「2026年までに従来の検索ボリュームが25%減少する」と予測。ChatGPT・Perplexity・Google
                AI
                Overviewsなど、AI検索エンジンへの「引用」を獲得することが次世代の集客戦略になります。
              </p>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                AEOはSEOを置き換えるものではなく、補完するものです。技術的な構造化データ実装から、AIが「答えとして引用したくなる」コンテンツ設計まで、一貫して対応します。
              </p>
              <div className="about-values">
                <div className="value-item">
                  <div className="value-icon">
                    <CodeXml size={22} />
                  </div>
                  <div>
                    <div className="about-info">
                      <h3>構造化データ（スキーマ）実装</h3>
                    </div>
                    <div className="about-info">
                      <p>
                        FAQ・HowTo・Article・LocalBusinessスキーマをJSON-LDで実装。AIエンジンが情報を正確に解釈できる技術基盤を構築
                      </p>
                    </div>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <FileText size={22} />
                  </div>
                  <div>
                    <div className="about-info">
                      <h3>AIファーストコンテンツ設計</h3>
                    </div>
                    <div className="about-info">
                      <p>
                        「回答ファースト」構造への最適化、FAQページの再設計、ゼロクリック対策。AIが引用しやすいコンテンツ形式に再構成
                      </p>
                    </div>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <BarChart2 size={22} />
                  </div>
                  <div>
                    <div className="about-info">
                      <h3>AI引用モニタリング & レポート</h3>
                    </div>
                    <div className="about-info">
                      <p>
                        ChatGPT・Perplexity・Google AI
                        Overviewsでの引用状況を継続トラッキング。競合との比較を含む月次レポートを提供
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  background: "var(--bg-warm)",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--blue)",
                    textTransform: "uppercase" as const,
                    marginBottom: "1rem",
                  }}
                >
                  AEO と SEO の違い
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--navy)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      従来のSEO
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                      }}
                    >
                      検索結果での順位を上げ、クリックを獲得する戦略
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      AEO（新戦略）
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                      }}
                    >
                      AI検索エンジンに「引用」され、回答の中に含まれる戦略
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="about-visual">
              <div className="about-visual-box"></div>
              <div className="about-visual-content">
                <div
                  className="big-text"
                  style={{
                    fontSize: "2.5rem",
                    background:
                      "linear-gradient(135deg,var(--blue),var(--accent))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AEO
                </div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.8rem",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  ChatGPT
                  <br />
                  Perplexity
                  <br />
                  Google AI Overviews
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div id="development" style={{ position: "relative", top: "-8px" }}></div>

      {/* LP */}
      <ServiceSection
        label="Service 02"
        title="ランディングページ制作"
        desc1="コンバージョン最大化を目的とした戦略的LP制作。マーケティングの知見とクリエイティブの力で、広告効果を最大化します。"
        desc2="ターゲット分析からコピーライティング、デザイン、コーディング、さらに公開後のA/Bテストまで、LPに必要な全てをワンストップで対応。成果の出るLPを実現します。"
        visualText="LP"
        visualSub="Landing Page"
        values={[
          {
            icon: <Crosshair size={22} />,
            title: "ターゲット分析 & 戦略設計",
            desc: "ペルソナ設計、競合分析、USP策定で訴求ポイントを明確化",
          },
          {
            icon: <PenTool size={22} />,
            title: "コピーライティング & デザイン",
            desc: "心を動かすコピーと視線誘導を計算したUI設計",
          },
          {
            icon: <TrendingUp size={22} />,
            title: "分析 & 改善",
            desc: "GA4/ヒートマップ導入、A/Bテストで継続的にCVR改善",
          },
        ]}
      />

      {/* Corporate */}
      <ServiceSection
        alt
        reverse
        label="Service 03"
        title="コーポレートサイト制作"
        desc1="企業の「顔」となるコーポレートサイトを、ブランド戦略に基づいて設計・制作。信頼感とプロフェッショナリズムを体現するデザインで、ステークホルダーからの信頼を獲得します。"
        desc2="CMS導入による更新の容易さ、SEO内部対策、セキュリティ対策まで、長期運用を見据えた設計をお約束します。"
        visualText="Corp"
        visualSub="Corporate Site"
        values={[
          {
            icon: <Palette size={22} />,
            title: "ブランド設計 & デザイン",
            desc: "企業のビジョン・ミッションを反映したVI設計",
          },
          {
            icon: <FileText size={22} />,
            title: "CMS導入 & 運用設計",
            desc: "WordPress等のCMSで、担当者が簡単に更新可能な環境を構築",
          },
          {
            icon: <Search size={22} />,
            title: "SEO & セキュリティ対策",
            desc: "検索上位表示のための内部対策とSSL・WAF等のセキュリティ対策",
          },
        ]}
      />

      {/* Web App */}
      <ServiceSection
        label="Service 04"
        title="Webアプリケーション開発"
        desc1="業務システムの効率化から新規Webサービスの開発まで、お客様のニーズに合わせたWebアプリケーションを設計・開発します。"
        desc2="モダンな技術スタックを採用し、スケーラビリティ・保守性に優れたアプリケーションを提供。要件定義からリリース後の保守運用まで一貫して対応します。"
        visualText="App"
        visualSub="Web Application"
        values={[
          {
            icon: <Settings size={22} />,
            title: "要件定義 & 技術選定",
            desc: "ビジネス要件に最適な技術スタック・アーキテクチャを選定",
          },
          {
            icon: <Rocket size={22} />,
            title: "フルスタック開発",
            desc: "React/Next.js, Node.js, クラウドインフラまで一気通貫",
          },
          {
            icon: <ShieldCheck size={22} />,
            title: "保守 & スケーリング",
            desc: "継続的な運用保守と、事業成長に合わせた機能拡張をサポート",
          },
        ]}
      />

      {/* Design */}
      <section className="section section-alt" id="design">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll className="about-visual" style={{ order: 0 }}>
              <div className="about-visual-box"></div>
              <div className="about-visual-content">
                <div className="big-text">Design</div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                  }}
                >
                  Brand & Visual
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll style={{ order: 1 }}>
              <span className="section-label">Service 05</span>
              <h2 className="section-title">デザイン制作</h2>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                ロゴ・ブランドアイデンティティの構築から、バナー広告・SNSクリエイティブ、UI/UXデザインまで。一貫したビジュアル戦略でブランドの価値を高めます。
              </p>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Web制作と一体で発注いただくことで、デザインと実装のズレをなくし、高品質なアウトプットをスムーズに実現できます。
              </p>
              <div className="about-values">
                <div className="value-item">
                  <div className="value-icon">
                    <Diamond size={22} />
                  </div>
                  <div>
                    <div className="about-info">
                      <h3>ロゴ・ブランドアイデンティティ</h3>
                    </div>
                    <div className="about-info">
                      <p>
                        ロゴデザイン、カラーパレット、タイポグラフィ等のブランドガイドライン策定
                      </p>
                    </div>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <Layout size={22} />
                  </div>
                  <div>
                    <div className="about-info">
                      <h3>UI/UXデザイン</h3>
                    </div>
                    <div className="about-info">
                      <p>
                        ワイヤーフレームからビジュアルデザインまで。使いやすさと美しさを両立したUI設計
                      </p>
                    </div>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <ImageIcon size={22} />
                  </div>
                  <div>
                    <div className="about-info">
                      <h3>バナー・SNSクリエイティブ</h3>
                    </div>
                    <div className="about-info">
                      <p>
                        Web広告バナー、SNS投稿画像、キャンペービジュアルなど各種グラフィック制作
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" id="tech-stack">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3rem",
              }
            }
          >
            <span className="section-label">Technology</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              使用技術
            </h2>
            <p className="section-desc" style={{ marginInline: "auto" }}>
              プロジェクトに最適な技術を選定し、高品質なプロダクトを実現します。
            </p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid-4">
              {[
                {
                  icon: <Monitor size={28} />,
                  title: "フロントエンド",
                  desc: "React / Next.js / Vue.js / TypeScript / Tailwind CSS",
                },
                {
                  icon: <Server size={28} />,
                  title: "バックエンド",
                  desc: "Node.js / Python / PHP / Laravel / Express",
                },
                {
                  icon: <Cloud size={28} />,
                  title: "インフラ",
                  desc: "AWS / Vercel / Docker / GitHub Actions",
                },
                {
                  icon: <LayoutGrid size={28} />,
                  title: "CMS",
                  desc: "WordPress / microCMS / Strapi / Contentful",
                },
              ].map((tech) => (
                <div
                  key={tech.title}
                  className="card tilt-card"
                  style={{ textAlign: "center" }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>
                    {tech.icon}
                  </div>
                  <div className="card-title">{tech.title}</div>
                  <div className="card-text">{tech.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTA
        title="プロジェクトのご相談はお気軽に"
        description="お見積もり・ご提案は無料です。まずはお話をお聞かせください。"
        buttonText="無料相談する"
      />
    </>
  );
}

function ServiceSection({
  alt = false,
  reverse = false,
  label,
  title,
  desc1,
  desc2,
  visualText,
  visualSub,
  values,
}: {
  alt?: boolean;
  reverse?: boolean;
  label: string;
  title: string;
  desc1: string;
  desc2: string;
  visualText: string;
  visualSub: string;
  values: { icon: React.ReactNode; title: string; desc: string }[];
}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="container">
        <div className="about-grid">
          {reverse && (
            <RevealOnScroll className="about-visual" style={{ order: 0 }}>
              <div className="about-visual-box"></div>
              <div className="about-visual-content">
                <div className="big-text">{visualText}</div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                  }}
                >
                  {visualSub}
                </p>
              </div>
            </RevealOnScroll>
          )}
          <RevealOnScroll style={reverse ? ({ order: 1 }) : undefined}>
            <span className="section-label">{label}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
              {desc1}
            </p>
            <p className="section-desc" style={{ marginBottom: "2rem" }}>
              {desc2}
            </p>
            <div className="about-values">
              {values.map((v) => (
                <div key={v.title} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <div className="about-info">
                      <h3>{v.title}</h3>
                    </div>
                    <div className="about-info">
                      <p>{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          {!reverse && (
            <RevealOnScroll className="about-visual">
              <div className="about-visual-box"></div>
              <div className="about-visual-content">
                <div className="big-text">{visualText}</div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                  }}
                >
                  {visualSub}
                </p>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
