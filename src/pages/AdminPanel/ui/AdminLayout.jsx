import { NavLink, Outlet } from "react-router-dom";

import { Button } from "../../../shared/assets/Button/Button";
import { useAuthStore } from "../../../features/auth/model/useAuthStore";

import { useGoToCatalog } from "../../../shared/lib/goToCatalog";

import styles from "./AdminLayout.module.css";

export const AdminLayout = ({ userStaff }) => {
    const goToCatalog = useGoToCatalog();

    return (
        <div className={styles.layout}>
            <div className={styles.panel}>
                <h3 className={styles.brand}>Admin Panel</h3>
                <div className={styles.userStaff}>{userStaff}</div>
            </div>
            <nav className={styles.nav}>
                <NavLink
                    to="orders"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    Заказы
                </NavLink>
                <NavLink
                    to="catalog"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    Каталог товаров
                </NavLink>
                <NavLink
                    to="customers"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    Список клиентов
                </NavLink>
            </nav>

            <main className={styles.outlet}>
                <Outlet />
            </main>
            <div className={styles.user}>
                <Button onClick={goToCatalog} size="small">
                    Выйти
                </Button>
            </div>
        </div>
    );
};
