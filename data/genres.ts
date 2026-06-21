export const GENRES = [
  "小説",
  "ビジネス・経済",
  "自己啓発",
  "古典",
  "エッセイ",
  "絵本",
  "伝記",
  "ノンフィクション",
  "新書",
] as const;

export type Genre = (typeof GENRES)[number];
