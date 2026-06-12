import React, { useState, useEffect } from 'react';
import { ShoppingCart } from "lucide-react";
import { useLocation, Link } from "react-router";
import { products } from '../components/Products';
import { useAppLang } from '../hooks/useAppLang';

export function ProductDetail() {
    const { lang } = useAppLang();
    const [quantity, setQuantity] = useState(1);
    const [showQR, setShowQR] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Parse ID from URL, default to 1 if not found
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id');
    const product = products.find(p => p.id === Number(productId)) || products[0];

    const handleQtyChange = (type: 'inc' | 'dec') => {
        if (type === 'inc') setQuantity(q => q + 1);
        if (type === 'dec' && quantity > 1) setQuantity(q => q - 1);
    };

    // Mock similar products
    const similarProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="bg-[#FEFBF8] min-h-screen font-sans text-[#333]">

            {/* 1. HERO BANNER */}
            <div
                className="w-full h-[40vh] md:h-[50vh] bg-cover bg-center relative flex items-center justify-center pt-24"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1920&q=80')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-white text-4xl md:text-6xl font-light mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        {lang === 'en' ? 'Products' : 'Sản Phẩm'}
                    </h1>
                    <div className="text-white/80 text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        <a href="/" className="hover:text-white transition">{lang === 'en' ? 'HOME' : 'TRANG CHỦ'}</a>
                        <span>/</span>
                        <a href="/#products" className="hover:text-white transition">{lang === 'en' ? 'PREMIUM BEER' : 'DÒNG BIA CAO CẤP'}</a>
                        <span>/</span>
                        <span className="text-[#C8963E] font-medium">{lang === 'en' ? product.name_en || product.name : product.name}</span>
                    </div>
                </div>
            </div>

            {/* 2. PRODUCT DETAILS SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Left Side: Images */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    {/* Thumbs container could go here. For now just main image */}
                    <div className="rounded-xl overflow-hidden shadow-sm bg-[#F9F7F4] flex justify-center p-8">
                        <img src={product.image} alt={product.name} className="w-full max-w-[400px] h-auto object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

                {/* Right Side: Info */}
                <div className="w-full lg:w-1/2 font-light">

                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-[#1C1A14]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        {lang === 'en' ? product.name_en || product.name : product.name}
                    </h2>



                    <div className="flex items-center gap-2 mb-8 border-b border-gray-200 pb-6">
                        <div className="flex text-[#F6AD55] text-xl">
                            {"★".repeat(product.rating || 5)}
                            {"☆".repeat(5 - (product.rating || 5))}
                        </div>
                        <span className="text-gray-500 text-[15px]">({product.reviews || 0} {lang === 'en' ? 'customer reviews' : 'đánh giá của khách hàng'})</span>
                    </div>

                    <div className="text-gray-600 leading-relaxed mb-6">
                        <p className="mb-6 text-[16px] text-justify" style={{ fontFamily: "'Lato', sans-serif" }}>{lang === 'en' ? product.desc_en || product.desc : product.desc}</p>
                        {((lang === 'en' && product.details_en ? product.details_en : product.details) || []).length > 0 && (
                            <ul className="list-disc pl-5 space-y-3 text-[16px]">
                                {(lang === 'en' && product.details_en ? product.details_en : product.details).map((detail: any, idx: number) => (
                                    <li key={idx}>
                                        <span className="font-semibold text-[#1C1A14]">{detail.label}:</span>{' '}
                                        {detail.value}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>


                    <div className="flex items-center gap-4 mb-10 text-xl mt-4">
                        <span className="text-[#1C1A14] font-medium text-[13px] tracking-widest uppercase">{lang === 'en' ? 'Price: ' : 'Giá: '}</span>
                        <span className="text-3xl lg:text-4xl text-[#C8963E] font-medium" style={{ fontFamily: "var(--wdtFontHeading)" }}>{product.price}</span>
                        {product.oldPrice && (
                            <span className="text-gray-400 line-through text-lg ml-2">{product.oldPrice}</span>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                        <button onClick={() => setShowQR(true)} className="group relative overflow-hidden h-[54px] px-8 bg-[#1C1A14] hover:bg-black text-white font-medium text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]">
                            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C8963E] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            {lang === 'en' ? 'ZALO CONSULTING' : 'ZALO TƯ VẤN'}
                        </button>

                        <a href="tel:0989354444" className="h-[54px] px-8 bg-transparent border border-[#C8963E]/40 hover:border-[#C8963E] hover:bg-[#C8963E]/5 text-[#1C1A14] hover:text-[#C8963E] font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            {lang === 'en' ? 'CALL HOTLINE' : 'GỌI HOTLINE'}
                        </a>
                    </div>



                </div>
            </div>

            {/* 3. SẢN PHẨM TƯƠNG TỰ */}
            <div className="max-w-7xl mx-auto px-4 pb-24">

                <div className="text-center mb-12 relative flex items-center justify-center">
                    <div className="absolute w-full h-px border-t border-dashed border-gray-300 z-0"></div>
                    <div className="bg-[#FEFBF8] px-10 relative z-10 flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Top-Rated</span>
                        <h3 className="text-3xl md:text-4xl font-light text-[#1C1A14]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                            {lang === 'en' ? 'Similar Products' : 'Sản phẩm tương tự'}
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {similarProducts.map((item) => (
                        <Link to={`/san-pham/chi-tiet?id=${item.id}`} key={item.id} className="flex flex-col items-center text-center group cursor-pointer no-underline">
                            <div className="w-full relative rounded-xl overflow-hidden bg-[#F9F7F4] mb-4 aspect-[4/5]">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                                <img src={item.imageAlt} alt={`${item.name} alt`} className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {item.tag && (
                                    <div className="absolute top-4 right-4 bg-[#B4855D] text-white text-[10px] tracking-wider uppercase px-2 py-1 rounded">
                                        {item.tag}
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-[#B4855D] hover:bg-[#9a6a43] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded">
                                        {lang === 'en' ? 'Quick View' : 'Khám phá'}
                                    </span>
                                </div>
                            </div>

                            <h4 className="text-[#1C1A14] font-medium text-sm lg:text-base uppercase tracking-wider mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                                {lang === 'en' ? item.name_en || item.name : item.name}
                            </h4>
                            <span className="text-gray-400 text-xs mb-3 font-medium uppercase tracking-widest">{(lang === 'en' ? item.category_en : item.category) || item.category} Beer</span>

                            <div className="flex items-center justify-center gap-2">
                                {item.oldPrice && (
                                    <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>
                                )}
                                <span className="text-[#E03C31] text-md font-medium">{item.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Modal QR Code */}
            {showQR && (
                <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
                    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full relative animate-in fade-in zoom-in-95 duration-200">
                        <button onClick={() => setShowQR(false)} className="absolute top-3 right-3 text-gray-400 hover:text-black">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <h3 className="text-center font-bold text-lg mb-4 text-[#0F253F] font-['Josefin_Sans']">{lang === 'en' ? 'Scan Zalo QR to Contact' : 'Quét mã Zalo để liên hệ'}</h3>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://zalo.me/0989354444&bgcolor=ffffff`} alt="Zalo QR" className="w-full h-auto rounded border border-gray-100" />
                        <div className="text-center mt-4 text-sm text-gray-500">
                            {lang === 'en' ? 'Or call hotline:' : 'Hoặc gọi số điện thoại:'} <span className="font-bold text-black">098 935 4444</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
