import React, { useEffect, useRef, useState } from "react";

const images = [
    "https://creatcraft.com.vn/upload/elfinder/content/533407544_122219014610127186_2865494078859405934_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/526609415_122217269564127186_2705118549580018600_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/581338396_122229625592127186_5220388750411615032_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/bia-thu-cong-tan-phu2.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/654362021_122244596732127186_7839707364256348412_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/621818225_122239330172127186_2111523416057106119_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/496413198_122205345446127186_6650641013472931228_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/533407544_122219014610127186_2865494078859405934_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/526609415_122217269564127186_2705118549580018600_n.jpg",
];

function GalleryItem({ src, index }: { src: string; index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 100);
                }
            },
            { threshold: 0.1 }
        );

        if (itemRef.current) observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={itemRef}
            className="group cursor-pointer"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.05}s`,
            }}
        >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                    <img
                        src={src}
                        alt="Creat Craft Beer Gallery"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                        loading="lazy"
                    />
                </div>
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}

export function HomeGallery() {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollProgress = -rect.top / (rect.height + window.innerHeight);
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Chia ảnh thành 3 cột với parallax khác nhau
    const col1 = images.filter((_, i) => i % 3 === 0);
    const col2 = images.filter((_, i) => i % 3 === 1);
    const col3 = images.filter((_, i) => i % 3 === 2);

    return (
        <section ref={sectionRef} className="w-full py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Column 1 - Move up slowly */}
                    <div
                        className="space-y-6 lg:space-y-8"
                        style={{
                            transform: `translateY(${scrollY * -30}px)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        {col1.map((img, i) => (
                            <GalleryItem key={i} src={img} index={i * 3} />
                        ))}
                    </div>

                    {/* Column 2 - Move down slowly (opposite direction) */}
                    <div
                        className="space-y-6 lg:space-y-8"
                        style={{
                            transform: `translateY(${scrollY * 30}px)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        {col2.map((img, i) => (
                            <GalleryItem key={i} src={img} index={i * 3 + 1} />
                        ))}
                    </div>

                    {/* Column 3 - Move up slowly */}
                    <div
                        className="space-y-6 lg:space-y-8"
                        style={{
                            transform: `translateY(${scrollY * -30}px)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        {col3.map((img, i) => (
                            <GalleryItem key={i} src={img} index={i * 3 + 2} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
