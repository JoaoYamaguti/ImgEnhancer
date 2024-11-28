'use client'
import Image from 'next/image'
import Link from "next/link";

import Footer from './ui/components/footer';
import Header from './ui/components/header';

import styles from "./page.module.scss";

export default function Home() {

  return (
    <>
    <Header />
      <main className={styles.container}>

        <div className={styles.content}>
          <h1>Enhance, Upscale and more...</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
          <Link href='./enhancer'>Get Start</Link>
        </div>

        <div className={styles.imagebg}>
          <Image
            src='/documento.png'
            width={250}
            height={250}
            alt='documents'
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
