import { Button } from "../../../shared/assets/Button/Button";
import { useFavoriteStore } from "../model/useFavoriteStore";
import { CartControls } from "../../../shared/ui/CartControl/CartControls";
import { useGoToCatalog } from "../../../shared/lib/goToCatalog";

import styles from "./profile-favorites.module.css";
import CrossIcon from "../../../shared/assets/icons/cross.svg?react";

export const FavoritesList = () => {
    const favorites = useFavoriteStore((state) => state.favorites);
    const removeFavorites = useFavoriteStore(
        (state) => state.removeFromFavorites
    );

    const goToCatalog = useGoToCatalog();

    return (
        <div className={styles.tabContent}>
            <h3 className={styles.subtitle}>Избранные товары</h3>
            {favorites.length === 0 ? (
                <div className={styles.catalogState}>
                    <p className={styles.title}>Пока ничего нет</p>
                    <Button onClick={goToCatalog} size="medium">
                        Перейти в каталог
                    </Button>
                </div>
            ) : (
                <ul className={styles.emptyState}>
                    {favorites.map((product) => {
                        return (
                            <li key={product.id} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.productMain}>
                                    <h3 className={styles.productTitle}>
                                        {product.title}
                                    </h3>
                                </div>
                                <div className={styles.priceBlock}>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.currentPrice}>
                                            {product.price} P
                                        </span>
                                    </div>
                                    <button
                                        onClick={() =>
                                            removeFavorites(product.id)
                                        }
                                        className={styles.button}
                                    >
                                        <CrossIcon className={styles.icon} />
                                    </button>
                                </div>
                                <div className={styles.addBlock}>
                                    <CartControls
                                        product={product}
                                        size={"medium"}
                                        text={"Добавить в корзину"}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
