import { useEffect, useRef } from "react";
import { Award, Leaf, FlaskConical } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRANSITION = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";

const features = [
  {
    icon: <Leaf size={32} strokeWidth={1.5} />,
    title: "Nguyên Liệu Tự Nhiên",
    desc: "Lúa mạch, hoa bia và nước tinh khiết từ thiên nhiên, không chất bảo quản, không phẩm màu nhân tạo.",
  },
  {
    icon: <FlaskConical size={32} strokeWidth={1.5} />,
    title: "Công Thức Độc Quyền",
    desc: "Mỗi dòng bia được nghiên cứu và phát triển bởi đội ngũ Brewmaster giàu kinh nghiệm quốc tế.",
  },
  {
    icon: <Award size={32} strokeWidth={1.5} />,
    title: "Chất Lượng Được Công Nhận",
    desc: "Đạt nhiều giải thưởng quốc tế, được chứng nhận bởi các tổ chức bia thủ công uy tín.",
  },
];

const stats = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "20+", label: "Dòng bia thủ công" },
  { value: "5", label: "Giải thưởng quốc tế" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating badge
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        y: -10,
        rotation: 6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Scroll-triggered fade-in for image
    if (imgWrapRef.current) {
      gsap.fromTo(imgWrapRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: imgWrapRef.current, start: "top 80%" },
        }
      );
    }

    // Scroll-triggered fade-in for text block
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: textRef.current, start: "top 80%" },
        }
      );
    }

    // Stagger feature cards
    featureRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: i * 0.15,
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });

    // Stats counter animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        backgroundColor: "#fdf3f2",
        padding: "96px 0",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-inner">
          ABOUT &nbsp; ABOUT &nbsp; ABOUT &nbsp; ABOUT &nbsp; ABOUT &nbsp; ABOUT
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "block", width: 40, height: 1, background: "#b67e53" }} />
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b67e53" }}>
              Về Chúng Tôi
            </span>
            <span style={{ display: "block", width: 40, height: 1, background: "#b67e53" }} />
          </div>
          <h2 style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.3,
            color: "#202020",
            margin: 0,
          }}>
            Câu Chuyện Của Creat
          </h2>
          <p style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#8C7A60",
            maxWidth: 560,
            margin: "16px auto 0",
          }}>
            Được sáng lập với niềm đam mê thuần túy, Creat Craft Beer mang đến những chai bia thủ công
            chất lượng cao, tôn vinh hương vị tự nhiên và nghệ thuật ủ bia truyền thống.
          </p>
        </div>

        {/* 2-column main content */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 64,
          alignItems: "center",
          marginBottom: 80,
        }}>
          {/* Image column — asymmetric 2-image mosaic */}
          <div
            ref={imgWrapRef}
            style={{ flex: "1 1 360px", minWidth: 280, position: "relative", paddingTop: 60 }}
          >
            {/* Large left image — positioned lower */}
            <div style={{
              position: "relative",
              zIndex: 2,
              borderRadius: 10,
              overflow: "hidden",
              width: "70%",
              aspectRatio: "4/5",
              boxShadow: "0 8px 40px rgba(44,36,22,0.12)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=750&fit=crop&auto=format"
                alt="Bia thủ công Creat"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: TRANSITION,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
            </div>

            {/* Small right image — offset to top right */}
            <div style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 3,
              borderRadius: 10,
              overflow: "hidden",
              width: "48%",
              aspectRatio: "4/3",
              boxShadow: "0 8px 32px rgba(44,36,22,0.15)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&h=300&fit=crop&auto=format"
                alt="Nguyên liệu bia tự nhiên"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: TRANSITION,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
            </div>

            {/* Floating badge */}
            <div
              ref={badgeRef}
              style={{
                position: "absolute",
                bottom: -8,
                right: "8%",
                zIndex: 4,
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "#1C1A14",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "2px solid #C8963E",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 22, color: "#C8963E", lineHeight: 1 }}>10+</span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4C4A8", textAlign: "center", marginTop: 4 }}>Năm<br />Kinh nghiệm</span>
            </div>
          </div>

          {/* Text column */}
          <div ref={textRef} style={{ flex: "1 1 360px", minWidth: 280 }}>
            <h3 style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              lineHeight: 1.3,
              color: "#202020",
              marginBottom: 20,
            }}>
              Nghệ Thuật Ủ Bia{" "}
              <em style={{ color: "#b67e53", fontStyle: "normal" }}>Thuần Việt</em>
            </h3>
            <p style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.6,
              color: "#5C4A30",
              marginBottom: 16,
            }}>
              Hành trình của Creat bắt đầu từ một garage nhỏ với khát vọng tạo ra những chai bia
              khác biệt — không chỉ là đồ uống mà còn là nghệ thuật. Chúng tôi tìm kiếm và
              tuyển chọn những nguyên liệu tốt nhất từ khắp Việt Nam và thế giới.
            </p>
            <p style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.6,
              color: "#5C4A30",
              marginBottom: 32,
            }}>
              Với hơn 10 năm kinh nghiệm, đội ngũ Brewmaster của chúng tôi không ngừng sáng tạo
              và hoàn thiện từng công thức, mang đến trải nghiệm hương vị độc đáo.
            </p>

            {/* Stats row */}
            <div
              ref={statsRef}
              style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 36 }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 32, color: "#b67e53", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Quicksand', sans-serif", fontSize: 12, color: "#8C7A60", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#b67e53",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: TRANSITION,
                padding: 0,
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget;
                btn.style.gap = "20px";
                btn.style.opacity = "0.8";
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget;
                btn.style.gap = "12px";
                btn.style.opacity = "1";
              }}
            >
              Xem thêm về chúng tôi
              <span style={{ display: "block", width: 32, height: 1, background: "#b67e53", transition: TRANSITION }} />
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={el => { featureRefs.current[i] = el; }}
              style={{
                flex: "1 1 260px",
                maxWidth: 360,
                padding: "32px 28px",
                background: "#fff",
                borderRadius: 10,
                textAlign: "center",
                transition: TRANSITION,
                cursor: "pointer",
                boxSizing: "border-box",
                boxShadow: "0 2px 12px rgba(44,36,22,0.06)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 12px 32px rgba(182,126,83,0.15)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 12px rgba(44,36,22,0.06)";
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#fdf3f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "#b67e53",
                transition: TRANSITION,
              }}>
                {f.icon}
              </div>
              <h4 style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                lineHeight: 1.3,
                color: "#202020",
                marginBottom: 10,
              }}>
                {f.title}
              </h4>
              <p style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.6,
                color: "#8C7A60",
                margin: 0,
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
