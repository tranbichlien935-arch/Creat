import { useState } from "react";

const menuCategories = [
  {
    id: "ales",
    label: "Ales",
    items: [
      { name: "Golden Ale", desc: "Nhẹ nhàng, malt ngọt, hậu vị cân bằng", price: "85,000 ₫", abv: "5.2%" },
      { name: "Amber Ale", desc: "Caramel, hoa quả, màu hổ phách quyến rũ", price: "88,000 ₫", abv: "5.5%" },
      { name: "Wheat Beer", desc: "Tươi mát, hương chuối và đinh hương", price: "80,000 ₫", abv: "4.8%" },
      { name: "Belgian Blonde", desc: "Phenolic nhẹ, bong bóng tinh tế, ngọt malt", price: "92,000 ₫", abv: "6.2%" },
    ],
  },
  {
    id: "lagers",
    label: "Lagers",
    items: [
      { name: "Classic Lager", desc: "Trong sáng, sảng khoái, vị đắng nhẹ", price: "75,000 ₫", abv: "4.5%" },
      { name: "Pilsner", desc: "Vàng sáng, malt ngọt, hoa bia tươi", price: "78,000 ₫", abv: "4.8%" },
      { name: "Dark Lager", desc: "Màu nâu đậm, hương malt rang, caramel", price: "82,000 ₫", abv: "5.0%" },
    ],
  },
  {
    id: "ipas",
    label: "IPAs",
    items: [
      { name: "Pale IPA", desc: "Hoa bia cân bằng, cam tươi, pine rừng", price: "90,000 ₫", abv: "6.0%" },
      { name: "West Coast IPA", desc: "Đắng quyết liệt, hương nhiệt đới mạnh mẽ", price: "95,000 ₫", abv: "6.8%" },
      { name: "Session IPA", desc: "Nhẹ nhàng hơn, hương hoa bia rõ ràng", price: "85,000 ₫", abv: "4.5%" },
    ],
  },
  {
    id: "darks",
    label: "Dark Beers",
    items: [
      { name: "Stout Classic", desc: "Cà phê, socola đen, kem tươi mịn", price: "95,000 ₫", abv: "6.5%" },
      { name: "Porter", desc: "Malt rang nhẹ, socola sữa, cân bằng", price: "90,000 ₫", abv: "5.8%" },
      { name: "Imperial Stout", desc: "Phức hợp, đậm đà, cognac và trái cây khô", price: "110,000 ₫", abv: "9.0%" },
    ],
  },
];

export function BeerMenu() {
  const [active, setActive] = useState("ales");

  const current = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-[#1C1A14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
              Thực Đơn
            </span>
            <span className="w-8 h-px bg-[#C8963E]" />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Menu Bia <em className="text-[#C8963E]">Creat</em>
          </h2>
          <p className="text-[#8C7A60] max-w-md mx-auto" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            Từ những dòng bia nhẹ nhàng đến những trải nghiệm đậm đà mạnh mẽ.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                active === cat.id
                  ? "bg-[#C8963E] text-white"
                  : "border border-[#C8963E]/30 text-[#C8963E]/70 hover:border-[#C8963E] hover:text-[#C8963E]"
              }`}
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 gap-px bg-[#C8963E]/10">
          {current.items.map((item) => (
            <div
              key={item.name}
              className="bg-[#1C1A14] p-8 hover:bg-[#2E2515] transition-colors duration-200 group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-white mb-1 group-hover:text-[#C8963E] transition-colors" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.15rem" }}>
                    {item.name}
                  </h3>
                  <span className="text-[#C8963E]/60 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
                    ABV {item.abv}
                  </span>
                </div>
                <span className="text-[#C8963E]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.05rem", fontWeight: 600 }}>
                  {item.price}
                </span>
              </div>
              <p className="text-[#8C7A60] text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                {item.desc}
              </p>
              <div className="mt-4 w-8 h-px bg-[#C8963E]/40 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Divider note */}
        <p className="text-center text-[#8C7A60]/60 text-xs mt-8 tracking-wide" style={{ fontFamily: "'Lato', sans-serif" }}>
          * Giá chưa bao gồm VAT · Vui lòng uống có trách nhiệm · Dành cho người trên 18 tuổi
        </p>
      </div>
    </section>
  );
}
