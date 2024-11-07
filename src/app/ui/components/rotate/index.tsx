import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";

import { IOptionParams } from "../lib/interfaces/service.interface";

export default function Rotate({options, value, setValue}: IOptionParams) {

    return(
        <div className={styles.rotate}>
            <span>degrees:</span>
            <select name="rotate" id="rotate" onChange={(e) => setValue(Number(e.target.value))}>
                <option key={-1} value=""></option>
                {options.map((op, index) => <option key={index} value="op">{op}</option>)}
            </select>
        </div>
    )
}