"use client"

import Link from 'next/link'
import Image from 'next/image'

import styles from './style.module.scss'
import clsx from 'clsx'
import { useState } from 'react'
import Loading from '../loading'

export default function Process({ setVisibility }) {

    const loaded = true

    const download = () => {

    }


    return (
        <div className={styles.container} onClick={() => { setVisibility(false) }}>
            <main onClick={(event) => event.stopPropagation()}>
                {
                    loaded ? (
                        <>
                            <div className={styles.close} onClick={() => { setVisibility(false) }}></div>
                            <div className={styles.content}>
                                <section className={styles.response}>
                                    <div className={styles.figures}>
                                        <div>
                                            <span>Imagem Antiga:</span>
                                            <Image
                                                src={'/documento.png'}
                                                alt={'old image'}
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <div>
                                            <span>Imagem Nova:</span>
                                            <Image
                                                src={'/documento.png'}
                                                alt={'old image'}
                                                width={200}
                                                height={200}
                                            />
                                        </div>

                                    </div>

                                    <button type='button' onClick={(console.log('clicou'))}>
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