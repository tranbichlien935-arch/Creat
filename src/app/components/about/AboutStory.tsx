import React from "react";
import { useAppLang } from "../../hooks/useAppLang";
import { translations } from "../../translations";

export function AboutStory() {
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <section className="bg-[#F8F3EB] pt-24 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Inline Marquee bypassing CSS cache */}
            <style>
                {`
                    @keyframes slideMarquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                `}
            </style>
            <div
                className="absolute left-0 w-full overflow-hidden pointer-events-none z-0"
                style={{ top: "-30px", opacity: 0.6 }}
            >
                <div
                    className="inline-block whitespace-nowrap uppercase font-light"
                    style={{
                        fontSize: "12rem",
                        color: "transparent",
                        WebkitTextStroke: "1px #e6d8cd",
                        letterSpacing: "15px",
                        lineHeight: 1,
                        animation: "slideMarquee 40s linear infinite"
                    }}
                >
                    ABOUT &nbsp;&nbsp;&nbsp; ABOUT &nbsp;&nbsp;&nbsp; ABOUT &nbsp;&nbsp;&nbsp; ABOUT &nbsp;&nbsp;&nbsp; ABOUT &nbsp;&nbsp;&nbsp; ABOUT &nbsp;&nbsp;&nbsp; ABOUT &nbsp;&nbsp;&nbsp; ABOUT
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">

                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-start">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-[#8C7A60]"></span>
                            <span className="text-[#8C7A60] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase">
                                {t.aboutUsLabel}
                            </span>
                        </div>
                        <h2 className="text-[#1C1A14] font-['Fira_Sans'] font-light text-4xl leading-[1.3] text-balance">
                            {t.aboutTitle}
                        </h2>
                    </div>

                    <div className="w-full aspect-square overflow-hidden rounded-sm relative group bg-white shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1571767454098-246b94fbcf70?q=80&w=800&auto=format&fit=crop"
                            alt="Creat Craft Beer Atmosphere"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 flex flex-col justify-end lg:pt-32">
                    <div className="w-full aspect-[3/2] overflow-hidden rounded-sm relative group shadow-md mb-10 bg-white">
                        <img
                            src="https://creatcraft.com.vn/upload/news/z72806845964888d3ea24d2010ef4170465bf5526f41a4-1552-7372.jpg"
                            alt="Serum Product Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="max-w-[90%] md:max-w-xl mx-auto lg:mx-0">
                        <p className="font-['Josefin_Sans'] text-[#5C4A30] text-[15px] leading-relaxed mb-6 font-light">
                            {t.aboutParagraph1}
                        </p>
                        <p className="font-['Josefin_Sans'] text-[#5C4A30] text-[15px] leading-relaxed mb-8 font-light">
                            {t.aboutParagraph2}
                        </p>

                        <div className="mt-8 flex justify-end pr-10">
                            <span className="font-['Clicker_Script',cursive] text-4xl text-[#1C1A14]/80 -rotate-3">
                                {t.aboutSignature}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
