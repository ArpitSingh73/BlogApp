import React from 'react'
import styles from "./card.module.css"
import Link from 'next/link';
import Image  from 'next/image';
function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.deatil}>
          <span className={styles.date}>date -</span>
          <span className={styles.category}>category</span>
        </div>
        <Link href="/">
          <h1>dewav reqag thw r nyw wny</h1>
        </Link>
        <p className={styles.desc}>
          lorem efv va fb aef erwee rget nhyrn teq r wdsac xcvb gbsgnrh rynhqt
          reqewr e23r 4ref gteg thh yrn dsf gre gtr h yej{" "}
        </p>
        <Link href="/"> read more</Link>
      </div>
    </div>
  );
}

export default Card
