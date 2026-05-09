export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero セクション */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Web制作10年。
            <br />
            次の10年は、AIと共に作る。
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
            Web制作の現場で10年。これから、Next.js・TypeScript・AI活用を軸に、
            Webアプリエンジニアへとキャリアを広げていきます。
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              お問い合わせ
            </a>
            <a
              href="#works"
              className="inline-block px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              制作実績を見る
            </a>
          </div>
        </div>
      </section>

      {/* About セクション */}
      <section id="about" className="px-6 py-24 border-t border-gray-200">
        <div className="max-w-3xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            About
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Web制作の現場で10年。
              <br />
              HTML / CSS / JavaScript / WordPress を中心に、
              コーポレートサイトやECサイトの構築・運用に携わってきました。
            </p>

            <p>
              これからの10年は、Webアプリ開発とAI活用の世界へ。
              <br />
              2026年、Next.js / TypeScript / React を学び始め、 Claude や GitHub
              Copilot を日々の開発に取り入れています。
            </p>

            <div>
              <p className="font-semibold text-gray-900 mb-3">
                大事にしていること
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>「説明できないコードは書かない」を徹底すること</li>
                <li>新しい技術を学び続ける好奇心</li>
                <li>10年で培った設計力を、新しい道具の上で活かすこと</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Skills セクション */}
      <section
        id="skills"
        className="border-t border-gray-200 bg-white px-6 py-24"
      >
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-10 text-3xl font-bold">Skills</h2>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-500">
              メイン経験(10年)・コーディング
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                HTML
              </span>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                CSS
              </span>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                JavaScript
              </span>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                WordPress
              </span>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                PHP
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-500">
              メイン経験(10年)・デザイン & 映像
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                Illustrator
              </span>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                Photoshop
              </span>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-900">
                Premiere Pro
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-500">現在学習中(2026年〜)</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
                Next.js
              </span>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
                TypeScript
              </span>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
                React
              </span>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
                Tailwind CSS
              </span>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
                Python
              </span>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm text-gray-500">AI活用ツール(日常使用)</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-violet-50 px-3 py-1 text-sm text-violet-900">
                Claude
              </span>
              <span className="rounded-md bg-violet-50 px-3 py-1 text-sm text-violet-900">
                ChatGPT
              </span>
              <span className="rounded-md bg-violet-50 px-3 py-1 text-sm text-violet-900">
                GitHub Copilot
              </span>
              <span className="rounded-md bg-violet-50 px-3 py-1 text-sm text-violet-900">
                Cursor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section
        id="works"
        className="w-full border-t border-gray-200 bg-white px-6 py-24"
      >
        <div className="max-w-3xl w-full mx-auto">
          <h2 className="text-2xl font-bold mb-10">Works</h2>

          {/* 自作プロジェクト */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              自作プロジェクト
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              架空クライアント設定で制作するデモ作品を含む、自主制作のプロジェクト一覧。
            </p>

            <div className="space-y-4">
              {/* カード1: ポートフォリオサイト本体(公開中) */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-gray-900">
                    ポートフォリオサイト本体
                  </h4>
                  <span className="text-xs bg-green-50 text-green-900 px-2 py-1 rounded shrink-0">
                    公開中
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Web制作10年からWebアプリ・AI活用エンジニアへの転身を表現する自己紹介サイト。
                  Next.js / TypeScript / Tailwind CSS を学習しながら制作。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs rounded-md px-2 py-1">
                    Next.js 15
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs rounded-md px-2 py-1">
                    TypeScript
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs rounded-md px-2 py-1">
                    Tailwind CSS
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs rounded-md px-2 py-1">
                    Vercel
                  </span>
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href="https://portfolio-dun-zeta-34.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Live Site →
                  </a>
                  <a
                    href="https://github.com/kenji-ueno/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              {/* カード2: 地域ビジネスLP(Coming Soon) */}
              <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50/50">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-gray-700">
                    地域ビジネスLP
                  </h4>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded shrink-0">
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  架空のローカルビジネス(カフェ・整体院など)を題材にしたランディングページ。
                  制作10年の経験を、モダン技術で再現する作品。
                </p>
              </div>

              {/* カード3: SaaS LP(Coming Soon) */}
              <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50/50">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-gray-700">SaaS LP</h4>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded shrink-0">
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  架空のプロダクトを想定したSaaS向けランディングページ。
                  プロダクトの世界観・価値訴求の設計を行う作品。
                </p>
              </div>

              {/* カード4: AIツールLP(Coming Soon) */}
              <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50/50">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-gray-700">
                    AIツールLP + Claude API デモ
                  </h4>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded shrink-0">
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Claude APIを活用した実動デモを組み込んだランディングページ。
                  AIを「使える」だけでなく「実装できる」ことを示す作品。
                </p>
              </div>
            </div>
          </div>

          {/* クライアント実績 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              クライアント実績
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Web制作会社にて、10年間で多数のクライアント案件に携わってきました。
            </p>

            <ul className="space-y-3 mb-4">
              <li className="text-sm text-gray-800">
                <span className="font-medium">コーポレートサイト制作</span>
                <span className="text-gray-500"> / 担当: 設計・実装</span>
              </li>
              <li className="text-sm text-gray-800">
                <span className="font-medium">ECサイトリニューアル</span>
                <span className="text-gray-500"> / 担当: 設計・実装</span>
              </li>
            </ul>

            <p className="text-xs text-gray-500">
              ※ 守秘義務のため、業種・担当範囲のみ記載しています。
              詳細はカジュアル面談等にてお伝えします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact セクション */}
      <section
        id="contact"
        className="px-6 py-24 border-t border-gray-200 bg-gray-50"
      >
        <div className="max-w-3xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contact
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
            採用・業務委託のご相談、技術的なご質問など、
            お気軽にお問い合わせください。
          </p>

          <form
            action="https://formspree.io/f/xlgzppjr"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                件名
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
