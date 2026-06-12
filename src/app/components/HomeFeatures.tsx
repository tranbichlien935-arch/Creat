import React, { useState } from 'react';
import { Droplet, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { useAppLang } from '../hooks/useAppLang';
import { translations } from '../translations';

const features = [
    {
        id: 1,
        title: "Nguyên liệu thượng hạng",
        en: "Premium Ingredients",
        descVi: "Hương vị bùng nổ từ lúa mạch và hoa bia nhập khẩu, ủ theo công thức độc bản.",
        descEn: "Explosive flavors from imported malt and hops, brewed with proprietary recipes.",
        icon: Droplet,
        image: "https://images.pexels.com/photos/3930616/pexels-photo-3930616.jpeg",
    },
    {
        id: 2,
        title: "Không gian Pub cực chill",
        en: "Enjoy the chilling pub atmosphere",
        descVi: "Trực tiếp thưởng thức bia tươi mát lạnh tại không gian xưởng đậm chất F&B.",
        descEn: "Experience fresh cold draft beer directly at our brewery-style F&B space.",
        icon: MapPin,
        image: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Chất lượng mẻ ủ đồng đều",
        en: "Consistent Quality",
        descVi: "Bí quyết ủ lên men tự nhiên đảm bảo 100 mẻ xuất xưởng chuẩn vị từng giọt.",
        descEn: "Natural fermentation secrets ensure 100 batches of perfect taste in every drop.",
        icon: ShieldCheck,
        image: "https://images.pexels.com/photos/10039992/pexels-photo-10039992.jpeg",
    },
    {
        id: 4,
        title: "Cung ứng sỉ F&B",
        en: "F&B Wholesale Supplier",
        descVi: "Chính sách giá đối tác linh hoạt, năng lực sản xuất hàng ngàn lít ổn định mỗi tháng.",
        descEn: "Flexible partner pricing policy, stable production capacity of thousands of liters monthly.",
        icon: Zap,
        image: "https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg",
    }
];

export function HomeFeatures() {
    const [active, setActive] = useState(1);
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <section className="py-24 bg-[#fdf3f2] font-quicksand">
            <div className="max-w-[120rem] mx-auto px-6 lg:px-10">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.2em] text-[#b67e53] uppercase mb-3">
                        {t.whyChoose}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "var(--wdtFontHeading)" }}>
                        {t.experienceCraftBeer} <span className="text-[#b67e53]">{t.authenticCraftBeer}</span>
                    </h2>
                </div>

                {/* Dynamic Accordion Layout */}
                <div className="flex flex-col lg:flex-row lg:h-[600px] gap-4 w-full">
                    {features.map((item) => {
                        const Icon = item.icon;
                        const isActive = active === item.id;

                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActive(item.id)}
                                onClick={() => setActive(item.id)}
                                className={`relative rounded-3xl transition-all duration-700 ease-in-out cursor-pointer group overflow-hidden
                  ${isActive ? 'lg:flex-[4]' : 'lg:flex-[1]'}`}
                            >
                                {/* Background Image — ALWAYS covers the card */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className={`w-full h-full object-cover transition-transform duration-700 
                    ${isActive ? 'scale-105' : 'scale-100 grayscale-[30%]'}`}
                                    />
                                    {/* Gradient */}
                                    <div className={`absolute inset-0 transition-all duration-500 
                    ${isActive ? 'bg-gradient-to-t from-black/90 via-black/50 to-black/20' : 'bg-black/60'}`} />
                                </div>

                                {/* MOBILE CONTENT — relative flow, not clipped */}
                                <div className="relative z-10 lg:hidden flex flex-col justify-end min-h-[200px] p-6 pointer-events-none">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`flex items-center justify-center rounded-full shrink-0 ${isActive ? 'w-10 h-10 bg-[#b67e53]' : 'w-9 h-9 bg-white/20'} text-white`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white drop-shadow-md" style={{ fontFamily: "var(--wdtFontHeading)" }}>
                                            {lang === 'en' ? <span className="notranslate">{item.en}</span> : <span>{item.title}</span>}
                                        </h3>
                                    </div>
                                    {isActive && (
                                        <p className="text-gray-300 text-sm leading-relaxed mt-1 ml-[52px]">
                                            {lang === 'en' ? item.descEn : item.descVi}
                                        </p>
                                    )}
                                </div>

                                {/* DESKTOP CONTENT — absolute layout for accordion effect */}
                                <div className="absolute bottom-0 left-0 w-full p-8 hidden lg:flex flex-col justify-end h-full z-10 pointer-events-none">
                                    <div className={`flex flex-row items-end gap-6 h-full transition-all duration-500`}>
                                        <div className={`flex items-center justify-center shrink-0 rounded-full transition-all duration-500 ${isActive ? 'w-12 h-12 bg-[#b67e53] text-white' : 'w-10 h-10 bg-white/20 text-white backdrop-blur-sm'}`}>
                                            <Icon className={isActive ? 'w-6 h-6' : 'w-5 h-5'} />
                                        </div>
                                        {/* Horizontal title - active only */}
                                        <h3
                                            className={`text-2xl font-bold drop-shadow-md text-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 invisible'}`}
                                            style={{ fontFamily: "var(--wdtFontHeading)" }}
                                        >
                                            {lang === 'en' ? <span className="notranslate">{item.en}</span> : <span>{item.title}</span>}
                                        </h3>
                                        {/* Vertical title - inactive only */}
                                        <h3
                                            className={`text-white font-bold text-xl tracking-wider whitespace-nowrap drop-shadow-md transition-opacity duration-300 absolute left-1/2 bottom-20 ${!isActive ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                            style={{ fontFamily: "var(--wdtFontHeading)", writingMode: 'vertical-rl', transform: 'translateX(-50%) rotate(180deg)' }}
                                        >
                                            {lang === 'en' ? <span className="notranslate">{item.en}</span> : <span>{item.title}</span>}
                                        </h3>
                                    </div>
                                    {/* Description - desktop active only */}
                                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-[72px]">
                                            {lang === 'en' ? item.descEn : item.descVi}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
