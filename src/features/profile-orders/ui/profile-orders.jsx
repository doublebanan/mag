import styles from "./profile-orders.module.css";

export const OrdersList = () => {
    return (
        <div className={styles.tabContent}>
            <h3 className={styles.subtitle}>История заказов</h3>
            <div className={styles.orderList}>
                {/* Будет список заказов */}
                <div className={styles.emptyState}>
                    <p>Вы ещё не сделали ни одного заказа</p>
                    <button className={styles.actionButton}>
                        Перейти в каталог
                    </button>
                </div>
            </div>
        </div>
    );
};
