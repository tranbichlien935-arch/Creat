import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { useAppLang } from "../hooks/useAppLang";
import { translations } from "../translations";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { lang } = useAppLang();
  const t = translations[lang];

  const slides = [
    {
      id: 1,
      bg: "/page-banner.jpg?v=2",
      tag: t.heroSlide1Tag,
      heading1: t.heroSlide1Heading1,
      heading2: t.heroSlide1Heading2,
      sub: t.heroSlide1Sub,
      cta: t.heroSlide1CTA,
      ctaLink: "/san-pham",
    },
    {
      id: 2,
      bg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
      tag: t.heroSlide2Tag,
      heading1: t.heroSlide2Heading1,
      heading2: t.heroSlide2Heading2,
      sub: t.heroSlide2Sub,
      cta: t.heroSlide2CTA,
      ctaLink: "/menu",
    }
  ];

  const tagRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const animateIn = () => {
    const tl = gsap.timeline();
    tl.fromTo(imgRef.current, { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 0.4, duration: 1, ease: "power2.out" })
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

  const navigate = useNavigate();

  const handleCTA = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1C1A14 0%, #2E2515 50%, #1C1A14 100%)" }}
    >
      {/* BG image */}
      <div ref={imgRef} className="absolute inset-0"
        style={{
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full container mx-auto px-4 mt-8 lg:mt-16 text-center flex flex-col items-center">
        <div ref={tagRef} className="mb-4">
          <span className="text-[#C8963E] text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
            {slide.tag}
          </span>
        </div>

        <h1 ref={h1Ref} className="text-white mb-1 drop-shadow-lg"
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.2 }}>
          {slide.heading1}
        </h1>
        <span ref={h2Ref} className="block text-[#C8963E] mb-6 drop-shadow-lg"
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.2 }}>
          {slide.heading2}
        </span>

        <p ref={subRef} className="text-white mb-8 leading-relaxed max-w-lg drop-shadow-md brightness-110 px-4"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", fontWeight: 400 }}>
          {slide.sub}
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
          <button
            onClick={() => handleCTA(slide.ctaLink)}
            className="px-6 py-3 md:px-8 md:py-4 bg-[#C8963E] text-white text-[11px] md:text-[13px] tracking-[0.15em] uppercase hover:bg-[#b0802e] hover:shadow-[0_8px_20px_rgba(200,150,62,0.4)] hover:-translate-y-1 transform transition-all duration-300 cursor-pointer border-none outline-none"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600 }}
          >
            {slide.cta}
          </button>
          <button
            onClick={() => handleCTA("/lien-he")}
            className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/30 text-white text-[11px] md:text-[13px] tracking-[0.15em] uppercase hover:bg-white/10 hover:-translate-y-1 transform transition-all duration-300 cursor-pointer outline-none"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600 }}
          >
            {t.heroCTASecondary}
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div
        id="scroll-down-btn"
        className="mt-12 flex flex-col items-center cursor-pointer group hover:opacity-80 transition-opacity animate-bounce hidden sm:flex"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('signature-products');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            handleCTA("/#products");
          }
        }}
      >
        <ChevronDown className="text-white/70 w-8 h-8 drop-shadow-md" />
      </div>
    </section>
  );
}
