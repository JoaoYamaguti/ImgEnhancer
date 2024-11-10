"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Back() {

    const router = useRouter()

    return (
        <Link href={'/'} replace>
            <Image
                src={'/voltar-50-b.png'}
                width={30}
                height={30}
                alt="back to home"
            />
        </Link>

        // <div onClick={() => router.push("/")}>
        //     <Image
        //         src={'/voltar-50-b.png'}
        //         width={30}
        //         height={30}
        //         alt="back to home"
        //     />
        // </div>
    )
}