import { ImageResponse } from "next/og";
import { entries } from "@/data/entries";
import { shortName, splitRecommenderNames } from "@/data/recommenders";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = entries.find((e) => e.slug === slug);
  const recommender = entry
    ? shortName(splitRecommenderNames(entry.recommenderName)[0])
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          border: "12px solid #000000",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#000000",
            opacity: 0.5,
          }}
        >
          読み窓91
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "#000000",
            fontStyle: "italic",
          }}
        >
          {recommender}が薦める
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 56,
            fontWeight: 700,
            color: "#000000",
            lineHeight: 1.3,
          }}
        >
          {entry?.title ?? ""}
        </div>
      </div>
    ),
    { ...size },
  );
}
