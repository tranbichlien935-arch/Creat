import React from "react";

const images = [
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/662712849_122246342384127186_2251280178109122592_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x1365&ctp=s1365x1365&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmo-ur-l3zSrgXpVV5poiixOUb_2llplDE5Rv_aWWmULumfVJMaCxldQ4WeXT8V0bGHU4UOSBnNW0VSdVbQ51S&_nc_ohc=W2sRUfu5FU0Q7kNvwGJexew&_nc_oc=AdrLWCOJCQ7eBFoMrqlogOj-TCKSf4RuH5BpQveEWmiaWrJooCHoV1ooKHYoIXlrL68KUCyPoJSvavbi80IRx9lG&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=wNg_PCPSXs3VE4GI6tgkjQ&_nc_ss=7b2a8&oh=00_Af_ZlYUMkFWDQoP5IktswCjjnpVksNUJyU7hDNdqUZbKbw&oe=6A2EC639",
    "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/656068911_122245302224127186_9201734740033741742_n.jpg?stp=dst-jpg_tt6&cstp=mx1933x1933&ctp=s1933x1933&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFGraShyZ4qZlrO6obPBl3PY1ksnx1WOrJjWSyfHVY6snp67aPHQ3SXu3Nht-TmK3sBCcVScmGHuMVf6xTRsLgm&_nc_ohc=R6fUhTNduF4Q7kNvwHNILOz&_nc_oc=AdrUVY78twck6fNuon0EvMQ_B7sbFydS15nMCPt39Kw1KQ-gtc_I2SofRKsV1T0hxC_97N_LuS2PIsXAIXicxvft&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=_NEbsZfvd7jzd4a96EuD4g&_nc_ss=7b2a8&oh=00_Af-hbTHlcMGn34Ypghp3upTp8pncfkUFpxDqCd3AOBgZ9Q&oe=6A2E9FD0",
    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/654362021_122244596732127186_7839707364256348412_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2026&ctp=s2048x2026&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGmVUUXphfgSOnY34XDYew8eJG_TeXnmsN4kb9N5eeaw-7ICaWsCVpdLwK5f9v92-GR63G060eWUFtAqJHdTEuJ&_nc_ohc=fCnp7ctuc2gQ7kNvwG6Bxlb&_nc_oc=Adq3XvMu4gMhOtRr7VVI-v87CX4XlFU6dUVbbE6u5M7taX8K2qjzsS-5qIYyPavXR-p-r82eWRag9WOWXAGfXmFy&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=02vjxL1vH_rBg-zmikklJg&_nc_ss=7b2a8&oh=00_Af_hsVc8i-FFeE6J0-Uq5TxcYLsRw6bO9MA57QbuJPRxJg&oe=6A2EC336",
    "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/597345104_122233782404127186_5033318805487090754_n.jpg?stp=dst-jpg_tt6&cstp=mx1079x1079&ctp=s1079x1079&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGwTphpM7yxLMMYo6seVL5AnjK25Gj9SKieMrbkaP1IqG2fC3IgzVISbzOB03gJ5z25wPvq5TB3uz9mvOXAVXuo&_nc_ohc=z_a9yHoOkfkQ7kNvwHJIKjW&_nc_oc=AdqLH5CaOQfQcWsW98vwdjgyrwak4FTCmylkMsG8kyiXvh0WqTZEnRtwJPgYIjIjr27WCU_eyatBT4s8SKB29pF_&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=aFzWfHbsamNcn3I22-IlFQ&_nc_ss=7b2a8&oh=00_Af9njQwElX1F-nC8XVQW_ZGqMeBX1FTWZtI7IeHfMRtLDw&oe=6A2ED708",
    "https://scontent.fsgn5-21.fna.fbcdn.net/v/t39.30808-6/581338396_122229625592127186_5220388750411615032_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x1536&ctp=s1536x1536&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEvgQzP3wEhO6DlEHIUPFmlHS2nS1RCFnQdLadLVEIWdJdp1k0ARwYqH0g3gFKRwsDEjr-P_TIGPWpBk3OTFTx6&_nc_ohc=bdYWG_S_e20Q7kNvwFLrPVq&_nc_oc=AdpVTkWVCSl4QzvrsRwI3p9f0hy5qbuFdRSVmITdGI6jlQr-rqLQkiB3jtL2HpjDPDweSNrKxsIt1D8LylI0e_Nc&_nc_zt=23&_nc_ht=scontent.fsgn5-21.fna&_nc_gid=MofV4Z3GvjWRLqKgt8tEHg&_nc_ss=7b2a8&oh=00_Af8iqmVYGkLwiRUz_S8H2XUAEIDFMW0CLBYs8gJml23VSg&oe=6A2EA18C",
    "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/565121553_122226919616127186_4868718085975117705_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGiQWXrjWHoP9V9_uKDDjTZWb0UQieURl9ZvRRCJ5RGX5tdgGJN5sBXN9Z_UKFOSYsy_UeNwMym3nOLF1EwCkuT&_nc_ohc=kU9SO9csy3wQ7kNvwHLMyX6&_nc_oc=Adr4JZlCGvbTTXQp6H-5aXskCEJDFsz2pP8Xup_5FmmakuPXOwojmduxRV05Vikq-GoKr__FGJnaDG-uRcMvTbfa&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=nqllptAGeboXMiPXwfc5cQ&_nc_ss=7b2a8&oh=00_Af_5ljMDAV2y6gqXP6XiqNR334OcWjEGGiQ7psMeB_jReQ&oe=6A2ECBAB",
    "https://scontent.fsgn5-21.fna.fbcdn.net/v/t39.30808-6/546059192_122221910258127186_2151618071683858070_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHQCm3MRS2Ah0qS2aDxqRtc4xn1dfEvUbzjGfV18S9RvN8R9PYgHUSbz5q4u5xZB0yr54-8RkRrRTOOnk10kiLH&_nc_ohc=-6n5EkCJzxwQ7kNvwFb77PH&_nc_oc=AdqAwsakDAl6qHWVFxwm7qbO01LdTlslBSGo2fMn9pS9zcWEx0jWQ_0LXQ9U0mn6M5mREhKF7lhQaBitfUDfBa63&_nc_zt=23&_nc_ht=scontent.fsgn5-21.fna&_nc_gid=5UEKUrHaibgF9QsM0-k34Q&_nc_ss=7b2a8&oh=00_Af9BjGWelw68Vz6OqISnmiP9V1D1WbbrL3S6CEogRRKKwA&oe=6A2EAB87",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/533407544_122219014610127186_2865494078859405934_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x1536&ctp=s1536x1536&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqJP1GKqSQ4JQ_P_i9ssuSez3B4Xi-4OJ7PcHheL7g4g37vBE_FKpxiMP7zpoI0zINmiVxJkdjLz-0rgyffowr&_nc_ohc=5mzhfCf9J-oQ7kNvwGlxdRt&_nc_oc=AdpeNoz7vK5v--NaQ84L-j-ebATh2C5CMoWNMGNYzQm4PFCeZlBVQ45orHVjDWE001z40g7WjQ2HcUBHVsnAMMaa&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=EFHXBcQUAN8-J43heQM_jQ&_nc_ss=7b2a8&oh=00_Af9OkGzoBB71-nUOOb7dLZmP3Qvr6NrWV9Pdl-ZvW4vhsQ&oe=6A2EA8B0",
    "https://scontent.fsgn5-21.fna.fbcdn.net/v/t39.30808-6/526986773_122217269660127186_462997964488450951_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1v0JLzaXnj1H_4bOqyHWiIugXl7u5szgi6BeXu7mzOOaDfINiITzVrQglm4Y_upei9iHCPwyO79uI8iJKMJsT&_nc_ohc=CcEdDJkLzIQQ7kNvwEfqjos&_nc_oc=AdpxjGmu2cjLqMRNdB4zxArRZ85b4rYrGLxIf4avQST_5mWvzqAZZZyHmf9QaaiE9xQ8TReBqJ_kLoJjvNqb-dEA&_nc_zt=23&_nc_ht=scontent.fsgn5-21.fna&_nc_gid=mk-BtpEPofttzyDb1adwVw&_nc_ss=7b2a8&oh=00_Af-zBEIDrVG16nckCsN7wC06k1g9YQBiUDcEEsEywK9KzA&oe=6A2ECC47",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/481765318_122192625920127186_5662332964891065364_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFzza5I8dxnJWj9xB-p7ri5LnKmbJpMFTAucqZsmkwVMF84DbrnSEuIimgbTNv81Wj0-pXwM5p9QUTaWlfzNpcg&_nc_ohc=75LXgjsiahcQ7kNvwEbhd0b&_nc_oc=Adonuo2LQkMtx3xZJpdSLgkYkvGifd2jvlxCQpdvSQ_lWxLJD_ojzs_SAdntCf8xQ6c092s91IsF2IRuZKuVRMVN&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=1rAExrK67it4hyXuEO9Iow&_nc_ss=7b2a8&oh=00_Af-vJyldqYaN8CkwsToDjbGnBrvB7sdn02C8iYXGRVS7mg&oe=6A2ED634"
];

// Tạo 2 row: 1 row đi sang phải, 1 row đi sang trái
const row1 = images.slice(0, 5);
const row2 = images.slice(5);

export function HomeGallery() {
    return (
        <section className="w-full py-16 overflow-hidden relative">
            <style>
                {`
                    @keyframes slideRight {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes slideLeft {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-slideRight {
                        display: flex;
                        width: max-content;
                        animation: slideRight 40s linear infinite;
                    }
                    .animate-slideLeft {
                        display: flex;
                        width: max-content;
                        animation: slideLeft 40s linear infinite;
                    }
                    .animate-slideRight:hover,
                    .animate-slideLeft:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            {/* Row 1: Scroll sang phải */}
            <div className="w-full relative mb-6">
                <div className="animate-slideRight">
                    {[...row1, ...row1].map((img, i) => (
                        <div key={i} className="flex-none w-[280px] md:w-[340px] lg:w-[400px] px-3">
                            <div className="aspect-square group overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={img}
                                    alt="Creat Craft Beer Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Scroll sang trái (ngược lại) */}
            <div className="w-full relative">
                <div className="animate-slideLeft">
                    {[...row2, ...row2].map((img, i) => (
                        <div key={i} className="flex-none w-[280px] md:w-[340px] lg:w-[400px] px-3">
                            <div className="aspect-square group overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={img}
                                    alt="Creat Craft Beer Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
