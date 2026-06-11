import { Link } from "react-router";

interface PageBannerProps {
    title: string;
    breadcrumb: string;
}

export function PageBanner({ title, breadcrumb }: PageBannerProps) {
    // Common theme background for all inner pages
    const bgImage = "/page-banner.jpg?v=2";

    return (
        <section className="relative w-full h-[350px] md:h-[450px] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center pt-24 px-4">
                <h1
                    className="text-white text-4xl md:text-[3.5rem] font-light mb-6 drop-shadow-md tracking-wide"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                    {title}
                </h1>
                <div
                    className="text-[#C8963E] text-[10px] md:text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-3 drop-shadow"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                    <Link to="/" className="text-white hover:text-[#C8963E] transition-colors">TRANG CHỦ</Link>
                    <span className="text-white/50">/</span>
                    <span>{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
}
