import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1546339166-72eaf6a67c3c?w=1600&h=900&fit=crop&auto=format",
    tag: "Bia Thủ Công Cao Cấp",
    heading1: "Hương Vị Tinh Tế,",
    heading2: "Được Chứng Nhận",
    sub: "Creat Craft Beer — mỗi chai bia là một hành trình khám phá hương vị thuần túy, ủ từ nguyên liệu tự nhiên tốt nhất.",
    cta: "Mua Ngay",
    ctaLink: "#products",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1681422668808-9a9e8b156545?w=1600&h=900&fit=crop&auto=format",
    tag: "Dòng Bia Giới Hạn",
    heading1: "Craft Beer",
    heading2: "Thuần Việt",
    sub: "Từ đồng lúa mạch vàng đến từng giọt bia trong chai — nghệ thuật ủ bia truyền thống kết hợp hiện đại.",
    cta: "Khám Phá Menu",
    ctaLink: "#menu",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1595600566063-2863388012be?w=1600&h=900&fit=crop&auto=format",
    tag: "Giải Vàng Asia 2026",
    heading1: "Đẳng Cấp",
    heading2: "Quốc Tế",
    sub: "Huy chương Vàng Asia Beer Championship 2026 — khẳng định chất lượng bia thủ công Việt Nam trên đấu trường quốc tế.",
    cta: "Tìm Hiểu Thêm",
    ctaLink: "#about",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const tagRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  // Floating circles
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation on circles
    if (circle1.current) {
      gsap.to(circle1.current, {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    if (circle2.current) {
      gsap.to(circle2.current, {
        y: -12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6,
      });
    }
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        y: -10,
        rotation: 5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }
  }, []);

  const animateIn = () => {
    const tl = gsap.timeline();
    tl.fromTo(imgRef.current, { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 0.3, duration: 1, ease: "power2.out" })
      .fromTo(tagRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.5")
      .fromTo(h1Ref.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, "-=0.3")
      .fromTo(h2Ref.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, "-=0.35")
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, "-=0.3")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.3");
    tl.eventCallback("onComplete", () => setAnimating(false));
  };

  useEffect(() => {
    animateIn();
  }, [current]);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    const tl = gsap.timeline();
    tl.to([tagRef.current, h1Ref.current, h2Ref.current, subRef.current, ctaRef.current], {
      y: -30, opacity: 0, duration: 0.35, stagger: 0.05, ease: "power2.in",
    });
    tl.to(imgRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.2");
    tl.eventCallback("onComplete", () => setCurrent(idx));
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);
  const slide = slides[current];

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => { if (!animating) next(); }, 5500);
    return () => clearInterval(t);
  }, [current, animating]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1C1A14 0%, #2E2515 50%, #1C1A14 100%)" }}
    >
      {/* BG image */}
      <div ref={imgRef} className="absolute inset-0"
        style={{
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1A14]/60 via-[#1C1A14]/30 to-[#1C1A14]/80" />

      {/* Floating decorative circles */}
      <div ref={circle1} className="absolute right-20 top-1/3 w-72 h-72 rounded-full border border-[#C8963E]/25 hidden lg:block pointer-events-none" />
      <div ref={circle2} className="absolute right-28 top-1/3 mt-8 w-56 h-56 rounded-full border border-[#C8963E]/15 hidden lg:block pointer-events-none" />

      {/* Floating badge */}
      <div ref={badgeRef} className="absolute right-36 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#1C1A14]/80 border border-[#C8963E]/40 hidden lg:flex items-center justify-center">
        <div className="text-center">
          <div className="text-[#C8963E] text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>Khám<br />Phá</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 w-full">
        <div className="max-w-2xl">
          <div ref={tagRef} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
              {slide.tag}
            </span>
          </div>

          <h1 ref={h1Ref} className="text-white mb-2"
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, lineHeight: 1.2 }}>
            {slide.heading1}
          </h1>
          <span ref={h2Ref} className="block text-[#C8963E] mb-8"
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, lineHeight: 1.2 }}>
            {slide.heading2}
          </span>

          <p ref={subRef} className="text-[#D4C4A8] mb-10 leading-relaxed max-w-lg"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", fontWeight: 300 }}>
            {slide.sub}
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo(slide.ctaLink)}
              className="px-8 py-3.5 bg-[#C8963E] text-white text-sm tracking-widest uppercase hover:bg-[#B8841F] transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              {slide.cta}
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="px-8 py-3.5 border border-[#C8963E]/60 text-[#C8963E] text-sm tracking-widest uppercase hover:border-[#C8963E] hover:bg-[#C8963E]/10 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button onClick={prev}
          className="w-10 h-10 rounded-full border border-[#C8963E]/40 flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E]/20 transition-colors cursor-pointer">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`transition-all duration-300 cursor-pointer ${i === current ? "w-8 h-1.5 bg-[#C8963E]" : "w-2 h-1.5 bg-[#C8963E]/30 hover:bg-[#C8963E]/60"}`}
            />
          ))}
        </div>
        <button onClick={next}
          className="w-10 h-10 rounded-full border border-[#C8963E]/40 flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E]/20 transition-colors cursor-pointer">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
