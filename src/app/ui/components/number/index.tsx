import styles from "./style.module.scss";

import { IOptionParams } from "../lib/interfaces/service.interface";

export default function Number({ label, setValue }: IOptionParams) {

    return (
            <div className={styles.display}>
                <span>{label}</span>
                <div className={styles.number}>
                    <input type="number" name="" id="" onChange={(e) => setValue(e.target.value)} />
                </div>
            </div>
    )
}