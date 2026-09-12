import type { Metadata } from "next";
import Link from "next/link";
import { entries } from "@/data/entries";
import { FavoritesView } from "@/components/FavoritesView";

export const metadata: Metadata = {
  title: "お気に入り",
  description: "自分でお気に入りに追加した本の一覧。このブラウザだけに保存されます。",
  robots: { index: false },
};

export default function FavoritesPage() {
  const activeEntries = entries.filter((entry) => entry.status === "active");

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <Link
            href="/"
            className="text-sm text-[#000000]/60 underline-offset-4 hover:text-[#000000] hover:underline"
          >
            ← 読み窓91のライブラリへ
          </Link>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#000000]">
            お気に入り
          </h1>
          <p className="mt-3 max-w-xl font-serif text-[15px] leading-8 text-[#000000]/70">
            ハートマークを付けた本だけを一覧できます。このブラウザ・この端末だけに保存されるため、他の端末やブラウザには引き継がれません。
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <FavoritesView entries={activeEntries} />
      </main>
    </div>
  );
}
