import Image from "next/image";
import styles from "./home.module.css";
import Head from "next/head";
import Link from "next/link";


const Home = () => {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>My Personal Blogs.</h1>
        <p className={styles.desc}>Welcome there! we provide one of the original and highest quality blogs for Tech Enthusiasts. Read high quality blogs for free, just create an account and you are good to go. </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link href="/about">Learn More</Link>
          </button>
          <button className={styles.button}>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
        <div className={styles.brands}>
          {/* <Image src="/brands.png" alt="" fill className={styles.brandImg} /> */}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
