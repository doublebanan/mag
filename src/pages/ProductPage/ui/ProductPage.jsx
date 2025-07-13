import { useParams } from "react-router-dom";
import clsx from "clsx";

import { useCartStore } from "../../../features/cart/model/useCartStore";
import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";
import { mockProducts } from "../../../shared/lib/mocks/product";
import { Button } from "../../../shared/assets/ui/Button/Button";
import { useGoToCatalog } from "../../../shared/lib/goToCatalog";

import BackIcon from "../../../shared/assets/icons/back.svg?react";
import HeartIcon from "../../../shared/assets/icons/heart.svg?react";

import styles from "./ProductPage.module.css";

export const ProductPage = () => {
    const { id } = useParams();
    const product = mockProducts.find((item) => item.id === id);
    const goToCatalog = useGoToCatalog();

    const cart = useCartStore((state) => state.cart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const inProductByCart = useCartStore((state) => state.isActive);

    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    const favorite = favorites.some((item) => item.id === product.id);
    const inCart = inProductByCart(product.id);

    if (!product) {
        return <div className={styles.notFound}>Товар не найден</div>;
    }

    return (
        <>
            <div className={styles.back}>
                <button onClick={goToCatalog} className={styles.button}>
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
                <h2 className={styles.title}>{product.name}</h2>
                <div className={styles.imagesWrapper}>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className={styles.image}
                    />
                </div>
                <p className={styles.subTitle}>
                    Описание: Вентилятор Aceline UWTF-4 потребляет 2.5 Вт и
                    получает питание от порта USB.
                </p>
                <div className={styles.valueBlock}>
                    <div className={styles.rating}>
                        <p className={styles.ratingTitle}>
                            Рейтинг: {product.rating.value}
                        </p>
                        <p className={styles.category}>
                            Категория: {product.category}
                        </p>
                    </div>
                    <div className={styles.price}>
                        <p className={styles.priceTitle}>
                            {product.price} {product.currency}
                        </p>
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
