import { useEffect } from "react";

import { useCartStore } from "../model/useCartStore";
import { useFavoriteStore } from "../../profile-favorites/model/useFavoriteStore";
import { useProductsStore } from "../../../entities/product/model/useProductStore";
import { CartControls } from "../../../shared/ui/CartControl/CartControls";
import { Skeleton } from "../../../shared/ui/Skeleton/Skeleton";
import { FavoriteButton } from "../../../shared/ui/FavoriteButton/FavoriteButton";
// import CrossIcon from "../../../shared/assets/icons/cross.svg?react";

import styles from "./CartList.module.css";

export const CartList = () => {
    const tgId = 1;

    const fetchCart = useCartStore((state) => state.fetchCart);
    const loading = useCartStore((state) => state.loading);

    const loadProducts = useProductsStore((state) => state.loadProducts);

    useEffect(() => {
        fetchCart(tgId, false);
        loadProducts();
    }, []);

    const getProductById = useProductsStore((state) => state.getProductById);

    const cart = useCartStore((state) => state.cart);

    const current = useCartStore((state) => state.getTotalCount());

    const favorites = useFavoriteStore((state) => state.favorites);

    //маппинг ид из каталога продуктов
    const cartItems = Object.entries(cart)
        .map(([id, qty]) => {
            const product = getProductById(String(id));
            return product ? { ...product, qty } : null;
        })
        .filter(Boolean);

    if (loading && current > 0) {
        return (
            <ul className={styles.cards}>
                <li className={styles.card}>
                    <Skeleton height={60} />
                </li>
            </ul>
        );
    }

    return (
        <ul className={styles.cards}>
            {cartItems.map((product) => {
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
                            <CartControls product={product} />
                            <div className={styles.priceContainer}>
                                <span className={styles.currentPrice}>
                                    {product.price} P
                                </span>
                            </div>
                            <FavoriteButton product={product} />
                            {/* <button
                                onClick={() => removeFromCart(tgId, product.id)}
                                className={styles.button}
                            >
                                <CrossIcon className={styles.icon} />
                            </button> */}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
