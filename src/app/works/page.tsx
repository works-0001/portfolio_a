import type { Metadata } from "next";
import {
  Rocket,
  Building2,
  Utensils,
  Heart,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "制作実績 | VERTEX DIGITAL",
};

const WORKS = [
  {
    icon: <Rocket size={48} color="white" />,
    gradient: "linear-gradient(135deg,#2563EB 0%,#0EA5E9 100%)",
    tag: "LP制作",
    title: "SaaS企業様 サービス紹介LP",
    desc: "クラウド型業務管理ツールの新規リード獲得を目的としたLP。CVR35%改善を実現。",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    icon: <Building2 size={48} color="white" />,
    gradient: "linear-gradient(135deg,#0B1D3A 0%,#2563EB 100%)",
    tag: "コーポレートサイト",
    title: "建設会社様 コーポレートサイト",
    desc: "創業50年の信頼感とモダンさを両立したデザイン。採用応募数が2倍に増加。",
    tech: ["WordPress", "PHP", "AWS"],
  },
  {
    icon: <Utensils size={48} color="white" />,
    gradient: "linear-gradient(135deg,#2563EB 0%,#0EA5E9 100%)",
    tag: "LP制作",
    title: "飲食チェーン様 キャンペーンLP",
    desc: "季節限定メニューのプロモーション用LP。SNS連携でキャンペーン参加率を大幅に向上。",
    tech: ["HTML/CSS", "JavaScript", "GA4"],
  },
  {
    icon: <Heart size={48} color="white" />,
    gradient: "linear-gradient(135deg,#0B1D3A 0%,#0EA5E9 100%)",
    tag: "コーポレートサイト",
    title: "美容クリニック様 ブランドサイト",
    desc: "高級感と安心感を両立したデザイン。予約フォーム連携でオンライン予約率40%向上。",
    tech: ["React", "microCMS", "Vercel"],
  },
  {
    icon: <BarChart3 size={48} color="white" />,
    gradient: "linear-gradient(135deg,#0B1D3A 0%,#2563EB 100%)",
    tag: "Webアプリ",
    title: "不動産会社様 物件管理システム",
    desc: "社内の物件情報を一元管理するWebアプリ。業務効率を60%改善しペーパーレス化を推進。",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: <GraduationCap size={48} color="white" />,
    gradient: "linear-gradient(135deg,#2563EB 0%,#0B1D3A 100%)",
    tag: "Webアプリ",
    title: "教育企業様 オンライン学習プラットフォーム",
    desc: "動画配信・進捗管理・テスト機能を備えたLMSを構築。受講完了率25%向上。",
    tech: ["Next.js", "Python", "AWS"],
  },
];

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="制作実績"
        description="さまざまな業界・規模のクライアント様のプロジェクトをご紹介します。"
        breadcrumb="制作実績"
      />

      <section className="section">
        <div className="container">
          <RevealOnScroll stagger>
            <div className="works-grid">
              {WORKS.map((work) => (
                <div key={work.title} className="work-card tilt-card">
                  <div className="work-thumb">
                    <div
                      className="work-thumb-bg"
                      style={{ background: work.gradient }}
                    >
                      {work.icon}
                    </div>
                    <span className="work-tag">{work.tag}</span>
                  </div>
                  <div className="work-info">
                    <h3>{work.title}</h3>
                    <p>{work.desc}</p>
                    <div className="tech-stack">
                      {work.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTA
        title="あなたのプロジェクトもお手伝いします"
        description="業界・規模を問わず、最適なソリューションをご提案します。"
        buttonText="お問い合わせはこちら"
      />
    </>
  );
}
