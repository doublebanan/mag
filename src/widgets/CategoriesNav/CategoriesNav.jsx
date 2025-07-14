import { useRef } from "react";
import { NavLink } from "react-router-dom";

import styles from "./CategoriesNav.module.css";

import LaptopIcon from "../../shared/assets/icons/laptop.svg?react";
import MobileIcon from "../../shared/assets/icons/mobile.svg?react";
import TvIcon from "../../shared/assets/icons/tv.svg?react";
import FanIcon from "../../shared/assets/icons/fan.svg?react";

export const CategoriesNav = () => {
    const navRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        startX.current = e.pageX - navRef.current.offsetLeft;
        scrollLeft.current = navRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - navRef.current.offsetLeft;
        const walk = (x - startX.current) * 1;
        navRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const categories = [
        {
            path: "fan",
            label: "Вентиляторы",
            icon: <FanIcon className={styles.icon} />,
        },
        {
            path: "tv",
            label: "Телевизоры",
            icon: <TvIcon className={styles.icon} />,
        },
        {
            path: "mobile",
            label: "Смартфоны",
            icon: <MobileIcon className={styles.icon} />,
        },
        {
            path: "laptop",
            label: "Ноутбуки",
            icon: <LaptopIcon className={styles.icon} />,
        },
    ];

    return (
        <>
            <div className={styles.subtitle}>Категории</div>
            <nav
                ref={navRef}
                className={styles.nav}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
            >
                {categories.map((cat) => (
                    <NavLink
                        key={cat.path}
                        to={`/catalog/${cat.path}`}
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        {cat.icon}
                        <div className={styles.title}>{cat.label}</div>
                    </NavLink>
                ))}
            </nav>
        </>
    );
};
