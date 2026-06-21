import Link from "next/link";
import { dailySaleList, dailySaleUpdatedAt } from "@/data/dailySaleList";
import { SaleListView } from "@/components/SaleListView";

export default function TodaySale() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <header className="border-b border-[#1c1a17]/10">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1c1a17]">
              本日のセール対象一覧
            </h1>
            <Link
              href="/"
              className="text-sm text-[#1c1a17]/50 underline-offset-4 hover:text-[#1c1a17] hover:underline"
            >
              本日の推薦へ
            </Link>
          </div>
          <p className="mt-4 max-w-xl font-serif text-[15px] leading-8 text-[#1c1a17]/70">
            推薦の有無にかかわらず、Kindle日替わりセール対象のタイトルをすべて掲載しています。更新日：{dailySaleUpdatedAt}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <SaleListView items={dailySaleList} />
        <p className="mt-10 text-xs text-[#1c1a17]/40">
          価格・在庫はAmazonの商品ページでご確認ください。
        </p>
      </main>
    </div>
  );
}
