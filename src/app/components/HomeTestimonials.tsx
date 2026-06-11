import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Nguyễn Văn Đạt",
        role: "Chủ Chuỗi The Local Pub",
        content: "Chất lượng bia từ Creat Craft cực kỳ đồng đều giữa các lô chiết xuất. Chúng tôi tiết kiệm được rất nhiều thời gian nhờ quy trình cung ứng tự động, F&B margin luôn được đảm bảo.",
        avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop",
    },
    {
        id: 2,
        name: "Trần Mai Hương",
        role: "Khách hàng thân thiết",
        content: "Cuối tuần nào nhóm mình cũng ghé xưởng để chill. Không gian pub mở cực kỳ thoáng mát, bia rót trực tiếp từ vòi uống vị rất tươi, đặc biệt thích ly IPA trái cây ở đây!",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    },
    {
        id: 3,
        name: "Lê Hoàng Phúc",
        role: "Giám Đốc, Chill Skybar",
        content: "Điều tuyệt vời nhất là được nhận mẫu thử ngay tận nơi và test trực tiếp với khách hàng trước khi ra quyết định nhập lô F&B lớn. Creat Craft cung ứng siêu tốc và bài bản.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    }
];

export function HomeTestimonials() {
    return (
        <section className="bg-[#F8F5F0] py-24 px-6 font-quicksand">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <p className="text-xs font-bold tracking-[0.2em] text-[#b67e53] uppercase mb-3">
                        Đánh Giá F&B
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#202020]" style={{ fontFamily: "var(--wdtFontHeading)" }}>
                        Cảm Nhận Từ <span className="text-[#b67e53] font-semibold">Đối Tác</span>
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
                                "{item.content}"
                            </p>

                            {/* Chỗ để ảnh và tên */}
                            <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                                {/* Khung chứa Avatar */}
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F8F5F0] group-hover:border-[#b67e53] transition-colors duration-300">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
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
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
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
