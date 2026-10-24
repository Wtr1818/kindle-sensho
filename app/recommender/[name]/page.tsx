import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EntryCard } from "@/components/EntryCard";
import {
  getEntriesByRecommender,
  getRecommenderNames,
  shortName,
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
  const title = `${name}のおすすめ本・推薦本まとめ`;
  const description = `${name}が実際に推薦・おすすめした本を、発言の出典付きでまとめました。`;
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

  const display = shortName(name);
  const titleList = books.map((b) => b.title);
  const titleListLabel =
    titleList.length > 5
      ? `${titleList.slice(0, 5).join("、")}など${titleList.length}冊`
      : titleList.join("、");
  const faqItems = [
    {
      question: `${display}のおすすめ本は？`,
      answer: `${display}は${titleListLabel}を推薦しています。`,
    },
    {
      question: `${display}が本当に薦めた本かどうかはどこで確認できますか？`,
      answer: `各タイトルのページに、${display}が実際に発言・言及したインタビューや記事などの出典元リンクを掲載しています。`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${name}のおすすめ本`,
      about: { "@type": "Person", name: display },
      itemListElement: books.map((book, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://yomimado91.com/book/${book.slug}`,
        name: book.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/"
            className="text-sm text-[#000000]/60 underline-offset-4 hover:text-[#000000] hover:underline"
          >
            ← 読み窓91のライブラリへ
          </Link>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#000000]">
            {display}のおすすめ本・推薦本
          </h1>
          <p className="mt-3 font-serif text-[15px] leading-8 text-[#000000]/70">
            {name}が実際に推薦・おすすめした本を、出典付きでまとめています。
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="divide-y divide-[#000000]/10">
          {books.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
        <section className="mt-10 border-t border-[#000000]/10 pt-8">
          <h2 className="font-serif text-xl font-bold text-[#000000]">
            よくある質問
          </h2>
          <dl className="mt-4 space-y-6">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="text-sm font-bold text-[#000000]">
                  Q. {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-[#000000]/80">
                  A. {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
