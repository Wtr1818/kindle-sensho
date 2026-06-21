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

export const dailySaleUpdatedAt = "2026-06-21";

export const dailySaleList: SaleListItem[] = [
  {
    title: "接待の一流～おもてなしは技術です～",
    author: "田崎真也",
    link: "https://www.amazon.co.jp/s?k=%E6%8E%A5%E5%BE%85%E3%81%AE%E4%B8%80%E6%B5%81+%E7%94%B0%E5%B4%8E%E7%9C%9F%E4%B9%9F&tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "エッセイ",
    saleEndsAt: "2026-06-21",
  },
];
