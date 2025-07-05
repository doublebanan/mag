import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App";

import styles from "./index.module.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className={styles.container}>
            <div className={styles.app}>
                <App />
            </div>
        </div>
    </StrictMode>
);
