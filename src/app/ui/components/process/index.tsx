"use client"

import Link from 'next/link'
import Image from 'next/image'

import styles from './style.module.scss'
import Loading from '../loading'
import { useEffect, useState } from 'react'
import Enhancer from '@imgenhancer/app/lib/enhancer'

export default function Process({ setVisibility, file }) {

    const [loaded, setLoaded] = useState(false)
    const [urlFile, setUrlFile] = useState('')
    const [newImg, setNewImg] = useState('')

    const reader = new FileReader();

    reader.onload = (e) => {
        setUrlFile(e.target.result)
    };

    reader.readAsDataURL(file)
    function process(file) {
        setNewImg(Enhancer(file))
        if (newImg) {
            setLoaded(true)
        }
    }

    const download = () => {

    }

    useEffect(() => {
        process(urlFile)

    }, [])

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
                                                src={urlFile}
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
                        <>
                            <Loading />
                            {/* <div onClick={process(urlFile)}></div> */}
                        </>


                    )
                }
            </main>
        </div>
    )
}