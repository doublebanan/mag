import { useState } from "react";

import styles from "./CartPage.module.css";

export const CartPage = () => {
    // const [trash, setTrash] = useState(true);

    return (
        <div>
            <h2 className={styles.title}>Корзина</h2>
            <div>
                {/* {trash ? <p>Корзина пуста.</p> : null} */}
                <div className={styles.card}>
                    <div className={styles.productMain}>
                        <div className={styles.volumeBadge}>1л</div>
                        <h3 className={styles.productTitle}>
                            Вентилятор Aceline UWTF-4 голубой
                        </h3>
                    </div>
                    <div className={styles.priceBlock}>
                        <div className={styles.priceContainer}>
                            <span className={styles.currentPrice}>873 ₽</span>
                        </div>
                    </div>
                </div>

                <div className={styles.promoSection}>
                    <div className={styles.promoDetails}>
                        <div className={styles.promoRow}>
                            <span>2 товар</span>
                        </div>
                        <div className={styles.promoPrice}>
                            <span>969 ₽</span>

                            <span>при оформлении</span>
                        </div>
                    </div>

                    <div className={styles.totalPrice}>
                        <div className={styles.priceRow}>
                            <span>Итого</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span>873 ₽</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span>Без карты</span>
                            <span>882 ₽</span>
                        </div>
                    </div>
                </div>

                {/* Кнопка оформления */}
                <div className={styles.checkoutBlock}>
                    <div className={styles.productCount}>2 товар</div>
                    <div className={styles.priceComparison}>
                        <span className={styles.discountedPrice}>873 ₽</span>
                    </div>
                    <button className={styles.checkoutButton}>
                        К оформлению
                    </button>
                </div>
            </div>
        </div>
    );
};
