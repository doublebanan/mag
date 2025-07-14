import { Routes, Route, Navigate } from "react-router-dom";
import { CategoriesNav } from "../../../widgets/CategoriesNav/CategoriesNav";
import ProductCards from "../../../entities/product/ui/ProductCards";

import SettingsIcon from "../../../shared/assets/icons/settings.svg?react";

import styles from "./CatalogLayout.module.css";

export const CatalogPage = () => {
    return (
        <div>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Каталог</h2>
                <button className={styles.button}>
                    <SettingsIcon />
                </button>
            </div>
            <CategoriesNav />
            <Routes>
                <Route path="/" element={<Navigate to="fan" />} />
                <Route path="fan" element={<ProductCards category="fan" />} />
                <Route path="tv" element={<ProductCards category="tv" />} />
                <Route
                    path="mobile"
                    element={<ProductCards category="mobile" />}
                />
                <Route
                    path="laptop"
                    element={<ProductCards category="laptop" />}
                />
            </Routes>
        </div>
    );
};
