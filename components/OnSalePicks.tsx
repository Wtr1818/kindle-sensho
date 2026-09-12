import { Entry } from "@/data/entries";
import { EntryCard } from "./EntryCard";

export function OnSalePicks({ entries }: { entries: Entry[] }) {
  const picks = entries.filter((entry) => entry.onSale);
  if (picks.length === 0) return null;

  return (
    <section className="mb-14 border-2 border-[#b5402b] p-6 sm:p-8">
      <p className="text-xs font-medium tracking-[0.2em] text-[#b5402b]">
        今、セール中の推薦本
      </p>
      <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#000000]">
        価格が下がっていて、なおかつ著名人が薦めている本
      </h2>
      <div className="mt-6 divide-y divide-[#000000]/10">
        {picks.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </section>
  );
}
