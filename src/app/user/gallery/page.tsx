"use client"

import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import Card from '@imgenhancer/app/ui/components/card'
import Infos from '@imgenhancer/app/ui/components/infos'
import Loading from '@imgenhancer/app/ui/components/loading'

import { getGallery } from '@imgenhancer/app/lib/api'

import './style.scss'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

    const [gallery, setGallery] = useState<ICard[]>([])

    const [showInfos, setShowInfos] = useState(false)
    const [cardInfos, setCardInfos] = useState({} as ICard)

    const [page, setPage] = useState(1)
    const [length, setLength] = useState(0)

    const handleGallery = async () => {
        const data = await getGallery(page)

        console.log(data)

        if (data.status === 401) {
            sessionStorage.clear()
            router.push('/session/login')
        }

        setGallery(data.gallery)
        setLength(data.length)
    }

    function handlePage(op: "+" | "-") {
        if (op === '-') setPage(page - 1)
        if (op === '+') setPage(page + 1)
    }

    useEffect(() => {
        handleGallery()
    }, [page])

    return (
        <>
            {
                (gallery.length) ? (
                    <div className="gallery">
                        <div className="panel" >
                            {
                                gallery.map((card, index) => <Card key={index} card={card} setShowInfos={setShowInfos} setCardInfos={setCardInfos} />)
                            }
                            {
                                showInfos && <Infos card={cardInfos} setShowInfos={setShowInfos} />
                            }
                        </div >
                        <div className="page">
                            <FiChevronLeft onClick={() => {
                                if (page - 1 != 0) setPage(page - 1)
                            }} />

                            {page}

                            <FiChevronRight onClick={() => {
                                if (page < (length / 6)) setPage(page + 1)
                            }} />
                        </div>
                    </div>
                )
                    : (<Loading />)
            }
        </>
    )
}