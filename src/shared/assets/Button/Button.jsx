import styles from "./Button.module.css";
import clsx from "clsx";

export const Button = ({
    children,
    variant = "primary",
    size = "medium",
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
