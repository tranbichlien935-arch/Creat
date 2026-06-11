import React from "react";
import { Wheat, Beer, Droplet, Leaf } from "lucide-react";
import { useAppLang } from "../../hooks/useAppLang";
import { translations } from "../../translations";

export function AboutValues() {
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <section className="bg-[#EBE5DB] w-full py-12 lg:py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background watermark icon/pattern (optional) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-[600px] h-[600px]">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8 2 4 5 4 9C4 13 8 16 12 16C16 16 20 13 20 9C20 5 16 2 12 2ZM12 14C9.2 14 6 11.8 6 9C6 6.2 9.2 4 12 4C14.8 4 18 6.2 18 9C18 11.8 14.8 14 12 14Z" />
                    <path d="M12 22C16 22 19 19 19 15H5C5 19 8 22 12 22Z" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">

                {/* Left Side: Large Statement */}
                <div className="lg:col-span-7 pr-0 lg:pr-10">
                    <h2 className="text-[#1C1A14] font-['Outfit'] font-light text-[32px] md:text-[40px] leading-[1.3] tracking-wide">
                        {t.valuesStatement}
                    </h2>
                </div>

                {/* Right Side: Small Text + Core Values (Stats layout) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <p className="font-['Josefin_Sans'] text-[#5C4A30] text-sm md:text-[14px] leading-[1.8] font-light">
                        {t.valuesCoreLabel}
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="flex flex-col gap-2 group">
                            <div className="text-[#b67e53] mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <Wheat size={32} strokeWidth={1} />
                            </div>
                            <span className="text-[#b67e53] font-['Fira_Sans'] text-2xl lg:text-3xl font-light">{t.craftQuality}</span>
                            <span className="text-[#1C1A14] font-['Josefin_Sans'] text-[11px] font-semibold uppercase tracking-widest whitespace-pre-line">{t.craftQualityLabel}</span>
                        </div>

                        <div className="flex flex-col gap-2 group">
                            <div className="text-[#b67e53] mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <Beer size={32} strokeWidth={1} />
                            </div>
                            <span className="text-[#b67e53] font-['Fira_Sans'] text-2xl lg:text-3xl font-light">{t.creativityUnique}</span>
                            <span className="text-[#1C1A14] font-['Josefin_Sans'] text-[11px] font-semibold uppercase tracking-widest whitespace-pre-line">{t.creativityLabel}</span>
                        </div>

                        <div className="flex flex-col gap-2 group">
                            <div className="text-[#b67e53] mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <Droplet size={32} strokeWidth={1.2} />
                            </div>
                            <span className="text-[#b67e53] font-['Fira_Sans'] text-2xl lg:text-3xl font-light">{t.communityReal}</span>
                            <span className="text-[#1C1A14] font-['Josefin_Sans'] text-[11px] font-semibold uppercase tracking-widest whitespace-pre-line">{t.communityLabel}</span>
                        </div>

                        <div className="flex flex-col gap-2 group">
                            <div className="text-[#b67e53] mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <Leaf size={32} strokeWidth={1} />
                            </div>
                            <span className="text-[#b67e53] font-['Fira_Sans'] text-2xl lg:text-3xl font-light">{t.valueReasonable}</span>
                            <span className="text-[#1C1A14] font-['Josefin_Sans'] text-[11px] font-semibold uppercase tracking-widest whitespace-pre-line">{t.valueLabel}</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
