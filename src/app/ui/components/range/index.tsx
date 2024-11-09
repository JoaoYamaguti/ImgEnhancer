import { useState } from "react";

import { IOptionParams } from "../../../lib/interfaces/optionsParams.interface";

import styles from "./style.module.scss";

export default function Range({ value, setValue, min, max }: IOptionParams) {

    console.log(value, min, max.toFixed(0))
    
    const [v, setV] = useState(0)

    const handleValue = (o: '+' | '-' | '_', num: number) => {
        if (value !== undefined && setValue !== undefined) {

            let res = 0
            
            if (o === "-" && min !== undefined) {
                if (value < (min + ( min * 0.1)) && num < (min * 0.1) || value >= min) {
                    res = min
                } else res = value + num
            }

            if (o === "+" && max !== undefined) {
                if (value > (max - ( max * 0.1)) && num > (max * 0.1) || value >= max) {
                    res = max
                } else res = value + num
            }

            if (o === "_") {
                res = num
            }

            setV(res)
            setValue(res)
        }
    }

    return (
        <div className={styles.display}>
            <span>{value?.toFixed(1)}</span>
            <div className={styles.range}>
                {/* <div className={styles.btn} onClick={() => handleValue('-', min)}>
                    <span>{min !== undefined && (min)}</span>
                </div>
                <div className={styles.btn} onClick={() => handleValue('-', min*0.1)}>
                    {min !== undefined && (min * 0.1).toFixed(1)}
                </div> */}
                <input type="range" name="" id="" min={min?.toString()} max={max?.toString()} step={1} value={v} onChange={(e) => handleValue("_", Number(e.target.value))} />
                {/* <div className={styles.btn} onClick={() => handleValue('+', max*0.1)}>+{
                    max !== undefined && (max * 0.1).toFixed(1)}
                </div>
                <div className={styles.btn} onClick={() => handleValue('+', max)}>
                    +{max !== undefined && (max)}
                </div> */}
            </div>
        </div>
    )
}