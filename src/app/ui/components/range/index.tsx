import { useState } from "react";
import styles from "./style.module.scss";

export default function Range({ value, setValue, min, max }) {

    const [v, setV] = useState(0)

    const handleValue = (o?: string, num: number) => {
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
                <input type="range" name="" id="" min={1} max={100} step={min} value={v} onChange={(e) => handleValue("_",Number(e.target.value))} />
                <div className={styles.btn} onClick={() => handleValue('+', 1)}>+1</div>
                <div className={styles.btn} onClick={() => handleValue('+', 10)}>+10</div>
            </div>
        </div>
    )
}