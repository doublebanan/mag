import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useProductsStore } from "../../entities/product/model/useProductStore";

import styles from "./TopBar.module.css";

import logo from "../../shared/assets/images/logo.png";

export const TopBar = () => {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(false);

    const location = useLocation();
    const products = useProductsStore((state) => state.getAllProducts()) || [];

    console.log(products);

    const results = query
        ? products.filter((p) =>
              p.title
                  .toLowerCase()
                  .split(" ")
                  .some((word) => word.startsWith(query.toLowerCase()))
          )
        : [];

    const handleBlur = () => setActive(false);

    useEffect(() => {
        handleBlur();
        setQuery("");
    }, [location.pathname]);

    return (
        <div className={styles.topBar}>
            {active && <div className={styles.overlay} onClick={handleBlur} />}
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Поиск..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setActive(true)}
            />
            {active && results.length > 0 && (
                <ul className={styles.results}>
                    {results.map((product) => (
                        <Link
                            className={styles.link}
                            to={`/product/${product.id}`}
                            state={{ from: location.pathname }}
                        >
                            <li key={product.id} className={styles.resultItem}>
                                {product.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
            <button className={styles.cloudBtn}>
                <img src={logo} alt="logo" />
            </button>
        </div>
    );
};
