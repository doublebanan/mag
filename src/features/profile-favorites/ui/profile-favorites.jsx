import styles from "./profile-favorites.module.css";

export const FavoritesList = () => {
    return (
        <div className={styles.tabContent}>
            <h3 className={styles.subtitle}>Избранные товары</h3>
            <div className={styles.emptyState}>
                <p>Пока ничего нет</p>
                <button className={styles.actionButton}>
                    Перейти в каталог
                </button>
            </div>
        </div>
    );
};
