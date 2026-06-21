import Image from "next/image";

type Entry = {
  title: string;
  author: string;
  contentType: "本" | "ドキュメンタリー";
  genre: string;
  coverUrl: string;
  whyRead: string;
  recommenderName: string;
  recommenderTag: string;
  sourceLabel: string;
  regularPrice: number;
  salePrice: number;
  discountPercent: number;
  saleEndsLabel: string;
};

const entries: Entry[] = [
  {
    title: "イノベーションのジレンマ",
    author: "クレイトン・クリステンセン",
    contentType: "本",
    genre: "ビジネス・経済",
    coverUrl: "https://covers.openlibrary.org/b/isbn/0875845851-L.jpg",
    whyRead:
      "優良企業が新興企業に市場を奪われる構造を解明した一冊。Amazonの事業判断の土台になった理論として知られる。",
    recommenderName: "ジェフ・ベゾス（Amazon創業者）",
    recommenderTag: "経営者・起業家",
    sourceLabel:
      "Amazon幹部との合宿で必読書として扱われていることが複数のビジネスメディアで報じられている",
    regularPrice: 2640,
    salePrice: 1320,
    discountPercent: 50,
    saleEndsLabel: "本日23:59まで",
  },
];

const recommenderTags = [
  "経営者・起業家",
  "文学・小説家",
  "映画監督・俳優",
  "音楽アーティスト（K-POP含む）",
  "芸人",
  "料理人",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900">
            Yomimado91
          </h1>
          <p className="mt-3 text-zinc-600">
            電子書籍でセール対象になっている本・ドキュメンタリーの中から、実際に著名人が薦めた作品だけを出典付きでご紹介するキュレーションサイトです。
            セールが終わった後も読み継がれる「名著アーカイブ」を目指しています。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="mb-4 text-sm font-semibold text-zinc-500">
          推薦者から探す
        </h2>
        <div className="mb-12 flex flex-wrap gap-2">
          {recommenderTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white px-3 py-1.5 text-sm text-zinc-700 ring-1 ring-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mb-6 text-sm font-semibold text-zinc-500">
          本日の推薦
        </h2>
        <div className="space-y-6">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="flex gap-5 rounded-xl border border-zinc-200 bg-white p-5"
            >
              <Image
                src={entry.coverUrl}
                alt={`${entry.title}の表紙`}
                width={96}
                height={144}
                className="h-36 w-24 flex-none rounded object-cover ring-1 ring-zinc-200"
                unoptimized
              />
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {entry.contentType} ・ {entry.genre}
                  </span>
                  <span className="rounded-md bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                    {entry.discountPercent}%OFF ・ {entry.saleEndsLabel}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-zinc-900">
                  {entry.title}
                </h3>
                <p className="text-sm text-zinc-500">{entry.author}</p>
                <p className="mt-2 text-sm text-zinc-600">{entry.whyRead}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  推薦：{entry.recommenderName} ／ 出典：{entry.sourceLabel}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                    {entry.recommenderTag}
                  </span>
                  <div className="text-sm">
                    <span className="text-zinc-400 line-through">
                      ¥{entry.regularPrice.toLocaleString()}
                    </span>{" "}
                    <span className="font-semibold text-zinc-900">
                      ¥{entry.salePrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          推薦リストのリサーチを進めながら、掲載数を増やしていきます。
        </p>
      </main>
    </div>
  );
}
