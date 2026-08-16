import Image from "next/image";
import Link from "next/link";
import { Entry, affiliateUrl } from "@/data/entries";
import { splitRecommenderNames } from "@/data/recommenders";
import { CoverPlaceholder } from "./CoverPlaceholder";

export function EntryCard({
  entry,
  showSaleBadge = true,
  dateInsteadOfSale = false,
  titleAs = "h2",
  showDetailLink = true,
}: {
  entry: Entry;
  showSaleBadge?: boolean;
  dateInsteadOfSale?: boolean;
  titleAs?: "h1" | "h2";
  showDetailLink?: boolean;
}) {
  const TitleTag = titleAs;
  const amazonHref = affiliateUrl(entry.asin, entry.platform);
  return (
    <article className="flex flex-col gap-4 py-10 first:pt-0 sm:flex-row sm:gap-8">
      <a
        href={amazonHref}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="flex-none"
        aria-label={`${entry.title}をAmazonで見る`}
      >
        {entry.coverUrl ? (
          <Image
            src={entry.coverUrl}
            alt={`${entry.title}の表紙`}
            width={168}
            height={252}
            className="h-[252px] w-[168px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
            unoptimized
          />
        ) : (
          <CoverPlaceholder title={entry.title} author={entry.author} />
        )}
      </a>
      <div className="flex-1">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-[#000000]/40">
            {entry.platform} ・ {entry.contentType} ／{" "}
            <Link
              href={`/genre/${encodeURIComponent(entry.genre)}`}
              className="hover:underline"
            >
              {entry.genre}
            </Link>
          </span>
          {dateInsteadOfSale ? (
            <span className="text-xs text-[#000000]/40">
              掲載日：{entry.dateAdded}
            </span>
          ) : entry.onSale && showSaleBadge ? (
            <span className="bg-[#b5402b] px-2.5 py-1 text-xs font-medium text-white">
              {entry.saleEndsLabel ?? "セール中"}
            </span>
          ) : (
            <span className="text-xs text-[#000000]/30">セール対象外</span>
          )}
        </div>
        <p className="font-serif text-lg italic text-[#000000]/80">
          {entry.hook}
        </p>
        <TitleTag className="mt-1 font-serif text-2xl font-bold leading-tight text-[#000000]">
          <a
            href={amazonHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="hover:underline"
          >
            {entry.title}
          </a>
        </TitleTag>
        <p className="mt-0.5 text-sm text-[#000000]/50">{entry.author}</p>
        <p className="mt-3 text-sm leading-7 text-[#000000]/70">
          {entry.whyRead}
        </p>
        <p className="mt-3 border-l-2 border-[#000000]/15 pl-3 text-sm leading-7 text-[#000000]/70">
          {entry.recommenderStory}
        </p>
        <p className="mt-3 text-xs text-[#000000]/50">
          推薦：
          {splitRecommenderNames(entry.recommenderName).map((name, i) => (
            <span key={name}>
              {i > 0 && " ／ "}
              <Link
                href={`/recommender/${encodeURIComponent(name)}`}
                className="underline-offset-2 hover:underline"
              >
                {name}
              </Link>
            </span>
          ))}
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-1 underline underline-offset-2 hover:text-[#000000]"
          >
            （{entry.sourceLabel}）
          </a>
        </p>
        {showDetailLink && (
          <Link
            href={`/book/${entry.slug}`}
            className="mt-3 inline-flex w-fit items-center gap-1.5 border border-[#000000]/30 px-3.5 py-1.5 text-xs font-medium text-[#000000] transition hover:border-[#000000] hover:bg-[#000000] hover:text-white"
          >
            推薦エピソードを読む
            <span aria-hidden="true">→</span>
          </Link>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-3">
          <span className="text-xs text-[#000000]/40">
            {entry.recommenderTag}
            {!dateInsteadOfSale && entry.onSale && entry.saleName
              ? ` ・ ${entry.saleName}`
              : ""}
          </span>
          <a
            href={amazonHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full border-2 border-[#b5402b] bg-[#b5402b] px-6 py-3 text-center text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
          >
            {entry.onSale ? `${entry.platform}でセールを見る` : `${entry.platform}で見る`}
          </a>
        </div>
      </div>
    </article>
  );
}
