import { PageBanner } from "../components/PageBanner";
import { AboutStory } from "../components/about/AboutStory";
import { AboutValues } from "../components/about/AboutValues";
import { AboutWhyUs } from "../components/about/AboutWhyUs";
import { AboutExperience } from "../components/about/AboutExperience";
import { AboutFeatureProducts } from "../components/about/AboutFeatureProducts";
import { AboutGallery } from "../components/about/AboutGallery";

export function AboutPage() {
    return (
        <main className="bg-[#F8F3EB]">
            <PageBanner title="Giới Thiệu" breadcrumb="GIỚI THIỆU" />
            <AboutStory />
            <AboutValues />
            <AboutWhyUs />
            <AboutExperience />
            <AboutGallery />
            <AboutFeatureProducts />
        </main>
    );
}
