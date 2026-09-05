import type { Metadata } from "next";
import Link from "next/link";
import {
  getEntriesByRecommender,
  getRecommenderNames,
  shortName,
} from "@/data/recommenders";

const BASE_URL = "https://yomimado91.com";

export const metadata: Metadata = {
  title: "推薦者一覧",
  description: "読み窓91で本を推薦している著名人を一覧できます。",
  alternates: {
    canonical: `${BASE_URL}/recommender`,
  },
};

export default function RecommenderIndexPage() {
  const recommenders = getRecommenderNames()
    .map((name) => ({
      name,
      count: getEntriesByRecommender(name).length,
    }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return shortName(a.name).localeCompare(shortName(b.name), "ja");
    });

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/"
            className="text-sm text-[#000000]/60 underline-offset-4 hover:text-[#000000] hover:underline"
          >
            ← 読み窓91のライブラリへ
          </Link>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#000000]">
            推薦者一覧
          </h1>
          <p className="mt-3 font-serif text-[15px] leading-8 text-[#000000]/70">
            実際に本を推薦している著名人を一覧できます。
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <ul className="divide-y divide-[#000000]/10">
          {recommenders.map((recommender) => (
            <li key={recommender.name}>
              <Link
                href={`/recommender/${encodeURIComponent(recommender.name)}`}
                className="flex items-center justify-between py-4 text-[#000000] hover:underline"
              >
                <span className="font-serif text-lg">
                  {shortName(recommender.name)}
                </span>
                <span className="text-xs text-[#000000]/40">
                  {recommender.count}件
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
