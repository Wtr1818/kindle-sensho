import Link from "next/link";
import { entries } from "@/data/entries";
import { EntryList } from "@/components/EntryList";

export default function Archive() {
  const sorted = [...entries].sort((a, b) =>
    b.dateAdded.localeCompare(a.dateAdded),
  );

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <header className="border-b border-[#1c1a17]/10">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1c1a17]">
              名著アーカイブ
            </h1>
            <Link
              href="/"
              className="text-sm text-[#1c1a17]/50 underline-offset-4 hover:text-[#1c1a17] hover:underline"
            >
              本日の推薦へ
            </Link>
          </div>
          <p className="mt-4 max-w-xl font-serif text-[15px] leading-8 text-[#1c1a17]/70">
            セールが終了した後も、著名人の推薦・出典とともに蓄積していくアーカイブです。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <EntryList entries={sorted} dateInsteadOfSale />
      </main>
    </div>
  );
}
