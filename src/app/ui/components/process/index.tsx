"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Loading from '../loading'

import Magic from '@imgenhancer/app/lib/Magic'

import { IProcess } from "../../../lib/interfaces/process.interface";

import styles from './style.module.scss'

interface ProcessParams {
    setVisibility: Dispatch<SetStateAction<boolean>>
    process: IProcess
}

export default function Process({ setVisibility, process }: ProcessParams) {

    console.log(process.file)

    const [urlFile, setUrlFile] = useState('')
    const [urlNewFile, setUrlNewFile] = useState('')

    useEffect(() => {
        try {
            if (process !== undefined) {
                Magic(process, setUrlFile, setUrlNewFile)
            }

        } catch (error) {
            console.log(error)
        }

    }, [process])

    return (
        <>
            {urlNewFile ? (
                <div className={styles.process} onClick={() => { setVisibility(false) }}>
                    <main onClick={(event) => event.stopPropagation()}>
                        <div className={styles.close} onClick={() => { setVisibility(false) }}></div>
                        <div className={styles.content}>
                            <section className={styles.response}>
                                <div className={styles.figures}>
                                    <div>
                                        <span>Atteched Image:</span>
                                        {<Image
                                            src={urlFile}
                                            alt={'old image'}
                                            width={240}
                                            height={240}
                                        />}
                                    </div>

                                    <div>
                                        <span>New Image:</span>
                                        {<Image
                                            src={urlNewFile}
                                            alt={'new image'}
                                            width={240}
                                            height={240}
                                        />}
                                    </div>
                                </div>

                                <a href={urlNewFile} download>
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

                            <section className={styles.login}>
                                <span>Would you like save your images?</span>
                                <Link href={'/session/login'}> Login or Sing In</Link>
                            </section>
                        </div>
                    </main>
                </div>
            ) : (<Loading />)
            }
        </>
    )
}