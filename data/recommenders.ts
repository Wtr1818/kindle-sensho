import { Entry, entries } from "./entries";

export function splitRecommenderNames(recommenderName: string): string[] {
  return recommenderName
    .split(/／|\//)
    .map((name) => name.trim())
    .filter(Boolean);
}

export function getRecommenderNames(): string[] {
  const names = new Set<string>();
  for (const entry of entries) {
    if (entry.status !== "active") continue;
    for (const name of splitRecommenderNames(entry.recommenderName)) {
      names.add(name);
    }
  }
  return Array.from(names);
}

export function getEntriesByRecommender(name: string): Entry[] {
  return entries.filter(
    (entry) =>
      entry.status === "active" &&
      splitRecommenderNames(entry.recommenderName).includes(name),
  );
}
