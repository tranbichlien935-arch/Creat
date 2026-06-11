import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import gsap from 'gsap';
import { useAppLang } from '../hooks/useAppLang';

export function ContactPage() {
    const { lang } = useAppLang();
    const infoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();
        if (infoRef.current && formRef.current) {
            tl.fromTo(infoRef.current.children,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
            )
                .fromTo(formRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
                    "-=0.4"
                );
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(lang === 'en' ? "Message sent successfully!" : "Đã gửi tin nhắn cho Creat Craft Beer thành công nha bro!");
    };

    return (
        <div className="bg-[#1C1A14] min-h-screen font-quicksand text-white">

            {/* 1. HERO SECTION */}
            <PageBanner title={lang === 'en' ? "Contact Us" : "Liên Hệ"} breadcrumb={lang === 'en' ? "CONTACT" : "LIÊN HỆ"} />

            {/* 2. SPLIT LAYOUT SECTION */}
            <section className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Contact Information */}
                    <div ref={infoRef} className="w-full lg:w-5/12 flex flex-col justify-center">
                        <div className="mb-4">
                            <span className="text-[#C8963E] text-xs font-bold tracking-[0.3em] uppercase">{lang === 'en' ? 'Get In Touch' : 'Kết Nối'}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "var(--wdtFontHeading)" }}>
                            {lang === 'en' ? "Let's grab a" : "Cùng Thưởng"} <br />
                            <span className="text-[#C8963E] font-bold">{lang === 'en' ? "Craft Beer." : "Thức Bia."}</span>
                        </h2>

                        <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-md">
                            {lang === 'en' ? "Drop us a line to reserve a table, inquire about wholesale, or simply talk about good beer. We'd love to hear from you." : "Hãy liên hệ để đặt bàn, tìm hiểu về giá sỉ, hay đơn giản là cùng trò chuyện về bia thủ công. Chúng tôi luôn sẵn lòng lắng nghe bạn."}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C8963E] group-hover:text-[#1C1A14] group-hover:border-[#C8963E] transition-all duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest text-gray-300 uppercase mb-2" style={{ fontFamily: "var(--wdtFontHeading)" }}>{lang === 'en' ? 'Location' : 'Địa chỉ'}</h4>
                                    <p className="text-gray-400 text-[15px] leading-relaxed">93 Đường số 11, P. Tây Thạnh,<br />Q. Tân Phú, TP.HCM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C8963E] group-hover:text-[#1C1A14] group-hover:border-[#C8963E] transition-all duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest text-gray-300 uppercase mb-2" style={{ fontFamily: "var(--wdtFontHeading)" }}>{lang === 'en' ? 'Phone' : 'Điện thoại'}</h4>
                                    <p className="text-gray-400 text-[15px]">(+84) 098 935 4444</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C8963E] group-hover:text-[#1C1A14] group-hover:border-[#C8963E] transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest text-gray-300 uppercase mb-2" style={{ fontFamily: "var(--wdtFontHeading)" }}>Email</h4>
                                    <p className="text-gray-400 text-[15px]">creatcraftbeer@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C8963E] group-hover:text-[#1C1A14] group-hover:border-[#C8963E] transition-all duration-300">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest text-gray-300 uppercase mb-2" style={{ fontFamily: "var(--wdtFontHeading)" }}>{lang === 'en' ? 'Working Hours' : 'Giờ Hoạt Động'}</h4>
                                    <p className="text-gray-400 text-[15px]">{lang === 'en' ? 'Mon-Sun: 9:00 AM - 10:00 PM' : 'Thứ 2 - CN: 9:00 Sáng - 10:00 Tối'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Glassmorphism Form & Map */}
                    <div ref={formRef} className="w-full lg:w-7/12 relative mt-10 lg:mt-0">
                        {/* Interactive Background Shape */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[110%] h-[110%] bg-[#b67e53]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <h3 className="text-2xl font-light text-white mb-8" style={{ fontFamily: "var(--wdtFontHeading)" }}>
                                {lang === 'en' ? 'Send a Message' : 'Gửi Tin Nhắn'}
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder={lang === 'en' ? 'Your Name' : 'Họ Tên'}
                                            required
                                            className="w-full px-5 py-4 bg-black/20 border border-white/10 focus:border-[#C8963E] focus:bg-black/40 text-white placeholder-gray-500 rounded-lg outline-none transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            className="w-full px-5 py-4 bg-black/20 border border-white/10 focus:border-[#C8963E] focus:bg-black/40 text-white placeholder-gray-500 rounded-lg outline-none transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder={lang === 'en' ? 'Subject' : 'Tiêu Đề'}
                                        required
                                        className="w-full px-5 py-4 bg-black/20 border border-white/10 focus:border-[#C8963E] focus:bg-black/40 text-white placeholder-gray-500 rounded-lg outline-none transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={5}
                                        placeholder={lang === 'en' ? 'Your Message' : 'Nội Dung Tin Nhắn'}
                                        required
                                        className="w-full px-5 py-4 bg-black/20 border border-white/10 focus:border-[#C8963E] focus:bg-black/40 text-white placeholder-gray-500 rounded-lg outline-none transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#C8963E] text-[#1C1A14] px-8 py-4 rounded-lg font-bold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 group"
                                >
                                    {lang === 'en' ? 'SEND INQUIRY' : 'GỬI ĐI'}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* Google Maps Full Width Footer */}
            <section className="w-full h-[500px] border-t border-white/10 mt-10">
                <iframe
                    title="Creat Craft Beer Map"
                    src="https://maps.google.com/maps?q=93%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%2011,%20P.%20T%C3%A2y%20Th%E1%BA%A1nh,%20T%C3%A2n%20Ph%C3%BA,%20TP.HCM&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.8)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
}
