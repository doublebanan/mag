// import { useEffect } from "react";

import { CartList } from "../../../features/cart/ui/CartList";
import { useCartStore } from "../../../features/cart/model/useCartStore";
import { CartEmpty } from "./CartEmpty";

import styles from "./CartPage.module.css";

export const CartPage = () => {
    const sum = useCartStore((state) => state.getTotalPrice());
    const current = useCartStore((state) => state.getTotalCount());
    const sale = 70;
    const finalPrice = sum === 0 ? 0 : sum - sale;

    console.log(sum);

    return (
        <div>
            <h2 className={styles.title}>Корзина</h2>
            <div>
                <CartList />
                {/* {Object.keys(cart).length === 0 && <CartEmpty />} */}
                {current === 0 ? (
                    <CartEmpty />
                ) : (
                    <>
                        <div className={styles.promoSection}>
                            <div className={styles.totalPrice}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Промокод"
                                />
                            </div>
                            <div className={styles.promoDetails}>
                                <div className={styles.promoRow}>
                                    <span>{current} товар</span>
                                    <span>{sum} ₽</span>
                                </div>
                                <div className={styles.promoPrice}>
                                    <span>Скидка</span>
                                    <span>-{sale} ₽</span>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>Итого</span>
                                    <span>{finalPrice} ₽</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.checkoutBlock}>
                            <div className={styles.productCount}>
                                {current} товар
                            </div>
                            <div className={styles.priceComparison}>
                                <span className={styles.discountedPrice}>
                                    {finalPrice} ₽
                                </span>
                            </div>
                            <button className={styles.checkoutButton}>
                                К оформлению
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
