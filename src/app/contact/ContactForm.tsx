"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--white)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "2.5rem",
      }}
    >
      <div className="form-group">
        <label>
          お名前 <span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="山田 太郎"
          required
        />
      </div>
      <div className="form-group">
        <label>会社名</label>
        <input type="text" className="form-input" placeholder="株式会社○○" />
      </div>
      <div className="form-group">
        <label>
          メールアドレス <span className="required">*</span>
        </label>
        <input
          type="email"
          className="form-input"
          placeholder="info@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label>電話番号</label>
        <input
          type="tel"
          className="form-input"
          placeholder="090-0000-0000"
        />
      </div>
      <div className="form-group">
        <label>
          ご相談内容 <span className="required">*</span>
        </label>
        <select className="form-select" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option value="lp">ランディングページ制作</option>
          <option value="corporate">コーポレートサイト制作</option>
          <option value="webapp">Webアプリケーション開発</option>
          <option value="design">デザイン制作</option>
          <option value="aeo">AEO（AIアンサーエンジン最適化）</option>
          <option value="consulting">Web戦略コンサルティング</option>
          <option value="other">その他</option>
        </select>
      </div>
      <div className="form-group">
        <label>ご予算</label>
        <select className="form-select" defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option value="~20">〜20万円</option>
          <option value="20-50">20万円〜50万円</option>
          <option value="50-100">50万円〜100万円</option>
          <option value="100-300">100万円〜300万円</option>
          <option value="300~">300万円以上</option>
          <option value="undecided">未定・相談したい</option>
        </select>
      </div>
      <div className="form-group">
        <label>
          お問い合わせ内容 <span className="required">*</span>
        </label>
        <textarea
          className="form-textarea"
          placeholder="プロジェクトの概要やご質問をお書きください。"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-arrow"
        style={{
          width: "100%",
          justifyContent: "center",
          background: isSubmitted ? "#2563EB" : undefined,
        }}
      >
        <span className="btn-text">
          {isSubmitted ? "送信完了しました" : "送信する"}
        </span>
      </button>
    </form>
  );
}
