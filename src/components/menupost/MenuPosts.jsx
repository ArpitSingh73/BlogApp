import React from 'react'
import styles from "./menupost.module.css"
import Link from "next/link"
import Image from 'next/image';
function MenuPosts({withimage}) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        { withimage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}> travel</span>
          <h3 className={styles.postTitle}>
            {" "}
            ugyfy liuojo rdytryt o9u89o p9i hmvjhvf
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Arpit Singh</span>
            <span className={styles.date}>565789</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        { withimage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}> travel</span>
          <h3 className={styles.postTitle}>
            {" "}
            ugyfy liuojo rdytryt o9u89o p9i hmvjhvf
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Arpit Singh</span>
            <span className={styles.date}>565789</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        { withimage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}> travel</span>
          <h3 className={styles.postTitle}>
            {" "}
            ugyfy liuojo rdytryt o9u89o p9i hmvjhvf
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Arpit Singh</span>
            <span className={styles.date}>565789</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        { withimage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}> travel</span>
          <h3 className={styles.postTitle}>
            {" "}
            ugyfy liuojo rdytryt o9u89o p9i hmvjhvf
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Arpit Singh</span>
            <span className={styles.date}>565789</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        { withimage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}> travel</span>
          <h3 className={styles.postTitle}>
            {" "}
            ugyfy liuojo rdytryt o9u89o p9i hmvjhvf
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Arpit Singh</span>
            <span className={styles.date}>565789</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts
