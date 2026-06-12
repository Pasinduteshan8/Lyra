export function HeroArtwork() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_45px_rgba(27,43,75,0.25)]"
      style={{ background: "linear-gradient(135deg, #6B4A34 0%, #4B3328 55%, #2F2019 100%)" }}
    >
      <img
        src="/images/hero-thumb.png"
        alt="Lyra hero thumbnail"
        className="relative aspect-[16/9] min-h-[175px] w-full object-cover"
      />
    </div>
  );
}