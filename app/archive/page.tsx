import Image from "next/image";
import Link from "next/link";
import { affiliateUrl, entries } from "@/data/entries";

export default function Archive() {
  const sorted = [...entries].sort((a, b) =>
    b.dateAdded.localeCompare(a.dateAdded),
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900">
              名著アーカイブ
            </h1>
            <Link
              href="/"
              className="text-sm text-zinc-500 underline-offset-2 hover:underline"
            >
              本日の推薦へ
            </Link>
          </div>
          <p className="mt-3 text-zinc-600">
            セールが終了した後も、著名人の推薦・出典とともに蓄積していくアーカイブです。Amazon Kindleストアでのセール終了後は割引表示を消し、推薦内容のみを残します。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="space-y-6">
          {sorted.map((entry) => (
            <article
              key={entry.slug}
              className="flex gap-5 rounded-xl border border-zinc-200 bg-white p-5"
            >
              <Image
                src={entry.coverUrl}
                alt={`${entry.title}の表紙`}
                width={96}
                height={144}
                className="h-36 w-24 flex-none rounded object-cover ring-1 ring-zinc-200"
                unoptimized
              />
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {entry.contentType} ・ {entry.genre}
                  </span>
                  <span className="text-xs text-zinc-400">
                    掲載日：{entry.dateAdded}
                  </span>
                </div>
                <p className="font-serif text-sm italic text-zinc-700">
                  {entry.hook}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-zinc-900">
                  {entry.title}
                </h3>
                <p className="text-sm text-zinc-500">{entry.author}</p>
                <p className="mt-2 text-sm text-zinc-600">{entry.whyRead}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  推薦：{entry.recommenderName}
                </p>
                <a
                  href={entry.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-100"
                >
                  ✓ 出典確認済み：{entry.sourceLabel}
                </a>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                    {entry.recommenderTag}
                  </span>
                  <a
                    href={affiliateUrl(entry.asin)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-700"
                  >
                    Amazonで見る
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
