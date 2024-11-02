

import styles from './style.module.scss'

export default function Page() {
    return (
        <main className={styles.enhancer}>

            <div>
                <select name="options" id="options">
                    <option value="enhance">Enhance</option>
                    <option value="upscale">Upscale</option>
                </select>

                <div className={styles.field}>
                    <label htmlFor="file">Choose or drag a file</label>
                    <input type="file" name="file" id="file" multiple />
                </div>

                <button>Enhance</button>

            </div>

        </main>
    )
}