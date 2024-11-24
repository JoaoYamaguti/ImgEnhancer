"use client"

import Image from "next/image"

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import { FiInfo } from "react-icons/fi";

import './style.scss'
import { Dispatch, SetStateAction } from "react";

interface ICardParams {
    card: ICard
    setShowInfos: Dispatch<SetStateAction<boolean>>
    setCardInfos: Dispatch<SetStateAction<ICard>>
}

export default function Card({ card, setShowInfos, setCardInfos }: ICardParams) {

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
                    alt='new_file'
                />
            </div>
            <div className="legend">
                <div className="label">
                    <p>{card.filename}</p>
                    <span>{new Date(card.created_at).toLocaleDateString("pt-br")}</span>
                </div>
                    <FiInfo />
            </div>
        </div>
    )
}