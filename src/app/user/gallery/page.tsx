"use client"

import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiFrown } from "react-icons/fi";

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import Card from '@imgenhancer/app/ui/components/card'
import Infos from '@imgenhancer/app/ui/components/infos'
import Loading from '@imgenhancer/app/ui/components/loading'

import { getGallery } from '@imgenhancer/app/lib/api'

import './style.scss'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

    const [gallery, setGallery] = useState<ICard[] | null>(null)

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
            return
        }

        setGallery(data.gallery)
        setLength(data.length)
    }

    useEffect(() => {
        handleGallery()
    }, [page])

    return (
        <div className="gallery">
            {
                (gallery !== null) ? (
                    (gallery.length !== 0) ? (
                        <div className="container">
                            <div className="sup">
                                <div className="panel" >
                                    {
                                        gallery.map((card, index) => <Card key={index} card={card} setShowInfos={setShowInfos} setCardInfos={setCardInfos} />)
                                    }
                                </div >
                            </div>
                            {
                                showInfos && <Infos card={cardInfos} setShowInfos={setShowInfos} refreshCallback={handleGallery}/>
                            }
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
                    ) : (
                        <div className='noImg'>
                            <FiFrown />
                            <p>
                                No image here <br /> Try enhance and save some images and go back here
                            </p>
                        </div>
                    )
                )
                    : (<Loading />)
            }
        </div>
    )
}