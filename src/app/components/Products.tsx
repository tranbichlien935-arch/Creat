import { useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import gsap from "gsap";

const categories = ["Tất cả", "Ale", "Lager", "IPA", "Stout", "Seasonal"];

const products = [
  {
    id: 1,
    name: "Creat Golden Ale",
    category: "Ale",
    price: "85,000 ₫",
    oldPrice: "95,000 ₫",
    abv: "5.2%",
    image: "https://images.unsplash.com/photo-1644085159285-5fd924740cb3?w=400&h=500&fit=crop&auto=format",
    tag: "Best Seller",
    desc: "Hương vị nhẹ nhàng, cân bằng với thoảng malt ngọt.",
  },
  {
    id: 2,
    name: "Creat Dark Stout",
    category: "Stout",
    price: "95,000 ₫",
    oldPrice: null,
    abv: "6.5%",
    image: "https://images.unsplash.com/photo-1518542698889-ca82262f08d5?w=400&h=500&fit=crop&auto=format",
    tag: null,
    desc: "Đậm đà, phức hợp với hương cà phê và socola đen.",
  },
  {
    id: 3,
    name: "Creat Pale IPA",
    category: "IPA",
    price: "90,000 ₫",
    oldPrice: "105,000 ₫",
    abv: "6.0%",
    image: "https://images.unsplash.com/photo-1601912414323-0debc2271e40?w=400&h=500&fit=crop&auto=format",
    tag: "Sale",
    desc: "Vị đắng hoa bia cân bằng, hương cam và pine tươi mát.",
  },
  {
    id: 4,
    name: "Creat Wheat Beer",
    category: "Ale",
    price: "80,000 ₫",
    oldPrice: null,
    abv: "4.8%",
    image: "https://images.unsplash.com/photo-1523567830207-96731740fa71?w=400&h=500&fit=crop&auto=format",
    tag: null,
    desc: "Nhẹ nhàng, tươi mát với hương chuối và đinh hương thoảng nhẹ.",
  },
  {
    id: 5,
    name: "Creat Lager Classic",
    category: "Lager",
    price: "75,000 ₫",
    oldPrice: null,
    abv: "4.5%",
    image: "https://images.unsplash.com/photo-1595600566063-2863388012be?w=400&h=500&fit=crop&auto=format",
    tag: null,
    desc: "Sảng khoái, trong sáng — lựa chọn hoàn hảo mọi dịp.",
  },
  {
    id: 6,
    name: "Creat Amber Ale",
    category: "Ale",
    price: "88,000 ₫",
    oldPrice: "98,000 ₫",
    abv: "5.5%",
    image: "https://images.unsplash.com/photo-1681422668808-9a9e8b156545?w=400&h=500&fit=crop&auto=format",
    tag: "Mới",
    desc: "Màu hổ phách đẹp mắt, hương caramel và hoa quả thanh tao.",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1.03, rotation: 0.5, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-white cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-[#C8963E] text-white text-[10px] tracking-widest uppercase px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>
            {product.tag}
          </div>
        )}
        <div className={`absolute inset-0 bg-[#1C1A14]/60 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <button className="flex items-center gap-2 bg-[#C8963E] text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#B8841F] transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
            <ShoppingCart size={14} />
            Thêm vào giỏ
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="text-[#8C7A60] text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>
          {product.category} · ABV {product.abv}
        </div>
        <h3 className="text-[#1C1A14] mb-1.5" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.05rem" }}>
          {product.name}
        </h3>
        <p className="text-[#8C7A60] text-xs mb-3 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
          {product.desc}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C8963E] text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-[#8C7A60] text-xs line-through" style={{ fontFamily: "'Lato', sans-serif" }}>
                {product.oldPrice}
              </span>
            )}
          </div>
          <button className="text-[#C8963E] text-[10px] tracking-widest uppercase cursor-pointer hover:underline" style={{ fontFamily: "'Lato', sans-serif" }}>
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#EDE5D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
              Sản Phẩm
            </span>
            <span className="w-8 h-px bg-[#C8963E]" />
          </div>
          <h2 className="text-[#1C1A14] mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Dòng Bia Cao Cấp
          </h2>
          <p className="text-[#8C7A60] max-w-md mx-auto" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            Khám phá bộ sưu tập bia thủ công đa dạng, mỗi chai là một tác phẩm riêng biệt.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#1C1A14] text-[#C8963E]"
                  : "bg-transparent border border-[#2C2416]/20 text-[#5C4A30] hover:border-[#C8963E] hover:text-[#C8963E]"
              }`}
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <button className="px-10 py-3.5 border border-[#1C1A14] text-[#1C1A14] text-xs tracking-widest uppercase hover:bg-[#1C1A14] hover:text-[#C8963E] transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
            Xem Tất Cả Sản Phẩm
          </button>
        </div>
      </div>
    </section>
  );
}
