import { Button } from "../../assets/Button/Button";

import styles from "./SortPanel.module.css";

export const SortPanel = ({ value, onChange, onClose }) => {
    return (
        <div className={styles.sortPanel}>
            <h4>Сортировка</h4>
            <Button onClick={() => onChange("expensive")}>
                Сначала дорогие
            </Button>
            <Button onClick={() => onChange("cheap")}>Сначала дешёвые</Button>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
};
