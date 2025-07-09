import styles from "./Header.module.css";

export const ProfileHeader = () => {
    return (
        <header className={styles.profileHeader}>
            <div className={styles.avatar}>А</div>
            <div className={styles.userInfo}>
                <h2 className={styles.userName}>Андрей Иванов</h2>
                <p className={styles.userId}>ID: 123456789</p>
            </div>
        </header>
    );
};
