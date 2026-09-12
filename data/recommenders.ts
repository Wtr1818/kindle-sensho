import { Entry, entries } from "./entries";

export function splitRecommenderNames(recommenderName: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of recommenderName) {
    if (ch === "（" || ch === "(") depth++;
    else if (ch === "）" || ch === ")") depth = Math.max(0, depth - 1);
    if ((ch === "／" || ch === "/") && depth === 0) {
      parts.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  parts.push(current);
  return parts.map((name) => name.trim()).filter(Boolean);
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

export function shortName(name: string): string {
  return name.replace(/\s*[（(][^）)]*[）)]\s*$/, "").trim();
}
