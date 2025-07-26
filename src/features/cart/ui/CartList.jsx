import { useCartStore } from "../model/useCartStore";
import { useFavoriteStore } from "../../profile-favorites/model/useFavoriteStore";

import styles from "./CartList.module.css";

import CrossIcon from "../../../shared/assets/icons/cross.svg?react";
import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

export const CartList = () => {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    return (
        <ul className={styles.cards}>
            {cart.map((product) => {
                const favorite = favorites.some(
                    (item) => item.id === product.id
                );
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
                                onClick={() => toggleFavorites(product)}
                                className={styles.button}
                            >
                                <HeartIcon
                                    className={`${styles.icon} ${
                                        favorite ? styles.active : ""
                                    }`}
                                />
                            </button>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className={styles.button}
                            >
                                <CrossIcon className={styles.icon} />
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
