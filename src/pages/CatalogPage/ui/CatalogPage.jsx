import ProductCards from "../../../entities/product/ui/ProductCards";
import style from "./CatalogPage.module.css";

export const CatalogPage = () => {
    return (
        <div>
            <h2 className={style.title}>Каталог</h2>
            <ul className="catalog">
                <ProductCards />
            </ul>
        </div>
    );
};
