import type { Metadata } from "next";
import Link from "next/link";
import { GENRES, getEntriesByGenre, getGenreNames } from "@/data/genres";

const BASE_URL = "https://yomimado91.com";

export const metadata: Metadata = {
  title: "ジャンル一覧",
  description: "読み窓91に掲載中の本を、ジャンル別に一覧できます。",
  alternates: {
    canonical: `${BASE_URL}/genre`,
  },
};

export default function GenreIndexPage() {
  const activeNames = new Set(getGenreNames());
  const genres = GENRES.filter((genre) => activeNames.has(genre)).map(
    (genre) => ({
      name: genre,
      count: getEntriesByGenre(genre).length,
    }),
  );

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/"
            className="text-sm text-[#000000]/50 underline-offset-4 hover:text-[#000000] hover:underline"
          >
            ← 読み窓91のライブラリへ
          </Link>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#000000]">
            ジャンル一覧
          </h1>
          <p className="mt-3 font-serif text-[15px] leading-8 text-[#000000]/70">
            掲載中の本を、ジャンル別に一覧できます。
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <ul className="divide-y divide-[#000000]/10">
          {genres.map((genre) => (
            <li key={genre.name}>
              <Link
                href={`/genre/${encodeURIComponent(genre.name)}`}
                className="flex items-center justify-between py-4 text-[#000000] hover:underline"
              >
                <span className="font-serif text-lg">{genre.name}</span>
                <span className="text-xs text-[#000000]/40">
                  {genre.count}件
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
