import { Entry, entries } from "./entries";

export const GENRES = [
  "小説",
  "ビジネス・経済",
  "自己啓発",
  "古典",
  "エッセイ",
  "絵本",
  "伝記",
  "ノンフィクション",
  "新書",
] as const;

export type Genre = (typeof GENRES)[number];

export function getGenreNames(): string[] {
  const names = new Set<string>();
  for (const entry of entries) {
    if (entry.status === "active") names.add(entry.genre);
  }
  return Array.from(names);
}

export function getEntriesByGenre(genre: string): Entry[] {
  return entries.filter(
    (entry) => entry.status === "active" && entry.genre === genre,
  );
}
