import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { MenuPage } from "./pages/MenuPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { NewsDetail } from "./pages/NewsDetail";
import { ProductDetail } from "./pages/ProductDetail";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F3EB]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/san-pham" element={<ProductsPage />} />
            <Route path="/san-pham/chi-tiet" element={<ProductDetail />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
            <Route path="/lien-he" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
