import Image from "next/image";
import { Entry, affiliateUrl } from "@/data/entries";

export function EntryCard({
  entry,
  showSaleBadge = true,
  dateInsteadOfSale = false,
}: {
  entry: Entry;
  showSaleBadge?: boolean;
  dateInsteadOfSale?: boolean;
}) {
  return (
    <article className="flex gap-6 py-8 first:pt-0">
      <Image
        src={entry.coverUrl}
        alt={`${entry.title}の表紙`}
        width={104}
        height={156}
        className="h-[156px] w-[104px] flex-none object-cover shadow-[0_1px_3px_rgba(28,26,23,0.15)]"
        unoptimized
      />
      <div className="flex-1">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-[#1c1a17]/40">
            {entry.platform} ・ {entry.contentType} ／ {entry.genre}
          </span>
          {dateInsteadOfSale ? (
            <span className="text-xs text-[#1c1a17]/40">
              掲載日：{entry.dateAdded}
            </span>
          ) : (
            showSaleBadge &&
            entry.saleEndsLabel && (
              <span className="bg-[#b5402b] px-2.5 py-1 text-xs font-medium text-white">
                {entry.saleEndsLabel}
              </span>
            )
          )}
        </div>
        <p className="font-serif text-base italic text-[#1c1a17]/80">
          {entry.hook}
        </p>
        <h3 className="mt-1 font-serif text-xl font-bold text-[#1c1a17]">
          {entry.title}
        </h3>
        <p className="mt-0.5 text-sm text-[#1c1a17]/50">{entry.author}</p>
        <p className="mt-3 text-sm leading-7 text-[#1c1a17]/70">
          {entry.whyRead}
        </p>
        <p className="mt-3 text-xs text-[#1c1a17]/50">
          推薦：{entry.recommenderName}
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-1 underline underline-offset-2 hover:text-[#1c1a17]"
          >
            （{entry.sourceLabel}）
          </a>
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#1c1a17]/40">
            {entry.recommenderTag}
            {!dateInsteadOfSale && ` ・ ${entry.saleName}`}
          </span>
          <a
            href={affiliateUrl(entry.asin, entry.platform)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="border border-[#1c1a17] px-3.5 py-1.5 text-xs font-medium text-[#1c1a17] hover:bg-[#1c1a17] hover:text-[#faf8f4]"
          >
            {entry.platform}でセールを見る
          </a>
        </div>
      </div>
    </article>
  );
}
