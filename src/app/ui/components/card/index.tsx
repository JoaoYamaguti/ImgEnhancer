"use client"

import Image from "next/image"

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import { FiInfo } from "react-icons/fi";

import './style.scss'

export default function Card({ card, setShowInfos, setCardInfos }: ICard) {

    return (
        <div className="card" onClick={() => {
            setCardInfos(card)
            setShowInfos(true)
            }}>
            <div className="imgs">
                <Image
                    src={card.caught_file}
                    width={100}
                    height={100}
                    alt='caught_file'
                />
                <Image
                    src={card.new_file}
                    width={100}
                    height={100}
                    alt='caught_file'
                />
            </div>
            <div className="legend">
                <div className="label">
                    <p>filename</p>
                    <span>{String(card.created_at.toLocaleDateString())}</span>
                </div>
                    <FiInfo />
            </div>
        </div>
    )
}