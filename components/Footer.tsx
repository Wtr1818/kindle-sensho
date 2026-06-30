import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#000000]/10 bg-[#ffffff]">
      <div className="mx-auto max-w-3xl px-6 py-8">
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
