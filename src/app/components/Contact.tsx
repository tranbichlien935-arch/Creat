import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#EDE5D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8963E]" />
            <span className="text-[#C8963E] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
              Liên Hệ
            </span>
            <span className="w-8 h-px bg-[#C8963E]" />
          </div>
          <h2 className="text-[#1C1A14] mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Kết Nối Với <em className="text-[#C8963E]">Creat</em>
          </h2>
          <p className="text-[#8C7A60] max-w-md mx-auto" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            Chúng tôi luôn sẵn sàng lắng nghe, tư vấn và đồng hành cùng bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="space-y-8 mb-12">
              {[
                {
                  icon: <MapPin size={20} strokeWidth={1.5} />,
                  label: "Địa chỉ",
                  value: "123 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
                },
                {
                  icon: <Phone size={20} strokeWidth={1.5} />,
                  label: "Điện thoại",
                  value: "(+84) 028-123-4567",
                },
                {
                  icon: <Mail size={20} strokeWidth={1.5} />,
                  label: "Email",
                  value: "hello@creatcraftbeer.vn",
                },
                {
                  icon: <Clock size={20} strokeWidth={1.5} />,
                  label: "Giờ mở cửa",
                  value: "Thứ 2 – Chủ nhật: 10:00 – 23:00",
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full border border-[#C8963E]/40 flex items-center justify-center text-[#C8963E] shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[#8C7A60] text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {info.label}
                    </div>
                    <div className="text-[#2C2416] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="aspect-[4/3] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2E2515, #1C1A14)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1709548145082-04d0cde481d4?w=600&h=450&fit=crop&auto=format"
                alt="Địa điểm Creat"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10">
            <h3 className="text-[#1C1A14] mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.5rem" }}>
              Gửi Tin Nhắn
            </h3>

            {sent && (
              <div className="mb-6 p-4 bg-[#C8963E]/10 border border-[#C8963E]/30 text-[#C8963E] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm nhất.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#8C7A60] text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Họ tên
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F8F3EB] border border-transparent focus:border-[#C8963E] outline-none text-[#2C2416] text-sm transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-[#8C7A60] text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F8F3EB] border border-transparent focus:border-[#C8963E] outline-none text-[#2C2416] text-sm transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#8C7A60] text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Chủ đề
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F8F3EB] border border-transparent focus:border-[#C8963E] outline-none text-[#2C2416] text-sm transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  placeholder="Tôi muốn hỏi về..."
                />
              </div>
              <div>
                <label className="block text-[#8C7A60] text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Tin nhắn
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#F8F3EB] border border-transparent focus:border-[#C8963E] outline-none text-[#2C2416] text-sm transition-colors resize-none"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  placeholder="Nội dung tin nhắn..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#1C1A14] text-[#C8963E] py-4 text-xs tracking-widest uppercase hover:bg-[#C8963E] hover:text-white transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                <Send size={14} />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
