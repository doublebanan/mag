import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { useProductsStore } from "../model/useProductStore";
import { CartControls } from "../../../shared/ui/CartControl/CartControls";
import { Skeleton } from "../../../shared/ui/Skeleton/Skeleton";
import { FavoriteButton } from "../../../shared/ui/FavoriteButton/FavoriteButton";

import styles from "./ProductCards.module.css";

const ProductCards = ({ category, sort }) => {
    const { loadProducts, getProducts, loading, error } = useProductsStore();

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
                            <FavoriteButton product={product} size={"medium"} />
                        </div>
                        <div className={styles.buttonContainer}>
                            <CartControls
                                product={product}
                                size={"small"}
                                text={"Купить"}
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductCards;
