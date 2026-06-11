import { useState, useEffect } from "react";
import { Search, Globe, Menu as MenuIcon, X } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router";
import { products } from "./Products"; // For search results!
import { useAppLang } from "../hooks/useAppLang";

const navItems = [
  { vi: "Trang chủ", en: "HOME", href: "/" },
  { vi: "Giới thiệu", en: "ABOUT US", href: "/gioi-thieu" },
  { vi: "Sản phẩm", en: "PRODUCTS", href: "/san-pham" },
  { vi: "Menu", en: "MENU", href: "/menu" },
  { vi: "Tin tức", en: "NEWS", href: "/tin-tuc" },
  { vi: "Liên hệ", en: "CONTACT", href: "/lien-he" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Trang chủ");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { lang, changeLang } = useAppLang();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    // Initial check
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Update active based on location route
  useEffect(() => {
    const currentItem = navItems.find((item) => {
      if (item.href === "/" && location.pathname === "/") return true;
      if (item.href !== "/" && location.pathname.startsWith(item.href)) return true;
      return false;
    });
    if (currentItem) setActive(currentItem.vi);
    else setActive("");
  }, [location.pathname]);

  useEffect(() => {
    // Inject Google Translate securely
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'vi', includedLanguages: 'vi,en', autoDisplay: false },
          'google_translate_element'
        );
      };
      document.body.appendChild(script);

      // Aggressively remove the Google Translate banner using MutationObserver
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const el = node as HTMLElement;
              // Remove the banner iframe
              if (el.classList && el.classList.contains('goog-te-banner-frame')) {
                el.remove();
              }
              if (el.tagName === 'IFRAME' && el.classList && el.classList.contains('skiptranslate')) {
                el.remove();
              }
              // Sometimes the iframe is wrapped in a div added directly to body
              if (el.tagName === 'DIV' && el.classList && el.classList.contains('skiptranslate') && el.id !== 'google_translate_element_wrapper') {
                // Check if it's the direct body child wrapper
                if (el.parentElement === document.body && !el.querySelector('.goog-te-combo')) {
                  el.remove();
                }
              }
            }
          });
        });

        // Also force reset body margin and top
        if (document.body.style.top !== '' || document.body.style.marginTop !== '') {
          document.body.style.top = '';
          document.body.style.marginTop = '';
          document.body.style.position = '';
        }
      });

      observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
    }
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    navigate(href);
  };

  const handleSearchSelect = (id: number) => {
    setSearchOpen(false);
    setSearchQuery("");
    navigate(`/san-pham/chi-tiet?id=${id}`);
  };

  // Filter products for search
  const searchResults = searchQuery.trim()
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 border-b border-transparent ${scrolled ? "bg-[#1C1A14]/95 backdrop-blur-md shadow-lg border-[#C8963E]/20" : "bg-transparent pt-2"}`}
      >


        {/* Main nav */}
        <div className="w-full px-6 md:px-12 h-24 flex items-center justify-between">

          {/* Logo Container - Always visible and large */}
          <div className="flex items-center w-[160px]">
            <Link
              to="/"
              onClick={() => handleNav("Trang chủ", "/")}
              className="flex items-center cursor-pointer whitespace-nowrap"
            >
              <img
                src="/logo.png"
                alt="Creat Craft Beer"
                className="object-contain drop-shadow-[0_2px_12px_rgba(200,150,62,0.4)]"
                style={{ maxHeight: "85px" }}
              />
            </Link>
          </div>

          {/* Nav items — desktop */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 flex-1 mx-4">
            {navItems.map((item) => (
              <button
                key={item.vi}
                onClick={() => handleNav(item.vi, item.href)}
                className={`relative px-4 py-3 text-[14px] uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer whitespace-nowrap ${active === item.vi
                  ? "text-[#dfa173] font-medium"
                  : "text-white/90 hover:text-[#dfa173] hover:bg-white/5 rounded-[2px]"
                  }`}
                style={{
                  fontFamily: "'Fira Sans', sans-serif",
                  fontWeight: active === item.vi ? 600 : 400,
                  textDecoration: active === item.vi ? 'underline' : 'none',
                  textDecorationColor: active === item.vi ? '#dfa173' : 'transparent',
                  textUnderlineOffset: '8px',
                  textDecorationThickness: '2px'
                }}
              >
                {lang === 'en' ? (
                  <span className="notranslate">{item.en}</span>
                ) : (
                  <span>{item.vi}</span>
                )}
              </button>
            ))}
          </nav>

          {/* Right icons (relative container for search dropdown) */}
          <div className="flex items-center justify-end gap-3 lg:gap-5 w-auto lg:w-[160px] relative z-50">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#dfa173] text-white transition-transform hover:scale-105 cursor-pointer shadow-md">
              <Search size={18} strokeWidth={2.5} />
            </button>

            {/* Full Screen Search Overlay */}
            {searchOpen && (
              <div className="fixed inset-0 w-screen h-screen z-[200] bg-[#1C1A14]/95 backdrop-blur-xl flex flex-col pt-[15vh] px-6 md:px-12 items-center animate-in fade-in zoom-in-95 duration-300">
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute top-8 right-8 md:top-12 md:right-12 text-white/50 hover:text-[#C8963E] transition-colors cursor-pointer"
                >
                  <X size={36} strokeWidth={1} />
                </button>
                <div className="w-full max-w-4xl relative mb-12">
                  <input
                    type="text"
                    autoFocus
                    placeholder={lang === 'en' ? "Search for craft beers..." : "Tìm kiếm dòng bia..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl md:text-5xl py-4 md:py-6 pr-12 focus:outline-none focus:border-[#C8963E] transition-colors placeholder:text-white/20"
                    style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}
                  />
                  <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C8963E]" size={36} strokeWidth={1.5} />
                </div>

                <div className="w-full max-w-4xl flex flex-col gap-4 overflow-y-auto max-h-[60vh] custom-scrollbar pr-2">
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {searchResults.map(p => (
                        <button
                          key={p.id}
                          onClick={() => handleSearchSelect(p.id)}
                          className="w-full text-left flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#C8963E]/50 hover:bg-[#C8963E]/10 transition-all cursor-pointer group"
                        >
                          <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#2C2416] flex-shrink-0 relative">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-xl font-medium group-hover:text-[#dfa173] transition-colors line-clamp-1" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>{p.name}</div>
                            <div className="text-[#dfa173] text-[11px] uppercase tracking-[0.2em] mt-1 mb-2">{p.category}</div>
                            <div className="text-white/60 text-sm font-bold">{p.price}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : searchQuery.length > 0 ? (
                    <div className="text-white/40 text-center py-12 text-xl font-light italic" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                      {lang === 'en' ? `No results found for "${searchQuery}"` : `Không tìm thấy kết quả cho "${searchQuery}"`}
                    </div>
                  ) : (
                    <div className="text-white/20 text-center py-12 text-lg uppercase tracking-[0.2em]" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {lang === 'en' ? "Enter keyword to begin" : "Bắt đầu gõ để tìm kiếm..."}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="hidden lg:flex items-center gap-3">
              {/* Thẻ ẩn dành cho Google Translate core */}
              <div id="google_translate_element" className="absolute opacity-0 pointer-events-none -z-10"></div>

              <img
                src="https://flagcdn.com/vn.svg"
                alt="Chuyển sang Tiếng Việt"
                title="Tiếng Việt"
                onClick={() => changeLang('vi')}
                className={`w-[30px] h-[20px] object-cover rounded-[2px] shadow-sm cursor-pointer transition-opacity ${lang === 'vi' ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              />
              <img
                src="https://flagcdn.com/us.svg"
                alt="Switch to English"
                title="English"
                onClick={() => changeLang('en')}
                className={`w-[30px] h-[20px] object-cover rounded-[2px] shadow-sm cursor-pointer transition-opacity ${lang === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              />
            </div>

            <button
              className="p-2 transition-colors cursor-pointer lg:hidden text-white/90 hover:text-[#C8963E]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F8F3EB] flex flex-col pt-28 px-8 transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navItems.map((item) => (
          <button
            key={item.vi}
            onClick={() => handleNav(item.vi, item.href)}
            className={`py-4 text-left border-b border-[#EDE5D8] text-lg tracking-wide transition-colors ${active === item.vi ? "text-[#C8963E]" : "text-[#2C2416]"
              }`}
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            {lang === 'en' ? (
              <span className="notranslate">{item.en}</span>
            ) : (
              <span>{item.vi}</span>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
