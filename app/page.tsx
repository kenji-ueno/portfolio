export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-white text-gray-900">
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
          <a href="#contact" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">お問い合わせ</a>
          <a href="#works" className="inline-block px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">制作実績を見る</a>
        </div>
      </div>
    </main>
  );
}