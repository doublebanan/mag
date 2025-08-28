import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { TopBar } from "../widgets/TopBar/TopBar";
import { CartPage } from "../pages/CartPage";
import { CatalogPage } from "../pages/CatalogPage";
import { ProfilePage } from "../pages/ProfilePage";
import { BottomNav } from "../widgets/BottomNav/BottomNav";
import { ProductPage } from "../pages/ProductPage";
import AdminPanel from "../pages/AdminPanel";

// import { RequireRole } from "../features/auth/ui/RequireRole";
// import { useAuthStore } from "../features/auth/model/useAuthStore";

import styles from "./App.module.css";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <TopBar />
                <main className={styles.scroll}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/catalog" />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/catalog/*" element={<CatalogPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/profile" element={<ProfilePage />} />

                        <Route
                            path="/admin/*"
                            element={<AdminPanel userStaff="admin" />}
                        >
                            <Route
                                index
                                element={<Navigate to="orders" replace />}
                            />
                            <Route path="orders" element={<Orders />} />
                            <Route path="catalog" element={<Catalog />} />
                            <Route path="customers" element={<Customers />} />
                        </Route>
                    </Routes>
                </main>

                <BottomNav />
            </div>
        </BrowserRouter>
    );
}

export default App;
export const Orders = () => <h2>Список заказов</h2>;
export const Catalog = () => <h2>Каталог товаров</h2>;
export const Customers = () => <h2>Список клиентов</h2>;
