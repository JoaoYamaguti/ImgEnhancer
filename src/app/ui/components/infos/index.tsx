import Image from "next/image";

import { ICard } from "@imgenhancer/app/lib/interfaces/card.interface";
import Link from "next/link";

import { FiXCircle } from "react-icons/fi";

import './style.scss'

export default function Infos({ card, setShowInfos }: ICard) {

    return (
        <div className="infos" onClick={() => setShowInfos(false)}>
            <div className="content" onClick={(event) => event.stopPropagation()}>
                <div className={'close'} onClick={() => { setShowInfos(false) }}><FiXCircle /></div>
                <div className={'content'}>
                    <section className={'response'}>
                        <div className={'figures'}>
                            <div>
                                <span>Atteched Image:</span>
                                {<Image
                                    src={card.caught_file}
                                    alt={'old image'}
                                    width={240}
                                    height={240}
                                />}
                            </div>

                            <div>
                                <span>New Image:</span>
                                {<Image
                                    src={card.new_file}
                                    alt={'new image'}
                                    width={240}
                                    height={240}
                                />}
                            </div>
                        </div>

                        <a href={''} download>
                            <Image
                                src={'/download-direto-w.png'}
                                alt='download'
                                width={25}
                                height={25}
                            />
                            Download New Image
                        </a>
                    </section>
                </div>
            </div>
        </div>
    )

}