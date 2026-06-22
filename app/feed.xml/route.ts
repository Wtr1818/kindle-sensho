import { entries } from "@/data/entries";

const BASE_URL = "https://yomimado91.com";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = [...entries]
    .filter((entry) => entry.status === "active")
    .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
    .slice(0, 30);

  const itemsXml = items
    .map((entry) => {
      const url = `${BASE_URL}/book/${entry.slug}`;
      const title = `${entry.recommenderName}が薦める『${entry.title}』`;
      const description = `${entry.hook}。${entry.whyRead}`;
      const pubDate = new Date(
        `${entry.dateAdded}T00:00:00+09:00`,
      ).toUTCString();
      return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>読み窓91</title>
    <link>${BASE_URL}</link>
    <description>著名人が薦める本を出典付きでご紹介するキュレーションサイト</description>
    <language>ja</language>${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
