"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Loading from '../loading'

import Magic from '@imgenhancer/app/lib/Magic'

import styles from './style.module.scss'

interface ProcessParams {
    setVisibility: boolean
    process: {
        file: {}
        value?: number
        width?: number
        height?: number
    }
}

export default function Process({ setVisibility, process }: ProcessParams) {

    console.log(process)

    const [urlFile, setUrlFile] = useState('')
    const [urlNewFile, setUrlNewFile] = useState('')

    const download = () => {

    }

    useEffect(() => {
        Magic(process.file, setUrlFile, setUrlNewFile)

    }, [])

    return (
        <div className={styles.container} onClick={() => { setVisibility(false) }}>
            <main onClick={(event) => event.stopPropagation()}>
                {
                    urlNewFile ? (
                        <>
                            <div className={styles.close} onClick={() => { setVisibility(false) }}></div>
                            <div className={styles.content}>
                                <section className={styles.response}>
                                    <div className={styles.figures}>
                                        <div>
                                            <span>Imagem Antiga:</span>
                                            {urlNewFile && <Image
                                                src={urlFile}
                                                alt={'old image'}
                                                width={200}
                                                height={200}
                                            />}
                                        </div>
                                        <div>
                                            <span>Imagem Nova:</span>
                                            {urlNewFile && <Image
                                                src={urlNewFile}
                                                alt={'new image'}
                                                width={200}
                                                height={200}
                                            />}
                                        </div>

                                    </div>

                                    <button type='button'>
                                        <Image
                                            src={'/download-direto-w.png'}
                                            alt='dodnload'
                                            width={15}
                                            height={15}
                                        />
                                        Download</button>
                                </section>

                                <hr />

                                <section className={styles.login}>
                                    <span>Gostaria de salvar suas imagens?</span>
                                    <Link href={'/session/login'}> Login</Link>
                                </section>
                            </div>
                        </>
                    ) : (
                        <Loading />
                    )
                }
            </main>
        </div>
    )
}