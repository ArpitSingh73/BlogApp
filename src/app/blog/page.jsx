import React from 'react'
import styles from "./blogpage.module.css"
import Cardlist from '@/components/cardlist/Cardlist'
import Menu from '@/components/menu/Menu'
function BlogPage() {
  return (
    <div className={styles.container}>
          <h1 className={styles.title}>Style Blog</h1>
          <div className={styles.content}>
              <Cardlist></Cardlist>
              <Menu></Menu>
          </div>
    </div>
  )
}

export default BlogPage
