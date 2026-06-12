export const newsContent: Record<string, {
    title: string;
    title_en?: string;
    breadcrumbTitle: string;
    breadcrumbTitle_en?: string;
    date: string;
    category: string;
    category_en?: string;
    author: string;
    image: string;
    content: React.ReactNode;
    content_en?: React.ReactNode;
}> = {
    "bia-thu-cong-dong-chai-gia-si": {
        breadcrumbTitle: "Bia thủ công đóng chai giá sỉ",
        breadcrumbTitle_en: "Wholesale Bottled Craft Beer",
        title: "Bia thủ công đóng chai giá sỉ: Giải pháp tối ưu cho menu nhà hàng & đại lý tại TP.HCM",
        title_en: "Wholesale Bottled Craft Beer: The Premium Solution for Restaurants & Distributors in HCMC",
        date: "18 Tháng 4, 2026",
        category: "Thương hiệu",
        category_en: "Brand",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/dattiec-7628.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Creat Craft là đơn vị hàng đầu cung cấp bia craft sỉ và lẻ, được đánh giá là ngọn cờ đầu trong làng bia thủ công TP.HCM. Nếu bạn đang cân nhắc giải pháp menu nhà hàng độc đáo và có biên độ lợi nhuận ấn tượng thì các dòng bia thủ công hảo hạng của Creat Craft chính xác là đáp án hoàn hảo những năm gần đây. Với định hướng mang đến trải nghiệm thưởng thức bia đậm đà, tươi mới và đa dạng hương vị, chúng tôi tập trung phát triển các dòng bia đóng chai tiện lợi cùng quy trình ủ chuẩn quốc tế.
                </p>

                <p className="mb-6">
                    Điểm nổi bật của đơn vị cung cấp bia craft sỉ Creat Craft nằm ở khả năng giữ trọn vẹn hương vị nguyên bản của hoa bia và mạch nha. Sự kết hợp hoàn mỹ cùng công thức ủ lên men tự nhiên sẽ phù hợp với khẩu vị số đông người mới bắt đầu lẫn các tay sành sỏi. Bên cạnh đó, các dòng bia đóng chai của hãng còn được đánh giá cao nhờ thiết kế tem nhãn bắt mắt và chai thủy tinh tối màu giúp bảo quản chất lượng bia tối ưu.
                </p>

                <p className="mb-10">
                    Không chỉ chú trọng vào chất lượng từng mẻ bia, Creat Craft còn đầu tư vào trải nghiệm quy trình cung ứng mượt mà và dịch vụ giao hàng tận nơi. Nhờ đó, bia thủ công TP.HCM mang thương hiệu Creat Craft ngày càng khẳng định vị thế vững chắc, trở thành một giải pháp menu nhà hàng đắc lực giúp giữ chân khách hàng và làm mới không gian ẩm thực.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Thông tin chi tiết Bia thủ công TP.HCM từ Creat Craft
                </h2>
                <p className="mb-6">
                    Bia thủ công đóng chai Creat Craft là sự lựa chọn hoàn hảo cho những dịp tụ tập bạn bè hoặc thư giãn tại nhà, nổi bật với hương vị đậm đà, lớp bọt bia êm ái và thiết kế tiện dụng. Dưới đây là bảng thông tin chi tiết các dòng sản phẩm:
                </p>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full min-w-[600px] border-collapse border border-[#E5E7EB]">
                        <tbody>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Tên sản phẩm</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Bia thủ công đóng chai Creat Craft</td>
                            </tr>
                            <tr className="bg-[#F8F3EB]">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Dung tích</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">330ml / chai</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Thành phần chính</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Nước tinh khiết, lúa mạch, hoa bia, men bia tự nhiên</td>
                            </tr>
                            <tr className="bg-[#F8F3EB]">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Nồng độ cồn (ABV)</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Dao động từ 4.5% - 8.5% (Tùy từng dòng)</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Độ đắng (IBU)</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Từ 15 đến 65 (Phù hợp nhiều khẩu vị)</td>
                            </tr>
                            <tr className="bg-[#F8F3EB]">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Quy cách đóng gói</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Chai thủy tinh tối màu (Nâu/Xanh lá)</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Hạn sử dụng</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">3 - 6 tháng (Bảo quản lạnh)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Những đặc điểm nổi bật của Bia thủ công đóng chai Creat Craft
                </h2>

                <div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hương vị nguyên bản, đậm đà khó quên</h3>
                        <p>Mỗi chai bia Creat Craft đều giữ được hương thơm nồng nàn của hoa bia và vị ngọt dịu từ lúa mạch nhờ quá trình ủ nghiêm ngặt.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Lớp bọt bia mềm mịn tự nhiên</h3>
                        <p>Lớp bọt dày diễn vai trò như chiếc nắp đậy giúp giữ lại các hương thơm bay hơi, mang đến vị ngon tận ngụm cuối cùng.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Bao bì bảo vệ tối ưu</h3>
                        <p>Chai thủy tinh tối màu bảo vệ bia khỏi tác động tiêu cực của ánh sáng UV, duy trì chất lượng.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hoàn toàn tự nhiên</h3>
                        <p>Cam kết sử dụng nguyên liệu tự nhiên 100%, không hóa chất hay chất bảo quản, lên men truyền thống để giảm thiểu cảm giác đau đầu sau khi thưởng thức.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Khi nào nên chọn mua Bia thủ công đóng chai
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-10 text-[#2C2416]">
                    <li><strong>Tiệc nướng BBQ hoặc ăn uống tại nhà:</strong> Nâng tầm bữa tiệc với hàng loạt lựa chọn đồ uống có gu.</li>
                    <li><strong>Dã ngoại, cắm trại:</strong> Chai gọn nhẹ, dễ dàng ướp lạnh và mang đi bất cứ đâu.</li>
                    <li><strong>Nhu cầu chill một mình:</strong> Nhâm nhi thư giãn sau những giờ làm việc mệt mỏi.</li>
                    <li><strong>Quà tặng độc đáo:</strong> Sự trau chuốt về ngoại hình biến thức uống này thành món quà hoàn hảo cho đối tác, bạn bè.</li>
                </ul>

                {/* CTA Section */}
                <div className="bg-[#1C1A14] text-white p-8 md:p-12 rounded-sm text-center my-12 shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        Bạn Đang Tìm Nguồn Cung Cấp Bia Craft Sỉ & Lẻ Tại TP.HCM?
                    </h3>
                    <p className="text-[#8C7A60] mb-8 max-w-2xl mx-auto">
                        Nhận báo giá chi tiết, chính sách chiết khấu tốt nhất cho nhà hàng, quán bar, quán nhậu, và đại lý đại lý phân phối với dịch vụ giao hàng nhanh chóng.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="tel:0989354444" className="bg-[#C8963E] hover:bg-[#b08030] text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors w-full sm:w-auto">
                            Nhận Báo Giá Chi Tiết
                        </a>
                        <a href="https://zalo.me/0989354444" target="_blank" rel="noopener noreferrer" className="border border-[#C8963E] text-[#C8963E] hover:bg-[#C8963E] hover:text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors w-full sm:w-auto">
                            Chat Zalo Ngay
                        </a>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Những câu hỏi thường gặp
                </h2>
                <div className="space-y-4 mb-12">
                    <details className="group border border-[#E5E7EB] bg-white p-4 cursor-pointer">
                        <summary className="font-bold text-[#1C1A14] flex justify-between items-center outline-none">
                            Bia đóng chai có giữ được độ ngon như uống trực tiếp tại xưởng không?
                            <span className="transition group-open:rotate-180">+</span>
                        </summary>
                        <p className="text-[#8C7A60] mt-3 pr-4">
                            Hoàn toàn có thể. Quy trình chiết rót tiêu chuẩn giúp giữ lại 95% độ tươi mới và nguyên bản của bia.
                        </p>
                    </details>
                    <details className="group border border-[#E5E7EB] bg-white p-4 cursor-pointer">
                        <summary className="font-bold text-[#1C1A14] flex justify-between items-center outline-none">
                            Tại sao có cặn nhỏ dưới đáy chai?
                            <span className="transition group-open:rotate-180">+</span>
                        </summary>
                        <p className="text-[#8C7A60] mt-3 pr-4">
                            Điều này cực kỳ bình thường ở dòng bia thủ công. Đây là men bia tự nhiên không qua lọc công nghiệp, vô hại và tốt cho tiêu hóa.
                        </p>
                    </details>
                    <details className="group border border-[#E5E7EB] bg-white p-4 cursor-pointer">
                        <summary className="font-bold text-[#1C1A14] flex justify-between items-center outline-none">
                            Hạn sử dụng là bao lâu?
                            <span className="transition group-open:rotate-180">+</span>
                        </summary>
                        <p className="text-[#8C7A60] mt-3 pr-4">
                            3 đến 6 tháng trong điều kiện bảo quản lạnh từ 2-8 độ C. Không để tiếp xúc với ánh nắng mặt trời trực tiếp.
                        </p>
                    </details>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Creat Craft is a premier craft beer supplier in Ho Chi Minh City, recognized as a pioneer in the local craft brewing industry. If you are seeking a distinctive beverage solution for your restaurant menu with exceptional profit margins, our premium craft beers are the perfect answer. Driven by a commitment to bold, fresh, and universally distinct flavors, we specialize in convenient bottled craft beer forged through international brewing standards.
                </p>

                <p className="mb-6">
                    What truly distinguishes Creat Craft as a wholesale supplier is our ability to preserve the authentic, untouched essence of native hops and malt. Enhanced by a natural fermentation process, our brews cater seamlessly to both curious newcomers and seasoned connoisseurs alike. Furthermore, our bottled collections boast striking, customized branding and dark glass packaging designed to guarantee optimal flavor preservation.
                </p>

                <p className="mb-10">
                    Beyond brewing exceptional batches, Creat Craft heavily invests in a streamlined B2B supply chain and robust doorstep delivery solutions. Because of this, our craft beer brand confidently maintains its status as an invaluable asset for restaurants looking to boost customer retention and elevate their culinary atmosphere.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Product Specifications
                </h2>
                <p className="mb-6">
                    Our bottled craft beer offers the ultimate choice for casual gatherings or dedicated home consumption—boasting profound flavor profiles, smooth carbonation, and functional aesthetics. Below is the technical overview of our product line:
                </p>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full min-w-[600px] border-collapse border border-[#E5E7EB]">
                        <tbody>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Product Name</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Creat Craft Bottled Beer</td>
                            </tr>
                            <tr className="bg-[#F8F3EB]">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Volume</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">330ml / bottle</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Core Ingredients</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Purified water, premium malt, hops, and natural yeast</td>
                            </tr>
                            <tr className="bg-[#F8F3EB]">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Alcohol by Volume (ABV)</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Ranges from 4.5% - 8.5% (Depending on style)</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Bitterness (IBU)</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">From 15 to 65 (Adaptive to various palates)</td>
                            </tr>
                            <tr className="bg-[#F8F3EB]">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Packaging</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">Opaque dark glass (Brown/Green)</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-[#E5E7EB] p-4 font-bold w-1/3">Shelf Life</td>
                                <td className="border border-[#E5E7EB] p-4 text-[#8C7A60]">3 - 6 months (Under cold storage)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Why Choose Creat Craft Bottled Beer?
                </h2>

                <div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Unforgettable Original Flavors</h3>
                        <p>Through stringent brewing protocols, every bottle captures the intense aroma of hops and the delicate sweetness of high-grade malt.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Natural Smooth Foam</h3>
                        <p>Our thick foam head acts as a natural seal, preserving aromatic elements and delivering premium taste in every sip.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Ultimate Protective Packaging</h3>
                        <p>Dark glass bottles effectively shield the beer from harmful UV rays, flawlessly maintaining overall product integrity.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► 100% Natural Formulation</h3>
                        <p>We are dedicated to utilizing entirely natural ingredients without any artificial chemicals or preservatives, employing traditional fermentation to reduce post-consumption headaches.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Ideal Occasions
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-10 text-[#2C2416]">
                    <li><strong>BBQ Parties & Home Dining:</strong> Elevate your feasts with an array of tasteful beverage offerings.</li>
                    <li><strong>Picnics & Camping:</strong> Compact, easy to chill, and completely portable.</li>
                    <li><strong>Solo Relaxation:</strong> Sip and unwind after a long, exhausting workday.</li>
                    <li><strong>Unique Corporate Gifting:</strong> Refined branding makes our bottles the perfect gift for partners and friends.</li>
                </ul>

                {/* CTA Section */}
                <div className="bg-[#1C1A14] text-white p-8 md:p-12 rounded-sm text-center my-12 shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        Looking for a Reliable Wholesale Craft Beer Supplier in HCMC?
                    </h3>
                    <p className="text-[#8C7A60] mb-8 max-w-2xl mx-auto">
                        Receive detailed quotes, robust commercial discounts for restaurants and distributors, directly backed by lightning-fast delivery protocols.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="tel:0989354444" className="bg-[#C8963E] hover:bg-[#b08030] text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors w-full sm:w-auto">
                            Request a Quote
                        </a>
                        <a href="https://zalo.me/0989354444" target="_blank" rel="noopener noreferrer" className="border border-[#C8963E] text-[#C8963E] hover:bg-[#C8963E] hover:text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors w-full sm:w-auto">
                            Chat on Zalo
                        </a>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4 mb-12">
                    <details className="group border border-[#E5E7EB] bg-white p-4 cursor-pointer">
                        <summary className="font-bold text-[#1C1A14] flex justify-between items-center outline-none">
                            Does bottled beer retain its draft-quality taste?
                            <span className="transition group-open:rotate-180">+</span>
                        </summary>
                        <p className="text-[#8C7A60] mt-3 pr-4">
                            Absolutely. Our specialized bottling technology allows us to successfully retain up to 95% of the beer's original freshness.
                        </p>
                    </details>
                    <details className="group border border-[#E5E7EB] bg-white p-4 cursor-pointer">
                        <summary className="font-bold text-[#1C1A14] flex justify-between items-center outline-none">
                            Why is there slight sediment at the bottom?
                            <span className="transition group-open:rotate-180">+</span>
                        </summary>
                        <p className="text-[#8C7A60] mt-3 pr-4">
                            This is entirely common in craft beers. It represents unfiltered, natural brewing yeast which is completely harmless and aids digestion.
                        </p>
                    </details>
                    <details className="group border border-[#E5E7EB] bg-white p-4 cursor-pointer">
                        <summary className="font-bold text-[#1C1A14] flex justify-between items-center outline-none">
                            What is the shelf life?
                            <span className="transition group-open:rotate-180">+</span>
                        </summary>
                        <p className="text-[#8C7A60] mt-3 pr-4">
                            Typically 3 to 6 months under cold storage (2-8°C). Please keep the product out of direct sunlight.
                        </p>
                    </details>
                </div>

            </>
        )
    },
    // ---- BIA IPA ARTICLE ----
    "bia-ipa-la-gi-mua-bia-ipa-o-dau": {
        breadcrumbTitle: "Bia IPA là gì",
        breadcrumbTitle_en: "What is IPA Beer?",
        title: "Bia IPA là gì? Mua bia IPA ở đâu?",
        title_en: "What is IPA Beer? Where to Buy Authentic IPA?",
        date: "15 Tháng 4, 2026",
        category: "Kiến thức",
        category_en: "Knowledge",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/trai-nghiem-bia-ipa-tuoi-mat-2013.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Trong những năm gần đây, bia thủ công IPA dần trở thành lựa chọn được nhiều người quan tâm khi muốn tìm kiếm một trải nghiệm thưởng thức mới mẻ hơn. Thay vì chỉ uống để giải khát, nhiều người bắt đầu chú ý hơn đến mùi hương, hậu vị và cảm giác còn lưu lại sau mỗi ngụm bia.
                </p>

                <p className="mb-6">
                    Với những ai đang muốn tìm một nơi để bắt đầu, Creat Craft Beer là cái nơi đáng chú ý. Chúng tôi không đi theo hướng giới thiệu sản phẩm một cách khô cứng, mà tạo cảm giác gần gũi hơn với người uống thông qua trải nghiệm thực tế. Bài viết dưới đây sẽ giúp bạn hiểu rõ hơn về dòng bia này, từ đặc trưng hương vị cho đến lý do vì sao nhiều người yêu thích, đồng thời gợi mở một địa chỉ phù hợp nếu bạn đang muốn trải nghiệm theo đúng tinh thần bia thủ công.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Bia IPA là gì?
                </h2>
                <p className="mb-6">
                    IPA là viết tắt của India Pale Ale, một dòng bia có nguồn gốc từ Anh và được nhiều người biết đến nhờ hương hoa bia nổi bật cùng vị đậm cá tính. Trong đó, “Pale Ale” là tên gọi của dòng bia ale có màu sáng, xuất phát từ loại lúa mạch được rang ở mức vừa phải, giúp bia giữ được màu vàng đẹp mắt và nền vị dễ nhận biết.
                </p>
                <p className="mb-6">
                    Điểm làm nên dấu ấn riêng của dòng bia này nằm ở hoa bia. Ở đây, hoa bia được sử dụng nổi bật hơn để tạo ra mùi hương rõ nét và vị đắng đặc trưng. Về nguồn gốc, dòng bia này gắn với câu chuyện vận chuyển hàng hóa từ Anh sang Ấn Độ vào khoảng thế kỷ 18. Để khắc phục việc suy giảm chất lượng do chuyến đi biển dài ngày, những người nấu bia đã tăng lượng hoa bia trong công thức vì đây là nguyên liệu có khả năng hỗ trợ bảo quản tự nhiên tốt hơn.
                </p>

                <div className="w-full overflow-hidden my-8 rounded-sm shadow-md">
                    <img
                        src="https://creatcraft.com.vn/upload/elfinder/content/bia-thu-cong-ipa-creat-craft-beer-huong-vi-moi-me.jpg"
                        alt="Khám phá dòng bia IPA"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Hương vị đặc trưng của bia IPA
                </h2>
                <p className="mb-6">
                    Tại Creat Craft Beer, bia IPA đều được chăm chút theo hướng thủ công. Khi thưởng thức, người uống có thể cảm nhận rõ những nốt hương gợi trái cây nhiệt đới như cam, chanh, xoài, xen lẫn chút hương thông đặc trưng. Mức cồn khoảng 6–7% ABV tạo nên tổng thể đậm cá tính nhưng không quá nặng, vẫn giữ được độ mượt và sự dễ chịu khi uống.
                </p>
                <p className="mb-8">
                    Về cảm quan, bia có màu vàng mật ong bắt mắt, lớp bọt trắng mịn và độ lưu hương khá tốt sau khi rót ra ly. Càng uống chậm, càng dễ nhận ra sự chuyển biến giữa hương thơm, vị bia và phần hậu vị kéo dài sau cùng.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Mua bia IPA ở đâu để trải nghiệm đúng chất?
                </h2>
                <p className="mb-6">
                    Nếu bạn đang tìm một địa chỉ để thưởng thức hoặc mua bia IPA đúng chất bia thủ công, Creat Craft Beer là lựa chọn đáng cân nhắc. Tại đây, bia được sản xuất tại xưởng riêng, giúp kiểm soát tốt hơn từ nguyên liệu, quy trình ủ đến chất lượng thành phẩm khi đến tay người uống.
                </p>
                <p className="mb-6">
                    Việc sở hữu xưởng sản xuất riêng giúp thương hiệu chủ động hơn trong tiến độ cung ứng, kiểm soát độ đồng đều giữa các đợt bia và duy trì chất lượng thành phẩm một cách ổn định. Đây là lợi thế quan trọng đối với những đơn vị kinh doanh đồ uống muốn bổ sung bia thủ công vào menu.
                </p>

                <h3 className="text-xl font-bold text-[#C8963E] mb-4">Liên hệ với chúng tôi:</h3>
                <ul className="mb-8 pl-4 space-y-2 border-l-2 border-[#C8963E]">
                    <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                    <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                    <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Bia thủ công IPA tại Creat Craft Beer có gì nổi bật?
                </h2>

                <div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2">► Chất lượng thủ công được chú trọng</h3>
                        <p>Chủ động sản xuất bia IPA tại xưởng riêng, kiểm soát tốt nguyên liệu và quy trình ủ, cho thành thẩm trọn vẹn và ổn định.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2">► Tinh thần sáng tạo trong trải nghiệm thưởng thức</h3>
                        <p>Từ không gian mang cảm hứng đến cách gợi mở hành trình khám phá, tasting flight và các phiên bản giới hạn giúp làm mới cảm nhận của khách hàng.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2">► Giá trị đi cùng chất lượng</h3>
                        <p>Mức giá tương xứng chất lượng, với các combo ưu đãi tiết kiệm cho nhóm sẽ giúp người uống yên tâm trải nghiệm.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#1C1A14] text-white p-8 rounded-sm my-12 border border-[#C8963E] shadow-xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-[#C8963E]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                                Đặt Bàn Hoặc Đặt Bia Sỉ Hôm Nay!
                            </h3>
                            <p className="text-sm text-[#8C7A60]">
                                Chúng tôi hỗ trợ giao hàng nhanh tận nơi khu vực Tân Phú, Bình Tân, Quận 6 và lân cận.
                            </p>
                        </div>
                        <a href="https://zalo.me/0989354444" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-[#C8963E] hover:bg-white hover:text-[#C8963E] text-white px-6 py-3 font-bold uppercase tracking-wider transition-colors">
                            Liên Hệ Ngay
                        </a>
                    </div>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    In recent years, artisanal India Pale Ale (IPA) has emerged as an exceedingly popular choice for those attempting to broaden their tasting horizons. Rather than simply pursuing an icy refreshment, modern beverage enthusiasts prioritize complex aromatic profiles, sophisticated aftertastes, and the distinct lingering sensation following each sip.
                </p>

                <p className="mb-6">
                    For individuals and B2B clientele eager to begin their craft beer journey, Creat Craft Beer remains an exceptional destination. Beyond rigid product promotion, we strive to forge genuine connection through authentic sensory experiences. The following article delves into the structural composition of the IPA, detailing its defining flavor notes, global appeal, and reliable distribution endpoints precisely aligned with premium craft standards.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    What Precisely is an IPA?
                </h2>
                <p className="mb-6">
                    IPA serves as an acronym for India Pale Ale, a historically significant British brewing style globally renowned for its hop-forward aroma and robustly bold character. The term "Pale Ale" originates from naturally radiant, moderately roasted barley malt, granting the beer its dazzling golden hue and highly discernible foundational body.
                </p>
                <p className="mb-6">
                    The unequivocal trademark of the IPA resides in its pronounced hop concentration. During historical trade expeditions between Great Britain and India during the 18th century, brewers aggressively intensified the hop quotients. Operating essentially as a botanical preservative, elevated hops prevented spoilage during extensive oceanic voyages, inadvertently engineering the powerfully aromatic, pleasantly bitter beverage enjoyed today.
                </p>

                <div className="w-full overflow-hidden my-8 rounded-sm shadow-md">
                    <img
                        src="https://creatcraft.com.vn/upload/elfinder/content/bia-thu-cong-ipa-creat-craft-beer-huong-vi-moi-me.jpg"
                        alt="Discovering the IPA Category"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Signature Flavor Profile
                </h2>
                <p className="mb-6">
                    At Creat Craft Beer, every IPA batch is meticulously formulated via traditional, small-batch techniques. Upon tasting, individuals instantly detect bright, tropical inflections ranging from sweet orange and mango to distinctly crisp zest, beautifully balanced by faint botanical pine notes. Maintained at a conservative 6-7% ABV, the holistic integration provides a deeply charismatic profile without excessive harshness, ensuring extraordinary smoothness and exceptional clarity.
                </p>
                <p className="mb-8">
                    Aesthetically, our IPA yields an alluring honeycomb amber coloration, complemented by a delicate, sustained white head possessing superior lacing properties. Progressively measured consumption further reveals the dynamic interplay separating initial citrus aromas, bitter mid-palate impact, and the clean, elongated finish.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Where to Source Authentic IPA Experiences?
                </h2>
                <p className="mb-6">
                    Should you require a reliable wholesale venue dedicated to absolute craft integrity, Creat Craft Beer warrants immediate consideration. Operating our independent microbrewery effectively amplifies quality control, securing comprehensive oversight covering raw ingredient sourcing, controlled maturation processes, and final volumetric packaging.
                </p>
                <p className="mb-6">
                    Operating a proprietary brewing facility enables unparalleled commercial agility. B2B partners specifically benefit from unified batch consistency, reliable logistical scalability, and customized commercial guidance—vital assets for restaurants introducing artisan beer onto competitive menus.
                </p>

                <h3 className="text-xl font-bold text-[#C8963E] mb-4">Direct Contact Information:</h3>
                <ul className="mb-8 pl-4 space-y-2 border-l-2 border-[#C8963E]">
                    <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                    <li><strong>Commercial Email:</strong> creatcraftbeer@gmail.com</li>
                    <li><strong>Headquarters:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    The Creat Craft IPA Advantage
                </h2>

                <div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2">► Refined Artisanal Quality</h3>
                        <p>Complete operational autonomy yields exceptionally refined products—free from third-party deviations and reliably uniform throughout continuous commercial deployment.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2">► Strategic Sensorial Engagement</h3>
                        <p>Beyond rudimentary distribution, we structure targeted tasting flights and seasonal exclusives to consistently re-energize your menu and captivate discerning patron palates.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2">► Value-Driven Economics</h3>
                        <p>Our pricing systematically reflects high-grade formulation while securing compelling B2B profit margins and wholesale combo incentives specifically modeled to encourage aggressive retail expansion.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#1C1A14] text-white p-8 rounded-sm my-12 border border-[#C8963E] shadow-xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-[#C8963E]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                                Secure Your Wholesale Order Today!
                            </h3>
                            <p className="text-sm text-[#8C7A60]">
                                Expeditious, cold-chain delivery protocols presently active across Tan Phu, Binh Tan, District 6, and immediate surrounding territories.
                            </p>
                        </div>
                        <a href="https://zalo.me/0989354444" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-[#C8963E] hover:bg-white hover:text-[#C8963E] text-white px-6 py-3 font-bold uppercase tracking-wider transition-colors">
                            Contact Sales
                        </a>
                    </div>
                </div>

            </>
        )
    },
    "tu-quan-bia-thu-cong-den-nha-cung-ung-bia-chuyen-nghiep": {
        breadcrumbTitle: "Từ quán Bia Thủ Công...",
        breadcrumbTitle_en: "From a Craft Beer Pub...",
        title: "Từ quán Bia Thủ Công đến nhà cung ứng bia chuyên nghiệp",
        title_en: "From a Craft Beer Pub to a Professional Beer Supplier",
        date: "13 Tháng 4, 2026",
        category: "Câu chuyện",
        category_en: "Story",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/creat-craft-15-1382.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Có những hành trình bắt đầu rất nhỏ, chỉ từ một quán bia thủ công nằm nép mình trên một góc phố, nơi từng ly bia được rót ra cùng với câu chuyện về hương vị và trải nghiệm. Nhưng khi thị trường dần thay đổi, khi nhu cầu không còn dừng lại ở việc thưởng thức mà mở rộng sang tìm kiếm nguồn cung ổn định, hành trình ấy cũng buộc phải chuyển mình.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Tiệm bia nhỏ và giấc mơ lớn
                </h2>
                <p className="mb-6">
                    Mọi thứ bắt đầu từ một góc phố không quá nổi bật, nơi ánh đèn vàng hắt ra từ một quán bia nhỏ đủ để giữ chân những người tò mò ghé lại. Không biển hiệu cầu kỳ, không quảng bá rầm rộ, chỉ có vài chiếc bàn gỗ, một quầy bar khiêm tốn và những mẻ bia đầu tiên được ủ trong sự kiên nhẫn. Những ngày đầu, thử thách không nằm ở việc bán bia mà nằm ở việc kể câu chuyện. Khách bước vào, quen với lager nhẹ, thường chững lại khi nghe đến “bia thủ công” rồi hỏi bia này có gì khác, sao vị lại đậm thế. Và thế là mỗi ly bia được rót ra không chỉ để uống mà còn để giải thích, để chia sẻ về văn hóa bia thủ công với những hương vị không bị đóng khung theo số đông, nơi mỗi dòng bia mang một cá tính riêng.
                </p>

                <div className="w-full overflow-hidden my-8 rounded-sm shadow-md">
                    <img
                        src="https://creatcraft.com.vn/upload/elfinder/content/chat-luong-thu-cong-duoc-chu-trong-tai-creat-craft-beer.jpg"
                        alt="Tiệm bia nhỏ và giấc mơ lớn"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p className="mb-6">
                    Có những buổi tối vắng khách, có những mẻ bia chưa như kỳ vọng và cũng có không ít lần phải loay hoay giữa việc giữ chất riêng hay làm cho sản phẩm trở nên dễ tiếp cận hơn. Không phải ai cũng sẵn sàng đón nhận cái mới, có người thử rồi rời đi vì vị bia quá khác với thói quen, có những ngày doanh thu chững lại trong khi chi phí nguyên liệu vẫn cao vì luôn muốn giữ chất lượng. Những “nỗi đau” đó không ồn ào nhưng đủ để khiến người đứng quầy phải suy nghĩ lại mọi thứ, từ cách kể câu chuyện cho đến cách hoàn thiện từng ly bia.
                </p>
                <p className="mb-6">
                    Rồi sẽ có những khoảnh khắc khiến mọi thứ trở nên xứng đáng như khi một vị khách nhấp thử IPA, thoáng bất ngờ vì vị đắng lạ lẫm nhưng rồi khẽ gật đầu khi hậu vị lan ra, hay khi ai đó chọn một ly Wheat Ale và mỉm cười trước sự nhẹ nhàng, thơm dịu. Chính những cái gật đầu ấy, cùng những chuyển động rất nhỏ trong gu thưởng thức của khách hàng cứ thế âm thầm nuôi lớn một giấc mơ, để hành trình của một quán bia craft địa phương dần hiện lên rõ ràng hơn.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Những “điểm nghẽn” thúc đẩy chuyển mình
                </h2>
                <p className="mb-6">
                    Khi quán bắt đầu đông khách hơn, những vấn đề trước đây từng có thể “xoay xở được” dần lộ rõ phần hạn chế của mình như mô hình sản xuất nhỏ lẻ ngay tại quán vốn phù hợp cho giai đoạn khởi đầu, nhưng khi nhu cầu tăng lên, nó lại trở thành điểm nghẽn. Có những ngày bia vừa kịp phục vụ hết trong buổi tối, không còn dư cho ngày hôm sau. Có những mẻ bia dù được chăm chút kỹ lưỡng nhưng vẫn xuất hiện sự chênh lệch nhẹ về hương vị, điều mà trước đây ít ai để ý, nhưng khi khách quay lại nhiều lần, sự không đồng nhất bắt đầu trở thành một vấn đề thực sự.
                </p>
<p className="mb-6">
                    Trong quá trình vận hành, quán nhận ra không chỉ khách lẻ mà nhiều chủ nhà hàng, quán ăn khác cũng bắt đầu quan tâm đến văn hóa bia thủ công và muốn đưa những dòng bia này vào menu của họ. Nhưng rào cản lớn nhất lại nằm ở nguồn cung, khi phần lớn các quán bia craft địa phương vẫn sản xuất theo quy mô nhỏ, thiếu sự ổn định cả về sản lượng lẫn chất lượng. Nhu cầu có thật, thậm chí đang tăng lên, nhưng thị trường lại chưa có đủ đơn vị đáp ứng một cách bài bản.
                </p>
                <p className="mb-6">
                    Chính những điều đó buộc Creat phải nhìn lại hành trình đang đi vì nếu tiếp tục giữ mô hình cũ, quán có thể duy trì sự an toàn nhưng sẽ tự giới hạn khả năng phát triển. Và rồi một quyết định mang tính bước ngoặt được đưa ra, không dễ dàng nhưng cần thiết là rời khỏi vùng an toàn của một quán bán lẻ để chuyển mình thành một đơn vị cung ứng bia thủ công chuyên nghiệp, từ việc phục vụ từng ly bia tại quầy sang việc đảm bảo chất lượng cho từng mẻ bia khi đi xa hơn, đến nhiều điểm chạm hơn trên thị trường.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Chuẩn hóa quy trình sản xuất bia thủ công
                </h2>
                <p className="mb-6">
                    Khi chuyển mình thành một nhà cung ứng, câu chuyện bia thủ công đã vượt khỏi phạm vi của cảm hứng hay trải nghiệm tại quầy, nó hướng đến việc xây dựng một nền tảng vận hành đủ vững để tạo dựng niềm tin với khách hàng B2B. Từ đây, hành trình chuẩn hóa dần hình thành như một bước đi tất yếu, đưa tinh thần thủ công vào một hệ thống có thể lặp lại, có thể kiểm soát và có thể phát triển bền vững theo thời gian.
                </p>
                <p className="mb-6">
                    Trước tiên là việc đầu tư vào xưởng sản xuất, hệ thống được nâng cấp với các tank chứa dung tích lớn hơn, đi kèm khả năng kiểm soát nhiệt độ chặt chẽ trong từng giai đoạn ủ và lên men. Mỗi thông số, từ thời gian, áp suất đến nhiệt độ, đều được theo dõi sát sao để đảm bảo mỗi mẻ bia khi hoàn thành đều đạt trạng thái ổn định nhất, giảm thiểu tối đa sự sai lệch giữa các lần sản xuất. Đây cũng chính là nền tảng cốt lõi của một xưởng bia đạt chuẩn, với chất lượng không phụ thuộc vào cảm tính mà được kiểm chứng bằng quy trình.
                </p>
<p className="mb-6">
                    Song song đó là việc xây dựng chuỗi lạnh vì bia sau khi hoàn thiện không đơn giản là đóng keg và giao đi, mà được bảo quản xuyên suốt ở mức nhiệt từ 2 đến 4 độ C, từ xưởng cho đến khi đến tay đối tác. Việc duy trì cold-chain giúp giữ trọn hương vị nguyên bản, hạn chế biến đổi do nhiệt độ, đặc biệt quan trọng với các dòng bia tươi không sử dụng chất bảo quản. Đây cũng là điểm khác biệt rõ rệt giữa việc “bán bia” và cung cấp bia tươi giá sỉ theo tiêu chuẩn chuyên nghiệp.
                </p>
                <p className="mb-10">
                    Tuy nhiên, chuẩn hóa không đồng nghĩa với việc đánh mất bản sắc khi những dòng bia “Signature” vẫn được giữ nguyên tinh thần ban đầu, từ IPA đậm đà cho đến Wheat Ale nhẹ nhàng, nhưng được tinh chỉnh lại công thức để phù hợp với sản xuất quy mô lớn hơn. Mỗi công thức đều được ghi chép, kiểm nghiệm và lặp lại nhiều lần để đảm bảo tính nhất quán, nhưng vẫn giữ được cái “hồn” rất riêng của bia thủ công không hóa chất, không chất bảo quản, không chạy theo số đông. Hành trình “chuẩn hóa” vì thế không phải là sự thay đổi đột ngột, mà là một quá trình điều chỉnh liên tục, mang lại sự đáng tin cậy trong từng ly bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Trở thành đối tác cung ứng bia chuyên nghiệp
                </h2>
                <p className="mb-6">
                    Sau khi vận hành đã ổn định và mọi thứ đi vào guồng, trọng tâm dần chuyển sang cách sản phẩm thực sự được sử dụng trong mô hình kinh doanh của đối tác. Điều quan trọng là khi đưa vào thực tế là những chai bia cần giữ được chất lượng ổn định và phù hợp với cách vận hành tại quầy. Với khách hàng B2B, giá trị nằm ở việc sản phẩm không chỉ dễ đưa vào menu mà còn bán được đều và duy trì lâu dài.
                </p>
                <p className="mb-6">
                    Bia thủ công mang lại nhiều linh hoạt trong vận hành, nhưng để hương vị giữ được trọn vẹn từ lúc đóng chai đến khi phục vụ, từng khâu đều cần được kiểm soát cẩn thận. Từ điều kiện bảo quản, nhiệt độ lưu trữ đến cách rót và phục vụ tại quầy, mọi chi tiết đều tác động trực tiếp đến trải nghiệm của người uống.
                </p>
                <p className="mb-10">
                    Sự ổn định bắt đầu hình thành rõ ràng. Nguồn cung được duy trì đều đặn giúp hoạt động kinh doanh không bị gián đoạn, trong khi chất lượng được giữ vững qua từng lô bia tạo nên niềm tin theo thời gian.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Những con số chứng minh năng lực và hành trình vươn xa
                </h2>
                <p className="mb-6">
                    Hiện tại, sản lượng trung bình mỗi tháng của Creat đã chạm mốc 40.000 lít bia, một con số không chỉ phản ánh quy mô mà còn cho thấy khả năng duy trì ổn định trong toàn bộ quy trình sản xuất bia thủ công. Từ xưởng đến điểm bán, mỗi mẻ bia đều được kiểm soát chặt chẽ.
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-10 text-[#2C2416]">
                    <li>Hơn 50 đối tác nhà hàng, quán bar đang đồng hành và phân phối bia</li>
                    <li>Trung bình 40.000 lít bia/tháng được sản xuất và cung ứng ra thị trường</li>
                    <li>Hàng ngàn ly bia được phục vụ mỗi ngày tại nhiều điểm bán khác nhau</li>
                    <li>Tỷ lệ tái đặt hàng cao từ các đối tác hiện hữu, cho thấy mức độ tin tưởng ổn định</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Thông tin liên hệ Creat Craft Beer
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Some corporate trajectories originate in exceptionally modest settings. For us, the journey began inside a small craft beer pub nestled on a quiet street corner—a place where each freshly poured glass was accompanied by an ardent narrative surrounding nuanced flavors and immersive tasting experiences. However, as local markets matured and client demands evolved beyond mere immediate consumption toward stable wholesale supply chains, our internal infrastructure necessitated a rapid, comprehensive transformation.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    A Small Pub with Massive Ambitions
                </h2>
                <p className="mb-6">
                    Our initial footprint was decidedly intimate: a warm yellow glow extending from a minimalist pub absent of grandiose signage. Featuring only a handful of timber tables, a modest bar counter, and early fermentation batches brewed with unwavering patience, our primary obstacle was not distributing the product, but effectively narrating its value. Guests accustomed to lightweight, mass-market lagers frequently hesitated when confronting our dense, profoundly aromatic craft variants. Thus, every dispensed glass functioned simultaneously as a beverage and a localized educational seminar, meticulously decoding the craft beer ethos for an untested domestic demographic.
                </p>

                <div className="w-full overflow-hidden my-8 rounded-sm shadow-md">
                    <img
                        src="https://creatcraft.com.vn/upload/elfinder/content/chat-luong-thu-cong-duoc-chu-trong-tai-creat-craft-beer.jpg"
                        alt="A Small Pub with Massive Ambitions"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p className="mb-6">
                    Naturally, there were chronically quiet evenings, experimental batches falling short of exacting standards, and perpetual commercial dilemmas regarding whether to dilute our signature profiles to appease broader, less adventurous palates. Such operational "growing pains" routinely compelled our founding team to constantly re-evaluate and refine our operational blueprint.
                </p>
                <p className="mb-6">
                    Nevertheless, sporadic moments of sheer validation consistently fueled our momentum. Witnessing a skeptical patron register genuine surprise after their initial sip of our boldly bitter IPA, or observing quiet satisfaction following the smooth finish of our Wheat Ale, incrementally cemented our overarching vision.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Operational Bottlenecks Forcing Adaptation
                </h2>
                <p className="mb-6">
                    As foot traffic multiplied, previously manageable minor inefficiencies metastasized into critical operational bottlenecks. Our localized micro-brewing framework outgrew its operational capacity. Frequent inventory shortages meant signature varieties consistently sold out before evening's end. Furthermore, subtle batch-to-batch flavor inconsistencies—previously overlooked by casual drinkers—became increasingly intolerable as our core demographic developed sophisticated palates and demanded rigorous uniformity.
                </p>
<p className="mb-6">
                    Concurrently, we observed an expanding B2B inquiry curve. Numerous independent restaurant operators and bar owners expressed immense interest in integrating our craft selections into their proprietary menus. Unfortunately, the decentralized state of the local craft brewing industry struggled to provide adequate qualitative stability or volumetric assurance. The commercial demand was overwhelmingly evident, yet systemic supply chains remained critically underdeveloped.
                </p>
                <p className="mb-6">
                    Consequently, Creat Craft executed a strategic pivot. Acknowledging that preserving our localized pub format would ultimately stifle our long-term trajectory, we committed to an aggressive transition from a retail-centric pub toward an elite, industrialized wholesale craft beer supplier capable of satisfying stringent B2B distribution metrics.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Standardizing the Artisanal Production Framework
                </h2>
                <p className="mb-6">
                    Transitioning into a dedicated B2B supplier mandated a philosophical shift: artisanal expression required immediate synchronization with rigid operational repeatability, enabling scalability without sacrificing our intrinsic craft identity.
                </p>
                <p className="mb-6">
                    Infrastructural overhauls heavily prioritized advanced brewing hardware. We implemented high-capacity fermentation tanks equipped with robust, hyper-accurate thermodynamic regulators governing both the mashing and fermentation cycles. Strict adherence to calculated protocols fundamentally reduced human error, permanently eliminating erratic flavor deviations.
                </p>
<p className="mb-6">
                    Simultaneously, we established a comprehensive cold-chain logistics network. Post-production, our kegs and bottles remain systematically chilled between 2 to 4°C throughout the entire transit and storage continuum. This prevents thermal degradation and effectively preserves the native vibrancy of our preservative-free products—a non-negotiable benchmark for premium B2B provisioning.
                </p>
                <p className="mb-10">
                    Crucially, standardization never implied mass-market commodification. Our "Signature" portfolio retained its aggressive, unapologetic DNA, but the underlying recipes were scientifically calibrated for volumetric scaling. Continuous algorithmic iteration ensures precise product replicability while zealously guarding the artisanal soul that characterized our inaugural batches.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Forging Professional Supply Partnerships
                </h2>
                <p className="mb-6">
                    Upon stabilizing our internal dynamics, focus aggressively shifted toward augmenting the operational architectures of our B2B partners. Modern commercial clientele require more than exceptional beer; they actively demand a highly reliable product specifically optimized for rapid, consistent front-of-house deployment.
                </p>
                <p className="mb-6">
                    Creat Craft provides comprehensive infrastructural consultation, meticulously advising our restaurant partners on optimal bar storage, precise thermodynamic maintenance, and fundamentally correct pouring vectors to ensure flawless end-user presentation.
                </p>
                <p className="mb-10">
                    Through unbroken supply chains and immaculate batch consistency, we have successfully cemented our reputation as a fundamentally crucial operational asset for the region's elite culinary establishments.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Defining Our Trajectory in Hard Metrics
                </h2>
                <p className="mb-6">
                    Presently, Creat Craft sustains a staggering production output of 40,000 liters monthly—quantifying not only our market penetration but explicitly verifying our capacity for flawless volumetric scalability without diminishing elite craft standards.
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-10 text-[#2C2416]">
                    <li>Over 50 premium restaurant and bar partners continuously procuring distribution inventory.</li>
                    <li>Consistently maintaining an industrial yield of 40,000 liters per month.</li>
                    <li>Countless specialized craft beverages effectively served across an array of upscale retail venues.</li>
                    <li>Sustaining extraordinarily high partner retention rates, validating our uncompromising commitment to absolute B2B reliability.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Corporate Contact Architecture
                </h2>
                <p className="mb-4">
                    For restaurants and distributors aiming to significantly enhance their beverage programs within Ho Chi Minh City, Creat Craft Beer operates as your optimal supply-chain partner.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Corporate Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Operations HQ:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "creat-craft-hanh-trinh-kien-tao-hon-40000-lit-bia-thu-cong-moi-nam": {
        breadcrumbTitle: "Hành trình kiến tạo...",
        breadcrumbTitle_en: "The Journey to Produce...",
        title: "Creat Craft: Hành trình kiến tạo hơn 40.000 lít bia thủ công mỗi năm",
        title_en: "Creat Craft: The Journey to Produce Over 40,000 Liters of Craft Beer Annually",
        date: "13 Tháng 4, 2026",
        category: "Câu chuyện",
        category_en: "Story",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/z72806845964888d3ea24d2010ef4170465bf5526f41a4-1552-1541.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Hành trình của Creat Craft bắt đầu từ những mẻ nấu thử nghiệm, nơi mọi thứ đều mang tính khám phá. Từng công thức được điều chỉnh, từng nguyên liệu được thử nghiệm, có khi thất bại, có khi tạo nên những bất ngờ thú vị. Nhưng chính những trải nghiệm đó đã đặt nền móng cho một quy trình sản xuất bài bản hơn sau này. Khi quy mô dần mở rộng, Creat Craft vẫn kiên định với triết lý ban đầu: không đánh đổi bản sắc để chạy theo số lượng.
                </p>
                <p className="mb-6">
                    Ngày nay, dù đã có quy trình rõ ràng, thiết bị hiện đại và sản lượng ổn định, mỗi mẻ bia của Creat Craft vẫn giữ được “cái tôi” rất riêng. Và cũng chính điều đó khiến mỗi ly bia không chỉ ngon, mà còn có chiều sâu như một tác phẩm nghệ thuật được chắt lọc từ thời gian, tâm huyết và đam mê.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Triết lý nấu bia tại Creat Craft
                </h2>
                <p className="mb-6">
                    Creat Craft không bắt đầu từ công thức, mà bắt đầu từ cảm xúc. Mỗi mẻ bia được xem như một hành trình sáng tạo, nơi người nấu không chỉ tuân theo kỹ thuật mà còn “lắng nghe” nguyên liệu, thời tiết và cả những thay đổi rất nhỏ trong quá trình lên men. Ở đó, bia không còn là một sản phẩm công nghiệp đơn thuần, mà trở thành một trải nghiệm có cá tính với mỗi mẻ đều có câu chuyện riêng, không rập khuôn, không đại trà.
                </p>
                <p className="mb-6">
                    Cái tên Creat Craft chính là cách thương hiệu định nghĩa bản thân mình. “Creat” không chỉ là sáng tạo, mà còn là sự chủ động phá vỡ giới hạn, dám thử nghiệm những điều mới mẻ. “Craft” lại đại diện cho tay nghề thủ công, cho sự tỉ mỉ, kiên nhẫn và niềm tự hào của người làm nghề. Khi hai yếu tố này kết hợp, Creat Craft không đơn thuần làm bia ngon mà là tạo ra những dòng bia mang dấu ấn cá nhân, cần kỹ thuật và cảm hứng hòa quyện chặt chẽ với nhau.
                </p>
<p className="mb-6">
                    Sự kỹ tính của Creat Craft thể hiện rõ nhất ở khâu lựa chọn nguyên liệu. Hoa bia (hops) được chọn lọc dựa trên hương thơm và tầng vị đặc trưng, không chỉ để tạo độ đắng mà còn để định hình “tính cách” của từng loại bia. Mạch nha (malt) được cân nhắc kỹ lưỡng về độ rang, màu sắc và khả năng tạo thân bia, đảm bảo mỗi ngụm bia đều có chiều sâu và độ cân bằng. Nguồn nước tưởng chừng như đơn giản cũng được kiểm soát nghiêm ngặt về khoáng chất, bởi chỉ cần một thay đổi nhỏ cũng có thể ảnh hưởng đến toàn bộ hương vị cuối cùng. Với Creat Craft, nguyên liệu không phải là đầu vào, mà là nền tảng quyết định chất lượng và bản sắc.
                </p>
                <p className="mb-6">
                    Cùng những thiết bị tiên tiến giúp kiểm soát nhiệt độ, thời gian và quá trình lên men một cách chính xác, đảm bảo tính ổn định cho từng mẻ bia. Nhưng trên hết quyết định cuối cùng vẫn nằm ở brewer, là người hiểu rõ khi nào nên điều chỉnh, khi nào nên giữ nguyên, và khi nào nên phá cách. Chính sự kết hợp này giúp Creat Craft giữ được sự nhất quán về chất lượng, đồng thời vẫn duy trì được nét riêng đầy cảm xúc trong từng dòng bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Quy trình khép kín: Từ nhà máy đến ly bia mát lạnh
                </h2>
                <p className="mb-6">
                    Một ly bia mát lạnh khi đến tay người thưởng thức thực chất là điểm cuối của cả một hành trình được kiểm soát chặt chẽ từ đầu đến cuối. Tại xưởng, mọi công đoạn đều vận hành theo quy trình khép kín từ xử lý nguyên liệu, nấu, lên men cho đến chiết rót và bảo quản.
                </p>
                <p className="mb-6">
                    Quy trình này không đơn thuần là “làm bia”, mà là một chuỗi những bước được đo lường, ghi nhận và tối ưu liên tục. Từng mẻ bia đều có hồ sơ riêng, từ nhiệt độ, thời gian, đến các chỉ số lên men, giúp đảm bảo sự đồng nhất về chất lượng trong từng ly bia được phục vụ.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Nhịp vận hành phía sau con số 40.000 lít/năm</h3>
                        <p>Nếu chia đều, sản lượng 40.000 lít bia mỗi năm tương đương khoảng hơn 3.300 lít mỗi tháng, hay trung bình hơn 100 lít mỗi ngày. Nhưng thực tế vận hành không diễn ra theo cách “đều đều” như vậy.</p>
                        <p className="mt-2">Xưởng hoạt động theo chu kỳ mẻ nấu: có những ngày tập trung cho công đoạn Mashing (ủ malt) và Boiling (đun sôi với hoa bia), sau đó là giai đoạn Fermentation kéo dài từ 7–21 ngày tùy dòng bia. Điều này có nghĩa là tại bất kỳ thời điểm nào, luôn có nhiều mẻ bia đang “sống” trong các bồn lên men, mỗi mẻ ở một giai đoạn khác nhau.</p>
                        <p className="mt-2">Chính cách vận hành theo chu kỳ chồng lớp này giúp xưởng duy trì sản lượng ổn định, đồng thời vẫn giữ được độ tươi mới và kiểm soát chất lượng ở mức cao.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Sự đa dạng trong danh mục sản phẩm</h3>
                        <p>Danh mục sản phẩm được xây dựng như một “bản đồ hương vị”, nơi những dòng bia cốt lõi và các thử nghiệm sáng tạo cùng tồn tại song song.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Dòng Signature:</strong> Những cái tên quen thuộc như Pale Ale hay IPA đóng vai trò nền tảng. Đây là các dòng bia được tinh chỉnh qua nhiều mẻ nấu để đạt sự cân bằng ổn định về hương thơm, vị đắng và hậu vị.</li>
                            <li><strong>Dòng Seasonal (bia mùa):</strong> Không bị giới hạn bởi công thức cố định, các dòng bia mùa là nơi đội ngũ brewer thử nghiệm nguyên liệu mới. Có thể là một mẻ bia mang hương trái cây, hoặc một dòng bia đậm, ấm cho những ngày cuối năm.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Nấu & Lên men</h3>
                        <p>Quá trình nấu bia là sự kết hợp giữa kỹ thuật và cảm quan.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Mashing:</strong> Malt được nghiền và ủ ở nhiệt độ chính xác để chuyển hóa tinh bột thành đường lên men.</li>
                            <li><strong>Boiling:</strong> Dịch đường được đun sôi cùng hoa bia, quyết định phần lớn hương thơm và độ đắng.</li>
                            <li><strong>Fermentation:</strong> Men được bổ sung, bắt đầu quá trình chuyển hóa đường thành cồn và CO₂.</li>
                        </ul>
                        <p className="mt-2">Hệ thống luôn theo dõi chặt chẽ nhiệt độ, áp suất và thời gian, đảm bảo mỗi mẻ bia đạt đúng “chân dung” đã định hình.</p>
                    </div>
                </div>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Kiểm soát chất lượng cho từng mẻ bia</h3>
                        <p>Trước khi được đưa ra phục vụ, mỗi mẻ bia đều trải qua nhiều bước kiểm tra. Hương vị phải đạt đúng profile mong muốn, độ trong được đảm bảo, bọt bia mịn và bền. Những sai lệch dù nhỏ cũng có thể khiến cả mẻ bị loại bỏ hoặc điều chỉnh lại.</p>
                        <p className="mt-2">Đây là giai đoạn thể hiện rõ nhất sự nghiêm túc trong quy trình sản xuất: không có chỗ cho sự “tạm chấp nhận”, chỉ có đạt chuẩn hoặc làm lại.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Đội ngũ đứng sau những mẻ bia</h3>
                        <p>Phía sau hệ thống máy móc hiện đại là những con người hiểu rõ từng chi tiết nhỏ trong quá trình nấu bia. Họ không chỉ vận hành thiết bị, mà còn là người cảm nhận hương vị, điều chỉnh công thức và đưa ra quyết định cho từng mẻ nấu.</p>
                        <p className="mt-2">Chính họ là những “nghệ nhân” thực thụ và là người thổi hồn vào hơn 40.000 lít bia mỗi năm, biến những con số kỹ thuật thành trải nghiệm thực sự trong từng ly bia mát lạnh.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Mục tiêu tương lai của Creat Craft Beer
                </h2>
                <p className="mb-6">
                    Hành trình phía trước của chúng tôi không được đo bằng những con số đã đạt được, mà được định hình qua cách chúng tôi tiếp tục tìm vị trí của mình trong bản đồ bia thủ công ngày càng sôi động. Bắt đầu từ một xưởng nấu mang tinh thần thử nghiệm, chúng tôi dần tạo nên dấu ấn riêng, không phô trương nhưng đủ sâu để người thưởng thức nhớ đến.
                </p>
<p className="mb-6">
                    Trong bức tranh bia thủ công tại Việt Nam, khi ngày càng nhiều cái tên mới xuất hiện, chúng tôi chọn cho mình một hướng đi bền bỉ hơn. Thay vì chạy theo những xu hướng ngắn hạn, chúng tôi tập trung đào sâu vào trải nghiệm của người uống. Mỗi dòng bia khi hoàn thiện không chỉ dừng lại ở mức “đủ tốt”, mà luôn hướng đến sự tròn vị, cân bằng và có chiều sâu.
                </p>
                <p className="mb-6">
                    Con số 40.000 lít mỗi tháng vì thế không phải đích đến, mà chỉ là một cột mốc trên hành trình dài phía trước. Điều chúng tôi theo đuổi chưa bao giờ là sản lượng, mà là khả năng nâng tầm chất lượng qua từng mẻ nấu, là sự sẵn sàng thử nghiệm những công thức mới và tạo ra những hương vị bùng nổ nhưng vẫn giữ được bản sắc riêng.
                </p>
                <p className="mb-10">
                    Và sau tất cả, chúng tôi không chỉ dừng lại ở việc nấu bia. Chúng tôi đang tạo ra một không gian kết nối, nơi câu chuyện được kể bằng hương thơm của malt, vị đắng dịu của hoa bia và những cảm xúc còn đọng lại sau từng ngụm bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Thông tin liên hệ Creat Craft Beer
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    The genesis of Creat Craft can be heavily attributed to exploratory brewing batches inherently driven by boundless curiosity. Initial operational phases involved perpetually refining methodologies, scrutinizing niche ingredients, and embracing both failures and triumphant surprises. These foundational iterations effectively crystallized our robust, standardized production framework recognized today. Ultimately, as operations accelerated, Creat Craft fiercely defended its pioneering philosophy: scaling production must never compromise our deep-rooted artisanal aesthetics.
                </p>
                <p className="mb-6">
                    At present, despite deploying cutting-edge hardware and commanding massive volumetric parameters, every distinct Creat Craft batch emphatically projects a deeply proprietary persona. Consequently, every served glass ascends past routine refreshment, establishing itself as a meticulous culinary artwork forged by duration, absolute precision, and unembellished passion.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Our Brewing Philosophy
                </h2>
                <p className="mb-6">
                    Creat Craft circumvents rote algorithmic formulations in favor of deeply resonant sensory engagements. Our master brewers perceive every fermentation cycle organically—constantly calibrating reactions surrounding raw inputs, barometric variables, and subtle biological fermentation trends. Under this paradigm, our beverages decisively break from monochromatic industrial molds, embracing highly individualized, multi-tiered architectures categorically resistant to mass-market homogenization.
                </p>
                <p className="mb-6">
                    Our nomenclature effectively serves as our corporate manifesto. “Creat” aggressively mandates innovation and unyielding boundary disruption. “Craft” embodies exhaustive patience, elite artisanal execution, and deep-seated vocational pride. Synchronized together, Creat Craft architects profound liquid experiences firmly anchored by precision engineering and imaginative artistry.
                </p>
<p className="mb-6">
                    Our uncompromising standards commence forcefully with raw material acquisition. Hops are sourced specifically based on hyper-specific aromatic densities and botanical complexity to unequivocally define our product profiles. Premium malts face rigorous evaluations concerning roast parameters and chromatic yields to guarantee structural depth. Even our hydration matrices endure unyielding mineral monitoring, recognizing that fractional thermodynamic impurities severely compromise output integrity. At Creat Craft, raw inputs remain sacred foundational pillars orchestrating final product fidelity.
                </p>
                <p className="mb-6">
                    Concurrently, state-of-the-art technological infrastructures comprehensively dictate macroscopic fermentation parameters to flawlessly guarantee systematic output stability. Yet, macro-level decisions are uncompromisingly reserved for our master brewers, who instinctively decode precisely when to preserve native anomalies and where to aggressively assert qualitative adjustments, preserving the emotional core synonymous with artisan craft beer.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    The Closed-Loop Ecosystem: From Facility to Frosty Glass
                </h2>
                <p className="mb-6">
                    An immaculate, cold pour signifies the successful conclusion of a mercilessly scrutinized, closed-loop logistical operation. Internal procedures structurally integrate all phases: from raw processing and thermal boiling to sophisticated biological fermentation and stringent containment protocols.
                </p>
                <p className="mb-6">
                    This structure aggressively denounces the passive “making of beer,” demanding an optimized chain of analytically driven metric evaluations. Respective batches feature intensely detailed data logs cataloging thermal outputs, temporal variations, and microscopic fermentation indexing to effectively solidify batch-to-batch uniformity upon deployment.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► The Logistics Sustaining 40,000 Liters Mentality</h3>
                        <p>Divorced from abstraction, generating 40,000 liters necessitates scaling roughly 3,300 liters per subsequent operational month. However, standard linear progression is a profound fallacy given biological realities.</p>
                        <p className="mt-2">Our facilities command overlapping biological cycles: designated units singularly tackle Mashing and Boiling thresholds while supplementary systems patiently endure staggered, 7-21 day Fermentation incubations. Under these parameters, a multitude of distinct liquid batches remain simultaneously active within insulated tanks across heavily stratified development stages.</p>
                        <p className="mt-2">This rigorous, multi-tiered stacking method guarantees unbroken inventory availability while ferociously shielding the volatile freshness mandatory in high-end distributions.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Sophisticated Product Portfolio</h3>
                        <p>Our operational inventory fundamentally reflects a curated "aromatic topography," wherein staunch legacy profiles smoothly coexist beside highly experimental frontiers.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>The Signature Series:</strong> Indispensable anchor varieties specifically engineered over countless trials to exhibit immaculate aromatic and bitter balance, epitomized by our Pale Ale and IPA variants.</li>
                            <li><strong>The Seasonal Editions:</strong> Intentionally unbound by historical rigidities, seasonal micro-batches unleash experimental methodologies explicitly tailored to seasonal atmospheric shifts or exotic harvest yields.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Scientific Elaboration: Mashing & Fermentation</h3>
                        <p>Elite craft operations straddle the precise intersection separating biological engineering and raw intuition.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Strategic Mashing:</strong> Finely milled malt undergoes aggressive thermal regulation to chemically synthesize core fermentable sugars.</li>
                            <li><strong>Thermal Boiling:</strong> Sugar matrices converge with premium hops, forcefully architecting immediate aromatic foundations and defining baseline sensory bitterness.</li>
                            <li><strong>Microbiological Fermentation:</strong> Pure-strain yeast aggressively metabolizes sugar properties, resulting in dense carbonation and elevated alcoholic integration.</li>
                        </ul>
                        <p className="mt-2">Extensive digital frameworks proactively police all thermodynamic variables, guaranteeing exact adherence to targeted recipe specifications.</p>
                    </div>
                </div>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Relentless Quality Assurance Checkpoints</h3>
                        <p>Prior to distribution authorizations, batches face exhaustive macroscopic audits targeting chromatic clarity, foam structural durability, and pinpoint flavor profiling. Minimalist deviations automatically trigger full-batch eradication or aggressive real-time countermeasures.</p>
                        <p className="mt-2">This unwavering dedication absolutely neutralizes "tolerable mediocrity," definitively instituting binary standards: flawless execution or systematic rejection.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► The Human Architecture Behind the Machine</h3>
                        <p>Commanding our advanced machinery sits an elite collective of master technicians intimately synchronized with biochemical nuance. Rather than simply manning digital panels, they proactively interpret sensory feedback to continuously execute microscopic recipe optimizations on demand.</p>
                        <p className="mt-2">These consummate craftsmen animate our extensive data metrics, organically transforming rigid formulas into the vibrant, exhilarating pours defining the Creat Craft aesthetic.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Future Corporate Trajectory
                </h2>
                <p className="mb-6">
                    Creat Craft's ongoing evolution fundamentally rejects hollow volumetric vanity in favor of consistently aggressive upward mobility across an increasingly contested landscape. Stemming from experimental roots, we successfully established a formidably authentic corporate signature built on substantive action rather than superficial grandstanding.
                </p>
<p className="mb-6">
                    Amid an explosive domestic craft revolution, we deliberately choose calculated longevity. By aggressively ignoring ephemeral market fads, we continuously refine consumer experience verticals ensuring that our finished outputs consistently provide dense, multidimensional engagements.
                </p>
                <p className="mb-6">
                    Surpassing 40,000 monthly liters merely marks a transient developmental milestone. Our relentless focus remains uncompromisingly locked on elevating intrinsic quality parameters, safely venturing into aggressive new sensory territories, and fiercely preserving our founding DNA.
                </p>
                <p className="mb-10">
                    Ultimately, Creat Craft refuses to operate strictly as beverage manufacturers. We diligently construct highly integrative, tactile ecosystems where deep sensory narratives intuitively unfold through the precise interplay of high-grade malts, intense hops, and deeply resonant flavors.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Contact Creat Craft Beer
                </h2>
                <p className="mb-4">
                    If you are searching for an exceptional craft beer destination or reliable distribution in HCMC, Creat Craft remains your premier solution.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Corporate Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Operations HQ:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "nhung-loai-hoa-bia-pho-bien": {
        breadcrumbTitle: "Những loại hoa bia phổ biến",
        breadcrumbTitle_en: "Popular Hop Varieties",
        title: "Những loại hoa bia phổ biến",
        title_en: "Popular Hop Varieties in Craft Brewing",
        date: "10 Tháng 4, 2026",
        category: "Nguyên liệu",
        category_en: "Ingredients",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/hoa-bia-la-gi-vai-tro-cua-hoa-bia-trong-bia-thu-cong1-9938.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Trong bốn nguyên liệu cơ bản làm nên một ly bia (nước, mạch nha, men và hoa bia), hoa bia thường được xem là yếu tố mang tính "ma thuật" nhất. Dù chỉ chiếm một tỷ lệ rất nhỏ trong tổng khối lượng mẻ nấu, hoa bia lại là "chìa khóa" định hình cá tính, tạo ra sự cân bằng hoàn hảo và đánh thức mọi giác quan của người thưởng thức.
                </p>
                <p className="mb-6">
                    Đối với những người yêu thích bia thủ công, việc khám phá thế giới hoa bia cũng giống như việc tìm hiểu về các giống nho trong làm rượu vang. Mỗi loại hoa bia mang trong mình một DNA riêng biệt về độ đắng và dải hương thơm, từ đó quyết định trực tiếp đến phong cách của từng dòng bia trên thế giới.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Vai trò không thể thay thế của hoa bia trong nấu bia
                </h2>
                <p className="mb-6">
                    Trước khi hoa bia trở thành một phần “linh hồn” của bia như ngày nay, người xưa từng thử nghiệm đủ loại thảo mộc và rễ cây để tạo hương vị. Tuy nhiên, những phương pháp đó thường thiếu ổn định, mỗi mẻ bia cho ra một kết quả khác nhau, khó kiểm soát chất lượng. Chỉ khi hoa bia xuất hiện và được ứng dụng rộng rãi vào thời Trung Cổ, ngành nấu bia mới thực sự bước sang một giai đoạn hoàn chỉnh hơn với hương vị, cấu trúc và khả năng bảo quản được định hình rõ ràng.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Tạo độ đắng để cân bằng vị ngọt</h3>
                        <p>Trong quá trình ngâm ủ, mạch nha giải phóng một lượng đường đáng kể, tạo nên nền vị ngọt đặc trưng cho bia. Nếu thiếu đi hoa bia, thành phẩm sau lên men sẽ mang cảm giác ngọt gắt, nặng và kém hài hòa. Khi hoa bia được đun sôi, các hợp chất Alpha Acid sẽ xảy ra quá trình đồng phân hóa, chuyển hóa thành những hợp chất tạo vị đắng. Chính vị đắng này đóng vai trò như một đối trọng, giúp trung hòa độ ngọt của mạch nha, từ đó hình thành nên cấu trúc vị cân bằng, dễ uống và để lại hậu vị khô ráo, sảng khoái.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Cung cấp hương vị và mùi thơm đa dạng</h3>
                        <p>Không dừng lại ở việc tạo đắng, hoa bia còn là “kho hương liệu tự nhiên” với hàng loạt tinh dầu nằm trong tuyến Lupulin. Những hợp chất như Myrcene, Linalool hay Geraniol khi được giải phóng đúng thời điểm sẽ tạo nên những lớp hương phong phú và sống động.</p>
                        <p className="mt-2">Tùy vào kỹ thuật sử dụng từ đun sôi để chiết xuất vị nền, khuấy xoáy để giữ lại hương tinh tế, cho đến dry-hopping nhằm tối đa hóa mùi thơm... mỗi mẻ bia có thể mang một cá tính riêng biệt. Người thưởng thức có thể dễ dàng cảm nhận những nốt hương trái cây như cam, chanh, chanh dây, xoài, đào; hoặc chuyển sang những tầng hương sâu hơn như nhựa thông, gỗ, đất ẩm hay thảo mộc cay nhẹ. Tất cả tạo nên chiều sâu và bản sắc đặc trưng cho từng dòng bia.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Kháng khuẩn tự nhiên và giữ bọt</h3>
                        <p>Một giá trị ít khi được chú ý nhưng lại vô cùng quan trọng của hoa bia chính là khả năng bảo vệ bia khỏi sự xâm nhập của vi khuẩn, đặc biệt là các vi khuẩn sinh axit lactic. Nhờ đặc tính kháng khuẩn tự nhiên này, bia có thể duy trì độ ổn định và kéo dài thời gian bảo quản mà không cần phụ thuộc quá nhiều vào các phương pháp xử lý khác.</p>
                        <p className="mt-2">Đồng thời, các hợp chất trong hoa bia còn tương tác với protein từ lúa mạch, giúp hình thành lớp bọt bia dày, mịn và bền. Lớp bọt không chỉ mang tính thẩm mỹ mà còn góp phần giữ lại hương thơm, nâng cao trải nghiệm khi thưởng thức.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Kết lại, hoa bia không đơn thuần là một nguyên liệu bổ sung mà chính là yếu tố định hình nên “cá tính” của bia từ vị giác, hương thơm cho đến độ ổn định và cảm quan tổng thể. Nhờ có hoa bia, mỗi ly bia đã trở thành một trải nghiệm tinh tế, nơi sự cân bằng và chiều sâu được thể hiện rõ ràng trong từng ngụm.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Phân loại các nhóm hoa bia phổ biến
                </h2>
                <p className="mb-6">
                    Dựa trên thành phần hóa học và vai trò trong từng công đoạn nấu bia, hoa bia thường được chia thành ba nhóm chính, mỗi nhóm mang một cá tính rất riêng:
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hoa bia tạo đắng (Bittering Hops)</h3>
                        <p>Đây là nhóm hoa bia có hàm lượng Alpha Acid cao, thường dao động từ 10% đến 18%. Khi được cho vào ngay từ đầu quá trình đun sôi, các hợp chất này sẽ được chuyển hóa thành iso-alpha acid quyết định vị đắng đặc trưng của bia.</p>
                        <p className="mt-2">Điểm thú vị là dù tạo ra độ đắng mạnh, nhóm hoa bia này lại khá “khiêm tốn” về hương thơm. Vị đắng mà chúng mang lại thường gọn gàng, dứt khoát và sạch, đóng vai trò như phần “khung xương” giúp cân bằng vị ngọt của malt.</p>
                        <p className="mt-2 text-[#8C7A60] italic">Một số giống tiêu biểu: Magnum, Warrior hay Columbus,... những cái tên quen thuộc trong nhiều dòng bia từ lager đến IPA.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hoa bia tạo hương (Aroma Hops)</h3>
                        <p>Trái ngược với nhóm tạo đắng, hoa bia tạo hương sở hữu hàm lượng Alpha Acid thấp hơn, chỉ khoảng 2% đến 6%, nhưng lại cực kỳ giàu tinh dầu thơm. Đây chính là yếu tố tạo nên “linh hồn” cho bia với những tầng hương đa dạng: từ cam quýt tươi mát, hoa cỏ nhẹ nhàng cho đến gia vị, thảo mộc.</p>
                        <p className="mt-2">Để giữ trọn vẹn mùi hương, thợ nấu thường thêm nhóm hoa bia này vào cuối quá trình đun hoặc trong giai đoạn ủ lạnh (dry hopping). Nhờ đó, tinh dầu không bị bay hơi bởi nhiệt độ cao và có thể thể hiện rõ nét nhất trong thành phẩm.</p>
                        <p className="mt-2 text-[#8C7A60] italic">Các giống tiêu biểu: Cascade, Saaz, Fuggles hay Hallertau là những đại diện kinh điển.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hoa bia đa dụng (Dual-Purpose Hops)</h3>
                        <p>Đây là nhóm hoa bia “toàn năng”, kết hợp hài hòa giữa hàm lượng Alpha Acid tương đối cao và hệ tinh dầu phong phú. Nhờ đó, chúng có thể đảm nhận cả hai vai trò: vừa tạo độ đắng, vừa đóng góp hương thơm rõ rệt.</p>
                        <p className="mt-2">Sự linh hoạt này giúp thợ nấu dễ dàng sáng tạo và tối ưu quy trình, đặc biệt trong các dòng bia hiện đại như IPA hay Pale Ale, nơi hương và vị cần hòa quyện chặt chẽ.</p>
                        <p className="mt-2 text-[#8C7A60] italic">Những cái tên nổi bật: Citra, Mosaic, Galaxy hay Centennial thường được ưa chuộng nhờ khả năng tạo ra những profile hương vị bùng nổ.</p>
                    </div>
                </div>

                <p className="mb-10">
                    Dù được phân chia thành ba nhóm rõ ràng, trên thực tế việc sử dụng hoa bia không hề cứng nhắc. Một mẻ bia ngon luôn là kết quả của sự phối hợp khéo léo giữa các loại hoa bia ở nhiều thời điểm khác nhau, nhằm tạo nên sự cân bằng giữa vị đắng, hương thơm và cảm nhận tổng thể.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Ứng dụng hoa bia cho từng phong cách bia thủ công
                </h2>
                <p className="mb-6">
                    Sự phong phú của thế giới bia thủ công không chỉ đến từ công thức hay kỹ thuật lên men, mà còn được định hình rõ nét bởi cách lựa chọn và sử dụng hoa bia. Mỗi phong cách bia là một “bản phối” riêng, trong đó hoa bia có thể đóng vai trò trung tâm hoặc lùi về phía sau để tôn vinh những thành phần khác.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Các dòng Pale Ale và India Pale Ale (IPA)</h3>
                        <p>Đây chính là “sân khấu chính” nơi hoa bia được khai thác tối đa cả về hương lẫn vị. Với các dòng Pale Ale, đặc biệt là American IPA hay New England IPA, hoa bia không chỉ tạo đắng mà còn trở thành linh hồn của bia.</p>
                        <p className="mt-2">Độ đắng trong IPA cũng rõ ràng hơn, nhưng được cân chỉnh khéo léo để không gắt mà vẫn giữ được cảm giác “bùng nổ” đặc trưng.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Các dòng Pilsner và Lager truyền thống</h3>
                        <p>Trái ngược với IPA, Pilsner và Lager hướng đến sự tinh gọn, sạch vị và dễ uống. Vì vậy, hoa bia trong những phong cách này không được phép lấn át mà phải đóng vai trò hỗ trợ tinh tế.</p>
                        <p className="mt-2">Chính sự tiết chế này giúp tôn lên vị ngọt giòn của mạch nha, tạo nên tổng thể cân bằng, mượt mà và đầy tính cổ điển.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Các dòng bia đen (Stout / Porter)</h3>
                        <p>Ở Stout hay Porter, điểm nhấn nằm ở chiều sâu hương vị đến từ mạch nha rang: cà phê, socola đen, caramel cháy. Trong bức tranh đó, hoa bia không còn là nhân vật chính mà trở thành “người giữ nhịp”.</p>
                        <p className="mt-2">Các giống hoa bia truyền thống của Anh như Fuggles hay East Kent Goldings được sử dụng để bổ sung một lớp đắng vừa đủ, giúp cân bằng vị ngọt và độ dày của bia.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Các dòng bia lúa mì (Wheat Beer / Belgian Witbier)</h3>
                        <p>Bia lúa mì lại mang một hướng tiếp cận hoàn toàn khác. Hương thơm chủ đạo đến từ men bia với các nốt chuối chín, đinh hương hoặc từ các nguyên liệu phụ trợ như vỏ cam, hạt mùi.</p>
                        <p className="mt-2">Vai trò của chúng chỉ dừng lại ở việc tạo một lớp đắng nhẹ, đủ để cân bằng và giữ cho bia không bị ngấy. Nhờ đó, tổng thể vẫn giữ được sự tươi mát, nhẹ nhàng và dễ tiếp cận.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Hiểu về hoa bia không đơn thuần là ghi nhớ thông số hay tên gọi, mà là cảm nhận cách từng giống hoa “hòa giọng” trong mỗi phong cách bia. Khi đặt đúng loại hoa bia vào đúng công thức, người thợ nấu không chỉ tạo ra một thức uống, mà đang kể một câu chuyện bằng hương vị.
                </p>
                <p className="mb-10">
                    Dù bạn đang bước những bước đầu trên hành trình nấu bia thủ công, hay chỉ đơn giản là người yêu thích khám phá, việc hiểu rõ vai trò của hoa bia sẽ giúp mỗi ly bia trên tay trở nên sống động và đáng thưởng thức hơn rất nhiều.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Địa chỉ quán bia thủ công tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Among the four fundamental ingredients structurally responsible for beer production (water, malt, yeast, and hops), hops are universally recognized as the most strategically defining element. Despite occupying an aggressively minor percentage of total batch volume, hops act as the decisive "master key" shaping brand identity, engineering profound sensory balance, and engaging the consumer palate.
                </p>
                <p className="mb-6">
                    For serious craft beer enthusiasts, investigating the global hierarchy of hops closely mirrors the sommelier’s study of complex grape varieties. Each hop strain carries highly individualized botanical DNA governing bittering thresholds and aromatic profiles, subsequently dictating the precise stylistic characteristics of individual craft deployments across the globe.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    The Integral Structural Role of Hops in Brewing
                </h2>
                <p className="mb-6">
                    Before hops secured their modern monopoly as beer's "aromatic soul," historical brewers extensively experimented with an array of decentralized roots, spices, and aggressive botanicals. Unsurprisingly, such erratic methodologies lacked volumetric stability; individual batches routinely produced drastically disparate flavor yields, virtually guaranteeing extreme commercial unreliability. Once hops were systematically weaponized spanning the Middle Ages, the brewing apparatus radically matured into a reliable operational science offering controllable flavor architectures and robust preservation mechanics.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Generating Bitterness to Mitigate Saccharine Profiles</h3>
                        <p>During the critical mashing interval, malt forcefully ejects an enormous volume of fermentable sugars, establishing an intensely cloying foundational sweetness. Absent hops, the remaining fermented product operates as a heavy, offensively sweet syrup suffering from structural imbalance. However, introducing hops into the thermal boiling cycle forces a radical chemical isomerization where resident Alpha Acids transmute into intensely potent bittering compounds. This cultivated bitterness functions as the primary counterweight neutralizing malt sugars, architecting a balanced, easily digestible structure that terminates in a clean, aggressively refreshing finish.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Supplying Intricate Flavor and Aromatic Diversity</h3>
                        <p>Vastly exceeding rudimentary bittering duties, hops effectively act as concentrated "botanical hard drives" carrying expansive essential oil profiles housed within Lupulin glands. Volatile compounds prominently featuring Myrcene, Linalool, or Geraniol orchestrate staggeringly complex and immediately vibrant sensory waves when correctly extracted.</p>
                        <p className="mt-2">Depending heavily on rigorous implementation methodologies—such as early thermal boiling for aggressive bittering, latent whirlpool additions to capture delicate nuances, or sophisticated dry-hopping tactics aimed entirely at aromatic maximization—each batch rapidly cultivates a radically solitary persona. Consumers systematically detect explosive tropical notes spanning orange, lemon, passion fruit, and mango; or alternatively, plunge into darker sensory trenches featuring dense pine resins, deep earthy soil, or dry herbal spikes. Collectively, these inputs synthesize staggering product depth and authentic batch identity.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Natural Antibacterial Defense and Foam Retention</h3>
                        <p>An exceedingly under-appreciated yet fundamentally critical asset intrinsic to hops remains their intense biological hostility toward invasive bacterial contamination, notably combating aggressive lactic acid-producing microbes. Thanks directly to such intense antibacterial properties, craft varieties effectively sustain long-term volumetric stability and drastically extend distribution lifespans natively without requiring intrusive, artificial chemical interventions.</p>
                        <p className="mt-2">Furthermore, highly active hop compounds organically interact alongside dense barley proteins, actively forging a structural matrix resulting in dense, durable, and visually immaculate head retention. This crucial foam layer far exceeds base aesthetics—it functions as a vital physical sealant aggressively locking in volatile aromatics while simultaneously softening the textural experience during consumption.</p>
                    </div>
                </div>

                <p className="mb-6">
                    In summary, hops absolutely transcend standard categorical boundaries defining supplementary ingredients; they relentlessly operate as the defining tactical elements engineering a beer’s entire sensory framework. Because of hops, a rudimentary fermented beverage accelerates into an elite, highly calibrated sensory masterclass accurately showcasing precision balance inside every pour.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Categorizing Prevailing Commercial Hop Fractions
                </h2>
                <p className="mb-6">
                    Relying stringently on chemical anatomy alongside intended manufacturing application, widespread hop variants systematically divide into three distinct, sharply delineated categories. Each demographic exerts a dramatically different structural outcome:
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Bittering Hops</h3>
                        <p>Defining this classification requires assessing a massive internal concentration of Alpha Acids, commonly plateauing between a staggering 10% to 18%. Executing these strains at the very onset of thermal boiling systematically forces maximum extraction, isolating the dominant iso-alpha acids directly dictating a beer's terminal bitterness profile.</p>
                        <p className="mt-2">Interestingly, despite providing devastatingly powerful bittering strikes, these hops inherently lack strong aromatic outputs. The resulting bitterness remains highly localized, surgical, and exceptionally clean—serving decisively as the foundational "skeletal structure" checking the malt's inherent sweetness.</p>
                        <p className="mt-2 text-[#8C7A60] italic">Aesthetic Exemplars: Magnum, Warrior, and Columbus—ubiquitous foundational blueprints deeply integrated across globally distributed lagers to heavy IPAs.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Aroma Hops</h3>
                        <p>Operating in direct opposition to bittering variants, aroma hops register decidedly meager Alpha Acid levels (rarely breaching 2% to 6%) while harboring incredibly dense, exceedingly valuable essential oil saturation. These variants unequivocally inject the "soul" of the beverage, supplying explosive, multi-faceted sensory notes ranging from crisp zesty citrus and bright spring florals to deeply aggressive spices.</p>
                        <p className="mt-2">To prevent heat degradation and successfully cage maximum aromatic value, head brewers deliberately deploy these volatile strains during the terminal minutes of boiling or decisively execute cold-infusion tactics (dry-hopping). Thus, the hyper-sensitive organic oils evade evaporation, maximizing sensory expression directly within the finished product.</p>
                        <p className="mt-2 text-[#8C7A60] italic">Aesthetic Exemplars: Cascade, Saaz, Fuggles, and Hallertau operate globally as the absolute gold standards orchestrating intense aromatics.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Dual-Purpose Hops</h3>
                        <p>Defining the definition of optimal manufacturing adaptability, "dual-purpose" varieties effortlessly balance significantly elevated Alpha Acid frameworks with remarkably dense essential oil yields. Subsequently, these hybrid strains successfully pull double duty: generating punishing bitter constraints while simultaneously detonating colossal aromatic payloads.</p>
                        <p className="mt-2">This exceptional dual-band flexibility actively gifts master brewers supreme architectural freedom to streamline internal procurement cycles, rendering these strains critically essential when fabricating modern Pale Ales or incredibly hoppy IPAs mandating rigorous flavor/aroma fusion.</p>
                        <p className="mt-2 text-[#8C7A60] italic">Aesthetic Exemplars: Citra, Mosaic, Galaxy, and Centennial stand completely unchallenged atop the commercial hierarchy for engineering sensory fireworks.</p>
                    </div>
                </div>

                <p className="mb-10">
                    While these three stringent classifications exist logically, practical manufacturing realities abhor rigid doctrine. Engineering an elite craft beer perpetually requires fluid, meticulously coordinated integration crossing multiple hop profiles across overlapping operational sectors, guaranteeing final structural synergy.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Hop Application Across Distinct Craft Styles
                </h2>
                <p className="mb-6">
                    The staggering stylistic variety saturating the craft beer vertical rarely originates linearly from altered fermentation dynamics; it relies massively upon how specific hop protocols are heavily utilized. Certain modalities demand hops command the operational forefront, while alternative styles force hops aggressively into supporting roles, deliberately spotlighting varying base ingredients.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Pale Ales and India Pale Ales (IPA)</h3>
                        <p>Undeniably acting as the central theater specifically designed for complete hop weaponization! Evaluating modern Pale Ales—especially heavily concentrated American IPAs or cloudy New England variants—reveals hops no longer act simply as bittering agents; they dominate the entire core profile.</p>
                        <p className="mt-2">Bitterness metrics routinely spike heavily, yet remain flawlessly checked to prevent abusive harshness while simultaneously maximizing the signature “detonation” consumers expect.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Traditional Pilsners and Lagers</h3>
                        <p>Flipping the IPA paradigm entirely, Pilsners and Lagers mandate supreme operational purity, minimalist finishing strokes, and hyper-digestibility. Consequently, hop profiles must never obscure the holistic delivery, functioning instead via carefully restrained, razor-thin support lines.</p>
                        <p className="mt-2">This draconian calibration explicitly highlights the crisp, intensely sweet crunch of the malt base, culminating in an impeccably balanced, famously smooth, undeniably classic footprint.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Dark Ales (Stouts / Porters)</h3>
                        <p>When executing Stout or Porter formulas, the dominant operational narrative pivots strictly to heavily roasted malts commanding profiles spanning black coffee, dark chocolate, and charred caramel. In this brutal, heavily roasted environment, hops surrender leading-actor status, acting instead as strict metronomes regulating tempo.</p>
                        <p className="mt-2">Traditional British varietals, specifically Fuggles or East Kent Goldings, inject a precisely measured degree of bitterness strictly to contain excessive sweetness and balance the resulting structural heaviness.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Wheat Beers (Including Belgian Witbiers)</h3>
                        <p>Wheat deployments introduce a radically disparate philosophical approach. The dominant sensory notes organically generate directly via yeast cultures outputting mature banana and clove, seamlessly augmented alongside adjunct additions heavily featuring orange peel and coriander grains.</p>
                        <p className="mt-2">Consequently, hop responsibilities brutally shrink to supplying a near-imperceptible bitterness just potent enough to offset potential cloying thickness, flawlessly defending the exceptionally light, vibrant, ultra-accessible nature of the wheat format.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Mastering hop utilization violently outpaces simple rote memorization involving chemical charts or alpha acid percentages; it demands a hyper-literate sensory connection analyzing how specific botanical notes actively harmonize within wildly distinct architectural molds. Through precise execution, elite brewers aren't merely producing intoxicating beverages; they actively architect highly dynamic flavor narratives.
                </p>
                <p className="mb-10">
                    Whether you are an aspiring retail architect organizing your initial B2B portfolio, or ultimately an impassioned craft zealot heavily investigating advanced taste mechanics, thoroughly deciphering explicit hop mechanics guarantees every single pour commands dramatically enhanced value.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Premier Craft Supply Operations in HCMC
                </h2>
                <p className="mb-4">
                    For commercial enterprises aggressively sourcing elite craft beer architecture operating near Tan Phu District, CREAT Craft Beer unequivocally solidifies itself as the paramount commercial resource. Deployed centrally at 93 Street 11, Tay Thanh Ward, CREAT engineers an astutely formulated B2B paradigm deliberately merging exceptional qualitative logistics heavily tuned for individuals dedicated to aggressively investigating peak craft implementation.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Corporate Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Operations HQ:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "vi-sao-can-phai-xay-malt-khi-nau-bia-thu-cong": {
        breadcrumbTitle: "Vì sao cần phải xay malt...",
        breadcrumbTitle_en: "Why You Must Mill Malt...",
        title: "Vì sao cần phải xay malt khi nấu bia thủ công?",
        title_en: "Why Do You Need to Mill Malt When Making Craft Beer?",
        date: "08 Tháng 4, 2026",
        category: "Kiến thức",
        category_en: "Knowledge",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/bia-thu-cong-len-men-nhu-the-nao2-8059.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Malt luôn được xem là “linh hồn” của bia vì gần như toàn bộ nền tảng của một mẻ bia đều bắt đầu từ đây. Thực chất, malt chính là hạt đại mạch đã được ủ cho nảy mầm và xử lý theo quy trình riêng để sẵn sàng cho việc nấu. Từ lượng đường dùng để lên men, màu sắc đậm hay nhạt cho đến những tầng hương như bánh mì, caramel hay rang nhẹ, tất cả đều hình thành từ nguyên liệu này. Chỉ cần thay đổi cách xử lý malt, thành phẩm đã có thể khác đi rõ rệt.
                </p>
                <p className="mb-6">
                    Chính vì vai trò quan trọng đó, ngay ở bước đầu tiên của quy trình nấu bia, người ta luôn đặt ra một câu hỏi rất cơ bản. Nếu hạt malt đã chứa sẵn tinh bột và enzyme cần thiết, tại sao không giữ nguyên mà lại phải xay ra trước khi nấu? Việc nghiền hạt không đơn thuần để dễ thao tác mà còn liên quan trực tiếp đến khả năng giải phóng đường và mức độ chiết xuất hương vị. Đây là bước mở đầu nhưng lại ảnh hưởng xuyên suốt đến hiệu quả của cả quá trình nấu bia phía sau.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Mục đích chính của việc xay Malt khi nấu bia
                </h2>
                <p className="mb-6">
                    Xay malt là bước chuẩn bị nguyên liệu trước khi nấu, với mục tiêu rõ ràng: làm cho tinh bột bên trong hạt có thể tiếp xúc với nước và enzyme. Nếu không xay, nước không thể thấm vào hạt, enzyme không thể hoạt động và quá trình tạo đường sẽ không diễn ra. Từ mục tiêu này, việc xay malt được triển khai theo từng yêu cầu cụ thể, mỗi yêu cầu đều ảnh hưởng trực tiếp đến hiệu quả của quá trình nấu bia phía sau.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Phá vỡ lớp vỏ để tiếp cận nội nhũ</h3>
                        <p>Hạt malt gồm hai phần chính: lớp vỏ bên ngoài và phần nội nhũ chứa tinh bột bên trong. Lớp vỏ khá cứng, có nhiệm vụ bảo vệ nên nước khó đi xuyên qua.</p>
                        <p className="mt-2">Khi xay, cần làm nứt lớp vỏ này để mở đường cho nước đi vào nội nhũ. Tuy nhiên, không nên nghiền quá nát vì lớp vỏ còn đóng vai trò như lớp lọc trong quá trình lọc bã sau này. Vì vậy, mục tiêu là vỡ vỏ nhưng vẫn giữ được cấu trúc tương đối.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Tăng diện tích tiếp xúc cho enzyme hoạt động</h3>
                        <p>Tinh bột trong nội nhũ không nằm thành khối lớn mà phân bố bên trong cấu trúc hạt. Nếu chỉ vỡ hạt thành miếng lớn, enzyme sẽ khó tiếp cận hết.</p>
                        <p className="mt-2">Khi xay đúng, nội nhũ được tách thành nhiều mảnh nhỏ, giúp tăng diện tích tiếp xúc giữa tinh bột với nước và enzyme. Nhờ đó, enzyme có thể chuyển hóa tinh bột thành đường nhanh hơn và đồng đều hơn, hạn chế tình trạng còn sót tinh bột chưa chuyển hóa.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Tối ưu hóa hiệu suất chiết xuất</h3>
                        <p>Tất cả những tác động từ việc xay malt cuối cùng đều thể hiện rõ ở lượng đường thu được sau quá trình nấu.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Xay quá thô:</strong> tinh bột không được giải phóng hết → hiệu suất thấp</li>
                            <li><strong>Xay quá mịn:</strong> dễ gây tắc lọc, ảnh hưởng đến quá trình lọc dịch đường</li>
                            <li><strong>Xay đúng mức:</strong> tinh bột được giải phóng tốt, dịch đường thu được nhiều và ổn định</li>
                        </ul>
                        <p className="mt-2">Khi kiểm soát tốt độ xay, người nấu có thể lấy được tối đa lượng đường từ nguyên liệu, giúp bia đạt đúng độ cồn và hương vị mong muốn.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Làm quá nhẹ tay thì chưa đủ để mở ra bên trong hạt, còn làm quá mạnh lại phá vỡ sự cân bằng cần thiết. Chính sự “vừa đủ” trong cách xay mới là yếu tố quyết định để mọi công đoạn phía sau có thể cho ra những giọt bia chất lượng nhất.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Tại sao không được xay malt thành bột mịn?
                </h2>
                <p className="mb-6">
                    Nghe qua thì khá hợp lý khi cho rằng malt được nghiền càng mịn thì tinh bột càng dễ tiếp xúc với nước và enzyme, từ đó quá trình đường hóa diễn ra nhanh hơn và lượng dịch đường thu được cũng cao hơn. Tuy nhiên, khi đi vào thực tế vận hành, cách nghĩ này lại không phù hợp vì nó bỏ qua một yếu tố rất quan trọng trong cấu trúc của hạt malt.
                </p>
                <p className="mb-6">
                    Bên trong hạt là phần nội nhũ chứa tinh bột cần được chuyển hóa, nhưng bao bọc bên ngoài lại là lớp vỏ trấu vốn một thành phần tưởng như không cần thiết nhưng lại giữ vai trò quyết định ở giai đoạn lọc. Khi được giữ tương đối nguyên vẹn, lớp vỏ này sẽ tạo thành một lớp nền thoáng, giúp dịch đường có thể chảy qua dễ dàng trong quá trình tách bã.
                </p>
<p className="mb-6">
                    Vấn đề bắt đầu xuất hiện khi malt bị nghiền quá mịn, bởi lúc này lớp vỏ trấu không còn giữ được hình dạng ban đầu mà bị phá vỡ thành những mảnh nhỏ, trộn lẫn với phần bột mịn của nội nhũ. Thay vì tạo ra một lớp lọc tự nhiên, hỗn hợp này lại khiến khối mash trở nên đặc và bí, các phần tử dễ kết dính với nhau, làm cản trở dòng chảy và dẫn đến hiện tượng tắc lọc. Khi dòng dịch không thể lưu thông ổn định, toàn bộ quá trình phía sau cũng bị ảnh hưởng, từ thời gian nấu cho đến hiệu suất thu hồi.
                </p>
                <p className="mb-6">
                    Không dừng lại ở khía cạnh kỹ thuật, việc nghiền quá mịn còn tác động trực tiếp đến chất lượng bia thành phẩm, bởi khi lớp vỏ trấu bị phá vỡ quá nhiều, các hợp chất như tannin dễ bị chiết xuất vào dịch đường hơn mức cần thiết, từ đó tạo ra vị chát và gắt, làm mất đi sự cân bằng vốn có của bia.
                </p>
                <p className="mb-6">
                    Ngược lại, nếu nghiền quá thô thì nội nhũ lại không được phá vỡ đủ, khiến enzyme khó tiếp cận tinh bột, quá trình đường hóa diễn ra kém hiệu quả và lượng đường thu được không đạt như mong muốn.
                </p>
                <p className="mb-10">
                    Chính vì vậy, mục tiêu khi xay malt không nằm ở việc nghiền càng mịn càng tốt, mà là tìm được điểm cân bằng hợp lý giúp cho phần nội nhũ được làm vỡ đủ để phục vụ quá trình chuyển hóa, trong khi lớp vỏ trấu vẫn giữ được cấu trúc cần thiết để đảm nhiệm vai trò lọc, giúp toàn bộ quá trình nấu diễn ra trơn tru và ổn định.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Xưởng nấu bia thủ công tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Malt functions as the undisputable "soul" of any craft batch, considering the vast majority of infrastructural foundational elements directly stem from it. Practically speaking, malt consists of highly controlled barley grains subjected to rigorous steeping and germination cycles, deliberately processed to optimize future brewing efficacy. Every critical parameter—ranging from fermentable sugar density and chromatic light/dark yields to dynamic flavor notes encompassing fresh bread, heavy caramel, or light roasting—is unilaterally engineered by this singular input. Fundamentally shifting the method of malt processing irrevocably alters the resulting liquid matrix.
                </p>
                <p className="mb-6">
                    Because of this colossal structural responsibility, an incredibly logical query emerges at the very genesis of the entire brewing operation. Given that the malt seed already natively possesses the requisite internal starches and active enzymes, why is mechanical milling fundamentally obligatory? Grinding the grain extends far beyond rudimentary handling ergonomics; it acts as the primary mechanical driver heavily dictating sugar release capacities and holistic flavor extraction ratios. While classified as merely the initial phase, this operational step aggressively influences the systemic efficiency of the subsequent procedures.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Core Objectives Governing Malt Milling Strategies
                </h2>
                <p className="mb-6">
                    Milling malt constitutes the primary preparation vector with an exceedingly singular objective: physically exposing locked starches directly to hydrating liquid flow and aggressively hyper-activating dormant enzymes. Bypassing the milling stage absolutely prevents liquid permeation, inherently paralyzing enzyme activity and entirely collapsing the saccharification (sugar creation) cycle. Guided directly by this biological reality, the milling procedure is executed via tight, highly specific parameters heavily governing the efficiency of downstream manufacturing processes.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Rupturing the Husk to Access the Endosperm</h3>
                        <p>Malt structures fundamentally comprise two primary zones: an external rigid husk heavily fortifying internal starch reserves located directly inside the endosperm. This hardened husk operates entirely as an armored blockade, vehemently restricting fluid penetration.</p>
                        <p className="mt-2">During milling operations, it remains absolutely strictly mandatory to forcefully crack this husk to generate fluid ingress routes into the endosperm. Crucially, absolute pulverization must be stringently avoided because intact husk fragments act precisely as an essential natural filtration barrier during later heavy lautering phases. Consequently, the overarching objective relentlessly demands structural rupture while stubbornly preserving general husk integrity.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Maximizing Surface Area for Rapid Enzymatic Synthesis</h3>
                        <p>Starches nestled within the endosperm do not exist as unified monolithic blocks; they are deeply distributed directly within the seed’s internal matrix. Generating excessively large fragments aggressively limits an enzyme's ability to thoroughly locate and engage native starch reserves.</p>
                        <p className="mt-2">Executing exact milling tolerances dynamically splinters the endosperm into millions of highly exposed microscopic fragments, maximizing total surface area and enabling aggressive contact friction between native starch, external water, and enzyme agents. As a result, critical enzymes rapidly and uniformly transform starches into highly fermentable sugars, decisively eliminating wasteful unfermented starch remnants.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Optimizing Gross Extraction Efficiencies</h3>
                        <p>Every single mechanical action applied during milling operations unequivocally impacts the absolute total volume of usable sugar successfully salvaged post-mashing.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Excessively Coarse Yield:</strong> Starch reserves remain heavily locked → brutally low recovery yields.</li>
                            <li><strong>Excessively Fine Pulverization:</strong> Highly susceptible to "stuck mash" blockages, profoundly crippling the liquid drainage run-off phases.</li>
                            <li><strong>Precision Calibration:</strong> Starches fully expose without blockage, forcefully guaranteeing heavy, reliable volumetric sugar surges.</li>
                        </ul>
                        <p className="mt-2">When implementing flawless mill gap calibration, operators flawlessly strip-mine the absolute maximum sugar volume natively available within raw stock, systematically ensuring the final beer effortlessly strikes exact, aggressive ABV and sensory targets.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Handling it with insufficient force fails entirely to crack the seed's interior defense, whereas applying exceedingly violent force hopelessly detonates infrastructural requirements. Truly mastering that incredibly narrow "optimal window" regarding milling calibration consistently acts as the ultimate determining factor enabling all subsequent phases to reliably yield unparalleled craft beer supremacy.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Why is Pulverizing Malt into Fine Powder Strictly Forbidden?
                </h2>
                <p className="mb-6">
                    On a superficial level, an incredibly strong argument exists advocating for absolute pulverization: logic dictates that rendering malt into hyper-fine dust radically accelerates liquid/starch bonding, vastly increasing enzymatic turnover while massively spiking sugar recovery yields. Unfortunately, when deployed into live manufacturing environments, this theoretical model faces immediate, catastrophic collapse because it entirely ignores a critically indispensable structural component intrinsic to the malt kernel.
                </p>
                <p className="mb-6">
                    While the central endosperm heavily contains vital fermentable starches, it is fiercely wrapped within an outer husk. Initially dismissed as trivial organic debris, this specific husk executes a profound operational mandate during the Lautering (drainage) stage. When maintained largely whole, these husks effectively pile upon one another forming a densely ventilated, naturally porous filter bed, effortlessly allowing viscous sugar liquids to cascade rapidly through the thick grain sludge.
                </p>
<p className="mb-6">
                    Catastrophic system failure predictably occurs when malt is pulverized into incredibly fine dust. This action permanently incinerates the husk’s physical integrity, reducing it to microscopic shreds hopelessly tangled within an immensely thick powder sludge. Stripped of a functional internal filtration bed, the entire dense mash quickly solidifies into an impenetrable concrete block. Fine particles violently fuse together, instantly halting liquid flow, prompting severe systemic operational gridlock commonly termed a "stuck mash." Given blocked liquid flow, the entirety of subsequent workflows instantly derail, aggressively penalizing schedule times and heavily suppressing final solvent yields.
                </p>
                <p className="mb-6">
                    Beyond generating disastrous technical blockages, hyper-pulverization intrinsically degrades final product aesthetics. Decimating the outer husk forces massive uncontrolled leakage of latent botanical tannins directly into the sweet substrate. This directly injects aggressive, harshly astringent flavors violently destroying the meticulously calculated sensory balance fundamental to elite craft beer.
                </p>
                <p className="mb-6">
                    Conversely, heavily under-milling severely negates endosperm fracturing, aggressively limiting the enzymes' access routes into protected starches. This directly results in extraordinarily limp saccharification efficiency, generating heavily anemic sugar extraction profiles falling completely below established operational baselines.
                </p>
                <p className="mb-10">
                    Consequently, elite malt milling emphatically rejects raw pulverization. True mastery heavily relies on identifying profound mechanical equilibrium ensuring complete internal endosperm fragmentation (to turbocharge sugar metabolization) while violently defending the external husk structure (fortifying essential drainage architectures), systematically guaranteeing subsequent procedures flow seamlessly without interruption.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Wholesale Craft Logistics in Ho Chi Minh City
                </h2>
                <p className="mb-4">
                    If actively trying to procure a comprehensively refined craft beer logistics solution localized primarily in the Tan Phu vicinity, CREAT Craft Beer decisively operates as an unconditionally reliable cornerstone entity. Solidly garrisoned at 93 Street 11, Tay Thanh Ward, CREAT successfully integrates highly intimate tasting dynamics aligned alongside radically innovative formulation structures, optimally catering toward B2B constituents searching for rigorous consistency without forsaking top-tier, genuine flavor architecture.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Commercial Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Ops Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Central Hub:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "gia-bia-thu-cong-nhap-si-cho-nha-hang": {
        breadcrumbTitle: "Giá bia thủ công nhập sỉ...",
        breadcrumbTitle_en: "Wholesale Craft Beer Pricing...",
        title: "Giá bia thủ công nhập sỉ cho nhà hàng",
        title_en: "Wholesale Craft Beer Pricing for Restaurants",
        date: "06 Tháng 4, 2026",
        category: "Kinh doanh",
        category_en: "Business",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/creat-craft-13-2295.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Bia thủ công hay craft beer có thể hiểu đơn giản là bia được nấu theo mẻ nhỏ, tập trung vào hương vị thay vì sản xuất đại trà như bia công nghiệp. Nhờ vậy, mỗi loại bia thường có mùi và vị rõ ràng hơn, có thể là đậm, thơm trái cây, đắng rõ hoặc nhẹ dễ uống tùy dòng. Tại TP.HCM, loại bia này ngày càng phổ biến vì khách trẻ muốn tìm cảm giác mới lạ, khách nước ngoài thì đã quen sẵn với dòng sản phẩm này, còn các nhà hàng và quán bar cũng cần thêm lựa chọn để làm mới menu thay vì chỉ xoay quanh những cái tên quen thuộc như Heineken hay Tiger,...
                </p>
                <p className="mb-6">
                    Đối với quán bar hay nhà hàng, việc nhập sỉ bia thủ công không chỉ đơn giản là thêm một món đồ uống. Thực tế cho thấy giá bán của craft beer thường tốt hơn nên biên lợi nhuận cũng cao hơn. Khi có mặt trong menu, nó giúp quán trông khác biệt hơn, từ đó dễ thu hút nhóm khách thích trải nghiệm hoặc sẵn sàng chi tiêu. Về lâu dài, đây cũng là cách để xây dựng hình ảnh quán theo hướng chất lượng và có gu rõ ràng hơn, thay vì chỉ là một nơi uống bia thông thường.
                </p>
<h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Bảng giá cung cấp bia thủ công giá sỉ cho nhà hàng
                </h2>
                <p className="mb-6">
                    Tại Creat Craft, mỗi dòng bia không chỉ được phát triển theo một phong cách riêng mà còn được cân chỉnh kỹ lưỡng giữa độ cồn (ABV), độ đắng (IBU) và cấu trúc hương vị. Nhờ đó, danh mục sản phẩm luôn đủ rộng để đáp ứng nhiều nhóm khách hàng khác nhau từ người mới làm quen đến những thực khách đã có gu thưởng thức rõ ràng.
                </p>
                <p className="mb-6">
                    Dưới đây là các dòng bia thủ công tiêu biểu hiện đang cung cấp sỉ cho nhà hàng:
                </p>

                <div className="overflow-x-auto my-8">
                    <table className="w-full text-left border-collapse shadow-sm">
                        <thead>
                            <tr className="bg-[#1C1A14] text-[#C8963E] border-b border-[#C8963E]">
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">Tên bia</th>
                                <th className="p-4 font-bold border-r border-[#3A3324]">Phong cách & Hương vị</th>
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">ABV</th>
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">IBU</th>
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">Dung tích</th>
                                <th className="p-4 font-bold whitespace-nowrap">Giá sỉ</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#2C2416] bg-white">
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Pilsner Fruity</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Bia vàng nhẹ với nền vị thanh mát, nổi bật hương chanh dây tự nhiên, vị ngọt dịu xen chút chua nhẹ, dễ uống và tạo cảm giác sảng khoái ngay từ ngụm đầu</td>
                                <td className="p-4 border-r border-gray-200">5%</td>
                                <td className="p-4 border-r border-gray-200">26</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Liên hệ</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">IPA</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Bia đậm vị với lớp hương hoa bia rõ nét, kết hợp mùi cam và quýt, vị đắng cao nhưng cân bằng, hậu vị kéo dài và có chiều sâu</td>
                                <td className="p-4 border-r border-gray-200">6.8%</td>
                                <td className="p-4 border-r border-gray-200">40</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Liên hệ</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Midnight Stout</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Bia đen phong cách cổ điển, hương cà phê rang và sô cô la đậm, vị đắng mạnh đi kèm hậu ngọt nhẹ, tạo cảm giác tròn vị và dày</td>
                                <td className="p-4 border-r border-gray-200">6.3%</td>
                                <td className="p-4 border-r border-gray-200">36</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Liên hệ</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Wheat Ale</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Bia lúa mì với hương ngũ cốc tự nhiên, vị êm nhẹ, dễ tiếp cận, hậu đắng thoáng qua, phù hợp uống lâu và kết hợp món ăn</td>
                                <td className="p-4 border-r border-gray-200">6%</td>
                                <td className="p-4 border-r border-gray-200">28</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Liên hệ</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Matcha Ale</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Bia sáng tạo với hương trà xanh matcha rõ rệt, vị thanh nhẹ, hơi ngọt và mượt, mang lại cảm giác mới lạ nhưng vẫn dễ uống</td>
                                <td className="p-4 border-r border-gray-200">5%</td>
                                <td className="p-4 border-r border-gray-200">30</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Liên hệ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-6">
                    Mỗi dòng bia đều mang một hướng tiếp cận riêng về trải nghiệm: có loại thiên về sự dễ uống, có loại nhấn mạnh chiều sâu hương vị và cũng có những lựa chọn mang tính sáng tạo để tạo điểm nhấn cho menu. Điều này giúp nhà hàng linh hoạt hơn trong việc xây dựng danh mục đồ uống, phù hợp với nhiều tệp khách hàng và phong cách phục vụ khác nhau.
                </p>
                <p className="mb-6">
                    Bên cạnh các sản phẩm trên, Creat Craft vẫn còn rất nhiều dòng bia khác đang được phát triển và cung cấp theo từng giai đoạn. Để được tư vấn danh mục phù hợp với mô hình kinh doanh, cũng như nhận báo giá chi tiết theo số lượng và chính sách phân phối, vui lòng liên hệ trực tiếp để được hỗ trợ nhanh chóng.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Đơn vị cung cấp bia thủ công giá sỉ cho nhà hàng tại TP.HCM
                </h2>
                <p className="mb-6">
                    Khi nhu cầu sử dụng bia thủ công trong nhà hàng và quán bar tại TP.HCM ngày càng tăng, việc tìm được một đơn vị cung cấp ổn định và phù hợp với tệp khách của quán trở thành yếu tố khá quan trọng. Không chỉ cần nguồn bia đa dạng, nhà hàng còn cần sản phẩm có chất lượng đồng đều giữa các lần nhập, giá hợp lý để đảm bảo lợi nhuận và quan trọng hơn là phải dễ bán trong thực tế.
                </p>
                <p className="mb-6">
                    Trong số các đơn vị đang hoạt động trên thị trường, Creat Craft Beer là cái tên tập trung rõ vào mảng cung cấp bia thủ công giá sỉ cho nhà hàng và quán bar. Bia tại đây được sản xuất theo từng dòng ổn định, giữ được hương vị nhất quán, giúp quán yên tâm xây dựng menu lâu dài mà không bị thay đổi chất lượng qua từng mẻ.
                </p>
<p className="mb-6">
                    Danh mục sản phẩm của CREAT cũng rất đa dạng, bao gồm cả những dòng dễ uống dành cho khách phổ thông lẫn các dòng đậm vị hơn cho nhóm khách đã quen với craft beer. Nhờ vậy, nhà hàng có thể linh hoạt lựa chọn để phục vụ nhiều tệp khách khác nhau, thay vì bị giới hạn trong một vài kiểu bia quen thuộc. Bia cũng được cung cấp dưới dạng keg và chai, phù hợp với nhiều mô hình vận hành từ nhỏ đến lớn.
                </p>
                <p className="mb-6">
                    Không chỉ dừng lại ở việc cung cấp sản phẩm, CREAT còn hỗ trợ tư vấn lựa chọn dòng bia phù hợp với phong cách quán, mức giá bán và hành vi khách hàng. Điều này giúp menu đồ uống trở nên rõ ràng, dễ tiếp cận hơn với khách và hạn chế tình trạng nhập bia nhưng khó bán.
                </p>
                <p className="mb-6">
                    Ngoài ra, CREAT còn có không gian trải nghiệm tại khu vực Tân Phú, nơi khách hàng có thể trực tiếp thử bia trước khi nhập. Việc được trải nghiệm thực tế giúp nhà hàng chọn đúng sản phẩm phù hợp, đồng thời hiểu rõ hơn về hương vị trước khi đưa vào menu phục vụ khách.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Vì sao nên chọn Creat Craft làm đơn vị cung cấp bia thủ công?
                </h2>
                <p className="mb-6">
                    Trong kinh doanh nhà hàng, việc lựa chọn đơn vị cung cấp bia thủ công không đơn thuần là tìm một nguồn hàng, mà là tìm một đối tác có thể đồng hành lâu dài trong việc xây dựng trải nghiệm đồ uống. Một danh mục bia phù hợp, chất lượng ổn định và cách hỗ trợ triển khai thực tế sẽ giúp nhà hàng vận hành trơn tru hơn, đồng thời tạo được dấu ấn riêng với khách hàng.
                </p>
<p className="mb-6">
                    Đó cũng là cách Creat Craft định vị vai trò của mình không chỉ cung cấp sản phẩm, mà mang đến giải pháp phù hợp với từng mô hình kinh doanh.
                </p>

                <div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Cung cấp bia thủ công giá cạnh tranh</h3>
                        <p>Mức giá tại Creat Craft được xây dựng dựa trên thực tế thị trường và nhu cầu kinh doanh của nhà hàng, đảm bảo vừa đủ tốt để cạnh tranh, vừa đủ linh hoạt để nhà hàng có thể định giá bán theo nhiều phân khúc khách khác nhau. Điều này giúp bia thủ công không bị “kén khách” mà vẫn giữ được giá trị trong menu.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Chính sách giá theo số lượng linh hoạt</h3>
                        <p>Creat Craft áp dụng cơ chế giá theo sản lượng, nghĩa là khi nhà hàng nhập ở mức cao hơn, chi phí trên mỗi chai sẽ được tối ưu rõ rệt. Điều này đặc biệt phù hợp với các mô hình đang tăng trưởng, giúp cải thiện biên lợi nhuận theo thời gian.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Danh mục sản phẩm đa dạng</h3>
                        <p>Creat Craft phát triển các dòng bia theo từng nhóm trải nghiệm cụ thể, từ nhẹ nhàng, dễ uống đến đậm vị, cá tính rõ nét. Nhờ đó, nhà hàng có thể nhanh chóng xây dựng một menu đồ uống cân bằng, phù hợp với nhiều tệp khách khác nhau mà không cần thử nghiệm quá nhiều hay gặp rủi ro khi lựa chọn sản phẩm.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Chất lượng ổn định, hương vị nhất quán</h3>
                        <p>Mỗi mẻ bia đều được kiểm soát chặt chẽ từ quá trình ủ đến đóng chai, đảm bảo sự đồng đều về hương vị giữa các lô sản xuất. Điều này giúp nhà hàng duy trì trải nghiệm ổn định cho khách hàng, tránh tình trạng mỗi lần uống lại có cảm nhận khác nhau.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Hỗ trợ tư vấn phù hợp với mô hình kinh doanh</h3>
                        <p>Không chỉ cung cấp sản phẩm, Creat Craft còn đồng hành trong việc tư vấn lựa chọn dòng bia phù hợp với phong cách nhà hàng, tệp khách mục tiêu và cách xây dựng menu đồ uống. Nhờ đó, việc triển khai trở nên dễ dàng và có định hướng rõ ràng hơn.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Định hướng hợp tác lâu dài</h3>
                        <p>Với khả năng cung cấp theo nhiều mức số lượng khác nhau, nhà hàng có thể chủ động nhập hàng theo nhu cầu thực tế, hạn chế tồn kho nhưng vẫn đảm bảo luôn có sản phẩm sẵn sàng phục vụ khách. Creat Craft không chỉ dừng lại ở việc bán bia mà hướng đến trở thành đối tác đồng hành, hỗ trợ nhà hàng xây dựng và phát triển mảng đồ uống một cách ổn định lâu dài.</p>
                    </div>
                </div>

                <p className="mb-10">
                    Khi mọi yếu tố từ sản phẩm đến cách triển khai đều được chuẩn bị sẵn, nhà hàng không chỉ tiết kiệm thời gian vận hành mà còn có nền tảng vững chắc để phát triển menu đồ uống một cách bài bản và hiệu quả hơn. Đây cũng chính là giá trị mà Creat Craft hướng đến trong mỗi sự hợp tác.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Craft beer is fundamentally defined by small-batch, artisanal manufacturing focused intensely on flavor complexity over mass-market industrial homogeneity. Consequently, every specific style possesses aggressively distinct sensory characteristics—ranging from dense heaviness and bright tropical fruits to profound bitterness or ultra-light, crisp finishes. Across HCMC, consumer adoption is accelerating massively: young domestic demographics constantly seek novel flavor experiences, international expats expect familiar craft availability, and premium restaurants/bars inherently require elite menu diversification operating far beyond ubiquitous corporate labels like Heineken or Tiger.
                </p>
                <p className="mb-6">
                    For commercial restaurants and specialized bars, integrating wholesale craft beer heavily transcends safely adding another standard beverage option. Operational data consistently proves that craft beer commands significantly higher retail price points, directly generating vastly superior profit margins. Additionally, featuring a curated craft portfolio instantly elevates the establishment's aesthetic, effortlessly attracting demographics highly willing to spend heavily on premium sensory experiences. Long-term, this functions as a critical infrastructural tactic to definitively establish a highly cultured, quality-driven brand identity.
                </p>
<h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Standardized Commercial B2B Price Matrix
                </h2>
                <p className="mb-6">
                    At Creat Craft, every distinct product line is rigorously engineered to represent a hyper-specific styling, obsessively balancing ABV (Alcohol By Volume), IBU (International Bitterness Units), and core architectural flavor profiles. Consequently, our active distribution portfolio remains aggressively comprehensive, flawlessly accommodating deeply varying consumer demographics—from first-time evaluators to highly experienced craft zealots.
                </p>
                <p className="mb-6">
                    Below outlines our flagship craft deployments currently sustaining aggressive wholesale distribution for commercial restaurant partners:
                </p>

                <div className="overflow-x-auto my-8">
                    <table className="w-full text-left border-collapse shadow-sm">
                        <thead>
                            <tr className="bg-[#1C1A14] text-[#C8963E] border-b border-[#C8963E]">
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">Product Name</th>
                                <th className="p-4 font-bold border-r border-[#3A3324]">Sensory Profile Overview</th>
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">ABV</th>
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">IBU</th>
                                <th className="p-4 font-bold border-r border-[#3A3324] whitespace-nowrap">Volume</th>
                                <th className="p-4 font-bold whitespace-nowrap">Wholesale Price</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#2C2416] bg-white">
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Pilsner Fruity</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Crisp blond foundation prominently featuring vibrant natural passion fruit, delivering subtle sweetness cut by sharp acidity. Exceptionally refreshing baseline accessible instantly from the first pour.</td>
                                <td className="p-4 border-r border-gray-200">5%</td>
                                <td className="p-4 border-r border-gray-200">26</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Contact Us</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">IPA</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Aggressively deep profile driven by powerful hop concentrations, merging dense orange and citrus. Prominently bitter yet structurally flawless, leaving an intensely long, resonant finish.</td>
                                <td className="p-4 border-r border-gray-200">6.8%</td>
                                <td className="p-4 border-r border-gray-200">40</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Contact Us</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Midnight Stout</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Traditional dark ale showcasing massive roasted coffee and dense dark chocolate. High initial bitterness heavily countered by dark sweetness, establishing absolute full-bodied thickness.</td>
                                <td className="p-4 border-r border-gray-200">6.3%</td>
                                <td className="p-4 border-r border-gray-200">36</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Contact Us</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Wheat Ale</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Soft wheat foundation radiating natural grain aromatics. Exceptionally smooth, highly accessible profile leaving minimal fleeting bitterness. Ideal for session consumption and culinary pairing.</td>
                                <td className="p-4 border-r border-gray-200">6%</td>
                                <td className="p-4 border-r border-gray-200">28</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Contact Us</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                                <td className="p-4 font-bold text-[#1C1A14] border-r border-gray-200">Matcha Ale</td>
                                <td className="p-4 border-r border-gray-200 text-sm">Highly innovative matrix defined unconditionally by intense Japanese matcha aromas. Light, slightly sweet, and fiercely smooth, generating profound novelty while remaining dangerously drinkable.</td>
                                <td className="p-4 border-r border-gray-200">5%</td>
                                <td className="p-4 border-r border-gray-200">30</td>
                                <td className="p-4 border-r border-gray-200">330ml</td>
                                <td className="p-4 font-bold text-[#C8963E] whitespace-nowrap">Contact Us</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-6">
                    Every product fundamentally targets a deeply specific sensory experience vector: certain configurations aggressively prioritize raw accessibility, while others relentlessly focus on profound flavor depth or intense mechanical creativity to act as critical menu focal points. This dynamic structure empowers restaurants to confidently build vast beverage portfolios perfectly synchronized with myriad demographics and varying operational service styles.
                </p>
                <p className="mb-6">
                    Beyond these flagship staples, Creat Craft continuously prototypes and systematically releases numerous hyper-experimental micro-batches directly responding to varied operational phases. To secure explicit B2B consulting regarding optimal portfolio integration, alongside specific tier-based pricing structures factoring in dedicated distribution volume, please initiate immediate contact for rapid administrative facilitation.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    The Premier Commercial Wholesale Authority in HCMC
                </h2>
                <p className="mb-6">
                    As consumer demand drastically pivot towards bespoke craft distributions across top-tier restaurants and bars directly within HCMC, securing a highly stabilized logistics partner perfectly mirroring individual client demographics becomes overwhelmingly critical. Beyond merely requiring expansive product variety, commercial entities strictly mandate uncompromising batch-to-batch consistency, viable wholesale margins capable of defending corporate profitability, and absolute retail frictionlessness ensuring products move.
                </p>
                <p className="mb-6">
                    Against the volatile market landscape, Creat Craft Beer consistently emerges as the definitive logistical anchor, radically committed to wholesale B2B distribution scaling. Our output remains aggressively regimented within established parameters, flawlessly guaranteeing unwavering taste parity, thus enabling restaurant managers to construct long-term aesthetic menus completely immune to batch-variance instability.
                </p>
<p className="mb-6">
                    Our dynamic product portfolio encompasses all operational sectors, housing everything from highly accessible mainstream hybrids to formidable, hyper-concentrated formulas tailored for advanced connoisseurs. Consequently, operational clients retain immense flexibility to precisely target diverse demographics rather than suffering constraints enforced by typical monotonous lagers. Distribution occurs across standard keg and bottled configurations heavily optimized for both micro-establishments and massive, multi-tiered operations.
                </p>
                <p className="mb-6">
                    Vastly expanding beyond rudimentary supply logistics, CREAT effectively supplies elite operational consulting, actively advising clients regarding product selection explicitly calibrated to their aesthetic motif, target demographic spend thresholds, and raw consumption metrics. This prevents critical portfolio mismatches, rendering beverage programs highly decipherable to end-users and completely neutralizing the operational risk of “dead inventory.”
                </p>
                <p className="mb-6">
                    Additionally, CREAT proactively operates a dedicated tasting environment located in Tan Phu, permitting prospective commercial clients rigorous physical evaluation prior to execution. Comprehensive onsite testing directly ensures clients identify perfect alignments while fully understanding the structural nature of the flavor matrix prior to committing menu real estate.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Why Strategically Select Creat Craft for B2B Supply?
                </h2>
                <p className="mb-6">
                    In high-stakes hospitality mechanics, selecting a dedicated craft supplier utterly exceeds finding basic product availability; it dictates successfully identifying a robust logistical ally capable of ensuring long-term systemic stability regarding the overall beverage experience. Flawlessly integrating the correct brand portfolio actively streamlines floor operations while establishing unshakeable, unique prestige among customers.
                </p>
<p className="mb-6">
                    This fundamental ideology heavily grounds Creat Craft's entire corporate mission: we refuse to merely drop inventory, instead prioritizing the implementation of highly engineered infrastructural solutions tailor-made for each discrete operational dynamic.
                </p>

                <div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Aggressive Wholesale Pricing Competitiveness</h3>
                        <p>Rates established by Creat Craft heavily analyze live market metrics intertwined with specific commercial requirements, ensuring pricing structures are fiercely matched to stimulate competitive viability while remaining elastic enough allowing diverse retail marking across disparate customer classes. Craft beer intrinsically remains a high-value asset inside any menu architecture.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Scalable Tier-Based Volume Discounts</h3>
                        <p>We deploy dynamic matrix pricing heavily reliant upon absolute output targets. Specifically, as an establishment accelerates wholesale procurement, per-unit operational costs dramatically collapse. This aggressively supports heavily transitioning models, mathematically turbocharging profit capacities alongside sustained volumetric growth.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Highly Diversified Sensory Portfolio</h3>
                        <p>Creat Craft continuously fabricates lines explicitly designed around specific structural parameters—ranging from crisp, high-volume sessions to incredibly dense, profoundly aggressive flavor bombs. Thus, hospitality managers execute perfectly balanced, highly strategic menus appealing deeply across varied consumer behaviors devoid of exhaustive testing cycles or severe inventory risk.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Absolute Qualitative Consistency</h3>
                        <p>Every isolated batch faces draconian macro-audits spanning the entirety of thermal incubation into final bottling to secure exact replication regarding aromatic profiles. This enables establishments to confidently serve an immovable benchmark experience, decisively eliminating sporadic alterations in repeat customer interactions.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Dedicated Strategic Consulting</h3>
                        <p>Going vastly beyond baseline delivery protocols, Creat Craft partners closely to analyze macro-theme mechanics natively aligned alongside specific operating styles. We proactively map out targeted menu integrations preventing operational chaos while rendering B2B interactions highly transparent and precisely directed.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">• Focus on Strategic Longevity</h3>
                        <p>Empowered by aggressive capabilities effectively operating at numerous capacity limits, partners execute proactive logistical orders driven flawlessly by live demand schedules, inherently starving inventory decay while absolutely protecting on-demand fluid availability. Creat Craft aggressively rejects isolated sales to fundamentally position itself as an integrated cornerstone violently dedicated to long-term beverage dominance.</p>
                    </div>
                </div>

                <p className="mb-10">
                    When the foundational product natively harmonizes entirely with precision logistical deployment, commercial partners effortlessly eradicate mechanical friction while securing a profoundly fortified baseline to drastically escalate their beverage divisions effectively. This exact mechanism identifies the core value explicitly delivered within every Creat Craft union.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Corporate Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Operations HQ:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "quy-trinh-nau-bia-thu-cong-dien-ra-nhu-the-nao": {
        breadcrumbTitle: "Quy trình nấu bia thủ công...",
        breadcrumbTitle_en: "How the Process Works...",
        title: "Quy trình nấu bia thủ công diễn ra như thế nào?",
        title_en: "How the Craft Beer Brewing Process Works?",
        date: "04 Tháng 4, 2026",
        category: "Kiến thức",
        category_en: "Knowledge",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/creat-craft-12-5093.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Bia thủ công được sản xuất tại các xưởng nấu bia độc lập với sự chú trọng vào nguyên liệu, kỹ thuật và độ tỉ mỉ trong từng công đoạn nhằm tạo ra chất lượng ổn định và hương vị rõ nét. Thay vì hướng đến sản xuất đại trà hay sử dụng phụ gia giá rẻ, dòng bia này tập trung vào chiều sâu trải nghiệm, giúp người uống cảm nhận được sự đa dạng, tinh tế và cá tính riêng trong từng loại bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Bia thủ công được nấu bằng nguyên liệu gì?
                </h2>
                <p className="mb-6">
                    Khi nhắc đến bia thủ công, người ta thường nghĩ ngay đến sự khác biệt trong hương vị, phong cách hay câu chuyện phía sau mỗi dòng bia. Thực tế, nền tảng của bia thủ công vẫn được xây dựng từ bốn thành phần quen thuộc gồm lúa mạch, hoa bia, men bia và nước, nhưng điểm tạo nên dấu ấn lại nằm ở cách người nấu lựa chọn, xử lý và kết hợp các nguyên liệu ấy.
                </p>
                <p className="mb-6">
                    Không bị ràng buộc bởi những quy chuẩn khắt khe như Bộ luật Reinheitsgebot, bia thủ công mở ra một không gian sáng tạo rộng rãi hơn với mỗi công thức đều có thể được điều chỉnh linh hoạt để tạo nên những trải nghiệm hương vị riêng biệt. Chính sự “mở” này đã khiến bia thủ công không chỉ dừng lại ở một thức uống, mà còn trở thành cách để người nấu thể hiện cá tính và gu thẩm mỹ của mình qua từng mẻ bia.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Lúa mạch (Malt)</h3>
                        <p>Malt đóng vai trò là nền tảng của bia, cung cấp nguồn đường và dưỡng chất cần thiết cho quá trình lên men. Sau khi được cho nảy mầm, lúa mạch sẽ trải qua công đoạn sấy và rang với nhiều mức độ khác nhau, từ đó tạo nên màu sắc cũng như hương vị đặc trưng cho từng loại bia. Những loại malt sáng thường mang lại cảm giác nhẹ nhàng, thanh thoát, trong khi malt rang đậm lại đem đến các nốt hương caramel, chocolate hoặc cà phê rõ rệt, giúp người nấu dễ dàng điều chỉnh cấu trúc vị theo mong muốn.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hoa bia (Hops)</h3>
                        <p>Hoa bia là yếu tố tạo nên vị đắng đặc trưng, đồng thời góp phần hình thành tầng hương thơm đa dạng cho bia, từ cam chanh tươi mát, hoa cỏ nhẹ nhàng cho đến các nốt trái cây nhiệt đới hoặc nhựa thông. Không chỉ dừng lại ở hương vị, hoa bia còn giúp ổn định bia, tăng độ bền của bọt và hỗ trợ bảo quản tự nhiên. Với hàng trăm giống hoa bia khác nhau, người nấu bia có thể linh hoạt phối hợp để tạo nên những tổ hợp hương vị phong phú và mang đậm dấu ấn riêng.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Men bia (Yeast)</h3>
                        <p>Men bia là yếu tố quyết định quá trình lên men, chuyển hóa đường thành cồn và khí CO₂, đồng thời góp phần định hình hương vị đặc trưng của từng dòng bia. Hai nhóm men phổ biến là ale và lager, mỗi loại lại mang đến những đặc tính riêng biệt. Tùy vào chủng men, nhiệt độ và cách kiểm soát quá trình lên men, bia có thể xuất hiện các nốt hương trái cây, gia vị hoặc vị chua nhẹ, vì vậy men thường được xem như “linh hồn” trong nghệ thuật nấu bia thủ công.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Nước</h3>
                        <p>Chiếm tỷ lệ lớn nhất trong thành phần, nước có ảnh hưởng trực tiếp đến cấu trúc vị và cảm giác khi thưởng thức bia. Hàm lượng khoáng chất trong nước có thể làm thay đổi đáng kể phong cách bia, trong đó nước cứng thường phù hợp với các dòng bia đậm màu, còn nước mềm lại thích hợp cho những dòng bia sáng, nhẹ. Để đạt được chất lượng ổn định, các nhà nấu bia thường xử lý nước rất kỹ lưỡng nhằm đảm bảo sự cân bằng và độ tinh khiết cho từng mẻ bia.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Dù vẫn xoay quanh bốn nguyên liệu cốt lõi, bia thủ công lại không bị giới hạn trong một khuôn mẫu cố định, bởi chính cách biến tấu linh hoạt trong từng công đoạn đã tạo nên sự khác biệt rõ rệt giữa các dòng bia. Từ việc lựa chọn malt, phối hợp hoa bia cho đến kiểm soát men và xử lý nguồn nước, tất cả đều góp phần hình thành nên cá tính riêng cho mỗi sản phẩm.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Quy trình nấu bia thủ công tiêu chuẩn
                </h2>
                <p className="mb-6">
                    Là một chuỗi các công đoạn liên kết chặt chẽ với nhau, bắt đầu từ khâu chuẩn bị nguyên liệu cho đến khi hoàn thiện sản phẩm đóng gói. Mỗi bước đều đòi hỏi sự kiểm soát chính xác về nhiệt độ, thời gian và điều kiện vệ sinh, bởi chỉ cần một sai lệch nhỏ cũng có thể ảnh hưởng đến hương vị và chất lượng của cả mẻ bia. Không chỉ là quy trình kỹ thuật, đây còn là quá trình thể hiện kinh nghiệm và sự tỉ mỉ của người nấu.
                </p>
<div className="space-y-6 mb-10 pl-4 border-l border-[#D5C6B1]">
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">1. Chuẩn bị nguyên liệu</h3>
                        <p className="mt-2">Trước khi bắt đầu, toàn bộ nguyên liệu như malt, hoa bia, nước và men sẽ được cân đong theo công thức đã định. Song song đó, hệ thống nấu, đường ống và các thiết bị liên quan được vệ sinh bằng quy trình CIP để đảm bảo môi trường vô trùng. Các thông số vận hành, phần mềm điều khiển cũng được kiểm tra kỹ lưỡng nhằm đảm bảo mẻ nấu diễn ra ổn định ngay từ đầu.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">2. Xay nghiền malt</h3>
                        <p className="mt-2">Malt được nghiền với độ mịn phù hợp để phá vỡ cấu trúc hạt, tạo điều kiện cho enzyme tiếp cận và chuyển hóa tinh bột bên trong. Quá trình này cần được kiểm soát cẩn thận để không làm nát hoàn toàn lớp vỏ trấu, bởi phần vỏ này sẽ hỗ trợ rất nhiều cho quá trình lọc dịch nha ở bước sau.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">3. Nấu malt</h3>
                        <p className="mt-2">Malt sau khi nghiền được trộn với nước nóng trong nồi nấu, nơi diễn ra quá trình chuyển hóa quan trọng. Ở khoảng nhiệt độ 65–68°C, enzyme sẽ phân giải tinh bột thành đường lên men và protein thành các acid amin cần thiết. Trong suốt quá trình này, các yếu tố như nhiệt độ và pH được theo dõi liên tục để đảm bảo hiệu suất chuyển hóa đạt mức tối ưu.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">4. Lọc dịch nha</h3>
                        <p className="mt-2">Hỗn hợp sau khi nấu được chuyển sang nồi lọc để tách phần dịch nha ra khỏi bã malt. Phần dịch đầu sẽ được tuần hoàn trở lại cho đến khi đạt độ trong cần thiết, sau đó tiến hành rửa bã để thu tối đa lượng đường còn lại. Khi quá trình hoàn tất, phần bã sẽ được loại bỏ, chỉ giữ lại dịch nha giàu dinh dưỡng.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">5. Đun sôi với hoa bia</h3>
                        <p className="mt-2">Dịch nha tiếp tục được đun sôi trong khoảng 60–90 phút. Hoa bia được bổ sung theo từng thời điểm khác nhau nhằm tạo độ đắng, hương thơm và cân bằng cấu trúc vị cho bia. Đồng thời, quá trình đun sôi còn giúp tiệt trùng dịch nha, ổn định thành phần hóa học và điều chỉnh màu sắc cũng như pH.</p>
                    </div>

                    <div className="w-full aspect-[16/9] overflow-hidden my-4 rounded-sm shadow-md bg-[#DFD8C8] flex items-center justify-center italic text-gray-600">
                        Quy trình nấu bia thủ công diễn ra như thế nào?
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">6. Lắng xoáy</h3>
                        <p className="mt-2">Sau khi đun sôi, dịch nha được chuyển sang bồn lắng xoáy, nơi các cặn hoa bia và protein sẽ được gom lại nhờ lực xoáy ly tâm. Nhờ vậy, phần dịch trong có thể được tách ra dễ dàng, tạo tiền đề cho bước làm lạnh và lên men đạt hiệu quả cao hơn.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">7. Làm lạnh và truyền men</h3>
                        <p className="mt-2">Dịch nha nóng được làm lạnh nhanh về nhiệt độ thích hợp, thường dao động từ 10–20°C tùy theo loại bia. Sau đó, dịch được chuyển vào tank lên men và bổ sung men đã được hoạt hóa, đánh dấu sự bắt đầu của quá trình lên men quyết định phần lớn đặc tính của bia.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">8. Lên men chính</h3>
                        <p className="mt-2">Trong quá trình lên men, men bia sẽ chuyển hóa đường thành cồn và CO₂ dưới điều kiện nhiệt độ được kiểm soát chặt chẽ. Tùy vào dòng bia (ale hoặc lager), mức nhiệt sẽ được điều chỉnh khác nhau. Các chỉ số như độ đường hay mật độ men luôn được theo dõi để đảm bảo quá trình diễn ra ổn định, và ở cuối giai đoạn, nhiệt độ có thể được điều chỉnh để loại bỏ các hợp chất không mong muốn.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">9. Ủ bia</h3>
                        <p className="mt-2">Sau khi lên men chính hoàn tất, bia được hạ nhiệt và chuyển sang giai đoạn ủ. Thời gian ủ có thể kéo dài từ vài tuần đến vài tháng, giúp bia trở nên trong hơn, ổn định hơn và phát triển hương vị một cách trọn vẹn. Đây là giai đoạn “làm mịn” tổng thể, giúp các thành phần hòa quyện hài hòa.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">10. Đóng gói</h3>
                        <p className="mt-2">Tùy theo phong cách, bia có thể được lọc hoặc giữ nguyên dạng chưa lọc trước khi đóng chai, lon hoặc keg. Một số dòng bia sẽ được bổ sung thêm đường và men để tạo gas tự nhiên ngay trong bao bì, mang lại độ sủi bọt và cảm giác tươi mới đặc trưng khi thưởng thức.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Toàn bộ quy trình nấu bia thủ công là sự kết hợp giữa kỹ thuật và kinh nghiệm thực tế với mỗi công đoạn đều góp phần định hình chất lượng cuối cùng của sản phẩm. Chính sự tỉ মিলি trong từng bước, cùng khả năng điều chỉnh linh hoạt theo từng công thức, đã tạo nên những dòng bia mang cá tính riêng, giúp bia thủ công luôn giữ được sức hấp dẫn đối với người thưởng thức.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Các lỗi thường gặp trong quá trình sản xuất bia thủ công
                </h2>
                <p className="mb-6">
                    Trong quá trình nấu bia thủ công, việc phát sinh lỗi là điều khó tránh khỏi, đặc biệt khi có nhiều yếu tố như nguyên liệu, nhiệt độ, vệ sinh và quá trình lên men cùng tác động đồng thời. Những sai lệch dù nhỏ cũng có thể ảnh hưởng rõ rệt đến màu sắc, hương thơm và cấu trúc vị của bia thành phẩm. Việc hiểu rõ nguyên nhân và hệ quả của từng lỗi sẽ giúp người nấu kiểm soát quy trình tốt hơn và nâng cao chất lượng sản phẩm theo thời gian.
                </p>
<div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia bị đục</h3>
                        <p className="text-sm">Hiện tượng bia không đạt độ trong thường xuất phát từ việc lọc dịch nha chưa triệt để, protein và cặn chưa được loại bỏ hoàn toàn, hoặc quá trình làm lạnh diễn ra chậm khiến các hợp chất không kịp kết tủa. Ngoài ra, lên men chưa hoàn tất hoặc thời gian ủ chưa đủ cũng khiến các hạt lơ lửng chưa kịp lắng xuống.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Giảm tính thẩm mỹ, ảnh hưởng cảm giác uống khiến bia 'nặng' và kém mượt.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia không có gas hoặc gas yếu</h3>
                        <p className="text-sm">Nguyên nhân thường liên quan đến hoạt động của men không ổn định hoặc quá trình tạo CO₂ không diễn ra đầy đủ trong giai đoạn sau lên men. Điều này cũng có thể xảy ra khi quá trình lên men kết thúc quá sớm hoặc điều kiện môi trường không phù hợp để men tiếp tục hoạt động.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Mất độ sủi bọt, cảm giác uống 'phẳng', thiếu độ tươi.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia có mùi chua hoặc mùi lạ</h3>
                        <p className="text-sm">Những mùi không mong muốn thường bắt nguồn từ việc nhiễm khuẩn trong quá trình nấu, lên men hoặc đóng gói. Vi sinh vật ngoài kiểm soát có thể xâm nhập và tạo ra các hợp chất gây mùi chua, hôi hoặc biến đổi hương vị ban đầu của bia.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Mất cân bằng vị, thay đổi profile hương vị ban đầu, đôi khi không thể uống.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia có vị đắng gắt, mất cân bằng</h3>
                        <p className="text-sm">Việc sử dụng hoa bia không hợp lý về liều lượng hoặc thời điểm bổ sung có thể dẫn đến vị đắng trở nên quá gắt và lấn át các thành phần khác. Bên cạnh đó, các yếu tố như pH hoặc chất lượng nguyên liệu cũng góp phần làm thay đổi cảm nhận vị.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Bia khó uống, lấn át các yếu tố thơm/ngọt khác.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia xuất hiện mùi bơ</h3>
                        <p className="text-sm">Mùi bơ hoặc kẹo bơ thường xuất hiện khi quá trình lên men không hoàn tất hoặc men không xử lý hết các hợp chất trung gian sinh ra trong quá trình chuyển hóa.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Cảm giác nặng, béo bất thường, sinh ra diacetyl làm mất đi sự tươi mới.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia có mùi oxy hóa (giấy, carton)</h3>
                        <p className="text-sm">Khi bia tiếp xúc với oxy sau giai đoạn lên men, các phản ứng oxy hóa sẽ xảy ra, làm biến đổi hương vị và tạo ra những nốt mùi giống giấy cũ hoặc bìa carton.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Nhanh xuống cấp, mất độ tươi và thơm nhanh chóng.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8] md:col-span-2">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Bia quá ngọt hoặc chưa lên men hết</h3>
                        <p className="text-sm">Nguyên nhân thường đến từ việc quá trình lên men bị gián đoạn, men hoạt động kém hoặc điều kiện lên men không phù hợp khiến đường chưa được chuyển hóa hết.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Hệ quả: Bia quá ngọt nặng, mất cân bằng và độ khô cần thiết.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Mỗi sai lệch trong quá trình nấu bia đều để lại dấu ấn rõ ràng lên hương vị thành phẩm, khiến việc kiểm soát từng công đoạn trở thành yếu tố then chốt quyết định độ ổn định và cá tính của mỗi mẻ bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Xưởng nấu bia thủ công tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Craft beer is meticulously manufactured within independent facilities fiercely committed to elite ingredients, precise logistical methodology, and extreme operational rigor designed entirely to force immaculate taste stability and exceptionally defined aromatics. Definitively rejecting industrialized mass production alongside heavily processed, chemically-cheap adjuncts, this sector relentlessly chases profound depth. This philosophical commitment immediately exposes consumers to highly varied, remarkably sophisticated, and exceptionally solitary liquid expressions explicitly unique to each configuration.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Core Foundational Ingredients Demanded in Craft Beer
                </h2>
                <p className="mb-6">
                    Mentioning craft beer instantly invokes intense flavor differentiation, aesthetic stylistic variations, and profound narratives buried within the liquid. Realistically, an overwhelming majority of all outputs still massively rely strictly upon four profoundly classic pillars: malted barley, hops, yeast, and water. However, the true disruptive force relies unconditionally upon how master artisans selectively procure, process, and structurally unify these base dynamics.
                </p>
                <p className="mb-6">
                    Unlike macro-lagers completely paralyzed by restrictive regulatory doctrine like the Reinheitsgebot purity law, the craft ecosystem violently rips open immense exploratory bandwidth, routinely modifying standard chemistry to forge incredibly distinctive sensory excursions. This aggressive "open-architecture" transforms rudimentary consumption from a mere beverage deeply into a highly expressive art form, explicitly showcasing the technical audacity corresponding to the master brewer’s personal vision.
                </p>
<div className="space-y-6 mb-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Malt (Barley)</h3>
                        <p>Malt operates forcefully as the foundational baseline underpinning the entire structure, supplying massive sugar yields and required nutrients to engine fermentation. Subjected to controlled germination cycles, raw barley subsequently faces intensive heating and roasting tolerances spanning broad spectrums. This directly synthesizes both the final chromatic color scale and precise flavor properties unique to specific styles. Pale malts intrinsically deploy a very light, highly refreshing baseline, whereas heavily charred malts abruptly force dense caramel, thick chocolate, or intensely clear coffee layers, effectively enabling operators to seamlessly adjust the structural frame.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Hops</h3>
                        <p>Hops act entirely as the critical factor synthesizing trademark bitterness, operating simultaneously as the prime catalyst generating deeply diverse aromatic profiles, encompassing razor-sharp citrus, light fresh flora, and intensely dense tropical matrices or heavy pine resin. Beyond simple taste augmentation, hops aggressively stabilize the compound, severely increase head retention capabilities, and naturally function as highly effective organic preservatives. Driven by hundreds of unique global hop variants, brewers fluidly merge profiles forging deeply expansive arrays marked undeniably by immense personal aesthetic.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Yeast</h3>
                        <p>Yeast asserts dominance as the sovereign factor driving biological fermentation, explicitly transmuting raw sugar into alcohol alongside CO₂ density while fiercely dictating the overarching sensory profile anchoring the style. Two dominant families rule manufacturing: ale and lager, each harboring fundamentally disparate characteristics. Relying heavily upon exact strain choice, incubation temperature, and ruthless macro-control of the fermentation environment, the final beer routinely bursts with immense fruity esters, harsh spicy phenols, or sharp acidic tartness, elevating yeast essentially into the “creative soul” embedded within artisanal operations.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#C8963E] mb-2 flex items-center gap-2">► Water</h3>
                        <p>Exceeding the vast majority of volume percentages, water inputs aggressively dictate the direct structural texture spanning the entire tasting event. Varying mineral densities actively force immense alterations affecting the completed style architecture. Generally, hard mineral profiles flawlessly enhance dense dark outputs, while exceptionally soft water executes flawlessly inside intensely bright, light variants. In order to lock absolute parametric stability, production plants enforce draconian Reverse Osmosis scrubbing on water sources, guaranteeing flawless systemic purity.</p>
                    </div>
                </div>

                <p className="mb-6">
                    While rigidly tethered to these four architectural staples, craft operations emphatically refuse entrapment inside monochromatic limits. Purely because of highly volatile manipulation across every isolated sector, the delta between differing styles explodes logarithmically. From selecting precise malt varieties and hop intersections to stringently controlling yeast activity and aggressively policing water purity, every action fundamentally architects the isolated identity governing the finalized product.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Standardized Artisanal Operational Blueprint
                </h2>
                <p className="mb-6">
                    Operating explicitly as a completely interlinked cascade of profoundly tightly bound operational sequences, the entire process bridges from fundamental ingredient staging immediately toward terminal packing metrics. Every discrete motion forces an aggressive requirement regarding flawless environmental parameters, primarily policing severe temperature tolerances, duration controls, and uncompromising systemic sterilization. A highly transient deviation absolutely devastates both the exact target flavor and overall compound integrity. Consequently, this far exceeds raw engineering; it functions as the absolute physical manifestation of profound professional mastery combined alongside microscopic operator diligence.
                </p>
<div className="space-y-6 mb-10 pl-4 border-l border-[#D5C6B1]">
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">1. Ingredient Logistics and Preparation</h3>
                        <p className="mt-2">Preceding physical execution, total raw assets—malt, hop pellets, engineered water lines, and active yeast cultures—are strictly segregated to align with exact formulation schematics. Concurrently, all massive brewhouse thermal machinery, fluid networks, and terminal components undergo an exhaustive CIP (Clean-In-Place) blast to establish a hospital-grade sterile environment. Advanced metric readouts and hardware controls face rigorous audits ensuring absolute mechanical baseline stability.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">2. Malt Milling Dynamics</h3>
                        <p className="mt-2">Malt suffers extreme mechanical friction calibrated specifically to shatter the internal shell matrix, exposing embedded starches for maximal enzymatic extraction. However, this demands hyper-precise limits designed perfectly to avoid obliterating the external husk. These remaining husk fragments are mandatory structural necessities tasked with acting as a native filtration bed directly utilized during subsequent lautering cycles.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">3. Precision Mashing Protocols</h3>
                        <p className="mt-2">Fresh milled grain aggressively converges with scalding water precisely inside the mash tun, rapidly triggering pivotal chemical operations. Actively operating between exact tolerances of 65–68°C, isolated enzymes fiercely shred raw starches into directly fermentable sugars alongside critical amino acids. Throughout this brutal duration, secondary limits tracking heat dispersion alongside pH data points strictly guarantee optimal yield execution efficiencies.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">4. Lautering and Separation</h3>
                        <p className="mt-2">The mashed amalgam transfers rapidly into massive lautering hardware specifically to violently separate dense sugar runoff (wort) away from depleted bio-matter grain husks. Heavily concentrated initial extraction recirculates ruthlessly until achieving targeted clarity, quickly followed via intense sparging (rinsing) cycles explicitly formulated to aggressively strip terminal sugar volumes. Once finalized, dead mass is forcefully purged, successfully isolating maximum liquid nutrition.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">5. Thermal Boiling and Hop Induction</h3>
                        <p className="mt-2">Salvaged wort suffers an aggressive full thermal boil frequently occupying 60–90 intense minutes. Hop arrays initiate deployment at exact temporal milestones specifically to establish raw bitterness layers, compound aromas, and lock massive baseline flavor balancing. Consequently, this boiling cycle effectively sterilizes the payload, immediately halting biological alteration while flawlessly establishing chromatic tones and targeted pH bounds.</p>
                    </div>

                    <div className="w-full aspect-[16/9] overflow-hidden my-4 rounded-sm shadow-md bg-[#DFD8C8] flex items-center justify-center italic text-gray-600">
                        How the Craft Beer Brewing Process Works?
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">6. Whirlpool Clarification</h3>
                        <p className="mt-2">Post boiling, scalding liquid fires aggressively into centralized whirlpool tanks where intense centripetal force acts exclusively to pile exhausted hop debris alongside dense protein chains centrally. Subsequently, immaculate clear liquid effortlessly drains outwardly, efficiently prep-staging the fluid ahead of rapid chill protocols and eventual fermentation.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">7. Heat Exchange and Pitching</h3>
                        <p className="mt-2">Super-heated wort plummets against heavy heat exchangers actively dropping internal temperatures deeply toward rigid 10–20°C limits naturally dictated by strict style blueprints. Consequently, the cooled payload occupies towering fermentation vessels directly where hyper-activated yeast cultures violently “pitch” into the substrate, initiating the massive biological shift heavily defining terminal beer traits.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">8. Primary Biological Fermentation</h3>
                        <p className="mt-2">While rapidly fermenting, yeast cultures ferociously gorge on massive sugar supplies forcing vast alcohol and deep CO₂ emissions directly under intense environmental stabilization. Constrained by style (Ales vs. Lagers) extreme thermal variance regulates metabolic rate. Variables involving sugar gravity alongside active yeast populations face relentless scrutiny, strictly managing stable degradation timelines, and eventually regulating end-phase temperature drops geared entirely to purge off structural toxicity.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">9. Cold Conditioning</h3>
                        <p className="mt-2">Abruptly trailing core fermentation, ambient heat plunges heavily forcing the beer violently into aggressive maturation. Incubation timelines drastically extend routinely measuring from prolonged weeks toward protracted months, purposefully causing extreme particulate settlement, rock-solid consistency, while dramatically unleashing highly complex flavor nuances. Effectively recognized as the ultimate “smoothing” tier, it perfectly harmonizes disjointed architectural parts.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">10. Volumetric Packaging</h3>
                        <p className="mt-2">Governed directly by aesthetic limits, outputs experience severe filtration or launch naturally hazy directly ahead of massive bottling, canning, or kegging systems. Peripheral variants routinely introduce minor secondary sugars alongside yeast injections engineered to provoke violent natural carbonation spikes contained wholly inside the retail shell, immediately guaranteeing sharp head production alongside highly prominent freshness dynamics upon breaking the seal.</p>
                    </div>
                </div>

                <p className="mb-6">
                    The entire exhaustive craft apparatus strictly binds complex scientific boundaries deeply intertwined with rugged blue-collar manufacturing experience where every step aggressively defines the ultimate purity standard. Absolute, uncompromising perfectionism at every juncture fused cleanly with deep operational latitude generates highly provocative expressions, permanently sustaining the brutal gravitational pull intrinsic to artisanal beverages.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Routine Catastrophic Process Disruptions Identified
                </h2>
                <p className="mb-6">
                    Executing physical operations practically guarantees the emergence of structural aberrations, largely due to fiercely complex overlaps spanning raw ingredients, heat matrices, hygiene vectors, and extremely volatile biological actors operating uniformly. Negligible deviances routinely inflict fatal consequences violently altering visual tones, aromatic throw, and base gustatory structure characterizing the finalized batch. Completely understanding both the root catalyst and systemic fallout regarding explicit anomalies drastically empowers operations to fiercely command their workflows while perpetually maximizing output superiority over prolonged lifecycles.
                </p>
<div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Severe Systemic Haze</h3>
                        <p className="text-sm">Extensive visual cloudiness typically erupts originating entirely from lethargic lautering sequences completely failing to strip dense proteins and heavy sediment. Alternatively, incredibly sluggish chilling protocols directly inhibit required compound coagulation. Moreover, stunted fermentation limits alongside truncated cold conditioning durations actively trap rampant suspended particulate lacking sufficient timeline to drop naturally.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Instantly degrades premium visual aesthetics heavily damaging sensory reception violently forcing a decidedly 'heavy', harshly unrefined gulp profile.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Flat or Anemic Carbonation</h3>
                        <p className="text-sm">Directly tracked to wildly erratic fermentation behaviors or massive failures accurately forcing post-fermentation CO₂ saturation. Additionally, this aggressively results upon prematurely executing fermentation termination limits bypassing required environments ensuring yeast viability capable of generating pressure requirements.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Obliterates necessary foam density producing an entirely ‘lifeless’ drink totally stripped of vibrant effervescence.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Acetic Tartness and Obstructive Phenols</h3>
                        <p className="text-sm">Severely abrasive odors predominantly fester owing to rampant bacterial infiltrations breaching critical boiling, biological, or packaging procedures. Undetected micro-organisms violently flood the biome forcibly injecting intensely harsh sour outputs seamlessly rewriting structural flavor baselines.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Brutally destroys delicate target profiles radically mutating baseline aesthetics, frequently rendering entire commercial batches biologically unfit for consumption.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Astringent, Unbalanced Bitterness</h3>
                        <p className="text-sm">Fundamentally rooted entirely in deploying highly aggressive hop inputs entirely ignoring required volumetric balance or executing drastically inaccurate thermal induction timing rapidly extracting overwhelming astringency which brutally overrides parallel flavor architecture. Furthermore, erratic pH limits forcefully corrupt final flavor yields.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Enforces punishing consumption dynamics completely incinerating intended smooth sweet or aromatic variables.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Butter/Diacetyl Intrusions</h3>
                        <p className="text-sm">Aggressive butterscotch traces ruthlessly spike directly alongside heavily stunted fermentation lines specifically occurring entirely when exhausted yeast populations fail miserably to re-metabolize heavy intermediary toxic compounds aggressively expelled amid initial carbohydrate combustion.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Triggers profoundly unpleasant greasy profiles forcing slick textures definitively neutralizing required snappy freshness limits.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Oxidation Transmutations (Wet Paper/Cardboard)</h3>
                        <p className="text-sm">Whenever active beer collides aggressively into unsecured oxygen networks completely bypassing protective post-ferment shields, volatile oxidation rapidly activates severely mutating native molecular structure thereby rapidly introducing highly offensive metallic or damp cardboard olfactory errors.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Imposes hyper-accelerated shelf life degradation savagely eradicating volatile aromatics within extremely compressed timelines.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8] md:col-span-2">
                        <h3 className="text-lg font-bold text-[#1C1A14] mb-2">Extremely Cloying or Stunted Attenuation</h3>
                        <p className="text-sm">Direct fallout entirely resulting natively from violently shocked fermentation environments, aggressively lethargic yeast strains, or grossly mismanaged thermal setpoints which violently stall sugar depletion prior to completely obliterating required carbohydrate densities.</p>
                        <p className="mt-2 text-[#C8963E] text-sm italic">Fallout: Produces an oppressively syrupy, massively unbalanced beverage definitively destroying the inherently crisp dry finish.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Every isolated operational flaw systematically carves a painfully distinct footprint straight into the finished beverage, making absolute structural mastery spanning all workflows the unequivocal metric required to ruthlessly dictate ultimate batch consistency and supreme architectural uniqueness.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Premier Craft Operations Operating in HCMC
                </h2>
                <p className="mb-4">
                    For individuals aggressively searching to locate intensely authentic craft tasting environs structurally mapped directly into the Tan Phu precinct, CREAT Craft Beer decisively operates as an unconditionally mandatory waypoint. Solidly stationed at 93 Street 11, Tay Thanh Ward, CREAT successfully deploys exceptionally warm hospitality metrics flawlessly hybridized alongside relentlessly progressive creative outputs, optimally tailoring the space to directly intercept individuals demanding to completely dissect the true elite craft vertical.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Corporate Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Operations HQ:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "bang-gia-bia-thu-cong-moi-nhat": {
        breadcrumbTitle: "Bảng giá bia thủ công...",
        breadcrumbTitle_en: "Craft Beer Pricing...",
        title: "Bảng giá bia thủ công mới nhất",
        title_en: "Latest Craft Beer Price List 2026",
        date: "02 Tháng 4, 2026",
        category: "Kinh doanh",
        category_en: "Business",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/creat-craft-11-8005.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Giá bia thủ công không cố định theo một mức chung, mà thay đổi theo từng dòng bia, thương hiệu và cả thời điểm trong năm và cho thấy rõ sự chênh lệch giữa các phân khúc cùng giá trị phía sau mỗi loại bia craft.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Các yếu tố ảnh hưởng đến giá bia craft năm 2026
                </h2>
                <p className="mb-6">
                    Mỗi yếu tố đều tác động trực tiếp vào giá thành, và khi một trong các yếu tố này thay đổi, giá bán cuối cùng cũng buộc phải điều chỉnh theo để đảm bảo cân đối chi phí.
                </p>
<div className="space-y-6 mb-10 pl-4 border-l-2 border-[#C8963E]">
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Thuế tiêu thụ đặc biệt</h3>
                        <p className="mt-2">Thuế tiêu thụ đặc biệt là khoản chi phí được cộng trực tiếp vào giá bán, nên bất kỳ sự thay đổi nào về thuế đều tác động ngay đến giá bia trên thị trường. Khi thuế tăng, doanh nghiệp không có nhiều dư địa để hấp thụ mà thường phải phân bổ vào giá bán lẻ.</p>
                        <p className="mt-2">Với bia craft, do mức giá nền đã cao hơn so với bia công nghiệp, phần thuế này càng làm giá bị đội lên rõ rệt. Điều này khiến giá bán cuối cùng tăng theo một cách trực tiếp, không qua nhiều bước trung gian.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Chi phí nguyên liệu đầu vào</h3>
                        <p className="mt-2">Nguyên liệu là phần chi phí cốt lõi trong cấu trúc giá của bia craft. Giá malt, hoa bia và men quyết định trực tiếp chi phí sản xuất mỗi mẻ bia. Khi giá các nguyên liệu này tăng, chi phí sản xuất tăng tương ứng theo từng lít bia được tạo ra.</p>
                        <p className="mt-2">Do phụ thuộc nhiều vào nguồn nhập khẩu, biến động giá nguyên liệu gần như được phản ánh thẳng vào giá thành. Những dòng bia sử dụng nhiều nguyên liệu hoặc nguyên liệu đặc biệt sẽ có mức tăng giá rõ rệt hơn khi chi phí đầu vào thay đổi.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Chi phí vận chuyển</h3>
                        <p className="mt-2">Chi phí logistics bao gồm vận chuyển nguyên liệu đầu vào và phân phối sản phẩm đầu ra, được tính trực tiếp vào giá thành sản phẩm. Khi chi phí vận chuyển tăng, tổng chi phí sản xuất phân phối cũng tăng theo.</p>
                        <p className="mt-2">Ngoài ra, bia craft thường yêu cầu bảo quản lạnh trong quá trình lưu kho và vận chuyển, làm chi phí logistics cao hơn so với nhiều sản phẩm khác. Tất cả các khoản này đều được cộng vào giá bán, khiến giá bia tăng tương ứng với chi phí vận hành thực tế.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Quy mô sản xuất</h3>
                        <p className="mt-2">Với sản lượng nhỏ, chi phí cố định như máy móc, nhà xưởng và nhân công được phân bổ trên ít sản phẩm hơn, làm giá thành mỗi lít bia cao hơn.</p>
                        <p className="mt-2">Ngoài ra, hiệu suất vận hành thấp hơn so với sản xuất công nghiệp cũng khiến chi phí sản xuất không thể giảm sâu. Điều này tạo ra mức giá thành cao ngay từ đầu, và giá bán phải được thiết lập dựa trên mức chi phí đó.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Mặt bằng giá thị trường và cạnh tranh</h3>
                        <p className="mt-2">Mặt bằng giá thị trường là yếu tố ảnh hưởng trực tiếp đến mức giá cuối cùng mà doanh nghiệp lựa chọn. Giá bán không thể tách rời khỏi mức giá chung của các sản phẩm cùng phân khúc.</p>
                        <p className="mt-2">Doanh nghiệp sẽ định giá dựa trên mức giá đang tồn tại trên thị trường, đồng thời cân đối với chi phí của mình. Nếu chi phí cao hơn, giá bán sẽ được thiết lập ở mức tương ứng; nếu muốn cạnh tranh, doanh nghiệp phải điều chỉnh giá trong phạm vi cho phép, từ đó hình thành mức giá cụ thể mà người tiêu dùng thấy.</p>
                    </div>
                </div>

                <p className="mb-6 font-medium text-[#2C2416]">
                    Tất cả các yếu tố đều tác động trực tiếp vào giá thành và được phản ánh rõ ràng trong giá bán bia craft. Khi các chi phí này thay đổi, giá bia cũng thay đổi theo một cách tương ứng, tạo nên mặt bằng giá của thị trường trong năm 2026.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Giá bia thủ công mới nhất 2026
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Matcha Ale</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Sáng tạo, khác biệt</p>
                        <p className="text-sm mb-4">Sự kết hợp độc đáo giữa bia thủ công và trà xanh. Vị ngọt thanh, hương trà rõ rệt.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Dung tích:</strong> 330ml | <strong>ABV:</strong> 5% | <strong>IBU:</strong> 30</li>
                            <li><strong>Hương vị:</strong> Trà xanh Matcha</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Giá: Liên hệ 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Pilsner Fruity</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Tươi mát, dễ thưởng thức</p>
                        <p className="text-sm mb-4">Dòng bia nhẹ, vị ngọt dịu từ chanh dây kết hợp cùng men bia thủ công sảng khoái.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Dung tích:</strong> 330ml | <strong>ABV:</strong> 5% | <strong>IBU:</strong> 26</li>
                            <li><strong>Hương vị:</strong> Chanh dây tự nhiên</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Giá: Liên hệ 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">IPA</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Đậm đà, cá tính rõ nét</p>
                        <p className="text-sm mb-4">Độ đắng cao từ hoa bia cùng hương thơm đặc trưng của hoa cỏ, quýt và cam.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Dung tích:</strong> 330ml | <strong>ABV:</strong> 6.8% | <strong>IBU:</strong> 40</li>
                            <li><strong>Hương vị:</strong> Hoa cỏ, quýt, cam</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Giá: Liên hệ 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Midnight Stout</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Đậm vị, hậu vị sâu</p>
                        <p className="text-sm mb-4">Phong cách bia đen châu Âu, nổi bật với hương cà phê rang và sô cô la đậm đà.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Dung tích:</strong> 330ml | <strong>ABV:</strong> 6.3% | <strong>IBU:</strong> 36</li>
                            <li><strong>Hương vị:</strong> Cà phê, sô cô la</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Giá: Liên hệ 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324] md:col-span-2 md:w-1/2 md:mx-auto">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Wheat Ale</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Nhẹ nhàng, cân bằng</p>
                        <p className="text-sm mb-4">Hương lúa mì tự nhiên, vị bia êm, hậu đắng nhẹ, thích hợp thưởng thức hằng ngày.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Dung tích:</strong> 330ml | <strong>ABV:</strong> 6% | <strong>IBU:</strong> 28</li>
                            <li><strong>Hương vị:</strong> Lúa mì, lúa mạch</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Giá: Liên hệ 098 935 4444</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Xưởng nấu bia thủ công tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>
                <p className="mb-6">
                    CREAT Craft Beer được xây dựng với định hướng trở thành nơi hội tụ của cộng đồng yêu bia thủ công tại Tân Phú nói riêng và TP.HCM nói chung. Quán sở hữu danh sách bia được chọn lọc kỹ càng từ các microbrewery uy tín trong và ngoài nước, đảm bảo mỗi dòng bia đều mang hương vị độc đáo và câu chuyện riêng. Từ IPA thơm ngát hoa bia, Stout đậm vị cà phê, cacao, Wheat Ale nhẹ nhàng, cho đến các dòng Saison, Sour hay những loại bia theo mùa được cập nhật liên tục, tất cả đều được tuyển chọn nhằm mang đến trải nghiệm “đúng chất” craft beer.
                </p>
<p className="mb-6">
                    Không chỉ tập trung vào chất lượng bia, CREAT còn chú trọng tạo nên một không gian thưởng thức hài hòa giữa nghệ thuật và sự thư giãn. Thiết kế quán kết hợp ánh sáng ấm, nội thất gỗ, điểm nhấn sáng tạo giúp người uống cảm thấy thoải mái từ lần đầu bước vào. Đây là nơi lý tưởng để bạn nhâm nhi một ly bia sau giờ làm, tụ họp bạn bè cuối tuần hoặc đơn giản là tìm một không gian nhẹ nhàng để “chill”.
                </p>
                <p className="mb-6">
                    Điểm mạnh khiến CREAT Craft Beer trở thành địa chỉ uy tín chính là phong cách phục vụ tận tâm và hiểu biết. Đội ngũ nhân viên luôn sẵn sàng tư vấn hương vị bia phù hợp với khẩu vị của từng khách, từ người mới bắt đầu uống craft đến những tín đồ sành sỏi. Cùng với đó, quán thường xuyên tổ chức các sự kiện thử bia, workshop, ra mắt dòng bia mới… giúp khách hàng luôn cảm nhận được sự thú vị và đổi mới trong từng lần ghé quán.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Câu hỏi thường gặp về bia thủ công
                </h2>
                <p className="mb-6">
                    Khi bia thủ công ngày càng trở nên phổ biến, không chỉ người mới mà ngay cả những người đã uống lâu năm cũng thường có những thắc mắc xoay quanh cách bảo quản, cách chọn và cách thưởng thức sao cho đúng. Những câu hỏi dưới đây là những điều thường gặp nhất, giúp bạn hiểu rõ hơn và tận hưởng bia craft một cách trọn vẹn hơn.
                </p>
<div className="space-y-6 mb-10">
                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Bia thủ công để được bao lâu?</h3>
                        <p className="text-[#2C2416]">Thời gian bảo quản của bia thủ công thường ngắn hơn so với bia công nghiệp do không sử dụng chất bảo quản và ít qua xử lý tiệt trùng sâu. Phần lớn các dòng bia nên được uống trong khoảng 3–6 tháng kể từ ngày sản xuất để giữ được hương vị tốt nhất. Một số dòng đặc biệt như Imperial Stout hoặc Barleywine có thể để lâu hơn, thậm chí vài năm nếu bảo quản đúng cách, nhưng đa số bia craft vẫn ngon nhất khi còn “tươi”.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Độ cồn của bia thủ công thường là bao nhiêu?</h3>
                        <p className="text-[#2C2416]">Bia thủ công có dải độ cồn khá rộng, tùy thuộc vào phong cách. Những dòng nhẹ như Lager, Pale Ale thường dao động khoảng 4–5%, trong khi IPA có thể từ 5–7%. Các dòng đậm hơn như Double IPA, Stout hay Belgian Ale có thể lên đến 8–12% hoặc cao hơn. Chính sự đa dạng này giúp người uống dễ dàng chọn theo khẩu vị và khả năng uống của mình.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Bia thủ công có cần bảo quản lạnh không?</h3>
                        <p className="text-[#2C2416]">Có. Hầu hết bia thủ công nên được bảo quản trong ngăn mát tủ lạnh để giữ ổn định hương vị và tránh biến đổi do nhiệt độ. Nhiệt độ cao hoặc thay đổi nhiệt độ liên tục có thể làm bia nhanh mất mùi thơm, thậm chí bị “xuống vị”.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Bia thủ công có dễ uống không?</h3>
                        <p className="text-[#2C2416]">Không phải tất cả bia craft đều khó uống như nhiều người nghĩ. Có rất nhiều dòng nhẹ, dễ tiếp cận dành cho người mới bắt đầu, chẳng hạn như Wheat Beer hoặc Pale Ale. Tuy nhiên, cũng có những dòng đậm vị, đắng hoặc nhiều tầng hương dành cho người đã quen và muốn khám phá sâu hơn.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Có nên uống bia thủ công ngay khi mua không?</h3>
                        <p className="text-[#2C2416]">Trong đa số trường hợp, câu trả lời là có. Bia thủ công thường ngon nhất khi còn mới, đặc biệt là các dòng IPA hoặc Pale Ale vì hương hoa bia sẽ giảm dần theo thời gian. Việc uống sớm giúp bạn cảm nhận trọn vẹn hương vị mà nhà nấu bia mong muốn truyền tải.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Bia thủ công có khác gì bia công nghiệp?</h3>
                        <p className="text-[#2C2416]">Sự khác biệt nằm ở cách làm và mục tiêu sản xuất. Bia công nghiệp hướng đến sự ổn định và sản xuất số lượng lớn, trong khi bia thủ công tập trung vào hương vị, sự sáng tạo và cá tính riêng của từng dòng bia. Vì vậy, trải nghiệm khi uống cũng đa dạng và thú vị hơn.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-5 rounded-md border border-[#E8DFC8]">
                        <h3 className="font-bold text-[#1C1A14] mb-2">Có thể kết hợp bia thủ công với món ăn không?</h3>
                        <p className="text-[#2C2416]">Hoàn toàn có thể, thậm chí đây còn là một phần thú vị của việc thưởng thức bia craft. Những dòng bia nhẹ có thể đi cùng món chiên, hải sản, trong khi các dòng đậm hơn như Stout hoặc Porter lại hợp với thịt nướng hoặc món có vị béo. Việc kết hợp đúng có thể làm nổi bật cả món ăn lẫn hương vị của bia.</p>
                    </div>
                </div>

                <p className="mb-10 text-[#2C2416] italic">
                    Những hiểu biết cơ bản chỉ là điểm khởi đầu, còn trải nghiệm thực tế mới là thứ giúp bạn cảm nhận rõ nhất sự thú vị mà bia craft mang lại.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Craft beer pricing is never anchored to standard metrics, fluctuating radically depending upon hyper-specific styles, localized brand cachet, and rigid seasonal dynamics, actively showcasing massive chasms between specialized tiers alongside the profound underlying value inherently embedded within each heavily engineered artisanal batch.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Macro Vectors Heavily Dictating Craft Pricing in 2026
                </h2>
                <p className="mb-6">
                    Every isolated logistical variable directly strikes the baseline production expenditure. Consequently, whenever sudden volatility occurs within these sectors, terminal retail pricing invariably adjusts upward to forcefully maintain essential corporate margins and operational equilibrium.
                </p>
<div className="space-y-6 mb-10 pl-4 border-l-2 border-[#C8963E]">
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Specialized Consumption Protocols (Taxes)</h3>
                        <p className="mt-2">Aggressive excise taxation undeniably constitutes a massive fixed liability forcibly bundled straight into the retail tag, ensuring any legislative shifts immediately cascade directly into live market pricing. Confronting elevated tax burdens, manufacturing outfits possess extremely limited financial elasticity, typically forcing them to immediately pass structural increases completely onto the retail consumer.</p>
                        <p className="mt-2">Specifically regarding craft distribution, given that baseline MSRP heavily outpaces industrialized variants, tax multipliers fiercely compound the total value metric. This dynamic pushes terminal checkout sums exponentially higher, lacking intermediate buffers to absorb the shock.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Raw Asset Expenditures</h3>
                        <p className="mt-2">Premium raw assets function unconditionally as the core financial bedrock governing craft beer architecture. Real-time valuations affecting premium malt, exotic hops, and engineered yeast aggressively dictate the raw overhead assigned to every brewed batch. As these asset sectors spike, individual liter expenditures similarly accelerate concurrently.</p>
                        <p className="mt-2">Heavily reliant on intricate foreign import streams, live global asset volatility practically mirrors straight onto the finalized liquid tag. Advanced formulas mandating massive lupulin hop dumps or relying entirely upon incredibly complex adjuncts unequivocally endure drastically sharper valuation spikes amid supply instability.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Aggressive Logistics and Transit Costs</h3>
                        <p className="mt-2">Complex physical logistics heavily covering inbound raw ingredient procurement immediately merged alongside terminal retail product distribution actively inject massive overhead permanently bound directly to the finished beverage. When heavy transit fuel limits or complex fleet handling costs explode, total operational footprints inevitably inflate.</p>
                        <p className="mt-2">Crucially, artisanal profiles practically demand uncompromising cold-chain preservation across active storage matrices and live transport cycles, forcefully dragging logistical burn rates significantly higher compared to shelf-stable industrial goods. These brutal real-time overhead spikes natively pass onto the retail sector, forcefully realigning market valuations with live mechanical costs.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Manufacturing Scalability Limits</h3>
                        <p className="mt-2">Subjected entirely to restricted micro-batch constraints, relentless fixed liabilities involving massive brewing hardware grids, heavy real estate footprints, and premium labor rates are inherently divided against incredibly small volumetric outputs, fiercely driving per-liter baseline valuations to extreme highs.</p>
                        <p className="mt-2">Furthermore, significantly reduced systemic efficiencies intrinsic to small-scale execution compared directly against macro-industrial monoliths entirely barricade severe cost reduction strategies. This undeniably generates a massively high initial baseline, explicitly forcing retail pricing formulas to aggressively mirror severe underlying capital burn.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Macro Market Benchmarking and Warfare</h3>
                        <p className="mt-2">Live retail market benchmarking undeniably emerges as the overriding dynamic fiercely governing ultimate corporate pricing stratagems. Retail demands adamantly refuse operating devoid of aggressive alignment tethered natively to co-existing product verticals occupying comparable elite tiers.</p>
                        <p className="mt-2">Commercial entities inherently calibrate aggressive pricing grids heavily reliant upon overlapping competitive benchmarks completely harmonized alongside brutal internal overhead constraints. Should capital burn outpace local standards, operators enforce necessary spikes; conversely, chasing hostile market acquisition severely forces operations to aggressively compress margins within structural limits, fundamentally forging the very baseline metrics observed by consumers.</p>
                    </div>
                </div>

                <p className="mb-6 font-medium text-[#2C2416]">
                    Every isolated vector fiercely impacts aggregate fiscal overhead, overtly exposing itself completely within the final retail transaction. As these immense logistical variables mutate, product valuations natively adapt parallel to them, comprehensively defining the live pricing architecture governing the 2026 market ecosystem.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Standardized 2026 Live Market Appraisals
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Matcha Ale</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Unprecedented, Highly Novel</p>
                        <p className="text-sm mb-4">An aggressive hybridization explicitly integrating premium craft brewing directly with intense green tea. Exceedingly smooth sweetness coupled with massive tea aromatics.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Volume:</strong> 330ml | <strong>ABV:</strong> 5% | <strong>IBU:</strong> 30</li>
                            <li><strong>Sensory:</strong> Bold Matcha Green Tea</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Value: Contact 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Pilsner Fruity</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Exceptionally Crisp, Easy Handling</p>
                        <p className="text-sm mb-4">A hyper-light matrix actively deploying bright sweetness anchored entirely by vibrant passion fruit merged via refreshing artisanal yeast profiles.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Volume:</strong> 330ml | <strong>ABV:</strong> 5% | <strong>IBU:</strong> 26</li>
                            <li><strong>Sensory:</strong> Active Passion Fruit</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Value: Contact 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">IPA</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Massively Dense, High Identity</p>
                        <p className="text-sm mb-4">Profoundly elevated bitterness naturally sourced via extreme hop loads actively fused alongside powerful floral, intense tangerine, and bright orange aromatics.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Volume:</strong> 330ml | <strong>ABV:</strong> 6.8% | <strong>IBU:</strong> 40</li>
                            <li><strong>Sensory:</strong> Deep Floral, Citrus Heavy</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Value: Contact 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Midnight Stout</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Intensely Rich, Profound Depths</p>
                        <p className="text-sm mb-4">Aggressive European dark execution prominently displaying incredibly dense roasted coffee alongside profoundly thick chocolate arrays.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Volume:</strong> 330ml | <strong>ABV:</strong> 6.3% | <strong>IBU:</strong> 36</li>
                            <li><strong>Sensory:</strong> Heavy Coffee, Dark Chocolate</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Value: Contact 098 935 4444</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-2 border-[#3A3324] md:col-span-2 md:w-1/2 md:mx-auto">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-1">Wheat Ale</h3>
                        <p className="text-sm italic text-[#8C7A60] mb-4">Seamless Balance, Dangerously Smooth</p>
                        <p className="text-sm mb-4">Abundant natural wheat aromatics actively dominating an incredibly smooth matrix heavily ending on exceptionally light bitterness. Explicitly targeted for daily consumption protocols.</p>
                        <ul className="text-sm space-y-1 text-[#D5C6B1]">
                            <li><strong>Volume:</strong> 330ml | <strong>ABV:</strong> 6% | <strong>IBU:</strong> 28</li>
                            <li><strong>Sensory:</strong> Bold Wheat, Complex Grain</li>
                        </ul>
                        <p className="font-bold text-[#C8963E] mt-4 pt-4 border-t border-[#3A3324]">Value: Contact 098 935 4444</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Premier Craft Operations Operating in HCMC
                </h2>
                <p className="mb-4">
                    For individuals aggressively searching to locate intensely authentic craft tasting environs structurally mapped directly into the Tan Phu precinct, CREAT Craft Beer decisively operates as an unconditionally mandatory waypoint. Solidly stationed at 93 Street 11, Tay Thanh Ward, CREAT successfully deploys exceptionally warm hospitality metrics flawlessly hybridized alongside relentlessly progressive creative outputs, optimally tailoring the space to directly intercept individuals demanding to completely dissect the true elite craft vertical.
                </p>
                <p className="mb-6">
                    CREAT Craft Beer fundamentally operates acting entirely as the paramount convergence singularity serving the hyper-dedicated artisanal community active within Tan Phu and actively extending outward across massive HCMC. Operations harbor aggressively optimized beverage arrays actively sourced directly from profoundly respected micro-breweries operating domestically alongside heavy international imports strictly guaranteeing every isolated variation successfully generates unprecedented sensory metrics entirely backing extremely unique narratives. Ranging aggressively from ultra-floral IPA matrices, heavily dense coffee/cacao Stout blocks, extremely smooth Wheat integrations, entirely to sharply complex Sours and continuously rotating hyper-experimental seasonal launches, the entire portfolio is brutally curated to effortlessly yield an absolutely unfiltered craft reality.
                </p>
<p className="mb-6">
                    Never restricting operational focus solely atop raw liquid metrics, CREAT heavily engineers profoundly engaging physical environments effectively marrying complex progressive modern aesthetics completely alongside intense relaxation. Structural configurations routinely merge extremely warm ambient illumination, heavy organic wood architectures, and profound creative focal points strictly ensuring consumers seamlessly enter highly comfortable states instantly upon breaching the perimeter. Fundamentally identifying as the ultimate staging ground accommodating high-stress corporate decompression, heavy weekend social synchronization, or acting merely as a profoundly quiet sector specifically designated for pure environmental appreciation.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Wholesale Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Corporate Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Operations HQ:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "bia-thu-cong-viet-nam": {
        breadcrumbTitle: "Bia thủ công Việt Nam",
        breadcrumbTitle_en: "Vietnamese Craft Beer",
        title: "Bia thủ công Việt Nam",
        title_en: "Vietnamese Craft Beer: A Rising Movement",
        date: "28 Tháng 3, 2026",
        category: "Kiến thức",
        category_en: "Knowledge",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/creat-craft-10-5345.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Bia thủ công ở Việt Nam không xuất hiện theo kiểu rầm rộ mà đi vào thói quen thưởng thức một cách khá tự nhiên, khi người uống bắt đầu muốn trải nghiệm bia theo một cách khác. Họ dần quan tâm nhiều hơn đến hương thơm, vị đắng, độ cân bằng, rồi cả cách một loại bia được tạo ra. Chính sự tò mò đó khiến cách lựa chọn cũng thay đổi, và từ đó craft beer từng bước hình thành chỗ đứng riêng trên thị trường.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Sự trỗi dậy của xu hướng bia thủ công
                </h2>
                <p className="mb-6">
                    Nếu trước kia, việc uống bia thường gắn với những quán vỉa hè đông đúc và những ly bia hơi được rót liên tục, thì hiện tại cách tiếp cận đã dần thay đổi theo một hướng tinh tế và có chọn lọc hơn. Người uống không còn chỉ tìm cảm giác sảng khoái tức thời, mà bắt đầu quan tâm nhiều hơn đến hương thơm, vị đắng, độ cân bằng và cả những sắc thái nhỏ trong cách một loại bia thể hiện qua từng ngụm. Việc lựa chọn bia vì thế cũng trở nên có ý thức hơn, không đơn thuần là quen hay dễ uống, mà gắn với trải nghiệm và gu thưởng thức riêng của mỗi người.
                </p>
                <p className="mb-6">
                    Từ sự thay đổi trong cách cảm nhận đó, thói quen uống bia cũng dần chuyển dịch sang một nhịp chậm hơn, nơi người ta sẵn sàng dành thời gian để quan sát, để thử và để hiểu rõ hơn về thứ mình đang uống, thay vì chỉ uống theo quán tính như trước. Chính điều này đã mở ra không gian cho các mô hình taproom và quán bia thủ công phát triển với những không gian được đầu tư bài bản, từ cách thiết kế, ánh sáng cho đến cách giới thiệu từng dòng bia, người uống dễ dàng cảm nhận được rằng mỗi ly bia không chỉ là sản phẩm, mà còn là kết quả của một quá trình sáng tạo và thử nghiệm.
                </p>
<p className="mb-6">
                    Nếu nhìn sâu hơn vào bản chất, bia thủ công không chỉ khác biệt ở quy mô sản xuất mà còn nằm ở tư duy làm bia với từng mẻ bia thường được sản xuất với số lượng nhỏ hơn, cho phép người nấu bia kiểm soát tốt hơn từng công đoạn, từ lựa chọn nguyên liệu cho đến quá trình lên men và hoàn thiện sản phẩm. Nhờ có sự linh hoạt đó, họ có thể thử nghiệm nhiều hướng đi khác nhau, kết hợp nguyên liệu, điều chỉnh công thức và tạo ra những dòng bia mang dấu ấn riêng biệt. Chính yếu tố này đã tạo nên sức hấp dẫn đặc trưng của bia thủ công, khi mỗi dòng bia không chỉ khác nhau về hương vị mà còn mang một cá tính rõ ràng, có thể nhẹ nhàng và dễ tiếp cận, nhưng cũng có thể đậm đà, phức tạp với nhiều tầng hương vị thay đổi theo thời gian.
                </p>
                <p className="mb-6">
                    Tại Việt Nam, xu hướng này đang dần hiện rõ khi bia thủ công không còn chỉ xuất hiện ở một vài khu vực trung tâm mà đã lan rộng ra nhiều thành phố và cộng đồng khác nhau, đi cùng với sự gia tăng của các thương hiệu và không gian thưởng bia mang tính cá nhân hóa cao hơn. Sự phát triển này không chỉ phản ánh nhu cầu ngày càng đa dạng của người uống, mà còn cho thấy một sự thay đổi sâu hơn trong cách tiếp cận đồ uống nói chung, khi trải nghiệm và chất lượng dần trở thành yếu tố được ưu tiên.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Đặc điểm làm nên “linh hồn” của Craft Beer Việt
                </h2>
                <p className="mb-6">
                    Một trong những điểm dễ nhận ra ở bia thủ công Việt Nam là cách người làm bia khai thác nguyên liệu bản địa một cách khá linh hoạt, khi không chỉ dừng lại ở malt, hoa bia hay men nhập khẩu. Nhiều brewmaster đã chủ động đưa những nguyên liệu quen thuộc như thanh long, hoa nhài, tiêu Phú Quốc, cacao hay cà phê Tây Nguyên vào công thức với mỗi nguyên liệu không chỉ góp thêm một tầng hương vị mà còn tạo ra cảm giác rất riêng khi thưởng thức. Có loại bia mang vị trái cây nhẹ, dễ uống; có loại lại thiên về hương thơm, hoặc đậm hơn với hậu vị rang, đắng dịu. Chính sự đa dạng này khiến người uống không bị nhàm chán, đồng thời cũng dễ nhận ra dấu ấn “rất Việt” trong từng dòng bia.
                </p>
<p className="mb-6">
                    Nhiều dòng bia tại Việt Nam được phát triển dựa trên nền tảng các phong cách bia phương Tây như IPA, Stout hay Lager, nhưng không giữ nguyên hoàn toàn. Người làm bia thường điều chỉnh lại tỷ lệ nguyên liệu, độ đắng, độ cồn hoặc cách kết hợp hương vị để phù hợp hơn với khẩu vị người Việt. Vì vậy, bia thường có xu hướng dễ tiếp cận hơn, hương vị rõ ràng hơn, không quá nặng nhưng vẫn đủ chiều sâu để người uống cảm nhận.
                </p>
                <p className="mb-6">
                    Mỗi xưởng bia Việt thường có cách tiếp cận riêng, từ việc chọn nguyên liệu, đặt tên sản phẩm cho đến cách xây dựng câu chuyện thương hiệu. Có nơi tập trung vào nguyên liệu vùng miền, có nơi lại thử nghiệm những cách kết hợp mới lạ theo mùa. Nhờ vậy, thị trường không bị lặp lại và người uống luôn có cảm giác mỗi lần thử là một lần khám phá.
                </p>
                <p className="mb-10 font-medium text-[#2C2416] p-4 bg-[#F8F3EB] border-l-2 border-[#C8963E]">
                    Chính sự kết hợp giữa nguyên liệu quen thuộc, cách làm chỉn chu và tư duy sáng tạo đã tạo nên một dòng bia có cá tính rõ ràng. Không quá phô trương, nhưng đủ khác biệt để người uống nhận ra và muốn quay lại thử thêm nhiều lần nữa.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Quán bia thủ công tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>
                <p className="mb-6">
                    CREAT Craft Beer được xây dựng với định hướng trở thành nơi hội tụ của cộng đồng yêu bia thủ công tại Tân Phú nói riêng và TP.HCM nói chung. Quán sở hữu danh sách bia được chọn lọc kỹ càng từ các microbrewery uy tín trong và ngoài nước, đảm bảo mỗi dòng bia đều mang hương vị độc đáo và câu chuyện riêng. Từ IPA thơm ngát hoa bia, Stout đậm vị cà phê, cacao, Wheat Ale nhẹ nhàng, cho đến các dòng Saison, Sour hay những loại bia theo mùa được cập nhật liên tục, tất cả đều được tuyển chọn nhằm mang đến trải nghiệm “đúng chất” craft beer.
                </p>
                <p className="mb-6">
                    Không chỉ tập trung vào chất lượng bia, CREAT còn chú trọng tạo nên một không gian thưởng thức hài hòa giữa nghệ thuật và sự thư giãn. Thiết kế quán kết hợp ánh sáng ấm, nội thất gỗ, điểm nhấn sáng tạo giúp người uống cảm thấy thoải mái từ lần đầu bước vào. Đây là nơi lý tưởng để bạn nhâm nhi một ly bia sau giờ làm, tụ họp bạn bè cuối tuần hoặc đơn giản là tìm một không gian nhẹ nhàng để “chill”.
                </p>
                <p className="mb-6">
                    Điểm mạnh khiến CREAT Craft Beer trở thành địa chỉ uy tín chính là phong cách phục vụ tận tâm và hiểu biết. Đội ngũ nhân viên luôn sẵn sàng tư vấn hương vị bia phù hợp với khẩu vị của từng khách, từ người mới bắt đầu uống craft đến những tín đồ sành sỏi. Cùng với đó, quán thường xuyên tổ chức các sự kiện thử bia, workshop, ra mắt dòng bia mới… giúp khách hàng luôn cảm nhận được sự thú vị và đổi mới trong từng lần ghé quán.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        )
    },
    "bia-thu-cong-len-men-nhu-the-nao": {
        breadcrumbTitle: "Bia thủ công lên men...",
        breadcrumbTitle_en: "How Craft Beer Ferments...",
        title: "Bia thủ công lên men như thế nào?",
        title_en: "How Does Craft Beer Ferment? The Science Behind Brewing Yeast",
        date: "25 Tháng 3, 2026",
        category: "Kiến thức",
        category_en: "Knowledge",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/bia-thu-cong-len-men-nhu-the-nao1-4867.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Men bia thường không phải là thứ người ta nhìn thấy đầu tiên khi nhắc đến một ly bia, nhưng lại là yếu tố quyết định phần “sống” bên trong đó. Về bản chất, đây là một loại vi sinh vật thuộc nhóm nấm men, được nuôi cấy với độ tinh khiết cao để phục vụ cho quá trình sản xuất bia. Khi được đưa vào môi trường thích hợp, men bắt đầu hoạt động bằng cách chuyển hóa lượng đường thu được từ ngũ cốc thành cồn và khí CO₂. Quá trình này không chỉ tạo ra độ cồn tự nhiên mà còn hình thành nên nhiều hợp chất ảnh hưởng trực tiếp đến mùi và vị của bia.
                </p>
                <p className="mb-6">
                    Trong bốn nguyên liệu cơ bản của bia gồm nước, malt, hoa bia và men, mỗi thành phần đều có vai trò riêng, nhưng men lại là yếu tố khởi động và duy trì quá trình lên men – bước quan trọng nhất để biến dịch đường thành bia hoàn chỉnh. Nếu ví von một cách dễ hiểu, nước tạo nên nền, malt xây dựng cấu trúc, hoa bia hoàn thiện hương vị, thì men chính là phần mang lại sức sống và cá tính cho từng mẻ bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Thành phần dinh dưỡng trong men bia
                </h2>
                <p className="mb-6">
                    Nếu nhìn ở góc độ dinh dưỡng, men bia không chỉ đơn thuần là một vi sinh vật phục vụ quá trình lên men mà còn chứa khá nhiều thành phần có lợi cho cơ thể. Bên trong cấu trúc nhỏ bé của men là sự kết hợp của nhiều nhóm chất khác nhau, từ vitamin, khoáng chất cho đến protein và các hợp chất sinh học.
                </p>
                <p className="mb-6">
                    Nổi bật nhất phải kể đến nhóm vitamin B, với sự hiện diện của nhiều loại như B1, B2, B3, B5, B6, B7 và B9. Đây đều là những vitamin quen thuộc, thường liên quan đến quá trình chuyển hóa năng lượng và giúp cơ thể duy trì các hoạt động thường ngày.
                </p>
<p className="mb-6">
                    Không chỉ dừng lại ở đó, men bia còn cung cấp một số khoáng chất quan trọng như crom, selen, sắt, kali, magie và kẽm. Dù hàm lượng không quá lớn, nhưng các vi chất này vẫn đóng vai trò cần thiết trong nhiều chức năng sinh lý.
                </p>
                <p className="mb-6">
                    Một điểm khá đáng chú ý là hàm lượng protein trong men bia tương đối cao. Khoảng 40% thành phần là protein ở dạng axit amin, trong đó có tới 7 axit amin thiết yếu như leucine, isoleucine, methionine, phenylalanine, valine, tryptophan và threonine. Đây là những thành phần mà cơ thể không tự tổng hợp được, nên cần bổ sung từ bên ngoài.
                </p>
                <p className="mb-6">
                    Ngoài ra, trong men bia còn có sự xuất hiện của các hợp chất như probiotics, prebiotics và nucleotides. Những thành phần này không phải lúc nào cũng được nhắc đến, nhưng lại góp phần hỗ trợ hệ tiêu hóa và hoàn thiện giá trị dinh dưỡng tổng thể của men bia.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Phân loại men bia
                </h2>
                <p className="mb-6">
                    Trong quá trình nấu bia, men không chỉ đơn thuần là “tác nhân lên men” mà còn là yếu tố định hình rõ ràng phong cách của từng dòng bia. Chỉ cần thay đổi loại men, cùng một công thức nguyên liệu cũng có thể cho ra hai kết quả rất khác nhau. Về cơ bản, men bia thường được chia thành hai nhóm chính, dựa trên cách chúng hoạt động trong quá trình lên men.
                </p>
<div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-xl font-bold text-[#1C1A14] mb-3">Men lên men nổi (Ale yeast)</h3>
                        <p className="text-sm mb-3">Men lên men nổi, hay còn gọi là men ale, thuộc chủng Saccharomyces cerevisiae. Khi hoạt động, các tế bào men này có xu hướng nổi lên trên bề mặt dịch nha, tạo thành lớp bọt dày mà người nấu có thể quan sát khá rõ trong quá trình lên men.</p>
                        <p className="text-sm mb-3">Loại men này thường làm việc tốt trong khoảng nhiệt độ từ 15–24°C, với tốc độ lên men khá nhanh. Chỉ trong vài ngày, phần lớn lượng đường đã được chuyển hóa thành cồn và khí CO₂. Nhưng điểm đáng chú ý không nằm ở tốc độ, mà ở việc trong quá trình này men ale tạo ra nhiều hợp chất hương, đặc biệt là ester, khiến bia có mùi trái cây rõ rệt và dễ nhận ra.</p>
                        <p className="text-sm text-[#C8963E] font-medium pt-3 border-t border-[#D5C6B1]">Phong cách tiêu biểu: Stout, Belgian Ale, IPA. Hương vị đậm, nhiều lớp, độ cồn cao.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-xl font-bold text-[#1C1A14] mb-3">Men lên men chìm (Lager yeast)</h3>
                        <p className="text-sm mb-3">Khác với men ale, men lên men chìm thuộc chủng Saccharomyces pastorianus và có xu hướng lắng xuống đáy thùng trong quá trình lên men. Điều này cũng phần nào ảnh hưởng đến cách bia được hình thành, từ tốc độ cho đến hương vị cuối cùng.</p>
                        <p className="text-sm mb-3">Men lager hoạt động hiệu quả ở nhiệt độ thấp hơn, thường trong khoảng 7–13°C. Vì điều kiện này, quá trình lên men diễn ra chậm hơn, có thể kéo dài vài tuần thay vì chỉ vài ngày như men ale. Tuy chậm hơn, nhưng đổi lại quá trình này diễn ra ổn định và “sạch” hơn, tạo ra ít hợp chất hương phụ.</p>
                        <p className="text-sm text-[#C8963E] font-medium pt-3 border-t border-[#D5C6B1]">Phong cách tiêu biểu: Lager, Pilsner, Bock. Hương vị cân bằng, êm và sạch vị.</p>
                    </div>
                </div>

                <p className="mb-6 font-medium text-[#2C2416] italic">
                    Nhìn chung, sự khác biệt giữa men nổi và men chìm không chỉ nằm ở vị trí hoạt động hay nhiệt độ lên men, mà thể hiện rõ nhất ở phong cách bia mà chúng tạo ra. Một bên thiên về sự phong phú, nhiều tầng hương, còn bên kia lại hướng đến sự cân bằng, dễ uống. Chính sự khác biệt này đã góp phần làm nên sự đa dạng rất thú vị của thế giới bia thủ công.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Vai trò của men bia trong sản xuất bia thủ công
                </h2>
                <p className="mb-6">
                    Men bia luôn là thành phần “kích hoạt” toàn bộ quá trình nấu bia, nhưng giá trị của nó không chỉ nằm ở việc biến đường thành cồn. Từ cách men hoạt động, người nấu có thể kiểm soát được hương vị, cấu trúc và cả phong cách của bia. Mỗi loại men, mỗi điều kiện lên men đều sẽ dẫn đến một kết quả khác nhau.
                </p>
<div className="space-y-6 mb-10 pl-4 border-l-2 border-[#C8963E]">
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Chuyển hóa đường thành cồn và CO₂</h3>
                        <p className="mt-2">Khi được bổ sung vào dịch nha, men bắt đầu tiêu thụ lượng đường có sẵn và chuyển hóa chúng thành cồn cùng khí CO₂. Đây là nền tảng để bia hình thành đúng nghĩa. Cồn quyết định độ mạnh, còn CO₂ tạo nên độ sủi bọt và cảm giác tươi mát khi uống. Tùy theo loại men và cách kiểm soát quá trình lên men, mức độ chuyển hóa này có thể nhanh hoặc chậm, ảnh hưởng trực tiếp đến thành phẩm cuối cùng.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Hình thành hương vị và mùi thơm</h3>
                        <p className="mt-2">Trong suốt quá trình hoạt động, men không chỉ tạo ra cồn mà còn sinh ra nhiều hợp chất phụ. Những hợp chất này chính là thứ tạo nên mùi hương đặc trưng cho bia, có thể là hương trái cây, chút cay nhẹ của gia vị hoặc cảm giác nồng ấm. Vì vậy, chỉ cần thay đổi loại men, cùng một công thức nguyên liệu cũng có thể cho ra hai kiểu hương vị rất khác nhau.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Định hình phong cách bia</h3>
                        <p className="mt-2">Lựa chọn loại men ngay từ đầu gần như đã quyết định hướng đi của mẻ bia. Men ale thường tạo ra những dòng bia đậm, nhiều tầng hương và có phần nổi bật hơn. Ngược lại, men lager lại mang đến cảm giác gọn gàng, sạch vị và dễ uống. Sự khác biệt này không chỉ nằm ở kỹ thuật mà thể hiện rõ khi thưởng thức.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Ảnh hưởng đến cảm giác khi uống</h3>
                        <p className="mt-2">Men cũng góp phần tạo nên cách bia “thể hiện” trong miệng. Có loại men làm bia trở nên đầy đặn, mượt và có chiều sâu, trong khi loại khác lại mang đến cảm giác nhẹ, khô và sắc nét hơn. Những khác biệt này không dễ nhận ra bằng mắt nhưng lại rất rõ khi uống.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Góp phần ổn định và bảo quản bia</h3>
                        <p className="mt-2">Trong quá trình lên men, men còn tiêu thụ lượng oxy còn sót lại và làm giảm độ pH của bia. Điều này giúp hạn chế sự phát triển của vi sinh vật không mong muốn, từ đó giữ cho bia ổn định hơn và kéo dài thời gian bảo quản mà vẫn giữ được chất lượng.</p>
                    </div>
                </div>

                <p className="mb-6">
                    Nhìn tổng thể, men bia không chỉ là “công cụ” để tạo cồn mà còn là yếu tố định hình toàn bộ trải nghiệm của bia, từ hương, vị cho đến cảm giác khi uống. Chính vì vậy, việc lựa chọn và kiểm soát men luôn là bước quan trọng, gần như quyết định thành công của một mẻ bia thủ công.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Bia thủ công được lên men như thế nào?
                </h2>
                <p className="mb-6">
                    Để một mẻ bia từ dịch nha ban đầu trở thành thành phẩm hoàn chỉnh, quá trình lên men luôn là bước quan trọng nhất. Đây không chỉ là lúc đường được chuyển hóa thành cồn, mà cũng là giai đoạn hương vị bắt đầu hình thành và định hình rõ ràng.
                </p>
                <p className="mb-6">
                    Khi dịch nha vừa nấu xong và được làm mát xuống mức phù hợp, nó sẽ được chuyển sang thùng lên men. Lúc này, dịch vẫn chỉ là một dạng “nước đường”, và phải nhờ đến men thì mọi thứ mới thật sự thay đổi. Men được bổ sung vào ngay sau đó và bắt đầu hoạt động, tiêu thụ lượng đường có sẵn rồi dần chuyển hóa thành cồn và khí CO₂.
                </p>
<p className="mb-6">
                    Tuy nhiên, điều làm nên sự khác biệt của bia thủ công không nằm ở việc tạo cồn, mà nằm ở những hợp chất được hình thành trong suốt quá trình này. Tùy vào loại men, nhiệt độ và cách kiểm soát, men có thể tạo ra nhiều tầng hương khác nhau, từ trái cây, thảo mộc cho đến những nốt hương phức tạp hơn. Chính vì vậy, cùng một công thức nguyên liệu nhưng chỉ cần thay đổi men, kết quả cuối cùng cũng có thể khác đi khá rõ.
                </p>
                <p className="mb-6">
                    Thời gian lên men cũng không cố định, có thể chỉ vài ngày với những dòng bia nhẹ, nhưng cũng có thể kéo dài vài tuần nếu cần phát triển thêm hương vị. Trong suốt giai đoạn này, việc theo dõi và điều chỉnh điều kiện lên men là rất quan trọng để đảm bảo men hoạt động đúng hướng.
                </p>
                <p className="mb-6">
                    Sau khi lên men chính kết thúc, bia sẽ tiếp tục được ủ thêm trong một khoảng thời gian, có thể từ vài tuần đến vài tháng. Giai đoạn này giúp bia ổn định hơn, các hương vị dần hòa vào nhau, những điểm gắt được làm dịu lại và tổng thể trở nên tròn trịa hơn. Từ cách chọn men cho đến cách kiểm soát từng giai đoạn, tất cả đều ảnh hưởng trực tiếp đến hương vị cuối cùng mà người uống cảm nhận được.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Xưởng nấu bia thủ công chất lượng tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>
                <p className="mb-6">
                    CREAT Craft Beer được xây dựng với định hướng trở thành nơi hội tụ của cộng đồng yêu bia thủ công tại Tân Phú nói riêng và TP.HCM nói chung. Quán sở hữu danh sách bia được chọn lọc kỹ càng từ các microbrewery uy tín trong và ngoài nước, đảm bảo mỗi dòng bia đều mang hương vị độc đáo và câu chuyện riêng. Từ IPA thơm ngát hoa bia, Stout đậm vị cà phê, cacao, Wheat Ale nhẹ nhàng, cho đến các dòng Saison, Sour hay những loại bia theo mùa được cập nhật liên tục, tất cả đều được tuyển chọn nhằm mang đến trải nghiệm “đúng chất” craft beer.
                </p>
<p className="mb-6">
                    Không chỉ tập trung vào chất lượng bia, CREAT còn chú trọng tạo nên một không gian thưởng thức hài hòa giữa nghệ thuật và sự thư giãn. Thiết kế quán kết hợp ánh sáng ấm, nội thất gỗ, điểm nhấn sáng tạo giúp người uống cảm thấy thoải mái từ lần đầu bước vào. Đây là nơi lý tưởng để bạn nhâm nhi một ly bia sau giờ làm, tụ họp bạn bè cuối tuần hoặc đơn giản là tìm một không gian nhẹ nhàng để “chill”.
                </p>
                <p className="mb-6">
                    Điểm mạnh khiến CREAT Craft Beer trở thành địa chỉ uy tín chính là phong cách phục vụ tận tâm và hiểu biết. Đội ngũ nhân viên luôn sẵn sàng tư vấn hương vị bia phù hợp với khẩu vị của từng khách, từ người mới bắt đầu uống craft đến những tín đồ sành sỏi. Cùng với đó, quán thường xuyên tổ chức các sự kiện thử bia, workshop, ra mắt dòng bia mới… giúp khách hàng luôn cảm nhận được sự thú vị và đổi mới trong từng lần ghé quán.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Brewing yeast rarely commands immediate attention when discussing beer, yet it represents the most critical "living" component within every glass. Fundamentally, yeast comprises highly purified microorganisms from the fungal kingdom, specifically cultivated for beer production. When introduced into a nutrient-rich wort environment, yeast metabolizes fermentable sugars, converting them into alcohol and carbon dioxide. This biochemical transformation not only generates alcohol content but also produces countless aromatic and flavor compounds that define a beer's sensory character.
                </p>
                <p className="mb-6">
                    Among beer's four foundational ingredients—water, malt, hops, and yeast—each fulfills distinct roles. Yet yeast uniquely initiates and sustains fermentation, the most critical transformation converting sweet wort into finished beer. If we analogize the brewing process: water provides the canvas, malt constructs the framework, hops refine flavor profiles, while yeast breathes life and personality into every batch.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Nutritional Profile of Brewing Yeast
                </h2>
                <p className="mb-6">
                    From a nutritional perspective, brewing yeast extends far beyond its fermentative function—it's remarkably rich in beneficial compounds. Its microscopic cellular structure houses an impressive array of vitamins, minerals, proteins, and bioactive molecules. Most notably, it's exceptionally abundant in B-complex vitamins including B1, B2, B3, B5, B6, B7, and B9, all crucial for energy metabolism and general physiological maintenance.
                </p>
                <p className="mb-6">
                    Additionally, brewing yeast supplies essential trace minerals such as chromium, selenium, iron, potassium, magnesium, and zinc. While present in modest concentrations, these micronutrients support numerous vital biological functions. Perhaps most impressive is yeast's protein content—approximately 40% by mass consists of amino acids, including all seven essential amino acids (leucine, isoleucine, methionine, phenylalanine, valine, tryptophan, and threonine) that the human body cannot synthesize independently.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Yeast Classification in Brewing
                </h2>
                <p className="mb-6">
                    In brewing contexts, yeast serves far more than a mere "fermentation catalyst"—it fundamentally defines stylistic identity. Identical ingredient formulations fermented with different yeast strains yield dramatically divergent results. Brewing yeasts broadly divide into two primary categories based on fermentation behavior.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-xl font-bold text-[#1C1A14] mb-3">Top-Fermenting Yeast (Ale Yeast)</h3>
                        <p className="text-sm mb-3">Saccharomyces cerevisiae, commonly known as ale yeast, exhibits top-fermenting characteristics—yeast cells rise to form visible foam layers during active fermentation. Operating optimally between 15–24°C, ale yeast ferments rapidly, typically completing primary fermentation within days. Critically, this yeast produces substantial aromatic esters, imparting fruity, spicy, or phenolic notes that define ales' complex flavor profiles.</p>
                        <p className="text-sm text-[#C8963E] font-medium pt-3 border-t border-[#D5C6B1]">Typical Styles: Stout, Belgian Ale, IPA. Bold, layered flavors with elevated alcohol content.</p>
                    </div>

                    <div className="bg-[#F8F3EB] p-6 rounded-md shadow-sm border border-[#E8DFC8]">
                        <h3 className="text-xl font-bold text-[#1C1A14] mb-3">Bottom-Fermenting Yeast (Lager Yeast)</h3>
                        <p className="text-sm mb-3">Saccharomyces pastorianus (lager yeast) settles to fermentation vessel bottoms during activity. Thriving at cooler temperatures (7–13°C), lager fermentation proceeds more slowly—often requiring weeks rather than days. This extended, controlled fermentation produces exceptionally "clean" flavor profiles with minimal ester production, yielding crisp, balanced beers.</p>
                        <p className="text-sm text-[#C8963E] font-medium pt-3 border-t border-[#D5C6B1]">Typical Styles: Lager, Pilsner, Bock. Balanced, smooth, and exceptionally clean finishing.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Yeast's Multifaceted Roles in Craft Brewing
                </h2>
                <p className="mb-6">
                    Yeast continuously "activates" the entire brewing process, yet its value transcends simple sugar-to-alcohol conversion. Through controlled yeast management, brewers precisely manipulate flavor profiles, structural characteristics, and stylistic expression.
                </p>

                <div className="space-y-6 mb-10 pl-4 border-l-2 border-[#C8963E]">
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Sugar-to-Alcohol Conversion</h3>
                        <p className="mt-2">Upon wort inoculation, yeast consumes available fermentable sugars, metabolizing them into ethanol and CO₂. Alcohol determines strength, while CO₂ generates carbonation and refreshing effervescence. Fermentation kinetics—rapid versus slow—directly influence finished beer characteristics.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Flavor and Aroma Development</h3>
                        <p className="mt-2">During fermentation, yeast generates numerous secondary metabolites beyond alcohol. These compounds—esters, phenols, and fusel alcohols—create signature aromatic profiles ranging from fruity to spicy to warming. Strain selection alone can radically alter sensory outcomes from identical base recipes.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Stylistic Definition</h3>
                        <p className="mt-2">Initial yeast selection essentially predetermines stylistic trajectory. Ale yeasts typically produce bold, complex, aromatic beers, while lager yeasts deliver clean, crisp, refreshingly straightforward profiles.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Mouthfeel and Texture</h3>
                        <p className="mt-2">Yeast significantly influences perceived body and texture. Certain strains enhance fullness and viscosity, while others yield drier, more attenuated finishes.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#1C1A14]">► Stability and Preservation</h3>
                        <p className="mt-2">During fermentation, yeast scavenges residual oxygen and reduces pH, inhibiting spoilage organisms and extending shelf stability without artificial preservatives.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    The Craft Beer Fermentation Process
                </h2>
                <p className="mb-6">
                    Transforming freshly brewed wort into finished craft beer fundamentally depends on fermentation—the stage where sugars convert to alcohol and signature flavors crystallize. After boiling and cooling to appropriate temperatures, wort transfers to fermentation vessels. At this stage, it remains essentially "sugar water," requiring yeast inoculation to initiate transformation.
                </p>
                <p className="mb-6">
                    However, craft beer's distinction emerges not from mere alcohol production, but from the nuanced secondary compounds generated throughout fermentation. Depending on yeast strain, temperature regimes, and fermentation management, brewers cultivate layered aromatics ranging from tropical fruit to herbaceous to profoundly complex flavor dimensions. Consequently, identical ingredient recipes fermented with different yeasts can yield strikingly divergent sensory profiles.
                </p>
                <p className="mb-6">
                    Fermentation duration varies considerably—light styles may complete primary fermentation within days, while complex, high-gravity beers benefit from extended multi-week fermentations. Post-primary conditioning periods, ranging from weeks to months, allow flavor integration, harsh edges to mellow, and overall profiles to achieve harmonious balance.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Premium Craft Brewery in Ho Chi Minh City
                </h2>
                <p className="mb-4">
                    For an authentic craft beer experience in Tan Phu District, CREAT Craft Beer remains the definitive destination. Located at 93 Street 11, Tay Thanh Ward, CREAT delivers an inviting, creatively designed space ideal for exploring the craft beer universe.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Address:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    },
    "hoa-bia-la-gi-vai-tro-cua-hoa-bia-trong-bia-thu-cong": {
        breadcrumbTitle: "Hoa bia là gì? Vai trò...",
        title: "Hoa bia là gì? Vai trò của hoa bia trong bia thủ công",
        date: "20 Tháng 3, 2026",
        category: "Kiến thức",
        author: "Creat Craft",
        image: "https://creatcraft.com.vn/upload/news/creat-craft-9-6152.jpg",
        content: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    Hoa bia nhìn qua thì khá giản dị, chỉ là những bông nhỏ màu xanh kết lại thành dạng hình nón nhưng lại gắn liền với hầu hết các loại bia. Đây là cụm hoa của cây Humulus lupulus, một loại cây leo sống lâu năm và từ lâu đã trở thành nguyên liệu quen thuộc trong sản xuất bia, đặc biệt là trong bia thủ công.
                </p>
                <p className="mb-6">
                    Khi tách nhẹ một bông hoa, bên trong sẽ lộ ra lớp lupulin màu vàng và chỉ cần chà nhẹ là đã thấy mùi hương lan ra khá rõ, kèm theo cảm giác hơi dính ở đầu ngón tay. Phần này mới là thứ người nấu bia thực sự quan tâm, vì nó quyết định vị đắng, hương thơm và cả độ sâu của bia sau khi hoàn thành. Thành ra, nói đến hoa bia không chỉ là nói đến một nguyên liệu, mà gần như đang nhắc đến yếu tố định hình phong cách cho từng dòng bia.
                </p>
                <p className="mb-6">
                    Trên thế giới, hoa bia thường được trồng ở những vùng có khí hậu ôn đới, nơi điều kiện thời tiết ổn định giúp cây phát triển đều và cho chất lượng tốt, như Đức, Cộng hòa Séc, Mỹ hay New Zealand. Ở Việt Nam, dù chưa phổ biến, việc trồng thử nghiệm cũng đã xuất hiện ở một số khu vực có khí hậu mát như Sơn La, Lạng Sơn, Mộc Châu hay Đà Lạt, mở ra thêm hướng tiếp cận nguồn nguyên liệu trong nước.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Sơ lược về hoa bia
                </h2>
                <p className="mb-6">
                    Hoa bia được Carl von Linné mô tả khoa học từ năm 1753 và đến nay vẫn là nguyên liệu quen thuộc trong ngành sản xuất bia. Đây là loài cây sống lâu năm, có thể tồn tại từ 30 đến 40 năm, phát triển theo dạng leo và khi đủ điều kiện có thể vươn cao khoảng 10–15m. Trong tự nhiên, cây hoa bia có sự phân tách rõ giữa cây đực và cây cái và trong sản xuất bia người ta chỉ sử dụng hoa cái khi chưa thụ phấn vì đây là phần chứa nhiều hợp chất tạo hương vị nhất.
                </p>
                <p className="mb-6">
                    Xét về hình thái, cây hoa bia thuộc nhóm thân thảo, thân mềm nhưng phát triển rất nhanh theo dạng quấn. Lá có chiều dài khoảng 4–8cm, phần gốc có dạng hình tim, sau đó xẻ sâu thành nhiều thùy với đỉnh nhọn và mép có răng cưa. Hoa đực thường mọc thành chùm màu vàng lục ở nách lá, còn hoa cái tập trung ở đầu cành và kết lại thành các nón nhỏ, mỗi nón gồm nhiều lớp lá bắc xếp chồng lên nhau, bên trong chứa các hoa cái nhỏ và về sau có thể phát triển thành quả.
                </p>
<p className="mb-6">
                    Đi sâu vào bên trong nón hoa, lớp lupulin màu vàng là phần quan trọng nhất vì đây là nơi tập trung gần như toàn bộ các hợp chất tạo nên hương và vị của bia. Khi chà nhẹ, có thể cảm nhận rõ mùi thơm và độ dính, cũng từ đây mà các nhóm chất chính được hình thành:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6 text-[#2C2416]">
                    <li>Tinh dầu, chiếm khoảng 1–2%, quyết định phần lớn mùi hương của hoa bia</li>
                    <li>Nhựa và các acid đắng, liên quan trực tiếp đến vị đắng và hậu vị của bia</li>
                    <li>Tanin (khoảng 3–5%) cùng các hợp chất phụ, ảnh hưởng đến cấu trúc và cảm giác khi uống</li>
                </ul>

                <p className="mb-6">
                    Riêng phần tinh dầu, hai hợp chất humulen và myrcen thường chiếm tới 80–90%, nên gần như quyết định hướng hương chính, trong khi một số thành phần khác khi bị oxy hóa có thể tạo ra mùi đặc trưng của hoa bia khô.
                </p>
                <p className="mb-6">
                    Bên cạnh đó, phần nhựa trong lupulin lại là yếu tố tạo nên vị đắng của bia. Các acid đắng như humulon và lupulon khi đi qua quá trình nấu sẽ biến đổi và góp phần tạo ra vị đắng đặc trưng, đồng thời ảnh hưởng đến hậu vị và độ cân bằng tổng thể. Ngoài ra, hoa bia còn chứa thêm nhiều hợp chất khác như acid hữu cơ, este, các base chứa nitơ (adenin, arginin, cholin…) và một lượng nhỏ alcaloid bay hơi, tất cả cùng tham gia vào việc hoàn thiện cấu trúc hương vị.
                </p>
                <p className="mb-6 italic text-[#C8963E] border-l-2 border-[#C8963E] pl-4">
                    Nhìn tổng thể, hoa bia là sự kết hợp của nhiều nhóm chất khác nhau, chứ không đơn thuần chỉ để tạo đắng hay tạo mùi. Vì vậy, khi nấu bia thủ công, chỉ cần thay đổi giống hoa hoặc cách sử dụng trong từng giai đoạn, hương vị cuối cùng cũng có thể khác đi khá rõ rệt.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Hoa bia đóng vai trò thế nào trong nấu bia thủ công
                </h2>
                <p className="mb-6">
                    Nói về hoa bia trong bia thủ công mà chỉ gói gọn trong hai chữ “tạo đắng” thì thật ra chưa đủ. Khi bắt tay vào nấu, người ta quan tâm nhiều hơn đến phần lupulin nằm bên trong bông hoa, vì chỉ cần bóp nhẹ là đã thấy lớp nhựa vàng dính ra tay, kèm theo mùi hương bốc lên rất rõ. Chính từ phần này, bia bắt đầu hình thành cả vị lẫn hương theo cách khá tự nhiên, không tách rời nhau.
                </p>
                <p className="mb-6">
                    Khi hoa bia được đưa vào nồi nấu, nhiệt độ cao sẽ giúp phần nhựa chuyển hóa và tạo ra vị đắng, nhưng cái hay là vị đắng này không đứng riêng lẻ mà đi cùng với malt, làm cho tổng thể cân lại, uống vào không bị ngọt gắt. Cùng lúc đó, tinh dầu trong hoa bia cũng bắt đầu giải phóng, chỉ là nếu để lâu ở nhiệt cao thì mùi sẽ bay đi mất, nên người nấu thường phải canh thời điểm. Cho vào sớm thì lấy vị, giữ lại về cuối hoặc thêm sau khi lên men thì giữ được hương, và chỉ cần thay đổi một chút ở bước này thôi là bia đã ra hai kiểu khác nhau rồi.
                </p>
<p className="mb-6">
                    Cũng vì vậy mà không có chuyện dùng loại hoa bia nào cũng giống nhau. Có loại cho vị đắng rất rõ, có loại lại thơm kiểu cam quýt, có loại thì thiên về mùi trái cây nhiệt đới, và khi đem phối với nhau thì hương lại thay đổi thêm một lần nữa. Người nấu bia lúc này không chỉ chọn nguyên liệu, mà gần như đang “pha trộn mùi vị”, thử cái này một chút, thêm cái kia một chút, đến khi thấy hợp thì giữ lại thành công thức riêng.
                </p>
                <p className="mb-6">
                    Đến mùa thu hoạch, nhiều người làm bia sẽ trực tiếp đi chọn hoa bia thay vì mua sẵn, bởi lúc này họ có thể cầm tận tay, chà nhẹ trong lòng bàn tay để ngửi mùi thật. Cảm giác đó rất khác so với việc chỉ nhìn thông số hay đọc mô tả, vì chỉ cần ngửi là có thể hình dung được loại bia mình muốn làm sẽ nghiêng về hướng nào, từ đó quyết định cách sử dụng hoa bia ngay từ đầu.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Các phân loại hoa bia khi nấu bia thủ công
                </h2>
                <p className="mb-6">
                    Khi bắt đầu làm quen với hoa bia, nhiều người thường nghĩ mỗi loại chỉ khác nhau ở tên gọi. Nhưng khi đi sâu vào cách sử dụng trong nấu bia thủ công, người ta lại nhìn theo một hướng khác: hoa bia được chọn dựa trên việc nó đóng góp gì cho bia, thiên về hương, về vị đắng hay cân bằng cả hai. Từ đó, có thể chia thành ba nhóm khá rõ ràng để dễ hình dung khi sử dụng.
                </p>
<div className="space-y-6 mb-10">
                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-l-4 border-[#C8963E]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-2">► Hoa bia tạo hương (Aroma hops)</h3>
                        <p className="text-sm mb-3 text-[#D5C6B1]">Nhóm này thường được dùng khi người nấu muốn giữ lại mùi hương rõ ràng trong bia. Những giống như Saaz, Hallertau hay Tettnang không tạo vị đắng quá mạnh, nhưng lại mang đến cảm giác nhẹ nhàng, thiên về thảo mộc, hoa hoặc một chút gia vị. Fuggle thì khác hơn một chút, hương trầm hơn, gợi cảm giác gỗ và đất, rất đặc trưng trong các dòng bia Anh.</p>
                        <p className="text-sm text-[#D5C6B1]">Vì tinh dầu dễ bay hơi, những loại hoa bia này thường được thêm vào cuối quá trình đun hoặc trong giai đoạn lên men để giữ được mùi hương tốt nhất. Nhờ đó, chúng xuất hiện khá nhiều trong các dòng như Pilsner, Helles, wheat beer hay English Ale, nơi hương thơm đóng vai trò chính.</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-l-4 border-[#C8963E]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-2">► Hoa bia tạo vị đắng (Bittering hops)</h3>
                        <p className="text-sm mb-3 text-[#D5C6B1]">Trái với nhóm tạo hương, những giống hoa bia này được chọn chủ yếu để tạo vị đắng làm nền cho bia. Magnum là kiểu đắng khá “sạch”, dễ kiểm soát nên thường được dùng làm nền cho nhiều công thức. Warrior thì đẩy vị đắng lên mạnh hơn nhưng lại không mang nhiều hương, còn Columbus ngoài vị đắng còn có thêm chút cay và mùi nhựa thông khá rõ.</p>
                        <p className="text-sm text-[#D5C6B1]">Vì mục tiêu là chiết xuất vị đắng, các loại này thường được cho vào từ sớm trong quá trình đun sôi. Nhóm này xuất hiện nhiều trong Lager, IPA hay Double IPA, nơi phần thân vị cần rõ và có lực.</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-l-4 border-[#C8963E]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-2">► Hoa bia đa dụng (Dual-purpose hops)</h3>
                        <p className="text-sm mb-3 text-[#D5C6B1]">Nằm giữa hai nhóm trên là những loại hoa bia có thể làm được cả hai việc, vừa tạo vị đắng, vừa mang lại hương thơm rõ ràng. Cascade là một ví dụ quen thuộc với hương cam, chanh tươi khá dễ nhận biết. Centennial cũng đi theo hướng này nhưng có thêm chiều sâu với chút nhựa thông bên cạnh hương cam quýt.</p>
                        <p className="text-sm text-[#D5C6B1]">Nhờ sự linh hoạt này, các giống hoa bia đa dụng được dùng rất nhiều trong IPA, Pale Ale hay American Ale, đặc biệt khi người nấu muốn giữ sự cân bằng giữa hương và vị mà không cần quá nhiều loại hoa khác nhau.</p>
                    </div>
                </div>

                <p className="mb-6 font-medium text-[#2C2416] p-4 bg-[#F8F3EB] border border-[#E8DFC8] rounded-md">
                    Thực tế, việc phân loại như vậy không nhằm tách biệt hoàn toàn, mà để giúp người nấu dễ hình dung cách sử dụng. Một mẻ bia thường sẽ kết hợp nhiều loại hoa bia, có loại tạo nền vị đắng từ đầu, có loại được thêm sau để tạo hương, tất cả phối lại với nhau để tạo nên tổng thể hài hòa và có cá tính riêng.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Xưởng nấu bia thủ công chất lượng tại TP.HCM
                </h2>
                <p className="mb-4">
                    Nếu bạn đang tìm một địa chỉ thưởng thức bia thủ công tại Phường Tân Phú, CREAT Craft Beer chính là điểm đến bạn không nên bỏ qua. Tọa lạc tại 93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình, CREAT mang đến một không gian thưởng bia vừa gần gũi, vừa sáng tạo, phù hợp cho những ai muốn khám phá thế giới craft beer theo cách chân thật và chất lượng nhất.
                </p>
                <p className="mb-6">
                    CREAT Craft Beer được xây dựng với định hướng trở thành nơi hội tụ của cộng đồng yêu bia thủ công tại Tân Phú nói riêng và TP.HCM nói chung. Quán sở hữu danh sách bia được chọn lọc kỹ càng từ các microbrewery uy tín trong và ngoài nước, đảm bảo mỗi dòng bia đều mang hương vị độc đáo và câu chuyện riêng. Từ IPA thơm ngát hoa bia, Stout đậm vị cà phê, cacao, Wheat Ale nhẹ nhàng, cho đến các dòng Saison, Sour hay những loại bia theo mùa được cập nhật liên tục, tất cả đều được tuyển chọn nhằm mang đến trải nghiệm “đúng chất” craft beer.
                </p>
<p className="mb-6">
                    Không chỉ tập trung vào chất lượng bia, CREAT còn chú trọng tạo nên một không gian thưởng thức hài hòa giữa nghệ thuật và sự thư giãn. Thiết kế quán kết hợp ánh sáng ấm, nội thất gỗ, điểm nhấn sáng tạo giúp người uống cảm thấy thoải mái từ lần đầu bước vào. Đây là nơi lý tưởng để bạn nhâm nhi một ly bia sau giờ làm, tụ họp bạn bè cuối tuần hoặc đơn giản là tìm một không gian nhẹ nhàng để “chill”.
                </p>
                <p className="mb-6">
                    Điểm mạnh khiến CREAT Craft Beer trở thành địa chỉ uy tín chính là phong cách phục vụ tận tâm và hiểu biết. Đội ngũ nhân viên luôn sẵn sàng tư vấn hương vị bia phù hợp với khẩu vị của từng khách, từ người mới bắt đầu uống craft đến những tín đồ sành sỏi. Cùng với đó, quán thường xuyên tổ chức các sự kiện thử bia, workshop, ra mắt dòng bia mới… giúp khách hàng luôn cảm nhận được sự thú vị và đổi mới trong từng lần ghé quán.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghị)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Địa Chỉ:</strong> 93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh</li>
                    </ul>
                </div>

            </>
        ),
        content_en: (
            <>
                <p className="text-lg leading-relaxed text-[#2C2416] font-medium mb-8">
                    At first glance, hops appear deceptively simple—small, greenish cone-shaped flowers from the Humulus lupulus plant. Yet these modest botanical structures have become absolutely fundamental to modern beer production, particularly within the craft brewing sector. When you gently separate a fresh hop cone, you'll immediately encounter a vibrant yellow substance called lupulin. A light rub releases an intense, resinous aroma alongside a subtle stickiness on your fingertips. This lupulin is precisely what brewers prize, as it fundamentally determines bitterness profiles, aromatic complexity, and overall flavor depth in finished beer.
                </p>
                <p className="mb-6">
                    Globally, hop cultivation concentrates in temperate climate zones offering stable weather patterns conducive to consistent quality—regions like Germany, Czech Republic, the United States, and New Zealand. In Vietnam, while not yet widespread, experimental cultivation has emerged in cooler highland areas including Son La, Lang Son, Moc Chau, and Da Lat, progressively opening pathways toward domestic ingredient sourcing.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Botanical Overview
                </h2>
                <p className="mb-6">
                    Carl von Linné first documented hops scientifically in 1753, and they remain an irreplaceable brewing ingredient to this day. This perennial climbing plant can survive 30–40 years, reaching impressive heights of 10–15 meters under optimal conditions. Hops are dioecious, meaning male and female flowers grow on separate plants. For brewing purposes, only unpollinated female flowers are utilized, as these contain the highest concentration of flavor-active compounds.
                </p>
                <p className="mb-6">
                    The lupulin glands nestled within hop cones house virtually all compounds responsible for beer's signature aroma and bitterness. Key constituents include:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6 text-[#2C2416]">
                    <li>Essential oils (1–2%), which primarily dictate aromatic character</li>
                    <li>Resins and bitter acids, directly influencing bitterness and aftertaste</li>
                    <li>Tannins (3–5%) and secondary compounds, affecting mouthfeel and structural integrity</li>
                </ul>

                <p className="mb-6">
                    Within the essential oil fraction, humulene and myrcene typically account for 80–90% of total oils, essentially defining the dominant aromatic direction.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Functional Roles in Craft Brewing
                </h2>
                <p className="mb-6">
                    Describing hops merely as "bittering agents" grossly oversimplifies their multifaceted contributions. When introduced during the boil, elevated temperatures isomerize alpha acids, generating the characteristic bitterness that counterbalances malt sweetness. Simultaneously, volatile aromatic compounds are released—though prolonged exposure to high heat causes these delicate elements to dissipate. Strategic timing is critical: early additions maximize bitterness extraction, while late additions or post-fermentation "dry hopping" preserve aromatic intensity.
                </p>
<p className="mb-6">
                    Different hop varieties impart distinctly different sensory profiles—some deliver clean bitterness, others contribute citrus notes, while still others evoke tropical fruit or earthy, herbaceous qualities. Skilled brewers don't merely select ingredients; they orchestrate complex flavor symphonies through precise varietal blending and meticulous addition scheduling.
                </p>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Hop Classifications for Brewing
                </h2>
                <p className="mb-6">
                    Hops are functionally categorized based on their primary contributions to finished beer rather than botanical taxonomy. This practical framework helps brewers select appropriate varieties for specific stylistic objectives.
                </p>

                <div className="space-y-6 mb-10">
                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-l-4 border-[#C8963E]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-2">► Aroma Hops</h3>
                        <p className="text-sm mb-3 text-[#D5C6B1]">Varieties like Saaz, Hallertau, and Tettnang are prized for their delicate, refined aromatic profiles featuring floral, herbaceous, or subtly spicy notes. These low-alpha varieties contribute minimal bitterness, making them ideal for late-stage or post-fermentation additions that preserve volatile aromatics. They're foundational to traditional European styles including Pilsner, Helles, and Wheat Beer.</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-l-4 border-[#C8963E]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-2">► Bittering Hops</h3>
                        <p className="text-sm mb-3 text-[#D5C6B1]">High-alpha varieties such as Magnum, Warrior, and Columbus are selected primarily for efficient bitterness delivery with minimal aromatic contribution. Added early in the boil, these hops provide a clean, assertive bitter backbone essential for balanced Lagers, IPAs, and Double IPAs.</p>
                    </div>

                    <div className="bg-[#1C1A14] text-[#F8F3EB] p-6 rounded-md shadow-lg border-l-4 border-[#C8963E]">
                        <h3 className="text-xl font-bold text-[#C8963E] mb-2">► Dual-Purpose Hops</h3>
                        <p className="text-sm mb-3 text-[#D5C6B1]">Versatile varieties like Cascade and Centennial effectively serve both bittering and aromatic functions. Their balanced alpha acid content combined with pronounced citrus and floral aromatics make them workhorses in American Pale Ales and IPAs, offering brewers exceptional formulation flexibility.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1C1A14] mb-4 mt-10" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Premium Craft Beer Experience in Ho Chi Minh City
                </h2>
                <p className="mb-4">
                    For those seeking an authentic craft beer experience in Tan Phu District, CREAT Craft Beer stands as the definitive destination. Located at 93 Street 11, Tay Thanh Ward, CREAT offers an inviting, creatively designed space perfect for exploring the craft beer universe.
                </p>

                <div className="bg-white p-6 border-l-4 border-[#C8963E] shadow-sm my-8">
                    <h3 className="text-xl font-bold text-[#C8963E] mb-3">CREAT - CRAFT BEER</h3>
                    <ul className="space-y-2 text-[#2C2416]">
                        <li><strong>Hotline:</strong> 0989 354 444 (Mr. Nghi)</li>
                        <li><strong>Email:</strong> creatcraftbeer@gmail.com</li>
                        <li><strong>Address:</strong> 93 Street 11, Tay Thanh Ward, Ho Chi Minh City</li>
                    </ul>
                </div>

            </>
        )
    }
}

