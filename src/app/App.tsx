import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { BeerMenu } from "./components/BeerMenu";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F3EB]">
      <Navbar />
      <main>
        <HeroSlider />
<About />
        <Products />
        <BeerMenu />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
