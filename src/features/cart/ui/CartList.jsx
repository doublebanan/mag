import { useEffect } from "react";

import { useCartStore } from "../model/useCartStore";
import { useFavoriteStore } from "../../profile-favorites/model/useFavoriteStore";

import { useProductsStore } from "../../../entities/product/model/useProductStore";
import styles from "./CartList.module.css";

import CrossIcon from "../../../shared/assets/icons/cross.svg?react";
import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

export const CartList = () => {
    const tgId = 1;
    const fetchCart = useCartStore((state) => state.fetchCart);
    const loadProducts = useProductsStore((state) => state.loadProducts);

    useEffect(() => {
        fetchCart(tgId);
        loadProducts();
    }, [fetchCart, loadProducts, tgId]);
    //

    const getProductById = useProductsStore((state) => state.getProductById);

    //
    console.log(getProductById);

    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    console.log(cart);

    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    //маппинг ид из каталога продуктов
    const cartItems = Object.entries(cart)
        .map(([id, qty]) => {
            const product = getProductById(String(id));
            return product ? { ...product, qty } : null;
        })
        .filter(Boolean);

    console.log(cartItems);

    return (
        <ul className={styles.cards}>
            {cartItems.map((product) => {
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
                                onClick={() => removeFromCart(tgId, product.id)}
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
