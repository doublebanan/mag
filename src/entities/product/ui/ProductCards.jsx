import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../../shared/assets/ui/Button/Button";
import { useCartStore } from "../../../features/cart/model/useCartStore";
import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";
import { mockProducts } from "../../../shared/lib/mocks/product";

import styles from "./ProductCards.module.css";

import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

const ProductCards = ({ category }) => {
    const cart = useCartStore((state) => state.cart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const inProductByCart = useCartStore((state) => state.isActive);

    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    const filteredProducts = useMemo(() => {
        if (!category) return mockProducts;
        return category
            ? mockProducts.filter(
                  (p) => p.slug.toLowerCase() === category.toLowerCase()
              )
            : mockProducts;
    }, [category]);

    function onProducts(items) {
        return items.map((product, i) => {
            if (i === 6) return;
            const favorite = favorites.some((item) => item.id === product.id);
            const inCart = inProductByCart(product.id);
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
                        <Link
                            className={styles.link}
                            to={`/product/${product.id}`}
                        >
                            <h3 className={styles.name}>{product.name}</h3>
                        </Link>
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.rating}>
                            <span>Рейтинг: {product.rating.value} </span>
                            <br />
                            <span> 1 отзыв</span>
                        </div>
                    </div>
                    <div className={styles.priceContainer}>
                        <span className={styles.price}>
                            {product.price}

                            {product.currency}
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
                            className={` ${inCart ? styles.activeBtn : ""}`}
                            onClick={() => toggleCart(product)}
                        >
                            {inCart ? "В корзине" : "Купить"}
                        </Button>
                    </div>
                </li>
            );
        });
    }
    const items = onProducts(filteredProducts);

    return <>{items}</>;
};

export default ProductCards;
