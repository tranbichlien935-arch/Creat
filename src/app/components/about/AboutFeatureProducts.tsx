import React, { useState, useRef, useEffect } from "react";
import { products } from "../Products";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppLang } from "../../hooks/useAppLang";
import { translations } from "../../translations";

export function AboutFeatureProducts() {
    const { lang } = useAppLang();
    const t = translations[lang];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollCenter = container.scrollLeft + container.clientWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child) => {
            if (!child.classList.contains('carousel-item')) return;
            const index = Number(child.getAttribute('data-index'));
            const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).clientWidth / 2;
            const distance = Math.abs(scrollCenter - childCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    };

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const items = Array.from(container.children).filter(c => c.classList.contains('carousel-item')) as HTMLElement[];
        if (items[index]) {
            const item = items[index];
            const scrollPos = item.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;
            container.scrollTo({ left: scrollPos, behavior: "smooth" });
        }
    };

    const scrollPrev = () => {
        const nextIdx = activeIndex === 0 ? 4 : activeIndex - 1;
        scrollToIndex(nextIdx);
    };

    const scrollNext = () => {
        const nextIdx = activeIndex === 4 ? 0 : activeIndex + 1;
        scrollToIndex(nextIdx);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const timer = setInterval(() => {
            scrollNext();
        }, 3500);
        return () => clearInterval(timer);
    }, [activeIndex]);

    // Scroll to product 2 on mount
    useEffect(() => {
        const timeout = setTimeout(() => scrollToIndex(1), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="bg-[#EBE5DB] w-full py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                <div className="text-center mb-10">
                    <span className="text-[#8C7A60] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
                        {t.productListLabel}
                    </span>
                    <h2 className="text-[#1C1A14] font-['Fira_Sans'] font-light text-4xl leading-[1.3]">
                        {t.ourProductsTitle}
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-[1200px] mx-auto group/carousel">

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#1C1A14] hover:bg-[#b67e53] hover:text-white transition-all ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={scrollNext}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#1C1A14] hover:bg-[#b67e53] hover:text-white transition-all ${activeIndex === 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Horizontal scroll area */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="w-full flex overflow-x-auto gap-6 py-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {/* Spacers for snapping start/end to center */}
                        <div className="flex-none w-[calc(50%-140px)] md:w-[calc(50%-160px)]" />

                        {products.slice(0, 5).map((product, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <Link
                                    to={`/san-pham/chi-tiet?id=${product.id}`}
                                    key={product.id}
                                    data-index={idx}
                                    className={`carousel-item flex-none w-[280px] md:w-[320px] bg-[#F8F3EB] rounded-sm flex flex-col snap-center border border-[#D4C4A8]/40 transition-all duration-500 ease-out cursor-pointer ${isActive ? 'scale-110 opacity-100 shadow-2xl z-20' : 'scale-90 opacity-40 hover:opacity-70 z-10'}`}
                                >
                                    <div className="relative w-full aspect-[4/5] bg-[#1C1A14] overflow-hidden p-4">
                                        <span className="absolute top-4 left-4 bg-[#F8F3EB] text-[#1C1A14] text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-20">
                                            {product.category}
                                        </span>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover relative z-10 rounded-sm"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-3 text-[10px] font-bold text-[#8C7A60] tracking-widest">
                                            <span>ABV {product.abv}</span>
                                            <span>IBU {product.details.find(d => d.label === 'Độ đắng')?.value}</span>
                                        </div>
                                        <h3 className="font-['Fira_Sans'] text-[#1C1A14] text-xl font-medium mb-3">
                                            {product.name}
                                        </h3>
                                        <p className="font-['Josefin_Sans'] text-[#5C4A30] text-sm font-light leading-relaxed mb-4 line-clamp-3">
                                            {product.desc}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-[#D4C4A8]/50 text-xs font-semibold text-[#1C1A14] uppercase tracking-widest hover:text-[#b67e53] transition-colors">
                                            {t.detailsLink}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        <div className="flex-none w-[calc(50%-140px)] md:w-[calc(50%-160px)]" />
                    </div>

                </div>
            </div>
        </section>
    );
}
