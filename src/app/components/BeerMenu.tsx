import React, { useEffect, useRef } from 'react';

export const menuItems = [
  {
    id: 1,
    image: "https://creatcraft.com.vn/upload/elfinder/ducpham0981973533-04375-1731392319-2.jpg",
    title: "Beef Steak",
    sub: "Premium Beef Steak"
  },
  {
    id: 2,
    image: "https://creatcraft.com.vn/upload/elfinder/471224956_122181063116127186_6835408613328349828_n.jpg",
    title: "Sườn Nướng Đặc Biệt",
    sub: "Signature BBQ Ribs"
  },
  {
    id: 4,
    image: "https://creatcraft.com.vn/upload/elfinder/471276054_122181062552127186_3906534986553256707_n.jpg",
    title: "Xiên Nướng Rau Củ",
    sub: "Grilled Veggie Skewers"
  },
  {
    id: 5,
    image: "https://creatcraft.com.vn/upload/elfinder/471284434_122181050696127186_5485605934704400712_n.jpg",
    title: "Cơm Chiên Cá Mặn",
    sub: "Salted Fish Fried Rice"
  },
  {
    id: 6,
    image: "https://creatcraft.com.vn/upload/elfinder/471312317_122181063080127186_4257549939694959512_n.jpg",
    title: "Mực Ống Hấp",
    sub: "Steamed Squid"
  },
  {
    id: 7,
    image: "https://creatcraft.com.vn/upload/elfinder/471324722_122181050024127186_3269747421325517719_n.jpg",
    title: "Lòng Gà Xào Bánh Đa",
    sub: "Stir-fried Chicken Giblets with Rice Paper"
  },
  {
    id: 8,
    image: "https://creatcraft.com.vn/upload/elfinder/471326959_122181049970127186_8656627144969005209_n.jpg",
    title: "Mực Một Nắng Nướng Muối Ớt",
    sub: "Grilled Sun-dried Squid with Chili"
  },
  {
    id: 9,
    image: "https://creatcraft.com.vn/upload/elfinder/471182876_122181063050127186_1166998085643520039_n.jpg",
    title: "Sụn Gà Rang Muối Hongkong",
    sub: "Hongkong Style Salted Chicken Cartilage"
  },
  {
    id: 10,
    image: "https://creatcraft.com.vn/upload/elfinder/471259097_122181062372127186_8454474257599718691_n.jpg",
    title: "Cá Đù Một Nắng",
    sub: "Sun-dried Croaker Fish"
  }
];

export function BeerMenu() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const scrollContainer = sliderRef.current;
    if (!scrollContainer) return;

    let isHovering = false;

    // Mouse event handlers to pause on hover
    const handleMouseEnter = () => isHovering = true;
    const handleMouseLeave = () => isHovering = false;

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    const step = () => {
      if (!isHovering && scrollContainer) {
        scrollContainer.scrollLeft += 1; // 1px per frame speed

        // Loop back to start when we scrolled exactly half the total width 
        // (since we duplicated the array items exactly once)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const duplicatedItems = [...menuItems, ...menuItems];

  return (
    <section id="menu" className="relative font-sans py-24 min-h-[90vh] bg-[#FCFAF8] text-[#1C1A14] overflow-hidden flex flex-col justify-center">

      {/* 
        CHỮ NỀN CHUYỂN ĐỘNG TO MỜ PHÍA SAU
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        /* Ẩn thanh cuộn mặc định của trình duyệt */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="absolute inset-0 z-0 flex items-center pointer-events-none opacity-5">
        <div className="flex whitespace-nowrap animate-marquee">
          <h1 className="text-[15rem] md:text-[22rem] font-bold tracking-tighter uppercase mr-16" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            MÓN NGON KHÔNG THỂ BỎ QUA - THỰC ĐƠN ĐẶC SẮC -
          </h1>
          <h1 className="text-[15rem] md:text-[22rem] font-bold tracking-tighter uppercase mr-16" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            MÓN NGON KHÔNG THỂ BỎ QUA - THỰC ĐƠN ĐẶC SẮC -
          </h1>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col max-w-[140rem] mx-auto">

        {/* TIÊU ĐỀ */}
        <div className="text-center mb-12 md:mb-20 px-6 relative z-10">
          <span className="text-[#b67e53] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
            Thực Đơn Đặc Sắc
          </span>
          <h2 className="font-bold text-2xl md:text-4xl tracking-wider uppercase" style={{ fontFamily: "'Josefin Sans', sans-serif", color: "#11202e" }}>
            Những Món Ngon Không Thể Bỏ Qua
          </h2>
          <p className="mt-4 text-[#8C7A60] font-sans max-w-2xl mx-auto text-[15px]">
            Khám phá hương vị ẩm thực độc bản với những nguyên liệu tươi ngon nhất, được chế biến tỉ mỉ để chiều lòng mọi thực khách.
          </p>
        </div>

        {/* CONTAINER CHẠY NGANG (Continuous Smooth Scroll) */}
        <div
          ref={sliderRef}
          className="w-full flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-[10vw] pb-16 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none' }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="snap-center shrink-0 w-[280px] md:w-[320px] bg-[#F9F7F4] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center p-8 relative"
            >

              {/* SALE TAG ĐỎ ĐẬM (Bỏ theo yêu cầu bỏ giá) */}

              {/* HÌNH ẢNH MÓN ĂN - CẮT TRÒN GIỐNG CHIẾC ĐĨA */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-[0_15px_30px_rgba(0,0,0,0.2)] border-4 border-white transition-transform duration-500 hover:scale-105 z-10 bg-white">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* NỘI DUNG CHUẨN DESIGN - KHÔNG CHỨA GIÁ CẢ */}
              <div className="text-center w-full mt-2">
                <h3 className="font-bold text-[20px] md:text-[22px] text-[#11202e] mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>{item.title}</h3>
                <p className="text-[#8C7A60] text-sm md:text-[15px]" style={{ fontFamily: "'Lato', sans-serif" }}>{item.sub}</p>
              </div>

            </div>
          ))}
        </div>

        {/* --- COMBO GỢI Ý (SUGGESTED PAIRINGS) --- */}
        <div className="w-full mt-24 px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#b67e53] font-['Josefin_Sans'] text-xs font-semibold tracking-widest uppercase mb-4 block">
              Perfect Match
            </span>
            <h2 className="font-bold text-2xl md:text-3xl tracking-wider uppercase" style={{ fontFamily: "'Josefin Sans', sans-serif", color: "#11202e" }}>
              Gợi Ý Kết Hợp Tuyệt Hảo
            </h2>
            <p className="mt-4 text-[#8C7A60] font-sans max-w-2xl mx-auto text-[15px]">
              Trải nghiệm sự bùng nổ hương vị khi kết hợp đúng dòng bia thủ công cùng các món ăn đặc sắc được chúng tôi tuyển chọn.
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
                <h3 className="font-bold text-xl text-[#11202e] mb-2 font-['Josefin_Sans']">Đậm Đà & Chua Thanh</h3>
                <p className="text-[#b67e53] font-semibold text-sm uppercase tracking-wider">Bia Wheat × Sườn Heo Nướng BBQ</p>
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
                <h3 className="font-bold text-xl text-[#11202e] mb-2 font-['Josefin_Sans']">Béo Ngậy & Đắng Sảng Khoái</h3>
                <p className="text-[#b67e53] font-semibold text-sm uppercase tracking-wider">Bia IPA × Tuỷ Bò Nướng BBQ</p>
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
                <h3 className="font-bold text-lg text-[#11202e] mb-1 font-['Josefin_Sans']">Chua Ngọt & Đắng Thơm</h3>
                <p className="text-[#b67e53] font-semibold text-[11px] uppercase tracking-wide">Bia Đen × Gỏi Chuối Tép</p>
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
                <h3 className="font-bold text-lg text-[#11202e] mb-1 font-['Josefin_Sans']">Giòn Dai Và Ngọt Dịu</h3>
                <p className="text-[#b67e53] font-semibold text-[11px] uppercase tracking-wide">Bia Chanh Dây × Sụn Gà Cháy Tỏi</p>
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
                <h3 className="font-bold text-lg text-[#11202e] mb-1 font-['Josefin_Sans']">Khám Phá Cùng Creat</h3>
                <p className="text-[#b67e53] font-semibold text-[11px] uppercase tracking-wide">Beer for an easy life</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
