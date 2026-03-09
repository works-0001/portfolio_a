import type { Metadata } from "next";
import { TransitionLink } from "@/components/TransitionLink";
import { Diamond, ImageIcon, Layout } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ServiceTabs } from "@/components/ServiceTabs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "料金プラン | VERTEX DIGITAL",
};

const PRICING_TABS = [
  { label: "AEO", target: "aeo" },
  { label: "Development", target: "development" },
  { label: "Design", target: "design" },
];

const FAQ_ITEMS = [
  {
    question: "制作期間はどれくらいですか？",
    answer:
      "Lightプランで約2〜4週間、Standardプランで約1〜2ヶ月、Premiumプランで約2〜4ヶ月が目安です。プロジェクトの規模や要件により変動しますので、詳しくはヒアリング時にご案内いたします。",
  },
  {
    question: "途中でプランの変更は可能ですか？",
    answer:
      "はい、プロジェクト進行中でもプランの変更やオプション追加は可能です。ご要望の変更に伴う費用・スケジュールの調整についてはその都度ご相談させていただきます。",
  },
  {
    question: "支払い方法を教えてください。",
    answer:
      "銀行振込でのお支払いとなります。着手時に50%、納品時に残り50%の分割払いが基本です。その他のお支払い方法についてもご相談いただけます。",
  },
  {
    question: "納品後の修正は対応してもらえますか？",
    answer:
      "各プランにサポート期間が含まれており、その期間内の軽微な修正は無料で対応いたします。サポート期間終了後は保守・運用プランへの移行をおすすめしています。",
  },
];

interface PricingCardProps {
  planName: string;
  price: string;
  priceSuffix?: string;
  priceUnit: string;
  priceDesc: string;
  features: string[];
  featured?: boolean;
  buttonVariant?: "primary" | "secondary";
}

function PricingCard({
  planName,
  price,
  priceSuffix,
  priceUnit,
  priceDesc,
  features,
  featured = false,
  buttonVariant = "secondary",
}: PricingCardProps) {
  return (
    <div
      className={`pricing-card tilt-card${featured ? " featured" : ""}`}
    >
      {featured && <div className="pricing-popular">人気プラン</div>}
      <div className="plan-name">{planName}</div>
      <div className="price">
        {price}
        {priceSuffix && (
          <span style={{ fontSize: "1rem", fontWeight: 400 }}>
            {priceSuffix}
          </span>
        )}
      </div>
      <div className="price-unit">{priceUnit}</div>
      <div className="price-desc">{priceDesc}</div>
      <ul className="feature-list">
        {features.map((f) => (
          <li key={f}>
            <span className="check">&#10003;</span> {f}
          </li>
        ))}
      </ul>
      <TransitionLink
        href="/contact"
        className={`btn btn-${buttonVariant} btn-arrow`}
      >
        <span className="btn-text">相談する</span>
      </TransitionLink>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="料金プラン"
        description="プロジェクトの規模やご要望に合わせて、最適なプランをお選びいただけます。"
        breadcrumb="料金プラン"
      />

      <ServiceTabs
        id="pricing-tabs"
        tabs={PRICING_TABS}
        hideAfter="options"
      />

      {/* AEO Pricing */}
      <section className="section" id="aeo">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3rem",
              }
            }
          >
            <span className="section-label">AEO</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              AEO 料金プラン
            </h2>
            <p className="section-desc" style={{ marginInline: "auto" }}>
              AI検索エンジンへの引用獲得に向けた最適化を、規模に合わせて対応します。Web制作との同時発注で割引あり。
            </p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="pricing-grid">
              <PricingCard
                planName="AEO Starter"
                price="¥98,000"
                priceSuffix="〜"
                priceUnit="税込 / 初回導入"
                priceDesc="スモールビジネス向けAEO導入パッケージ。まずはAI検索対応の第一歩を踏み出したい方に。"
                features={[
                  "AI可視性現状診断レポート",
                  "FAQスキーマ実装（10問）",
                  "Articleスキーマ設定",
                  "コンテンツ最適化（5ページ）",
                  "導入後1ヶ月モニタリング",
                ]}
              />
              <PricingCard
                planName="AEO Standard"
                price="¥49,800"
                priceSuffix="〜 / 月"
                priceUnit="税込 / 月額継続"
                priceDesc="継続的なAEO運用で、主要AI検索エンジンでの引用獲得を安定して維持・拡大します。"
                featured
                buttonVariant="primary"
                features={[
                  "月次AI引用モニタリング",
                  "スキーマ追加・更新（月10件）",
                  "AI向けコンテンツ最適化（月5P）",
                  "ChatGPT / Perplexity / Google AIO 追跡",
                  "競合AEO比較レポート",
                  "月次戦略レビュー（30分）",
                ]}
              />
              <PricingCard
                planName="AEO Premium"
                price="¥98,000"
                priceSuffix="〜 / 月"
                priceUnit="税込 / 月額継続"
                priceDesc="大規模サイト・競争激化領域向け。AEO × SEOの統合戦略でAI検索市場を制します。"
                features={[
                  "Standardプランの全内容",
                  "全スキーマ包括実装・管理",
                  "AI向けコンテンツ月30P対応",
                  "ボイスサーチ最適化",
                  "エンティティ / ナレッジグラフ最適化",
                  "SEO × AEO統合戦略立案",
                  "月次戦略レビュー（60分）",
                ]}
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            style={
              { textAlign: "center", marginTop: "2rem" }
            }
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              ※
              Web制作・デザインとの同時発注で初回導入費10%割引。
              <br />
              ※
              Starterプランからご契約の場合、Standardへの移行時に設定費免除。
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Development Pricing */}
      <section className="section section-alt" id="development">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3rem",
              }
            }
          >
            <span className="section-label">Development</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              デベロップメント 料金プラン
            </h2>
            <p className="section-desc" style={{ marginInline: "auto" }}>
              LP・コーポレートサイト・Webアプリ開発まで、プロジェクト規模に合わせた3プランをご用意しています。
            </p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="pricing-grid">
              <PricingCard
                planName="Light"
                price="¥198,000"
                priceSuffix="〜"
                priceUnit="税込 / 1サイト"
                priceDesc="シンプルなLP・小規模サイトに最適。スピーディーな制作で素早くWebプレゼンスを確立します。"
                features={[
                  "LP or 5ページ以内のサイト",
                  "レスポンシブデザイン",
                  "基本SEO対策",
                  "お問い合わせフォーム",
                  "納品後1ヶ月サポート",
                ]}
              />
              <PricingCard
                planName="Standard"
                price="¥498,000"
                priceSuffix="〜"
                priceUnit="税込 / 1サイト"
                priceDesc="コーポレートサイトやサービスサイトに。CMS導入でお客様自身での更新も可能に。"
                featured
                buttonVariant="primary"
                features={[
                  "10ページ以内のサイト",
                  "オリジナルデザイン",
                  "CMS導入（WordPress等）",
                  "SEO内部対策",
                  "アクセス解析導入",
                  "SNS連携",
                  "納品後3ヶ月サポート",
                ]}
              />
              <PricingCard
                planName="Premium"
                price="¥980,000"
                priceSuffix="〜"
                priceUnit="税込 / 1プロジェクト"
                priceDesc="大規模サイトやWebアプリ開発に。フルカスタム設計で、ビジネスの成長を全面サポート。"
                features={[
                  "ページ数無制限",
                  "完全オーダーメイド設計",
                  "Webアプリケーション開発",
                  "API設計・外部連携",
                  "セキュリティ対策",
                  "パフォーマンス最適化",
                  "納品後6ヶ月サポート",
                  "月次レポート",
                ]}
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            style={
              { textAlign: "center", marginTop: "2.5rem" }
            }
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              ※
              上記は参考価格です。プロジェクトの内容により変動する場合がございます。
              <br />
              ※ お見積もりは無料です。お気軽にご相談ください。
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Design Pricing */}
      <section className="section" id="design">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3rem",
              }
            }
          >
            <span className="section-label">Design</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              デザイン制作 料金
            </h2>
            <p className="section-desc" style={{ marginInline: "auto" }}>
              単品でのご依頼も承ります。Web制作との同時発注で割引対応も可能です。
            </p>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid-3">
              {[
                {
                  icon: <Diamond size={22} />,
                  title: "ロゴデザイン",
                  price: "¥49,800",
                  priceSuffix: "〜",
                  unit: "税込",
                  desc: "ロゴマーク・ロゴタイプのデザイン。カラーバリエーション・使用ガイドライン付き。修正3回まで含む。",
                },
                {
                  icon: <ImageIcon size={22} />,
                  title: "バナー・広告デザイン",
                  price: "¥15,000",
                  priceSuffix: "〜 / 1点",
                  unit: "税込",
                  desc: "Web広告バナー・SNS投稿画像・キャンペービジュアルなど。セット発注で単価割引あり。",
                },
                {
                  icon: <Layout size={22} />,
                  title: "UI/UXデザイン",
                  price: "¥80,000",
                  priceSuffix: "〜",
                  unit: "税込",
                  desc: "ワイヤーフレーム〜UIデザイン一式。Figmaでの納品、デザインシステム構築も対応。",
                },
              ].map((item) => (
                <div key={item.title} className="card tilt-card">
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-title">{item.title}</div>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "var(--navy)",
                      margin: "0.75rem 0 0.25rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.price}
                    <span style={{ fontSize: "0.9rem", fontWeight: 400 }}>
                      {item.priceSuffix}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.unit}
                  </div>
                  <div className="card-text">{item.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Options */}
      <section className="section" id="options">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3rem",
              }
            }
          >
            <span className="section-label">Options</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              オプションサービス
            </h2>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid-3">
              {[
                {
                  title: "保守・運用プラン",
                  desc: "月額 ¥19,800〜\nサーバー管理、セキュリティ更新、コンテンツ更新代行を含む安心の月額保守プラン。",
                },
                {
                  title: "コンテンツ制作",
                  desc: "¥30,000〜 / 1記事\nSEOを意識したブログ記事・コラム・導入事例等のライティングを代行します。",
                },
                {
                  title: "写真・動画撮影",
                  desc: "¥50,000〜 / 1回\nプロカメラマンによるビジネス写真・プロモーション動画の撮影を手配します。",
                },
              ].map((opt) => (
                <div key={opt.title} className="card tilt-card">
                  <div className="card-title">{opt.title}</div>
                  <div className="card-text">
                    {opt.desc.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <RevealOnScroll
            style={{ textAlign: "center" }}
          >
            <span className="section-label">FAQ</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              よくあるご質問
            </h2>
          </RevealOnScroll>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTA
        title="お見積もりは無料です"
        description="ご要望をお聞かせいただければ、最適なプランをご提案します。"
        buttonText="無料見積もりを依頼"
      />
    </>
  );
}
