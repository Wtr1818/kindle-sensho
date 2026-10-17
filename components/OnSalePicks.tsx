import { Entry } from "@/data/entries";
import { splitRecommenderNames } from "@/data/recommenders";
import { EntryCard } from "./EntryCard";

function primaryName(recommenderName: string): string {
  const [first] = splitRecommenderNames(recommenderName);
  return first.replace(/[（(].*$/, "").trim();
}

const HEADLINE_TITLE_MAX_LENGTH = 30;

function buildHeadline(picks: Entry[]): string {
  const names = Array.from(
    new Set(picks.map((entry) => primaryName(entry.recommenderName))),
  );
  if (picks.length === 1) {
    const { title } = picks[0];
    if (title.length <= HEADLINE_TITLE_MAX_LENGTH) {
      return `${names[0]}が薦める『${title}』`;
    }
    return `${names[0]}が薦める本`;
  }
  if (names.length === 1) {
    return `${names[0]}が薦める本`;
  }
  if (names.length === 2) {
    return `${names[0]}・${names[1]}が薦める本`;
  }
  return `${names[0]}・${names[1]}ほかが薦める本`;
}

export function OnSalePicks({ entries }: { entries: Entry[] }) {
  const picks = entries.filter((entry) => entry.onSale);
  if (picks.length === 0) return null;

  return (
    <section className="mb-14 border-2 border-[#b5402b] p-6 sm:p-8">
      <p className="text-xs font-medium tracking-[0.2em] text-[#b5402b]">
        今、セール中の推薦本
      </p>
      <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#000000]">
        {buildHeadline(picks)}
      </h2>
      <div className="mt-6 divide-y divide-[#000000]/10">
        {picks.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </section>
  );
}
