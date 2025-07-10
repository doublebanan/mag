import { useCartStore } from "../model/useCartStore";

import styles from "./CartList.module.css";

import CrossIcon from "../../../shared/assets/icons/cross.svg?react";
import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

export const CartList = () => {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <ul className={styles.cards}>
            {cart.map((product) => {
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
                            <button className={styles.button}>
                                <HeartIcon className={styles.icon} />
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
