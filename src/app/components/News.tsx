import { useState } from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { useAppLang } from "../hooks/useAppLang";
import { translations } from "../translations";

const newsData = [
  {
    id: 1,
    date: "18 Tháng 4, 2026",
    date_en: "April 18, 2026",
    category: "Thương hiệu",
    category_en: "Brand",
    title: "Bia thủ công đóng chai giá sỉ",
    title_en: "Wholesale Bottled Craft Beer",
    excerpt: "Giới thiệu thương hiệu Creat Craft, tập trung vào trải nghiệm bia tươi mới, đậm đà và quy trình ủ bia đạt chuẩn.",
    excerpt_en: "Introducing Creat Craft brand, focusing on fresh beer experience, rich flavor and standard brewing process.",
    image: "https://creatcraft.com.vn/upload/news/dattiec-7628.jpg",
    link: "/tin-tuc/bia-thu-cong-dong-chai-gia-si",
  },
  {
    id: 2,
    date: "15 Tháng 4, 2026",
    date_en: "April 15, 2026",
    category: "Kiến thức",
    category_en: "Knowledge",
    title: "Bia IPA là gì? Mua bia IPA ở đâu?",
    title_en: "What is IPA Beer? Where to buy IPA beer?",
    excerpt: "Giải thích đặc trưng hương vị, hậu vị của dòng bia IPA và lý do nên thử tại Creat Craft.",
    excerpt_en: "Explaining the flavor profile and aftertaste of IPA beer and why you should try it at Creat Craft.",
    image: "https://creatcraft.com.vn/upload/news/trai-nghiem-bia-ipa-tuoi-mat-2013.jpg",
    link: "/tin-tuc/bia-ipa-la-gi-mua-bia-ipa-o-dau",
  },
  {
    id: 3,
    date: "13 Tháng 4, 2026",
    date_en: "April 13, 2026",
    category: "Câu chuyện",
    category_en: "Story",
    title: "Từ quán Bia Thủ Công đến nhà cung ứng bia chuyên nghiệp",
    title_en: "From Craft Beer Pub to Professional Beer Supplier",
    excerpt: "Câu chuyện chuyển mình từ một quán nhỏ thành nhà cung cấp bia ổn định cho thị trường.",
    excerpt_en: "The transformation story from a small pub to a stable beer supplier for the market.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-15-1382.jpg",
    link: "/tin-tuc/tu-quan-bia-thu-cong-den-nha-cung-ung-bia-chuyen-nghiep",
  },
  {
    id: 4,
    date: "13 Tháng 4, 2026",
    date_en: "April 13, 2026",
    category: "Câu chuyện",
    category_en: "Story",
    title: "Hành trình kiến tạo hơn 40.000 lít bia thủ công mỗi năm",
    title_en: "Journey to Produce Over 40,000 Liters of Craft Beer Annually",
    excerpt: "Chia sẻ về quy trình, tâm huyết và cách họ giữ được \"cái tôi\" riêng trong từng mẻ bia.",
    excerpt_en: "Sharing the process, passion and how they maintain their unique identity in each beer batch.",
    image: "https://creatcraft.com.vn/upload/news/z72806845964888d3ea24d2010ef4170465bf5526f41a4-1552-1541.jpg",
    link: "/tin-tuc/creat-craft-hanh-trinh-kien-tao-hon-40000-lit-bia-thu-cong-moi-nam",
  },
  {
    id: 5,
    date: "10 Tháng 4, 2026",
    date_en: "April 10, 2026",
    category: "Nguyên liệu",
    category_en: "Ingredients",
    title: "Những loại hoa bia phổ biến",
    title_en: "Common Types of Hops",
    excerpt: "Tìm hiểu về hoa bia – \"chìa khóa\" định hình cá tính và hương vị độc đáo cho bia thủ công.",
    excerpt_en: "Learn about hops – the 'key' to defining the personality and unique flavor of craft beer.",
    image: "https://creatcraft.com.vn/upload/news/hoa-bia-la-gi-vai-tro-cua-hoa-bia-trong-bia-thu-cong1-9938.jpg",
    link: "/tin-tuc/nhung-loai-hoa-bia-pho-bien",
  },
  {
    id: 6,
    date: "08 Tháng 4, 2026",
    date_en: "April 08, 2026",
    category: "Kiến thức",
    category_en: "Knowledge",
    title: "Vì sao cần phải xay malt khi nấu bia thủ công?",
    title_en: "Why Do We Need to Mill Malt When Brewing Craft Beer?",
    excerpt: "Giải thích vai trò của malt (đại mạch) như là \"linh hồn\" của bia và tầm quan trọng của việc xử lý nguyên liệu.",
    excerpt_en: "Explaining the role of malt (barley) as the 'soul' of beer and the importance of ingredient processing.",
    image: "https://creatcraft.com.vn/upload/news/bia-thu-cong-len-men-nhu-the-nao2-8059.jpg",
    link: "/tin-tuc/vi-sao-can-phai-xay-malt-khi-nau-bia-thu-cong",
  },
  {
    id: 7,
    date: "06 Tháng 4, 2026",
    date_en: "April 06, 2026",
    category: "Kinh doanh",
    category_en: "Business",
    title: "Giá bia thủ công nhập sỉ cho nhà hàng",
    title_en: "Wholesale Craft Beer Prices for Restaurants",
    excerpt: "Đối với quán bar hay nhà hàng, việc nhập sỉ bia thủ công không chỉ đơn giản là thêm một món đồ uống.",
    excerpt_en: "For bars or restaurants, wholesale craft beer is not just adding another beverage.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-13-2295.jpg",
    link: "/tin-tuc/gia-bia-thu-cong-nhap-si-cho-nha-hang",
  },
  {
    id: 8,
    date: "04 Tháng 4, 2026",
    date_en: "April 04, 2026",
    category: "Kiến thức",
    category_en: "Knowledge",
    title: "Quy trình nấu bia thủ công diễn ra như thế nào?",
    title_en: "How Does the Craft Beer Brewing Process Work?",
    excerpt: "Sự khác biệt trong hương vị, phong cách hay câu chuyện phía sau mỗi dòng bia được hình thành qua từng công đoạn nấu.",
    excerpt_en: "The differences in flavor, style or story behind each beer line are formed through each brewing stage.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-12-5093.jpg",
    link: "/tin-tuc/quy-trinh-nau-bia-thu-cong-dien-ra-nhu-the-nao",
  },
  {
    id: 9,
    date: "02 Tháng 4, 2026",
    date_en: "April 02, 2026",
    category: "Kinh doanh",
    category_en: "Business",
    title: "Bảng giá bia thủ công mới nhất",
    title_en: "Latest Craft Beer Price List",
    excerpt: "Khám phá bảng giá chi tiết và các yếu tố cấu thành nên giá một ly bia thủ công chất lượng trong năm 2026.",
    excerpt_en: "Discover detailed pricing and factors that make up the price of a quality craft beer in 2026.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-11-8005.jpg",
    link: "/tin-tuc/bang-gia-bia-thu-cong-moi-nhat",
  },
  {
    id: 10,
    date: "28 Tháng 3, 2026",
    date_en: "March 28, 2026",
    category: "Kiến thức",
    category_en: "Knowledge",
    title: "Bia thủ công Việt Nam",
    title_en: "Vietnamese Craft Beer",
    excerpt: "Cách uống bia ở Việt Nam dần chuyển dịch sang một nhịp chậm hơn, nơi người ta sẵn sàng dành thời gian để quan sát, để thử và để hiểu rõ hơn về loại bia họ thưởng thức.",
    excerpt_en: "Beer drinking culture in Vietnam is gradually shifting to a slower pace, where people are willing to spend time observing, trying and understanding more about the beer they enjoy.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-10-5345.jpg",
    link: "/tin-tuc/bia-thu-cong-viet-nam",
  },
  {
    id: 11,
    date: "25 Tháng 3, 2026",
    date_en: "March 25, 2026",
    category: "Kiến thức",
    category_en: "Knowledge",
    title: "Bia thủ công lên men như thế nào?",
    title_en: "How Does Craft Beer Fermentation Work?",
    excerpt: "Men bia là yếu tố định hình rõ ràng phong cách của từng dòng bia, từ hương vị cho đến cấu trúc.",
    excerpt_en: "Yeast is a key factor that clearly defines the style of each beer line, from flavor to structure.",
    image: "https://creatcraft.com.vn/upload/news/bia-thu-cong-len-men-nhu-the-nao1-4867.jpg",
    link: "/tin-tuc/bia-thu-cong-len-men-nhu-the-nao",
  },
  {
    id: 12,
    date: "20 Tháng 3, 2026",
    date_en: "March 20, 2026",
    category: "Kiến thức",
    category_en: "Knowledge",
    title: "Hoa bia là gì? Vai trò của hoa bia trong bia thủ công",
    title_en: "What are Hops? The Role of Hops in Craft Beer",
    excerpt: "Hoa bia không chỉ tạo đắng mà còn là yếu tố định hình phong cách, mang đến hương thơm và sự cân bằng hoàn hảo cho từng mẻ bia.",
    excerpt_en: "Hops not only create bitterness but also shape style, bringing aroma and perfect balance to each beer batch.",
    image: "https://creatcraft.com.vn/upload/news/creat-craft-9-6152.jpg",
    link: "/tin-tuc/hoa-bia-la-gi-vai-tro-cua-hoa-bia-trong-bia-thu-cong",
  }
];

export function News() {
  const { lang } = useAppLang();
  const t = translations[lang];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const currentNews = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                {t.newsLabel}
              </span>
            </div>
            <h2 className="text-[#1C1A14]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {t.newsSubtitle}<br /><em className="text-[#C8963E]">{t.newsTitle}</em>
            </h2>
          </div>

        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentNews.map((item) => (
            <Link to={item.link} key={item.id} className="group cursor-pointer block h-full">
              <article className="flex flex-col h-full">
                {/* Image */}
                <div className="overflow-hidden aspect-[16/10] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#1C1A14] mb-3 group-hover:text-[#C8963E] transition-colors leading-snug text-balance" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.1rem" }}>
                  {lang === 'en' ? item.title_en : item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#5a5a5a] text-[13px] md:text-sm leading-relaxed mb-4 text-balance break-words line-clamp-3" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}>
                  {lang === 'en' ? item.excerpt_en : item.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-5 mt-auto">
                  <span className="bg-[#C8963E] text-white text-[10px] tracking-widest uppercase px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                    {lang === 'en' ? item.category_en : item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#5a5a5a] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <Calendar size={12} />
                    {lang === 'en' ? item.date_en : item.date}
                  </div>
                </div>

                {/* Read More */}
                <div className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-[#C8963E] text-[#C8963E] rounded-md hover:bg-[#C8963E] hover:text-white transition-all duration-300 text-xs tracking-widest uppercase w-max" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                  {t.readMore}
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
