import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { newsContent } from "../data/newsData";

export function NewsDetail() {
    const { slug } = useParams();

    const article = slug ? newsContent[slug] : null;

    if (!article) {
        return (
            <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-[#1C1A14] mb-4">Bài viết đang được cập nhật</h1>
                <Link to="/" className="text-[#C8963E] flex items-center gap-2 hover:underline">
                    <ArrowLeft size={16} /> Quay lại trang chủ
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#F8F3EB] min-h-screen pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-[#8C7A60] mb-8" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <Link to="/" className="hover:text-[#C8963E] transition-colors">Trang chủ</Link>
                    <span>/</span>
                    <Link to="/#news" className="hover:text-[#C8963E] transition-colors">Tin tức</Link>
                    <span>/</span>
                    <span className="text-[#C8963E]">{article.breadcrumbTitle}</span>
                </div>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-xs text-[#8C7A60] mb-4 uppercase tracking-wider" style={{ fontFamily: "'Lato', sans-serif" }}>
                        <span className="flex items-center gap-1.5 bg-[#C8963E] text-white px-2 py-1"><Tag size={12} /> {article.category}</span>
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><User size={12} /> {article.author}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1C1A14] leading-tight mb-6 text-balance" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        {article.title}
                    </h1>
                </header>

                {/* Featured Image */}
                <div className="w-full overflow-hidden mb-12 rounded-sm shadow-lg">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-lg prose-[#1C1A14] max-w-none" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                    {article.content}
                </article>
            </div>
        </div>
    );
}
