import styles from"./style.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <h1><a href="">ImgEnhancer</a></h1>
            <nav>
                <a href="">login</a>
            </nav>
        </header>
    )
}