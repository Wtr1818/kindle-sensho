export type SaleListItem = {
  title: string;
  author?: string;
  asin?: string;
  link: string;
  saleName: string;
};

export const dailySaleUpdatedAt = "2026-06-21";

export const dailySaleList: SaleListItem[] = [
  {
    title: "すべての日本人のための 日本一やさしくて使える税金の本",
    author: "久保憂希也",
    link: "https://www.amazon.co.jp/s?k=%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E6%97%A5%E6%9C%AC%E4%BA%BA%E3%81%AE%E3%81%9F%E3%81%82%E3%81%AE%E6%97%A5%E6%9C%AC%E4%B8%80%E3%82%84%E3%81%95%E3%81%97%E3%81%8F%E3%81%A6%E4%BD%BF%E3%81%88%E3%82%8B%E7%A8%8E%E9%87%91%E3%81%AE%E6%9C%AC&tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
  },
  {
    title: "甘粕大尉 ――増補改訂",
    author: "角田房子",
    link: "https://www.amazon.co.jp/s?k=%E7%94%98%E6%9F%95%E5%A4%A7%E5%B0%89+%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82&tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
  },
  {
    title: "接待の一流～おもてなしは技術です～",
    author: "田崎真也",
    link: "https://www.amazon.co.jp/s?k=%E6%8E%A5%E5%BE%85%E3%81%AE%E4%B8%80%E6%B5%81+%E7%94%B0%E5%B4%8E%E7%9C%9F%E4%B9%9F&tag=yomimado91-22",
    saleName: "Kindle日替わりセール",
  },
];
