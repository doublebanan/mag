import styles from "./profile-payments.module.css";

export const PaymentMethods = () => {
    return (
        <div className={styles.tabContent}>
            <h3 className={styles.subtitle}>Способы оплаты</h3>
            <div className={styles.paymentMethods}>
                <div className={styles.paymentCard}>
                    <div className={styles.cardInfo}>
                        <span>•••• •••• •••• 1234</span>
                        <span>Основной</span>
                    </div>
                    <button className={styles.cardAction}>Удалить</button>
                </div>
                <button className={styles.addButton}>+ Добавить карту</button>
            </div>
        </div>
    );
};
