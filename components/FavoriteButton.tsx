"use client";

import { useEffect, useState } from "react";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.8}
      aria-hidden="true"
    >
      <path d="M12 21s-7.5-4.6-10-9.1C0.5 8.5 2 4 6.2 4c2 0 3.5 1 5.8 3.5C14.3 5 15.8 4 17.8 4 22 4 23.5 8.5 22 11.9 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function FavoriteButton({ slug, title }: { slug: string; title: string }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    setFavorited(isFavorite(slug));
  }, [slug]);

  return (
    <button
      type="button"
      onClick={() => setFavorited(toggleFavorite(slug))}
      aria-pressed={favorited}
      aria-label={favorited ? `${title}をお気に入りから削除` : `${title}をお気に入りに追加`}
      className={
        favorited
          ? "absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#b5402b] shadow-sm"
          : "absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#000000]/50 shadow-sm hover:text-[#000000]"
      }
    >
      <HeartIcon filled={favorited} />
    </button>
  );
}
