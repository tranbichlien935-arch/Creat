import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1C1A14 0%, #2E2515 50%, #1C1A14 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1546339166-72eaf6a67c3c?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1A14]/60 via-[#1C1A14]/40 to-[#1C1A14]/80" />

      {/* Decorative circle */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#C8963E]/30 hidden lg:flex items-center justify-center">
        <div className="w-56 h-56 rounded-full border border-[#C8963E]/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-[#C8963E] text-xs tracking-[0.3em] uppercase mb-1">Khám phá</div>
            <div className="text-white text-xs tracking-[0.2em] uppercase">Ngay</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase">Bia Thủ Công Cao Cấp</span>
          </div>

          <h1
            className="text-white mb-6 leading-[1.15]"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 600,
            }}
          >
            Hương Vị Tinh Tế,
            <br />
            <em className="text-[#C8963E]">Được Chứng Nhận</em>
          </h1>

          <p
            className="text-[#D4C4A8] mb-10 leading-relaxed max-w-lg"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", fontWeight: 300 }}
          >
            Creat Craft Beer — mỗi chai bia là một hành trình khám phá hương vị thuần túy,
            được ủ từ nguyên liệu tự nhiên tốt nhất, tạo nên trải nghiệm đặc biệt cho người thưởng thức.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-[#C8963E] text-white text-sm tracking-widest uppercase hover:bg-[#B8841F] transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Mua Ngay
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 border border-[#C8963E]/60 text-[#C8963E] text-sm tracking-widest uppercase hover:border-[#C8963E] hover:bg-[#C8963E]/10 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8C7A60] hover:text-[#C8963E] transition-colors cursor-pointer animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
          Cuộn xuống
        </span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
