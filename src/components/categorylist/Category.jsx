import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Category() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular categories</h1>
      <div className={styles.categories}>
       
          <Link href="blog?cat=style" className={`${styles.Category} ${styles.style}`}>
            <Image src="./style.png" alt="" width={32} height={32} className={styles.image}/>Coding
          </Link>
          <Link href="blog?cat=style" className={`${styles.Category} ${styles.style}`}>
            <Image src="./style.png" alt="" width={32} height={32} className={styles.image}/>Coding
          </Link>
          <Link href="blog?cat=style" className={`${styles.Category} ${styles.style}`}>
            <Image src="./style.png" alt="" width={32} height={32} className={styles.image}/>Coding
          </Link>
          <Link href="blog?cat=style" className={`${styles.Category} ${styles.style}`}>
            <Image src="./style.png" alt="" width={32} height={32} className={styles.image}/>Coding
          </Link>
          <Link href="blog?cat=style" className={`${styles.Category} ${styles.style}`}>
            <Image src="./style.png" alt="" width={32} height={32} className={styles.image}/>Coding
          </Link>
          <Link href="blog?cat=style" className={`${styles.Category} ${styles.style}`}>
            <Image src="./style.png" alt="" width={32} height={32} className={styles.image}/>Coding
          </Link>
     
      </div>
    </div>
  )
}

export default Category
