import React, { useState } from 'react';

export function HomeJourney() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 bg-[#1C1A14] flex flex-col lg:flex-row items-center justify-center relative overflow-hidden gap-12 lg:gap-24 px-8 border-t border-b border-[#C8963E]/20">
            {/* Background Image Setup */}
            <img
                src="https://images.pexels.com/photos/13178288/pexels-photo-13178288.jpeg"
                alt="Background Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
            />

            {/* Background Ambient Lights */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C8963E]/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#C8963E]/10 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* SVG Animation Block (Desktop Only) */}
            <div
                className="hidden md:flex relative items-center justify-center w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] shrink-0 group cursor-default"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Floating Tooltip/Popup on hover */}
                <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-[#2C2416] border border-[#C8963E]/40 px-6 py-3 rounded text-[#dfa173] text-sm tracking-widest whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 z-50 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    Quy trình cung ứng B2B tinh gọn
                </div>

                {/* Rotating SVG */}
                <div className="absolute inset-0">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_15s_linear_infinite] group-hover:[animation-play-state:paused] transition-all duration-500">
                        <path id="journeyCircle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                        <text className="text-[12.5px] uppercase fill-[#dfa173]/80 group-hover:fill-[#C8963E] transition-colors duration-500 font-bold" style={{ letterSpacing: "0.15em" }}>
                            <textPath href="#journeyCircle" startOffset="0%">
                                KHÁM PHÁ • THƯỞNG THỨC • MUA LẺ • HỢP TÁC SỈ • KHÁM PHÁ • THƯỞNG THỨC • MUA LẺ • HỢP TÁC SỈ •
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Center Logo */}
                <div className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                    <div className="w-40 h-40 flex items-center justify-center pointer-events-none">
                        <img src="/logo.png" alt="Creat Craft Beer" className="w-32 object-cover scale-[1.7] mix-blend-screen translate-y-1 drop-shadow-[0_2px_15px_rgba(200,150,62,0.8)]" />
                    </div>
                </div>
            </div>

            {/* Explanatory Content / Vertical Timeline */}
            <div className="max-w-md w-full relative z-10">
                <h2 className="text-[#C8963E] text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">
                    Quy Trình Cung Ứng
                </h2>
                <h3 className="text-white text-3xl md:text-5xl font-light mb-12 leading-tight">
                    Giải Pháp <br /><span className="text-[#dfa173] font-medium">Đối Tác B2B</span>
                </h3>

                <div className="relative space-y-8 md:space-y-6">
                    {/* Vertical Connector Line (Mobile) */}
                    <div className="absolute left-[1.15rem] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#C8963E]/50 to-transparent md:hidden pointer-events-none"></div>

                    {[
                        { tag: "01", title: "Khám phá hương vị", desc: "Tìm hiểu dòng craft beer độc bản phù hợp gu thưởng thức." },
                        { tag: "02", title: "Thưởng thức tại Pub", desc: "Ghé thăm không gian của Creat để chill và uống bia tươi trực tiếp." },
                        { tag: "03", title: "Mua lẻ giao tận nơi", desc: "Đặt hàng online dễ dàng để tận hưởng bia ngon ở bất kỳ đâu." },
                        { tag: "04", title: "Hợp tác sỉ B2B", desc: "Cung ứng sản lượng lớn ổn định với chiết khấu tốt cho đối tác quán bar." },
                    ].map((item, i) => (
                        <div key={i} className={`relative flex gap-6 p-4 md:p-6 rounded-lg transition-colors duration-300 z-10 ${isHovered ? 'md:bg-white/5 md:border md:border-white/10' : 'md:border md:border-transparent'} bg-[#15130f] md:bg-transparent shadow-lg md:shadow-none border border-white/5`}>
                            {/* Number Bubble */}
                            <div className="w-10 h-10 shrink-0 rounded-full bg-[#2C2416] border border-[#C8963E]/40 flex items-center justify-center text-[#dfa173] font-bold shadow-[0_0_15px_rgba(200,150,62,0.15)] mt-1">
                                {item.tag}
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-lg mb-2 tracking-wide shadow-black drop-shadow-md">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
