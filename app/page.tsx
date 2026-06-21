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
  "スポーツ選手",
];

export default function Home() {
  const activeEntries = entries.filter((entry) => entry.status === "active");

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-[#000000]">
              読み窓91
            </h1>
            <Link
              href="/archive"
              className="text-sm text-[#000000]/50 underline-offset-4 hover:text-[#000000] hover:underline"
            >
              アーカイブ
            </Link>
          </div>
          <p className="mt-3 font-serif text-lg italic text-[#000000]">
            本を通して、世界を覗く窓。
          </p>
          <p className="mt-4 max-w-xl font-serif text-[15px] leading-8 text-[#000000]/70">
            Amazon KindleストアやAudibleでセール対象になっている本・ドキュメンタリーの中から、実際に著名人が薦めた作品だけを出典付きでご紹介します。セールが終わった後も読み継がれる「名著アーカイブ」を目指しています。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-14">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#000000]/40">
            RECOMMENDED BY
          </p>
          <div className="flex flex-wrap gap-3">
            {recommenderTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#000000] px-4 py-1.5 text-base font-medium text-[#000000] hover:bg-[#000000] hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#000000]/40">
          本日の推薦
        </p>

        <EntryList entries={activeEntries} />

        <div className="mt-14 border-t border-[#000000]/10 pt-8">
          <Link
            href="/today-sale"
            className="flex items-center justify-between border border-[#000000]/15 px-5 py-4 text-sm hover:border-[#000000]/40"
          >
            <span className="text-[#000000]">
              推薦の有無にかかわらず、本日のセール対象をすべて見る
            </span>
            <span className="text-[#000000]/40">→</span>
          </Link>
        </div>

        <p className="mt-8 text-xs text-[#000000]/40">
          現在セール対象であることのみを表示しています。価格・在庫はAmazon／Audibleの商品ページでご確認ください。推薦リストのリサーチを進めながら、掲載数を増やしていきます。
        </p>
      </main>
    </div>
  );
}
