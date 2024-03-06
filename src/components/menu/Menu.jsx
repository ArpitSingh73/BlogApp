import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link';
import MenuPosts from '../menupost/MenuPosts';

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
    
    <MenuPosts withimage={false}></MenuPosts>

      {/*  */}
      {/*  */}
      {/*  */}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        
        <Link href="/blog?cat=style" className={`${styles.ctegortItem} ${styles.style}`}></Link>
        <Link href="/blog?cat=style" className={`${styles.ctegortItem} ${styles.style}`}></Link>
        <Link href="/blog?cat=style" className={`${styles.ctegortItem} ${styles.style}`}></Link>
        <Link href="/blog?cat=style" className={`${styles.ctegortItem} ${styles.style}`}></Link>
        <Link href="/blog?cat=style" className={`${styles.ctegortItem} ${styles.style}`}></Link>
</div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's pick</h1>
     <MenuPosts withimage={true}></MenuPosts>
    </div>
  );
}

export default Menu
