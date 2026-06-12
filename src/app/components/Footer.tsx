import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useAppLang } from '../hooks/useAppLang';

const footerLinks = {
  vi: {
    "Danh mục": [
      { label: "Trang chủ", href: "/" },
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Sản phẩm", href: "/san-pham" },
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
    "Hỗ trợ & Chính sách": [
      { label: "Điều khoản dịch vụ", href: "#" },
      { label: "Chính sách quyền riêng tư", href: "#" },
      { label: "Chính sách vận chuyển & giao hàng", href: "#" },
      { label: "Chính sách đổi trả", href: "#" },
      { label: "Phương thức thanh toán", href: "#" },
    ]
  },
  en: {
    "Categories": [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/gioi-thieu" },
      { label: "Products", href: "/san-pham" },
      { label: "News", href: "/tin-tuc" },
      { label: "Contact", href: "/lien-he" },
    ],
    "Support & Policies": [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Shipping & Delivery Policy", href: "#" },
      { label: "Return Policy", href: "#" },
      { label: "Payment Methods", href: "#" },
    ]
  }
};

export function Footer() {
  const { lang } = useAppLang();

  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#e9e6dc] pt-20 pb-8 text-[#2c2c2c] font-quicksand border-t border-[#D4C4A8]/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">

          {/* Logo & Description */}
          <div className="lg:col-span-4 lg:pr-12">
            <div className="mb-8 cursor-pointer" onClick={() => window.location.href = '/'}>
              <img src="/logo.png" alt="Creat Craft Beer" className="h-[100px] w-auto object-contain brightness-0 opacity-80" />
            </div>
            <p className="text-[14px] leading-relaxed text-[#5a5a5a]">
              {lang === 'en' ? 'Every bottle is a journey discovering pure flavor, brewed from the finest natural ingredients.' : 'Mỗi chai bia là một hành trình khám phá hương vị thuần túy, ủ từ nguyên liệu tự nhiên tốt nhất.'}
            </p>
          </div>

          {/* Dynamic Links Columns */}
          {Object.entries(footerLinks[lang]).map(([title, links]) => (
            <div key={title} className={title === "Danh mục" || title === "Categories" ? "lg:col-span-2" : "lg:col-span-3"}>
              <h4 className="font-bold text-[13px] uppercase tracking-wider mb-6 text-[#1c1a14] font-['Josefin_Sans']">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-[14px] text-[#5a5a5a] hover:text-[#b67e53] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="lg:col-span-3 lg:pl-6">
            <h4 className="font-bold text-[13px] uppercase tracking-wider mb-6 text-[#1c1a14] font-['Josefin_Sans']">
              {lang === 'en' ? 'Contact' : 'Liên hệ'}
            </h4>
            <ul className="space-y-5 text-[14px] text-[#5a5a5a]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-[#b67e53] mt-0.5" strokeWidth={2} />
                <div><strong className="text-[#b67e53]">CN1:</strong> 93 Đường số 11, P.Tây Thạnh, Q. Tân Phú, TP.HCM</div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-[#b67e53] mt-0.5" strokeWidth={2} />
                <div><strong className="text-[#b67e53]">CN2:</strong> 545 Nguyễn Xiển, P. Long Bình, TP. Thủ Đức, TP.HCM</div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-[#b67e53]" strokeWidth={2} />
                <span>(+84) 098 935 4444</span>
              </li>
              <li className="flex items-center gap-3 w-full">
                <Mail className="w-4 h-4 shrink-0 text-[#b67e53]" strokeWidth={2} />
                <a href="mailto:creatcraftbeer@gmail.com" className="hover:text-[#b67e53] transition-colors break-all">creatcraftbeer@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-[#D4C4A8]/40 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#5a5a5a] font-['Josefin_Sans'] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Creat Craft Beer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1c1a14] transition-colors font-medium">{lang === 'en' ? 'Terms of Service' : 'Điều khoản dịch vụ'}</a>
            <a href="#" className="hover:text-[#1c1a14] transition-colors font-medium">{lang === 'en' ? 'Privacy Policy' : 'Chính sách riêng tư'}</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-12 md:bottom-16 right-6 md:right-10 w-12 h-12 bg-[#1C1A14] text-[#C8963E] border border-[#C8963E]/30 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#C8963E] hover:text-[#1C1A14] hover:shadow-[0_8px_20px_rgba(200,150,62,0.3)] transition-all duration-300 z-[90] group"
        aria-label="Scroll to top"
      >
        <div className="w-2.5 h-2.5 border-t-[2px] border-l-[2px] border-current transform rotate-45 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
