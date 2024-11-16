import Image from "next/image";

import { ICard } from "@imgenhancer/app/lib/interfaces/card.interface";

import { FiXCircle, FiDownload } from "react-icons/fi";

import './style.scss'

export default function Infos({ card, setShowInfos }: ICard) {
    console.log(card.caught_file.split(','))

    const reader = new FileReader()

    reader.onload = ((e) => {
        console.log(e)
    })

    reader.readAsDataURL(new Blob([card.caught_file]))

    return (
        <div className="infos" onClick={() => setShowInfos(false)}>
            <div className="content" onClick={(event) => event.stopPropagation()}>
                <FiXCircle onClick={() => setShowInfos(false)}/>
                <div className='figures'>
                    <div>
                        <span>Atteched Image:</span>
                        {<Image
                            src={card.caught_file}
                            alt={'old image'}
                            width={240}
                            height={240}
                        />}
                        <a href={card.caught_file} download>
                            <FiDownload />
                        </a>
                    </div>

                    <div>
                        <span>New Image:</span>
                        {<Image
                            src={card.new_file}
                            alt={'new image'}
                            width={240}
                            height={240}
                        />}
                        <a href={card.new_file} download>
                            <FiDownload />
                        </a>
                    </div>
                </div>
                <h2>
                {card.filename}
                </h2>
                <span>{card.created_at.toLocaleDateString()}</span>
            </div>
        </div>
    )
}