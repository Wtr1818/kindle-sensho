import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entries, affiliateUrl } from "@/data/entries";
import { EntryCard } from "@/components/EntryCard";

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
  const title = `${entry.recommenderName}が薦める『${entry.title}』`;
  const description = `${entry.hook}。${entry.whyRead}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
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

  const jsonLd = {
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
  };

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
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
