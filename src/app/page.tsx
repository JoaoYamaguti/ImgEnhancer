'use client'
import Image from 'next/image'
import Link from "next/link";

import { useNotifications } from '../app/ui/context/NotificationContext';

import Footer from './ui/components/footer';
import Header from './ui/components/header';

import styles from "./page.module.scss";

export default function Home() {
  const { addNotification } = useNotifications();

  const handleSuccessNotification = async() => {
    // await addNotification(status:'success', message:'Sucesso na página inicial!');
    addNotification('error', 'Sucesso na página inicial!');

  };

  return (
    <>
    <Header />
      <main className={styles.container}>

        <div className={styles.content}>
          <h1>Enhance, Upscale and more...</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
          <Link href='./enhancer'>Get Start</Link>
          <button type='button' onClick={handleSuccessNotification}>sfagfdg</button>
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
