import styles from './style.module.scss'

export default function Loading() {
    return (
        <div className={styles.container}>

            <div className={styles.loading}>
                <div></div>
                <span>Loading...</span>
            </div>
        </div>
    )
}