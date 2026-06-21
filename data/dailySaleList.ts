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
    asin: "B00GU4RA2Q",
    link: "https://www.amazon.co.jp/dp/B00GU4RA2Q/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "エッセイ",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "すべての日本人のための 日本一やさしくて使える税金の本",
    author: "久保憂希也",
    asin: "B00DAULGOQ",
    link: "https://www.amazon.co.jp/dp/B00DAULGOQ/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "新書",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "２つの粒子で世界がわかる 量子力学から見た物質と力",
    author: "森弘之",
    asin: "B07RGVDYVV",
    link: "https://www.amazon.co.jp/dp/B07RGVDYVV/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "新書",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "鶏むね肉100レシピ",
    author: "市瀬悦子",
    asin: "B08YCX3JHT",
    link: "https://www.amazon.co.jp/dp/B08YCX3JHT/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "ノンフィクション",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "吃音のことがよくわかる本",
    author: "菊池良和",
    asin: "B01FDIFGMK",
    link: "https://www.amazon.co.jp/dp/B01FDIFGMK/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "ノンフィクション",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "数学基礎論",
    author: "前原昭二・竹内外史",
    asin: "B07R2LJP21",
    link: "https://www.amazon.co.jp/dp/B07R2LJP21/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "ノンフィクション",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "ピッチャーズ球速向上プログラム",
    author: "殖栗正登",
    asin: "B0B1T6MQV3",
    link: "https://www.amazon.co.jp/dp/B0B1T6MQV3/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "ノンフィクション",
    saleEndsAt: "2026-06-21",
  },
  {
    title: "娘と私",
    author: "獅子文六",
    asin: "B01JA1LLA2",
    link: "https://www.amazon.co.jp/dp/B01JA1LLA2/?tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
    genre: "小説",
    saleEndsAt: "2026-06-21",
  },
];
