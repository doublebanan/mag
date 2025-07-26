import { Button } from "../../../shared/assets/Button/Button";
import { useGoToCatalog } from "../../../shared/lib/goToCatalog";

import styles from "./profile-orders.module.css";

export const OrdersList = () => {
    const goToCatalog = useGoToCatalog();
    return (
        <div className={styles.tabContent}>
            <h3 className={styles.subtitle}>История заказов</h3>
            <div className={styles.orderList}>
                {/* Будет список заказов */}
                <div className={styles.emptyState}>
                    <p className={styles.title}>
                        Вы ещё не сделали ни одного заказа
                    </p>
                    <Button onClick={goToCatalog} size="medium">
                        Перейти в каталог
                    </Button>
                </div>
            </div>
        </div>
    );
};
