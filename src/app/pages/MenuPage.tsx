import { BeerMenu } from "../components/BeerMenu";
import { PageBanner } from "../components/PageBanner";
import { useAppLang } from "../hooks/useAppLang";
import { translations } from "../translations";

export function MenuPage() {
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <main>
            <PageBanner title={t.menuPageTitle} breadcrumb={t.menuPageBreadcrumb} />
            <BeerMenu />
        </main>
    );
}
