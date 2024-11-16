"use client"

import { useEffect, useState } from 'react'

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import { fetchGallery } from '@imgenhancer/app/lib/data'

import Card from '@imgenhancer/app/ui/components/card'
import Infos from '@imgenhancer/app/ui/components/infos'

import './style.scss'
import Loading from '@imgenhancer/app/ui/components/loading'

export default function Page() {
    const [gallery, setGallery] = useState<ICard[]>([])

    const [showInfos, setShowInfos] = useState(false)
    const [cardInfos, setCardInfos] = useState({} as ICard)

    const handleGallery = async () => {
        const data = await fetchGallery() as ICard[]
        setGallery(data)
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