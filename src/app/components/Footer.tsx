import { Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  "Danh mục": [
    { label: "Trang chủ", href: "#home" },
    { label: "Giới thiệu", href: "#about" },
    { label: "Sản phẩm", href: "#products" },
    { label: "Menu", href: "#menu" },
    { label: "Tin tức", href: "#news" },
    { label: "Liên hệ", href: "#contact" },
  ],
  "Hỗ trợ khách hàng": [
    { label: "Chính sách giao hàng", href: "#" },
    { label: "Chính sách đổi trả", href: "#" },
    { label: "Phương thức thanh toán", href: "#" },
    { label: "Theo dõi đơn hàng", href: "#" },
    { label: "Câu hỏi thường gặp", href: "#" },
  ],
  "Liên kết": [
    { label: "Đại lý phân phối", href: "#" },
    { label: "Hợp tác kinh doanh", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Chứng nhận chất lượng", href: "#" },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1A14] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C8963E]/10 border border-[#C8963E]/30 flex items-center justify-center">
                <span className="text-[#C8963E] text-lg" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
                  C
                </span>
              </div>
              <div>
                <div className="text-white tracking-wider uppercase text-sm" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}>
                  Creat
                </div>
                <div className="text-[#8C7A60] text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Craft Beer
                </div>
              </div>
            </div>
            <p className="text-[#8C7A60] text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Bia thủ công Việt Nam với hơn 10 năm kinh nghiệm, mang đến
              hương vị tinh tế và trải nghiệm đẳng cấp cho người yêu bia.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-[#C8963E]/30 flex items-center justify-center text-[#8C7A60] hover:border-[#C8963E] hover:text-[#C8963E] transition-colors cursor-pointer"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-[#8C7A60] text-sm hover:text-[#C8963E] transition-colors cursor-pointer text-left"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#C8963E]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5C4A30] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
            © 2026 Creat Craft Beer. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-[#5C4A30] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
            🍺 Uống có trách nhiệm · Chỉ dành cho người trên 18 tuổi
          </p>
        </div>
      </div>
    </footer>
  );
}
