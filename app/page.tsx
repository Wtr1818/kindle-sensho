import Image from "next/image";
import Link from "next/link";
import { affiliateUrl, entries } from "@/data/entries";

const recommenderTags = [
  "経営者・起業家",
  "文学・小説家",
  "映画監督・俳優",
  "音楽アーティスト（K-POP含む）",
  "芸人",
  "料理人",
];

export default function Home() {
  const activeEntries = entries.filter((entry) => entry.status === "active");

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900">
              Yomimado91
            </h1>
            <Link
              href="/archive"
              className="text-sm text-zinc-500 underline-offset-2 hover:underline"
            >
              アーカイブを見る
            </Link>
          </div>
          <p className="mt-3 text-zinc-600">
            Amazon Kindleストアでセール対象になっている本・ドキュメンタリーの中から、実際に著名人が薦めた作品だけを出典付きでご紹介するキュレーションサイトです。
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

        <h2 className="mb-2 text-sm font-semibold text-zinc-500">
          本日の推薦
        </h2>
        <p className="mb-6 text-xs text-zinc-400">
          表示している割引はAmazon Kindleストアでのセール価格です。価格・在庫はAmazonの商品ページでご確認ください。
        </p>
        <div className="space-y-6">
          {activeEntries.map((entry) => (
            <article
              key={entry.slug}
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
                    Amazon Kindleストアで{entry.discountPercent}%OFF
                  </span>
                </div>
                <p className="font-serif text-sm italic text-zinc-700">
                  {entry.hook}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-zinc-900">
                  {entry.title}
                </h3>
                <p className="text-sm text-zinc-500">{entry.author}</p>
                {entry.saleEndsLabel && (
                  <p className="mt-1 text-xs text-zinc-400">
                    {entry.saleEndsLabel}
                  </p>
                )}
                <p className="mt-2 text-sm text-zinc-600">{entry.whyRead}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  推薦：{entry.recommenderName}
                </p>
                <a
                  href={entry.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-100"
                >
                  ✓ 出典確認済み：{entry.sourceLabel}
                </a>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                    {entry.recommenderTag}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="text-sm">
                      <span className="text-zinc-400 line-through">
                        ¥{entry.regularPrice.toLocaleString()}
                      </span>{" "}
                      <span className="font-semibold text-zinc-900">
                        ¥{entry.salePrice.toLocaleString()}
                      </span>
                    </div>
                    <a
                      href={affiliateUrl(entry.asin)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700"
                    >
                      Amazonで見る
                    </a>
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
