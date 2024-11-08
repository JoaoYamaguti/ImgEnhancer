import { useState } from "react";

import { IOptionParams } from "../../../lib/interfaces/optionsParams.interface";

import styles from "./style.module.scss";

export default function Range({ value, setValue, min, max }: IOptionParams) {

    const [v, setV] = useState(0)

    const handleValue = (o: '+' | '-' | '_', num: number) => {

        if (value !== undefined && setValue !== undefined) {

            let res = 0

            if (o === "-") {
                if (value < (min * 0, 1)) {
                    setValue(0)
                } else setValue(value - num)
            }

            if (o === "+") {
                if (value > 90) {
                    setValue(100)
                } else setValue(value + num)
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
            <span>{value}</span>
            <div className={styles.range}>
                <div className={styles.btn} onClick={() => handleValue('-', (min * -1))}>
                    {min !== undefined && (min)}
                </div>
                <div className={styles.btn} onClick={() => handleValue('-', 1)}>
                    {min !== undefined && (min * 0.1)}
                </div>
                <input type="range" name="" id="" min={min?.toString()} max={max?.toString()} step={0.1} value={v} onChange={(e) => handleValue("_", Number(e.target.value))} />
                <div className={styles.btn} onClick={() => handleValue('+', 1)}>{
                    max !== undefined && (max * 0.1)}
                </div>
                <div className={styles.btn} onClick={() => handleValue('+', 10)}>
                    {max !== undefined && (max)}
                </div>
            </div>
        </div>
    )
}