"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { shortName } from "@/data/recommenders";

type RecommenderItem = { name: string; count: number };

export function RecommenderListView({
  recommenders,
}: {
  recommenders: RecommenderItem[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recommenders;
    return recommenders.filter(
      (recommender) =>
        shortName(recommender.name).toLowerCase().includes(q) ||
        recommender.name.toLowerCase().includes(q),
    );
  }, [recommenders, query]);

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="recommender-search" className="sr-only">
          推薦者名で検索
        </label>
        <input
          id="recommender-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="推薦者名で検索（例：大谷翔平）"
          className="w-full border border-[#000000]/20 bg-[#ffffff] px-4 py-3 font-serif text-base text-[#000000] placeholder:text-[#000000]/40 focus:border-[#000000] focus:outline-none"
        />
        <p className="mt-2 text-xs text-[#000000]/60">{filtered.length}件</p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-[#000000]/60">
          該当する推薦者は見つかりませんでした。
        </p>
      ) : (
        <ul className="divide-y divide-[#000000]/10">
          {filtered.map((recommender) => (
            <li key={recommender.name}>
              <Link
                href={`/recommender/${encodeURIComponent(recommender.name)}`}
                className="flex items-center justify-between py-4 text-[#000000] hover:underline"
              >
                <span className="font-serif text-lg">
                  {shortName(recommender.name)}
                </span>
                <span className="text-xs text-[#000000]/60">
                  {recommender.count}件
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
