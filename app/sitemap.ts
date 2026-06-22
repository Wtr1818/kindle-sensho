import type { MetadataRoute } from "next";
import { entries } from "@/data/entries";

const BASE_URL = "https://yomimado91.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/archive", "/today-sale"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const bookPages = entries.map((entry) => ({
    url: `${BASE_URL}/book/${entry.slug}`,
    lastModified: new Date(entry.dateAdded),
  }));

  return [...staticPages, ...bookPages];
}
