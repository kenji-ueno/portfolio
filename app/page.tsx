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
    </main>
  );
}
