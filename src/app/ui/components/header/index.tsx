"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

import UserNav from "../userNav";

import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

export default function Header() {

    const [user, setUser] = useState(null)
    console.log(usePathname().toString())

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem('user') as string))
    }, [])

    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">
                    ImgEnhancer
                </Link>
            </h1>
            <nav>
                <span><Link href='/enhancer'>Enhance</Link></span>
                {
                    usePathname().toString() != "/session/login" && 
                    (user != null ?
                        <UserNav />
                        :
                        <span>
                            <Link href='/session/login'>Login</Link>
                        </span>)
                }
            </nav>
        </header>
    )
}