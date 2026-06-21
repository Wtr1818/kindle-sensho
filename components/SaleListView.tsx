"use client";

import { useMemo, useState } from "react";
import { SaleListItem } from "@/data/dailySaleList";

function formatEndsAt(saleEndsAt?: string): string {
  if (!saleEndsAt) return "終了日不明";
  const d = new Date(`${saleEndsAt}T00:00:00+09:00`);
  return `${d.getMonth() + 1}月${d.getDate()}日まで`;
}

function daysUntil(saleEndsAt?: string): number {
  if (!saleEndsAt) return Infinity;
  const today = new Date(`${saleEndsAt}T00:00:00+09:00`);
  return Math.ceil((today.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

export function SaleListView({ items }: { items: SaleListItem[] }) {
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [sortByEnding, setSortByEnding] = useState(false);

  const genres = useMemo(
    () => Array.from(new Set(items.map((item) => item.genre))),
    [items],
  );

  const filtered = useMemo(() => {
    let list = activeGenre
      ? items.filter((item) => item.genre === activeGenre)
      : items;
    if (sortByEnding) {
      list = [...list].sort(
        (a, b) => daysUntil(a.saleEndsAt) - daysUntil(b.saleEndsAt),
      );
    }
    return list;
  }, [items, activeGenre, sortByEnding]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveGenre(null)}
          className={
            activeGenre === null
              ? "border border-[#1c1a17] bg-[#1c1a17] px-3 py-1.5 text-xs font-medium text-[#faf8f4]"
              : "border border-[#1c1a17]/20 px-3 py-1.5 text-xs font-medium text-[#1c1a17]/60 hover:border-[#1c1a17]/40"
          }
        >
          すべて
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={
              activeGenre === genre
                ? "border border-[#1c1a17] bg-[#1c1a17] px-3 py-1.5 text-xs font-medium text-[#faf8f4]"
                : "border border-[#1c1a17]/20 px-3 py-1.5 text-xs font-medium text-[#1c1a17]/60 hover:border-[#1c1a17]/40"
            }
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs text-[#1c1a17]/40">{filtered.length}件</span>
        <button
          onClick={() => setSortByEnding((v) => !v)}
          className={
            sortByEnding
              ? "border border-[#b5402b] bg-[#b5402b] px-3 py-1.5 text-xs font-medium text-white"
              : "border border-[#1c1a17]/20 px-3 py-1.5 text-xs font-medium text-[#1c1a17]/60 hover:border-[#1c1a17]/40"
          }
        >
          終了が近い順に並べる
        </button>
      </div>

      <ul className="divide-y divide-[#1c1a17]/10">
        {filtered.map((item) => (
          <li
            key={item.title}
            className="flex items-center justify-between gap-4 py-4"
          >
            <div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-sm font-medium text-[#1c1a17] underline-offset-2 hover:underline"
              >
                {item.title}
              </a>
              {item.author && (
                <span className="ml-2 text-xs text-[#1c1a17]/50">
                  {item.author}
                </span>
              )}
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-[#1c1a17]/40">
                  {item.genre}
                </span>
                <span className="text-xs text-[#1c1a17]/40">・</span>
                <span className="text-xs text-[#1c1a17]/40">
                  {item.saleName}
                </span>
              </div>
            </div>
            <span className="flex-none bg-[#b5402b]/10 px-2 py-1 text-xs font-medium text-[#b5402b]">
              {formatEndsAt(item.saleEndsAt)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
