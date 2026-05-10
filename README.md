# Kenji Ueno — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

Web制作10年の経験を土台に、Next.js / TypeScript / AI活用へとキャリアを広げるエンジニアの個人ポートフォリオサイトです。

## 🌐 公開サイト

**[https://portfolio-dun-zeta-34.vercel.app/](https://portfolio-dun-zeta-34.vercel.app/)**

## このサイトの目的

Web制作の現場で10年積み重ねた設計力・実装力をベースに、モダンな技術スタック(Next.js / TypeScript)とAI活用へキャリアを広げる過程を、口頭や職務経歴書では伝わらない「動くサイト」として可視化することを目的としています。

採用担当者(Web制作会社・自社サービス企業・AI関連企業)に向けて、技術力・学習姿勢・人柄を一画面で伝えることをゴールにしています。

## 🛠 技術スタック

| 用途 | 技術 |
|---|---|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| フォーム | Formspree |
| ホスティング | Vercel (Hobby) |
| バージョン管理 | Git / GitHub |
| 開発エディタ | Cursor |

## 📑 主要セクション

縦に長くスクロールする1ページ完結型の構成です。

- **Hero** — キャッチコピーとCTA(お問い合わせ / 制作実績を見る)
- **About** — 経歴サマリーと「大事にしていること」
- **Skills** — 3層タグレイアウト(メイン経験 / 学習中 / AI活用ツール)
- **Works** — 自作プロジェクト(公開中・Coming Soon)とクライアント実績(NDA配慮)
- **Contact** — Formspree連携の問い合わせフォーム

## 💻 ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build
npm run start
```

開発サーバーは `http://localhost:3000` で起動します。

## 🤖 AI活用ポリシー

本サイトの制作にあたり、Claude / Cursor などの生成AIを学習と実装の両面で積極的に活用しています。一方で、自分の手元のコードに対しては以下のルールを徹底しています。

> **「自分が説明できないコードは、自分のリポジトリに入れない」**

具体的には:

- 設計と方針は、まず自分で考えてからAIに相談する
- AIから受け取ったコードは、内容を理解した上で自分のサイトに合わせて改造する
- 理解できないままの提案は採用せず、納得できるまで質問を重ねる

「AIで生成しただけのコード」ではなく、「AIを道具として使いこなしたコード」を積み上げることを大事にしています。

## 📅 制作ログ

短期集中で本サイトを構築した記録です。

### Week 1 — 土台構築

- Next.js / TypeScript / Tailwind CSS のセットアップ
- Vercel への初回デプロイと本番URL確保
- Hero / About / Contact の最小バージョン公開
- Formspree 連携によるお問い合わせフォーム稼働

### Week 2 — セクション拡充と運用基盤整備

- Skills セクション実装(3層タグレイアウト・色分け)
- Works セクション実装(カード風UI・公開中/Coming Soonの視覚的区別)
- メタ情報整備(`title` / `description`)
- Google Search Console 所有権認証
- README充実化(本ドキュメント)

### これから

- 架空ブリーフから設計したLP制作(地域ビジネス / SaaS / AIツール)
- Claude API 連携によるサイト内AIチャット機能
- Learning Journey セクションの追加
- 学習記録ブログの運用開始

## 📮 連絡先

採用に関するご連絡は、サイト内のお問い合わせフォームよりお願いします。

- **Portfolio**: [https://portfolio-dun-zeta-34.vercel.app/](https://portfolio-dun-zeta-34.vercel.app/)
- **GitHub**: [@kenji-ueno](https://github.com/kenji-ueno)

## 📄 License

このリポジトリのソースコードは個人ポートフォリオ用途で公開しています。コードの参考・引用は歓迎しますが、サイトに掲載されている経歴・写真・文章等の個人情報をそのまま転用することはご遠慮ください。

---

*Built with Next.js, TypeScript, Tailwind CSS, and a lot of curiosity.*
