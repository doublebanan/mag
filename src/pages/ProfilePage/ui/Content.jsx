import { FavoritesList } from "../../../features/profile-favorites/ui/profile-favorites";
import { OrdersList } from "../../../features/profile-orders/ui/profile-orders";
import { PaymentMethods } from "../../../features/profile-payments/ui/profile-payments";

import styles from "./Content.module.css";

export const ProfileContent = ({ activeTab }) => {
    return (
        <main className={styles.content}>
            {activeTab === "favorites" && <FavoritesList />}
            {activeTab === "orders" && <OrdersList />}
            {activeTab === "payments" && <PaymentMethods />}
        </main>
    );
};
