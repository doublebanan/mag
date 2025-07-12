import styles from "./profile-payments.module.css";
import { Button } from "../../../shared/assets/ui/Button/Button";

export const PaymentMethods = () => {
    return (
        <div className={styles.tabContent}>
            <div className={styles.title}>
                <h3 className={styles.subtitle}>Баланс</h3>
                <div className={styles.sum}>500 ₽</div>
            </div>
            <div className={styles.paymentMethods}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Введите сумму..."
                />
                <Button size="medium">Пополнить баланс</Button>
            </div>
        </div>
    );
};
