import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | VERTEX DIGITAL",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="お問い合わせ"
        description="ご質問・ご相談・お見積もりのご依頼など、お気軽にお問い合わせください。"
        breadcrumb="お問い合わせ"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <RevealOnScroll>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "0.75rem",
                }}
              >
                お気軽にご連絡ください
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                }}
              >
                Webサイト制作・Webアプリ開発に関するご相談やお見積もりのご依頼は、下記フォームまたはメールにてお受けしております。通常1〜2営業日以内にご返信いたします。
              </p>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="info-label">メールアドレス</div>
                    <div className="info-value">info@vertex-digital.jp</div>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="info-label">所在地</div>
                    <div className="info-value">東京都渋谷区○○ 0-0-0</div>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="info-label">営業時間</div>
                    <div className="info-value">平日 10:00 - 19:00</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
