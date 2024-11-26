"use client"

import Link from "next/link"
import Image from "next/image"

import './style.scss'

export default function Back() {

    return (
        <Link href={'/'} className="back">
            <Image
                src={'/voltar-50-b.png'}
                width={30}
                height={30}
                alt="back to home"
            />
        </Link>
    )
}