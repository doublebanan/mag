import styles from "./QtyBox.module.css";

export const QtyBox = ({ count, onDecrement, onIncrement }) => {
    return (
        <div className={styles.qtyBox}>
            <button
                onClick={onDecrement}
                className={styles.qtyBtn}
                disabled={count <= 0}
            >
                -
            </button>
            <span className={styles.qtyNumber}>{count}</span>
            <button onClick={onIncrement} className={styles.qtyBtn}>
                +
            </button>
        </div>
    );
};
