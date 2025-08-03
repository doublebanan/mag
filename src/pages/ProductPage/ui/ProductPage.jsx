import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import clsx from "clsx";

import { useSmartGoBack } from "../../../shared/lib/useSmartGoBack";
import { useCartStore } from "../../../features/cart/model/useCartStore";
import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";

import { Button } from "../../../shared/assets/Button/Button";

import { useProductService } from "../../../shared/hooks/useProductServise";

import BackIcon from "../../../shared/assets/icons/back.svg?react";
import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

import styles from "./ProductPage.module.css";

export const ProductPage = () => {
    const goBack = useSmartGoBack();

    const { id } = useParams();

    const { getProduct, clearError } = useProductService();

    const [product, setProduct] = useState(undefined);

    const cart = useCartStore((state) => state.cart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const inProductByCart = useCartStore((state) => state.isActive);

    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);

    //Ошибка где то тут
    const favorites = useFavoriteStore((state) => state.favorites);

    useEffect(() => {
        clearError();
        setProduct(undefined);
        getProduct(id)
            .then((data) => setProduct(data || null))
            .catch(() => setProduct(null));
    }, [id, getProduct, clearError]);

    if (!product) {
        return <div className={styles.notFound}>Товар не найден</div>;
    }

    const favorite = favorites.some((item) => item.id === product.id);
    const inCart = inProductByCart(product.id);

    return (
        <>
            <div className={styles.back}>
                <button onClick={goBack} className={styles.button}>
                    <BackIcon className={styles.icon} />
                </button>
                <button
                    onClick={() => toggleFavorites(product)}
                    className={styles.button}
                >
                    <HeartIcon
                        className={`${styles.icon} ${
                            favorite ? styles.active : ""
                        }`}
                    />
                </button>
            </div>
            <div className={styles.page}>
                <h2 className={styles.title}>{product.title}</h2>
                <div className={styles.imagesWrapper}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={styles.image}
                    />
                </div>
                <p className={styles.subTitle}>
                    Описание: Можно добавить позже..
                </p>
                <div className={styles.valueBlock}>
                    <div className={styles.rating}>
                        <p className={styles.ratingTitle}>
                            Рейтинг: {product.rating}
                        </p>
                        <p className={styles.category}>
                            Категория: {product.category}
                        </p>
                    </div>
                    <div className={styles.price}>
                        <p className={styles.priceTitle}>{product.price} ₽</p>
                    </div>
                </div>
                <div className={styles.btnBlock}>
                    <Button
                        size="medium"
                        className={clsx(
                            styles.buttonBig,
                            inCart && styles.activeBtn
                        )}
                        onClick={() => toggleCart(product)}
                    >
                        {inCart ? "В корзине" : "Купить"}
                    </Button>
                </div>
            </div>
        </>
    );
};
