import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [day, setRemainingDay] = useState(0);

  useEffect(() => {
    var date1 = new Date();
    var date2 = new Date(2022, 6, 18);
    var diff = new Date(date2.getTime() - date1.getTime());
    var days = diff.getUTCDate() - 1; // Gives day count of difference
    setRemainingDay(days);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gizem'e Tost Çıkartması</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hoşgeldin! </h1>
        <div className={styles.description}>
          Bozcaada tatiline gitmemize {day} gün kaldı
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/serhat_yiilmaaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Serhat Yılmaz
        </a>
      </footer>
    </div>
  );
}
