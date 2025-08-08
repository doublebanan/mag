import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";
import HeartIcon from "../../assets/icons/heart.svg?react";
import clsx from "clsx";

import styles from "./FavoriteButton.module.css";

export const FavoriteButton = ({ product, size = "medium" }) => {
    const toggleFavorites = useFavoriteStore((state) => state.toggleFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    const favorite = favorites.some((item) => item.id === product.id);
    if (!product) return null;

    return (
        <button
            onClick={() => toggleFavorites(product)}
            className={styles.button}
        >
            <HeartIcon
                className={clsx(styles.icon, styles[size], {
                    [styles.active]: favorite,
                })}
            />
        </button>
    );
};
