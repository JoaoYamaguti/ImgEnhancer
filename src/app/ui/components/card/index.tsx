"use client"

import Image from "next/image"
import { useState } from "react";

import { ICard } from '@imgenhancer/app/lib/interfaces/card.interface'

import { FiInfo } from "react-icons/fi";

import './style.scss'
import Infos from "../infos";

export default function Card({ card }: ICard) {

    const [showInfos, setShowInfos] = useState(false)

    return (
        <div className="card" onClick={() => setShowInfos(true)}>
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

            {
                showInfos && <Infos card={card} setShowInfos={setShowInfos}/>
            }
        </div>
    )
}