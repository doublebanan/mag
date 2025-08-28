import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSmartGoBack } from "../../../shared/lib/useSmartGoBack";
import { CartControls } from "../../../shared/ui/CartControl/CartControls";
import { FavoriteButton } from "../../../shared/ui/FavoriteButton/FavoriteButton";

import { useProductsStore } from "../../../entities/product/model/useProductStore";

import BackIcon from "../../../shared/assets/icons/back.svg?react";

import styles from "./ProductPage.module.css";

export const ProductPage = () => {
    const goBack = useSmartGoBack();

    const { id } = useParams();

    const getProductById = useProductsStore((s) => s.getProductById);

    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        setProduct(undefined);
        const cached = getProductById(id);
        if (cached) {
            setProduct(cached);
        } else {
            import("../../../shared/api").then(({ apiProducts }) => {
                apiProducts
                    .byId(id)
                    .then((data) => setProduct(data || null))
                    .catch(() => setProduct(null));
            });
        }
    }, [id, getProductById]);

    if (!product) {
        return <div className={styles.notFound}>Товар не найден</div>;
    }

    return (
        <>
            <div className={styles.back}>
                <button onClick={goBack} className={styles.button}>
                    <BackIcon className={styles.icon} />
                </button>
                <FavoriteButton product={product} size={"large"} />
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
                <p className={styles.subTitle}>{product.description}</p>
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
                    <CartControls product={product} size={"medium"} />
                </div>
            </div>
        </>
    );
};
