import styles from "./Skeleton.module.css";

export const Skeleton = ({ height = 32, width = "100%", count = 1, style }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className={styles.skeleton}
                    style={{ height, width, ...style }}
                />
            ))}
        </>
    );
};
