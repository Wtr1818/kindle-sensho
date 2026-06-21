import Link from "next/link";
import { dailySaleList, dailySaleUpdatedAt } from "@/data/dailySaleList";
import { SaleListView } from "@/components/SaleListView";

export default function TodaySale() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b-2 border-[#000000]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-[#000000]">
              本日のセール対象一覧
            </h1>
            <Link
              href="/"
              className="text-sm text-[#000000]/50 underline-offset-4 hover:text-[#000000] hover:underline"
            >
              本日の推薦へ
            </Link>
          </div>
          <p className="mt-4 max-w-xl font-serif text-[15px] leading-8 text-[#000000]/70">
            推薦の有無にかかわらず、Kindle日替わりセール対象のタイトルをすべて掲載しています。更新日：{dailySaleUpdatedAt}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <SaleListView items={dailySaleList} />
        <p className="mt-10 text-xs text-[#000000]/40">
          価格・在庫はAmazonの商品ページでご確認ください。
        </p>
      </main>
    </div>
  );
}
