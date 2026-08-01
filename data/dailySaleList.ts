import { Genre } from "./genres";

export type SaleListItem = {
  title: string;
  author?: string;
  asin?: string;
  link: string;
  saleName: string;
  genre: Genre | string;
  saleEndsAt?: string;
};

export const dailySaleUpdatedAt = "2026-08-01";

export const dailySaleList: SaleListItem[] = [
  {
    title: "借金２０００万円を抱えた僕にドＳの宇宙さんが教えてくれた超うまくいく口ぐせ",
    author: "小池浩",
    asin: "B01M04VH58",
    link: "https://www.amazon.co.jp/dp/B01M04VH58/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "自己啓発",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "時計仕掛けのりんご",
    author: "手塚治虫",
    asin: "B00JPXEQJE",
    link: "https://www.amazon.co.jp/dp/B00JPXEQJE/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "小説",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "アドルフに告ぐ　1",
    author: "手塚治虫",
    asin: "B00JPXEVE4",
    link: "https://www.amazon.co.jp/dp/B00JPXEVE4/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "小説",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "空気の底",
    author: "手塚治虫",
    asin: "B00JPXEQMQ",
    link: "https://www.amazon.co.jp/dp/B00JPXEQMQ/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "小説",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "運動脳",
    author: "アンデシュ・ハンセン、御舩由美子",
    asin: "B0BB1N1YMB",
    link: "https://www.amazon.co.jp/dp/B0BB1N1YMB/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "ノンフィクション",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "超コミュ力",
    author: "田村淳",
    asin: "B0CCN6ZMLK",
    link: "https://www.amazon.co.jp/dp/B0CCN6ZMLK/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "自己啓発",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "頭が冴える！　毎日が充実する！　スゴい早起き",
    author: "塚本亮",
    asin: "B07KWLFXX1",
    link: "https://www.amazon.co.jp/dp/B07KWLFXX1/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "自己啓発",
    saleEndsAt: "2026-08-06",
  },
  {
    title: "今さら聞けない！政治のキホンが２時間で全部頭に入る",
    author: "馬屋原吉博",
    asin: "B07HQ58BLM",
    link: "https://www.amazon.co.jp/dp/B07HQ58BLM/?tag=yomimado91-22",
    saleName: "Kindleストア サマーセール第1弾",
    genre: "新書",
    saleEndsAt: "2026-08-06",
  },
];
