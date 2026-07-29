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

export const dailySaleUpdatedAt = "2026-07-30";

export const dailySaleList: SaleListItem[] = [
  {
    title: "「心が凹んだとき」に読む本",
    author: "心屋仁之助、江村信一",
    asin: "B0099JLH2I",
    link: "https://www.amazon.co.jp/dp/B0099JLH2I/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "自己啓発",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "Cat Shit One VOL.2",
    author: "小林源文",
    asin: "B009V5IC5A",
    link: "https://www.amazon.co.jp/dp/B009V5IC5A/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "小説",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "Cat Shit One JP",
    author: "小林源文",
    asin: "B00E9LT25A",
    link: "https://www.amazon.co.jp/dp/B00E9LT25A/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "小説",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "白頭吟 (講談社文芸文庫)",
    author: "石川淳",
    asin: "B00GYTHTFU",
    link: "https://www.amazon.co.jp/dp/B00GYTHTFU/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "小説",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "「岩宿」の発見 (講談社文庫)",
    author: "相沢忠洋",
    asin: "B00TDFNDYI",
    link: "https://www.amazon.co.jp/dp/B00TDFNDYI/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "カラダが変わる！姿勢の科学 (ちくま新書)",
    author: "石井直方",
    asin: "B00VQ05PFI",
    link: "https://www.amazon.co.jp/dp/B00VQ05PFI/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "１９９５年 (ちくま新書)",
    author: "速水健朗",
    asin: "B00XMOVS9I",
    link: "https://www.amazon.co.jp/dp/B00XMOVS9I/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "語り手の事情",
    author: "酒見賢一",
    asin: "B00ZZ5BDME",
    link: "https://www.amazon.co.jp/dp/B00ZZ5BDME/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "小説",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "毎日おいしい豆レシピ",
    author: "堤人美",
    asin: "B01AJA9WRC",
    link: "https://www.amazon.co.jp/dp/B01AJA9WRC/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "重火器の科学 戦場を制する火砲の秘密に迫る (サイエンス・アイ新書)",
    author: "かのよしのり",
    asin: "B01ALGTALC",
    link: "https://www.amazon.co.jp/dp/B01ALGTALC/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "天文学者たちの江戸時代 ──暦・宇宙観の大転換 (ちくま新書)",
    author: "嘉数次人",
    asin: "B01IHFLMSS",
    link: "https://www.amazon.co.jp/dp/B01IHFLMSS/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "まんがで身につく幸福論～仕事と人生を豊かにするアランの言葉",
    author: "小川仁志",
    asin: "B01JADEHNS",
    link: "https://www.amazon.co.jp/dp/B01JADEHNS/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "自己啓発",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "ピストルと荊冠 〈被差別〉と〈暴力〉で大阪を背負った男・小西邦彦 (講談社＋α文庫)",
    author: "角岡伸彦",
    asin: "B01N11UXIK",
    link: "https://www.amazon.co.jp/dp/B01N11UXIK/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
  {
    title: "野菜を食べるスープ",
    author: "飛田和緒",
    asin: "B01N18WLLO",
    link: "https://www.amazon.co.jp/dp/B01N18WLLO/?tag=yomimado91-22",
    saleName: "Kindleストア 期間限定キャンペーン",
    genre: "ノンフィクション",
    saleEndsAt: "2026-07-30",
  },
];
