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

export const dailySaleUpdatedAt = "2026-06-22";

export const dailySaleList: SaleListItem[] = [
  {
    title: "一九八四年",
    author: "ジョージ・オーウェル",
    asin: "B009DEMC8W",
    link: "https://www.amazon.co.jp/dp/B009DEMC8W/?tag=yomimado91-22",
    saleName: "早川書房 夏の超大セール 第1弾",
    genre: "古典",
    saleEndsAt: "2026-07-13",
  },
  {
    title: "動物農場〔新訳版〕",
    author: "ジョージ・オーウェル",
    asin: "B0CWKW8T5W",
    link: "https://www.amazon.co.jp/dp/B0CWKW8T5W/?tag=yomimado91-22",
    saleName: "早川書房 夏の超大セール 第1弾",
    genre: "古典",
    saleEndsAt: "2026-07-13",
  },
  {
    title: "スノウ・クラッシュ〔新版〕 上",
    author: "ニール・スティーヴンスン",
    asin: "B09Q8DB3TG",
    link: "https://www.amazon.co.jp/dp/B09Q8DB3TG/?tag=yomimado91-22",
    saleName: "早川書房 夏の超大セール 第1弾",
    genre: "小説",
    saleEndsAt: "2026-07-13",
  },
  {
    title: "真・大日本帝国軍 陸海統合の嵐2 ハワイ南方海戦",
    author: "羅門祐人",
    asin: "B00EN9IUBK",
    link: "https://www.amazon.co.jp/dp/B00EN9IUBK/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "小説",
    saleEndsAt: "2026-06-22",
  },
  {
    title: "３年で辞めた若者はどこへ行ったのか――アウトサイダーの時代",
    author: "城繁幸",
    asin: "B00HPPKAYO",
    link: "https://www.amazon.co.jp/dp/B00HPPKAYO/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "新書",
    saleEndsAt: "2026-06-22",
  },
  {
    title: "皮膚という「脳」 心をあやつる神秘の機能",
    author: "山口創",
    asin: "B00UTAVOLU",
    link: "https://www.amazon.co.jp/dp/B00UTAVOLU/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "ノンフィクション",
    saleEndsAt: "2026-06-22",
  },
  {
    title: "私の東京地図",
    author: "小林信彦",
    asin: "B0763LGN68",
    link: "https://www.amazon.co.jp/dp/B0763LGN68/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "エッセイ",
    saleEndsAt: "2026-06-22",
  },
  {
    title: "女館",
    author: "有吉佐和子",
    asin: "B09KRP8TN6",
    link: "https://www.amazon.co.jp/dp/B09KRP8TN6/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "小説",
    saleEndsAt: "2026-06-22",
  },
];
