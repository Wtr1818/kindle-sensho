const categories = [
  {
    title: "ビジネス・経済",
    description: "セール中のビジネス書・経済書を厳選してご紹介します。",
  },
  {
    title: "自己啓発",
    description: "考え方や習慣を変えるきっかけになる一冊を見つけられます。",
  },
  {
    title: "小説",
    description: "話題作から隠れた名作まで、セール中の小説をピックアップ。",
  },
  {
    title: "古典",
    description:
      "時代を超えて読み継がれる古典と、教養として読むべき名著をセール時に。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Yomimado91
          </h1>
          <p className="mt-3 text-zinc-600">
            電子書籍でセール対象になっている本の中から、「なぜ読むべきか」「誰が推薦しているか」を添えて厳選してご紹介するキュレーションサイトです。
            セールが終わった後も読み継がれる「名著アーカイブ」を目指しています。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="mb-6 text-lg font-semibold text-zinc-900">カテゴリ</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-zinc-200 bg-white p-5"
            >
              <h3 className="font-semibold text-zinc-900">{category.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          現在準備中です。近日中にセール本の掲載を開始します。
        </p>
      </main>
    </div>
  );
}
