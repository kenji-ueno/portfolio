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
