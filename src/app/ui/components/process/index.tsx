"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { IProcess } from "../../../lib/interfaces/process.interface";

import { postImg } from '@imgenhancer/app/lib/api'
import Magic from '@imgenhancer/app/lib/Magic'

import Loading from '../loading'

import styles from './style.module.scss'
import { useNotifications } from '../../context/NotificationContext';

interface ProcessParams {
    setVisibility: Dispatch<SetStateAction<boolean>>
    process: Partial<IProcess>
}

export default function Process({ setVisibility, process }: ProcessParams) {   
    const {addNotification} = useNotifications()
    
    const user = JSON.parse(sessionStorage.getItem('user') as string)

    const [file, setfile] = useState('')
    const [newFile, setNewFile] = useState('')

    async function BlobtoBase64(blob: Blob, callback: Dispatch<SetStateAction<string>>) {
        const r = new FileReader();
        r.onload = async (e) => {
            const base64 = e.target?.result

            callback(base64 as string)
        }
        r.readAsDataURL(blob)
    }

    async function enhanceImg() {
        try {
            if (process.file !== undefined) BlobtoBase64(process.file, setfile)

            await Magic(process, setNewFile)

        } catch (error) {
            console.log(error)
        }
    }

    async function saveImg() {
        let filename = ""

        if (process.file !== undefined) {filename = process.file.name.split('.')[0]}

        const data = {
            filename,
            caught_file: file,
            new_file: newFile
        }
        const response = await postImg(data)

        if (response) {
            addNotification('success', "Image saved.")
            return
        }

    }

    useEffect(() => {
        enhanceImg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {newFile ? (
                <div className={styles.process} onClick={() => { setVisibility(false) }}>
                    <main onClick={(event) => event.stopPropagation()}>
                        <div className={styles.close} onClick={() => { setVisibility(false) }}></div>
                        <div className={styles.content}>
                            <section className={styles.response}>
                                <div className={styles.figures}>
                                    <div>
                                        <span>Attached Image:</span>
                                        {<Image
                                            src={file}
                                            alt={'old image'}
                                            width={240}
                                            height={240}
                                        />}
                                    </div>

                                    <div>
                                        <span>New Image:</span>
                                        {<Image
                                            src={newFile}
                                            alt={'new image'}
                                            width={240}
                                            height={240}
                                        />}
                                    </div>
                                </div>

                                <a href={newFile} download>
                                    <Image
                                        src={'/download-direto-w.png'}
                                        alt='download'
                                        width={25}
                                        height={25}
                                    />
                                    Download New Image
                                </a>
                            </section>

                            <hr />

                            {
                                user ? (
                                    <button type='button' onClick={saveImg}>
                                        Save Image
                                    </button>
                                ) : (
                                    <section className={styles.login}>
                                        <span>Would you like save your images?</span>
                                        <Link href={'/session/login'}>Login or Sing In</Link>
                                    </section>
                                )
                            }
                        </div>
                    </main>
                </div>
            ) : (<Loading />)
            }
        </>
    )
}