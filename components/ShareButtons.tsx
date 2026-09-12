export function ShareButtons({ url, text }: { url: string; text: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs text-[#000000]/60">この推薦をシェア：</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#000000]/20 px-3 py-1.5 text-xs font-medium text-[#000000]/70 transition hover:border-[#000000] hover:text-[#000000]"
      >
        Xでシェア
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#000000]/20 px-3 py-1.5 text-xs font-medium text-[#000000]/70 transition hover:border-[#000000] hover:text-[#000000]"
      >
        LINEで送る
      </a>
    </div>
  );
}
