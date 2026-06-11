import { BeerMenu } from "../components/BeerMenu";
import { PageBanner } from "../components/PageBanner";

export function MenuPage() {
    return (
        <main>
            <PageBanner title="Menu Của Chúng Tôi" breadcrumb="MENU" />
            <BeerMenu />
        </main>
    );
}
