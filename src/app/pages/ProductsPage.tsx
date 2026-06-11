import { Products } from "../components/Products";
import { PageBanner } from "../components/PageBanner";

export function ProductsPage() {
    return (
        <main>
            <PageBanner title="Sản Phẩm" breadcrumb="SẢN PHẨM" />
            <Products />
        </main>
    );
}
