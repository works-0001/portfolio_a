import type { Metadata } from "next";
import { Gem, Handshake, Rocket } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "プロフィール | VERTEX DIGITAL",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="プロフィール"
        description="テクノロジーとクリエイティビティで、お客様のビジネスを前進させます。"
        breadcrumb="プロフィール"
      />

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll>
              <span className="section-label">About Me</span>
              <h2 className="section-title">
                ひとりの制作者が、
                <br />
                本気で向き合う
              </h2>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                VERTEX
                DIGITALは、Web制作を専門とする個人のフリーランスです。「技術力とデザインの両立で、お客様のビジネスに本当に役立つWebを届ける」という想いを軸に活動しています。
              </p>
              <p className="section-desc">
                大手制作会社のような「担当者が変わる」「伝言ゲームになる」といった問題は起きません。ヒアリングから納品・運用まで、一貫して私ひとりが責任を持って対応します。だからこそ、スピーディーで細かいコミュニケーションが可能です。
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="about-visual">
              <div className="about-visual-box"></div>
              <div className="about-visual-content">
                <div className="big-text">VD</div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    textAlign: "center",
                  }}
                >
                  VERTEX DIGITAL
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <RevealOnScroll
            style={
              {
                textAlign: "center",
                marginBottom: "3rem",
              }
            }
          >
            <span className="section-label">My Values</span>
            <h2
              className="section-title"
              style={{ marginInline: "auto" }}
            >
              大切にしていること
            </h2>
          </RevealOnScroll>
          <RevealOnScroll stagger>
            <div className="grid-3">
              {[
                {
                  icon: <Gem size={36} />,
                  title: "Quality First",
                  desc: "妥協のないクオリティを追求します。細部にまでこだわり、お客様の期待を超えるプロダクトをお届けします。",
                },
                {
                  icon: <Handshake size={36} />,
                  title: "Partnership",
                  desc: "お客様と同じ方向を向くパートナーとして。課題解決に共に取り組み、長期的な信頼関係を大切にします。",
                },
                {
                  icon: <Rocket size={36} />,
                  title: "Innovation",
                  desc: "最新技術を積極的に取り入れ、常に最適なソリューションを模索。変化を恐れず、革新的なアプローチで挑戦します。",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="card tilt-card"
                  style={{ textAlign: "center", padding: "2.5rem" }}
                >
                  <div
                    style={{
                      marginBottom: "1rem",
                      color: "var(--blue)",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {value.icon}
                  </div>
                  <div
                    className="card-title"
                    style={{ fontSize: "1.15rem" }}
                  >
                    {value.title}
                  </div>
                  <div className="card-text">{value.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTA
        title="まずはお気軽にご連絡ください"
        description="ご相談・お見積もりは無料です。"
        buttonText="お問い合わせはこちら"
      />
    </>
  );
}
