import React from 'react';
import { Quote } from 'lucide-react';
import { useAppLang } from '../hooks/useAppLang';
import { translations } from '../translations';

const testimonials = [
    {
        id: 1,
        nameVi: "Nguyễn Văn Đạt",
        nameEn: "Nguyen Van Dat",
        roleVi: "Chủ Chuỗi The Local Pub",
        roleEn: "Owner, The Local Pub Chain",
        contentVi: "Chất lượng bia từ Creat Craft cực kỳ đồng đều giữa các lô chiết xuất. Chúng tôi tiết kiệm được rất nhiều thời gian nhờ quy trình cung ứng tự động, F&B margin luôn được đảm bảo.",
        contentEn: "The beer quality from Creat Craft is incredibly consistent across extraction batches. We save a lot of time thanks to the automated supply process, and F&B margins are always guaranteed.",
        avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop",
    },
    {
        id: 2,
        nameVi: "Trần Mai Hương",
        nameEn: "Tran Mai Huong",
        roleVi: "Khách hàng thân thiết",
        roleEn: "Loyal Customer",
        contentVi: "Cuối tuần nào nhóm mình cũng ghé xưởng để chill. Không gian pub mở cực kỳ thoáng mát, bia rót trực tiếp từ vòi uống vị rất tươi, đặc biệt thích ly IPA trái cây ở đây!",
        contentEn: "Every weekend our group visits the brewery to chill. The open pub space is extremely airy, beer poured directly from the tap tastes so fresh, especially love the fruit IPA here!",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    },
    {
        id: 3,
        nameVi: "Lê Hoàng Phúc",
        nameEn: "Le Hoang Phuc",
        roleVi: "Giám Đốc, Chill Skybar",
        roleEn: "Director, Chill Skybar",
        contentVi: "Điều tuyệt vời nhất là được nhận mẫu thử ngay tận nơi và test trực tiếp với khách hàng trước khi ra quyết định nhập lô F&B lớn. Creat Craft cung ứng siêu tốc và bài bản.",
        contentEn: "The best thing is receiving samples on-site and testing directly with customers before making the decision to import large F&B batches. Creat Craft supplies super fast and professionally.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    }
];

export function HomeTestimonials() {
    const { lang } = useAppLang();
    const t = translations[lang];
    return (
        <section className="bg-[#F8F5F0] py-24 px-6 font-quicksand">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <p className="text-xs font-bold tracking-[0.2em] text-[#b67e53] uppercase mb-3">
                        {t.fbReviews}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#202020]" style={{ fontFamily: "var(--wdtFontHeading)" }}>
                        {t.partnerFeedback} <span className="text-[#b67e53] font-semibold">{t.partners}</span>
                    </h2>
                </div>

                {/* Lưới 3 cột */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white p-10 rounded-2xl border border-[#e2dfcc]/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(182,126,83,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between h-full"
                        >

                            {/* Dấu ngoặc kép in chìm làm background */}
                            <div className="absolute -top-4 -right-4 text-[#F8F5F0] group-hover:text-[#F8F5F0]/50 transition-colors duration-500 z-0">
                                <Quote size={140} strokeWidth={1} fill="currentColor" className="transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700" />
                            </div>

                            {/* Dấu ngoặc kép nhỏ ở đầu câu */}
                            <div className="mb-6 relative z-10">
                                <Quote size={32} className="text-[#b67e53] opacity-80" />
                            </div>

                            {/* Nội dung đánh giá */}
                            <p className="text-gray-600 leading-relaxed italic mb-8 relative z-10 flex-grow">
                                "{lang === 'en' ? item.contentEn : item.contentVi}"
                            </p>

                            {/* Chỗ để ảnh và tên */}
                            <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                                {/* Khung chứa Avatar */}
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F8F5F0] group-hover:border-[#b67e53] transition-colors duration-300">
                                        <img
                                            src={item.avatar}
                                            alt={lang === 'en' ? item.nameEn : item.nameVi}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Dấu chấm xanh online */}
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>

                                {/* Thông tin */}
                                <div>
                                    <h4 className="font-bold text-[#202020] group-hover:text-[#b67e53] transition-colors duration-300">
                                        {lang === 'en' ? item.nameEn : item.nameVi}
                                    </h4>
                                    <p className="text-sm text-gray-500">{lang === 'en' ? item.roleEn : item.roleVi}</p>
                                </div>
                            </div>

                            {/* Đường line chạy ngang */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#b67e53] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
