import type { MetadataRoute } from "next";
import { entries } from "@/data/entries";
import { getRecommenderNames } from "@/data/recommenders";
import { getGenreNames } from "@/data/genres";

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

  const recommenderPages = getRecommenderNames().map((name) => ({
    url: `${BASE_URL}/recommender/${encodeURIComponent(name)}`,
    lastModified: new Date(),
  }));

  const genrePages = getGenreNames().map((genre) => ({
    url: `${BASE_URL}/genre/${encodeURIComponent(genre)}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...bookPages, ...recommenderPages, ...genrePages];
}
