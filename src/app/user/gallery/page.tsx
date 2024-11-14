"use client"

import Card from '@imgenhancer/app/ui/components/card'

import { gallery } from '@imgenhancer/app/lib/gallery'

import './style.scss'
import { useState } from 'react'
import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'
import Infos from '@imgenhancer/app/ui/components/infos'

export default function Page() {

    const [showInfos, setShowInfos] = useState(false)

    const [cardInfos, setCardInfos] = useState({} as ICard)


    return (
        <div className="gallery">

            {
                gallery.map((card, index) => <Card key={index} card={card} setShowInfos={setShowInfos} setCardInfos={setCardInfos}/>)
            }

            {
                showInfos && <Infos card={cardInfos} setShowInfos={setShowInfos} />
            }

        </div>
    )
}