import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EntryCard } from "@/components/EntryCard";
import {
  getEntriesByRecommender,
  getRecommenderNames,
} from "@/data/recommenders";

export function generateStaticParams() {
  return getRecommenderNames().map((name) => ({ name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name: rawName } = await params;
  const name = decodeURIComponent(rawName);
  const title = `${name}のおすすめ本まとめ`;
  const description = `${name}が実際に薦めた本を、出典付きでまとめました。`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://yomimado91.com/recommender/${encodeURIComponent(name)}`,
    },
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function RecommenderPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name: rawName } = await params;
  const name = decodeURIComponent(rawName);
  const books = getEntriesByRecommender(name);
  if (books.length === 0) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${name}のおすすめ本`,
    itemListElement: books.map((book, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://yomimado91.com/book/${book.slug}`,
      name: book.title,
    })),
  };

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
            {name}のおすすめ本
          </h1>
          <p className="mt-3 font-serif text-[15px] leading-8 text-[#000000]/70">
            {name}が実際に薦めた本を、出典付きでまとめています。
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
