import { useState } from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const news = [
  {
    id: 1,
    date: "18 Tháng 4, 2026",
    category: "Thương hiệu",
    title: "Bia thủ công đóng chai giá sỉ",
    excerpt: "Giới thiệu thương hiệu Creat Craft, tập trung vào trải nghiệm bia tươi mới, đậm đà và quy trình ủ bia đạt chuẩn.",
    image: "https://creatcraft.com.vn/upload/news/dattiec-7628.jpg",
    link: "/tin-tuc/bia-thu-cong-dong-chai-gia-si",
  },
  {
    id: 2,
    date: "15 Tháng 4, 2026",
    category: "Kiến thức",
    title: "Bia IPA là gì? Mua bia IPA ở đâu?",
    excerpt: "Giải thích đặc trưng hương vị, hậu vị của dòng bia IPA và lý do nên thử tại Creat Craft.",
    image: "https://creatcraft.com.vn/upload/news/trai-nghiem-bia-ipa-tuoi-mat-2013.jpg",
    link: "/tin-tuc/bia-ipa-la-gi-mua-bia-ipa-o-dau",
  },
  {
    id: 3,
    date: "13 Tháng 4, 2026",
    category: "Câu chuyện",
    title: "Từ quán Bia Thủ Công đến nhà cung ứng bia chuyên nghiệp",
    excerpt: "Câu chuyện chuyển mình từ một quán nhỏ thành nhà cung cấp bia ổn định cho thị trường.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-15-1382.jpg",
    link: "/tin-tuc/tu-quan-bia-thu-cong-den-nha-cung-ung-bia-chuyen-nghiep",
  },
  {
    id: 4,
    date: "13 Tháng 4, 2026",
    category: "Câu chuyện",
    title: "Hành trình kiến tạo hơn 40.000 lít bia thủ công mỗi năm",
    excerpt: "Chia sẻ về quy trình, tâm huyết và cách họ giữ được \"cái tôi\" riêng trong từng mẻ bia.",
    image: "https://creatcraft.com.vn/upload/news/z72806845964888d3ea24d2010ef4170465bf5526f41a4-1552-1541.jpg",
    link: "/tin-tuc/creat-craft-hanh-trinh-kien-tao-hon-40000-lit-bia-thu-cong-moi-nam",
  },
  {
    id: 5,
    date: "10 Tháng 4, 2026",
    category: "Nguyên liệu",
    title: "Những loại hoa bia phổ biến",
    excerpt: "Tìm hiểu về hoa bia – \"chìa khóa\" định hình cá tính và hương vị độc đáo cho bia thủ công.",
    image: "https://creatcraft.com.vn/upload/news/hoa-bia-la-gi-vai-tro-cua-hoa-bia-trong-bia-thu-cong1-9938.jpg",
    link: "/tin-tuc/nhung-loai-hoa-bia-pho-bien",
  },
  {
    id: 6,
    date: "08 Tháng 4, 2026",
    category: "Kiến thức",
    title: "Vì sao cần phải xay malt khi nấu bia thủ công?",
    excerpt: "Giải thích vai trò của malt (đại mạch) như là \"linh hồn\" của bia và tầm quan trọng của việc xử lý nguyên liệu.",
    image: "https://creatcraft.com.vn/upload/news/bia-thu-cong-len-men-nhu-the-nao2-8059.jpg",
    link: "/tin-tuc/vi-sao-can-phai-xay-malt-khi-nau-bia-thu-cong",
  },
  {
    id: 7,
    date: "06 Tháng 4, 2026",
    category: "Kinh doanh",
    title: "Giá bia thủ công nhập sỉ cho nhà hàng",
    excerpt: "Đối với quán bar hay nhà hàng, việc nhập sỉ bia thủ công không chỉ đơn giản là thêm một món đồ uống.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-13-2295.jpg",
    link: "/tin-tuc/gia-bia-thu-cong-nhap-si-cho-nha-hang",
  },
  {
    id: 8,
    date: "04 Tháng 4, 2026",
    category: "Kiến thức",
    title: "Quy trình nấu bia thủ công diễn ra như thế nào?",
    excerpt: "Sự khác biệt trong hương vị, phong cách hay câu chuyện phía sau mỗi dòng bia được hình thành qua từng công đoạn nấu.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-12-5093.jpg",
    link: "/tin-tuc/quy-trinh-nau-bia-thu-cong-dien-ra-nhu-the-nao",
  },
  {
    id: 9,
    date: "02 Tháng 4, 2026",
    category: "Kinh doanh",
    title: "Bảng giá bia thủ công mới nhất",
    excerpt: "Khám phá bảng giá chi tiết và các yếu tố cấu thành nên giá một ly bia thủ công chất lượng trong năm 2026.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-11-8005.jpg",
    link: "/tin-tuc/bang-gia-bia-thu-cong-moi-nhat",
  },
  {
    id: 10,
    date: "28 Tháng 3, 2026",
    category: "Kiến thức",
    title: "Bia thủ công Việt Nam",
    excerpt: "Cách uống bia ở Việt Nam dần chuyển dịch sang một nhịp chậm hơn, nơi người ta sẵn sàng dành thời gian để quan sát, để thử và để hiểu rõ hơn về loại bia họ thưởng thức.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-10-5345.jpg",
    link: "/tin-tuc/bia-thu-cong-viet-nam",
  },
  {
    id: 11,
    date: "25 Tháng 3, 2026",
    category: "Kiến thức",
    title: "Bia thủ công lên men như thế nào?",
    excerpt: "Men bia là yếu tố định hình rõ ràng phong cách của từng dòng bia, từ hương vị cho đến cấu trúc.",
    image: "https://creatcraft.com.vn/upload/news/bia-thu-cong-len-men-nhu-the-nao1-4867.jpg",
    link: "/tin-tuc/bia-thu-cong-len-men-nhu-the-nao",
  },
  {
    id: 12,
    date: "20 Tháng 3, 2026",
    category: "Kiến thức",
    title: "Hoa bia là gì? Vai trò của hoa bia trong bia thủ công",
    excerpt: "Hoa bia không chỉ tạo đắng mà còn là yếu tố định hình phong cách, mang đến hương thơm và sự cân bằng hoàn hảo cho từng mẻ bia.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-9-6152.jpg",
    link: "/tin-tuc/hoa-bia-la-gi-vai-tro-cua-hoa-bia-trong-bia-thu-cong",
  }
];

export function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const currentNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("news")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="news" className="py-24 bg-[#F8F3EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C8963E]" />
              <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
                Tin Tức
              </span>
            </div>
            <h2 className="text-[#1C1A14]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Tổng Hợp Tin Tức<br /><em className="text-[#C8963E]">Creat Craft Beer</em>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#C8963E] text-xs tracking-widest uppercase hover:gap-4 transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
            Xem tất cả tin tức
            <ArrowRight size={14} />
          </button>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentNews.map((item) => (
            <Link to={item.link} key={item.id} className="group cursor-pointer block">
              <article>
                {/* Image */}
                <div className="overflow-hidden aspect-[16/10] mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#C8963E] text-white text-[10px] tracking-widest uppercase px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#8C7A60] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#1C1A14] mb-3 group-hover:text-[#C8963E] transition-colors leading-snug text-balance" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.1rem" }}>
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#8C7A60] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#C8963E] text-xs tracking-widest uppercase cursor-pointer group-hover:gap-4 transition-all duration-300" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                  Đọc thêm <span className="w-5 h-px bg-[#C8963E]" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center border border-[#D5C6B1] text-[#8C7A60] disabled:opacity-50 hover:bg-[#C8963E] hover:text-white hover:border-[#C8963E] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${currentPage === page
                  ? "bg-[#C8963E] text-white border border-[#C8963E]"
                  : "border border-[#D5C6B1] text-[#8C7A60] hover:border-[#C8963E] hover:text-[#C8963E]"
                  }`}
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-[#D5C6B1] text-[#8C7A60] disabled:opacity-50 hover:bg-[#C8963E] hover:text-white hover:border-[#C8963E] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
