import Image from "next/image";
import styles from "./about.module.css";



export const metadata = {
  title: "About",
  description: "Welcome to about page",
};
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>.</h2>
        <h1 className={styles.title}>
          I write my personal blogs regarding my experiences & new tech I am
          learning.
        </h1>
        <p className={styles.desc}>
          I developed this project to implement my learnings of NextJS and
          Docker. The project itself is an imitation of tutorial of Lamadev
          on NextJS.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1+</h1>
            <p>Year of React experience</p>
          </div>
          <div className={styles.box}>
            <h1>1+</h1>
            <p>Year of Nextjs experience</p>
          </div>
          <div className={styles.box}>
            <h1>1+</h1>
            <p>Year of JavaScript experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
