"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./style.module.scss";
import UserNav from "../userNav";

export default function Header() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(sessionStorage.getItem('user'))
    },[])

    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">
                    ImgEnhancer
                </Link>
            </h1>
            <nav>
                {
                    user != null ? 
                    <UserNav />
                    :
                    <Link href='/session/login'>Login</Link>
                    
                }
            </nav>
        </header>
    )
}