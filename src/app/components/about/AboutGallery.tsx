import React from "react";

const images = [
    "https://creatcraft.com.vn/upload/elfinder/content/533407544_122219014610127186_2865494078859405934_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/526609415_122217269564127186_2705118549580018600_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/581338396_122229625592127186_5220388750411615032_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/bia-thu-cong-tan-phu2.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/654362021_122244596732127186_7839707364256348412_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/621818225_122239330172127186_2111523416057106119_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/496413198_122205345446127186_6650641013472931228_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/533407544_122219014610127186_2865494078859405934_n.jpg",
    "https://creatcraft.com.vn/upload/elfinder/content/526609415_122217269564127186_2705118549580018600_n.jpg",
];

const duplicatedImages = [...images, ...images];

export function AboutGallery() {
    return (
        <section className="w-full py-8 overflow-hidden relative">
            <style>
                {`
                    @keyframes slideGallery {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scrollGallery {
                        display: flex;
                        width: max-content;
                        animation: slideGallery 50s linear infinite;
                    }
                    .animate-scrollGallery:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            <div className="w-full relative">
                <div className="animate-scrollGallery">
                    {duplicatedImages.map((img, i) => (
                        <div key={i} className="flex-none w-[200px] md:w-[250px] lg:w-[300px] aspect-square group overflow-hidden">
                            <img
                                src={img}
                                alt="Creat Organic Elements"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
