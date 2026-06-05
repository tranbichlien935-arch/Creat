import { useState, useEffect } from "react";
import { Search, Globe, Menu as MenuIcon, X } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Menu", href: "#menu" },
  { label: "Tin tức", href: "#news" },
  { label: "Liên hệ", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Trang chủ");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F3EB]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(44,36,22,0.08)]"
            : "bg-[#F8F3EB]"
        }`}
      >
        {/* Top bar */}
        <div className="bg-[#1C1A14] text-[#C8963E] text-xs py-1.5 text-center tracking-widest uppercase">
          Bia Thủ Công Việt Nam · Craft Beer Creat
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNav("Trang chủ", "#home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#1C1A14] flex items-center justify-center">
              <span className="text-[#C8963E] text-sm font-bold" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                C
              </span>
            </div>
            <div>
              <div
                className="text-[#1C1A14] leading-tight tracking-wider uppercase text-sm"
                style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
              >
                Creat
              </div>
              <div className="text-[#8C7A60] text-[10px] tracking-[0.2em] uppercase">
                Craft Beer
              </div>
            </div>
          </a>

          {/* Nav items — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.label, item.href)}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-200 rounded-sm cursor-pointer ${
                  active === item.label
                    ? "text-[#C8963E]"
                    : "text-[#2C2416] hover:text-[#C8963E]"
                }`}
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: active === item.label ? 700 : 400 }}
              >
                {item.label}
                {active === item.label && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[#C8963E]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-[#2C2416] hover:text-[#C8963E] transition-colors cursor-pointer">
              <Search size={18} />
            </button>
            <button className="p-2 text-[#2C2416] hover:text-[#C8963E] transition-colors cursor-pointer hidden md:flex">
              <Globe size={18} />
            </button>
            <button
              className="p-2 text-[#2C2416] hover:text-[#C8963E] transition-colors cursor-pointer md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F8F3EB] flex flex-col pt-24 px-8 transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNav(item.label, item.href)}
            className={`py-4 text-left border-b border-[#EDE5D8] text-lg tracking-wide transition-colors ${
              active === item.label ? "text-[#C8963E]" : "text-[#2C2416]"
            }`}
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
