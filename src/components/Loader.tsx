import styles from "../styles/Loader.module.css";

export default function Loader() {
    return (
        <div className={`${styles.loadingContainer} min-h-screen text-center`}>
            <div className={styles.loadingspinner}>
                <div className={styles.square1}></div>
                <div className={styles.square2}></div>
                <div className={styles.square3}></div>
                <div className={styles.square4}></div>
                <div className={styles.square5}></div>
            </div>
        </div>
    );
}
