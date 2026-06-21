import Link from "next/link";
import { entries } from "@/data/entries";
import { EntryList } from "@/components/EntryList";

const recommenderTags = [
  "経営者・起業家",
  "文学・小説家",
  "映画監督・俳優",
  "音楽アーティスト",
  "芸人・コメディアン",
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
            Amazon KindleストアやAudibleでセール対象になっている本・ドキュメンタリーの中から、実際に著名人が薦めた作品だけを出典付きでご紹介します。セールが終わった後も読み継がれる「名著アーカイブ」を目指しています。
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

        <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#1c1a17]/40">
          本日の推薦
        </p>

        <EntryList entries={activeEntries} />

        <p className="mt-14 text-xs text-[#1c1a17]/40">
          現在セール対象であることのみを表示しています。価格・在庫はAmazon／Audibleの商品ページでご確認ください。推薦リストのリサーチを進めながら、掲載数を増やしていきます。
        </p>
      </main>
    </div>
  );
}
