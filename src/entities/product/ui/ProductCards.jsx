import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { useCartStore } from "../../../features/cart/model/useCartStore";
import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";
import { useProductsStore } from "../model/useProductStore";

import { Button } from "../../../shared/assets/Button/Button";
import { QtyBox } from "../../../shared/ui/QtyBox/QtyBox";

import styles from "./ProductCards.module.css";

import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

const ProductCards = ({ category }) => {
    const tgId = 1;

    const { loadProducts, getProducts, loading, error } = useProductsStore();

    //начало для запроса

    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const inProductByCart = useCartStore((state) => state.isActive);

    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    // эффект
    useEffect(() => {
        loadProducts(category);
        console.log("hi");
    }, [category, loadProducts]);

    const products = getProducts(category);
    console.log(products);

    const filtered = useMemo(() => {
        if (products === null) return null; // ещё не загружено
        if (!category) return products;
        return products.filter(
            (p) => p.subtitle.toLowerCase() === category.toLowerCase()
        );
    }, [products, category]);

    if (loading || products === null) {
        return <p>Загрузка товаров…</p>;
    }
    if (error) {
        return <p className={styles.error}>Ошибка загрузки: {error}</p>;
    }
    if (filtered.length === 0) {
        return <p>Товаров в категории «{category || "все"}» не найдено.</p>;
    }

    return (
        <ul className={styles.cards}>
            {filtered.map((product) => {
                const count = cart[product.id] || 0;
                const inCart = inProductByCart(product.id);
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
                        <div className={styles.meta}>
                            <Link
                                className={styles.link}
                                to={`/product/${product.id}`}
                            >
                                <h3 className={styles.name}>{product.title}</h3>
                            </Link>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>
                                {product.price} ₽
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
                        {count === 0 ? (
                            <div className={styles.buttonContainer}>
                                <Button
                                    size="small"
                                    className={inCart ? styles.activeBtn : ""}
                                    onClick={() => addToCart(tgId, product.id)}
                                >
                                    Купить
                                </Button>
                            </div>
                        ) : (
                            <div className={styles.box}>
                                <QtyBox
                                    count={count}
                                    onDecrement={() =>
                                        removeFromCart(tgId, product.id)
                                    }
                                    onIncrement={() =>
                                        addToCart(tgId, product.id)
                                    }
                                />
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductCards;
