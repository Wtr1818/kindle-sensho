"use client";

import { useMemo, useState } from "react";
import { Entry } from "@/data/entries";
import { EntryCard } from "./EntryCard";

const RECOMMENDER_TAGS = [
  "経営者・起業家",
  "文学・小説家",
  "映画監督・俳優",
  "音楽アーティスト",
  "芸人・コメディアン",
  "料理人",
  "スポーツ選手",
];

export function LibraryView({ entries }: { entries: Entry[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [saleOnly, setSaleOnly] = useState(false);

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      if (saleOnly && !entry.onSale) return false;
      if (activeTag && !entry.recommenderTag.includes(activeTag)) return false;
      return true;
    });
  }, [entries, activeTag, saleOnly]);

  return (
    <div>
      <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#000000]/40">
        RECOMMENDED BY
      </p>
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTag(null)}
          className={
            activeTag === null
              ? "rounded-full border border-[#000000] bg-[#000000] px-4 py-1.5 text-base font-medium text-white"
              : "rounded-full border border-[#000000] px-4 py-1.5 text-base font-medium text-[#000000] hover:bg-[#000000] hover:text-white"
          }
        >
          すべて
        </button>
        {RECOMMENDER_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={
              activeTag === tag
                ? "rounded-full border border-[#000000] bg-[#000000] px-4 py-1.5 text-base font-medium text-white"
                : "rounded-full border border-[#000000] px-4 py-1.5 text-base font-medium text-[#000000] hover:bg-[#000000] hover:text-white"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between border-t border-[#000000]/10 pt-6">
        <p className="text-xs font-medium tracking-[0.2em] text-[#000000]/40">
          {filtered.length}件
        </p>
        <button
          onClick={() => setSaleOnly((v) => !v)}
          className={
            saleOnly
              ? "border border-[#b5402b] bg-[#b5402b] px-3.5 py-1.5 text-xs font-medium text-white"
              : "border border-[#000000]/20 px-3.5 py-1.5 text-xs font-medium text-[#000000]/60 hover:border-[#000000]/40"
          }
        >
          Kindleセール中のみ表示
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-[#000000]/50">
          該当する推薦は見つかりませんでした。
        </p>
      ) : (
        <div className="divide-y divide-[#000000]/10">
          {filtered.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
