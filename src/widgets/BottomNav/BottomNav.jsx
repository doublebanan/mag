import { Link, useLocation } from "react-router-dom";

import styles from "./BottomNav.module.css";

import HomeIcon from "../../shared/assets/icons/home.svg?react";
import TrashIcon from "../../shared/assets/icons/trash.svg?react";
import UserIcon from "../../shared/assets/icons/user.svg?react";

export const BottomNav = () => {
    const { pathname } = useLocation();

    return (
        <nav className={styles.nav}>
            <Link
                to="/catalog"
                className={pathname === "/catalog" ? styles.active : ""}
            >
                <HomeIcon className={styles.icon} />
                <div className={styles.title}>каталог</div>
            </Link>
            <Link
                to="/cart"
                className={pathname === "/cart" ? styles.active : ""}
            >
                <TrashIcon className={styles.icon} />
                <div className={styles.title}>корзина</div>
            </Link>
            <Link
                to="/profile"
                className={pathname === "/profile" ? styles.active : ""}
            >
                <UserIcon className={styles.icon} />
                <div className={styles.title}>профиль</div>
            </Link>
        </nav>
    );
};
