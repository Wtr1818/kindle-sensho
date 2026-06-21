import Link from "next/link";
import { entries } from "@/data/entries";
import { LibraryView } from "@/components/LibraryView";

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
            経営者、文学者、映画監督、音楽アーティスト、コメディアン、料理人、スポーツ選手……実際に著名人が薦めた本・ドキュメンタリーを出典付きでご紹介します。Amazon KindleストアやAudibleでセール中の作品は一目で分かるようになっています。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <LibraryView entries={activeEntries} />

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
          価格・在庫はAmazon／Audibleの商品ページでご確認ください。推薦リストのリサーチを進めながら、掲載数を増やしていきます。
        </p>
      </main>
    </div>
  );
}
