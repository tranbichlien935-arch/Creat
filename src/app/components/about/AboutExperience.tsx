import React from "react";
import { Coffee, Search, CheckCircle2 } from "lucide-react";

export function AboutExperience() {
    return (
        <section className="bg-[#EAE4DA] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                {/* Left Side: Creative Image with blob shadow */}
                <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                    {/* Abstract background shape (blob) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D4C4A8] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-40 blur-xl animate-[pulse_8s_ease-in-out_infinite]" />

                    {/* The "Tombstone" Main Image */}
                    <img
                        src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/470598723_122180498846127186_2567633562190515261_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s1080x1920&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGVWvFx0aaCbI8j_EdlpMcDlwkqE7jn05-XCSoTuOfTn9nN-LNF50Lu9pWVmIH2KaX7RGuQOq-WUc161TJdvZlg&_nc_ohc=T2f67oH4bvEQ7kNvwFKPjWV&_nc_oc=AdriBDg0Ei_QRoaGYe9HY9wDSyGqHlT_UEJAKiNzM8eeh0w839BZxxoWHHgAJQlBp2aGquR3majy8t0aOjRXWycq&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=ygbOD5gwnJcbn-RnN_R41A&_nc_ss=7b2a8&oh=00_Af9_r6D7U2QPWRRYuVhmE-GIy0lq0Usw0ZyIsfczWFbrCg&oe=6A2EB787"
                        alt="Serum Main Experience"
                        className="w-[75%] h-[85%] object-cover rounded-[50%_50%_0_0] shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative z-10 border-8 border-[#EAE4DA]"
                    />

                    {/* The Circular Overlapping Image */}
                    <img
                        src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/471593645_122181896852127186_4648342220408265927_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s1080x1920&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF0AkAyOAJGy1bXJnHC0RXdKvVaC3gA0Zwq9VoLeADRnGaw_n2tDA5Q6D96_U_2DG-zKrQhW11b3V-yUjahfyY9&_nc_ohc=ppO1Qs3Shi0Q7kNvwE284LZ&_nc_oc=AdpmivbdzFviaBMdPvA8u5sJOsX1THl1Vz51OM16DcJj2CauEubYThliWVfWGFW4QeSsXgEEGG1MkPZ_pbYl6hg6&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=8luEw7p7n_B2nhTPyP83RQ&_nc_ss=7b2a8&oh=00_Af-I9j_QRgT2Plm42_B34VvbL0x9ZX_P-3VYEAkanwMQrA&oe=6A2EA624"
                        alt="Organic Element Overlay"
                        className="absolute bottom-4 -right-4 w-[200px] h-[200px] object-cover rounded-full shadow-2xl z-20 border-4 border-[#EAE4DA]"
                    />
                </div>

                {/* Right Side: Text & Features */}
                <div className="w-full">
                    <span className="text-[#8C7A60] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
                        Trải Nghiệm Tại Quán
                    </span>
                    <h2 className="text-[#1C1A14] font-['Fira_Sans'] font-light text-4xl lg:text-5xl leading-[1.2] mb-6">
                        Không Gian Thưởng Bia Gần Gũi & Sáng Tạo
                    </h2>

                    <p className="font-['Josefin_Sans'] text-[#5C4A30] text-[15px] leading-relaxed mb-6 font-light">
                        Bước chân vào CREAT Craft Beer, bạn sẽ ngay lập tức cảm nhận được bầu không khí thư giãn, hiện đại nhưng vẫn giữ được sự ấm cúng rất riêng. Không gian được thiết kế tinh tế với chất liệu gỗ, ánh sáng dịu nhẹ cùng những điểm nhấn sáng tạo, tạo nên một “chất” rất riêng khi vừa mang hơi hướng craft bar cá tính, vừa là nơi lý tưởng để tụ họp bạn bè.
                    </p>

                    <p className="font-['Josefin_Sans'] text-[#5C4A30] text-[15px] leading-relaxed mb-10 font-light">
                        Menu bia tại CREAT cũng là điểm cộng đáng chú ý, với sự đa dạng từ các dòng bia nhập khẩu đến bia thủ công Việt Nam được tuyển chọn kỹ lưỡng. Dù bạn chỉ ghé nhanh để nhâm nhi một ly bia sau giờ làm, hay muốn ngồi lại trò chuyện thật lâu, CREAT luôn có một góc phù hợp dành cho bạn.
                    </p>

                    {/* Icon List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#D4C4A8] flex items-center justify-center flex-shrink-0 text-[#b67e53]">
                                <Coffee size={20} strokeWidth={1.5} />
                            </div>
                            <span className="font-['Josefin_Sans'] text-[#1C1A14] text-[15px] uppercase tracking-wider font-semibold">
                                Bia Theo Mùa
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#D4C4A8] flex items-center justify-center flex-shrink-0 text-[#b67e53]">
                                <Search size={20} strokeWidth={1.5} />
                            </div>
                            <span className="font-['Josefin_Sans'] text-[#1C1A14] text-[15px] uppercase tracking-wider font-semibold">
                                Đa Dạng Hương Vị
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#D4C4A8] flex items-center justify-center flex-shrink-0 text-[#b67e53]">
                                <CheckCircle2 size={20} strokeWidth={1.5} />
                            </div>
                            <span className="font-['Josefin_Sans'] text-[#1C1A14] text-[15px] uppercase tracking-wider font-semibold">
                                Món Nhắm Hoàn Hảo
                            </span>
                        </div>

                    </div>

                    <div className="mt-10 pt-8 border-t border-[#D4C4A8]/40 flex flex-wrap gap-x-8 gap-y-4">
                        <div className="flex flex-col">
                            <span className="text-[#8C7A60] text-xs font-semibold uppercase tracking-widest mb-1">Hotline</span>
                            <span className="font-['Josefin_Sans'] text-[#1C1A14] font-semibold">0989 354 444</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#8C7A60] text-xs font-semibold uppercase tracking-widest mb-1">Email</span>
                            <span className="font-['Josefin_Sans'] text-[#1C1A14] font-semibold">creatcraftbeer@gmail.com</span>
                        </div>
                        <div className="flex flex-col w-full md:w-auto mt-2 md:mt-0">
                            <span className="text-[#8C7A60] text-xs font-semibold uppercase tracking-widest mb-1">Địa Chỉ</span>
                            <span className="font-['Josefin_Sans'] text-[#1C1A14] font-semibold">93 Đường số 11, P. Tây Thạnh, TP.HCM</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
