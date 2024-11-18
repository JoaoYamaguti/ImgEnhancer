"use client"

import { useEffect, useState } from 'react'

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import Card from '@imgenhancer/app/ui/components/card'
import Infos from '@imgenhancer/app/ui/components/infos'
import Loading from '@imgenhancer/app/ui/components/loading'

import { getGallery } from '@imgenhancer/app/lib/api'

import './style.scss'

export default function Page() {
    const [gallery, setGallery] = useState<ICard[]>([])

    const [showInfos, setShowInfos] = useState(false)
    const [cardInfos, setCardInfos] = useState({} as ICard)

    const [page, SetPage] = useState(1)

    const handleGallery = async () => {
        const data = await getGallery(page)
        await setGallery(data)
        console.log(gallery)
    }

    useEffect(() => {
        handleGallery()
    }, [])

    return (
        <>
            {
                (gallery.length) ? (
                    <div className="gallery" >
                        {
                            gallery.map((card, index) => <Card key={index} card={card} setShowInfos={setShowInfos} setCardInfos={setCardInfos} />)
                        }

                        {
                            showInfos && <Infos card={cardInfos} setShowInfos={setShowInfos} />
                        }
                    </div >
                )
                    : (<Loading />)
            }
        </>
    )
}