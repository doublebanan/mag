import { Button } from "../../../shared/assets/ui/Button/Button";
import { useFavoriteStore } from "../model/useFavoriteStore";
import { useCartStore } from "../../cart/model/useCartStore";
import { useGoToCatalog } from "../../../shared/lib/goToCatalog";

import styles from "./profile-favorites.module.css";

import CrossIcon from "../../../shared/assets/icons/cross.svg?react";

export const FavoritesList = () => {
    const favorites = useFavoriteStore((state) => state.favorites);
    const removeFavorites = useFavoriteStore(
        (state) => state.removeFromFavorites
    );
    const addForm = useCartStore((state) => state.addToCart);

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
                                        src={product.images[0]}
                                        alt={product.name}
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.productMain}>
                                    <h3 className={styles.productTitle}>
                                        {product.name}
                                    </h3>
                                </div>
                                <div className={styles.priceBlock}>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.currentPrice}>
                                            {product.price} {product.currency}
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
                                    <Button
                                        onClick={() => addForm(product)}
                                        size="medium"
                                    >
                                        Добавить в корзину
                                    </Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
