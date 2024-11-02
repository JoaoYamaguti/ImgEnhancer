

import styles from './style.module.scss'

export default function Page() {
    return (
        <main className={styles.enhancer}>

            <form action="" className={styles.form}>

                <select name="options" id="options">
                    <option value="enhance">Enhance</option>
                    <option value="upscale">Upscale</option>
                </select>

                <div className={styles.field}>
                    <label htmlFor="file">Choose or drag a file</label>
                    <input type="file" name="file" id="file" multiple />
                </div>

                <ul>
                    <li>file01.png</li>
                    <li>file01.png</li>
                    <li>file01.png</li>

                </ul>

                <button>Enhance</button>

            </form>

        </main>
    )
}