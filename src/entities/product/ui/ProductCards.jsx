import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { useCartStore } from "../../../features/cart/model/useCartStore";
import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";
import { useProductsStore } from "../model/useProductStore";

import { Skeleton } from "../../../shared/ui/Skeleton/Skeleton";

import { Button } from "../../../shared/assets/Button/Button";
import { QtyBox } from "../../../shared/ui/QtyBox/QtyBox";

import { useToastStore } from "../../../shared/model/useToasterStore";

import styles from "./ProductCards.module.css";

import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

const ProductCards = ({ category, sort }) => {
    const { showToast } = useToastStore();

    const tgId = 1;

    const actionLoading = useCartStore((state) => state.actionLoading);

    const { loadProducts, getProducts, loading, error } = useProductsStore();

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

    const filtered = useMemo(() => {
        if (products === null) return null;
        let arr = products;

        if (category) {
            arr = arr.filter(
                (p) => p.subtitle.toLowerCase() === category.toLowerCase()
            );
        }

        if (sort === "expensive")
            arr = [...arr].sort((a, b) => b.price - a.price);
        if (sort === "cheap") arr = [...arr].sort((a, b) => a.price - b.price);

        return arr;
    }, [products, category, sort]);

    if (loading) {
        return (
            <ul className={styles.cards}>
                <li className={styles.card}>
                    <Skeleton height={100} />
                </li>
                <li className={styles.card}>
                    <Skeleton height={100} />
                </li>
                <li className={styles.card}>
                    <Skeleton height={100} />
                </li>
                <li className={styles.card}>
                    <Skeleton height={100} />
                </li>
            </ul>
        );
    }

    if (error) {
        return <p className={styles.error}>Ошибка загрузки: {error}</p>;
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
                                state={{ fromCategory: category }}
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
                                    onClick={() => {
                                        addToCart(tgId, product.id);
                                        showToast("Товар добавлен!");
                                    }}
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
                                    disabled={actionLoading}
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
