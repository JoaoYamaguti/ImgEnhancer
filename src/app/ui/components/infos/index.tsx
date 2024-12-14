import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import { ICard } from "@imgenhancer/app/lib/interfaces/card.interface";

import { deleteImgInGallery } from "@imgenhancer/app/lib/api";
import { FiXCircle, FiDownload, FiTrash2 } from "react-icons/fi";

import './style.scss'
import { useNotifications } from "../../context/NotificationContext";

interface IInfosParams {
    card: ICard
    setShowInfos: Dispatch<SetStateAction<boolean>>
    refreshCallback: () => void
}

export default function Infos({ card, setShowInfos, refreshCallback }: IInfosParams) {
    const { addNotification } = useNotifications()
    const [showDeleteComponent, setShowDeleteComponent] = useState(false)

    async function deleteImg() {
        await deleteImgInGallery(card.id)

        refreshCallback()

        addNotification('success', "Image deleted.")

        setShowInfos(false)
    }

    return (
        <div className="infos" onClick={() => setShowInfos(false)}>
            <div className="content" onClick={(event) => event.stopPropagation()}>
                <div onClick={() => setShowInfos(false)} className="cancel">
                    <FiXCircle />
                </div>
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
                <div className="legend">

                    <div>
                        <h2>{card.filename}</h2>
                        <span>{new Date(card.created_at).toLocaleDateString("pt-br")}</span>
                    </div>
                    <div onClick={() => setShowDeleteComponent(true)}>
                        <FiTrash2 />
                    </div>
                    {
                        showDeleteComponent && (
                            <div className="delete" onClick={() => setShowDeleteComponent(false)}>
                                <div className="content" onClick={(e) => e.stopPropagation()}>
                                    <p>Make you sure you want delete these images?</p>
                                    <div className="btns">
                                        <button type="button" className="btn" onClick={() => setShowDeleteComponent(false)}>Cancel</button>
                                        <button type="button" className="btn del" onClick={deleteImg}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}