import Image from "next/image";
import Link from "next/link";
import { affiliateUrl, entries } from "@/data/entries";

const recommenderTags = [
  "経営者・起業家",
  "文学・小説家",
  "映画監督・俳優",
  "音楽アーティスト",
  "芸人",
  "料理人",
];

export default function Home() {
  const activeEntries = entries.filter((entry) => entry.status === "active");

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <header className="border-b border-[#1c1a17]/10">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1c1a17]">
              読み窓91
            </h1>
            <Link
              href="/archive"
              className="text-sm text-[#1c1a17]/50 underline-offset-4 hover:text-[#1c1a17] hover:underline"
            >
              アーカイブ
            </Link>
          </div>
          <p className="mt-4 max-w-xl font-serif text-[15px] leading-8 text-[#1c1a17]/70">
            Amazon Kindleストアでセール対象になっている本・ドキュメンタリーの中から、実際に著名人が薦めた作品だけを出典付きでご紹介します。セールが終わった後も読み継がれる「名著アーカイブ」を目指しています。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-14">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#1c1a17]/40">
            RECOMMENDED BY
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {recommenderTags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-[#1c1a17]/60 hover:text-[#1c1a17]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mb-8 text-xs font-medium tracking-[0.2em] text-[#1c1a17]/40">
          本日の推薦
        </p>

        <div className="divide-y divide-[#1c1a17]/10">
          {activeEntries.map((entry) => (
            <article key={entry.slug} className="flex gap-6 py-8 first:pt-0">
              <Image
                src={entry.coverUrl}
                alt={`${entry.title}の表紙`}
                width={104}
                height={156}
                className="h-[156px] w-[104px] flex-none object-cover shadow-[0_1px_3px_rgba(28,26,23,0.15)]"
                unoptimized
              />
              <div className="flex-1">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-[#1c1a17]/40">
                    {entry.contentType} ／ {entry.genre}
                  </span>
                  {entry.saleEndsLabel && (
                    <span className="bg-[#b5402b] px-2.5 py-1 text-xs font-medium text-white">
                      {entry.saleEndsLabel}
                    </span>
                  )}
                </div>
                <p className="font-serif text-base italic text-[#1c1a17]/80">
                  {entry.hook}
                </p>
                <h3 className="mt-1 font-serif text-xl font-bold text-[#1c1a17]">
                  {entry.title}
                </h3>
                <p className="mt-0.5 text-sm text-[#1c1a17]/50">
                  {entry.author}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#1c1a17]/70">
                  {entry.whyRead}
                </p>
                <p className="mt-3 text-xs text-[#1c1a17]/50">
                  推薦：{entry.recommenderName}
                  <a
                    href={entry.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="ml-1 underline underline-offset-2 hover:text-[#1c1a17]"
                  >
                    （{entry.sourceLabel}）
                  </a>
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#1c1a17]/40">
                    {entry.recommenderTag} ・ {entry.saleName}
                  </span>
                  <a
                    href={affiliateUrl(entry.asin)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="border border-[#1c1a17] px-3.5 py-1.5 text-xs font-medium text-[#1c1a17] hover:bg-[#1c1a17] hover:text-[#faf8f4]"
                  >
                    Amazonでセールを見る
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-xs text-[#1c1a17]/40">
          現在セール対象であることのみを表示しています。価格・在庫はAmazonの商品ページでご確認ください。推薦リストのリサーチを進めながら、掲載数を増やしていきます。
        </p>
      </main>
    </div>
  );
}
