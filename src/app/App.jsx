import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { TopBar } from "../widgets/TopBar/TopBar";
import { CartPage } from "../pages/CartPage";
import { CatalogPage } from "../pages/CatalogPage";
import { ProfilePage } from "../pages/ProfilePage";
import { BottomNav } from "../widgets/BottomNav/BottomNav";
import { ProductPage } from "../pages/ProductPage";

import style from "./App.module.css";

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <TopBar />
                <main className={style.scroll}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/catalog" />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/catalog/*" element={<CatalogPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </main>
                <BottomNav />
            </div>
        </BrowserRouter>
    );
}

export default App;
