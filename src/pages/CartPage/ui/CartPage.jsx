import { useState } from "react";

import styles from "./CartPage.module.css";

import CrossIcon from "../../../shared/assets/icons/cross.svg?react";
import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

export const CartPage = () => {
    // const [trash, setTrash] = useState(true);

    return (
        <div>
            <h2 className={styles.title}>Корзина</h2>
            <div>
                {/* {trash ? <p>Корзина пуста.</p> : null} */}
                <ul className={styles.cards}>
                    <li className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://c.dns-shop.ru/thumb/st1/fit/320/250/26d0e711aaa09113c141cbf64614aa49/0743b8c34a035b464d83f8528d9f20ea1672a862c70e23db028fdcbbbc75a4ae.jpg"
                                alt="#"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.productMain}>
                            <h3 className={styles.productTitle}>
                                Вентилятор Aceline UWTF-4 голубой
                            </h3>
                        </div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceContainer}>
                                <span className={styles.currentPrice}>
                                    399 ₽
                                </span>
                            </div>
                            <button className={styles.button}>
                                <HeartIcon className={styles.icon} />
                            </button>
                            <button className={styles.button}>
                                <CrossIcon className={styles.icon} />
                            </button>
                        </div>
                    </li>
                    <li className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://c.dns-shop.ru/thumb/st1/fit/320/250/96aaa37c0164d62ecbb6338dd50f7df6/1077aeed794c9352b386674d678278e53c22f912616768ba6935a86f1cda4585.jpg"
                                alt="#"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.productMain}>
                            <h3 className={styles.productTitle}>
                                Вентилятор Scarlett SC-DF111595 черный
                            </h3>
                        </div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceContainer}>
                                <span className={styles.currentPrice}>
                                    599 ₽
                                </span>
                            </div>
                            <button className={styles.button}>
                                <HeartIcon className={styles.icon} />
                            </button>
                            <button className={styles.button}>
                                <CrossIcon className={styles.icon} />
                            </button>
                        </div>
                    </li>
                </ul>
                <div className={styles.promoSection}>
                    <div className={styles.totalPrice}>
                        <input
                            type="text"
                            class={styles.input}
                            placeholder="Промокод"
                        />
                    </div>
                    <div className={styles.promoDetails}>
                        <div className={styles.promoRow}>
                            <span>2 товар</span>
                            <span>998 ₽</span>
                        </div>
                        <div className={styles.promoPrice}>
                            <span>Скидка</span>
                            <span>-70 ₽</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span>Итого</span>
                            <span>882 ₽</span>
                        </div>
                    </div>
                </div>

                <div className={styles.checkoutBlock}>
                    <div className={styles.productCount}>2 товар</div>
                    <div className={styles.priceComparison}>
                        <span className={styles.discountedPrice}>882 ₽</span>
                    </div>
                    <button className={styles.checkoutButton}>
                        К оформлению
                    </button>
                </div>
            </div>
        </div>
    );
};
