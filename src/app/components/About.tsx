import { useEffect, useRef } from "react";
import { Award, Leaf, FlaskConical } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Leaf size={28} strokeWidth={1.5} />,
    title: "Nguyên Liệu Tự Nhiên",
    desc: "Lúa mạch, hoa bia và nước tinh khiết từ thiên nhiên, không chất bảo quản, không phẩm màu nhân tạo.",
  },
  {
    icon: <FlaskConical size={28} strokeWidth={1.5} />,
    title: "Công Thức Độc Quyền",
    desc: "Mỗi dòng bia được nghiên cứu và phát triển bởi đội ngũ Brewmaster giàu kinh nghiệm quốc tế.",
  },
  {
    icon: <Award size={28} strokeWidth={1.5} />,
    title: "Chất Lượng Được Công Nhận",
    desc: "Đạt nhiều giải thưởng quốc tế, được chứng nhận bởi các tổ chức bia thủ công uy tín.",
  },
];

export function About() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating icons
    iconRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: -16,
        duration: 2.2 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
    });

    // Floating badge
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        y: -12,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // ScrollTrigger fade-in
    if (imgWrapRef.current) {
      gsap.fromTo(imgWrapRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: imgWrapRef.current, start: "top 80%" } }
      );
    }
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: textRef.current, start: "top 80%" } }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-[#F8F3EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
              Về Chúng Tôi
            </span>
            <span className="w-8 h-px bg-[#C8963E]" />
          </div>
          <h2 className="text-[#1C1A14] mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Câu Chuyện Của Creat
          </h2>
          <p className="text-[#8C7A60] max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            Được sáng lập với niềm đam mê thuần túy, Creat Craft Beer mang đến những chai bia thủ công
            chất lượng cao, tôn vinh hương vị tự nhiên và nghệ thuật ủ bia truyền thống.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div ref={imgWrapRef} className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1779591211763-7a54431e16ab?w=800&h=1000&fit=crop&auto=format"
                alt="Xưởng bia Creat"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div ref={badgeRef} className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1C1A14] rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#C8963E] text-2xl" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>10+</div>
                <div className="text-[#D4C4A8] text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>Năm<br/>kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef}>
            <h3 className="text-[#1C1A14] mb-6" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              Nghệ Thuật Ủ Bia<br /><em className="text-[#C8963E]">Thuần Việt</em>
            </h3>
            <p className="text-[#5C4A30] mb-5 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Hành trình của Creat bắt đầu từ một garage nhỏ với khát vọng tạo ra những chai bia
              khác biệt — không chỉ là đồ uống mà còn là nghệ thuật. Chúng tôi tìm kiếm và
              tuyển chọn những nguyên liệu tốt nhất từ khắp Việt Nam và thế giới.
            </p>
            <p className="text-[#5C4A30] mb-8 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Với hơn 10 năm kinh nghiệm, đội ngũ Brewmaster của chúng tôi không ngừng sáng tạo
              và hoàn thiện từng công thức, mang đến trải nghiệm hương vị độc đáo cho người yêu bia thủ công.
            </p>
            <button
              onClick={() => {}}
              className="flex items-center gap-3 text-[#C8963E] text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Xem thêm về chúng tôi
              <span className="w-8 h-px bg-[#C8963E]" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center group cursor-pointer px-4 py-6"
              style={{ transition: "all 0.4s ease", background: "transparent", border: "none" }}
            >
              {/* Icon — no circle, just the icon itself */}
              <div
                ref={(el) => { iconRefs.current[features.indexOf(f)] = el; }}
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{
                  transition: "all 0.4s ease",
                  color: "#2C2416",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "#C8963E";
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
                  (e.currentTarget as HTMLDivElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "#2C2416";
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.opacity = "1";
                }}
              >
                {f.icon}
              </div>

              {/* Title — shifts right on hover */}
              <h4
                className="text-[#1C1A14] mb-3 group-hover:text-[#C8963E]"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  transition: "all 0.4s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLHeadingElement).style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLHeadingElement).style.transform = "translateX(0)";
                }}
              >
                {f.title}
              </h4>

              <p className="text-[#8C7A60] text-sm leading-relaxed mt-1" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                {f.desc}
              </p>

              <button className="mt-5 text-[#C8963E] text-xs tracking-widest uppercase cursor-pointer group-hover:tracking-[0.35em] transition-all duration-400" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                Chi Tiết
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
