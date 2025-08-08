import { useToastStore } from "../../model/useToasterStore";
import styles from "./Toaster.module.css";

export const Toaster = () => {
    const { message, visible } = useToastStore();

    return (
        <div className={`${styles.toaster} ${visible ? styles.show : ""}`}>
            {message}
        </div>
    );
};
