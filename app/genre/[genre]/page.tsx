import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EntryCard } from "@/components/EntryCard";
import { getEntriesByGenre, getGenreNames } from "@/data/genres";

export function generateStaticParams() {
  return getGenreNames().map((genre) => ({ genre }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ genre: string }>;
}): Promise<Metadata> {
  const { genre: rawGenre } = await params;
  const genre = decodeURIComponent(rawGenre);
  const title = `${genre}のおすすめ本まとめ`;
  const description = `著名人が薦めた${genre}のジャンルの本を、出典付きでまとめました。`;
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre: rawGenre } = await params;
  const genre = decodeURIComponent(rawGenre);
  const books = getEntriesByGenre(genre);
  if (books.length === 0) notFound();

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
            {genre}のおすすめ本
          </h1>
          <p className="mt-3 font-serif text-[15px] leading-8 text-[#000000]/70">
            著名人が薦めた{genre}のジャンルの本を、出典付きでまとめています。
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="divide-y divide-[#000000]/10">
          {books.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </main>
    </div>
  );
}
