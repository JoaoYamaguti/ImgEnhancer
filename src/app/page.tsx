// import Image from 'next/image'
import styles from "./page.module.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    // <div className={styles.page}>
    <div className={styles.home}>
      <Header />

      <main>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Enhance, Upscale and more...</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
            <a href="./enhancer/index.tsx">Get Start</a>
          </div>
          <div className={styles.imagebg}>
           <div className={styles.image}></div>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}
