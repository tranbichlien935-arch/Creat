const items = [
  { text: "Bia Thủ Công Cao Cấp", highlight: false },
  { text: "✦", highlight: true },
  { text: "Craft Beer Creat", highlight: false },
  { text: "✦", highlight: true },
  { text: "Hương Vị Thuần Việt", highlight: false },
  { text: "✦", highlight: true },
  { text: "Golden Ale", highlight: false },
  { text: "✦", highlight: true },
  { text: "Dark Stout", highlight: false },
  { text: "✦", highlight: true },
  { text: "Pale IPA", highlight: false },
  { text: "✦", highlight: true },
  { text: "Amber Ale", highlight: false },
  { text: "✦", highlight: true },
  { text: "Since 2014", highlight: false },
  { text: "✦", highlight: true },
  { text: "Giải Vàng Asia 2026", highlight: false },
  { text: "✦", highlight: true },
];

// Duplicate for seamless loop
const track = [...items, ...items, ...items];

export function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden bg-[#1C1A14] py-4 border-y border-[#C8963E]/20">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #1C1A14, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #1C1A14, transparent)" }} />

      {/* Track */}
      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={`inline-block px-5 text-sm tracking-widest uppercase ${
              item.highlight
                ? "text-[#C8963E]"
                : "text-[#D4C4A8]/70"
            }`}
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: item.highlight ? 400 : 300 }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

export function MarqueeBannerReverse() {
  const itemsAlt = [
    { text: "Wheat Beer", highlight: false },
    { text: "❖", highlight: true },
    { text: "Imperial Stout", highlight: false },
    { text: "❖", highlight: true },
    { text: "West Coast IPA", highlight: false },
    { text: "❖", highlight: true },
    { text: "Lager Classic", highlight: false },
    { text: "❖", highlight: true },
    { text: "Belgian Blonde", highlight: false },
    { text: "❖", highlight: true },
    { text: "Porter", highlight: false },
    { text: "❖", highlight: true },
    { text: "Session IPA", highlight: false },
    { text: "❖", highlight: true },
    { text: "100% Tự Nhiên", highlight: false },
    { text: "❖", highlight: true },
    { text: "Không Chất Bảo Quản", highlight: false },
    { text: "❖", highlight: true },
  ];
  const trackAlt = [...itemsAlt, ...itemsAlt, ...itemsAlt];

  return (
    <div className="relative overflow-hidden bg-[#C8963E] py-3.5">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #C8963E, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #C8963E, transparent)" }} />

      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{
          animation: "marqueeReverse 25s linear infinite",
          width: "max-content",
        }}
      >
        {trackAlt.map((item, i) => (
          <span
            key={i}
            className={`inline-block px-5 text-xs tracking-widest uppercase ${
              item.highlight ? "text-[#1C1A14]/50" : "text-[#1C1A14]"
            }`}
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeReverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
