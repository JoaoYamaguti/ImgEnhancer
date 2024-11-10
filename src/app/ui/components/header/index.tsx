"use client"

import Link from "next/link";

import styles from "./style.module.scss";

export default function Header() {

    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">
                    ImgEnhancer
                </Link>
            </h1>
            <nav>
                <Link href='/session/login'>login</Link>
            </nav>
        </header>
    )
}