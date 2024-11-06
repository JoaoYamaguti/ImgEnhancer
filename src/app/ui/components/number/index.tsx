import styles from "./style.module.scss";

export default function Number({ label, value, setValue }) {

    return (
            <div className={styles.display}>
                <span>{label}</span>
                <div className={styles.number}>
                    <input type="number" name="" id="" onChange={(e) => setValue(e.target.value)} />
                </div>
            </div>
    )
}