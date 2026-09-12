"use client";

import { useEffect, useState } from "react";
import { Entry } from "@/data/entries";
import { EntryCard } from "./EntryCard";
import { getFavoriteSlugs, subscribeFavoritesChanged } from "@/lib/favorites";

export function FavoritesView({ entries }: { entries: Entry[] }) {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[] | null>(null);

  useEffect(() => {
    const sync = () => setFavoriteSlugs(getFavoriteSlugs());
    sync();
    return subscribeFavoritesChanged(sync);
  }, []);

  if (favoriteSlugs === null) {
    return null;
  }

  const favorites = entries.filter((entry) => favoriteSlugs.includes(entry.slug));

  if (favorites.length === 0) {
    return (
      <p className="text-sm text-[#000000]/60">
        まだお気に入りはありません。書影の右上にあるハートマークをタップすると追加できます。
      </p>
    );
  }

  return (
    <div>
      <p className="mb-6 text-xs font-medium tracking-[0.2em] text-[#000000]/40">
        {favorites.length}件
      </p>
      <div className="divide-y divide-[#000000]/10">
        {favorites.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
