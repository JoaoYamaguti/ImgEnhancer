import styles from "./style.module.scss";

import { IOptionParams } from "../../../lib/interfaces/optionsParams.interface";
import { useState } from "react";

export default function Number({ label, min, max, setValue }: IOptionParams) {

    const [valid, setValid] = useState(true)

    function handleValue (val: number){
        if(min === undefined || max === undefined || val === undefined) return alert('')
            if (val < min || val > max){
            setValid(false)
        } else {
            setValid(true)

        }

        setValue(val)
    }

    return (
            <div className={styles.display}>
                <span>{label}</span>
                <div className={styles.number}>
                    <span>min:{min}</span>
                    <input className={valid ? styles.valid : styles.invalid} type="number" name="" id="" onChange={(e) => handleValue(parseFloat(e.target.value))} />
                    <span>max:{max}</span>
                </div>
            </div>
    )
}