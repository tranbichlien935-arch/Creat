import { Products } from "../components/Products";
import { PageBanner } from "../components/PageBanner";
import { useAppLang } from "../hooks/useAppLang";
import { translations } from "../translations";

export function ProductsPage() {
    const { lang } = useAppLang();
    const t = translations[lang];

    return (
        <main>
            <PageBanner title={t.productsPageTitle} breadcrumb={t.productsPageBreadcrumb} />
            <Products />
        </main>
    );
}
