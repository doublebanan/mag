import { useEffect } from "react";

import styles from "./Toaster.module.css";

export const Toaster = ({ message, onClose }) => {
    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!message) return null;

    return <div className={styles.toaster}>{message}</div>;
};
