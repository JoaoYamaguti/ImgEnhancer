import styles from "./style.module.scss";

interface RotateParams {
    options:string[]
    value?: number
    setValue: Function
}

export default function Rotate({options, value, setValue}: RotateParams) {

    return(
        <div className={styles.rotate}>
            <span>degrees:</span>
            <select name="rotate" id="rotate" onChange={(e) => setValue(e.target.value)}>
                <option key={-1} value=""></option>
                {options.map((op, index) => <option key={index} value="op">{op}</option>)}
            </select>
        </div>
    )
}