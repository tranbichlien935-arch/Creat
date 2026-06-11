import { PageBanner } from "../components/PageBanner";
import { AboutStory } from "../components/about/AboutStory";
import { AboutValues } from "../components/about/AboutValues";
import { AboutWhyUs } from "../components/about/AboutWhyUs";
import { AboutExperience } from "../components/about/AboutExperience";
import { AboutFeatureProducts } from "../components/about/AboutFeatureProducts";
import { AboutGallery } from "../components/about/AboutGallery";
import { useAppLang } from "../hooks/useAppLang";
import { translations } from "../translations";

export function AboutPage() {
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <main className="bg-[#F8F3EB]">
            <PageBanner title={t.aboutPageTitle} breadcrumb={t.aboutPageBreadcrumb} />
            <AboutStory />
            <AboutValues />
            <AboutWhyUs />
            <AboutExperience />
            <AboutGallery />
            <AboutFeatureProducts />
        </main>
    );
}
