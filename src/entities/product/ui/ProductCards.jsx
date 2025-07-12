import { useState } from "react";
import { Button } from "../../../shared/assets/ui/Button/Button";
import { useCartStore } from "../../../features/cart/model/useCartStore";
import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";

import styles from "./ProductCards.module.css";

import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

const ProductCards = () => {
    const addFormCart = useCartStore((state) => state.addToCart);
    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Вентилятор Aceline UWTF-4 голубой",
            price: 399,
            currency: "₽",
            category: "Вентиляторы",

            rating: {
                value: 4.7,
            },

            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/26d0e711aaa09113c141cbf64614aa49/0743b8c34a035b464d83f8528d9f20ea1672a862c70e23db028fdcbbbc75a4ae.jpg",
            ],
        },
        {
            id: "2",
            name: "Вентилятор Scarlett SC-DF111595 черный",
            price: 599,
            currency: "₽",
            category: "Вентиляторы",

            rating: {
                value: 4.56,
            },

            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/96aaa37c0164d62ecbb6338dd50f7df6/1077aeed794c9352b386674d678278e53c22f912616768ba6935a86f1cda4585.jpg",
            ],
        },
        {
            id: "3",
            name: "Вентилятор HIPER HFF-07 черный",
            price: 799,
            currency: "₽",
            category: "Вентиляторы",

            rating: {
                value: 5,
            },
            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/bed953744911bae61aa0a9e52718ee38/453c4e6406c9beee46b86bca9ffb5f4e385c577413a304584df33b8d64a2b38e.jpg",
            ],
        },
        {
            id: "4",
            name: "Вентилятор Aceline UWTF-4 голубой",
            price: 399,
            currency: "₽",
            category: "Вентиляторы",

            rating: {
                value: 4.7,
            },

            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/26d0e711aaa09113c141cbf64614aa49/0743b8c34a035b464d83f8528d9f20ea1672a862c70e23db028fdcbbbc75a4ae.jpg",
            ],
        },
        {
            id: "5",
            name: "Вентилятор Scarlett SC-DF111595 черный",
            price: 599,
            currency: "₽",
            category: "Вентиляторы",

            rating: {
                value: 4.56,
            },

            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/96aaa37c0164d62ecbb6338dd50f7df6/1077aeed794c9352b386674d678278e53c22f912616768ba6935a86f1cda4585.jpg",
            ],
        },
        {
            id: "6",
            name: "Вентилятор HIPER HFF-07 черный",
            price: 799,
            currency: "₽",
            category: "Вентиляторы",

            rating: {
                value: 5,
            },
            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/bed953744911bae61aa0a9e52718ee38/453c4e6406c9beee46b86bca9ffb5f4e385c577413a304584df33b8d64a2b38e.jpg",
            ],
        },
    ]);

    function onProducts(items) {
        return items.map((product) => {
            const favorite = favorites.some((item) => item.id === product.id);
            return (
                <li key={product.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>{product.name}</h3>
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.rating}>
                            <span>Рейтинг: {product.rating.value} </span>
                            <span> 1 отзыв</span>
                        </div>
                    </div>
                    <div className={styles.priceContainer}>
                        <span className={styles.price}>
                            {product.price} {product.currency}
                        </span>
                        <button
                            onClick={() => toggleFavorites(product)}
                            className={styles.priceButton}
                        >
                            <HeartIcon
                                className={`${styles.icon} ${
                                    favorite ? styles.active : ""
                                }`}
                            />
                        </button>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            size="small"
                            onClick={() => addFormCart(product)}
                        >
                            Купить
                        </Button>
                    </div>
                </li>
            );
        });
    }
    const items = onProducts(products);

    return <>{items}</>;
};

export default ProductCards;
