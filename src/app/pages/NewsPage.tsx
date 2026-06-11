import { News } from "../components/News";
import { PageBanner } from "../components/PageBanner";
import { useAppLang } from "../hooks/useAppLang";
import { translations } from "../translations";

export function NewsPage() {
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <main>
            <PageBanner title={t.newsPageTitle} breadcrumb={t.newsPageBreadcrumb} />
            <News />
        </main>
    );
}
