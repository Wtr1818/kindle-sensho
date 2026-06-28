import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entries } from "@/data/entries";
import { EntryCard } from "@/components/EntryCard";
import {
  getEntriesByRecommender,
  shortName,
  splitRecommenderNames,
} from "@/data/recommenders";
import { getEntriesByGenre } from "@/data/genres";

const BASE_URL = "https://yomimado91.com";

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

function findEntry(slug: string) {
  return entries.find((entry) => entry.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const recommender = shortName(splitRecommenderNames(entry.recommenderName)[0]);
  const title = `${recommender}が薦める『${entry.title}』`;
  const description = `${entry.hook}。${entry.whyRead}`;
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/book/${entry.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${BASE_URL}/book/${entry.slug}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();

  const recommenderNames = splitRecommenderNames(entry.recommenderName);
  const sameRecommender = getEntriesByRecommender(recommenderNames[0]).filter(
    (e) => e.slug !== entry.slug,
  );
  const sameGenre = getEntriesByGenre(entry.genre).filter(
    (e) => e.slug !== entry.slug && !sameRecommender.includes(e),
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: entry.title,
      author: { "@type": "Person", name: entry.author },
      genre: entry.genre,
      review: {
        "@type": "Review",
        author: { "@type": "Person", name: entry.recommenderName },
        reviewBody: entry.detailedStory ?? entry.recommenderStory,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "読み窓91", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: entry.genre,
          item: `${BASE_URL}/genre/${encodeURIComponent(entry.genre)}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: entry.title,
          item: `${BASE_URL}/book/${entry.slug}`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <Link
            href="/"
            className="text-sm text-[#000000]/50 underline-offset-4 hover:text-[#000000] hover:underline"
          >
            ← 読み窓91のライブラリへ
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-10">
        <EntryCard entry={entry} />
        {entry.detailedStory && (
          <section className="mt-4 border-t border-[#000000]/10 pt-8">
            <h2 className="font-serif text-xl font-bold text-[#000000]">
              推薦の馴れ初め
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#000000]/80">
              {entry.detailedStory}
            </p>
          </section>
        )}
        <p className="mt-8 text-xs text-[#000000]/40">
          価格・在庫はAmazonの商品ページでご確認ください。
        </p>

        {sameRecommender.length > 0 && (
          <section className="mt-10 border-t border-[#000000]/10 pt-8">
            <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-[#000000]/40">
              {shortName(recommenderNames[0])}の他のおすすめ本
            </h2>
            <ul className="space-y-2">
              {sameRecommender.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/book/${e.slug}`}
                    className="text-sm text-[#000000] underline-offset-2 hover:underline"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {sameGenre.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-[#000000]/40">
              {entry.genre}の他のおすすめ本
            </h2>
            <ul className="space-y-2">
              {sameGenre.slice(0, 5).map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/book/${e.slug}`}
                    className="text-sm text-[#000000] underline-offset-2 hover:underline"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
