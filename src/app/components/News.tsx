import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    date: "28 Tháng 5, 2026",
    category: "Sự kiện",
    title: "Creat Beer Festival 2026 — Lễ Hội Bia Thủ Công Lớn Nhất Năm",
    excerpt: "Lễ hội bia thủ công thường niên của Creat sẽ diễn ra vào tháng 8 tại TP. Hồ Chí Minh với hơn 30 dòng bia đặc biệt chưa từng ra mắt trước đây.",
    image: "https://images.unsplash.com/photo-1709548145082-04d0cde481d4?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    date: "15 Tháng 5, 2026",
    category: "Sản phẩm mới",
    title: "Ra Mắt Dòng Bia Imperial Stout Mùa Đông — Phiên Bản Giới Hạn",
    excerpt: "Creat Imperial Stout 2026 — phiên bản giới hạn 500 chai, được ủ trong thùng rượu whisky với hương vị phức hợp chưa từng có.",
    image: "https://images.unsplash.com/photo-1681422709041-4303ba01721c?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    date: "3 Tháng 5, 2026",
    category: "Giải thưởng",
    title: "Creat Đạt Giải Vàng Tại Asia Beer Championship 2026",
    excerpt: "Niềm tự hào Việt Nam — dòng Amber Ale của Creat đoạt Huy chương Vàng tại giải vô địch bia châu Á, khẳng định chất lượng đẳng cấp quốc tế.",
    image: "https://images.unsplash.com/photo-1578231177134-f1bbe379b054?w=600&h=400&fit=crop&auto=format",
  },
];

export function News() {
  return (
    <section id="news" className="py-24 bg-[#F8F3EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C8963E]" />
              <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
                Tin Tức
              </span>
            </div>
            <h2 className="text-[#1C1A14]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Câu Chuyện &<br /><em className="text-[#C8963E]">Cập Nhật Mới</em>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#C8963E] text-xs tracking-widest uppercase hover:gap-4 transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
            Xem tất cả tin tức
            <ArrowRight size={14} />
          </button>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden aspect-[16/10] mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#C8963E] text-white text-[10px] tracking-widest uppercase px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {item.category}
                </span>
                <div className="flex items-center gap-1.5 text-[#8C7A60] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                  <Calendar size={12} />
                  {item.date}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1C1A14] mb-3 group-hover:text-[#C8963E] transition-colors leading-snug" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.1rem" }}>
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#8C7A60] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                {item.excerpt}
              </p>

              <button className="flex items-center gap-2 text-[#C8963E] text-xs tracking-widest uppercase cursor-pointer group-hover:gap-4 transition-all duration-300" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                Đọc thêm <span className="w-5 h-px bg-[#C8963E]" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
