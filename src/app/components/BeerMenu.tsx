import React, { useEffect, useRef } from 'react';
import { useAppLang } from '../hooks/useAppLang';
import { translations } from '../translations';

export const menuItems = [
  {
    id: 1,
    image: "https://creatcraft.com.vn/upload/elfinder/ducpham0981973533-04375-1731392319-2.jpg",
    title: "Beef Steak",
    sub: "Premium Beef Steak",
    price: "350,000đ"
  },
  {
    id: 2,
    image: "https://creatcraft.com.vn/upload/elfinder/471224956_122181063116127186_6835408613328349828_n.jpg",
    title: "Sườn Nướng Đặc Biệt",
    sub: "Signature BBQ Ribs",
    price: "250,000đ"
  },
  {
    id: 4,
    image: "https://creatcraft.com.vn/upload/elfinder/471276054_122181062552127186_3906534986553256707_n.jpg",
    title: "Xiên Nướng Rau Củ",
    sub: "Grilled Veggie Skewers",
    price: "85,000đ"
  },
  {
    id: 5,
    image: "https://creatcraft.com.vn/upload/elfinder/471284434_122181050696127186_5485605934704400712_n.jpg",
    title: "Cơm Chiên Cá Mặn",
    sub: "Salted Fish Fried Rice",
    price: "120,000đ"
  },
  {
    id: 6,
    image: "https://creatcraft.com.vn/upload/elfinder/471312317_122181063080127186_4257549939694959512_n.jpg",
    title: "Mực Ống Hấp",
    sub: "Steamed Squid",
    price: "180,000đ"
  },
  {
    id: 7,
    image: "https://creatcraft.com.vn/upload/elfinder/471324722_122181050024127186_3269747421325517719_n.jpg",
    title: "Lòng Gà Xào Bánh Đa",
    sub: "Stir-fried Chicken Giblets with Rice Paper",
    price: "140,000đ"
  },
  {
    id: 8,
    image: "https://creatcraft.com.vn/upload/elfinder/471326959_122181049970127186_8656627144969005209_n.jpg",
    title: "Mực Một Nắng Nướng Muối Ớt",
    sub: "Grilled Sun-dried Squid with Chili",
    price: "200,000đ"
  },
  {
    id: 9,
    image: "https://creatcraft.com.vn/upload/elfinder/471182876_122181063050127186_1166998085643520039_n.jpg",
    title: "Sụn Gà Rang Muối Hongkong",
    sub: "Hongkong Style Salted Chicken Cartilage",
    price: "150,000đ"
  },
  {
    id: 10,
    image: "https://creatcraft.com.vn/upload/elfinder/471259097_122181062372127186_8454474257599718691_n.jpg",
    title: "Cá Đù Một Nắng",
    sub: "Sun-dried Croaker Fish",
    price: "190,000đ"
  }
];

export function BeerMenu() {
  const { lang } = useAppLang();
  const t = translations[lang];
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const scrollContainer = sliderRef.current;
    if (!scrollContainer) return;

    let isHovering = false;

    // Mouse event handlers to pause on hover
    const handleMouseEnter = () => isHovering = true;
    const handleMouseLeave = () => isHovering = false;

    let isDown = false;
    let startX = 0;
    let scrollLeftState = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      scrollContainer.classList.add('cursor-grabbing');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeftState = scrollContainer.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
      isHovering = false;
      scrollContainer.classList.remove('cursor-grabbing');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeftState - walk;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    const step = () => {
      if (!isHovering && scrollContainer && !isDown) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      if (typeof window !== 'undefined') {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="menu" className="relative font-sans py-12 min-h-screen bg-[#FCFAF8] text-[#1C1A14] flex flex-col justify-center">
      <style>{`
        /* Ẩn thanh cuộn mặc định của trình duyệt */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="relative z-10 w-full flex flex-col max-w-[140rem] mx-auto">

        {/* TIÊU ĐỀ */}
        <div className="text-center mb-8 px-6 relative z-10">
          <span className="text-[#b67e53] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
            {t.menuSectionLabel}
          </span>
          <h2 className="font-bold text-2xl md:text-4xl tracking-wider uppercase" style={{ fontFamily: "'Josefin Sans', sans-serif", color: "#11202e" }}>
            {t.menuSectionTitle}
          </h2>
          <p className="mt-4 text-[#8C7A60] font-sans max-w-2xl mx-auto text-[15px]">
            {t.menuSectionDesc}
          </p>
        </div>

        {/* CONTAINER CHẠY NGANG */}
        <div
          ref={sliderRef}
          className="w-full flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-[10vw] pb-8 pt-4 hide-scrollbar cursor-grab"
          style={{ scrollbarWidth: 'none' }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="snap-center shrink-0 w-[280px] md:w-[320px] bg-[#F9F7F4] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center p-8 relative"
            >

              {/* HÌNH ẢNH MÓN ĂN - THAY ĐỔI TỪ HÌNH TRÒN SANG BO GÓC ĐỂ KHÔNG BỊ CẮT CHỮ GÓC NHƯ SỤN GÀ HONGKONG */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl z-10 bg-white flex items-center justify-center">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center" />
              </div>

              {/* NỘI DUNG CHUẨN DESIGN: TIẾNG VIỆT - TIẾNG ANH */}
              <div className="text-center w-full mt-2 flex flex-col flex-1 pb-4">
                <h3 className="font-bold text-[20px] md:text-[22px] text-[#11202e] mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {lang === 'en' ? item.sub : item.title}
                </h3>
                {lang !== 'en' && (
                  <p className="text-[#8C7A60] text-sm md:text-[15px]" style={{ fontFamily: "'Lato', sans-serif" }}>{item.sub}</p>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* --- COMBO GỢI Ý (SUGGESTED PAIRINGS) --- */}
        <div className="w-full mt-24 px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#b67e53] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
              {t.pairingLabel}
            </span>
            <h2 className="font-bold text-2xl md:text-3xl tracking-wider uppercase" style={{ fontFamily: "'Josefin Sans', sans-serif", color: "#11202e" }}>
              {t.pairingTitle}
            </h2>
            <p className="mt-4 text-[#8C7A60] font-sans max-w-2xl mx-auto text-[15px]">
              {t.pairingDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-[1200px] mx-auto">

            {/* 2 Large Cards */}
            <div className="md:col-span-6 bg-white rounded-tr-[3rem] rounded-bl-[3rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] mb-6">
                <img
                  src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/484380156_122195585888127186_1317730987965392994_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEK2Wh2eDYfF2zLNOiiZH4_fQtLxzpgSXl9C0vHOmBJec5jXfqiGSRK43REAyyDaOzxGG6aCoYKuzO4I_JJF5Zx&_nc_ohc=a8QvsEE9oQcQ7kNvwEt92yj&_nc_oc=AdocQrEt55n9kHz5bJkd1q8SGYylJ5_RluF5egMjijyJgtIF4s8fqV2MaxkPqf0Vu-zwHweDOUBPa0NRZ_pf8HOo&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=ja0EbIE6ul_Q-W_bGFFbHQ&_nc_ss=7b2a8&oh=00_Af98O8-SKv0sDICNxcEFUvUQYCBeNyAEoQ71lX8liXypzA&oe=6A2EBA6E"
                  alt="Combo Đậm Đà"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center pb-4">
                <h3 className="font-bold text-xl text-[#11202e] mb-2 font-['Josefin_Sans']">{t.pairing1Title}</h3>
                <p className="text-[#b67e53] font-semibold text-sm uppercase tracking-wider">{t.pairing1Combo}</p>
              </div>
            </div>

            <div className="md:col-span-6 bg-white rounded-tl-[3rem] rounded-br-[3rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] mb-6">
                <img
                  src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/484516368_122195585810127186_7193134887229153041_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH8HxgG1pW4CKb7ISrZhwc0MqmmJB_EktgyqaYkH8SS2AxEF51lEKTNkTL12tFDhYUqUPrNxvEv2Hh_lTRp48Iu&_nc_ohc=m95lB1envG8Q7kNvwENGqFl&_nc_oc=Adr6pRm4za1VYcTYPTmRb2LXeFD9QVYF52Daj7o42rkMWc6rxsyKl-u1B54ie5B8NF9nFLKYWyG0Nwv75Qw3RtVk&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=LUCsLVDJiZtLG-CV-CSRLg&_nc_ss=7b2a8&oh=00_Af-1CXSaUtRRfLaeAIiLBu12UnMG51nPxGiOyARYEwQwwg&oe=6A2EA975"
                  alt="Combo Đêm Nhiệt Đới"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center pb-4">
                <h3 className="font-bold text-xl text-[#11202e] mb-2 font-['Josefin_Sans']">{t.pairing2Title}</h3>
                <p className="text-[#b67e53] font-semibold text-sm uppercase tracking-wider">{t.pairing2Combo}</p>
              </div>
            </div>

            {/* 3 Smaller Cards */}
            <div className="md:col-span-4 bg-white rounded-2xl p-3 shadow-lg group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-square overflow-hidden rounded-xl mb-4">
                <img
                  src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/484237618_122195585780127186_6122141230368477586_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEd9lHH2NAQky5yBshvNpNPEqyfJPW0rLUSrJ8k9bSstdSnBXyZyOQ8o7rQNAu0cyQfmkEOuyx50gNVrtzj-oM0&_nc_ohc=wTLALq8xd2oQ7kNvwGspiPA&_nc_oc=AdpVuuXbhKL5q_rUxD7DsoFIb9IhbtCEC8hbZJkX8db6d_VoXxurW0TWrlNv_gYJ7kKOLgkR47qjQEwxm80iucUj&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=b0WWW0zjKqFR894GTIRVSg&_nc_ss=7b2a8&oh=00_Af9TvQ9GaYtFil1GH7QSEF1QrVZCZk-TH65PLZSC0l_lgw&oe=6A2EB49F"
                  alt="Combo Nắng Sớm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center pb-2">
                <h3 className="font-bold text-lg text-[#11202e] mb-1 font-['Josefin_Sans']">{t.pairing3Title}</h3>
                <p className="text-[#b67e53] font-semibold text-[11px] uppercase tracking-wide">{t.pairing3Combo}</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-2xl p-3 shadow-lg group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-square overflow-hidden rounded-xl mb-4">
                <img
                  src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/483940873_122195585678127186_200811074578376176_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGzdm4pwkuEV2ubiXx3KK-8rsWsgUGh0ciuxayBQaHRyO8eQa0TpPtJaRKZPQSNbbrcwlunRbO6s_Zprp4wlIcd&_nc_ohc=l3SGeR1kx2YQ7kNvwEAhS8j&_nc_oc=AdrjbeG360dBodYto0CoteTagwiqIdkYvEsNLtL8-9xvTH9TQl-uLQrqMEmK_IDDp6nyulcDlGnDw1ltYLZPTu7f&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=Vnv7hxqekVPsl1Ez15uLFQ&_nc_ss=7b2a8&oh=00_Af_mVt26SlqDO14hdHQwtfstGWIKCAd8z0qAl2SUDWJsrg&oe=6A2ED170"
                  alt="Combo Đậm Đà"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center pb-2">
                <h3 className="font-bold text-lg text-[#11202e] mb-1 font-['Josefin_Sans']">{t.pairing4Title}</h3>
                <p className="text-[#b67e53] font-semibold text-[11px] uppercase tracking-wide">{t.pairing4Combo}</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-2xl p-3 shadow-lg group hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-square overflow-hidden rounded-xl mb-4">
                <img
                  src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/481256567_122192271788127186_6613656501220625192_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFddetHGZxKqrm-Wxb4noehEnC3eYaVqdkScLd5hpWp2Zwhuy4F5--jdomH46uczwgbIdEzJhEE12Nd3Ha8PgaU&_nc_ohc=Zyqj_7wvU6cQ7kNvwGncASZ&_nc_oc=AdqEoUaNp195dLLN17aSTOM-EvZFSwRPdrDCNiwfM-dMvwS08KXmvANrv0BS4pn3aOB2RdXzsh6ynwM0bvS7o_xQ&_nc_zt=23&_nc_ht=scontent.fsgn5-1.fna&_nc_gid=9CMu70B-0eontMMeIzFeDQ&_nc_ss=7b2a8&oh=00_Af8-4i3no2a6vFRDuzNVBNDdc7tfcW35XGAMVGVh_cNBNA&oe=6A2ECFE2"
                  alt="Combo Biển Xanh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center pb-2">
                <h3 className="font-bold text-lg text-[#11202e] mb-1 font-['Josefin_Sans']">{t.pairing5Title}</h3>
                <p className="text-[#b67e53] font-semibold text-[11px] uppercase tracking-wide">{t.pairing5Combo}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
