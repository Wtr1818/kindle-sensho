export type Entry = {
  slug: string;
  title: string;
  author: string;
  asin: string;
  contentType: "本" | "ドキュメンタリー";
  genre: string;
  coverUrl: string;
  hook: string;
  whyRead: string;
  recommenderName: string;
  recommenderTag: string;
  sourceLabel: string;
  sourceUrl: string;
  regularPrice: number;
  salePrice: number;
  discountPercent: number;
  status: "active" | "archived";
  saleEndsLabel?: string;
  dateAdded: string;
};

const AFFILIATE_TAG = "yomimado91-22";

export function affiliateUrl(asin: string): string {
  return `https://www.amazon.co.jp/dp/${asin}/?tag=${AFFILIATE_TAG}`;
}

export const entries: Entry[] = [
  {
    slug: "innovators-dilemma",
    title: "イノベーションのジレンマ 増補改訂版",
    author: "クレイトン・クリステンセン",
    asin: "B009ILGWS6",
    contentType: "本",
    genre: "ビジネス・経済",
    coverUrl: "https://covers.openlibrary.org/b/isbn/0875845851-L.jpg",
    hook: "Amazon幹部合宿の必読書に選ばれた経営理論",
    whyRead:
      "優良企業が新興企業に市場を奪われる構造を解明した一冊。Amazonの事業判断の土台になった理論として知られる。",
    recommenderName: "ジェフ・ベゾス（Amazon創業者）",
    recommenderTag: "経営者・起業家",
    sourceLabel:
      "Amazon幹部との合宿で必読書として扱われていることが複数のビジネスメディアで報じられている",
    sourceUrl: "https://www.businessinsider.jp/post-241878",
    regularPrice: 2640,
    salePrice: 1320,
    discountPercent: 50,
    status: "active",
    saleEndsLabel: "本日23:59まで（Amazon Kindleストア調べ）",
    dateAdded: "2026-06-21",
  },
];
