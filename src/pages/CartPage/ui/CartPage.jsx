import { CartList } from "../../../features/cart/ui/CartList";
import { useCartStore } from "../../../features/cart/model/useCartStore";
import { Button } from "../../../shared/assets/ui/Button/Button";

import styles from "./CartPage.module.css";

import SadIcon from "../../../shared/assets/icons/sad.svg?react";

export const CartPage = () => {
    const sum = useCartStore((state) => state.getTotalPrice());
    const current = useCartStore((state) => state.getTotalCount());
    const sale = 70;
    const finalPrice = sum === 0 ? 0 : sum - sale;

    return (
        <div>
            <h2 className={styles.title}>Корзина</h2>
            <div>
                <CartList />
                {current === 0 ? (
                    <div className={styles.cartNull}>
                        <h2 className={styles.subTitle}>Корзина пуста...</h2>
                        <SadIcon className={styles.iconSad} />
                        <Button size="medium">Перейти в каталог</Button>
                    </div>
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
