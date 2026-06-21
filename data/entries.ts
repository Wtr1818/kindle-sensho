export type Platform = "Kindle" | "Audible";

export type Entry = {
  slug: string;
  title: string;
  author: string;
  asin: string;
  platform: Platform;
  contentType: "本" | "ドキュメンタリー";
  genre: string;
  coverUrl?: string;
  hook: string;
  whyRead: string;
  recommenderStory: string;
  recommenderName: string;
  recommenderTag: string;
  sourceLabel: string;
  sourceUrl: string;
  saleName: string;
  status: "active" | "archived";
  saleEndsLabel?: string;
  dateAdded: string;
};

const AFFILIATE_TAG = "yomimado91-22";

export function affiliateUrl(asin: string, platform: Platform = "Kindle"): string {
  if (platform === "Audible") {
    return `https://www.audible.co.jp/pd/${asin}?tag=${AFFILIATE_TAG}`;
  }
  return `https://www.amazon.co.jp/dp/${asin}/?tag=${AFFILIATE_TAG}`;
}

export const entries: Entry[] = [
  {
    slug: "1984",
    title: "一九八四年",
    author: "ジョージ・オーウェル（高橋和久 訳）",
    asin: "B009DEMC8W",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "BTSのRMが何度も読み返し、メンバーにも広がった一冊",
    whyRead:
      "監視社会と思考統制を描いたディストピア小説の代表作。時代を超えて読み継がれる一冊として、自由とは何かを問い直させる。",
    recommenderStory:
      "RMは2017年のインタビューで「読み返したくなる本」として本作を挙げている。さらにリアリティ番組『In the SOOP』では、RMが本作を読む場面が放送され、その後SUGA・j-hopeも同作を手に取る様子が映った。一人の愛読書から他メンバーへ伝播していった点が、単なる「好きな本」以上の存在感を物語っている。",
    recommenderName: "RM（BTSリーダー、Kim Namjoon）",
    recommenderTag: "音楽アーティスト",
    sourceLabel:
      "本人が好んで再読する作品として複数のメディア・ファンサイトで紹介されている",
    sourceUrl: "https://www.buzzfeed.com/kagrawal/books-rm-of-bts-has-read-or-recommended",
    saleName: "早川書房 夏の超大セール 第1弾",
    status: "active",
    saleEndsLabel: "7月13日まで",
    dateAdded: "2026-06-21",
  },
];
