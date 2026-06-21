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
    <article className="flex gap-8 py-10 first:pt-0">
      <Image
        src={entry.coverUrl}
        alt={`${entry.title}の表紙`}
        width={168}
        height={252}
        className="h-[252px] w-[168px] flex-none object-cover shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        unoptimized
      />
      <div className="flex-1">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-[#000000]/40">
            {entry.platform} ・ {entry.contentType} ／ {entry.genre}
          </span>
          {dateInsteadOfSale ? (
            <span className="text-xs text-[#000000]/40">
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
        <p className="font-serif text-lg italic text-[#000000]/80">
          {entry.hook}
        </p>
        <h3 className="mt-1 font-serif text-2xl font-bold leading-tight text-[#000000]">
          {entry.title}
        </h3>
        <p className="mt-0.5 text-sm text-[#000000]/50">{entry.author}</p>
        <p className="mt-3 text-sm leading-7 text-[#000000]/70">
          {entry.whyRead}
        </p>
        <p className="mt-3 border-l-2 border-[#000000]/15 pl-3 text-sm leading-7 text-[#000000]/70">
          {entry.recommenderStory}
        </p>
        <p className="mt-3 text-xs text-[#000000]/50">
          推薦：{entry.recommenderName}
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-1 underline underline-offset-2 hover:text-[#000000]"
          >
            （{entry.sourceLabel}）
          </a>
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#000000]/40">
            {entry.recommenderTag}
            {!dateInsteadOfSale && ` ・ ${entry.saleName}`}
          </span>
          <a
            href={affiliateUrl(entry.asin, entry.platform)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="border border-[#000000] px-3.5 py-1.5 text-xs font-medium text-[#000000] hover:bg-[#000000] hover:text-[#ffffff]"
          >
            {entry.platform}でセールを見る
          </a>
        </div>
      </div>
    </article>
  );
}
