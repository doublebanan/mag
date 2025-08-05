import { Button } from "../../../shared/assets/Button/Button";
import { useFavoriteStore } from "../model/useFavoriteStore";
import { useCartStore } from "../../cart/model/useCartStore";
import { useGoToCatalog } from "../../../shared/lib/goToCatalog";
import { useToastStore } from "../../../shared/model/useToasterStore";
import { QtyBox } from "../../../shared/ui/QtyBox/QtyBox";

import styles from "./profile-favorites.module.css";
import CrossIcon from "../../../shared/assets/icons/cross.svg?react";

export const FavoritesList = () => {
    const favorites = useFavoriteStore((state) => state.favorites);
    const removeFavorites = useFavoriteStore(
        (state) => state.removeFromFavorites
    );
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const actionLoading = useCartStore((state) => state.actionLoading);
    const cart = useCartStore((state) => state.cart);
    const goToCatalog = useGoToCatalog();
    const { showToast } = useToastStore();

    const tgId = 1;

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
                        const count = cart[product.id] || 0;
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
                                    {count === 0 ? (
                                        <Button
                                            size="medium"
                                            onClick={() => {
                                                addToCart(tgId, product.id);
                                                showToast("Товар добавлен!");
                                            }}
                                        >
                                            Добавить в корзину
                                        </Button>
                                    ) : (
                                        <QtyBox
                                            count={count}
                                            onDecrement={() =>
                                                removeFromCart(tgId, product.id)
                                            }
                                            onIncrement={() =>
                                                addToCart(tgId, product.id)
                                            }
                                            disabled={actionLoading}
                                        />
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
