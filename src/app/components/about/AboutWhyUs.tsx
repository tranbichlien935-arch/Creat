import React, { useState } from "react";
import { Plus, Minus, Leaf } from "lucide-react";
import { useAppLang } from "../../hooks/useAppLang";
import { translations } from "../../translations";

export function AboutWhyUs() {
    const { lang } = useAppLang();
    const t = translations[lang];
    const [openIndex, setOpenIndex] = useState<number>(0);

    const reasons = [
        {
            title: t.reason1Title,
            content: t.reason1Content
        },
        {
            title: t.reason2Title,
            content: t.reason2Content
        },
        {
            title: t.reason3Title,
            content: t.reason3Content
        },
        {
            title: t.reason4Title,
            content: t.reason4Content
        },
        {
            title: t.reason5Title,
            content: t.reason5Content
        }
    ];

    return (
        <section className="bg-[#F8F3EB] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left Side: Accordion */}
                <div className="w-full">
                    <div className="mb-10">
                        <span className="text-[#8C7A60] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
                            {t.whyUsLabel}
                        </span>
                        <h2 className="text-[#1C1A14] font-['Fira_Sans'] font-light text-4xl leading-[1.3] mb-6">
                            {t.differenceTitle}
                        </h2>
                        <p className="font-['Josefin_Sans'] text-[#5C4A30] text-[15px] leading-relaxed font-light mb-8">
                            {t.whyUsIntro}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {reasons.map((item, index) => (
                            <div
                                key={index}
                                className={`border border-[#D4C4A8]/50 rounded-sm overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-[#EBE5DB]' : 'bg-transparent'}`}
                            >
                                <button
                                    className="w-full flex items-center justify-between p-5 text-left"
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                >
                                    <span className="font-['Josefin_Sans'] text-[15px] font-semibold text-[#1C1A14]">
                                        {index + 1}. {item.title}
                                    </span>
                                    <span className="text-[#8C7A60]">
                                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-5 pt-0 text-[#5C4A30] font-['Josefin_Sans'] text-sm font-light leading-relaxed">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Images with Badge */}
                <div className="relative w-full h-[500px] md:h-[600px] mt-10 lg:mt-0">

                    {/* SVG Badge */}
                    <div className="absolute -top-10 -left-6 md:-left-12 z-30 w-32 h-32 md:w-36 md:h-36 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center p-1">
                        <svg className="absolute w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                            <text className="font-['Outfit'] font-bold uppercase tracking-[0.2em] text-[10.5px]" fill="#7CB342">
                                <textPath href="#circlePath">100% ORGANIC ★ NATURAL ★ 100% ORGANIC ★ NATURAL ★ </textPath>
                            </text>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#7CB342]">
                            <span className="font-bold text-[10px] mb-1">{t.organicBadge}</span>
                            <Leaf size={28} fill="#7CB342" strokeWidth={1} />
                            <div className="flex gap-1 mt-1">
                                <span className="text-[10px]">★</span>
                                <span className="text-[10px]">★</span>
                                <span className="text-[10px]">★</span>
                            </div>
                        </div>
                    </div>

                    {/* Large Image (Bottom Right) */}
                    <div className="absolute bottom-0 right-0 w-[85%] h-[85%] rounded-[1rem] overflow-hidden shadow-2xl z-10 border-[6px] border-white">
                        <img
                            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/471718996_122182062650127186_799128090725273379_n.jpg?stp=dst-jpg_tt6&cstp=mx1534x2048&ctp=s1534x2048&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFg2FzTFV0jZS-HCjAB6QnrLcC1uyj_EsUtwLW7KP8SxVMb5NmM-8M8_MOQT1ipx4iLai1VAOorgcKNRK81z_I-&_nc_ohc=bIOtQXHNU3wQ7kNvwGxDoR0&_nc_oc=Adoc-eC307q4cIIzhlrG86KWySZKjlbEzNFxENZ2dsRuwiGSLv7i8WWUDId90OhpZKz6m1VaskcOoHtaO20osn6G&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=owWsG2OfS85ysVGHQe94zw&_nc_ss=7b2a8&oh=00_Af8xJ7LQ-jcrI_gHluECSLdgKORjQy1OClcHRAPvCKpPeA&oe=6A2EAF21"
                            alt="Serum Application"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Small Overlapping Image (Top Left) */}
                    <div className="absolute top-10 left-0 w-[55%] h-[50%] rounded-[1rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-20 border-[6px] border-white">
                        <img
                            src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/471601911_122182292324127186_6834282215240469831_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFV7u1uRRvgoSoZifFmqxJRZjLpuOItqMJmMum44i2owiXLUbJrr2JqYpN9zh05DPTxlaIOI6l_RiN4qwLTCi_S&_nc_ohc=vygSlL_M7L4Q7kNvwHcJICe&_nc_oc=AdpSpX3LJ8qpdN-KWBTA8WNEOdLCmDJn8xaaTRDCJuYt8r4Mdl6Nh7FWEYq-XysMpsZwkiUQDsVrTYycvXlTsyko&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=SJ-bLzzenQ7T-nvsmgH38g&_nc_ss=7b2a8&oh=00_Af-_fXKwY4Im0Gy5zBODLXQ5OsQBBp3V-n-dIzjj8xKlTw&oe=6A2E98FC"
                            alt="Organic Leaf Overlay"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
