export type Platform = "Kindle" | "Audible";

export type Entry = {
  slug: string;
  title: string;
  author: string;
  asin: string;
  platform: Platform;
  contentType: "本" | "ドキュメンタリー";
  genre: string;
  coverUrl: string;
  hook: string;
  whyRead: string;
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
    coverUrl: "https://covers.openlibrary.org/b/isbn/0451524934-L.jpg",
    hook: "BTSのRMが好んで再読する一冊",
    whyRead:
      "監視社会と思考統制を描いたディストピア小説の代表作。時代を超えて読み継がれる一冊として、自由とは何かを問い直させる。",
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
