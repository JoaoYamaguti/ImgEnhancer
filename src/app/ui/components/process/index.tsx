"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Loading from '../loading'

import Magic from '@imgenhancer/app/lib/Magic'

import { IProcess } from "../../../lib/interfaces/process.interface";

import styles from './style.module.scss'
import { postImg } from '@imgenhancer/app/lib/api'

interface ProcessParams {
    setVisibility: Dispatch<SetStateAction<boolean>>
    process: IProcess
}

export default function Process({ setVisibility, process }: ProcessParams) {
    console.log(process)
    const user = JSON.parse(sessionStorage.getItem('user'))

    const [file, setfile] = useState('')
    const [newFile, setNewFile] = useState('')

    const [filename,] = process.file.name.split('.')

    async function BlobtoBase64(blob: Blob, callback: Dispatch<SetStateAction<string>>) {
        const r = new FileReader();
        r.onload = async (e) => {
            callback(e.target?.result)
        }
        r.readAsDataURL(blob)
    }

    async function enhanceImg() {
        try {
            BlobtoBase64(process.file, setfile)

            await Magic(process, setNewFile)

        } catch (error) {
            console.log(error)
        }
    }

    async function saveImg() {
        const [, base64File] = file.split(',')
        const [, base64NewFile] = newFile.split(',')

        const data = {
            filename,
            caught_file: base64File,
            new_file: base64NewFile
        }
        const response = await postImg(data)

        if (response) return console.log(response)
    }

    useEffect(() => {
        enhanceImg()

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