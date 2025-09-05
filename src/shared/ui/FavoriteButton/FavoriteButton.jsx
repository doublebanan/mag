import { useFavoriteStore } from "../../../features/profile-favorites/model/useFavoriteStore";
import HeartIcon from "../../assets/icons/heart.svg?react";
import clsx from "clsx";

import styles from "./FavoriteButton.module.css";

export const FavoriteButton = ({ product, size = "medium" }) => {
    const tgId = 1;
    const favorite = useFavoriteStore((s) => s.ids.has(Number(product.id)));
    const toggle = useFavoriteStore((s) => s.toggleFavorite);
    const busy = useFavoriteStore((s) => s.actionLoading);

    if (!product) return null;

    return (
        <button
            onClick={() => toggle(tgId, product.id)}
            className={styles.button}
            disabled={busy}
        >
            <HeartIcon
                className={clsx(styles.icon, styles[size], {
                    [styles.active]: favorite,
                })}
            />
        </button>
    );
};
