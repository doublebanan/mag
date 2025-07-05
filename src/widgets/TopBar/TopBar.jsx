import styles from "./TopBar.module.css";

import logo from "../../shared/assets/images/logo.png";

export const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search..."
            />
            <button className={styles.cloudBtn}>
                <img src={logo} alt="#" />
            </button>
        </div>
    );
};
