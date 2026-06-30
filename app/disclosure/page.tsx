import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "広告・アフィリエイトに関する開示",
  description: "読み窓91のアフィリエイトプログラム参加に関する開示事項です。",
};

export default function DisclosurePage() {
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
            広告・アフィリエイトに関する開示
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-6 text-sm leading-8 text-[#000000]/80">
          <p>
            読み窓91（yomimado91.com、以下「当サイト」）は、Amazon.co.jpを宣伝しリンクすることによって紹介料を獲得できる手段を提供することを目的に設定された、Amazonアソシエイト・プログラムの参加者です。
          </p>
          <p>
            当サイトに掲載されている書籍・コンテンツへのリンクの一部は、Amazonアソシエイトのアフィリエイトリンクです。これらのリンクを経由してAmazon.co.jpで商品が購入された場合、当サイトはAmazon.co.jpから紹介料を受け取ります。これによる読者側の追加費用は発生しません。
          </p>
          <p>
            当サイトは、実際に著名人が薦めたと出典付きで確認できる書籍・コンテンツのみを掲載する編集方針を取っています。アフィリエイト収益の有無は、掲載する作品の選定や評価に影響しません。
          </p>
          <p>
            ご不明な点がございましたら、当サイトを通じてお問い合わせください。
          </p>
        </div>
      </main>
    </div>
  );
}
