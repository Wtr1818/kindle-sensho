export function CoverPlaceholder({
  title,
  author,
}: {
  title: string;
  author: string;
}) {
  return (
    <div className="flex h-[252px] w-[168px] flex-none flex-col justify-between border-2 border-[#000000] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
      <div className="h-1 w-8 bg-[#000000]" />
      <p className="font-serif text-lg font-bold leading-snug text-[#000000]">
        {title}
      </p>
      <p className="text-xs text-[#000000]/60">{author}</p>
    </div>
  );
}
