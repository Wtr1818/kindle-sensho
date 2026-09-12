const STORAGE_KEY = "yomimado91:favorites";
const CHANGE_EVENT = "yomimado91:favorites-changed";

export function getFavoriteSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  return getFavoriteSlugs().includes(slug);
}

export function toggleFavorite(slug: string): boolean {
  const current = new Set(getFavoriteSlugs());
  let nowFavorite: boolean;
  if (current.has(slug)) {
    current.delete(slug);
    nowFavorite = false;
  } else {
    current.add(slug);
    nowFavorite = true;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(current)));
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return nowFavorite;
}

export function subscribeFavoritesChanged(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback); // 他タブでの変更にも追従
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
