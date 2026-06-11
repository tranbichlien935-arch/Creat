import { News } from "../components/News";
import { PageBanner } from "../components/PageBanner";

export function NewsPage() {
    return (
        <main>
            <PageBanner title="Tin Tức" breadcrumb="TIN TỨC" />
            <News />
        </main>
    );
}
