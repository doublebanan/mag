import { Button } from "../../../shared/assets/Button/Button";
import { useGoToCatalog } from "../../../shared/lib/goToCatalog";

import styles from "./CartEmpty.module.css";

import SadIcon from "../../../shared/assets/icons/sad.svg?react";

export const CartEmpty = () => {
    const goToCatalog = useGoToCatalog();
    return (
        <div className={styles.cartNull}>
            <h2 className={styles.subTitle}>Корзина пуста...</h2>
            <SadIcon className={styles.iconSad} />
            <Button onClick={goToCatalog} size="medium">
                Перейти в каталог
            </Button>
        </div>
    );
};
