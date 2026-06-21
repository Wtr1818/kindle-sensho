"use client";

import { useState } from "react";
import { Entry, Platform } from "@/data/entries";
import { EntryCard } from "./EntryCard";

const FILTERS: { label: string; value: Platform | "all" }[] = [
  { label: "すべて", value: "all" },
  { label: "Kindle", value: "Kindle" },
  { label: "Audible", value: "Audible" },
];

export function EntryList({
  entries,
  dateInsteadOfSale = false,
}: {
  entries: Entry[];
  dateInsteadOfSale?: boolean;
}) {
  const [filter, setFilter] = useState<Platform | "all">("all");
  const filtered = entries.filter(
    (entry) => filter === "all" || entry.platform === filter,
  );

  return (
    <div>
      <div className="mb-8 flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={
              filter === f.value
                ? "border border-[#1c1a17] bg-[#1c1a17] px-3.5 py-1.5 text-xs font-medium text-[#faf8f4]"
                : "border border-[#1c1a17]/20 px-3.5 py-1.5 text-xs font-medium text-[#1c1a17]/60 hover:border-[#1c1a17]/40"
            }
          >
            {f.label}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-[#1c1a17]/50">
          このプラットフォームの掲載はまだありません。
        </p>
      ) : (
        <div className="divide-y divide-[#1c1a17]/10">
          {filtered.map((entry) => (
            <EntryCard
              key={entry.slug}
              entry={entry}
              dateInsteadOfSale={dateInsteadOfSale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
