import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#000000]/10 bg-[#ffffff]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <nav className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#000000]/60">
          <Link href="/" className="underline-offset-2 hover:underline">
            ホーム
          </Link>
          <Link href="/archive" className="underline-offset-2 hover:underline">
            名著アーカイブ
          </Link>
          <Link href="/today-sale" className="underline-offset-2 hover:underline">
            本日のセール一覧
          </Link>
          <Link href="/genre" className="underline-offset-2 hover:underline">
            ジャンル一覧
          </Link>
          <Link href="/recommender" className="underline-offset-2 hover:underline">
            推薦者一覧
          </Link>
          <a href="/feed.xml" className="underline-offset-2 hover:underline">
            RSSで更新を受け取る
          </a>
        </nav>
        <p className="text-xs leading-6 text-[#000000]/50">
          読み窓91は、Amazonアソシエイト・プログラムの参加者です。このプログラムは、サイトが適格販売により収益を得ることを可能にするために設定されたアフィリエイトプログラムです。当サイトのAmazon商品リンクから購入された場合、Amazon.co.jpから紹介料を受け取ることがあります。
        </p>
        <p className="mt-3 text-xs text-[#000000]/40">
          <Link href="/disclosure" className="underline-offset-2 hover:underline">
            広告・アフィリエイトに関する詳細
          </Link>
        </p>
      </div>
    </footer>
  );
}
