import { useState, useEffect, useRef } from "react";
import { ChevronDown, Grid3x3, LayoutGrid, List } from "lucide-react";
import { useNavigate } from "react-router";
import { useAppLang } from "../hooks/useAppLang";

// ─── Data ──────────────────────────────────────────────────────────────────────
export const categories = ["Tất cả", "Ale", "Lager", "IPA", "Stout", "Seasonal"];

export const categoryImages: Record<string, string> = {
  "Tất cả": "https://www.creatcraft.com.vn/upload/news/z7280671479593e04e59b7aaba8f9169f802b1081bcb9f-7740.jpg",
  "Ale": "https://www.creatcraft.com.vn/upload/news/cozy1-7545.jpg",
  "Lager": "https://www.creatcraft.com.vn/upload/news/z72832389307424972c2602148258d8b9b021126d539c1-9022.jpg",
  "IPA": "https://www.creatcraft.com.vn/upload/news/4995248311222069405161271862481539073063223609n-7880.jpg",
  "Stout": "https://www.creatcraft.com.vn/upload/news/untitled-session5217-6008-9171.jpg",
  "Seasonal": "https://www.creatcraft.com.vn/upload/news/bia-thu-cong-tphcm-5155.png",
};

export const products = [
  {
    id: 1,
    name: "IPA India Pale Ale",
    name_en: "IPA India Pale Ale",
    category: "IPA",
    category_en: "IPA",
    price: "62.000 ₫",
    oldPrice: null,
    abv: "6.8%",
    image: "https://www.creatcraft.com.vn/upload/product/untitled-session89811-8635.jpg",
    imageAlt: "https://www.creatcraft.com.vn/upload/product/untitled-session1072-8370.jpg",
    tag: "Signature",
    desc: "IPA mang phong cách sáng tạo từ vị trứ danh India Pale Ale. Công thức kết hợp giữa lúa mạch, hoa bia đắng, lan toả hương cỏ nồng nàn nơi vòm họng.",
    desc_en: "Our Signature IPA infused with the iconic India Pale Ale style. A bold blend of premium malt and bitter hops, delivering an intense, grassy hop aroma on the palate.",
    details: [
      { label: "Dung tích", value: "330ml/chai" },
      { label: "Hương vị", value: "Hoa Cỏ, Quýt, Cam" },
      { label: "Độ cồn", value: "6.8%" },
      { label: "Độ đắng", value: "40" },
    ],
    details_en: [
      { label: "Volume", value: "330ml/bottle" },
      { label: "Flavor Profile", value: "Floral, Tangerine, Orange Note" },
      { label: "ABV", value: "6.8%" },
      { label: "IBU", value: "40" },
    ],
    rating: 5, reviews: 8, timeUntil: "05 hours 12 minutes", receiveDate: "18/06/2026", liveViewers: 142,
  },
  {
    id: 2,
    name: "Pilsner Fruity",
    name_en: "Pilsner Fruity",
    category: "Lager",
    category_en: "Lager",
    price: "58.000 ₫",
    oldPrice: null,
    abv: "5.0%",
    image: "https://www.creatcraft.com.vn/upload/product/dsc02050-1-1-4865.jpg",
    imageAlt: "https://www.creatcraft.com.vn/thumbs/600x800x2/upload/product/bai-dang-1312-1000-x-1000-px-600-x-800-px-2-5076.png",
    tag: "Best Seller",
    desc: "Pilsner Fruity mang hương vị ngọt ngào, dễ thưởng thức với cốt chanh dây tự nhiên và men tươi.",
    desc_en: "Pilsner Fruity offers a sweet, highly approachable craft experience crafted with natural passion fruit extract and fresh brewing yeast.",
    details: [
      { label: "Dung tích", value: "330ml/chai" },
      { label: "Hương vị", value: "Chanh Dây tươi" },
      { label: "Độ cồn", value: "5%" },
      { label: "Độ đắng", value: "26" },
    ],
    details_en: [
      { label: "Volume", value: "330ml/bottle" },
      { label: "Flavor Profile", value: "Fresh Passion Fruit" },
      { label: "ABV", value: "5%" },
      { label: "IBU", value: "26" },
    ],
    rating: 5, reviews: 1, timeUntil: "16 hours 06 minutes", receiveDate: "17/06/2026", liveViewers: 254,
  },
  {
    id: 3,
    name: "Midnight Stout",
    name_en: "Midnight Stout",
    category: "Stout",
    category_en: "Stout",
    price: "65.000 ₫",
    oldPrice: null,
    abv: "6.3%",
    image: "https://www.creatcraft.com.vn/upload/product/4740733791221858832401271865121894443145389519n-3438.jpg",
    imageAlt: "https://www.creatcraft.com.vn/upload/product/untitled-session5217-5234.jpg",
    tag: null,
    desc: "Midnight Stout dậy mùi hương thơm kết hợp giữa cà phê và sô cô la. Dòng bia mang vị đắng mạnh mẽ và hậu vị ngọt nhẹ.",
    desc_en: "Midnight Stout awakens the senses with a bold fusion of roasted coffee and dark chocolate. This small-batch brew delivers a robust bitterness followed by a subtly sweet, creamy finish.",
    details: [
      { label: "Dung tích", value: "330ml/chai" },
      { label: "Hương vị", value: "Cà phê, Sô cô la" },
      { label: "Độ cồn", value: "6.3%" },
      { label: "Độ đắng", value: "36" },
    ],
    details_en: [
      { label: "Volume", value: "330ml/bottle" },
      { label: "Flavor Profile", value: "Coffee, Dark Chocolate" },
      { label: "ABV", value: "6.3%" },
      { label: "IBU", value: "36" },
    ],
    rating: 5, reviews: 12, timeUntil: "02 hours 45 minutes", receiveDate: "18/06/2026", liveViewers: 94,
  },
  {
    id: 4,
    name: "Wheat Ale",
    name_en: "Wheat Ale",
    category: "Ale",
    category_en: "Ale",
    price: "55.000 ₫",
    oldPrice: null,
    abv: "6.0%",
    image: "https://www.creatcraft.com.vn/upload/product/dsc02154-5836.jpg",
    imageAlt: "https://www.creatcraft.com.vn/thumbs/600x800x2/upload/product/untitled-session3139-6464.jpg",
    tag: null,
    desc: "Wheat Ale thể hiện hương vị cổ điển của nghệ thuật nấu bia thủ công. Lan toả mùi thơm của lúa mì đặc trưng và hậu vị đắng dễ chịu.",
    desc_en: "Wheat Ale embodies the classic profile of craft brewing art. It radiates a distinctive wheat aroma followed by a pleasantly dry and crisp finish.",
    details: [
      { label: "Dung tích", value: "330ml/chai" },
      { label: "Hương vị", value: "Lúa mì, lúa mạch" },
      { label: "Độ cồn", value: "6%" },
      { label: "Độ đắng", value: "28" },
    ],
    details_en: [
      { label: "Volume", value: "330ml/bottle" },
      { label: "Flavor Profile", value: "Wheat, Barley" },
      { label: "ABV", value: "6%" },
      { label: "IBU", value: "28" },
    ],
    rating: 5, reviews: 5, timeUntil: "08 hours 15 minutes", receiveDate: "18/06/2026", liveViewers: 67,
  },
  {
    id: 5,
    name: "Matcha Ale",
    name_en: "Matcha Ale",
    category: "Ale",
    category_en: "Ale",
    price: "58.000 ₫",
    oldPrice: null,
    abv: "5.0%",
    image: "https://www.creatcraft.com.vn/upload/product/untitled-session5291-5608.jpg",
    imageAlt: "https://www.creatcraft.com.vn/upload/product/untitled-session3149-1-1-4269.jpg",
    tag: null,
    desc: "Matcha Ale mang hương vị kết hợp mới lạ giữa trà và bia. Sự hoà quyện giữa lúa mạch, hoa bia và trà xanh truyền thống, tạo nên hậu vị ngọt thơm dễ chịu.",
    desc_en: "Matcha Ale presents an innovative cross between traditional Asian tea and craft beer. This harmonious blend of malt, hops, and authentic matcha delivers a soothingly aromatic and sweet finish.",
    details: [
      { label: "Dung tích", value: "330ml/chai" },
      { label: "Hương vị", value: "Trà Xanh" },
      { label: "Độ cồn", value: "5%" },
      { label: "Độ đắng", value: "30" },
    ],
    details_en: [
      { label: "Volume", value: "330ml/bottle" },
      { label: "Flavor Profile", value: "Matcha Green Tea" },
      { label: "ABV", value: "5%" },
      { label: "IBU", value: "30" },
    ],
    rating: 5, reviews: 18, timeUntil: "06 hours 12 minutes", receiveDate: "19/06/2026", liveViewers: 121,
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useReveal(delay = 0) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { ref, visible } = useReveal();
  const { lang } = useAppLang();
  const onOpen = () => navigate(`/san-pham/chi-tiet?id=${product.id}`);

  const tagColors: Record<string, string> = {
    Signature: "#1C1A14",
    "Best Seller": "#C8963E",
    New: "#2e7d32",
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* ── Image ── */}
      <div
        onClick={onOpen}
        style={{
          position: "relative",
          aspectRatio: "3/4",
          overflow: "hidden",
          cursor: "pointer",
          background: "#F2EEE9",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "contain",
            transition: "opacity 0.55s ease, transform 0.7s ease",
            opacity: hovered ? 0 : 1,
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <img
          src={product.imageAlt}
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "contain",
            transition: "opacity 0.55s ease, transform 0.7s ease",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(1.06)",
          }}
        />

        {product.tag && (
          <div style={{
            position: "absolute", top: 12, left: 12, zIndex: 10,
            background: tagColors[product.tag] ?? "#C8963E",
            color: "#fff", fontSize: 9, letterSpacing: "0.18em",
            textTransform: "uppercase", padding: "4px 10px",
            fontFamily: "var(--wdtFontBase)", fontWeight: 700,
          }}>
            {product.tag}
          </div>
        )}

        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(28,26,20,0.42)",
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          paddingBottom: 24,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 5,
        }}>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            style={{
              background: "transparent", border: "1.5px solid rgba(255,255,255,0.9)",
              color: "#fff", padding: "8px 22px",
              fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
              fontFamily: "var(--wdtFontBase)", fontWeight: 700, cursor: "pointer",
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "transform 0.3s ease 0.05s",
            }}
          >
            {lang === 'en' ? "Quick View" : "Khám phá →"}
          </button>
        </div>
      </div>

      {/* ── Info ── */}
      <div style={{ padding: "16px 0 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <span style={{
          fontFamily: "var(--wdtFontBase)", fontSize: 9,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--wdtMutedColor, #8C7A60)", display: "block", marginBottom: 6,
        }}>
          {lang === 'en' ? product.category_en : product.category} · ABV {product.abv}
        </span>

        <h3
          onClick={onOpen}
          style={{
            fontFamily: "var(--wdtFontHeading)", fontSize: "0.95rem", fontWeight: 400,
            color: "var(--wdtDarkColor, #1C1A14)", margin: "0 0 20px", cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--wdtPrimaryColor, #b67e53)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--wdtDarkColor, #1C1A14)")}
        >
          {lang === 'en' ? product.name_en : product.name}
        </h3>

        {/* Animated underline */}
        <div style={{
          height: 1, background: "rgba(0,0,0,0.07)", marginBottom: 12,
          transformOrigin: "left",
          transform: hovered ? "scaleX(1)" : "scaleX(0.35)",
          transition: "transform 0.45s ease",
        }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", flexWrap: "wrap", gap: 16 }}>
          <span style={{
            fontFamily: "var(--wdtFontBase)", fontWeight: 700, fontSize: 14,
            color: "var(--wdtPrimaryColor, #b67e53)",
          }}>
            {product.price}
          </span>
          <button
            onClick={onOpen}
            className="hover:bg-[#C8963E] hover:text-white hover:shadow-[0_4px_12px_rgba(200,150,62,0.3)] hover:-translate-y-0.5 rounded-sm"
            style={{
              fontFamily: "var(--wdtFontBase)", fontSize: 9, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "var(--wdtDarkColor, #1C1A14)",
              background: "transparent", border: "1px solid rgba(0,0,0,0.1)",
              cursor: "pointer", padding: "6px 12px",
              opacity: hovered ? 1 : 0.5,
              transition: "all 0.3s ease",
            }}
          >
            {lang === 'en' ? "Details →" : "Chi tiết →"}
          </button>
        </div>
      </div>
    </li>
  );
}

// ─── Sort ─────────────────────────────────────────────────────────────────────
const sortOptionsVi = [
  "Thứ tự mặc định",
  "Phổ biến nhất",
  "Điểm đánh giá",
  "Mới nhất",
  "Giá: Thấp → Cao",
  "Giá: Cao → Thấp",
];

const sortOptionsEn = [
  "Default Sorting",
  "Most Popular",
  "Highest Rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

function SortDropdown({ selected, setSelected, lang }: { selected: string; setSelected: (v: string) => void; lang: string }) {
  const [open, setOpen] = useState(false);
  const options = lang === 'en' ? sortOptionsEn : sortOptionsVi;

  // ensure selected makes sense
  const displayVal = options.includes(selected) ? selected : options[0];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "transparent", border: "1px solid rgba(0,0,0,0.13)",
          padding: "8px 14px", fontFamily: "var(--wdtFontBase)", fontSize: 13,
          color: "var(--wdtBodyTxtColor)", cursor: "pointer",
          minWidth: 190, justifyContent: "space-between",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--wdtPrimaryColor, #b67e53)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.13)")}
      >
        <span>{displayVal}</span>
        <ChevronDown size={13} style={{ opacity: 0.5, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setOpen(false)} />
          <div style={{
            position: "absolute", top: "calc(100% + 6px)", right: 0,
            minWidth: 200, background: "#fff",
            boxShadow: "0 12px 40px rgba(0,0,0,0.11)",
            border: "1px solid rgba(0,0,0,0.06)", zIndex: 9999,
          }}>
            {options.map(opt => (
              <div
                key={opt}
                onClick={() => { setSelected(opt); setOpen(false); }}
                style={{
                  padding: "10px 16px", fontFamily: "var(--wdtFontBase)", fontSize: 13,
                  cursor: "pointer",
                  background: displayVal === opt ? "var(--wdtPrimaryColor, #b67e53)" : "transparent",
                  color: displayVal === opt ? "#fff" : "var(--wdtBodyTxtColor)",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (displayVal !== opt) e.currentTarget.style.background = "#FAF7F4"; }}
                onMouseLeave={e => { if (displayVal !== opt) e.currentTarget.style.background = "transparent"; }}
              >
                {opt}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Products Page ─────────────────────────────────────────────────────────────
export function Products() {
  const { lang } = useAppLang();
  const [cols, setCols] = useState<3 | 4>(3);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState(sortOptionsVi[0]);
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [openSection, setOpenSection] = useState<string>("category");

  // Reset category on lang change equivalent
  const categoryMap: Record<string, string> = {
    "Tất cả": "All",
    "Ale": "Ale",
    "Lager": "Lager",
    "IPA": "IPA",
    "Stout": "Stout",
    "Seasonal": "Seasonal"
  };

  // build count map
  const catCount: Record<string, number> = {};
  products.forEach(p => { catCount[p.category] = (catCount[p.category] ?? 0) + 1; });

  const filtered = activeCategory === "Tất cả" ? products : products.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    // Both en and vi options map to same sort logic simply by index
    const sIdx = lang === 'en' ? sortOptionsEn.indexOf(sort) : sortOptionsVi.indexOf(sort);
    if (sIdx === 4 /* Giá: Thấp → Cao */) return parseInt(a.price) - parseInt(b.price);
    if (sIdx === 5 /* Giá: Cao → Thấp */) return parseInt(b.price) - parseInt(a.price);
    if (sIdx === 1 /* Phổ biến nhất */) return b.liveViewers - a.liveViewers;
    if (sIdx === 2 /* Điểm đánh giá */) return b.reviews - a.reviews;
    return a.id - b.id;
  });

  const sidebarToggle = (sec: string) => setOpenSection(openSection === sec ? "" : sec);

  return (
    <div style={{
      display: "flex",
      flexDirection: window.innerWidth < 768 ? "column" : "row",
      gap: window.innerWidth < 768 ? 24 : 52,
      maxWidth: 1280,
      margin: "0 auto",
      padding: window.innerWidth < 768 ? "24px 16px 64px" : "44px 24px 96px"
    }}>

      {/* ════ SIDEBAR ════ */}
      <aside style={{
        width: window.innerWidth < 768 ? "100%" : 180,
        flexShrink: 0,
        position: window.innerWidth < 768 ? "relative" : "sticky",
        top: 96,
        alignSelf: "flex-start"
      }}>

        {/* Category */}
        <div style={{ marginBottom: 28 }}>
          <button onClick={() => sidebarToggle("category")} style={{
            display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center",
            background: "none", border: "none", cursor: "pointer",
            padding: "0 0 12px 0", borderBottom: "1.5px solid #1C1A14",
            fontFamily: "var(--wdtFontHeading)", fontSize: "0.95rem", color: "var(--wdtDarkColor)",
            marginBottom: 14,
          }}>
            {lang === 'en' ? "Categories" : "Danh mục"}
            <ChevronDown size={14} style={{ transform: openSection === "category" ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
          </button>
          {openSection === "category" && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Tất cả", ...Object.keys(catCount)].map(cat => (
                <li
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "7px 0 7px 10px",
                    borderLeft: activeCategory === cat ? "2px solid var(--wdtPrimaryColor, #b67e53)" : "2px solid transparent",
                    fontFamily: "var(--wdtFontBase)", fontSize: 13, cursor: "pointer",
                    color: activeCategory === cat ? "var(--wdtPrimaryColor, #b67e53)" : "var(--wdtBodyTxtColor)",
                    fontWeight: activeCategory === cat ? 700 : 400,
                    transition: "all 0.2s",
                  }}
                >
                  <span>{lang === 'en' ? categoryMap[cat] || cat : cat}</span>
                  <span style={{ fontSize: 11, opacity: 0.45 }}>({cat === "Tất cả" ? products.length : catCount[cat] ?? 0})</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Size */}
        <div style={{ marginBottom: 28 }}>
          <button onClick={() => sidebarToggle("size")} style={{
            display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center",
            background: "none", border: "none", cursor: "pointer",
            padding: "0 0 12px 0", borderBottom: "1px solid rgba(0,0,0,0.08)",
            fontFamily: "var(--wdtFontHeading)", fontSize: "0.95rem", color: "var(--wdtDarkColor)",
            marginBottom: 14,
          }}>
            {lang === 'en' ? "Volume" : "Dung tích"}
            <ChevronDown size={14} style={{ transform: openSection === "size" ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
          </button>
          {openSection === "size" && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {(lang === 'en' ? ["330ml / Bottle", "1 Liter / Can", "B2B Keg", "Party Barrel"] : ["330ml / Chai", "1 Lít / Lon", "Keg B2B", "Bom Party"]).map(s => (
                <li key={s} style={{ padding: "7px 10px", fontFamily: "var(--wdtFontBase)", fontSize: 13, cursor: "pointer", color: "var(--wdtBodyTxtColor)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--wdtPrimaryColor)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--wdtBodyTxtColor)")}
                >{s}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Price */}
        <div>
          <button onClick={() => sidebarToggle("price")} style={{
            display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center",
            background: "none", border: "none", cursor: "pointer",
            padding: "0 0 12px 0", borderBottom: "1px solid rgba(0,0,0,0.08)",
            fontFamily: "var(--wdtFontHeading)", fontSize: "0.95rem", color: "var(--wdtDarkColor)",
            marginBottom: 14,
          }}>
            {lang === 'en' ? "Price Range" : "Mức giá"}
            <ChevronDown size={14} style={{ transform: openSection === "price" ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
          </button>
          {openSection === "price" && (
            <div>
              <div style={{ width: "100%", height: 3, background: "rgba(0,0,0,0.08)", borderRadius: 2, position: "relative", marginBottom: 14 }}>
                <div style={{ position: "absolute", left: "10%", right: "15%", top: 0, bottom: 0, background: "var(--wdtPrimaryColor, #b67e53)", borderRadius: 2 }} />
                {["10%", "85%"].map((pos, i) => (
                  <div key={i} style={{ position: "absolute", left: pos, top: "50%", transform: "translate(-50%,-50%)", width: 11, height: 11, background: "var(--wdtPrimaryColor, #b67e53)", borderRadius: "50%", cursor: "pointer", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--wdtFontBase)", fontSize: 12, color: "var(--wdtBodyTxtColor)" }}>
                <span>55.000 ₫</span><span>65.000 ₫</span>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ════ MAIN ════ */}
      <div style={{ flex: 1, minWidth: 0 }}>

        {/* Toolbar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingBottom: 14, borderBottom: "1px solid rgba(0,0,0,0.07)",
          marginBottom: 36, flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {window.innerWidth >= 768 && (
              <div style={{ display: "flex", gap: 4 }}>
                {([3, 4] as const).map(c => (
                  <button key={c} onClick={() => { setView("grid"); setCols(c); }} title={`${c} ${lang === 'en' ? 'columns' : 'cột'}`} style={{ background: "none", border: "none", cursor: "pointer", padding: 5, opacity: view === "grid" && cols === c ? 1 : 0.28, transition: "opacity 0.2s" }}>
                    {c === 3 ? <Grid3x3 size={16} /> : <LayoutGrid size={16} />}
                  </button>
                ))}
                <button onClick={() => setView("list")} style={{ background: "none", border: "none", cursor: "pointer", padding: 5, opacity: view === "list" ? 1 : 0.28, transition: "opacity 0.2s" }}>
                  <List size={16} />
                </button>
              </div>
            )}
            <span style={{ fontFamily: "var(--wdtFontBase)", fontSize: 12, color: "var(--wdtBodyTxtColor)", opacity: 0.55 }}>
              {sorted.length} {lang === 'en' ? "products" : "sản phẩm"}
            </span>
          </div>
          <SortDropdown selected={sort} setSelected={setSort} lang={lang} />
        </div>

        {/* Grid view */}
        {view === "grid" && (
          <ul style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 480 ? "1fr" : window.innerWidth < 768 ? "repeat(2, minmax(0, 1fr))" : `repeat(${cols}, minmax(0, 1fr))`,
            gap: window.innerWidth < 768 ? "48px 20px" : "52px 28px",
            padding: 0, margin: 0, listStyle: "none",
          }}>
            {sorted.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </ul>
        )}

        {/* List view */}
        {view === "list" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {sorted.map(p => (
              <div key={p.id}
                style={{ display: "flex", gap: 24, padding: "20px 8px", borderBottom: "1px solid rgba(0,0,0,0.06)", alignItems: "flex-start", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#FAF7F4")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ width: 110, flexShrink: 0, aspectRatio: "3/4", overflow: "hidden", background: "#F2EEE9" }}>
                  <img src={p.image} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: "var(--wdtFontBase)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--wdtMutedColor, #8C7A60)", display: "block", marginBottom: 6 }}>
                    {p.category} · ABV {p.abv}
                  </span>
                  <h3 style={{ fontFamily: "var(--wdtFontHeading)", fontSize: "1.1rem", fontWeight: 400, margin: "0 0 8px", color: "var(--wdtDarkColor)" }}>{lang === 'en' ? p.name_en : p.name}</h3>
                  <p style={{ fontFamily: "var(--wdtFontBase)", fontSize: 13, color: "var(--wdtBodyTxtColor)", lineHeight: 1.7, margin: "0 0 14px", maxWidth: 460 }}>{lang === 'en' ? p.desc_en : p.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--wdtPrimaryColor, #b67e53)" }}>{p.price}</span>
                    <button
                      onClick={() => (window.location.href = `/san-pham/chi-tiet?id=${p.id}`)}
                      className="hover:bg-[#C8963E] hover:shadow-[0_6px_15px_rgba(200,150,62,0.3)] hover:-translate-y-1 transition-all duration-300"
                      style={{ fontFamily: "var(--wdtFontBase)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", background: "#1C1A14", color: "#fff", border: "none", padding: "8px 20px", cursor: "pointer", borderRadius: 2 }}
                    >
                      {lang === 'en' ? "Details →" : "Chi tiết →"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
