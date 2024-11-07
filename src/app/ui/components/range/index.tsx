import { useState } from "react";

import { IOptionParams } from "../lib/interfaces/service.interface";

import styles from "./style.module.scss";

export default function Range({ value, setValue, min, max }: IOptionParams) {

    const [v, setV] = useState(0)

    const handleValue = (o: '+' | '-' | '_', num: number) => {
        let res = 0
        if (o === "-"){
            if (value < 10) {
                setValue(0)
            } else setValue(value - num)
        }
        if (o === "+"){
            if (value > 90) {
                setValue(100)
            } else setValue(value + num)
        }

        if (o === "_"){
            res = num
        }

        setV(res)
        setValue(res)
    }

    return (
        <div className={styles.display}>
            <span>{value}</span>
            <div className={styles.range}>
                <div className={styles.btn} onClick={() => handleValue('-', 10)}>-10</div>
                <div className={styles.btn} onClick={() => handleValue('-', 1)}>-1</div>
                <input type="range" name="" id="" min={min.toString()} max={min.toString()} step={min.toString()} value={v} onChange={(e) => handleValue("_",Number(e.target.value))} />
                <div className={styles.btn} onClick={() => handleValue('+', 1)}>+1</div>
                <div className={styles.btn} onClick={() => handleValue('+', 10)}>+10</div>
            </div>
        </div>
    )
}