import { HeroSlider } from "../components/HeroSlider";
import { HomeFeatures } from "../components/HomeFeatures";
import { HomeJourney } from "../components/HomeJourney";
import { HomeTestimonials } from "../components/HomeTestimonials";
import { HomeGallery } from "../components/HomeGallery";
import { products } from "../components/Products";
import { newsContent } from "../data/newsData";
import { Link, useNavigate } from "react-router";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useAppLang } from "../hooks/useAppLang";

export function HomePage() {
    const navigate = useNavigate();
    const { lang } = useAppLang();

    // Get top 3 featured products for the grid
    const featuredProducts = products.slice(0, 3);

    // Get top 3 news
    const featuredNewsTags = Object.keys(newsContent).slice(0, 3);

    return (
        <main>
            <HeroSlider />
            <HomeFeatures />

            {/* Featured Products */}
            <section id="signature-products" className="py-24 bg-[#EDE5D8]">
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <h2 style={{
                            fontFamily: "var(--wdtFontHeading)",
                            fontWeight: 300,
                            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                            color: "var(--wdtDarkColor, #1C1A14)",
                            margin: "0 0 12px",
                        }}>
                            {lang === 'en' ? 'Featured Products' : 'Sản Phẩm Nổi Bật'}
                        </h2>
                        <p style={{
                            fontFamily: "var(--wdtFontBase)",
                            color: "var(--wdtMutedColor)",
                        }}>
                            {lang === 'en' ? 'Our most beloved craft beer selections' : 'Những dòng bia thủ công được yêu thích nhất'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => {
                            return (
                                <motion.div
                                    key={product.id}
                                    onClick={() => navigate('/san-pham')}
                                    className="bg-transparent transition-all duration-500 group flex flex-col cursor-pointer hover:-translate-y-2 focus:outline-none select-none"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                                >

                                    {/* Khung Ảnh */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-transparent">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                        {/* Badge (Nhãn dán) */}
                                        {product.tag && (
                                            <div className="absolute top-4 left-4 bg-[#c89a58] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 shadow-md z-10">
                                                {product.tag}
                                            </div>
                                        )}
                                    </div>

                                    {/* Nội dung chữ */}
                                    <div className="pt-6 pb-2 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest text-gray-400 mb-3 uppercase">
                                            <span>{product.category}</span>
                                            <span className="w-1 h-1 bg-[#b67e53] rounded-full"></span>
                                            <span>ABV {product.abv}</span>
                                        </div>
                                        <h3 className="text-2xl font-light mb-2" style={{ fontFamily: "var(--wdtFontHeading)", color: "var(--wdtDarkColor, #1C1A14)" }}>{product.name}</h3>
                                        <p className="text-[#b67e53] font-bold text-lg mb-6 flex-grow">{product.price}</p>

                                        {/* Nút bấm */}
                                        <div className="w-full h-[1px] bg-gray-200 mb-4 opacity-50"></div>
                                        <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#8C7A60] group-hover:text-[#b67e53] transition-colors">
                                            {lang === 'en' ? <span className="notranslate">EXPLORE</span> : <span>XEM CHI TIẾT</span>}
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <Link to="/san-pham" className="hover:shadow-[0_8px_25px_rgba(200,150,62,0.4)] hover:-translate-y-1 transition-all duration-300" style={{
                            display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 30px",
                            background: "var(--wdtGoldColor)", color: "#fff", textTransform: "uppercase",
                            letterSpacing: "0.1em", fontSize: 13, fontWeight: 700, borderRadius: 4, textDecoration: 'none',
                            boxShadow: "0 4px 10px rgba(200,150,62,0.2)"
                        }}>
                            {lang === 'en' ? <span className="notranslate">VIEW ALL PRODUCTS</span> : <span>Xem Tất Cả Sản Phẩm</span>} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <HomeJourney />
            <HomeTestimonials />

            {/* Gallery Section - Different animation from About page */}
            <HomeGallery />

            {/* Featured News */}
            <section className="py-24 bg-white">
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <h2 style={{
                            fontFamily: "var(--wdtFontHeading)",
                            fontWeight: 300,
                            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                            color: "var(--wdtDarkColor, #1C1A14)",
                            margin: "0 0 12px",
                        }}>
                            {lang === 'en' ? 'Latest News' : 'Tin Tức Mới Nhất'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredNewsTags.map(slug => {
                            const article = newsContent[slug];
                            return (
                                <Link to={`/tin-tuc/${slug}`} key={slug} className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-[1.02] border border-[#D4C4A8]/20 no-underline">
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex gap-4 text-[10px] tracking-widest text-[#8C7A60] mb-4 uppercase font-bold">
                                            <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                                            <span className="flex items-center gap-1.5"><Tag size={12} /> {article.category}</span>
                                        </div>
                                        <h3 className="text-xl text-[#1C1A14] font-bold mb-3 leading-snug group-hover:text-[#b67e53] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-[#8C7A60] mb-6 line-clamp-3 leading-relaxed">
                                            {article.breadcrumbTitle}
                                        </p>

                                        {/* XEM THÊM Button */}
                                        <div className="mt-auto inline-flex items-center gap-2 text-[#b67e53] text-[11px] font-bold tracking-[0.2em] uppercase cursor-pointer">
                                            {lang === 'en' ? <span className="notranslate">SEE MORE</span> : <span>Xem Thêm</span>} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <Link to="/tin-tuc" style={{
                            display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 30px",
                            border: "1px solid var(--wdtDarkColor)", color: "var(--wdtDarkColor)", textTransform: "uppercase",
                            letterSpacing: "0.1em", fontSize: 13, fontWeight: 700, borderRadius: 4, textDecoration: 'none'
                        }}>
                            {lang === 'en' ? 'View All News' : 'Xem Tất Cả Tin Tức'}
                        </Link>
                    </div>
                </div>
            </section>
        </main >
    );
}
